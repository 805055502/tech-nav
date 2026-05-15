const assert = require("node:assert/strict");
const NavLocalManager = require("../js/nav-local-manager.js");

function createStorage() {
  const data = new Map();
  return {
    getItem(key) {
      return data.has(key) ? data.get(key) : null;
    },
    setItem(key, value) {
      data.set(key, String(value));
    },
    removeItem(key) {
      data.delete(key);
    },
  };
}

const baseNavData = {
  "默认分类": {
    "默认分组": [
      {
        title: "示例网站",
        desc: "示例描述",
        url: "https://example.com",
        logoUrl: "",
        keywords: "example",
      },
    ],
  },
};

{
  const navData = NavLocalManager.cloneNavData(baseNavData);
  NavLocalManager.addCategory(navData, "AI工具", "对话模型");

  assert.deepEqual(Object.keys(navData["AI工具"]), ["对话模型"]);
  assert.deepEqual(navData["AI工具"]["对话模型"], []);
}

{
  const navData = NavLocalManager.cloneNavData(baseNavData);
  NavLocalManager.addCategory(navData, "空分类");

  assert.deepEqual(navData["空分类"], {});
}

{
  const navData = NavLocalManager.cloneNavData(baseNavData);
  NavLocalManager.addSubCategory(navData, "默认分类", "新增分组");
  NavLocalManager.addNavItem(navData, "默认分类", "新增分组", {
    title: "OpenAI",
    desc: "AI 平台",
    url: "https://openai.com",
  });

  assert.equal(navData["默认分类"]["新增分组"][0].title, "OpenAI");
  assert.equal(navData["默认分类"]["新增分组"][0].keywords, "OpenAI AI 平台 https://openai.com");
  assert.throws(
    () =>
      NavLocalManager.addNavItem(navData, "默认分类", "新增分组", {
        title: "OpenAI",
        desc: "重复",
        url: "https://example.org",
      }),
    /已存在/
  );
}

{
  const navData = NavLocalManager.cloneNavData(baseNavData);
  NavLocalManager.deleteNavItem(navData, "默认分类", "默认分组", "示例网站");
  assert.equal(navData["默认分类"]["默认分组"].length, 0);

  NavLocalManager.deleteSubCategory(navData, "默认分类", "默认分组");
  assert.deepEqual(navData["默认分类"], {});

  NavLocalManager.deleteCategory(navData, "默认分类");
  assert.deepEqual(navData, {});
}

{
  const storage = createStorage();
  const changes = NavLocalManager.createChangeSet();
  NavLocalManager.recordOperation(changes, "addCategory", {
    category: "AI工具",
  });
  NavLocalManager.recordOperation(changes, "addSubCategory", {
    category: "AI工具",
    subCategory: "对话模型",
  });
  NavLocalManager.recordOperation(changes, "addNavItem", {
    category: "AI工具",
    subCategory: "对话模型",
    item: {
      title: "OpenAI",
      desc: "AI 平台",
      url: "https://openai.com",
      logoUrl: "",
      keywords: "OpenAI",
      highlight: false,
      recommended: false,
    },
  });
  NavLocalManager.recordOperation(changes, "deleteNavItem", {
    category: "默认分类",
    subCategory: "默认分组",
    title: "示例网站",
  });

  NavLocalManager.saveChangeSet(storage, changes);
  const stored = storage.getItem(NavLocalManager.STORAGE_KEY);

  assert.deepEqual(NavLocalManager.loadChangeSet(storage), changes);
  assert.ok(stored.includes('"operations"'));
  assert.ok(!stored.includes("示例描述"));

  const applied = NavLocalManager.applyChangeSet(baseNavData, changes);
  assert.equal(applied["默认分类"]["默认分组"].length, 0);
  assert.equal(applied["AI工具"]["对话模型"][0].title, "OpenAI");

  storage.setItem(NavLocalManager.STORAGE_KEY, "{bad json");
  assert.deepEqual(NavLocalManager.loadChangeSet(storage), NavLocalManager.createChangeSet());
}
