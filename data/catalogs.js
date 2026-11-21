// 台帳。トロフィーはユーザー提供の名称のまま。
// だいじなもの、消費アイテム、アクセサリー、武器、防具、マテリアは一覧の名前を使い、説明は短くまとめた。
// 仮データは example と「例」を付ける。
const CATALOGS = {
  "quests": {
    "title": "依頼",
    "lead": "依頼は1件ずつ足す。受注場所は area、条件と報酬は detail、出典URLは source。",
    "items": [
      {
        "id": "quest-ex-01",
        "example": true,
        "name": "例: 依頼名",
        "area": "例: 受注できる場所",
        "detail": "例: 条件と報酬を自分の言葉で書く。",
        "source": ""
      }
    ]
  },
  "trophies": {
    "title": "トロフィー",
    "lead": "進行カードのトロフィーをチェックすると、同じIDの項目もオンになる。カードを外すと、ほかにオンのカードがなければここも外れる。この画面で直接オンにしてもカードは動かない。直接オフにすると、結んである進行カードも外れる。運命の覇者は、残りがすべてオンのときだけオンになる。",
    "items": [
      {
        "id": "trophy-all",
        "name": "運命の覇者",
        "area": "-",
        "detail": "すべてのトロフィーを獲得した",
        "source": "",
        "auto": "rest"
      },
      {
        "id": "trophy-ch01",
        "name": "壱番魔晄炉爆破",
        "area": "STORY",
        "detail": "１章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch02",
        "name": "八番街の逃走",
        "area": "STORY",
        "detail": "２章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch03",
        "name": "なんでも屋の仕事",
        "area": "STORY",
        "detail": "３章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch04",
        "name": "アバランチとの絆",
        "area": "STORY",
        "detail": "４章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch05",
        "name": "プランＥ展開",
        "area": "STORY",
        "detail": "５章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch06",
        "name": "スラムの太陽",
        "area": "STORY",
        "detail": "６章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch07",
        "name": "罠に落ちたネズミ",
        "area": "STORY",
        "detail": "７章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch08",
        "name": "再会",
        "area": "STORY",
        "detail": "８章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch09",
        "name": "欲望の街",
        "area": "STORY",
        "detail": "９章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch10",
        "name": "焦燥の迷宮",
        "area": "STORY",
        "detail": "１０章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch11",
        "name": "亡霊の墓場",
        "area": "STORY",
        "detail": "１１章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch12",
        "name": "死闘",
        "area": "STORY",
        "detail": "１２章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch13",
        "name": "醒めない悪夢",
        "area": "STORY",
        "detail": "１３章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch14",
        "name": "希望への救済",
        "area": "STORY",
        "detail": "１４章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch15",
        "name": "腐ったピザ",
        "area": "STORY",
        "detail": "１５章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch16",
        "name": "ノーアポイントメント",
        "area": "STORY",
        "detail": "１６章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch17",
        "name": "混沌からの脱出",
        "area": "STORY",
        "detail": "１７章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch18",
        "name": "運命の断裂",
        "area": "STORY",
        "detail": "１８章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-first-win",
        "name": "ソルジャーの肩慣らし",
        "area": "STORY",
        "detail": "はじめて戦闘に勝利した",
        "source": ""
      },
      {
        "id": "trophy-weakness",
        "name": "弱点への一撃",
        "area": "STORY",
        "detail": "はじめて弱点属性をついた",
        "source": ""
      },
      {
        "id": "trophy-rescue",
        "name": "拘束への一撃",
        "area": "戦闘",
        "detail": "はじめて拘束された仲間を助けた",
        "source": ""
      },
      {
        "id": "trophy-burst",
        "name": "バーストの一撃",
        "area": "STORY",
        "detail": "はじめて敵をバーストさせた",
        "source": ""
      },
      {
        "id": "trophy-music-3",
        "name": "音楽愛好家",
        "area": "収集",
        "detail": "ミュージックディスクを３個集めた",
        "source": ""
      },
      {
        "id": "trophy-quest-first",
        "name": "なんでも屋の初仕事",
        "area": "クエスト",
        "detail": "はじめてクエストをクリアした",
        "source": ""
      },
      {
        "id": "trophy-weapon-novice",
        "name": "武器アビリティ初心者",
        "area": "行動",
        "detail": "はじめて武器アビリティ熟練度MAXにした",
        "source": ""
      },
      {
        "id": "trophy-materia-novice",
        "name": "マテリア初心者",
        "area": "STORY",
        "detail": "はじめてマテリアレベルが上がった",
        "source": ""
      },
      {
        "id": "trophy-summon-first",
        "name": "みならい召喚士",
        "area": "行動",
        "detail": "はじめて召喚獣を呼び出した",
        "source": ""
      },
      {
        "id": "trophy-bike",
        "name": "バイクソルジャー",
        "area": "行動",
        "detail": "バイクゲームの最後にジェシーにほめられた",
        "source": ""
      },
      {
        "id": "trophy-darts",
        "name": "ダーツエキスパート",
        "area": "ﾐﾆｹﾞｰﾑ",
        "detail": "ダーツでセブンスヘブンランキングを制した",
        "source": ""
      },
      {
        "id": "trophy-moogle",
        "name": "凄腕の整備士",
        "area": "行動",
        "detail": "「チョコボ＆モーグリ」マテリアを入手した",
        "source": ""
      },
      {
        "id": "trophy-thieves",
        "name": "大泥棒三人組",
        "area": "行動",
        "detail": "魔晄炉の最上級セキュリティを突破した",
        "source": ""
      },
      {
        "id": "trophy-crash",
        "name": "クラッシュヒーロー",
        "area": "ﾐﾆｹﾞｰﾑ",
        "detail": "クラッシュボックスノーマルをすべてクリアした",
        "source": ""
      },
      {
        "id": "trophy-flower",
        "name": "アートフラワー",
        "area": "STORY",
        "detail": "リーフハウスに花飾りをした",
        "source": ""
      },
      {
        "id": "trophy-summon-win",
        "name": "たたかう召喚士",
        "area": "行動",
        "detail": "はじめて召喚獣バトルに勝利した",
        "source": ""
      },
      {
        "id": "trophy-squat",
        "name": "マッスルキング",
        "area": "ﾐﾆｹﾞｰﾑ",
        "detail": "スクワット勝負をすべてクリアした",
        "source": ""
      },
      {
        "id": "trophy-dance",
        "name": "ダンシングクイーン",
        "area": "行動",
        "detail": "ダンスのごほうびで「アニヤンのピアス」を入手した",
        "source": ""
      },
      {
        "id": "trophy-arena",
        "name": "カムバックチャンピオン",
        "area": "行動",
        "detail": "はじめて闘技場のフリーバトルをクリアした",
        "source": ""
      },
      {
        "id": "trophy-dress-3",
        "name": "新米ドレッサー",
        "area": "収集",
        "detail": "嫁オーディションの衣装を３種類着こなした",
        "source": ""
      },
      {
        "id": "trophy-dress-all",
        "name": "ベストドレッサー",
        "area": "収集",
        "detail": "嫁オーディションの衣装をすべて着こなした",
        "source": ""
      },
      {
        "id": "trophy-crash-hard",
        "name": "レジェンドクラッシャー",
        "area": "ﾐﾆｹﾞｰﾑ",
        "detail": "クラッシュボックスハードをすべてクリアした",
        "source": ""
      },
      {
        "id": "trophy-pullup",
        "name": "マッスルクイーン",
        "area": "ﾐﾆｹﾞｰﾑ",
        "detail": "けんすい勝負をすべてクリアした",
        "source": ""
      },
      {
        "id": "trophy-letter",
        "name": "天使の感謝状",
        "area": "クエスト",
        "detail": "「スラムエンジェルの手紙」を入手した",
        "source": ""
      },
      {
        "id": "trophy-johnny",
        "name": "ジョニーのマブダチ",
        "area": "クエスト",
        "detail": "ジョニーとの出来事をすべて体験した",
        "source": ""
      },
      {
        "id": "trophy-quests-all",
        "name": "伝説のなんでも屋",
        "area": "クエスト",
        "detail": "すべてのクエストをクリアした",
        "source": ""
      },
      {
        "id": "trophy-music-all",
        "name": "ミュージックマエストロ",
        "area": "収集",
        "detail": "すべてのミュージックディスクを入手した",
        "source": ""
      },
      {
        "id": "trophy-level",
        "name": "レベルマスター",
        "area": "カウント",
        "detail": "キャラクターのレベルが50になった",
        "source": ""
      },
      {
        "id": "trophy-burst-max",
        "name": "バーストマスター",
        "area": "戦闘",
        "detail": "バースト時のダメージ倍率300％を突破した",
        "source": ""
      },
      {
        "id": "trophy-reports",
        "name": "バトルレポートマスター",
        "area": "行動",
        "detail": "バトルレポートをすべて達成した",
        "source": ""
      },
      {
        "id": "trophy-weapon-all",
        "name": "武器アビリティマスター",
        "area": "行動",
        "detail": "武器アビリティをすべて習得した",
        "source": ""
      },
      {
        "id": "trophy-enemy-skill",
        "name": "てきのわざマスター",
        "area": "収集",
        "detail": "敵の技をすべて習得した",
        "source": ""
      },
      {
        "id": "trophy-malboro",
        "name": "未知との遭遇",
        "area": "討伐",
        "detail": "モルボルを倒した",
        "source": ""
      },
      {
        "id": "trophy-pride",
        "name": "究極兵器",
        "area": "討伐",
        "detail": "プラウド・クラッド零号機を倒した",
        "source": ""
      },
      {
        "id": "trophy-hard-clear",
        "name": "すべてを超えし者",
        "area": "難易度",
        "detail": "難易度HARDモードですべての章をクリアした",
        "source": ""
      }
    ]
  },
  "summons": {
    "title": "召喚獣",
    "lead": "召喚獣の入手だけを書く。戦闘の数値表は貼らない。",
    "items": [
      {
        "id": "summon-ex-01",
        "example": true,
        "name": "例: 召喚獣名",
        "detail": "例: 入手できる場面を自分の言葉で書く。",
        "source": ""
      }
    ]
  },
  "skills": {
    "title": "敵の技",
    "lead": "敵の技を、覚えるキャラクターと入手元が分かる形で置く。",
    "items": [
      {
        "id": "skill-ex-01",
        "example": true,
        "name": "例: 敵の技の名前",
        "detail": "例: 誰が覚えるか、どの敵からかを書く。",
        "source": ""
      }
    ]
  },
  "materia": {
    "title": "マテリア",
    "lead": "魔法、支援、コマンド、独立、召喚。INTERmissionだけのものは印を付け、本編と同名なら1件にまとめた。",
    "facet": "area",
    "items": [
      {
        "id": "mat-ma-001",
        "name": "かいふく",
        "detail": "魔法マテリア。ケアル、ケアルラ、リジェネ、ケアルガが順に使える。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-002",
        "name": "ちりょう",
        "detail": "魔法マテリア。ポイゾナ、エスナ、レジストが順に使える。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-003",
        "name": "そせい",
        "detail": "魔法マテリア。レイズ、アレイズが順に使える。入手の目安は各地(8章以降) 七番街 社宅地区。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-004",
        "name": "ほのお",
        "detail": "魔法マテリア。ファイア、ファイラ、ファイガが順に使える。入手の目安は各地 七番街スラム タラガ廃工場。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-005",
        "name": "れいき",
        "detail": "魔法マテリア。ブリザド、ブリザラ、ブリザガが順に使える。入手の目安は各地 七番街スラム ガレキ通り、地下実験場 B2F。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-006",
        "name": "いかずち",
        "detail": "魔法マテリア。サンダー、サンダラ、サンダガが順に使える。入手の目安は各地 螺旋トンネル E区画、伍番魔晄炉B7F。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-007",
        "name": "かぜ",
        "detail": "魔法マテリア。エアロ、エアロラ、エアロガが順に使える。入手の目安はバトルレポート02達成後にチャドリーから購入 ●限定3個● 1個目:100ギル 2個など。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-008",
        "name": "どく",
        "detail": "魔法マテリア。バイオ、バイオラ、バイオガが順に使える。入手の目安は各地(5章以降) 地下下水道六番地区、神羅ビル 鑼牟第一層 アノニマス。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-009",
        "name": "バリア",
        "detail": "魔法マテリア。マバリア、ウォールが順に使える。入手の目安は各地(5章以降) ウォール・マーケット 4章でジェシーから受け取る。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-010",
        "name": "ふうじる",
        "detail": "魔法マテリア。スリプル、サイレス、バーサクが順に使える。入手の目安は各地(9章以降) 陥没道路 下層。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-011",
        "name": "しょうめつ",
        "detail": "魔法マテリア。デバリア、デスペルが順に使える。入手の目安は各地(12章以降) クロウガイスト。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-ma-012",
        "name": "じかん",
        "detail": "魔法マテリア。ヘイスト、スロウ、ストップが順に使える。入手の目安は七番街 プレート断面、神羅ビル63F以降の70F、ミッドガル・ハイウェイ 新羅ビルなど。INTERmissionでも同じ名前がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "intermission": true
      },
      {
        "id": "mat-su-001",
        "name": "Lv.",
        "detail": "支援マテリア。属性耐性、8%、15%、23%が順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "area": "支援"
      },
      {
        "id": "mat-co-005",
        "name": "技名",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-006",
        "name": "アイスオーラ",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-007",
        "name": "この技を持つ敵 ディーングロウ",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-008",
        "name": "自爆",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-009",
        "name": "この技を持つ敵 スモッグファクト、ヴァギドポリス、ボム、H0512-OPTβ",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-010",
        "name": "霊気吸収",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-011",
        "name": "この技を持つ敵 ファントム",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-012",
        "name": "くさい息",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-co-013",
        "name": "この技を持つ敵 モルボル",
        "detail": "コマンドマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "area": "コマンド"
      },
      {
        "id": "mat-do-001",
        "name": "Lv",
        "detail": "独立マテリア。入手方法、10%、20%、30%などが順に使える。入手の目安は売値。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "area": "独立"
      },
      {
        "id": "mat-do-010",
        "name": "通常時",
        "detail": "独立マテリア。750〜1000、1000〜1250、1250〜2000が順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "area": "独立"
      },
      {
        "id": "mat-do-017",
        "name": "後退しない",
        "detail": "独立マテリア。大きく後退が順に使える。入手の目安は少し後退。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "area": "独立"
      },
      {
        "id": "mat-do-018",
        "name": "受けるダメージ量の倍率",
        "detail": "独立マテリア。0.25、0.2、0.15が順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "area": "独立"
      },
      {
        "id": "mat-do-019",
        "name": "入手方法",
        "detail": "独立マテリア。売値が順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "area": "独立"
      },
      {
        "id": "mat-do-020",
        "name": "バトルレポート06達成後にチャドリーから購入。",
        "detail": "独立マテリア。ーが順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "area": "独立"
      },
      {
        "id": "mat-do-023",
        "name": "2",
        "detail": "独立マテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "area": "独立"
      },
      {
        "id": "mat-sm-001",
        "name": "イフリート",
        "detail": "イフリートを呼び出す召喚マテリア。入手の目安は3章でジェシーから受け取る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚"
      },
      {
        "id": "mat-sm-002",
        "name": "チョコボ&モーグリ",
        "detail": "チョコボ&モーグリを呼び出す召喚マテリア。入手の目安は6章で、四番街内部プレート上層「プレート換気」」で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚"
      },
      {
        "id": "mat-sm-003",
        "name": "シヴァ",
        "detail": "シヴァを呼び出す召喚マテリア。入手の目安はバトルレポート01以降の04いずれかを達成後にVR MISSONで依頼が発生し、クリなど。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚"
      },
      {
        "id": "mat-sm-004",
        "name": "デブチョコボ",
        "detail": "デブチョコボを呼び出す召喚マテリア。入手の目安はバトルレポート06以降の09達成後にVR MISSONで依頼が発生し、クリアすると入など。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚"
      },
      {
        "id": "mat-sm-005",
        "name": "リヴァイアサン",
        "detail": "リヴァイアサンを呼び出す召喚マテリア。入手の目安はバトルレポート11以降の14達成後にVR MISSONで依頼が発生し、クリアすると入など。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚"
      },
      {
        "id": "mat-sm-006",
        "name": "バハムート",
        "detail": "バハムートを呼び出す召喚マテリア。入手の目安はバトルレポート01以降の19達成後にVR MISSONで依頼が発生し、クリアすると入など。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚"
      },
      {
        "id": "mat-im-001",
        "name": "ぞくせい",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-002",
        "name": "はんいか",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-003",
        "name": "たいせい",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-004",
        "name": "まほうついげき",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-005",
        "name": "HPきゅうしゅう",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-006",
        "name": "MPきゅうしゅう",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-007",
        "name": "APアップ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-008",
        "name": "チャクラ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-009",
        "name": "みやぶる",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-010",
        "name": "ATBブースト",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-011",
        "name": "いのり",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-012",
        "name": "ぬすむ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-013",
        "name": "てきのわざ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-014",
        "name": "シノビシュート",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-015",
        "name": "HPアップ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-016",
        "name": "MPアップ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-017",
        "name": "マジカル",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-018",
        "name": "ラッキー",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-019",
        "name": "ギルアップ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-020",
        "name": "けいけんちアップ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-021",
        "name": "かいひぎり",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-022",
        "name": "うけながし",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-023",
        "name": "せんせいこうげき",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-024",
        "name": "オートケアル",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-025",
        "name": "アイテムたつじん",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-026",
        "name": "ATBバースト",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-027",
        "name": "ATBれんけい",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-028",
        "name": "ちょうはつ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-029",
        "name": "ガードきょうか",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-030",
        "name": "わざたつじん",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-031",
        "name": "ヴィジョン",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "mat-im-032",
        "name": "あるきまにあ",
        "detail": "INTERmissionでユフィが使うマテリア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/materia.html",
        "area": "INTERmission",
        "intermission": true
      }
    ]
  },
  "weapons": {
    "title": "武器",
    "lead": "キャラクターごとの武器。ユフィの武器と武器アビリティはINTERmission。性能表はそのまま載せない。",
    "facet": "area",
    "items": [
      {
        "id": "wpn-cl-001",
        "name": "バスタードソード",
        "detail": "クラウドが使う武器。武器アビリティはバーストスラッシュ。最初から持っている。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド"
      },
      {
        "id": "wpn-cl-002",
        "name": "アイアンブレード",
        "detail": "クラウドが使う武器。武器アビリティはラピッドチェイン。入手の目安は3章進行中、武器屋からもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド"
      },
      {
        "id": "wpn-cl-003",
        "name": "釘バット",
        "detail": "クラウドが使う武器。武器アビリティはディスオーダー。入手の目安は見回りの子供たち。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド"
      },
      {
        "id": "wpn-cl-004",
        "name": "ハードブレイカー",
        "detail": "クラウドが使う武器。武器アビリティはインフィニットエンド。入手の目安は六番街スラム ウォール・マーケット(14章)。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド"
      },
      {
        "id": "wpn-cl-005",
        "name": "ミスリルセイバー",
        "detail": "クラウドが使う武器。武器アビリティは破晄撃。入手の目安は六番街スラム ウォール・マーケット(14章)。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド"
      },
      {
        "id": "wpn-cl-006",
        "name": "ツィンスティンガー",
        "detail": "クラウドが使う武器。武器アビリティは反撃の構え。入手の目安は神羅ビル 鑼牟 第三層。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド"
      },
      {
        "id": "wpn-ba-001",
        "name": "ガトリングガン",
        "detail": "バレットが使う武器。武器アビリティはフュエルバースト。最初から持っている。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット"
      },
      {
        "id": "wpn-ba-002",
        "name": "アサルトガン",
        "detail": "バレットが使う武器。武器アビリティはアバランチ魂。入手の目安は6章進行中、ビッグスからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット"
      },
      {
        "id": "wpn-ba-003",
        "name": "ラージマウス",
        "detail": "バレットが使う武器。武器アビリティはアンガーマックス。入手の目安は六番街スラム みどり公園(13章、14)。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット"
      },
      {
        "id": "wpn-ba-004",
        "name": "アトミックシザー",
        "detail": "バレットが使う武器。武器アビリティはエナジーアッパー。入手の目安はモーグリメダル7枚と交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット"
      },
      {
        "id": "wpn-ba-005",
        "name": "キャノンボール",
        "detail": "バレットが使う武器。武器アビリティはグランドブロウ。入手の目安は地底の咆哮。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット"
      },
      {
        "id": "wpn-ba-006",
        "name": "ハートビート",
        "detail": "バレットが使う武器。武器アビリティはゼロレンジシュート。入手の目安は16章進行中、ハットからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット"
      },
      {
        "id": "wpn-ae-001",
        "name": "ガードロッド",
        "detail": "エアリスが使う武器。武器アビリティは聖なる魔法陣。最初から持っている。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス"
      },
      {
        "id": "wpn-ae-002",
        "name": "シルバーロッド",
        "detail": "エアリスが使う武器。武器アビリティはイノセンスフォース。入手の目安はモーグリメダル2枚と交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス"
      },
      {
        "id": "wpn-ae-003",
        "name": "マジカルロッド",
        "detail": "エアリスが使う武器。武器アビリティはマジカルサーバント。入手の目安は逆襲の刃または爆裂ダイナマイトボディ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス"
      },
      {
        "id": "wpn-ae-004",
        "name": "ミスリルロッド",
        "detail": "エアリスが使う武器。武器アビリティはジャッジメントレイ。入手の目安は列車墓場 第2操車場。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス"
      },
      {
        "id": "wpn-ae-005",
        "name": "ストライクロッド",
        "detail": "エアリスが使う武器。武器アビリティは光の盾。入手の目安はエリゴル。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス"
      },
      {
        "id": "wpn-ae-006",
        "name": "フルメタルロッド",
        "detail": "エアリスが使う武器。武器アビリティは応援の魔法陣。入手の目安は神羅ビル 65F宝条研究室サブフロア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス"
      },
      {
        "id": "wpn-ti-001",
        "name": "レザーグローブ",
        "detail": "ティファが使う武器。武器アビリティはかかと落とし。最初から持っている。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ"
      },
      {
        "id": "wpn-ti-002",
        "name": "メタルナックル",
        "detail": "ティファが使う武器。武器アビリティはライズビート。入手の目安はダストドーザー。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ"
      },
      {
        "id": "wpn-ti-003",
        "name": "ソニックフィスト",
        "detail": "ティファが使う武器。武器アビリティはバックフリップ。入手の目安は伍番魔晄炉B5F。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ"
      },
      {
        "id": "wpn-ti-004",
        "name": "フェザーグラブ",
        "detail": "ティファが使う武器。武器アビリティはオーバードライブ。入手の目安は地下下水道 六番地区。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ"
      },
      {
        "id": "wpn-ti-005",
        "name": "ミスリルクロー",
        "detail": "ティファが使う武器。武器アビリティは闘気スフィア。入手の目安はアノニマス。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ"
      },
      {
        "id": "wpn-ti-006",
        "name": "グランドグラブ",
        "detail": "ティファが使う武器。武器アビリティは正拳突き。入手の目安は神羅ビル 1Fエントランスフロア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ"
      },
      {
        "id": "wpn-im-001",
        "name": "十字手裏剣",
        "detail": "ユフィが使う武器。武器アビリティは忍術変化・炎氷雷風。最初から持っている。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true
      },
      {
        "id": "wpn-im-002",
        "name": "かまぐるま",
        "detail": "ユフィが使う武器。武器アビリティは邪鬼退散。入手の目安は物資輸送場「中層第一区」 自販機(神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true
      },
      {
        "id": "wpn-im-003",
        "name": "ブーメラン",
        "detail": "ユフィが使う武器。武器アビリティはくもがくれ。入手の目安は七番街スラム「アバランチ本家アジト」 自販機(メインピラー整備場、神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true
      },
      {
        "id": "wpn-im-004",
        "name": "五輪棒",
        "detail": "ユフィが使う武器。武器アビリティは疾風怒涛。最初から持っている。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true
      },
      {
        "id": "wpn-im-005",
        "name": "魔人棒",
        "detail": "ユフィが使う武器。武器アビリティは怒気集中。入手の目安は神羅ビルB14F「メンテナンス区画」 自販機(神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true
      },
      {
        "id": "wpn-im-006",
        "name": "金剛棒",
        "detail": "ユフィが使う武器。武器アビリティはウータイの闘志。入手の目安は七番街スラム「輸送場連絡口」 自販機(神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true
      },
      {
        "id": "abi-im-001",
        "name": "忍術変化・炎氷雷風",
        "detail": "ユフィの武器アビリティ。十字手裏剣に付いている。INTERmissionで覚える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/ability.html",
        "area": "武器アビリティ",
        "intermission": true
      },
      {
        "id": "abi-im-002",
        "name": "邪鬼退散",
        "detail": "ユフィの武器アビリティ。かまぐるまに付いている。INTERmissionで覚える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/ability.html",
        "area": "武器アビリティ",
        "intermission": true
      },
      {
        "id": "abi-im-003",
        "name": "くもがくれ",
        "detail": "ユフィの武器アビリティ。ブーメランに付いている。INTERmissionで覚える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/ability.html",
        "area": "武器アビリティ",
        "intermission": true
      },
      {
        "id": "abi-im-004",
        "name": "疾風怒涛",
        "detail": "ユフィの武器アビリティ。五輪棒に付いている。INTERmissionで覚える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/ability.html",
        "area": "武器アビリティ",
        "intermission": true
      },
      {
        "id": "abi-im-005",
        "name": "怒気集中",
        "detail": "ユフィの武器アビリティ。魔人棒に付いている。INTERmissionで覚える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/ability.html",
        "area": "武器アビリティ",
        "intermission": true
      },
      {
        "id": "abi-im-006",
        "name": "ウータイの闘志",
        "detail": "ユフィの武器アビリティ。金剛棒に付いている。INTERmissionで覚える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/ability.html",
        "area": "武器アビリティ",
        "intermission": true
      }
    ]
  },
  "keyItems": {
    "title": "だいじなもの",
    "lead": "物語で手元に残る品。名前は一覧に合わせ、説明は入手の時期と場所だけを短く書いた。",
    "items": [
      {
        "id": "key-001",
        "name": "モーグリメダル",
        "detail": "所持品のだいじなもの。1章〜、各地、神羅ボックスや宝箱で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-002",
        "name": "黄色い花",
        "detail": "所持品のだいじなもの。2章、八番街・市街地区 LOVELESS通り、花売りの女性から受け取る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-003",
        "name": "バトルレポート",
        "detail": "所持品のだいじなもの。3章、七番街スラム 居住区、クエスト「チャドリーレポート」を終えると渡される。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-004",
        "name": "自警団のカギ",
        "detail": "所持品のだいじなもの。3章、七番街スラム タラガ廃工場、所定の神羅ボックスを壊す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-005",
        "name": "神羅カンパニー社員証",
        "detail": "所持品のだいじなもの。4章、七番街・社宅地区 中層社宅エリア、ジェシーの家で、父親の作業服から失敬。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-006",
        "name": "ワイヤーリール",
        "detail": "所持品のだいじなもの。6章、四番街プレート内部 隔壁下層連絡通路、ビッグスからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-007",
        "name": "伍番魔晄炉のカードキー",
        "detail": "所持品のだいじなもの。7章、伍番魔晄炉 B8F以降のB5F整備フロア、所定の場所で拾う。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-008",
        "name": "秘密基地の入場証",
        "detail": "所持品のだいじなもの。8章、伍番街スラム 子供たちの秘密基地、未開発区域ガマガマ沼で子供達を救った後、報酬としてムギからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-009",
        "name": "墓地のカギ",
        "detail": "所持品のだいじなもの。8章、六番街スラム スラム中心地区、モーグリ・モグの店でモーグリメダルと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-010",
        "name": "スラムエンジェルの予告状",
        "detail": "所持品のだいじなもの。8章、伍番街スラム 物見の高台、クエスト「噂のスラムエンジェル」進行中、物見の高台で拾う。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-011",
        "name": "モーグリ・モグ会員証",
        "detail": "所持品のだいじなもの。8章、伍番街スラム 子供たちの秘密基地、モーグリ・モグの店でモーグリメダルと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-012",
        "name": "サムのコイン",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、サムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-013",
        "name": "コルネオ杯出場券",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、マムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-014",
        "name": "マムの仕事依頼リスト",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、マムの好感度がサムより高いとマムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-015",
        "name": "サムの仕事依頼リスト",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、サムの好感度がマムより高いとサムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-016",
        "name": "ニセモノの予告状",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、クエスト「盗みの代償」開始時に見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-017",
        "name": "ホンモノの予告状",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、クエスト「盗みの代償」クリア時に見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-018",
        "name": "宿屋特製ポーション",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、宿屋の自動販売機で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-019",
        "name": "宿屋特製興奮剤",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、宿屋の自動販売機で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-020",
        "name": "自販機のアレ",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、宿屋の自動販売機で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-021",
        "name": "薬屋商品クーポン",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、定食屋のオヤジで見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-022",
        "name": "消毒薬",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋で薬屋商品クーポンと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-023",
        "name": "消臭薬",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋で薬屋商品クーポンと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-024",
        "name": "消化薬",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋で薬屋商品クーポンと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-025",
        "name": "VIP会員証",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋からもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-026",
        "name": "マムの推薦状",
        "detail": "所持品のだいじなもの。9章、コルネオの館 正面玄関前、着替え終わったエアリスと合流した後に見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-027",
        "name": "アニアンのピアス",
        "detail": "所持品のだいじなもの。9章、蜜蜂の館 ハニーホール、アニアンとのダンスの最終ポイントが112以上で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-028",
        "name": "アニアンの推薦状",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、蜜蜂の館でクラウドがアニアンとダンスを踊った後、蜜蜂の館の前で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-029",
        "name": "アジトの地図",
        "detail": "所持品のだいじなもの。物語の途中で手元に残る品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-030",
        "name": "コルネオ宝物庫のメモ",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 物見の高台 または教会聖堂、クエスト「コルネオの隠し財産」進行中に物見の高台で拾う またはクエスト「おてんば盗賊」クリア時に見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-031",
        "name": "コルネオ宝物庫のカギ",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 教会聖堂、クエスト「おてんば盗賊」クリア時、キリエで見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-032",
        "name": "ジョニーの財布",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 教会聖堂、クエスト「おてんば盗賊」クリア時、キリエで見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-033",
        "name": "スラムエンジェルの手紙",
        "detail": "所持品のだいじなもの。14章、六番街スラム 開発地区、CHAPTER14でマムとサムの仕事依頼を全てクリアする。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-034",
        "name": "大水路への扉のカギ",
        "detail": "所持品のだいじなもの。10章、地下下水道 沈砂池回廊、水路の水を抜くと出現。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-035",
        "name": "ギザールの野菜",
        "detail": "所持品のだいじなもの。14章、伍番街スラム スラム中心地区、クエスト「チョコボを探せ」開始時にチョコボスタッフからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-036",
        "name": "チョコボフリーパス",
        "detail": "所持品のだいじなもの。14章、六番街スラム 七六街道、クエスト「チョコボを探せ」クリア時に見つかるする。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-037",
        "name": "町医者のメモ",
        "detail": "所持品のだいじなもの。14章、伍番街スラム スラム中心地区、クエスト「秘伝の薬」開始時に、町医者からもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-038",
        "name": "薬効の花",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 教会聖堂、教会聖堂に咲いている花を調べる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-039",
        "name": "モーグリのすり鉢",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 子供たちの秘密基地、モーグリ・モグの店でモーグリメダルと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-040",
        "name": "ベヒーモスのツノ",
        "detail": "所持品のだいじなもの。14章、地下実験場B5F E型実験体隔離場、クエスト「地底の咆哮」の依頼を受けて、ベヒーモス零式を倒すと見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-041",
        "name": "ルビーの宝冠",
        "detail": "所持品のだいじなもの。14章、伍番街スラム スチールマウンテン、コルネオ宝物庫の宝箱で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-042",
        "name": "ダイヤの宝冠",
        "detail": "所持品のだいじなもの。14章、陥没道路 崩落トンネル、コルネオ宝物庫の宝箱で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-043",
        "name": "エメラルドの宝冠",
        "detail": "所持品のだいじなもの。14章、地下下水道 旧大水路管路区画 旧汚泥処理区画、コルネオ宝物庫の宝箱で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-044",
        "name": "ワイヤーガン",
        "detail": "所持品のだいじなもの。14章、六番街スラム 開発地区、レズリーからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-045",
        "name": "神羅ビルカードキー",
        "detail": "所持品のだいじなもの。16章、1Fエントランスフロア フロントロビー、受付ブース内で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-046",
        "name": "上級社員カードキー",
        "detail": "所持品のだいじなもの。16章、63F上層 リフレッシュフロア シミュレータラウンジ、チーム「市長最高」をクリアして、協力者で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      },
      {
        "id": "key-047",
        "name": "宝条研究室カードキー",
        "detail": "所持品のだいじなもの。16章、64Fミーティングフロア 研究フロア接続通路、ストーリー進行中、サンプル:H0512戦開始前のムービーが始まる前に宝条に近づき、64Fミーティングフロア「研究フロア接続通路」まで戻ってくると出現し、拾えるようになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": ""
      }
    ]
  },
  "consumables": {
    "title": "消費アイテム",
    "lead": "戦闘で使ってなくなる品。数値は一覧の事実で、文は短くまとめた。",
    "items": [
      {
        "id": "cons-001",
        "name": "ポーション",
        "detail": "味方1人のHPを350戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-002",
        "name": "ハイポーション",
        "detail": "味方1人のHPを700戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-003",
        "name": "メガポーション",
        "detail": "味方1人のHPを1500戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-004",
        "name": "エーテル",
        "detail": "味方1人のMPを20戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-005",
        "name": "エーテルターボ",
        "detail": "味方1人のMPをすべて戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-006",
        "name": "エリクサー",
        "detail": "味方1人のHPとMPをすべて戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-007",
        "name": "フェニックスの尾",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-008",
        "name": "毒消し",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-009",
        "name": "乙女のキッス",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-010",
        "name": "眠気覚まし",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-011",
        "name": "やまびこえんまく",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-012",
        "name": "興奮剤",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-013",
        "name": "鎮静剤",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-014",
        "name": "万能薬",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-015",
        "name": "スピードドリンク",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-016",
        "name": "手榴弾",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-017",
        "name": "有害物質",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-018",
        "name": "クモの糸",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-019",
        "name": "重力球",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-020",
        "name": "ビッグボンバー",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-021",
        "name": "ファイアカクテル",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-022",
        "name": "ムームーちゃん",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      },
      {
        "id": "cons-023",
        "name": "ヘモヘモくん",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": ""
      }
    ]
  },
  "accessories": {
    "title": "アクセサリー",
    "lead": "装備すると能力が変わる装飾品。INTERmissionと同名のものは1件にまとめている。",
    "facet": "area",
    "items": [
      {
        "id": "acc-001",
        "name": "パワーリスト",
        "detail": "力を5%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-002",
        "name": "防弾チョッキ",
        "detail": "体力を5%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-003",
        "name": "イヤリング",
        "detail": "魔力を5%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-004",
        "name": "タリスマン",
        "detail": "精神を5%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-005",
        "name": "フルパワーリスト",
        "detail": "力を10%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-006",
        "name": "サバイバルベスト",
        "detail": "体力を10%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-007",
        "name": "プラチナイヤリング",
        "detail": "魔力を10%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-008",
        "name": "いにしえのお守り",
        "detail": "精神を10%上げる装飾品。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-009",
        "name": "チャンピオンベルト",
        "detail": "最大HPが10%、力を5%上げる装飾品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-010",
        "name": "サークレット",
        "detail": "最大MPが10%、魔力を5%上げる装飾品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-011",
        "name": "星のペンダント",
        "detail": "付けているあいだ、毒状態を防ぐ。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-012",
        "name": "ハチマキ",
        "detail": "付けているあいだ、睡眠状態を防ぐ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-013",
        "name": "守りのブーツ",
        "detail": "付けているあいだ、スロウ、ストップ状態を防ぐ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-014",
        "name": "タロットカード",
        "detail": "付けているあいだ、敵に発生させた不利な状態変化の持続時間が25%長くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-015",
        "name": "不思議な水晶",
        "detail": "付けているあいだ、自分に発生した不利な状態変化の持続時間が25%短くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-016",
        "name": "マジックリング",
        "detail": "付けているあいだ、自分が発生させた有利な状態変化の持続時間が25%長くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-017",
        "name": "怒りの指輪",
        "detail": "付けているあいだ、バトル中、つねにバーサク状態になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-018",
        "name": "カエルの指輪",
        "detail": "付けているあいだ、バトル中、つねにカエル状態になる。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-019",
        "name": "トランスポーター",
        "detail": "付けているあいだ、ATBゲージを消費するたびに、LIMITゲージが「ATBゲージの消費した段階数×20」増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-020",
        "name": "魔法の歯車",
        "detail": "付けているあいだ、魔法を使うたびに、LIMITゲージが「消費MP×2」増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-021",
        "name": "精霊のピアス",
        "detail": "付けているあいだ、バトル中、つねにリレイズ状態になる。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-022",
        "name": "三日月チャーム",
        "detail": "付けているあいだ、バトル中、操作していないパーティメンバーに対し、受けるダメージが20%減る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-023",
        "name": "疾風のスカーフ",
        "detail": "付けているあいだ、バトル開始時のATBゲージ蓄積量が多くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-024",
        "name": "グッドヴィジョン",
        "detail": "付けているあいだ、リミット技「ヴィジョン」を使うと、ATBゲージが満タンになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-025",
        "name": "レスキューバッジ",
        "detail": "付けているあいだ、残りHP25%以下で、バトル中の自分のHP回復量が25%増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-026",
        "name": "ヒールチョーカー",
        "detail": "付けているあいだ、バトル中、自分に対するHP回復量が20% を超える。INTERmissionの店にも並ぶ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "acc-027",
        "name": "幻獣のお守り",
        "detail": "付けているあいだ、自分が呼び出した召喚獣のレベルが通常より5高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-028",
        "name": "モーグリのお守り",
        "detail": "付けているあいだ、敵がアイテムを落とす確率が2倍になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-029",
        "name": "神々の黄昏",
        "detail": "付けているあいだ、バトル開始時にLIMITゲージが満タンになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": ""
      },
      {
        "id": "acc-im-013",
        "name": "絆のくみひも",
        "detail": "付けているあいだ、連携で消費するATBが減少する。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "acc-im-014",
        "name": "赤鬼メモリ",
        "detail": "付けているあいだ、※防具「鬼神の腕輪」専用アクセサリ 残りHPの割合が多いほど与えるダメージが高くなる。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "acc-im-015",
        "name": "青鬼メモリ",
        "detail": "付けているあいだ、※防具「鬼神の腕輪」専用アクセサリ 残りMPの割合が少ないほど与えるダメージが高くなる。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "acc-im-016",
        "name": "リボン",
        "detail": "付けているあいだ、状態変化を防ぐ。魔法の詠唱中にひるみにくくなる。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true
      }
    ]
  },
  "armor": {
    "title": "防具",
    "lead": "腕輪や胸当て。防御の数値だけを残し、入手場所の表は載せていない。",
    "facet": "area",
    "items": [
      {
        "id": "arm-001",
        "name": "ブロンズバングル",
        "detail": "物理防御10、魔法防御10の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-002",
        "name": "アイアンバングル",
        "detail": "物理防御16、魔法防御16の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-003",
        "name": "スターブレス",
        "detail": "物理防御3、魔法防御3の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-004",
        "name": "レザーガード",
        "detail": "物理防御26、魔法防御6の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-005",
        "name": "マジカルの腕輪",
        "detail": "物理防御6、魔法防御26の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-006",
        "name": "チタンバングル",
        "detail": "物理防御25、魔法防御25の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-007",
        "name": "ブラックブレス",
        "detail": "物理防御5、魔法防御5の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-008",
        "name": "ニードルガード",
        "detail": "物理防御40、魔法防御10の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-009",
        "name": "ミスリルの腕輪",
        "detail": "物理防御10、魔法防御40の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-010",
        "name": "ゴシックバングル",
        "detail": "物理防御33、魔法防御33の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-011",
        "name": "ウィザードブレス",
        "detail": "物理防御7、魔法防御7の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-012",
        "name": "プレートガード",
        "detail": "物理防御53、魔法防御13の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-013",
        "name": "ソーサラーの腕輪",
        "detail": "物理防御13、魔法防御53の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-014",
        "name": "マキナバングル",
        "detail": "物理防御39、魔法防御39の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-015",
        "name": "ジオメトリブレス",
        "detail": "物理防御8、魔法防御8の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-016",
        "name": "ハイパーガード",
        "detail": "物理防御62、魔法防御16の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-017",
        "name": "ルーンの指輪",
        "detail": "物理防御16、魔法防御62の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-018",
        "name": "チェインバングル",
        "detail": "物理防御50、魔法防御50の防具。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": ""
      },
      {
        "id": "arm-019",
        "name": "フォースブレス",
        "detail": "物理防御9、魔法防御9の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-020",
        "name": "ヘヴィメタル",
        "detail": "物理防御124、魔法防御20の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-021",
        "name": "ミスティーク",
        "detail": "物理防御20、魔法防御124の防具。INTERmissionでも同名の防具がある。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "intermission": true
      },
      {
        "id": "arm-im-014",
        "name": "忍びの腕輪",
        "detail": "物理防御38、魔法防御38の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "arm-im-015",
        "name": "鬼神の腕輪",
        "detail": "物理防御42、魔法防御42の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "arm-im-016",
        "name": "魔翔の腕輪",
        "detail": "物理防御44、魔法防御44の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true
      },
      {
        "id": "arm-im-017",
        "name": "鳳凰の腕輪",
        "detail": "物理防御46、魔法防御46の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true
      }
    ]
  }
};

globalThis.CATALOGS = CATALOGS;
