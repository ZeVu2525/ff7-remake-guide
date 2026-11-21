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
    title: "トロフィー",
    lead: "進行カードのトロフィーをチェックすると、同じIDの項目もオンになる。カードを外すと、ほかにオンのカードがなければここも外れる。この画面で直接オンにしてもカードは動かない。直接オフにすると、結んである進行カードも外れる。運命の覇者は、残りがすべてオンのときだけオンになる。",
    items: [
{
        id: "trophy-all",
        name: "運命の覇者",
        area: "-",
        detail: "すべてのトロフィーを獲得した",
        source: "",
        auto: "rest"
      },
{
        id: "trophy-ch01",
        name: "壱番魔晄炉爆破",
        area: "STORY",
        detail: "１章をクリアした",
        source: ""
      },
{
        id: "trophy-ch02",
        name: "八番街の逃走",
        area: "STORY",
        detail: "２章をクリアした",
        source: ""
      },
{
        id: "trophy-ch03",
        name: "なんでも屋の仕事",
        area: "STORY",
        detail: "３章をクリアした",
        source: ""
      },
{
        id: "trophy-ch04",
        name: "アバランチとの絆",
        area: "STORY",
        detail: "４章をクリアした",
        source: ""
      },
{
        id: "trophy-ch05",
        name: "プランＥ展開",
        area: "STORY",
        detail: "５章をクリアした",
        source: ""
      },
{
        id: "trophy-ch06",
        name: "スラムの太陽",
        area: "STORY",
        detail: "６章をクリアした",
        source: ""
      },
{
        id: "trophy-ch07",
        name: "罠に落ちたネズミ",
        area: "STORY",
        detail: "７章をクリアした",
        source: ""
      },
{
        id: "trophy-ch08",
        name: "再会",
        area: "STORY",
        detail: "８章をクリアした",
        source: ""
      },
{
        id: "trophy-ch09",
        name: "欲望の街",
        area: "STORY",
        detail: "９章をクリアした",
        source: ""
      },
{
        id: "trophy-ch10",
        name: "焦燥の迷宮",
        area: "STORY",
        detail: "１０章をクリアした",
        source: ""
      },
{
        id: "trophy-ch11",
        name: "亡霊の墓場",
        area: "STORY",
        detail: "１１章をクリアした",
        source: ""
      },
{
        id: "trophy-ch12",
        name: "死闘",
        area: "STORY",
        detail: "１２章をクリアした",
        source: ""
      },
{
        id: "trophy-ch13",
        name: "醒めない悪夢",
        area: "STORY",
        detail: "１３章をクリアした",
        source: ""
      },
{
        id: "trophy-ch14",
        name: "希望への救済",
        area: "STORY",
        detail: "１４章をクリアした",
        source: ""
      },
{
        id: "trophy-ch15",
        name: "腐ったピザ",
        area: "STORY",
        detail: "１５章をクリアした",
        source: ""
      },
{
        id: "trophy-ch16",
        name: "ノーアポイントメント",
        area: "STORY",
        detail: "１６章をクリアした",
        source: ""
      },
{
        id: "trophy-ch17",
        name: "混沌からの脱出",
        area: "STORY",
        detail: "１７章をクリアした",
        source: ""
      },
{
        id: "trophy-ch18",
        name: "運命の断裂",
        area: "STORY",
        detail: "１８章をクリアした",
        source: ""
      },
{
        id: "trophy-first-win",
        name: "ソルジャーの肩慣らし",
        area: "STORY",
        detail: "はじめて戦闘に勝利した",
        source: ""
      },
{
        id: "trophy-weakness",
        name: "弱点への一撃",
        area: "STORY",
        detail: "はじめて弱点属性をついた",
        source: ""
      },
{
        id: "trophy-rescue",
        name: "拘束への一撃",
        area: "戦闘",
        detail: "はじめて拘束された仲間を助けた",
        source: ""
      },
{
        id: "trophy-burst",
        name: "バーストの一撃",
        area: "STORY",
        detail: "はじめて敵をバーストさせた",
        source: ""
      },
{
        id: "trophy-music-3",
        name: "音楽愛好家",
        area: "収集",
        detail: "ミュージックディスクを３個集めた",
        source: ""
      },
{
        id: "trophy-quest-first",
        name: "なんでも屋の初仕事",
        area: "クエスト",
        detail: "はじめてクエストをクリアした",
        source: ""
      },
{
        id: "trophy-weapon-novice",
        name: "武器アビリティ初心者",
        area: "行動",
        detail: "はじめて武器アビリティ熟練度MAXにした",
        source: ""
      },
{
        id: "trophy-materia-novice",
        name: "マテリア初心者",
        area: "STORY",
        detail: "はじめてマテリアレベルが上がった",
        source: ""
      },
{
        id: "trophy-summon-first",
        name: "みならい召喚士",
        area: "行動",
        detail: "はじめて召喚獣を呼び出した",
        source: ""
      },
{
        id: "trophy-bike",
        name: "バイクソルジャー",
        area: "行動",
        detail: "バイクゲームの最後にジェシーにほめられた",
        source: ""
      },
{
        id: "trophy-darts",
        name: "ダーツエキスパート",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "ダーツでセブンスヘブンランキングを制した",
        source: ""
      },
{
        id: "trophy-moogle",
        name: "凄腕の整備士",
        area: "行動",
        detail: "「チョコボ＆モーグリ」マテリアを入手した",
        source: ""
      },
{
        id: "trophy-thieves",
        name: "大泥棒三人組",
        area: "行動",
        detail: "魔晄炉の最上級セキュリティを突破した",
        source: ""
      },
{
        id: "trophy-crash",
        name: "クラッシュヒーロー",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "クラッシュボックスノーマルをすべてクリアした",
        source: ""
      },
{
        id: "trophy-flower",
        name: "アートフラワー",
        area: "STORY",
        detail: "リーフハウスに花飾りをした",
        source: ""
      },
{
        id: "trophy-summon-win",
        name: "たたかう召喚士",
        area: "行動",
        detail: "はじめて召喚獣バトルに勝利した",
        source: ""
      },
{
        id: "trophy-squat",
        name: "マッスルキング",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "スクワット勝負をすべてクリアした",
        source: ""
      },
{
        id: "trophy-dance",
        name: "ダンシングクイーン",
        area: "行動",
        detail: "ダンスのごほうびで「アニヤンのピアス」を入手した",
        source: ""
      },
{
        id: "trophy-arena",
        name: "カムバックチャンピオン",
        area: "行動",
        detail: "はじめて闘技場のフリーバトルをクリアした",
        source: ""
      },
{
        id: "trophy-dress-3",
        name: "新米ドレッサー",
        area: "収集",
        detail: "嫁オーディションの衣装を３種類着こなした",
        source: ""
      },
{
        id: "trophy-dress-all",
        name: "ベストドレッサー",
        area: "収集",
        detail: "嫁オーディションの衣装をすべて着こなした",
        source: ""
      },
{
        id: "trophy-crash-hard",
        name: "レジェンドクラッシャー",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "クラッシュボックスハードをすべてクリアした",
        source: ""
      },
{
        id: "trophy-pullup",
        name: "マッスルクイーン",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "けんすい勝負をすべてクリアした",
        source: ""
      },
{
        id: "trophy-letter",
        name: "天使の感謝状",
        area: "クエスト",
        detail: "「スラムエンジェルの手紙」を入手した",
        source: ""
      },
{
        id: "trophy-johnny",
        name: "ジョニーのマブダチ",
        area: "クエスト",
        detail: "ジョニーとの出来事をすべて体験した",
        source: ""
      },
{
        id: "trophy-quests-all",
        name: "伝説のなんでも屋",
        area: "クエスト",
        detail: "すべてのクエストをクリアした",
        source: ""
      },
{
        id: "trophy-music-all",
        name: "ミュージックマエストロ",
        area: "収集",
        detail: "すべてのミュージックディスクを入手した",
        source: ""
      },
{
        id: "trophy-level",
        name: "レベルマスター",
        area: "カウント",
        detail: "キャラクターのレベルが50になった",
        source: ""
      },
{
        id: "trophy-burst-max",
        name: "バーストマスター",
        area: "戦闘",
        detail: "バースト時のダメージ倍率300％を突破した",
        source: ""
      },
{
        id: "trophy-reports",
        name: "バトルレポートマスター",
        area: "行動",
        detail: "バトルレポートをすべて達成した",
        source: ""
      },
{
        id: "trophy-weapon-all",
        name: "武器アビリティマスター",
        area: "行動",
        detail: "武器アビリティをすべて習得した",
        source: ""
      },
{
        id: "trophy-enemy-skill",
        name: "てきのわざマスター",
        area: "収集",
        detail: "敵の技をすべて習得した",
        source: ""
      },
{
        id: "trophy-malboro",
        name: "未知との遭遇",
        area: "討伐",
        detail: "モルボルを倒した",
        source: ""
      },
{
        id: "trophy-pride",
        name: "究極兵器",
        area: "討伐",
        detail: "プラウド・クラッド零号機を倒した",
        source: ""
      },
{
        id: "trophy-hard-clear",
        name: "すべてを超えし者",
        area: "難易度",
        detail: "難易度HARDモードですべての章をクリアした",
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
