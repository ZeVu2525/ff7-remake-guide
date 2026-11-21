// 台帳とカタログの枠。各配列は空でも動く。仮データは1件まで、example と「例」を付ける。
// 項目の形:
// { id, example, name, detail, source, area?, missable? }
const CATALOGS = {
  quests: {
    title: "依頼",
    lead: "依頼は1件ずつ足す。受注場所は area、条件と報酬は detail、出典URLは source。",
    items: [
      {
        id: "quest-ex-01",
        example: true,
        name: "例: 依頼名",
        area: "例: 受注できる場所",
        detail: "例: 条件と報酬を自分の言葉で書く。",
        source: ""
      }
    ]
  },
  trophies: {
    title: "トロフィー・取り逃し",
    lead: "トロフィーと、章をまたいで逃すものを置く。逃すものは missable を true にする。",
    items: [
      {
        id: "trophy-ex-01",
        example: true,
        missable: true,
        name: "例: トロフィー名",
        detail: "例: 解除条件を自分の言葉で書く。取り逃しなら missable を true にする。",
        source: ""
      }
    ]
  },
  summons: {
    title: "召喚獣",
    lead: "召喚獣の入手だけを書く。戦闘の数値表は貼らない。",
    items: [
      {
        id: "summon-ex-01",
        example: true,
        name: "例: 召喚獣名",
        detail: "例: 入手できる場面を自分の言葉で書く。",
        source: ""
      }
    ]
  },
  skills: {
    title: "敵の技",
    lead: "敵の技を、覚えるキャラクターと入手元が分かる形で置く。",
    items: [
      {
        id: "skill-ex-01",
        example: true,
        name: "例: 敵の技の名前",
        detail: "例: 誰が覚えるか、どの敵からかを書く。",
        source: ""
      }
    ]
  },
  materia: {
    title: "マテリア",
    lead: "マテリアの効果と入手を書く。一覧表の転載はしない。",
    items: [
      {
        id: "materia-ex-01",
        example: true,
        name: "例: マテリア名",
        detail: "例: 効果と入手を自分の言葉で書く。",
        source: ""
      }
    ]
  },
  weapons: {
    title: "武器",
    lead: "武器の入手と、使いたい理由だけを書く。性能表は貼らない。",
    items: [
      {
        id: "weapon-ex-01",
        example: true,
        name: "例: 武器名",
        detail: "例: 入手と、ルート上の扱いを書く。",
        source: ""
      }
    ]
  }
};

globalThis.CATALOGS = CATALOGS;
