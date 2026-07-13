const repo = "https://github.com/zizegak916-glitch/renjianrengcun/blob/main/";
const characters = [
  ["01", "陈亦 / 沈怀", "现代记忆仍在；沈怀之死未能闭合。"],
  ["02", "陆执灯", "追索被压住的真实与无法落定的死亡。"],
  ["03", "罗小满", "导淮的人。先看下湾能不能活。"],
  ["04", "曹留", "录房主事，能听见不该留下的动静。"],
  ["05", "杜衡", "讲一点、藏一点；把人放进风险更低的格。"],
  ["06", "裴玄纪", "接水与接事的人，最后自己也成了承重物。"],
  ["07", "沈确", "拆责的人，把后果拆到无人能追。"],
  ["08", "顾廷璋", "吞声的人，把伤害收成可被承认的口径。"]
];
const chapters = [
  ["01", "死人按手", "written"], ["02", "灯压印泥", "written"], ["03", "杜衡换格", "written"],
  ["04", "袖口旧墨", "written"], ["05", "肩背撞痕", "written"], ["06", "纸边割手", "written"],
  ["07", "断声有人听", "written"], ["08", "后门短刀", "written"], ["09", "废车水痕", "written"],
  ["10", "破牌开门", "outline"], ["11", "旧鞋汤钱", "written"], ["12", "巷口盯梢", "written"],
  ["13", "死人夜衣", "outline"], ["14", "鬼敲值房", "outline"], ["15", "旧影反压", "outline"]
];
const documents = [
  ["第一卷大纲", "人物主驱动执行索引", "人间仍存_第一卷全量重写大纲_v13.2_人物主驱动版.md", "大纲"],
  ["Y22 情节重构", "人物驱动与性格反应", "人间仍存_第一卷_Y22_情节重构_人物驱动性格反应版.md", "大纲"],
  ["前段节奏", "旧 001–114 合并十四章", "人间仍存_第一卷_Y22_前段起点节奏梳理_旧001-114合并14章.md", "节奏"],
  ["候 / 补痕 / 绝墨", "能力与记录逻辑修正", "人间仍存_Codex补丁_候_补痕_绝墨记录逻辑_修正版.md", "设定"],
  ["补丁集 v0.6", "世界观与执行补丁", "人间仍存_补丁集_v0.6.txt", "设定"],
  ["三派领头", "格式化怪物补丁", "三派领头_格式化怪物_补丁.txt", "人物"],
  ["排雷手册", "三十六条写作禁区", "排雷手册_v2.1_36条.md", "规范"],
  ["楔补丁", "关于假历史与刻痕", "楔补丁.txt", "设定"],
  ["第一卷 v13.4", "人物番外嵌入执行索引", "人间仍存_第一卷_v13.4_人物番外嵌入版_执行索引.md", "大纲"],
  ["第一卷 v13.5", "跨卷人物回补执行索引", "人间仍存_第一卷_v13.5_跨卷人物回补版_执行索引.md", "大纲"],
  ["万流名册", "完整世界观文本", "wanliu_complete.txt", "世界"],
  ["普通明朝重跑", "第一卷实验性大纲", "第一卷大纲_普通明朝重跑版_v1.2.md", "归档"]
];
const characterGrid = document.querySelector("#character-grid");
characterGrid.innerHTML = characters.map(([no,name,desc]) => `<article class="character" data-no="${no}"><span>${no} / CHARACTER</span><h3>${name}</h3><p>${desc}</p></article>`).join("");
const chapterList = document.querySelector("#chapter-list");
function renderChapters(filter = "all") {
  chapterList.innerHTML = chapters.filter(([, , state]) => filter === "all" || filter === state).map(([no,title,state]) => `<li><span class="chapter-number">${no}</span><span class="chapter-title">${title}</span><span class="chapter-status">${state === "written" ? "已写正文" : "章节大纲"}</span></li>`).join("");
}
renderChapters();
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => { document.querySelector(".filter.active").classList.remove("active"); button.classList.add("active"); renderChapters(button.dataset.filter); }));
const documentGrid = document.querySelector("#document-grid");
function renderDocuments(query = "") {
  const selected = documents.filter(doc => doc.join(" ").toLowerCase().includes(query.toLowerCase()));
  documentGrid.innerHTML = selected.map(([name,desc,path,type]) => `<a class="document-card" target="_blank" rel="noreferrer" href="${repo + encodeURIComponent(path)}"><p>${type.toUpperCase()} / ARCHIVE</p><h3>${name}</h3><span>${desc} ↗</span></a>`).join("");
  document.querySelector("#search-status").textContent = query ? `找到 ${selected.length} 份相关档案` : `已收录 ${documents.length} 份核心文档`;
}
renderDocuments();
document.querySelector("#document-search").addEventListener("input", event => renderDocuments(event.target.value.trim()));
document.addEventListener("keydown", event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#document-search").focus(); } });
const menu = document.querySelector(".menu-button"), nav = document.querySelector("nav");
menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", open); });
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }));
document.querySelector("#year").textContent = new Date().getFullYear();
