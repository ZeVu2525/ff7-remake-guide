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
    theme: "ff7r-guide-theme",
    backup: "ff7r-guide-state-v1-last-backup"
  },
  cache: "ff7r-guide-v3",
  cacheFiles: [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./favicon.svg",
    "./app.js",
    "./edit-mode.js",
    "./progress.js",
    "./card-edit.js",
    "./data/game.js",
    "./data/route.js",
    "./data/catalogs.js"
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
    { id: "tips", label: "Tips", chip: true, tone: "tips" }
  ],
  hubs: [
    { id: "route", label: "ルート", kind: "route" },
    { id: "quests", label: "依頼", kind: "catalog", catalog: "quests" },
    { id: "trophies", label: "トロフィー", kind: "catalog", catalog: "trophies" },
    { id: "summons", label: "召喚獣", kind: "catalog", catalog: "summons" },
    { id: "skills", label: "敵の技", kind: "catalog", catalog: "skills" },
    { id: "materia", label: "マテリア", kind: "catalog", catalog: "materia" },
    { id: "weapons", label: "武器", kind: "catalog", catalog: "weapons" }
  ]
};

globalThis.GAME = GAME;
