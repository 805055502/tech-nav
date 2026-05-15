(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.NavLocalManager = api;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const STORAGE_KEY = "tech-nav-custom-nav-data";
  const CHANGE_SET_VERSION = 1;

  function cloneNavData(navData) {
    return JSON.parse(JSON.stringify(navData || {}));
  }

  function cloneValue(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeName(name, label) {
    const value = String(name || "").trim();
    if (!value) throw new Error(`${label}不能为空`);
    return value;
  }

  function normalizeUrl(url) {
    const value = String(url || "").trim();
    if (!value) throw new Error("网址不能为空");
    try {
      new URL(value);
      return value;
    } catch (error) {
      throw new Error("网址格式不正确，请以 http:// 或 https:// 开头");
    }
  }

  function walkItems(navData, callback) {
    Object.keys(navData || {}).forEach((category) => {
      const categoryValue = navData[category];
      if (Array.isArray(categoryValue)) {
        categoryValue.forEach((item) => callback(item, category, ""));
        return;
      }
      Object.keys(categoryValue || {}).forEach((subCategory) => {
        const items = categoryValue[subCategory];
        if (Array.isArray(items)) {
          items.forEach((item) => callback(item, category, subCategory));
        }
      });
    });
  }

  function hasTitle(navData, title) {
    let found = false;
    walkItems(navData, (item) => {
      if (item && item.title === title) found = true;
    });
    return found;
  }

  function findNavItem(navData, categoryName, subCategoryName, title) {
    const category = normalizeName(categoryName, "分类名称");
    const subCategory = normalizeName(subCategoryName, "分组名称");
    const siteTitle = normalizeName(title, "网站名称");
    const items =
      navData[category] && !Array.isArray(navData[category])
        ? navData[category][subCategory]
        : null;
    if (!Array.isArray(items)) return null;
    const item = items.find((navItem) => navItem.title === siteTitle);
    return item ? cloneValue(item) : null;
  }

  function addCategory(navData, categoryName, defaultSubCategoryName) {
    const category = normalizeName(categoryName, "分类名称");
    if (navData[category]) throw new Error(`分类“${category}”已存在`);
    const subCategory = String(defaultSubCategoryName || "").trim();
    navData[category] = subCategory ? { [subCategory]: [] } : {};
    return navData;
  }

  function deleteCategory(navData, categoryName) {
    const category = normalizeName(categoryName, "分类名称");
    delete navData[category];
    return navData;
  }

  function addSubCategory(navData, categoryName, subCategoryName) {
    const category = normalizeName(categoryName, "分类名称");
    const subCategory = normalizeName(subCategoryName, "分组名称");
    if (!navData[category]) navData[category] = {};
    if (Array.isArray(navData[category])) {
      navData[category] = { 默认分组: navData[category] };
    }
    if (navData[category][subCategory]) {
      throw new Error(`分组“${subCategory}”已存在`);
    }
    navData[category][subCategory] = [];
    return navData;
  }

  function deleteSubCategory(navData, categoryName, subCategoryName) {
    const category = normalizeName(categoryName, "分类名称");
    const subCategory = normalizeName(subCategoryName, "分组名称");
    if (navData[category] && !Array.isArray(navData[category])) {
      delete navData[category][subCategory];
    }
    return navData;
  }

  function normalizeNavItem(navData, item) {
    const title = normalizeName(item && item.title, "网站名称");
    if (hasTitle(navData, title)) throw new Error(`网站“${title}”已存在`);
    const desc = String((item && item.desc) || "").trim();
    const url = normalizeUrl(item && item.url);
    const logoUrl = String((item && item.logoUrl) || "").trim();
    const keywords = String((item && item.keywords) || "").trim();
    return {
      title,
      desc,
      url,
      logoUrl,
      keywords: keywords || [title, desc, url].filter(Boolean).join(" "),
      highlight: Boolean(item && item.highlight),
      recommended: Boolean(item && item.recommended),
    };
  }

  function addNavItem(navData, categoryName, subCategoryName, item) {
    const category = normalizeName(categoryName, "分类名称");
    const subCategory = normalizeName(subCategoryName, "分组名称");
    if (!navData[category]) addCategory(navData, category, subCategory);
    if (Array.isArray(navData[category])) {
      navData[category] = { 默认分组: navData[category] };
    }
    if (!navData[category][subCategory]) {
      navData[category][subCategory] = [];
    }
    navData[category][subCategory].push(normalizeNavItem(navData, item));
    return navData;
  }

  function deleteNavItem(navData, categoryName, subCategoryName, title) {
    const category = normalizeName(categoryName, "分类名称");
    const subCategory = normalizeName(subCategoryName, "分组名称");
    const siteTitle = normalizeName(title, "网站名称");
    const items =
      navData[category] && !Array.isArray(navData[category])
        ? navData[category][subCategory]
        : null;
    if (Array.isArray(items)) {
      navData[category][subCategory] = items.filter(
        (item) => item.title !== siteTitle
      );
    }
    return navData;
  }

  function createChangeSet() {
    return {
      version: CHANGE_SET_VERSION,
      operations: [],
    };
  }

  function normalizeChangeSet(value) {
    if (
      value &&
      value.version === CHANGE_SET_VERSION &&
      Array.isArray(value.operations)
    ) {
      return {
        version: CHANGE_SET_VERSION,
        operations: value.operations.filter(
          (operation) => operation && typeof operation.type === "string"
        ),
      };
    }
    return createChangeSet();
  }

  function loadChangeSet(storage) {
    try {
      const value = storage.getItem(STORAGE_KEY);
      return value ? normalizeChangeSet(JSON.parse(value)) : createChangeSet();
    } catch (error) {
      return createChangeSet();
    }
  }

  function saveChangeSet(storage, changeSet) {
    storage.setItem(STORAGE_KEY, JSON.stringify(normalizeChangeSet(changeSet)));
  }

  function recordOperation(changeSet, type, payload) {
    const target = normalizeChangeSet(changeSet);
    if (target !== changeSet) {
      changeSet.version = target.version;
      changeSet.operations = target.operations;
    }
    changeSet.operations.push({
      type,
      payload: cloneValue(payload || {}),
    });
    return changeSet;
  }

  function applyOperation(navData, operation) {
    const payload = operation.payload || {};
    switch (operation.type) {
      case "addCategory":
        if (!navData[payload.category]) {
          addCategory(navData, payload.category);
        }
        break;
      case "deleteCategory":
        deleteCategory(navData, payload.category);
        break;
      case "addSubCategory":
        if (!navData[payload.category]) {
          addCategory(navData, payload.category);
        }
        if (
          navData[payload.category] &&
          !Array.isArray(navData[payload.category]) &&
          !navData[payload.category][payload.subCategory]
        ) {
          addSubCategory(navData, payload.category, payload.subCategory);
        }
        break;
      case "deleteSubCategory":
        deleteSubCategory(navData, payload.category, payload.subCategory);
        break;
      case "addNavItem":
        if (payload.item && !hasTitle(navData, payload.item.title)) {
          addNavItem(
            navData,
            payload.category,
            payload.subCategory,
            payload.item
          );
        }
        break;
      case "deleteNavItem":
        deleteNavItem(
          navData,
          payload.category,
          payload.subCategory,
          payload.title
        );
        break;
    }
  }

  function applyChangeSet(baseNavData, changeSet) {
    const navData = cloneNavData(baseNavData);
    normalizeChangeSet(changeSet).operations.forEach((operation) => {
      applyOperation(navData, operation);
    });
    return navData;
  }

  function applyStoredNavData(storage, baseNavData) {
    return applyChangeSet(baseNavData, loadChangeSet(storage));
  }

  return {
    STORAGE_KEY,
    cloneNavData,
    addCategory,
    deleteCategory,
    addSubCategory,
    deleteSubCategory,
    addNavItem,
    deleteNavItem,
    findNavItem,
    createChangeSet,
    loadChangeSet,
    saveChangeSet,
    recordOperation,
    applyChangeSet,
    applyStoredNavData,
  };
});
