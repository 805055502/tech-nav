const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");

[
  "先选位置",
  "再填网站",
  "网站保存在哪里",
  "只需要填写名称和网址，其他内容可以留空",
  "整理分类",
  "管理当前分组的网站",
].forEach((text) => {
  assert.ok(html.includes(text), `导航管理界面缺少引导文案：${text}`);
});

[
  'data-nav-manager-tab="add-site"',
  'data-nav-manager-tab="categories"',
  'data-nav-manager-tab="sites"',
  'data-nav-manager-panel="add-site"',
  'data-nav-manager-panel="categories"',
  'data-nav-manager-panel="sites"',
].forEach((marker) => {
  assert.ok(html.includes(marker), `导航管理界面没有拆成独立功能页：${marker}`);
});

assert.ok(
  html.includes('data-nav-manager-panel="categories" class="hidden'),
  "整理分类页面默认不应和添加网站显示在同一屏"
);
assert.ok(
  html.includes('data-nav-manager-panel="sites" class="hidden'),
  "删除网站页面默认不应和添加网站显示在同一屏"
);

[
  "site-category-label",
  "site-subcategory-label",
  "site-title-label",
  "site-url-label",
  "site-desc-label",
].forEach((id) => {
  assert.ok(html.includes(`id="${id}"`), `导航管理表单缺少固定字段标签：${id}`);
});

[
  'data-category-section="create-category"',
  'data-category-section="create-subcategory"',
  'data-category-section="delete-category-items"',
  "第 1 步：新增大分类",
  "第 2 步：给已有分类添加小分组",
  "危险操作：删除分类或分组",
].forEach((marker) => {
  assert.ok(html.includes(marker), `整理分类页面布局不够清晰：${marker}`);
});

{
  const createCategorySection = html.match(
    /<section data-category-section="create-category"[\s\S]*?<\/section>/
  );
  assert.ok(createCategorySection, "缺少新增大分类区域");
  assert.ok(
    createCategorySection[0].includes("category-card"),
    "新增大分类区域没有使用统一布局"
  );
  assert.ok(
    !createCategorySection[0].includes("new-category-subcategory"),
    "新增大分类区域不应再包含默认小分组输入"
  );

  const createSubCategorySection = html.match(
    /<section data-category-section="create-subcategory"[\s\S]*?<\/section>/
  );
  assert.ok(createSubCategorySection, "缺少新增小分组区域");
  assert.ok(
    createSubCategorySection[0].includes("category-card"),
    "新增小分组区域没有使用统一布局"
  );

  const deleteSection = html.match(
    /<section data-category-section="delete-category-items"[\s\S]*?<\/section>/
  );
  assert.ok(deleteSection, "缺少删除分类或分组的独立区域");
  const sectionHtml = deleteSection[0];
  assert.ok(sectionHtml.includes("category-card"), "删除区域没有使用统一布局");
  assert.ok(
    sectionHtml.includes('id="manage-subcategory-category-shadow"'),
    "删除区域缺少可选择当前大分类的下拉框"
  );
  assert.ok(
    !sectionHtml.includes('id="manage-subcategory-category-shadow"') ||
      !/<select[\s\S]*id="manage-subcategory-category-shadow"[\s\S]*disabled/.test(sectionHtml),
    "删除区域的大分类下拉框不应该被禁用"
  );
  assert.ok(
    sectionHtml.indexOf("删除当前大分类") < sectionHtml.indexOf("删除选中的小分组"),
    "删除大分类按钮应放在删除小分组按钮之前"
  );
}
