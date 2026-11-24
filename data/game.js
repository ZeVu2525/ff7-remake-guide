// ゲームごとの設定はここだけを直す。画面と保存キーは、このオブジェクトを読んで動く。
const MAIN_CHAPTERS = Array.from({ length: 18 }, (_, index) => {
  const number = index + 1;
  return {
    id: "ch" + String(number).padStart(2, "0"),
    title: "Chapter " + number
  };
});

const GAME = {
  id: "ff7r",
  title: "FINAL FANTASY VII REMAKE",
  subtitle: "攻略ガイド",
  storage: {
    state: "ff7r-guide-state-v1",
    textEdits: "ff7r-text-edits-v1",
    textEditMode: "ff7r-text-edit-mode",
    cardEdits: "ff7r-card-edits-v1",
    cardEditMode: "ff7r-card-edit-mode",
    chapterFilter: "ff7r-guide-chapter-filter",
    theme: "ff7r-guide-theme",
    backup: "ff7r-guide-state-v1-last-backup"
  },
  cache: "ff7r-guide-v47",
  cacheFiles: [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./favicon.svg",
    "./app.js",
    "./edit-mode.js",
    "./progress.js",
    "./zip-store.js",
    "./image-library.js",
    "./card-edit.js",
    "./data/game.js",
    "./data/route.js",
    "./data/catalogs.js",
    "./data/maps.js",
    "./data/templates.js",
    "./data/settings.js",
    "./data/images.js",
    "./data/enemies.js"
  ],
  themes: [
    { id: "light", label: "読みやすいライト" },
    { id: "dark", label: "シンプルダーク" },
    { id: "accent", label: "ハイコントラスト" }
  ],
  tracks: [
    { id: "main", label: "本編" },
    { id: "hard", label: "HARD" },
    { id: "intermission", label: "INTERmission" }
  ],
  chapters: {
    main: MAIN_CHAPTERS,
    hard: MAIN_CHAPTERS,
    intermission: [
      { id: "im01", title: "INTERmission 1" },
      { id: "im02", title: "INTERmission 2" }
    ]
  },
  flags: [
    { id: "story", label: "本編", chip: true, tone: "story" },
    { id: "deadline", label: "期限", chip: true, tone: "deadline", band: true },
    { id: "missable", label: "取り逃し", chip: true, tone: "missable", band: true },
    { id: "request", label: "依頼", chip: true, tone: "request" },
    { id: "optional", label: "任意", chip: true, tone: "optional" },
    { id: "trophy", label: "トロフィー", chip: true, tone: "trophy" },
    { id: "item", label: "アイテム入手", chip: true, tone: "item" },
    { id: "tips", label: "Tips", chip: true, tone: "tips" },
    { id: "battle", label: "戦闘", chip: true, tone: "battle" }
  ],
  hubs: [
    { id: "route", label: "ルート", kind: "route" },
    { id: "quests", label: "依頼", kind: "catalog", catalog: "quests" },
    { id: "trophies", label: "トロフィー", kind: "catalog", catalog: "trophies" },
    { id: "items", label: "アイテム", kind: "items", sections: [
      { catalog: "keyItems", label: "だいじなもの" },
      { catalog: "consumables", label: "消費アイテム" },
      { catalog: "accessories", label: "アクセサリー" },
      { catalog: "weapons", label: "武器" },
      { catalog: "armor", label: "防具" },
      { catalog: "materia", label: "マテリア" },
      { catalog: "summons", label: "召喚獣" }
    ] },
    { id: "enemies", label: "エネミー", kind: "enemies" },
    { id: "settings", label: "設定", kind: "settings" }
  ],
  maps: [
    { id: "chapter01", label: "壱番魔晄炉" },
    { id: "chapter02", label: "八番街" },
    { id: "chapter03", label: "七番街スラム" },
    { id: "chapter04", label: "七番街" },
    { id: "chapter05", label: "螺旋トンネル" },
    { id: "chapter06", label: "四番街プレート内部" },
    { id: "chapter07", label: "伍番魔晄炉" },
    { id: "chapter08", label: "伍番街スラム" },
    { id: "chapter09-03", label: "陥没道路" },
    { id: "chapter09", label: "六番街スラム" },
    { id: "chapter10", label: "地下下水道" },
    { id: "chapter11", label: "列車墓場" },
    { id: "chapter12", label: "七番街支柱" },
    { id: "chapter13", label: "地下実験場" },
    { id: "chapter15", label: "七番街プレート断面" },
    { id: "chapter16", label: "神羅ビル外周" },
    { id: "chapter17", label: "神羅ビル特殊研究施設" }
  ]
};

globalThis.GAME = GAME;
