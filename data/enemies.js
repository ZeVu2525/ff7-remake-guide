const ENEMIES = [
  {
    id: "e001",
    no: "001",
    name: "警備兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/001.html",
    places: [
      {
        when: "CHAPTER1",
        where: "壱番魔晄炉駅1F、2F、連絡口、B4F",
        level: "6〜7"
      },
      {
        when: "CHAPTER2",
        where: "八番街 市街地区",
        level: "8"
      },
      {
        when: "CHAPTER3",
        where: "七番街スラム 物資保管区",
        level: "10"
      },
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER5",
        where: "螺旋トンネル C・E区画",
        level: "14"
      },
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉 B8・7・6F",
        level: "16"
      },
      {
        when: "CHAPTER8",
        where: "伍番街スラム 教会聖堂",
        level: "17"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "35〜293",
      normal: "64〜533",
      hard: "1014"
    },
    atk: {
      easy: {
        atk: "27〜79",
        matk: "27〜79",
        def: "10〜26",
        mdef: "10〜26"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "27〜79",
        matk: "27〜79",
        def: "10〜26",
        mdef: "10〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "9〜72",
        ap: "2",
        gil: "4〜46"
      },
      hard: {
        exp: "528",
        ap: "6",
        gil: "171"
      },
      normal: {
        exp: "9〜72",
        ap: "2",
        gil: "4〜46"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "手榴弾(5%)",
      steal: "手榴弾(15%)"
    },
    actions: [
      {
        name: "蹴り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "トンファー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "手榴弾",
        type: "物理(遠隔)",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ]
  },
  {
    id: "e002",
    no: "002",
    name: "上級警備兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/002.html",
    places: [
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER5",
        where: "螺旋トンネルE区画",
        level: "14"
      },
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉 B5・8F",
        level: "16"
      },
      {
        when: "CHAPTER8",
        where: "伍番街スラム 教会聖堂",
        level: "17"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER12",
        where: "七番街スラム 七番街支柱3F",
        level: "22"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上65m付近",
        level: "29"
      },
      {
        when: "CHAPTER16",
        where: "神羅ビル B1F地下駐車場、10F・20Fエレベーターホール、66F 宝条研究室メインフロア",
        level: "31"
      }
    ],
    hp: {
      easy: "35〜293",
      normal: "64〜533",
      hard: "1014"
    },
    atk: {
      easy: {
        atk: "27〜79",
        matk: "27〜79",
        def: "10〜26",
        mdef: "10〜26"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "27〜79",
        matk: "27〜79",
        def: "10〜26",
        mdef: "10〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "9〜72",
        ap: "2",
        gil: "4〜46"
      },
      hard: {
        exp: "528",
        ap: "6",
        gil: "171"
      },
      normal: {
        exp: "9〜72",
        ap: "2",
        gil: "4〜46"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "ハイポーション(5%)",
      steal: "ハイポーション(15%)"
    },
    actions: [
      {
        name: "トンファー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ショットガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "手榴弾",
        type: "物理(遠隔)",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ポーション",
        type: "回復",
        element: "-",
        range: "味方単体",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "ハイポーション",
        type: "回復",
        element: "-",
        range: "味方単体",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "メガポーション",
        type: "回復",
        element: "-",
        range: "味方単体",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはハイポーション。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e003",
    no: "003",
    name: "擲弾兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/003.html",
    places: [
      {
        when: "CHAPTER2",
        where: "八番街 市街地区",
        level: "8"
      },
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER5",
        where: "螺旋トンネルC区画",
        level: "14"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "45〜136",
      normal: "81〜248",
      hard: "472"
    },
    atk: {
      easy: {
        atk: "57〜143",
        matk: "57〜143",
        def: "11〜26",
        mdef: "11〜26"
      },
      hard: {
        atk: "301",
        matk: "301",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "57〜143",
        matk: "57〜143",
        def: "11〜26",
        mdef: "11〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "13〜55",
        ap: "2",
        gil: "10〜92"
      },
      hard: {
        exp: "398",
        ap: "6",
        gil: "342"
      },
      normal: {
        exp: "13〜55",
        ap: "2",
        gil: "10〜92"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "興奮剤(5%)",
      steal: "手榴弾(15%)"
    },
    actions: [
      {
        name: "蹴り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "トンファー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "グレネードランチャー",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "クラッカー機雷",
        type: "物理(遠隔)",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは手榴弾。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e004",
    no: "004",
    name: "上級擲弾兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/004.html",
    places: [
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER5",
        where: "螺旋トンネルC区画",
        level: "14"
      },
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B4・5・7F",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER12",
        where: "七番街スラム 七番街支柱3・11F",
        level: "22"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上65m付近",
        level: "29"
      },
      {
        when: "CHAPTER16",
        where: "神羅ビル B1F駐車場、66F宝条研究室 メインフロア",
        level: "31"
      }
    ],
    hp: {
      easy: "120〜359",
      normal: "218〜653",
      hard: "944"
    },
    atk: {
      easy: {
        atk: "69〜184",
        matk: "69〜184",
        def: "13〜31",
        mdef: "13〜31"
      },
      hard: {
        atk: "301",
        matk: "301",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "69〜184",
        matk: "69〜184",
        def: "13〜31",
        mdef: "13〜31"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "13〜55",
        ap: "2",
        gil: "10〜92"
      },
      hard: {
        exp: "398",
        ap: "6",
        gil: "342"
      },
      normal: {
        exp: "13〜55",
        ap: "2",
        gil: "10〜92"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "興奮剤(5%)",
      steal: "手榴弾(15%)"
    },
    actions: [
      {
        name: "蹴り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "トンファー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ナパームランチャー",
        type: "爆発物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "床の炎魔法",
        type: "炎",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "クラッカー機雷",
        type: "物理(遠隔)",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは手榴弾。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e005",
    no: "005",
    name: "鎮圧兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/005.html",
    places: [
      {
        when: "CHAPTER2",
        where: "八番街 市街地区",
        level: "8"
      },
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B4F",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "45〜136",
      normal: "162〜496",
      hard: "944"
    },
    atk: {
      easy: {
        atk: "89〜273",
        matk: "28〜79",
        def: "11〜26",
        mdef: "11〜26"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "89〜273",
        matk: "28〜79",
        def: "11〜26",
        mdef: "11〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "20〜95",
        ap: "2",
        gil: "5〜41"
      },
      hard: {
        exp: "702",
        ap: "6",
        gil: "154"
      },
      normal: {
        exp: "20〜95",
        ap: "2",
        gil: "5〜41"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "鎮静剤(5%)",
      steal: "手榴弾(15%)"
    },
    actions: [
      {
        name: "スタンロッド",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "スタン(3秒)",
        guard: "◯",
        down: "×"
      },
      {
        name: "シールドバッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは手榴弾。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e006",
    no: "006",
    name: "上級鎮圧兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/006.html",
    places: [
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B4F",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER12",
        where: "七番街スラム 七番支柱3F",
        level: "22"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER16",
        where: "神羅ビル B1F地下駐車場、66F宝条研究室 メインフロア",
        level: "31"
      }
    ],
    hp: {
      easy: "583〜1077",
      normal: "1060〜1959",
      hard: "2830"
    },
    atk: {
      easy: {
        atk: "74〜124",
        matk: "58〜99",
        def: "54〜101",
        mdef: "89〜166"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "148",
        mdef: "243"
      },
      normal: {
        atk: "74〜124",
        matk: "58〜99",
        def: "54〜101",
        mdef: "89〜166"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "83〜251",
        ap: "3",
        gil: "49〜152"
      },
      hard: {
        exp: "1342",
        ap: "9",
        gil: "401"
      },
      normal: {
        exp: "83〜251",
        ap: "3",
        gil: "49〜152"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "鎮静剤(5%)",
      steal: "手榴弾(15%)"
    },
    actions: [
      {
        name: "スタンロッド",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "スタン(3秒)",
        guard: "◯",
        down: "×"
      },
      {
        name: "シールドバッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "シールドタックル",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バニッシュロッド",
        type: "魔法",
        element: "-",
        range: "直線上・弾",
        status: "スタン(3秒)",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは手榴弾。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e007",
    no: "007",
    name: "重火兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/007.html",
    places: [
      {
        when: "CHAPTER5",
        where: "螺旋トンネルE区画",
        level: "14"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "618〜1022",
      normal: "1124〜1859",
      hard: "3537"
    },
    atk: {
      easy: {
        atk: "45〜79",
        matk: "94〜154",
        def: "62〜103",
        mdef: "62〜103"
      },
      hard: {
        atk: "148",
        matk: "328",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "45〜79",
        matk: "94〜154",
        def: "62〜103",
        mdef: "62〜103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "51〜120",
        ap: "3",
        gil: "59〜143"
      },
      hard: {
        exp: "890",
        ap: "9",
        gil: "535"
      },
      normal: {
        exp: "51〜120",
        ap: "3",
        gil: "59〜143"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "ハイポーション(5%)",
      steal: "ハイポーション(15%)"
    },
    actions: [
      {
        name: "蹴り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "火炎放射",
        type: "魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "爆裂火炎",
        type: "魔法",
        element: "炎",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはハイポーション。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e008",
    no: "008",
    name: "戦闘員",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/008.html",
    places: [
      {
        when: "CHAPTER1",
        where: "壱番魔晄炉B1・2F※ガードスコーピオン討伐後",
        level: "7"
      },
      {
        when: "CHAPTER2",
        where: "八番街 市街地区",
        level: "8"
      },
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B8F",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "648〜2044",
      normal: "1179〜3717",
      hard: "7074"
    },
    atk: {
      easy: {
        atk: "44〜117",
        matk: "27〜79",
        def: "11〜26",
        mdef: "36〜103"
      },
      hard: {
        atk: "238",
        matk: "148",
        def: "45",
        mdef: "194"
      },
      normal: {
        atk: "44〜117",
        matk: "27〜79",
        def: "11〜26",
        mdef: "36〜103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "19〜151",
        ap: "4",
        gil: "12〜138"
      },
      hard: {
        exp: "1112",
        ap: "12",
        gil: "513"
      },
      normal: {
        exp: "19〜151",
        ap: "4",
        gil: "12〜138"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "手榴弾(10%)",
      steal: "手榴弾(25%)"
    },
    actions: [
      {
        name: "ハンドクロー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ドロップキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バックフリップキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バルクールキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは手榴弾。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e009",
    no: "009",
    name: "特殊戦闘員",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/009.html",
    places: [
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B5・6・8F",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER12",
        where: "七番街スラム 七番支柱12F",
        level: "22"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "1943〜2726",
      normal: "3532〜4956",
      hard: "9432"
    },
    atk: {
      easy: {
        atk: "104〜136",
        matk: "104〜136",
        def: "71〜103",
        mdef: "115〜164"
      },
      hard: {
        atk: "283",
        matk: "283",
        def: "194",
        mdef: "312"
      },
      normal: {
        atk: "104〜136",
        matk: "104〜136",
        def: "71〜103",
        mdef: "115〜164"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "19〜196",
        ap: "5",
        gil: "82〜179"
      },
      hard: {
        exp: "1446",
        ap: "15",
        gil: "667"
      },
      normal: {
        exp: "19〜196",
        ap: "5",
        gil: "82〜179"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "ハイポーション(10%)",
      steal: "ハイポーション(25%)"
    },
    actions: [
      {
        name: "ハンドクロー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ドロップキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バックフリップキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バルクールキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "マシンガンビーム",
        type: "魔法",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "波動",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはハイポーション。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e010",
    no: "010",
    name: "重装甲戦闘員",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/010.html",
    places: [
      {
        when: "CHAPTER16",
        where: "神羅ビル66F 宝条研究室メインフロア",
        level: "31"
      },
      {
        when: "CHAPTER17",
        where: "select神羅バトルシュミレーターHARD限定",
        level: "50"
      }
    ],
    hp: {
      easy: "4937",
      normal: "8976",
      hard: "12969"
    },
    atk: {
      easy: {
        atk: "248",
        matk: "99",
        def: "259",
        mdef: "45"
      },
      hard: {
        atk: "418",
        matk: "148",
        def: "379",
        mdef: "45"
      },
      normal: {
        atk: "248",
        matk: "99",
        def: "259",
        mdef: "45"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "462",
        ap: "4",
        gil: "975"
      },
      hard: {
        exp: "2446",
        ap: "12",
        gil: "2565"
      },
      normal: {
        exp: "462",
        ap: "4",
        gil: "975"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "興奮剤(5%)",
      steal: "興奮剤(5%)"
    },
    actions: [
      {
        name: "サークルスラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ローラーダッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ワイドマシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "装甲解除",
        type: "物理(遠隔)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    tactic: "雷が通りやすい。盗めるのは興奮剤。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e011",
    no: "011",
    name: "強化戦闘員",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/011.html",
    places: [
      {
        when: "CHAPTER16",
        where: "神羅ビル66F 宝条研究室メインフロア",
        level: "31"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第五層、select神羅バトルシュミレーターHARD限定",
        level: "31"
      }
    ],
    hp: {
      easy: "1616",
      normal: "2938",
      hard: "4245"
    },
    atk: {
      easy: {
        atk: "124",
        matk: "174",
        def: "31",
        mdef: "259"
      },
      hard: {
        atk: "193",
        matk: "283",
        def: "45",
        mdef: "379"
      },
      normal: {
        atk: "124",
        matk: "174",
        def: "31",
        mdef: "259"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "247",
        ap: "1",
        gil: "351"
      },
      hard: {
        exp: "1324",
        ap: "3",
        gil: "923"
      },
      normal: {
        exp: "247",
        ap: "1",
        gil: "351"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "興奮剤(5%)",
      steal: "興奮剤(5%)"
    },
    actions: [
      {
        name: "ローラーダッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ローラースピン",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "バックフリップキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "トルネードスピン",
        type: "魔法",
        element: "風",
        range: "攻撃軌道上・弾",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "リフレク",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "リフレク (60秒)",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "盗めるのは興奮剤。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e012",
    no: "012",
    name: "空中兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/012.html",
    places: [
      {
        when: "CHAPTER12",
        where: "七番街支柱5・6・11・12F",
        level: "22"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上65m付近",
        level: "29"
      }
    ],
    hp: {
      easy: "2220〜2759",
      normal: "4036〜5016",
      hard: "8253"
    },
    atk: {
      easy: {
        atk: "128〜167",
        matk: "73〜93",
        def: "58〜73",
        mdef: "22〜28"
      },
      hard: {
        atk: "283",
        matk: "148",
        def: "120",
        mdef: "45"
      },
      normal: {
        atk: "128〜167",
        matk: "73〜93",
        def: "58〜73",
        mdef: "22〜28"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0※",
        stagger: "×2.0※"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "158〜284",
        ap: "4",
        gil: "96〜174"
      },
      hard: {
        exp: "1668",
        ap: "12",
        gil: "513"
      },
      normal: {
        exp: "158〜284",
        ap: "4",
        gil: "96〜174"
      }
    },
    items: {
      drop: "ﾊｲﾎﾟｰｼｮﾝ(8%)",
      rare: "重力球(5%)",
      steal: "重力球(5%)"
    },
    actions: [
      {
        name: "キック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "プロペラ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "プロペラソード",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎・風が通りやすい。盗めるのは重力球。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e013",
    no: "013",
    name: "特殊空中兵",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/013.html",
    places: [
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select神羅バトルシミュレーター",
        level: "35〜50"
      }
    ],
    hp: {
      easy: "1892〜2361",
      normal: "3440〜4292",
      hard: "5660"
    },
    atk: {
      easy: {
        atk: "167〜196",
        matk: "118〜138",
        def: "161〜200",
        mdef: "117〜145"
      },
      hard: {
        atk: "283",
        matk: "193",
        def: "268",
        mdef: "194"
      },
      normal: {
        atk: "167〜196",
        matk: "118〜138",
        def: "161〜200",
        mdef: "117〜145"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0※",
        stagger: "×2.0※"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "379〜535",
        ap: "5",
        gil: "226〜320"
      },
      hard: {
        exp: "2226",
        ap: "15",
        gil: "667"
      },
      normal: {
        exp: "379〜535",
        ap: "5",
        gil: "226〜320"
      }
    },
    items: {
      drop: "ﾒｶﾞﾎﾟｰｼｮﾝ(8%)",
      rare: "重力球(5%)",
      steal: "重力球(5%)"
    },
    actions: [
      {
        name: "キック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "プロペラ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "プロペラソード",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "双刃乱舞",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "火炎放射",
        type: "魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ケミカルガス",
        type: "噴射ガス魔法",
        element: "-",
        range: "自分前方",
        status: "かなしい(永続)",
        guard: "△",
        down: "×"
      },
      {
        name: "地面のガス魔法",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      }
    ],
    tactic: "炎・風が通りやすい。盗めるのは重力球。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e014",
    no: "014",
    name: "ソルジャー3rd",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/014.html",
    places: [
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上65m付近",
        level: "29"
      },
      {
        when: "CHAPTER16",
        where: "神羅ビルB1F 地下駐車場、神羅バトルシミュレーター",
        level: "31〜35"
      },
      {
        when: "CHAPTER17",
        where: "select神羅バトルシミュレーター",
        level: "35〜50"
      }
    ],
    hp: {
      easy: "3153〜3934",
      normal: "5732〜7152",
      hard: "9432"
    },
    atk: {
      easy: {
        atk: "167〜196",
        matk: "118〜138",
        def: "73〜90",
        mdef: "117〜145"
      },
      hard: {
        atk: "283",
        matk: "193",
        def: "120",
        mdef: "194"
      },
      normal: {
        atk: "167〜196",
        matk: "118〜138",
        def: "73〜90",
        mdef: "117〜145"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "473〜668",
        ap: "6",
        gil: "261〜369"
      },
      hard: {
        exp: "2780",
        ap: "18",
        gil: "770"
      },
      normal: {
        exp: "473〜668",
        ap: "6",
        gil: "261〜369"
      }
    },
    items: {
      drop: "ﾒｶﾞﾎﾟｰｼｮﾝ(12%)",
      rare: "ｴｰﾃﾙﾀｰﾎ(5%)",
      steal: "ｴｰﾃﾙﾀｰﾎﾞ(5%)"
    },
    actions: [
      {
        name: "連続攻撃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "飛翔閃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "真空波",
        type: "魔法",
        element: "風",
        range: "直線上・弾",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "かまいたち",
        type: "魔法",
        element: "風",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ブリザド",
        type: "弾魔法",
        element: "氷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "氷塊魔法",
        type: "氷",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "ブリザラ",
        type: "弾魔法",
        element: "氷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "氷塊魔法",
        type: "氷",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "サンダー",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "サンダラ",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "スリプル",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "睡眠(40秒)",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはｴｰﾃﾙﾀｰﾎﾞ。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e015",
    no: "015",
    name: "ガードハウンド",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/015.html",
    places: [
      {
        when: "CHAPTER1",
        where: "壱番魔晄炉 連絡口",
        level: "7"
      },
      {
        when: "CHAPTER2",
        where: "八番街 市街地区",
        level: "8"
      },
      {
        when: "CHAPTER3",
        where: "七番街スラム 物資保管区",
        level: "10"
      },
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER5",
        where: "螺旋トンネル C区画",
        level: "14"
      },
      {
        when: "CHAPTER16",
        where: "神羅ビルB1F 地下駐車場",
        level: "31"
      }
    ],
    hp: {
      easy: "648〜2693",
      normal: "1179〜4896",
      hard: "7074"
    },
    atk: {
      easy: {
        atk: "32〜114",
        matk: "27〜99",
        def: "11〜31",
        mdef: "11〜31"
      },
      hard: {
        atk: "175",
        matk: "148",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "32〜114",
        matk: "27〜99",
        def: "11〜31",
        mdef: "11〜31"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "13〜145",
        ap: "8",
        gil: "6〜101"
      },
      hard: {
        exp: "774",
        ap: "9",
        gil: "268"
      },
      normal: {
        exp: "13〜145",
        ap: "8",
        gil: "6〜101"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "ポーション(5%)",
      steal: "ポーション(20%)"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スナップウィップ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ネックバイト※",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      }
    ],
    tactic: "氷が通りやすい。盗めるのはポーション。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e016",
    no: "016",
    name: "レイジハウンド",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/016.html",
    places: [
      {
        when: "CHAPTER3",
        where: "さまよう軍犬",
        level: "11"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "地下実験室B2F、コルネオ・コロッセオ",
        level: "23〜25"
      }
    ],
    hp: {
      easy: "3473〜10222",
      normal: "6315〜18585",
      hard: "35370"
    },
    atk: {
      easy: {
        atk: "101〜229",
        matk: "33〜79",
        def: "60〜141",
        mdef: "35〜80"
      },
      hard: {
        atk: "508",
        matk: "148",
        def: "268",
        mdef: "148"
      },
      normal: {
        atk: "101〜229",
        matk: "33〜79",
        def: "60〜141",
        mdef: "35〜80"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "20〜65",
        ap: "8",
        gil: "266〜1239"
      },
      hard: {
        exp: "476",
        ap: "24",
        gil: "4592"
      },
      normal: {
        exp: "20〜65",
        ap: "8",
        gil: "266〜1239"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スナップウィップ",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "スピアウィップ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ネックバイト",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      }
    ],
    tactic: "氷が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e017",
    no: "017",
    name: "ブラッドテイスト",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/017.html",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 地下闘技場",
        level: "17"
      },
      {
        when: "CHAPTER13",
        where: "地下実験場B2・5・6F",
        level: "23"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第六層、select神羅バトルシミュレーター",
        level: "31〜35"
      }
    ],
    hp: {
      easy: "1115〜2164",
      normal: "2027〜3934",
      hard: "5188"
    },
    atk: {
      easy: {
        atk: "92〜167",
        matk: "60〜109",
        def: "46〜90",
        mdef: "74〜145"
      },
      hard: {
        atk: "238",
        matk: "148",
        def: "120",
        mdef: "194"
      },
      normal: {
        atk: "92〜167",
        matk: "60〜109",
        def: "46〜90",
        mdef: "74〜145"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "69〜248",
        ap: "3",
        gil: "26〜96"
      },
      hard: {
        exp: "1044",
        ap: "9",
        gil: "201"
      },
      normal: {
        exp: "69〜248",
        ap: "3",
        gil: "26〜96"
      }
    },
    items: {
      drop: "毒消し(12%)",
      rare: "毒消し(5%)",
      steal: "毒消し(25%)"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スナップウィップ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ネックバイト",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "ドレインウィップ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      }
    ],
    tactic: "氷が通りやすい。盗めるのは毒消し。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e018",
    no: "018",
    name: "モノドライブ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/018.html",
    places: [
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B2・4・5・7F",
        level: "16"
      },
      {
        when: "CHAPTER13",
        where: "地下実験場B2F",
        level: "23"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第一・三層、 select 神羅バトルシミュレーター",
        level: "31〜35"
      }
    ],
    hp: {
      easy: "648〜2693",
      normal: "217〜984",
      hard: "1298"
    },
    atk: {
      easy: {
        atk: "119〜541",
        matk: "27〜109",
        def: "1",
        mdef: "12〜38"
      },
      hard: {
        atk: "148",
        matk: "166",
        def: "1",
        mdef: "50"
      },
      normal: {
        atk: "119〜541",
        matk: "27〜109",
        def: "1",
        mdef: "12〜38"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "6〜85",
        ap: "3",
        gil: "4〜82"
      },
      hard: {
        exp: "352",
        ap: "9",
        gil: "171"
      },
      normal: {
        exp: "6〜85",
        ap: "3",
        gil: "4〜82"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "エーテル(5%)※",
      steal: "エーテル(5%)"
    },
    actions: [
      {
        name: "ドリルドライブ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "風が通りやすい。盗めるのはエーテル。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e019",
    no: "019",
    name: "ピアシングアイ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/019.html",
    places: [
      {
        when: "CHAPTER8",
        where: "暴走兵器",
        level: "18"
      },
      {
        when: "CHAPTER14",
        where: "地下実験室B2F",
        level: "23"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第三層",
        level: "31"
      }
    ],
    hp: {
      easy: "2026〜3590",
      normal: "3684〜6528",
      hard: "9432"
    },
    atk: {
      easy: {
        atk: "140〜223",
        matk: "140〜223",
        def: "17〜31",
        mdef: "17〜31"
      },
      hard: {
        atk: "373",
        matk: "373",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "140〜223",
        matk: "140〜223",
        def: "17〜31",
        mdef: "17〜31"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "32〜90",
        ap: "4",
        gil: "101〜300"
      },
      hard: {
        exp: "476",
        ap: "12",
        gil: "787"
      },
      normal: {
        exp: "32〜90",
        ap: "4",
        gil: "101〜300"
      }
    },
    items: {
      drop: "ハイポーション(12%)",
      rare: "エーテルターボ(5%)",
      steal: "エーテルターボ(5%)"
    },
    actions: [
      {
        name: "ドリルドライブ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "グラウンドドリル",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "トリプルファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・球",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "物理耐性付与",
        type: "-",
        element: "-",
        range: "味方単体",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "風が通りやすい。盗めるのはエーテルターボ。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e020",
    no: "020",
    name: "ファーストレイ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/020.html",
    places: [
      {
        when: "CHAPTER1",
        where: "壱番魔晄炉B1・8F",
        level: "7"
      },
      {
        when: "CHAPTER4",
        where: "八番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER6",
        where: "四番街プレート内部 中層・下層・上層",
        level: "15"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "130〜409",
      normal: "236〜744",
      hard: "1415"
    },
    atk: {
      easy: {
        atk: "27〜79",
        matk: "27〜79",
        def: "11〜26",
        mdef: "11〜26"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "27〜79",
        matk: "27〜79",
        def: "11〜26",
        mdef: "11〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "7〜56",
        ap: "1",
        gil: "3〜35"
      },
      hard: {
        exp: "410",
        ap: "3",
        gil: "128"
      },
      normal: {
        exp: "7〜56",
        ap: "1",
        gil: "3〜35"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "レーザー",
        type: "魔法",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e021",
    no: "021",
    name: "レーザーキャノン",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/021.html",
    places: [
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B6・7F",
        level: "14"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "389〜546",
      normal: "707〜992",
      hard: "1887"
    },
    atk: {
      easy: {
        atk: "58〜79",
        matk: "89〜117",
        def: "16〜26",
        mdef: "16〜26"
      },
      hard: {
        atk: "148",
        matk: "238",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "58〜79",
        matk: "89〜117",
        def: "16〜26",
        mdef: "16〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "風",
        damage: "×0.1",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "62〜135",
        ap: "2",
        gil: "11〜24"
      },
      hard: {
        exp: "1006",
        ap: "6",
        gil: "89"
      },
      normal: {
        exp: "62〜135",
        ap: "2",
        gil: "11〜24"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "レーザー",
        type: "魔法",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。風半減以下。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e022",
    no: "022",
    name: "ミサイルランチャー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/022.html",
    places: [
      {
        when: "CHAPTER5",
        where: "螺旋トンネルE区画",
        level: "14"
      },
      {
        when: "CHAPTER6",
        where: "四番街プレート内部 中層",
        level: "15"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "1442〜3142",
      normal: "2622〜5712",
      hard: "8253"
    },
    atk: {
      easy: {
        atk: "119〜248",
        matk: "70〜149",
        def: "99〜219",
        mdef: "15〜31"
      },
      hard: {
        atk: "418",
        matk: "238",
        def: "312",
        mdef: "45"
      },
      normal: {
        atk: "119〜248",
        matk: "70〜149",
        def: "99〜219",
        mdef: "15〜31"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "77〜252",
        ap: "3",
        gil: "46〜156"
      },
      hard: {
        exp: "1334",
        ap: "9",
        gil: "410"
      },
      normal: {
        exp: "77〜252",
        ap: "3",
        gil: "46〜156"
      }
    },
    items: {
      drop: "重力球(5%)",
      rare: "-",
      steal: "重力球(10%)"
    },
    actions: [
      {
        name: "ミサイル",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "全弾発射",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "電磁リジェクター",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    tactic: "雷が通りやすい。盗めるのは重力球。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e023",
    no: "023",
    name: "プロトマシンガン",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/023.html",
    places: [
      {
        when: "CHAPTER5",
        where: "螺旋トンネルE区画",
        level: "14"
      },
      {
        when: "CHAPTER6",
        where: "四番街プレート内部 中層",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "365〜546",
      normal: "664〜992",
      hard: "1887"
    },
    atk: {
      easy: {
        atk: "52〜79",
        matk: "52〜79",
        def: "68〜103",
        mdef: "16〜26"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "52〜79",
        matk: "52〜79",
        def: "68〜103",
        mdef: "16〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "風",
        damage: "×0.1",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "51〜107",
        ap: "3",
        gil: "43〜95"
      },
      hard: {
        exp: "780",
        ap: "9",
        gil: "357"
      },
      normal: {
        exp: "51〜107",
        ap: "3",
        gil: "43〜95"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "オーバーフロー",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。風半減以下。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e024",
    no: "024",
    name: "マシンガン",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/024.html",
    places: [
      {
        when: "CHAPTER12",
        where: "七番街スラム 七番街支柱2・8・9・12F",
        level: "31"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "634〜681",
      normal: "1153〜1239",
      hard: "2358"
    },
    atk: {
      easy: {
        atk: "73〜79",
        matk: "73〜79",
        def: "161〜164",
        mdef: "22〜26"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "312",
        mdef: "45"
      },
      normal: {
        atk: "73〜79",
        matk: "73〜79",
        def: "161〜164",
        mdef: "22〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "風",
        damage: "×0.1",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "92〜133",
        ap: "2",
        gil: "17〜24"
      },
      hard: {
        exp: "1002",
        ap: "6",
        gil: "89"
      },
      normal: {
        exp: "92〜133",
        ap: "2",
        gil: "17〜24"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "フォーカスシュート",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。風半減以下。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e025",
    no: "025",
    name: "スタンレイ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/025.html",
    places: [
      {
        when: "CHAPTER4",
        where: "バイクゲーム",
        level: "-"
      },
      {
        when: "CHAPTER5",
        where: "四番街行 臨時列車、螺旋トンネルC・E区画",
        level: "14"
      },
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B5F",
        level: "16"
      },
      {
        when: "CHAPTER12",
        where: "七番街スラム 七番街支柱3・8・9・10F",
        level: "22"
      },
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上100・115・145m付近",
        level: "29"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第四層、select神羅バトルシュミレーター",
        level: "31〜35"
      },
      {
        when: "CHAPTER18",
        where: "バイクゲーム",
        level: "-"
      }
    ],
    hp: {
      easy: "388〜1082",
      normal: "706〜1967",
      hard: "2358〜2594"
    },
    atk: {
      easy: {
        atk: "55〜138",
        matk: "43〜109",
        def: "59〜234",
        mdef: "15〜34"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "194〜312",
        mdef: "45"
      },
      normal: {
        atk: "55〜138",
        matk: "43〜109",
        def: "59〜234",
        mdef: "15〜34"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×2.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "28〜147",
        ap: "2",
        gil: "43〜234"
      },
      hard: {
        exp: "620",
        ap: "6",
        gil: "491"
      },
      normal: {
        exp: "28〜147",
        ap: "2",
        gil: "43〜234"
      }
    },
    items: {
      drop: "ハイポーション(5%)",
      rare: "重力球(5%)",
      steal: "重力球(5%)"
    },
    actions: [
      {
        name: "デンタクルスピア",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "マシンガン",
        type: "地上時物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "空中時物理(遠隔)",
        type: "-",
        element: "直線上・弾",
        range: "△",
        status: "×"
      },
      {
        name: "一斉射撃",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "電磁機雷",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "シャインブラスト",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "スタン(2秒)",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。盗めるのは重力球。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e026",
    no: "026",
    name: "スタンテイザー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/026.html",
    places: [
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上100・115・145m付近",
        level: "29"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第四層",
        level: "31"
      }
    ],
    hp: {
      easy: "710〜808",
      normal: "1290〜1469",
      hard: "2123"
    },
    atk: {
      easy: {
        atk: "118〜124",
        matk: "118〜124",
        def: "28〜31",
        mdef: "188〜213"
      },
      hard: {
        atk: "193",
        matk: "193",
        def: "45",
        mdef: "312"
      },
      normal: {
        atk: "118〜124",
        matk: "118〜124",
        def: "28〜31",
        mdef: "188〜213"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×2.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "105〜116",
        ap: "2",
        gil: "166〜186"
      },
      hard: {
        exp: "620",
        ap: "6",
        gil: "491"
      },
      normal: {
        exp: "105〜116",
        ap: "2",
        gil: "166〜186"
      }
    },
    items: {
      drop: "ﾊｲﾎﾟｰｼｮﾝ(5%)",
      rare: "重力球(5%)",
      steal: "重力球(5%)"
    },
    actions: [
      {
        name: "デンタクルスピア",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "エナジーキャノン",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "スタン(2秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "一斉射撃",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "スタン(2秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "バリア",
        type: "魔法",
        element: "-",
        range: "味方単体",
        status: "バリア(60秒)",
        guard: "-",
        down: "-"
      },
      {
        name: "マバリア",
        type: "魔法",
        element: "-",
        range: "味方単体",
        status: "マバリア(60秒)",
        guard: "-",
        down: "-"
      },
      {
        name: "リペア",
        type: "魔法",
        element: "-",
        range: "味方単体",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "雷が通りやすい。盗めるのは重力球。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e027",
    no: "027",
    name: "グレネードソーサー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/027.html",
    places: [
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上120・145m付近",
        level: "29"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第四層、select神羅バトルシミュレーター",
        level: "35〜50"
      }
    ],
    hp: {
      easy: "5517〜6884",
      normal: "10031〜12516",
      hard: "16506"
    },
    atk: {
      easy: {
        atk: "167〜196",
        matk: "167〜195",
        def: "235〜293",
        mdef: "188〜234"
      },
      hard: {
        atk: "283",
        matk: "283",
        def: "392",
        mdef: "312"
      },
      normal: {
        atk: "167〜196",
        matk: "167〜195",
        def: "235〜293",
        mdef: "188〜234"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "540〜762",
        ap: "5",
        gil: "245〜347"
      },
      hard: {
        exp: "3168",
        ap: "15",
        gil: "722"
      },
      normal: {
        exp: "540〜762",
        ap: "5",
        gil: "245〜347"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "ﾌﾟﾚｰﾄｶﾞｰﾄﾞ(5%)",
      steal: "ﾌﾟﾚｰﾄｶﾞｰﾄﾞ(5%)"
    },
    actions: [
      {
        name: "デンタクルスピア",
        type: "跳びはじめ物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "着地物理(近接)",
        type: "-",
        element: "自分周囲",
        range: "◯",
        status: "◯"
      },
      {
        name: "衝撃波物理(近接)",
        type: "-",
        element: "自分周囲",
        range: "◯",
        status: "×"
      },
      {
        name: "グレネード",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "集中砲火",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "タレットミサイル",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "タレット電磁機雷",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "電撃",
        type: "電撃魔法",
        element: "雷",
        range: "敵単体・弾",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "放電魔法",
        type: "雷",
        element: "自分周囲",
        range: "△",
        status: "◯"
      }
    ],
    tactic: "雷が通りやすい。盗めるのはﾌﾟﾚｰﾄｶﾞｰﾄﾞ。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e028",
    no: "028",
    name: "スィーパー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/028.html",
    places: [
      {
        when: "CHAPTER1",
        where: "壱番魔晄炉B4F",
        level: "7"
      },
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B6F",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "23"
      },
      {
        when: "CHAPTER14",
        where: "地下実験室B2F、コルネオ・コロッセオ",
        level: "23"
      }
    ],
    hp: {
      easy: "1621〜5111",
      normal: "2948〜9293",
      hard: "17685"
    },
    atk: {
      easy: {
        atk: "60〜154",
        matk: "60〜154",
        def: "80〜180",
        mdef: "11〜26"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "45"
      },
      normal: {
        atk: "60〜154",
        matk: "60〜154",
        def: "80〜180",
        mdef: "11〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "27〜216",
        ap: "5",
        gil: "15〜177"
      },
      hard: {
        exp: "1584",
        ap: "15",
        gil: "656"
      },
      normal: {
        exp: "27〜216",
        ap: "5",
        gil: "15〜177"
      }
    },
    items: {
      drop: "ﾌｪﾆｯｸｽの尾(10%)",
      rare: "エーテル(5%)",
      steal: "エーテル(5%)"
    },
    actions: [
      {
        name: "突撃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "フットスタンプ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ダブルマシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "スモークショット",
        type: "魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。盗めるのはエーテル。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e029",
    no: "029",
    name: "プロトスィーパー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/029.html",
    places: [
      {
        when: "CHAPTER9",
        where: "陥没道路 機械の墓地①、配管通路①",
        level: "17"
      },
      {
        when: "CHAPTER13",
        where: "陥没道路 旧バイパス",
        level: "21"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "4813〜9342",
      normal: "8750〜16986",
      hard: "22401"
    },
    atk: {
      easy: {
        atk: "156〜282",
        matk: "156〜282",
        def: "131〜256",
        mdef: "17〜34"
      },
      hard: {
        atk: "418",
        matk: "418",
        def: "342",
        mdef: "45"
      },
      normal: {
        atk: "156〜282",
        matk: "156〜282",
        def: "131〜256",
        mdef: "17〜34"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "32〜114",
        ap: "6",
        gil: "210〜788"
      },
      hard: {
        exp: "476",
        ap: "18",
        gil: "1640"
      },
      normal: {
        exp: "32〜114",
        ap: "6",
        gil: "210〜788"
      }
    },
    items: {
      drop: "ﾌｪﾆｯｸｽの尾(10%)",
      rare: "ｴｰﾃﾙﾀｰﾎﾞ(5%)",
      steal: "ｴｰﾃﾙﾀｰﾎﾞ(5%)"
    },
    actions: [
      {
        name: "突撃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "フットスタンプ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ミサイル",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ダブルマシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ダブルミサイル",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "スモークショット",
        type: "発射した炎 魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "床の炎魔法",
        type: "炎",
        element: "設置周囲",
        range: "×",
        status: "×"
      }
    ],
    tactic: "雷が通りやすい。盗めるのはｴｰﾃﾙﾀｰﾎﾞ。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e030",
    no: "030",
    name: "カッターマシン",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/030.html",
    places: [
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉B4F",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "六番街スラム 地下闘技場",
        level: "17"
      },
      {
        when: "CHAPTER13",
        where: "地下実験室B2F",
        level: "23"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "31"
      }
    ],
    hp: {
      easy: "4857〜9834",
      normal: "8830〜17880",
      hard: "23580"
    },
    atk: {
      easy: {
        atk: "150〜282",
        matk: "58〜109",
        def: "98〜200",
        mdef: "71〜145"
      },
      hard: {
        atk: "418",
        matk: "148",
        def: "268",
        mdef: "194"
      },
      normal: {
        atk: "150〜282",
        matk: "58〜109",
        def: "98〜200",
        mdef: "71〜145"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "119〜457",
        ap: "5",
        gil: "96〜378"
      },
      hard: {
        exp: "1900",
        ap: "15",
        gil: "757"
      },
      normal: {
        exp: "119〜457",
        ap: "5",
        gil: "96〜378"
      }
    },
    items: {
      drop: "やまびこえんまく(12%)",
      rare: "ﾌｪﾆｯｸｽの尾(5%)",
      steal: "やまびこえんまく(15%)"
    },
    actions: [
      {
        name: "チェーンソー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "回転のこぎり",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "突撃",
        type: "カッター物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "連続のこぎり",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "振り下ろし",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "プレートディスク",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "サイレスガス",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "沈黙(40秒)",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。盗めるのはやまびこえんまく。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e031",
    no: "031",
    name: "カッターマシン=カスタム",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/031.html",
    places: [
      {
        when: "CHAPTER9",
        where: "逆襲の刃、コルネオ・コロッセオ",
        level: "17"
      }
    ],
    hp: {
      easy: "7598〜10222",
      normal: "13815〜18585",
      hard: "35370"
    },
    atk: {
      easy: {
        atk: "156〜192",
        matk: "60〜79",
        def: "17~26",
        mdef: "74~103"
      },
      hard: {
        atk: "418",
        matk: "148",
        def: "45",
        mdef: "194"
      },
      normal: {
        atk: "156〜192",
        matk: "60〜79",
        def: "17~26",
        mdef: "74~103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "231〜475",
        ap: "9",
        gil: "336〜708"
      },
      hard: {
        exp: "3484",
        ap: "27",
        gil: "2624"
      },
      normal: {
        exp: "231〜475",
        ap: "9",
        gil: "336〜708"
      }
    },
    items: {
      drop: "エーテル(100%)",
      rare: "-",
      steal: "エーテルターボ(25%)"
    },
    actions: [
      {
        name: "チェーンソー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "回転のこぎり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "突撃",
        type: "カッター物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突 進物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "連続のこぎり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "みじんぎり",
        type: "斬りつけ物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "振り下ろし物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "カウンタースラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "フットスタンプ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ブレードディスク",
        type: "物理(近接)",
        element: "-",
        range: "攻撃軌道上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "アンガーガス",
        type: "魔法",
        element: "-",
        range: "自分前方/td> いかり",
        status: "△",
        guard: "×"
      }
    ],
    tactic: "雷が通りやすい。盗めるのはエーテルターボ。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e032",
    no: "032",
    name: "モススラッシャー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/032.html",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第三・四層、select神羅バトルシミュレーターHARD限定",
        level: "31〜50"
      }
    ],
    hp: {
      easy: "6732",
      normal: "12240",
      hard: "17685"
    },
    atk: {
      easy: {
        atk: "174",
        matk: "248",
        def: "183",
        mdef: "183"
      },
      hard: {
        atk: "283",
        matk: "418",
        def: "268",
        mdef: "268"
      },
      normal: {
        atk: "174",
        matk: "248",
        def: "183",
        mdef: "183"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効※"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "無効※"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "無効※"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効※"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "無効※"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "無効※"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "750",
        ap: "6",
        gil: "500"
      },
      hard: {
        exp: "3960",
        ap: "18",
        gil: "1312"
      },
      normal: {
        exp: "750",
        ap: "6",
        gil: "500"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "ﾍｳﾞｨﾒﾀﾙ(5%)"
    },
    actions: [
      {
        name: "ダブルクロー",
        type: "左腕物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "右腕物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "スピードラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ラッシュアタック",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "カッタースピン",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "カッターストーム",
        type: "回転刃物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "カッター魔法",
        type: "-",
        element: "攻撃軌道上・弾",
        range: "△",
        status: "◯"
      },
      {
        name: "放電",
        type: "魔法",
        element: "雷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ハイボルテージ",
        type: "魔法",
        element: "雷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "オーバーレブ",
        type: "魔法",
        element: "雷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    tactic: "雷・風が通りやすい。盗めるのはﾍｳﾞｨﾒﾀﾙ。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e033",
    no: "033",
    name: "ゼネネ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/033.html",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第四・六層、select神羅バトルシミュレーターHARD限定",
        level: "31〜50"
      }
    ],
    hp: {
      easy: "4488",
      normal: "8160",
      hard: "11790"
    },
    atk: {
      easy: {
        atk: "174",
        matk: "174",
        def: "31",
        mdef: "132"
      },
      hard: {
        atk: "283",
        matk: "283",
        def: "45",
        mdef: "194"
      },
      normal: {
        atk: "174",
        matk: "174",
        def: "31",
        mdef: "132"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "357",
        ap: "5",
        gil: "98"
      },
      hard: {
        exp: "1890",
        ap: "15",
        gil: "257"
      },
      normal: {
        exp: "357",
        ap: "5",
        gil: "98"
      }
    },
    items: {
      drop: "エーテル(8%)",
      rare: "有害物質(5%)",
      steal: "万能薬(5%)"
    },
    actions: [
      {
        name: "キバ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "回転トゲ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ネックバイト",
        type: "跳びつき 物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき 物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "毒モードチェンジ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "プアゾシャワー",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "毒(180秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "ゲヘナガナー",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "毒(180秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "ゲヘナガナー (毒モード時)",
        type: "吐いた毒液 魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "毒(120%)",
        guard: "△",
        down: "×"
      },
      {
        name: "地面の毒液 魔法",
        type: "-",
        element: "設置周囲",
        range: "△",
        status: "×"
      }
    ],
    tactic: "炎半減以下。盗めるのは万能薬。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e034",
    no: "034",
    name: "デジョンハンマ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/034.html",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟第四・六層、select神羅バトルシミュレーターHARD限定",
        level: "31〜50"
      }
    ],
    hp: {
      easy: "3321",
      normal: "6039",
      hard: "8725"
    },
    atk: {
      easy: {
        atk: "297",
        matk: "174",
        def: "132",
        mdef: "213"
      },
      hard: {
        atk: "508",
        matk: "283",
        def: "194",
        mdef: "312"
      },
      normal: {
        atk: "297",
        matk: "174",
        def: "132",
        mdef: "213"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×0.1",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "600",
        ap: "7",
        gil: "275"
      },
      hard: {
        exp: "3168",
        ap: "21",
        gil: "722"
      },
      normal: {
        exp: "600",
        ap: "7",
        gil: "275"
      }
    },
    items: {
      drop: "重力球(10%)",
      rare: "やまびこえんまく(5%)",
      steal: "やまびこえんまく(5%)"
    },
    actions: [
      {
        name: "飛び出し",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ハンマーダッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ロック クラッシャー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "フェイタル ストライク",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ハンマーウェーブ",
        type: "物理(遠隔)",
        element: "-",
        range: "攻撃軌道上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ポイズンハンマー",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "毒(180秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "ストップハンマー",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "ストップ(10秒)",
        guard: "×",
        down: "×"
      },
      {
        name: "土台放電",
        type: "魔法",
        element: "雷",
        range: "-",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    tactic: "雷が通りやすい。風半減以下。盗めるのはやまびこえんまく。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e037",
    no: "037",
    name: "あやしげな男",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/037.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/enemy/img/037.png",
    places: [
      {
        when: "CHAPTER3",
        where: "七番街スラム 居住区",
        level: "11"
      }
    ],
    hp: {
      easy: "A B449 C D598",
      normal: "A B816 C D1088",
      hard: "A B3537 C D4716"
    },
    atk: {
      easy: {
        atk: "46",
        matk: "36",
        def: "47",
        mdef: "13"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "46",
        matk: "36",
        def: "47",
        mdef: "13"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "A42 B D34 C38",
        ap: "1",
        gil: "A75 B D34 C68"
      },
      hard: {
        exp: "A1006 B D774 C928",
        ap: "3",
        gil: "A981 B D446 C892"
      },
      normal: {
        exp: "A42 B D34 C38",
        ap: "1",
        gil: "A75 B D34 C68"
      }
    },
    items: {
      drop: "A B手榴弾(12%)",
      rare: "-",
      steal: "興奮剤(15%)"
    },
    actions: [
      {
        name: "ケンカキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "乱れ斬り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "はがいじめ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは興奮剤。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e038",
    no: "038",
    name: "コルネオの部下",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/038.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/enemy/img/38a.jpg",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 地下闘技場、コルネオの館1F、コルネオ・コロッセオ",
        level: "17"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "20"
      }
    ],
    hp: {
      easy: "A507〜907 B1013〜1209 C E760〜907 D760〜1013 F1013 G760",
      normal: "A921〜1649 B1842〜2198 C E1382〜1649 D1382〜1842 F1842 G1382",
      hard: "A2358〜3537 B F4716 C E G3537 D3537〜4716"
    },
    atk: {
      easy: {
        atk: "A B C E76〜84 D F G76",
        matk: "A B C E60〜66 D F G60",
        def: "A B C E74〜88 D F G74",
        mdef: "A B C E17〜20 D F G17"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "A B C E76〜84 D F G76",
        matk: "A B C E60〜66 D F G60",
        def: "A B C E74〜88 D F G74",
        mdef: "A B C E17〜20 D F G17"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "A B51〜58 C46〜52 D61 E56〜64 F56 G51",
        ap: "1",
        gil: "A C57〜67 B34〜40 D114 E114〜134 F G57"
      },
      hard: {
        exp: "A B C774 C696 D928 E F852",
        ap: "3",
        gil: "A C F G446 B266 D E892"
      },
      normal: {
        exp: "A B51〜58 C46〜52 D61 E56〜64 F56 G51",
        ap: "1",
        gil: "A C57〜67 B34〜40 D114 E114〜134 F G57"
      }
    },
    items: {
      drop: "A F手榴弾(12%)",
      rare: "-",
      steal: "興奮剤(15%)"
    },
    actions: [
      {
        name: "ケンカキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは興奮剤。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e039",
    no: "039",
    name: "猛獣使い",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/039.html",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 地下闘技場",
        level: "17"
      },
      {
        when: "CHAPTER14",
        where: "おてんば盗賊",
        level: "24"
      }
    ],
    hp: {
      easy: "1013〜1321",
      normal: "1842〜2402",
      hard: "4716"
    },
    atk: {
      easy: {
        atk: "76〜97",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "76〜97",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "51〜95",
        ap: "1",
        gil: "0"
      },
      hard: {
        exp: "774",
        ap: "3",
        gil: "0"
      },
      normal: {
        exp: "51〜95",
        ap: "1",
        gil: "0"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "-",
      steal: "興奮剤(15%)"
    },
    actions: [
      {
        name: "ケンカキック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "乱れ斬り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "クモの糸",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "スロウ(40秒)",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは興奮剤。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e040",
    no: "040",
    name: "バグラー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/040.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/enemy/img/040a.png",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 陥没道路下層・配管通路①②、地下闘技場、コルネオ・コロッセオ",
        level: "17〜20"
      },
      {
        when: "CHAPTER14",
        where: "六番街スラム 陥没道路下層、コルネオ・コロッセオ",
        level: "20〜24"
      }
    ],
    hp: {
      easy: "A1013〜1321",
      normal: "A1842〜2402",
      hard: "A4716"
    },
    atk: {
      easy: {
        atk: "76〜97",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "76〜97",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "A82〜152 B61〜114 C51〜95",
        ap: "3",
        gil: "A57〜109 B80〜153 C103〜196"
      },
      hard: {
        exp: "A1238 B928 C774",
        ap: "9",
        gil: "A446 B624 C803"
      },
      normal: {
        exp: "A82〜152 B61〜114 C51〜95",
        ap: "3",
        gil: "A57〜109 B80〜153 C103〜196"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "スピードドリンク(5%)",
      steal: "スピードドリンク(5%)"
    },
    actions: [
      {
        name: "スる",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "しびれ罠",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "スタン(10秒)",
        guard: "◯",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはスピードドリンク。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e041",
    no: "041",
    name: "ベグ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/041.html",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 陥没道路下層、 盗みの代償",
        level: "17"
      },
      {
        when: "CHAPTER14",
        where: "六番街スラム 陥没道路下層",
        level: "24"
      }
    ],
    hp: {
      easy: "608〜793",
      normal: "1106〜1442",
      hard: "2830"
    },
    atk: {
      easy: {
        atk: "92〜117",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      },
      hard: {
        atk: "238",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "92〜117",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "61〜114",
        ap: "3",
        gil: "80〜153"
      },
      hard: {
        exp: "928",
        ap: "9",
        gil: "624"
      },
      normal: {
        exp: "61〜114",
        ap: "3",
        gil: "80〜153"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "スピードドリンク(5%)",
      steal: "スピードドリンク(5%)"
    },
    actions: [
      {
        name: "めった切り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "かっさばく",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スる",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "しびれ罠",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "スタン",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはスピードドリンク。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e042",
    no: "042",
    name: "ブッチョ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/042.html",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 陥没道路下層、 盗みの代償",
        level: "17"
      },
      {
        when: "CHAPTER14",
        where: "六番街スラム 陥没道路下層",
        level: "24"
      }
    ],
    hp: {
      easy: "1013〜1321",
      normal: "1842〜2402",
      hard: "4716"
    },
    atk: {
      easy: {
        atk: "92〜117",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      },
      hard: {
        atk: "238",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "92〜117",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "82〜152",
        ap: "3",
        gil: "57〜109"
      },
      hard: {
        exp: "1238",
        ap: "9",
        gil: "446"
      },
      normal: {
        exp: "82〜152",
        ap: "3",
        gil: "57〜109"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "スピードドリンク(5%)",
      steal: "スピードドリンク(5%)"
    },
    actions: [
      {
        name: "めった切り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "かっさばく",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スる",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "しびれ罠",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "スタン",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはスピードドリンク。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e043",
    no: "043",
    name: "バド",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/043.html",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 陥没道路下層、 盗みの代償",
        level: "17"
      },
      {
        when: "CHAPTER14",
        where: "六番街スラム 陥没道路下層",
        level: "24"
      }
    ],
    hp: {
      easy: "608〜793",
      normal: "1106〜1442",
      hard: "2830"
    },
    atk: {
      easy: {
        atk: "92〜117",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      },
      hard: {
        atk: "238",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "92〜117",
        matk: "60〜77",
        def: "74〜100",
        mdef: "17〜25"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "51〜95",
        ap: "3",
        gil: "103〜196"
      },
      hard: {
        exp: "774",
        ap: "9",
        gil: "803"
      },
      normal: {
        exp: "51〜95",
        ap: "3",
        gil: "103〜196"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "スピードドリンク(5%)",
      steal: "スピードドリンク(5%)"
    },
    actions: [
      {
        name: "スイング",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "フルスイング",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "スる",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "しびれ罠",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "スタン",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはスピードドリンク。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e044",
    no: "044",
    name: "ジャイアントバグラー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/044.html",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム 陥没道路下層、 盗みの代償",
        level: "17"
      },
      {
        when: "CHAPTER14",
        where: "六番街スラム 陥没道路下層",
        level: "24"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーターHARD限定",
        level: "35"
      },
      {
        when: "CHAPTER17select",
        where: "35〜50"
      }
    ],
    hp: {
      easy: "3546〜6884",
      normal: "6447〜12516",
      hard: "16506"
    },
    atk: {
      easy: {
        atk: "220〜397",
        matk: "60〜109",
        def: "154〜300",
        mdef: "17〜34"
      },
      hard: {
        atk: "598",
        matk: "148",
        def: "401",
        mdef: "45"
      },
      normal: {
        atk: "220〜397",
        matk: "60〜109",
        def: "154〜300",
        mdef: "17〜34"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "210〜762",
        ap: "5",
        gil: "84〜315"
      },
      hard: {
        exp: "3168",
        ap: "15",
        gil: "656"
      },
      normal: {
        exp: "210〜762",
        ap: "5",
        gil: "84〜315"
      }
    },
    items: {
      drop: "興奮剤(12%)",
      rare: "メガポーション(5%)",
      steal: "チャンピオンベルト(5%)"
    },
    actions: [
      {
        name: "突っ張り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "タックル",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ジャンピングニーアアタック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "リフトアップスラム",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "ネックハンギングツリー",
        type: "しめつけ物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "たたきつけ物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      }
    ],
    tactic: "炎が通りやすい。盗めるのはチャンピオンベルト。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e045",
    no: "045",
    name: "ウェアラット",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/045.html",
    places: [
      {
        when: "CHAPTER3",
        where: "七番街スラム ガレキ通り、タラガ廃工場、 化けネズミの軍団",
        level: "10"
      },
      {
        when: "CHAPTER5",
        where: "螺旋トンネルC・D区画",
        level: "14"
      },
      {
        when: "CHAPTER8",
        where: "伍番街スラム やすらぎの街道、廃棄指定区裏通り、未開発区域",
        level: "16"
      },
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区",
        level: "11"
      },
      {
        when: "CHAPTER5",
        where: "螺旋トンネル C・E区画",
        level: "14"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "20"
      },
      {
        when: "CHAPTER10",
        where: "地下下水道 六・七番地区",
        level: "19"
      },
      {
        when: "CHAPTER11",
        where: "列車墓場 第二操車場B・C区画、第一操車場転車台",
        level: "21"
      },
      {
        when: "CHAPTER13",
        where: "地下実験場B3・6F",
        level: "23"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ、地下下水道 六番地区・封鎖区画",
        level: "25〜27"
      }
    ],
    hp: {
      easy: "93〜294",
      normal: "169〜535",
      hard: "944"
    },
    atk: {
      easy: {
        atk: "42〜106",
        matk: "33〜85",
        def: "13〜28",
        mdef: "13〜28"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "42〜106",
        matk: "33〜85",
        def: "13〜28",
        mdef: "13〜28"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "19〜68",
        ap: "1",
        gil: "8〜42"
      },
      hard: {
        exp: "448",
        ap: "3",
        gil: "137"
      },
      normal: {
        exp: "19〜68",
        ap: "1",
        gil: "8〜42"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "エーテル(2%)",
      steal: "毒消し(25%)"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "どろんこ",
        type: "物理(遠隔)",
        element: "-",
        range: "自分後方・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "チューチュー",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "氷が通りやすい。盗めるのは毒消し。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e046",
    no: "046",
    name: "化けネズミ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/046.html",
    places: [
      {
        when: "CHAPTER3",
        where: "化けネズミの軍団",
        level: "10"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "25"
      }
    ],
    hp: {
      easy: "1389〜4089",
      normal: "2526〜7434",
      hard: "14148"
    },
    atk: {
      easy: {
        atk: "59〜136",
        matk: "50〜117",
        def: "44〜103",
        mdef: "44〜103"
      },
      hard: {
        atk: "283",
        matk: "238",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "59〜136",
        matk: "50〜117",
        def: "44〜103",
        mdef: "44〜103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "20〜65",
        ap: "3",
        gil: "114〜531"
      },
      hard: {
        exp: "476",
        ap: "9",
        gil: "1968"
      },
      normal: {
        exp: "20〜65",
        ap: "3",
        gil: "114〜531"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ネズミ返し",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "どろんこ",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "チューチュー",
        type: "魔法",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "氷が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e047",
    no: "047",
    name: "ホウルイーター",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/047.html",
    places: [
      {
        when: "CHAPTER3",
        where: "七番街スラム ガレキ通り、タラガ廃工場",
        level: "10"
      },
      {
        when: "CHAPTER8",
        where: "伍番街スラム 廃棄指定区裏通り、スチールマウンテン",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "20"
      },
      {
        when: "CHAPTER13",
        where: "六番街スラム 陥没道路 崩落トンネル、地下実験場B4F",
        level: "21"
      },
      {
        when: "CHAPTER14",
        where: "伍番街スラム 廃棄指定区 裏通り、陥没道路 崩落トンネル・旧バイパス・配管通路①、コルネオ・コロッセオ",
        level: "20〜24"
      }
    ],
    hp: {
      easy: "116〜331",
      normal: "211〜601",
      hard: "1179"
    },
    atk: {
      easy: {
        atk: "33〜77",
        matk: "33〜77",
        def: "44〜100",
        mdef: "13〜25"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "33〜77",
        matk: "33〜77",
        def: "44〜100",
        mdef: "13〜25"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "29〜86",
        ap: "3",
        gil: "13〜25"
      },
      hard: {
        exp: "696",
        ap: "9",
        gil: "491"
      },
      normal: {
        exp: "29〜86",
        ap: "3",
        gil: "13〜25"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "毒消し(5%)",
      steal: "毒消し(25%)"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "カマ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ホールドサイズ",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "毒のツバ",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "毒(180秒)",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "魔法・氷が通りやすい。盗めるのは毒消し。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e048",
    no: "048",
    name: "グランバキューム",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/048.html",
    places: [
      {
        when: "CHAPTER13",
        where: "陥没道路 旧バイパス・配管通路①",
        level: "21"
      },
      {
        when: "CHAPTER14",
        where: "地下実験場B4F",
        level: "23"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "736〜1180",
      normal: "1338〜2146",
      hard: "2830"
    },
    atk: {
      easy: {
        atk: "88〜138",
        matk: "88〜138",
        def: "113〜182",
        mdef: "69〜111"
      },
      hard: {
        atk: "193",
        matk: "193",
        def: "243",
        mdef: "148"
      },
      normal: {
        atk: "88〜138",
        matk: "88〜138",
        def: "113〜182",
        mdef: "69〜111"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "103〜305",
        ap: "3",
        gil: "83〜252"
      },
      hard: {
        exp: "1268",
        ap: "9",
        gil: "525"
      },
      normal: {
        exp: "103〜305",
        ap: "3",
        gil: "83〜252"
      }
    },
    items: {
      drop: "毒消し(12%)",
      rare: "ﾊｲﾎﾟｰｼｮﾝ(5%)",
      steal: "毒消し(25%)"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "カマ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ホールドサイズ",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき魔法",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "毒のツバ",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "毒(120秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "捕食",
        type: "回復",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "氷が通りやすい。盗めるのは毒消し。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e049",
    no: "049",
    name: "羽根トカゲ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/049.html",
    places: [
      {
        when: "CHAPTER3",
        where: "廃工場の羽根トカゲ",
        level: "10"
      },
      {
        when: "CHAPTER9",
        where: "陥落道路 崩落トンネル",
        level: "17"
      },
      {
        when: "CHAPTER11",
        where: "列車墓場 車両倉庫1F、第一操車場A区画",
        level: "21"
      },
      {
        when: "CHAPTER14",
        where: "ボルトナットヒルズ",
        level: "23"
      }
    ],
    hp: {
      easy: "811〜2281",
      normal: "1474〜4148",
      hard: "8253"
    },
    atk: {
      easy: {
        atk: "50〜113",
        matk: "67〜151",
        def: "29〜61",
        mdef: "60〜134"
      },
      hard: {
        atk: "238",
        matk: "328",
        def: "120",
        mdef: "268"
      },
      normal: {
        atk: "50〜113",
        matk: "67〜151",
        def: "29〜61",
        mdef: "60〜134"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×2.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "52〜143",
        ap: "3",
        gil: "60〜134"
      },
      hard: {
        exp: "1224",
        ap: "9",
        gil: "1026"
      },
      normal: {
        exp: "52〜143",
        ap: "3",
        gil: "60〜134"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "重力球(5%)",
      steal: "フェニクスの尾(5%)"
    },
    actions: [
      {
        name: "ウィングカッター",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "グライド",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "トルネード",
        type: "弾魔法",
        element: "風",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "竜巻魔法",
        type: "風",
        element: "着弾周囲",
        range: "△",
        status: "◯"
      },
      {
        name: "ウィンドバリア",
        type: "魔法",
        element: "風",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    tactic: "風が通りやすい。盗めるのはフェニクスの尾。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e050",
    no: "050",
    name: "ディーングロウ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/050.html",
    places: [
      {
        when: "CHAPTER3",
        where: "墓場からの異物",
        level: "10"
      },
      {
        when: "CHAPTER11",
        where: "列車墓場 第一操車場A区画",
        level: "21"
      },
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上65・145m付近",
        level: "29"
      }
    ],
    hp: {
      easy: "1621〜5517",
      normal: "2947〜10031",
      hard: "16506"
    },
    atk: {
      easy: {
        atk: "59〜167",
        matk: "84〜240",
        def: "44〜117",
        mdef: "60〜161"
      },
      hard: {
        atk: "283",
        matk: "418",
        def: "194",
        mdef: "268"
      },
      normal: {
        atk: "59〜167",
        matk: "84〜240",
        def: "44〜117",
        mdef: "60〜161"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×2.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "73〜297",
        ap: "5",
        gil: "76〜446"
      },
      hard: {
        exp: "1742",
        ap: "15",
        gil: "1312"
      },
      normal: {
        exp: "73〜297",
        ap: "5",
        gil: "76〜446"
      }
    },
    items: {
      drop: "重力球(12%)",
      rare: "フェニックスの尾(5%)",
      steal: "エーテル(5%)"
    },
    actions: [
      {
        name: "ウィングカッター",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "グライドダイブ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "スリングショット",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "ブリザド",
        type: "弾魔法",
        element: "氷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "氷塊魔法",
        type: "氷",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "フリーズブレス",
        type: "魔法",
        element: "氷",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "フリジンダスト",
        type: "魔法",
        element: "氷",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "アイスオーラ 敵の技として取得可能",
        type: "魔法",
        element: "氷",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "フローズンマーカー",
        type: "魔法",
        element: "氷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "風が通りやすい。盗めるのはエーテル。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e051",
    no: "051",
    name: "ストライプフォリッジ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/051.html",
    places: [
      {
        when: "CHAPTER9",
        where: "チョコボを探せ",
        level: "23"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "9776〜14751",
      normal: "17775〜26820",
      hard: "35370"
    },
    atk: {
      easy: {
        atk: "113〜167",
        matk: "113〜167",
        def: "1",
        mdef: "44〜65"
      },
      hard: {
        atk: "238",
        matk: "238",
        def: "1",
        mdef: "86"
      },
      normal: {
        atk: "113〜167",
        matk: "113〜167",
        def: "1",
        mdef: "44〜65"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "56〜114",
        ap: "7",
        gil: "616〜1260"
      },
      hard: {
        exp: "476",
        ap: "21",
        gil: "2624"
      },
      normal: {
        exp: "56〜114",
        ap: "7",
        gil: "616〜1260"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ウィングカッター",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "グライド",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "スリングショット",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ファイアブレス",
        type: "魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ワームホール",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "ダークボール",
        type: "魔法",
        element: "-",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "グラビガ",
        type: "魔法",
        element: "-",
        range: "敵周囲",
        status: "-",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "氷・風が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e052",
    no: "052",
    name: "グランシュトライク",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/052.html",
    places: [
      {
        when: "CHAPTER5",
        where: "螺旋トンネルD・E区画",
        level: "14"
      },
      {
        when: "CHAPTER6",
        where: "四番街プレート内部 上層",
        level: "15"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "20"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "20"
      }
    ],
    hp: {
      easy: "618〜907",
      normal: "1124〜1649",
      hard: "3537"
    },
    atk: {
      easy: {
        atk: "82〜119",
        matk: "82〜119",
        def: "62〜88",
        mdef: "62〜88"
      },
      hard: {
        atk: "283",
        matk: "283",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "82〜119",
        matk: "82〜119",
        def: "62〜88",
        mdef: "62〜88"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "53〜70",
        ap: "3",
        gil: "39〜54"
      },
      hard: {
        exp: "928",
        ap: "9",
        gil: "357"
      },
      normal: {
        exp: "53〜70",
        ap: "3",
        gil: "39〜54"
      }
    },
    items: {
      drop: "クモの糸(8%)",
      rare: "ハイポーション(3%)",
      steal: "クモの糸(15%)"
    },
    actions: [
      {
        name: "カマ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "クロスカッター",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "毒針",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "毒(120秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "フライングスラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "糸",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "スロウ(15秒)",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "氷が通りやすい。盗めるのはクモの糸。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e053",
    no: "053",
    name: "クィーンシュトライク",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/053.html",
    places: [
      {
        when: "CHAPTER5",
        where: "螺旋トンネルE区画",
        level: "14"
      },
      {
        when: "CHAPTER6",
        where: "四番街プレート内部 下層・上層",
        level: "15"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "2884〜4770",
      normal: "5243〜8673",
      hard: "16506"
    },
    atk: {
      easy: {
        atk: "107〜173",
        matk: "82〜136",
        def: "99〜164",
        mdef: "62〜103"
      },
      hard: {
        atk: "373",
        matk: "283",
        def: "312",
        mdef: "194"
      },
      normal: {
        atk: "107〜173",
        matk: "82〜136",
        def: "99〜164",
        mdef: "62〜103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "153〜367",
        ap: "6",
        gil: "14〜35"
      },
      hard: {
        exp: "2692",
        ap: "18",
        gil: "131"
      },
      normal: {
        exp: "153〜367",
        ap: "6",
        gil: "14〜35"
      }
    },
    items: {
      drop: "クモの糸(12%)",
      rare: "ハイポーション(5%)",
      steal: "クモの糸(25%)"
    },
    actions: [
      {
        name: "カマ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "クロスカッター",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "毒針(弱)",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "毒(180秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "毒針",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "毒(240秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "フライングスラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "糸",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "スロウ(15秒)",
        guard: "×",
        down: "×"
      },
      {
        name: "女王の糸",
        type: "糸魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "毒針物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      }
    ],
    tactic: "氷が通りやすい。盗めるのはクモの糸。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e054",
    no: "054",
    name: "ネフィアウィーバー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/054.html",
    places: [
      {
        when: "CHAPTER8",
        where: "墓参りの報酬",
        level: "17"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "25"
      }
    ],
    hp: {
      easy: "5066〜6815",
      normal: "9210〜12390",
      hard: "23580"
    },
    atk: {
      easy: {
        atk: "108〜136",
        matk: "108〜136",
        def: "74〜103",
        mdef: "74〜103"
      },
      hard: {
        atk: "283",
        matk: "283",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "108〜136",
        matk: "108〜136",
        def: "74〜103",
        mdef: "74〜103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "32〜65",
        ap: "4",
        gil: "252〜531"
      },
      hard: {
        exp: "476",
        ap: "12",
        gil: "1968"
      },
      normal: {
        exp: "32〜65",
        ap: "4",
        gil: "252〜531"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "カマ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "毒",
        guard: "◯",
        down: "×"
      },
      {
        name: "クロスカッター",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "毒",
        guard: "◯",
        down: "×"
      },
      {
        name: "フライングスラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "毒",
        guard: "◯",
        down: "◯"
      },
      {
        name: "睡眠針",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "睡眠",
        guard: "◯",
        down: "×"
      },
      {
        name: "睡眠弾",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "睡眠",
        guard: "×",
        down: "×"
      },
      {
        name: "糸",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "スロウ",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "氷が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e055",
    no: "055",
    name: "プアゾキュート",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/055.html",
    places: [
      {
        when: "CHAPTER6",
        where: "四番街プレート内部上層",
        level: "15"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "20"
      },
      {
        when: "CHAPTER10",
        where: "地下下水道 六番地区、共同第水路水槽、七番地区",
        level: "19"
      },
      {
        when: "CHAPTER14",
        where: "地下下水道 六番地区・封鎖区画・旧水路、コルネオ・コロッセオ",
        level: "27"
      }
    ],
    hp: {
      easy: "365〜588",
      normal: "664〜1069",
      hard: "1887"
    },
    atk: {
      easy: {
        atk: "67〜106",
        matk: "67〜106",
        def: "16〜28",
        mdef: "16〜28"
      },
      hard: {
        atk: "193",
        matk: "193",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "67〜106",
        matk: "67〜106",
        def: "16〜28",
        mdef: "16〜28"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "36〜88",
        ap: "2",
        gil: "42〜104"
      },
      hard: {
        exp: "580",
        ap: "6",
        gil: "342"
      },
      normal: {
        exp: "36〜88",
        ap: "2",
        gil: "42〜104"
      }
    },
    items: {
      drop: "眠気覚まし(12%)",
      rare: "-",
      steal: "眠気覚まし(5%)"
    },
    actions: [
      {
        name: "トゲ回転",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "トゲプレス",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "アワ地獄",
        type: "魔法",
        element: "-",
        range: "自分前方・弾",
        status: "睡眠(15秒)",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "雷・風が通りやすい。盗めるのは眠気覚まし。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e056",
    no: "056",
    name: "チュースタンク",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/056.html",
    places: [
      {
        when: "CHAPTER6",
        where: "四番街プレート内部 中層、上層",
        level: "15"
      },
      {
        when: "CHAPTER9",
        where: "陥没道路 崩落トンネル・機械の墓場②",
        level: "17"
      },
      {
        when: "CHAPTER13",
        where: "陥没道路 旧バイパス",
        level: "21"
      },
      {
        when: "CHAPTER14",
        where: "陥没道路 旧バイパス",
        level: "24"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "618〜1022",
      normal: "1328〜2861",
      hard: "3773"
    },
    atk: {
      easy: {
        atk: "67〜138",
        matk: "52〜109",
        def: "68〜145",
        mdef: "16〜34"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "67〜138",
        matk: "52〜109",
        def: "68〜145",
        mdef: "16〜34"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "43〜166",
        ap: "3",
        gil: "54〜213"
      },
      hard: {
        exp: "696",
        ap: "9",
        gil: "446"
      },
      normal: {
        exp: "43〜166",
        ap: "3",
        gil: "54〜213"
      }
    },
    items: {
      drop: "ポーション(12%)",
      rare: "ﾊｲﾎﾟｰｼｮﾝ(8%)",
      steal: "ﾊｲﾎﾟｰｼｮﾝ(12%)"
    },
    actions: [
      {
        name: "ツメ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "吸血",
        type: "尻尾物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "回転攻撃",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ローリンググロー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      }
    ],
    tactic: "氷が通りやすい。盗めるのはﾊｲﾎﾟｰｼｮﾝ。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e057",
    no: "057",
    name: "ヘッジホッグパイ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/057.html",
    places: [
      {
        when: "CHAPTER8",
        where: "伍番街スラム やすらぎの街道、たそがれの谷、スチールマウンテン、廃棄指定区裏通り、未開発区域",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "20"
      },
      {
        when: "CHAPTER14",
        where: "伍番街スラム やすらぎの街道・廃棄指定区裏通り、コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "437〜614",
      normal: "795〜1116",
      hard: "2123"
    },
    atk: {
      easy: {
        atk: "74〜98",
        matk: "104〜136",
        def: "71〜103",
        mdef: "16〜26"
      },
      hard: {
        atk: "193",
        matk: "283",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "74〜98",
        matk: "104〜136",
        def: "71〜103",
        mdef: "16〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×2.0※"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "55〜116",
        ap: "3",
        gil: "38〜83"
      },
      hard: {
        exp: "856",
        ap: "9",
        gil: "312"
      },
      normal: {
        exp: "55〜116",
        ap: "3",
        gil: "38〜83"
      }
    },
    items: {
      drop: "ﾊｲﾎﾟｰｼｮﾝ(12%)",
      rare: "エーテル(5%)",
      steal: "エーテル(5%)"
    },
    actions: [
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "バウンドアタック",
        type: "途中の攻撃 物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "最後の一撃 物理(近接)",
        type: "-",
        element: "敵単体",
        range: "◯",
        status: "◯"
      },
      {
        name: "ファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ファイラ",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ぬすみ食い",
        type: "盗む魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ポーション回復",
        type: "-",
        element: "HPを350回復",
        range: "-",
        status: "-",
        guard: "-"
      }
    ],
    tactic: "氷が通りやすい。盗めるのはエーテル。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e058",
    no: "058",
    name: "ヘッジホッグキング",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/058.html",
    places: [
      {
        when: "CHAPTER8",
        where: "見回りの子供たち",
        level: "17"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "25"
      }
    ],
    hp: {
      easy: "7092〜9540",
      normal: "12894〜17346",
      hard: "33012"
    },
    atk: {
      easy: {
        atk: "67〜87",
        matk: "70〜91",
        def: "17〜26",
        mdef: "33〜47"
      },
      hard: {
        atk: "166",
        matk: "175",
        def: "45",
        mdef: "86"
      },
      normal: {
        atk: "67〜87",
        matk: "70〜91",
        def: "17〜26",
        mdef: "33〜47"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "32〜65",
        ap: "7",
        gil: "252〜531"
      },
      hard: {
        exp: "476",
        ap: "21",
        gil: "1968"
      },
      normal: {
        exp: "32〜65",
        ap: "7",
        gil: "252〜531"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スロウ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "スロウ",
        guard: "×",
        down: "×"
      },
      {
        name: "スィートドリーム",
        type: "魔法",
        element: "-",
        range: "対象周囲",
        status: "睡眠",
        guard: "×",
        down: "×"
      },
      {
        name: "みんなを守る",
        type: "-",
        element: "-",
        range: "自分以外の味方",
        status: "※1",
        guard: "-",
        down: "-"
      },
      {
        name: "自分を守る",
        type: "-",
        element: "-",
        range: "自分",
        status: "※2",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "氷が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e059",
    no: "059",
    name: "スモッグファクト",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/059.html",
    places: [
      {
        when: "CHAPTER8",
        where: "伍番街スラム 廃棄指定区、未開発区域",
        level: "16"
      },
      {
        when: "CHAPTER9",
        where: "陥没道路 機械の基地②",
        level: "17"
      },
      {
        when: "CHAPTER13",
        where: "陥没道路 旧バイパス",
        level: "21"
      },
      {
        when: "CHAPTER14",
        where: "伍番街スラム スチールマウンテン、陥没道路 機械の墓場①",
        level: "23"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "1652〜3344",
      normal: "3003〜6080",
      hard: "8018"
    },
    atk: {
      easy: {
        atk: "150〜282",
        matk: "58〜109",
        def: "139〜283",
        mdef: "16〜34"
      },
      hard: {
        atk: "418",
        matk: "148",
        def: "379",
        mdef: "45"
      },
      normal: {
        atk: "150〜282",
        matk: "58〜109",
        def: "139〜283",
        mdef: "16〜34"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "95〜360",
        ap: "5",
        gil: "69〜271"
      },
      hard: {
        exp: "1502",
        ap: "15",
        gil: "564"
      },
      normal: {
        exp: "95〜360",
        ap: "5",
        gil: "69〜271"
      }
    },
    items: {
      drop: "有害物質(12%)",
      rare: "やまびこえんまく(5%)",
      steal: "やまびこえんまく(5%)"
    },
    actions: [
      {
        name: "パンチ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "暴走スモッグ",
        type: "突進物理(近接)",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "地面の煙魔法",
        type: "-",
        element: "設置周囲",
        range: "△",
        status: "×"
      },
      {
        name: "有害スモッグ",
        type: "噴出した煙魔法",
        element: "-",
        range: "自分前方",
        status: "※毒(120秒) 沈黙(15秒)",
        guard: "×",
        down: "×"
      },
      {
        name: "地面の煙魔法",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "自爆 「てきのわざ」として 習得可能",
        type: "物理(遠隔)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    tactic: "雷が通りやすい。盗めるのはやまびこえんまく。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e060",
    no: "060",
    name: "トクシックダクト",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/060.html",
    places: [
      {
        when: "CHAPTER8",
        where: "噂のスラムエンジェル",
        level: "17"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER14",
        where: "25"
      }
    ],
    hp: {
      easy: "15197〜20444",
      normal: "27630〜37170",
      hard: "70740"
    },
    atk: {
      easy: {
        atk: "156〜192",
        matk: "60〜79",
        def: "146〜199",
        mdef: "17〜26"
      },
      hard: {
        atk: "418",
        matk: "148",
        def: "379",
        mdef: "45"
      },
      normal: {
        atk: "156〜192",
        matk: "60〜79",
        def: "146〜199",
        mdef: "17〜26"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "32〜66",
        ap: "10",
        gil: "420〜885"
      },
      hard: {
        exp: "476",
        ap: "30",
        gil: "3280"
      },
      normal: {
        exp: "32〜66",
        ap: "10",
        gil: "420〜885"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "パンチ",
        type: "振り上げ物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "鉄球落下物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "×"
      },
      {
        name: "鉄球落とし",
        type: "鉄球物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "衝撃波物理(近接)",
        type: "-",
        element: "着弾周囲",
        range: "◯",
        status: "×"
      },
      {
        name: "有害スモック",
        type: "噴出した煙魔法",
        element: "-",
        range: "自分前方",
        status: "沈黙",
        guard: "△",
        down: "×"
      },
      {
        name: "地面の煙魔法",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "回転スモック",
        type: "噴出した煙魔法",
        element: "-",
        range: "自分前方",
        status: "スタン",
        guard: "△",
        down: "×"
      },
      {
        name: "地面の煙魔法",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      }
    ],
    tactic: "雷が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e061",
    no: "061",
    name: "シェザーシザー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/061.html",
    places: [
      {
        when: "CHAPTER10",
        where: "地下下水道 六番地区・共同第水路水槽・七番地区",
        level: "19"
      },
      {
        when: "CHAPTER14",
        where: "地下下水道 六番地区・封鎖区画・旧水路、コルネオ・コロッセオ",
        level: "25〜27"
      }
    ],
    hp: {
      easy: "268〜367",
      normal: "488〜668",
      hard: "1179"
    },
    atk: {
      easy: {
        atk: "63〜85",
        matk: "63〜85",
        def: "129〜177",
        mdef: "19〜28"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "312",
        mdef: "45"
      },
      normal: {
        atk: "63〜85",
        matk: "63〜85",
        def: "129〜177",
        mdef: "19〜28"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "41〜87",
        ap: "3",
        gil: "93〜203"
      },
      hard: {
        exp: "580",
        ap: "9",
        gil: "669"
      },
      normal: {
        exp: "41〜87",
        ap: "3",
        gil: "93〜203"
      }
    },
    items: {
      drop: "ポーション(8%)",
      rare: "鎮静剤(3%)",
      steal: "鎮静剤(15%)"
    },
    actions: [
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ダブルシザー",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "アワ",
        type: "噴出した泡魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "床の泡魔法",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "ガード",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "氷が通りやすい。盗めるのは鎮静剤。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e062",
    no: "062",
    name: "サハギン",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/062.html",
    places: [
      {
        when: "CHAPTER10",
        where: "地下下水道 六番地区・共同大水路水槽",
        level: "19"
      },
      {
        when: "CHAPTER14",
        where: "地下下水道 六番地区・封鎖区画・旧水路、コルネオ・コロッセオ",
        level: "25〜27"
      }
    ],
    hp: {
      easy: "2038〜2792",
      normal: "3705〜5077",
      hard: "8961"
    },
    atk: {
      easy: {
        atk: "124〜161",
        matk: "84〜111",
        def: "127〜175",
        mdef: "130〜179"
      },
      hard: {
        atk: "310",
        matk: "202",
        def: "309",
        mdef: "316"
      },
      normal: {
        atk: "124〜161",
        matk: "84〜111",
        def: "127〜175",
        mdef: "130〜179"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.5"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "125〜257",
        ap: "4",
        gil: "65〜140"
      },
      hard: {
        exp: "1678",
        ap: "12",
        gil: "462"
      },
      normal: {
        exp: "125〜257",
        ap: "4",
        gil: "65〜140"
      }
    },
    items: {
      drop: "ポーション(8%)",
      rare: "興奮剤(5%)",
      steal: "興奮剤(15%)"
    },
    actions: [
      {
        name: "ヤリ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ジャンプ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "サハギンブロー",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "サハギンキック",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "モリ投げ",
        type: "モリ物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "爆発魔法",
        type: "-",
        element: "着弾周囲",
        range: "△",
        status: "◯"
      },
      {
        name: "水鉄砲(地上)",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "水鉄砲(水上)",
        type: "魔法",
        element: "-",
        range: "-",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "水噴射",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ガマの呪い",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "カエル",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは興奮剤。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e063",
    no: "063",
    name: "サハギンプリンス",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/063.html",
    places: [
      {
        when: "CHAPTER14",
        where: "コルネオの隠し財産"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "10287〜13768",
      normal: "18704〜25032",
      hard: "33012"
    },
    atk: {
      easy: {
        atk: "106〜138",
        matk: "106〜138",
        def: "111〜145",
        mdef: "111〜145"
      },
      hard: {
        atk: "193",
        matk: "193",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "106〜138",
        matk: "106〜138",
        def: "111〜145",
        mdef: "111〜145"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "72〜114",
        ap: "6",
        gil: "800〜1260"
      },
      hard: {
        exp: "476",
        ap: "18",
        gil: "2624"
      },
      normal: {
        exp: "72〜114",
        ap: "6",
        gil: "800〜1260"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ヤリ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "乱れ突き",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ジャンプ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "カウンターアタック",
        type: "ヤリ物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "衝撃波物理(近接)",
        type: "-",
        element: "直線上・弾",
        range: "◯",
        status: "×"
      },
      {
        name: "水鉄砲",
        type: "魔法",
        element: "-",
        range: "-",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "水噴射",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "スプラッシュハプーン",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ガマの呪い",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "カエル",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e064",
    no: "064",
    name: "クリプシェイ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/064.html",
    places: [
      {
        when: "CHAPTER11",
        where: "列車墓場 第二操車場B・C区画、車両倉庫1F、第一操車場 転車台",
        level: "21"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      }
    ],
    hp: {
      easy: "613〜681",
      normal: "1115〜1239",
      hard: "2358"
    },
    atk: {
      easy: {
        atk: "103〜113",
        matk: "69〜79",
        def: "90〜103",
        mdef: "125〜141"
      },
      hard: {
        atk: "229",
        matk: "148",
        def: "194",
        mdef: "268"
      },
      normal: {
        atk: "103〜113",
        matk: "69〜79",
        def: "90〜103",
        mdef: "125〜141"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "45〜74",
        ap: "3",
        gil: "19〜32"
      },
      hard: {
        exp: "532",
        ap: "9",
        gil: "120"
      },
      normal: {
        exp: "45〜74",
        ap: "3",
        gil: "19〜32"
      }
    },
    items: {
      drop: "ポーション(8%)",
      rare: "ﾊｲﾎﾟｰｼｮﾝ(5%)",
      steal: "ﾊｲﾎﾟｰｼｮﾝ(5%)"
    },
    actions: [
      {
        name: "ハサミ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ダブルスパイク",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "吸血",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "かみつき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "キラースパイク",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      }
    ],
    tactic: "氷が通りやすい。盗めるのはﾊｲﾎﾟｰｼｮﾝ。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e065",
    no: "065",
    name: "ゴースト",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/065.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/enemy/img/toritsuku.jpg",
    places: [
      {
        when: "CHAPTER11",
        where: "列車墓場 車両倉庫1・2F、第一操車場 転車台",
        level: "21"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター HARD限定",
        level: "50"
      }
    ],
    hp: {
      easy: "1717〜1909",
      normal: "3122〜3470",
      hard: "6603"
    },
    atk: {
      easy: {
        atk: "69〜79",
        matk: "219〜229",
        def: "90〜103",
        mdef: "177〜199"
      },
      hard: {
        atk: "148",
        matk: "508",
        def: "194",
        mdef: "379"
      },
      normal: {
        atk: "69〜79",
        matk: "219〜229",
        def: "90〜103",
        mdef: "177〜199"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "102〜169",
        ap: "3",
        gil: "32〜55"
      },
      hard: {
        exp: "1230",
        ap: "9",
        gil: "205"
      },
      normal: {
        exp: "102〜169",
        ap: "3",
        gil: "32〜55"
      }
    },
    items: {
      drop: "エーテル(10%)",
      rare: "ｴｰﾃﾙﾀｰﾎﾞ(5%)",
      steal: "ｴｰﾃﾙﾀｰﾎﾞ(5%)"
    },
    actions: [
      {
        name: "ひっかく",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "バニッシュクロー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "バーニングクロー",
        type: "魔法",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "バニッシュファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "シールド",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "シールド(60秒)",
        guard: "-",
        down: "-"
      },
      {
        name: "リフレク",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "リフレク(20秒)",
        guard: "-",
        down: "-"
      },
      {
        name: "うらめしだま",
        type: "魔法",
        element: "-",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "とりつく",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "かなしい(永続)",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。氷半減以下。盗めるのはｴｰﾃﾙﾀｰﾎﾞ。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e066",
    no: "066",
    name: "ファントム",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/066.html",
    places: [
      {
        when: "出現する場所"
      }
    ],
    hp: {
      easy: "7821〜11801",
      normal: "14220〜21456",
      hard: "28296"
    },
    atk: {
      easy: {
        atk: "113〜167",
        matk: "227〜339",
        def: "99~145",
        mdef: "189~283"
      },
      hard: {
        atk: "238",
        matk: "508",
        def: "194",
        mdef: "379"
      },
      normal: {
        atk: "113〜167",
        matk: "227〜339",
        def: "99~145",
        mdef: "189~283"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "56〜114",
        ap: "4",
        gil: "616〜1260"
      },
      hard: {
        exp: "476",
        ap: "12",
        gil: "2624"
      },
      normal: {
        exp: "56〜114",
        ap: "4",
        gil: "616〜1260"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ひっかく",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "バニッシュクロー",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "アイスクロー",
        type: "魔法",
        element: "氷",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ブリザド",
        type: "弾魔法",
        element: "氷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "氷塊魔法",
        type: "氷",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "ブリザラ",
        type: "弾魔法",
        element: "氷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "氷塊魔法",
        type: "氷",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "リフレク",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "リフレク",
        guard: "-",
        down: "-"
      },
      {
        name: "霊気吸収 てきのわざとして習得可能",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e067",
    no: "067",
    name: "トンベリ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/067.html",
    places: [
      {
        when: "CHAPTER9",
        where: "select 六番街スラム 地下闘技場 HARD限定",
        level: "50"
      },
      {
        when: "CHAPTER14",
        where: "手下のうらみ",
        level: "23"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター HARD限定",
        level: "50"
      }
    ],
    hp: {
      easy: "10428",
      normal: "18960",
      hard: "37728"
    },
    atk: {
      easy: {
        atk: "94",
        matk: "189",
        def: "98",
        mdef: "200"
      },
      hard: {
        atk: "193",
        matk: "418",
        def: "194",
        mdef: "401"
      },
      normal: {
        atk: "94",
        matk: "189",
        def: "98",
        mdef: "200"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "186",
        ap: "7",
        gil: "154"
      },
      hard: {
        exp: "1584",
        ap: "21",
        gil: "656"
      },
      normal: {
        exp: "186",
        ap: "7",
        gil: "154"
      }
    },
    items: {
      drop: "エリクサー(100%)",
      rare: "-",
      steal: "エリクサー(5%)"
    },
    actions: [
      {
        name: "包丁",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "戦闘不能",
        guard: "◯",
        down: "×"
      },
      {
        name: "やつあたり",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "戦闘不能",
        guard: "◯",
        down: "×"
      },
      {
        name: "うらみ節",
        type: "魔法",
        element: "-",
        range: "敵単体・弾",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "うらめしや",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "戦闘不能",
        guard: "×",
        down: "◯"
      },
      {
        name: "うらみ骨髄",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "ストップ",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "盗めるのはエリクサー。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e068",
    no: "068",
    name: "怪奇虫",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/068.html",
    places: [
      {
        when: "CHAPTER13",
        where: "地下実験場B2F",
        level: "23"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "98〜148",
      normal: "178〜269",
      hard: "354"
    },
    atk: {
      easy: {
        atk: "94〜138",
        matk: "75〜109",
        def: "98〜145",
        mdef: "24〜34"
      },
      hard: {
        atk: "193",
        matk: "148",
        def: "194",
        mdef: "45"
      },
      normal: {
        atk: "94〜138",
        matk: "75〜109",
        def: "98〜145",
        mdef: "24〜34"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "16〜32",
        ap: "1",
        gil: "10〜21"
      },
      hard: {
        exp: "132",
        ap: "3",
        gil: "43"
      },
      normal: {
        exp: "16〜32",
        ap: "1",
        gil: "10〜21"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "飛行突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "溶解液",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "風が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e069",
    no: "069",
    name: "ヴァギドポリス",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/069.html",
    places: [
      {
        when: "CHAPTER13",
        where: "陥落道路 旧バイパス、地下実験室B2F",
        level: "23"
      },
      {
        when: "CHAPTER14",
        where: "陥没道路 旧バイパス・機械の墓地①、地下実験室B2F",
        level: "24"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "859〜1377",
      normal: "1561〜2504",
      hard: "3302"
    },
    atk: {
      easy: {
        atk: "69〜109",
        matk: "126〜196",
        def: "21〜34",
        mdef: "146〜234"
      },
      hard: {
        atk: "148",
        matk: "283",
        def: "45",
        mdef: "312"
      },
      normal: {
        atk: "69〜109",
        matk: "126〜196",
        def: "21〜34",
        mdef: "146〜234"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "71〜218",
        ap: "4",
        gil: "85〜208"
      },
      hard: {
        exp: "922",
        ap: "12",
        gil: "441"
      },
      normal: {
        exp: "71〜218",
        ap: "4",
        gil: "85〜208"
      }
    },
    items: {
      drop: "ﾌｪﾆｯｸｽの尾(12%)",
      rare: "鎮静剤(5%)",
      steal: "鎮静剤(5%)"
    },
    actions: [
      {
        name: "グルグルパンチ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "針",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "絶叫",
        type: "物理(遠隔)",
        element: "-",
        range: "自分周囲",
        status: "スタン(5秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "サンダラ",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "死の踊り",
        type: "かみつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "自爆魔法",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      }
    ],
    tactic: "氷が通りやすい。盗めるのは鎮静剤。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e070",
    no: "070",
    name: "ミュータントテイル",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/070.html",
    places: [
      {
        when: "CHAPTER9",
        where: "チョコボを探せ",
        level: "24"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "3303〜4917",
      normal: "6005〜8940",
      hard: "11790"
    },
    atk: {
      easy: {
        atk: "97〜138",
        matk: "156〜224",
        def: "25〜34",
        mdef: "25〜34"
      },
      hard: {
        atk: "193",
        matk: "328",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "97〜138",
        matk: "156〜224",
        def: "25〜34",
        mdef: "25〜34"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×0.1",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×0.1",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "59〜114",
        ap: "5",
        gil: "648〜1260"
      },
      hard: {
        exp: "476",
        ap: "15",
        gil: "2624"
      },
      normal: {
        exp: "59〜114",
        ap: "5",
        gil: "648〜1260"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "針",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "絶叫",
        type: "物理(遠隔)",
        element: "-",
        range: "自分周囲",
        status: "スタン",
        guard: "△",
        down: "×"
      },
      {
        name: "エアロガ",
        type: "弾魔法",
        element: "風",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "竜巻魔法",
        type: "風",
        element: "敵単体",
        range: "△",
        status: "◯"
      },
      {
        name: "踊り",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "物理半減以下、魔法半減以下。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e071",
    no: "071",
    name: "ビオバードック",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/071.html",
    places: [
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 地上45・55・145・155m",
        level: "29"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "1656〜2065",
      normal: "3010〜3755",
      hard: "4952"
    },
    atk: {
      easy: {
        atk: "118〜138",
        matk: "191〜224",
        def: "117〜145",
        mdef: "206〜256"
      },
      hard: {
        atk: "193",
        matk: "328",
        def: "194",
        mdef: "342"
      },
      normal: {
        atk: "118〜138",
        matk: "191〜224",
        def: "117〜145",
        mdef: "206〜256"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×2.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "405〜572",
        ap: "4",
        gil: "178〜252"
      },
      hard: {
        exp: "2376",
        ap: "12",
        gil: "525"
      },
      normal: {
        exp: "405〜572",
        ap: "4",
        gil: "178〜252"
      }
    },
    items: {
      drop: "ﾌｪﾆｯｸｽの尾(12%)",
      rare: "興奮剤(5%)",
      steal: "興奮剤(5%)"
    },
    actions: [
      {
        name: "針",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "粘着液",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "スロウ(40秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "サンダラ",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "念力",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "氷・風が通りやすい。盗めるのは興奮剤。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e072",
    no: "072",
    name: "ヘルハウンド",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/072.html",
    places: [
      {
        when: "CHAPTER14",
        where: "おてんば盗賊",
        level: "24"
      },
      {
        when: "CHAPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35〜50"
      }
    ],
    hp: {
      easy: "19156〜28519",
      normal: "34829〜51852",
      hard: "68382"
    },
    atk: {
      easy: {
        atk: "97〜138",
        matk: "168〜242",
        def: "25〜34",
        mdef: "159〜234"
      },
      hard: {
        atk: "193",
        matk: "355",
        def: "45",
        mdef: "312"
      },
      normal: {
        atk: "97〜138",
        matk: "168〜242",
        def: "25〜34",
        mdef: "159〜234"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "吸収",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.5"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "198〜381",
        ap: "5",
        gil: "162〜315"
      },
      hard: {
        exp: "1584",
        ap: "15",
        gil: "656"
      },
      normal: {
        exp: "198〜381",
        ap: "5",
        gil: "162〜315"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ツメ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ダイブファング",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ヘルロアー",
        type: "魔法",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "フェイタルバイト",
        type: "かみつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "赤い炎魔法",
        type: "炎",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "紫の炎魔法",
        type: "-",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "ライオットスピン",
        type: "突進物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "赤い炎魔法",
        type: "炎",
        element: "自分側方",
        range: "△",
        status: "×"
      },
      {
        name: "紫の炎魔法",
        type: "-",
        element: "自分側方",
        range: "△",
        status: "×"
      },
      {
        name: "ヘルウェーブ",
        type: "赤い炎魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "紫の炎魔法",
        type: "-",
        element: "自分前方",
        range: "△",
        status: "×"
      },
      {
        name: "ヘルバースト",
        type: "赤い炎魔法",
        element: "炎",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "紫の炎魔法",
        type: "-",
        element: "着弾周囲・弾",
        range: "△",
        status: "◯"
      }
    ],
    tactic: "氷が通りやすい。炎吸収。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e073",
    no: "073",
    name: "ボム",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/073.html",
    places: [
      {
        when: "CHAPTER9",
        where: "爆裂ダイナマイトボディ、コルネオ・コロッセオ",
        level: "17〜25"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "25"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター HARD限定",
        level: "50"
      }
    ],
    hp: {
      easy: "4052〜5452",
      normal: "7368〜9912",
      hard: "18864"
    },
    atk: {
      easy: {
        atk: "108〜136",
        matk: "188〜229",
        def: "※",
        mdef: "※"
      },
      hard: {
        atk: "283",
        matk: "508",
        def: "※",
        mdef: "※"
      },
      normal: {
        atk: "108〜136",
        matk: "188〜229",
        def: "※",
        mdef: "※"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "無効",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "116〜238",
        ap: "5",
        gil: "168〜354"
      },
      hard: {
        exp: "1742",
        ap: "15",
        gil: "1312"
      },
      normal: {
        exp: "116〜238",
        ap: "5",
        gil: "168〜354"
      }
    },
    items: {
      drop: "ファイアカクテル(100%)",
      rare: "-",
      steal: "ファイアカクテル(25%)"
    },
    actions: [
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "火炎",
        type: "魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ファイアボール",
        type: "弾 魔法",
        element: "炎",
        range: "攻撃軌道上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "爆 発魔法",
        type: "炎",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "自爆 てきのわざとして習得可能",
        type: "魔法",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "カウンターファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎半減以下。盗めるのはファイアカクテル。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e074",
    no: "074",
    name: "モルボル",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/074.html",
    places: [
      {
        when: "CHAPTER17",
        where: "select神羅バトルシミュレーター",
        level: "50"
      }
    ],
    hp: {
      hard: "58950"
    },
    atk: {
      hard: {
        atk: "418",
        matk: "261",
        def: "312",
        mdef: "45"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25※"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×0.25※"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      hard: {
        exp: "1584",
        ap: "60",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "触手",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "くさい息 「てきのわざ」として 習得可能",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "毒(4分) 沈黙(1分) 睡眠(1分) カエル(1分)",
        guard: "×",
        down: "×"
      },
      {
        name: "溶解液",
        type: "溶解液 物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "毒(3分) スロウ(40秒)",
        guard: "×",
        down: "×"
      },
      {
        name: "地面の液 物理(遠隔)",
        type: "-",
        element: "設置周囲",
        range: "×"
      },
      {
        name: "噛む物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "吐き出し物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "腹ごなし",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バイオラ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "毒(2分)",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e075",
    no: "075",
    name: "部隊長ゴンガ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/075.html",
    places: [
      {
        when: "CHAPTER2",
        where: "八番街 市街地区",
        level: "8"
      },
      {
        when: "CHAPTER9",
        where: "コルネオ・コロッセオ",
        level: "20"
      },
      {
        when: "CHAPTER14",
        where: "コルネオ・コロッセオ",
        level: "20"
      }
    ],
    hp: {
      easy: "1778〜4836",
      normal: "3232〜8792",
      hard: "18864"
    },
    atk: {
      easy: {
        atk: "53〜119",
        matk: "53〜119",
        def: "38〜88",
        mdef: "38〜88"
      },
      hard: {
        atk: "283",
        matk: "283",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "53〜119",
        matk: "53〜119",
        def: "38〜88",
        mdef: "38〜88"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "150〜750",
        ap: "10",
        gil: "75〜375"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "1125"
      },
      normal: {
        exp: "150〜750",
        ap: "10",
        gil: "75〜375"
      }
    },
    items: {
      drop: "手榴弾(12%)",
      rare: "鎮静剤(5%)",
      steal: "手榴弾(15%)"
    },
    actions: [
      {
        name: "スタンロッド",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "スタン(3秒)",
        guard: "◯",
        down: "×"
      },
      {
        name: "シールドバッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "シールドタックル",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは手榴弾。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e080",
    no: "080",
    name: "ダークネーション",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/080.html",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 70F プレジデントフロア「屋上へリポート」",
        level: "31"
      }
    ],
    hp: {
      easy: "7181",
      normal: "13056",
      hard: "18864"
    },
    atk: {
      easy: {
        atk: "164",
        matk: "164",
        def: "156",
        mdef: "213"
      },
      hard: {
        atk: "265",
        matk: "265",
        def: "229",
        mdef: "312"
      },
      normal: {
        atk: "164",
        matk: "164",
        def: "156",
        mdef: "213"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.75"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×0.5"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "50"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スピアウィップ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "チェインアタック",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "スナップウィップ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ビーストスラム",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "スピニングダッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "サンダー",
        type: "魔法",
        element: "雷",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ケアルガ",
        type: "魔法",
        element: "-",
        range: "味方全体",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "雷半減以下。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e086",
    no: "086",
    name: "プラウド・クラッド零号機",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/086.html",
    places: [],
    hp: {
      hard: "82530"
    },
    atk: {
      hard: {
        atk: "598",
        matk: "598",
        def: "363",
        mdef: "416"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.5*3"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×0.1",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      hard: {
        exp: "4500",
        ap: "30",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ダブルマシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ニーファイア",
        type: "魔法",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "アンクルファイア",
        type: "魔法",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "バスタータックル",
        type: "突 進 物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "足踏み 物理(近接)",
        type: "-",
        element: "自分周囲/td> -",
        range: "◯"
      },
      {
        name: "ビックハンド クラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ビームキャノン",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "ステップ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "クランチ",
        type: "つかみ 物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "にぎりしめ 物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "たたきつけ 物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "ナパーム弾",
        type: "弾物理(近接)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "爆発魔法",
        type: "炎",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "炎魔法",
        type: "炎",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "スパークウィップ",
        type: "魔法",
        element: "雷",
        range: "自分前方",
        status: "スタン(8秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "ジャマーレーザー",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "※",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "雷が通りやすい。炎半減以下、風半減以下。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e088",
    no: "088",
    name: "H0512-OPT",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/088.html",
    places: [
      {
        when: "CHAPTER16",
        where: "神羅ビル 65F 宝条研究室サブフロア サンプル試験室",
        level: "31"
      }
    ],
    hp: {
      easy: "2244",
      normal: "4080",
      hard: "5895"
    },
    atk: {
      easy: {
        atk: "124",
        matk: "174",
        def: "82",
        mdef: "82"
      },
      hard: {
        atk: "193",
        matk: "283",
        def: "120",
        mdef: "120"
      },
      normal: {
        atk: "124",
        matk: "174",
        def: "82",
        mdef: "82"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      normal: {
        exp: "0",
        ap: "0",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ファイア",
        type: "魔法",
        element: "炎",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ブリザド",
        type: "弾魔法",
        element: "氷",
        range: "敵単体・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "氷塊魔法",
        type: "氷",
        element: "-",
        range: "-",
        status: "△",
        guard: "×"
      }
    ],
    tactic: "ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e092",
    no: "092",
    name: "アプスベビー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/092.html",
    places: [
      {
        when: "CHAPTER14",
        where: "地下下水道 六番地区旧水路",
        level: "27"
      },
      {
        when: "CHPTER16",
        where: "神羅バトルシミュレーター",
        level: "35"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター",
        level: "35"
      }
    ],
    hp: {
      easy: "2204〜2950",
      normal: "4008〜5364",
      hard: "7074"
    },
    atk: {
      easy: {
        atk: "190〜253",
        matk: "148〜196",
        def: "111〜145",
        mdef: "111〜145"
      },
      hard: {
        atk: "373",
        matk: "283",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "190〜253",
        matk: "148〜196",
        def: "111〜145",
        mdef: "111〜145"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "341〜539",
        ap: "2",
        gil: "390〜615"
      },
      hard: {
        exp: "2234",
        ap: "6",
        gil: "1283"
      },
      normal: {
        exp: "341〜539",
        ap: "2",
        gil: "390〜615"
      }
    },
    items: {
      drop: "有害物質(12%)",
      rare: "毒消し(5%)",
      steal: "毒消し(5%)"
    },
    actions: [
      {
        name: "頭突き",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "とっしん",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "スライディング タックル",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "あつめる",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "ふりまわす",
        type: "物理(遠隔)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "なげる",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "汚水鉄砲",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは毒消し。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e093",
    no: "093",
    name: "どろぼうアプス",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/093.html",
    places: [
      {
        when: "CHAPTER14",
        where: "地下下水道 旧大水路 管路区画",
        level: "27"
      }
    ],
    hp: {
      easy: "13226",
      normal: "24048",
      hard: "42444"
    },
    atk: {
      easy: {
        atk: "190",
        matk: "148",
        def: "111",
        mdef: "111"
      },
      hard: {
        atk: "373",
        matk: "283",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "190",
        matk: "148",
        def: "111",
        mdef: "111"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "173",
        ap: "2",
        gil: "390"
      },
      hard: {
        exp: "1122",
        ap: "6",
        gil: "1283"
      },
      normal: {
        exp: "173",
        ap: "2",
        gil: "390"
      }
    },
    items: {
      drop: "有害物質(12%)",
      rare: "毒消し(5%)",
      steal: "毒消し(5%)"
    },
    actions: [
      {
        name: "頭突き",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "とっしん",
        type: "物理(遠隔)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "なげる",
        type: "手榴弾物理(遠隔)",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "バーベル物理(遠隔)",
        type: "-",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "汚水鉄砲",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    tactic: "炎が通りやすい。盗めるのは毒消し。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e097",
    no: "097",
    name: "ネムレス",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/097.html",
    places: [
      {
        when: "CHAPTER13",
        where: "地下実験室B1F",
        level: "24"
      },
      {
        when: "CHAPTER17",
        where: "神羅ビル66F 宝条研究室メインフロア・鑼牟第六層・第七層、select 神羅バトルシミュレーターHARD限定",
        level: "31〜50"
      }
    ],
    hp: {
      easy: "463",
      normal: "841",
      hard: "1651"
    },
    atk: {
      easy: {
        atk: "97",
        matk: "117",
        def: "63",
        mdef: "1"
      },
      hard: {
        atk: "193",
        matk: "238",
        def: "120",
        mdef: "1"
      },
      normal: {
        atk: "97",
        matk: "117",
        def: "63",
        mdef: "1"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×2.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      normal: {
        exp: "0",
        ap: "0",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "かみつき",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ひっかき",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "しびれ液",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲・弾",
        status: "スタン(3秒)",
        guard: "△",
        down: "×"
      },
      {
        name: "溶解液",
        type: "魔法",
        element: "-",
        range: "着弾周囲・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "サンダガ",
        type: "魔法",
        element: "雷",
        range: "CHAPTER13 味方全体",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "敵単体",
        type: "-",
        element: "△"
      },
      {
        name: "シールド",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "シールド",
        guard: "-",
        down: "-"
      },
      {
        name: "リフレク",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "リフレク",
        guard: "-",
        down: "-"
      },
      {
        name: "スリプル",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "睡眠(15秒)",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "氷が通りやすい。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e098",
    no: "098",
    name: "ベヒーモス零式",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/098.html",
    places: [
      {
        when: "CHAPTER14",
        where: "地底の咆哮",
        level: "27"
      },
      {
        when: "CHAPTER17",
        where: "select 神羅バトルシミュレーター HARD限定",
        level: "50"
      }
    ],
    hp: {
      easy: "22044",
      normal: "40080",
      hard: "70740"
    },
    atk: {
      easy: {
        atk: "169",
        matk: "169",
        def: "194*1",
        mdef: "194*1"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342*2",
        mdef: "342*2"
      },
      normal: {
        atk: "169",
        matk: "169",
        def: "194*1",
        mdef: "194*1"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0*3",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0*3",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "×1.0*3",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0*3",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×1.0*3",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "×1.0*3",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "100"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "240",
        ap: "15",
        gil: "200"
      },
      hard: {
        exp: "1584",
        ap: "45",
        gil: "656"
      },
      normal: {
        exp: "240",
        ap: "15",
        gil: "200"
      }
    },
    items: {
      drop: "ベヒーモスのツノ(100%)",
      rare: "-",
      steal: "マジックリング(5%)"
    },
    actions: [
      {
        name: "ひっかき",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "たたきつけ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "たたきつけ (暴走モード)",
        type: "脚物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "衝撃波魔法",
        type: "-",
        element: "自分前方",
        range: "△",
        status: "◯"
      },
      {
        name: "しゃくりあげ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "しゃくりあげ (暴走モード)",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "のしかかり",
        type: "たたきつけ物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "引っかき物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "衝撃波魔法",
        type: "-",
        element: "自分前方",
        range: "△",
        status: "◯"
      },
      {
        name: "スピンアタック",
        type: "身体物(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "衝撃波魔法",
        type: "-",
        element: "自分周囲",
        range: "△",
        status: "◯"
      },
      {
        name: "リーブアタック",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "リーブアタック (暴走モード)",
        type: "身体物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "衝撃波魔法",
        type: "-",
        element: "自分周囲",
        range: "△",
        status: "◯"
      },
      {
        name: "カウンターフレア",
        type: "魔法",
        element: "-",
        range: "敵周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "カウンターフレア (暴走モード)",
        type: "魔法",
        element: "-",
        range: "敵周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    tactic: "盗めるのはマジックリング。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e099",
    no: "099",
    name: "シヴァ",
    kind: "summon",
    source: "https://finalfantasy-jun-site.com/ff7_remake/summon/shiva.html",
    places: [
      {
        when: "CHAPTER8以降",
        where: "バトルレポート",
        level: "16〜32"
      }
    ],
    elements: [
      {
        name: "炎",
        damage: "弱点"
      }
    ],
    tactic: "召喚獣。戦いの数値は召喚獣の頁が詳しい。ここでは敵リストの出現と弱点だけを載せている。"
  },
  {
    id: "e100",
    no: "100",
    name: "デブチョコボ",
    kind: "summon",
    source: "https://finalfantasy-jun-site.com/ff7_remake/summon/fat-chocobo.html",
    places: [
      {
        when: "CHAPTER9以降",
        where: "バトルレポート",
        level: "18〜32"
      }
    ],
    elements: [],
    tactic: "召喚獣。戦いの数値は召喚獣の頁が詳しい。ここでは敵リストの出現と弱点だけを載せている。"
  },
  {
    id: "e101",
    no: "101",
    name: "??",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/101.html",
    places: [],
    hp: {
      easy: "521〜921",
      normal: "948〜1675",
      hard: "2358"
    },
    atk: {
      easy: {
        atk: "109〜183",
        matk: "189〜315",
        def: "18〜31",
        mdef: "18〜31"
      },
      hard: {
        atk: "283",
        matk: "508",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "109〜183",
        matk: "189〜315",
        def: "18〜31",
        mdef: "18〜31"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "無効",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "無効",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {},
    items: {},
    actions: [
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "火炎",
        type: "魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ファイアボール",
        type: "弾 魔法",
        element: "炎",
        range: "攻撃軌道上・弾",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "爆 発魔法",
        type: "炎",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "自爆 てきのわざとして習得可能",
        type: "魔法",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "カウンターファイア",
        type: "魔法",
        element: "炎",
        range: "敵単体・弾",
        status: "-",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "炎半減以下、風半減以下。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e102",
    no: "102",
    name: "????",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/102.html",
    places: [],
    hp: {
      easy: "157〜277",
      normal: "285〜503",
      hard: "708"
    },
    atk: {
      easy: {
        atk: "77〜130",
        matk: "157〜262",
        def: "18〜31",
        mdef: "18〜31"
      },
      hard: {
        atk: "193",
        matk: "418",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "77〜130",
        matk: "157〜262",
        def: "18〜31",
        mdef: "18〜31"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {},
    items: {},
    actions: [
      {
        name: "なまくら包丁",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "うさばらし",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      }
    ],
    tactic: "耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e103",
    no: "103",
    name: "サボテンダー",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/103.html",
    places: [],
    hp: {
      easy: "313〜553",
      normal: "569〜1005",
      hard: "1415"
    },
    atk: {
      easy: {
        atk: "125〜209",
        matk: "125〜209",
        def: "18〜31",
        mdef: "18〜31"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "125〜209",
        matk: "125〜209",
        def: "18〜31",
        mdef: "18〜31"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {},
    items: {},
    actions: [
      {
        name: "爆走",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      }
    ],
    tactic: "耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e104",
    no: "104",
    name: "リヴァイアサン",
    kind: "summon",
    source: "https://finalfantasy-jun-site.com/ff7_remake/summon/leviathan.html",
    places: [
      {
        when: "CHAPTER13以降",
        where: "バトルレポート",
        level: "18〜32"
      }
    ],
    elements: [
      {
        name: "雷",
        damage: "弱点"
      }
    ],
    tactic: "召喚獣。戦いの数値は召喚獣の頁が詳しい。ここでは敵リストの出現と弱点だけを載せている。"
  },
  {
    id: "e105",
    no: "105",
    name: "バハムート",
    kind: "summon",
    source: "https://finalfantasy-jun-site.com/ff7_remake/summon/bahamut.html",
    places: [
      {
        when: "CHAPTER13以降",
        where: "バトルレポート",
        level: "18〜32"
      }
    ],
    elements: [],
    tactic: "召喚獣。戦いの数値は召喚獣の頁が詳しい。ここでは敵リストの出現と弱点だけを載せている。"
  },
  {
    id: "e106",
    no: "106",
    name: "イフリート",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/106.html",
    places: [],
    hp: {
      hard: "19808"
    },
    atk: {
      hard: {
        atk: "328",
        matk: "328",
        def: "312",
        mdef: "312"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "吸収",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.75"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      hard: {
        exp: "0",
        ap: "30",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "フレイム クラッシュ",
        type: "右手&左手 物理(近接)",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "両 手 物理(近接)",
        type: "炎",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "フレイムブレス",
        type: "魔法",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "炎",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "クリムゾン ダイブ",
        type: "物理(近接)",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "フレアバースト",
        type: "魔法",
        element: "炎",
        range: "敵周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    tactic: "氷が通りやすい。炎吸収。耐久を見て、通りやすい属性を優先する。"
  },
  {
    id: "e107",
    no: "107",
    name: "未知なる魔物",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/107.html",
    places: [
      {
        when: "CHAPTER12",
        where: "七番街スラム駅",
        level: "22"
      }
    ],
    hp: {
      easy: "582〜1268",
      normal: "1059〜2306",
      hard: "3537〜4716"
    },
    atk: {
      easy: {
        atk: "50〜92",
        matk: "50〜92",
        def: "59〜94",
        mdef: "42〜64"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "45",
        mdef: "45"
      },
      normal: {
        atk: "50〜92",
        matk: "50〜92",
        def: "59〜94",
        mdef: "42〜64"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.75"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.75"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      normal: {
        exp: "0",
        ap: "0",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "呪縛",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "ニードルスナップ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      }
    ],
    tactic: "ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e108",
    no: "108",
    name: "虚無なる魔物",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/108.html",
    places: [
      {
        when: "CHAPTER12",
        where: "七番街スラム駅",
        level: "22"
      }
    ],
    hp: {
      easy: "1553〜5073",
      normal: "2824〜9224",
      hard: "9432〜18864"
    },
    atk: {
      easy: {
        atk: "78〜146",
        matk: "78〜146",
        def: "103〜183",
        mdef: "94〜165"
      },
      hard: {
        atk: "283〜328",
        matk: "283〜328",
        def: "342〜379",
        mdef: "312〜342"
      },
      normal: {
        atk: "78〜146",
        matk: "78〜146",
        def: "103〜183",
        mdef: "94〜165"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×0.1",
        stagger: "近接 ×0.75"
      },
      {
        name: "魔法",
        damage: "×0.1",
        stagger: "×0.5"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      normal: {
        exp: "0",
        ap: "0",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ストークゲイザー",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "コメット",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "フェイトストーム",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "ブラックホール",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    tactic: "物理半減以下、魔法半減以下。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e109",
    no: "109",
    name: "フィーラー=プラエコ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/109.html",
    places: [
      {
        when: "CHAPTER18",
        where: "ミッドガル・ハイウェイ「運命の特異点」",
        level: "34"
      }
    ],
    hp: {
      easy: "77484",
      normal: "140880",
      hard: "188640"
    },
    atk: {
      easy: {
        atk: "408",
        matk: "368",
        def: "294",
        mdef: "298"
      },
      hard: {
        atk: "621",
        matk: "558",
        def: "401",
        mdef: "406"
      },
      normal: {
        atk: "408",
        matk: "368",
        def: "294",
        mdef: "298"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "無効",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "無効",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "無効",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "無効",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "無効",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "4350",
        ap: "10",
        gil: "1450"
      },
      hard: {
        exp: "13500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "4350",
        ap: "10",
        gil: "1450"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ダイアストロフィズム",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "炎天の煉獄",
        type: "魔法",
        element: "炎",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "雷光の輪廻",
        type: "魔法",
        element: "雷",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "運命の奔流",
        type: "魔法",
        element: "-",
        range: "敵全体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "大いなる断罪",
        type: "物理(遠隔)",
        element: "雷",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    tactic: "物理半減以下、魔法半減以下、炎半減以下、氷半減以下、雷半減以下、風半減以下。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e110",
    no: "110",
    name: "フィーラー=ロッソ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/110.html",
    places: [
      {
        when: "CHAPTER18",
        where: "ミッドガル・ハイウェイ「運命の特異点」",
        level: "34"
      }
    ],
    hp: {
      easy: "7264",
      normal: "13208",
      hard: "17685"
    },
    atk: {
      easy: {
        atk: "231",
        matk: "214",
        def: "242",
        mdef: "242"
      },
      hard: {
        atk: "342",
        matk: "315",
        def: "329",
        mdef: "328"
      },
      normal: {
        atk: "231",
        matk: "214",
        def: "242",
        mdef: "242"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "吸収",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "50"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "580",
        ap: "10",
        gil: "1450"
      },
      hard: {
        exp: "1800",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "580",
        ap: "10",
        gil: "1450"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ダイアストロフィズム",
        type: "武 器物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "衝撃波魔法",
        type: "-",
        element: "自分前方",
        range: "△",
        status: "×"
      },
      {
        name: "乱れ斬り",
        type: "通 常物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "追加攻撃物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "龍飛剣",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ファイガ",
        type: "魔法",
        element: "炎",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "モードチェンジ",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "回転斬り",
        type: "物理(近接)",
        element: "雷",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "妖刀乱舞",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "無明閃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      }
    ],
    tactic: "炎吸収。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e111",
    no: "111",
    name: "フィーラー=ヴェルデ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/111.html",
    places: [
      {
        when: "CHAPTER18",
        where: "ミッドガル・ハイウェイ「運命の特異点」",
        level: "34"
      }
    ],
    hp: {
      easy: "7264",
      normal: "13208",
      hard: "17685"
    },
    atk: {
      easy: {
        atk: "222",
        matk: "222",
        def: "248",
        mdef: "230"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "337",
        mdef: "312"
      },
      normal: {
        atk: "222",
        matk: "222",
        def: "248",
        mdef: "230"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "吸収",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "50"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "580",
        ap: "10",
        gil: "1450"
      },
      hard: {
        exp: "1800",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "580",
        ap: "10",
        gil: "1450"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "フィストコンボ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "インパクトウェーブ",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "グランドブラスト",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ブルータルストライク",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "エリミネイトアッパー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バッククラッシャー",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "サンダガ",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "モードチェンジ",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    tactic: "雷吸収。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e112",
    no: "112",
    name: "フィーラー=ジャッロ",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/112.html",
    places: [
      {
        when: "CHAPTER18",
        where: "ミッドガル・ハイウェイ「運命の特異点」",
        level: "34"
      }
    ],
    hp: {
      easy: "7264",
      normal: "13208",
      hard: "17685"
    },
    atk: {
      easy: {
        atk: "214",
        matk: "231",
        def: "230",
        mdef: "248"
      },
      hard: {
        atk: "315",
        matk: "342",
        def: "312",
        mdef: "337"
      },
      normal: {
        atk: "214",
        matk: "231",
        def: "230",
        mdef: "248"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "吸収",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "50"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "580",
        ap: "10",
        gil: "1450"
      },
      hard: {
        exp: "1800",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "580",
        ap: "10",
        gil: "1450"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "アビスクエーサー",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "アヴェンジャー",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "フォトンレーザー(前方)",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "フォトンレーザー(回転)",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "チェイサーショット",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "エアロガ",
        type: "弾 魔法",
        element: "風",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "竜 巻魔法",
        type: "風",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "モードチェンジ",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "ヘルベットナイトメア",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    tactic: "風吸収。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "e113",
    no: "113",
    name: "フィーラー=バハムート",
    kind: "normal",
    source: "https://finalfantasy-jun-site.com/ff7_remake/enemy/113.html",
    places: [
      {
        when: "CHAPTER18",
        where: "ミッドガル・ハイウェイ「運命の特異点」",
        level: "34"
      }
    ],
    hp: {
      easy: "9686",
      normal: "17610",
      hard: "23580"
    },
    atk: {
      easy: {
        atk: "222",
        matk: "222",
        def: "251",
        mdef: "251"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "342"
      },
      normal: {
        atk: "222",
        matk: "222",
        def: "251",
        mdef: "251"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      hard: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      normal: {
        exp: "0",
        ap: "0",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "クロスインパクト",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "スピンアタック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ダーククロウ",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ヘビーストライク",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "バインドインパルス",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "フレアブレス",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "沈黙+スロウ",
        guard: "△",
        down: "◯"
      },
      {
        name: "インフェルノ",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "メガフレア",
        type: "魔法",
        element: "-",
        range: "敵全体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "クローラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "オプティックゲイズ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "ストップ",
        guard: "×",
        down: "×"
      }
    ],
    tactic: "魔法半減以下。ヒート中に圧力をかけてバーストを狙う。"
  },
  {
    id: "boss-brainpod",
    no: "035",
    name: "ブレインポッド",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/brainpod.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter17/01/01.jpg",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟 第六層「第二研究室 実験体改良室」",
        level: "31"
      }
    ],
    hp: {
      easy: "6732",
      normal: "12240",
      hard: "17685"
    },
    atk: {
      easy: {
        atk: "99",
        matk: "99",
        def: "31",
        mdef: "213"
      },
      hard: {
        atk: "148",
        matk: "148",
        def: "45",
        mdef: "312"
      },
      normal: {
        atk: "99",
        matk: "99",
        def: "31",
        mdef: "213"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "450",
        ap: "5",
        gil: "750"
      },
      hard: {
        exp: "2376",
        ap: "15",
        gil: "1968"
      },
      normal: {
        exp: "450",
        ap: "5",
        gil: "750"
      }
    },
    items: {
      drop: "有害物質(12%)",
      rare: "毒消し(5%)",
      steal: "毒消し(10%)"
    },
    actions: [
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "フタまわし",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "超力念動波",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "ライフドレイン",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "有毒廃棄物",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "毒",
        guard: "△",
        down: "×"
      },
      {
        name: "ポイズンポッド",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "毒",
        guard: "×",
        down: "×"
      },
      {
        name: "プレインストップ",
        type: "魔法",
        element: "-",
        range: "敵全体",
        status: "ストップ",
        guard: "×",
        down: "×"
      },
      {
        name: "ホワイトアウト",
        type: "魔法",
        element: "-",
        range: "敵全体",
        status: "スタン",
        guard: "×",
        down: "×"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜51%",
        actions: [
          "体当たり",
          "フタまわし",
          "超力念動波",
          "ライフドレイン",
          "有毒廃棄物",
          "ポイズンポッド",
          "ブレインストップ",
          "ホワイトアウト"
        ]
      },
      {
        title: "第二段階残りHP50%以下",
        actions: [
          "体当たり",
          "フタまわし",
          "超力念動波",
          "ライフドレイン",
          "有毒廃棄物",
          "ポイズンポッド",
          "ブレインストップ"
        ]
      }
    ],
    tactic: "雷が通りやすい。盗めるのは毒消し。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-swordipede",
    no: "036",
    name: "ソードダンス",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/swordipede.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter17/02/01.jpg",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 鑼牟 第八層「第四研究室 合成室」",
        level: "31"
      }
    ],
    hp: {
      easy: "10771",
      normal: "19584",
      hard: "28296"
    },
    atk: {
      easy: {
        atk: "297",
        matk: "223",
        def: "132",
        mdef: "132"
      },
      hard: {
        atk: "508",
        matk: "373",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "297",
        matk: "223",
        def: "132",
        mdef: "132"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "900",
        ap: "12",
        gil: "1250"
      },
      hard: {
        exp: "4752",
        ap: "36",
        gil: "3280"
      },
      normal: {
        exp: "900",
        ap: "12",
        gil: "1250"
      }
    },
    items: {
      drop: "フォースブレス(100%)",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "カッター",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ノコギリ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "シャインスパーク",
        type: "魔法",
        element: "雷",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "エネルギースフィア",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ジャギッドスピン",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜61%",
        actions: [
          "カッター",
          "ノコギリ",
          "シャインスパーク",
          "エネルギースフィア"
        ]
      },
      {
        title: "第二段階残りHP60%以下",
        actions: [
          "カッター",
          "ノコギリ",
          "シャインスパーク",
          "エネルギースフィア",
          "ジャギッドスピン"
        ]
      }
    ],
    tactic: "よく落ちるのはフォースブレス。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-roche",
    no: "076",
    name: "ローチェ",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/roche.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter04/01.jpg",
    places: [
      {
        when: "CHAPTER4",
        where: "七番街 社宅地区「七六分室」",
        level: "11"
      }
    ],
    hp: {
      easy: "4488",
      normal: "8160",
      hard: "35370"
    },
    atk: {
      easy: {
        atk: "84",
        matk: "84",
        def: "47",
        mdef: "47"
      },
      hard: {
        atk: "373",
        matk: "373",
        def: "194",
        mdef: "194"
      },
      normal: {
        atk: "84",
        matk: "84",
        def: "47",
        mdef: "47"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "35"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "300",
        ap: "10",
        gil: "255"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "1913"
      },
      normal: {
        exp: "300",
        ap: "10",
        gil: "255"
      }
    },
    items: {
      drop: "エリクサー(100%)",
      rare: "-",
      steal: "エリクサー(10%)"
    },
    actions: [
      {
        name: "通常攻撃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "飛翔閃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "真空波",
        type: "魔法",
        element: "風",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "かまいたち",
        type: "魔法",
        element: "風",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ブリザド",
        type: "弾 魔法",
        element: "氷",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "氷 塊魔法",
        type: "氷",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "ブリザラ",
        type: "弾 魔法",
        element: "氷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "氷 塊魔法",
        type: "氷",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "サンダー",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "サンダラ",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "朧薙ぎ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "エグゾーストソード",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "イグニッションフレイム",
        type: "魔法",
        element: "炎",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "×"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜71%",
        actions: [
          "連続攻撃",
          "飛翔閃",
          "真空波",
          "かまいたち",
          "ブリザド",
          "ブリザラ",
          "サンダー",
          "サンダラ"
        ]
      },
      {
        title: "第二段階残りHP70%以下",
        actions: [
          "連続攻撃",
          "朧薙ぎ",
          "エグゾーストソード",
          "イグニッションフレーム"
        ]
      }
    ],
    tactic: "炎が通りやすい。盗めるのはエリクサー。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-reno",
    no: "077",
    name: "レノ",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/reno.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter08/01.jpg",
    places: [
      {
        when: "CHAPTER8",
        where: "伍番街スラム 教会聖堂",
        level: "17"
      }
    ],
    hp: {
      easy: "3343",
      normal: "6079",
      hard: "15563"
    },
    atk: {
      easy: {
        atk: "124",
        matk: "124",
        def: "103",
        mdef: "103"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "268",
        mdef: "268"
      },
      normal: {
        atk: "124",
        matk: "124",
        def: "103",
        mdef: "103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×0.5"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×0.1",
        stagger: "×0.5"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "600",
        ap: "10",
        gil: "600"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "600",
        ap: "10",
        gil: "600"
      }
    },
    items: {
      drop: "エーテル(100%)",
      rare: "-",
      steal: "エーテル(10%)"
    },
    actions: [
      {
        name: "ビートラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ダッシュラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "サンダーロッド",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "カウンター",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "電磁ショット",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "電磁チェーン",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "エナジーボール",
        type: "-",
        element: "-",
        range: "味方単体",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "電磁スパーク",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "機雷射出",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜51%",
        actions: [
          "ビートラッシュ",
          "ダッシュラッシュ",
          "サンダーロッド",
          "カウンター",
          "電磁ショット"
        ]
      },
      {
        title: "第二段階残りHP50%以下",
        actions: [
          "ビートラッシュ",
          "ダッシュラッシュ",
          "サンダーロッド",
          "カウンター",
          "電磁ショット",
          "電磁チェーン",
          "エナジーボール",
          "電磁スパーク",
          "機雷射出"
        ]
      }
    ],
    tactic: "雷半減以下。盗めるのはエーテル。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-reno2rd",
    no: "077",
    name: "レノ",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/reno2rd.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter12/02.jpg",
    places: [
      {
        when: "CHAPTER12",
        where: "七番街支柱 15F",
        level: "22"
      }
    ],
    hp: {
      easy: "8878",
      normal: "16142",
      hard: "33012"
    },
    atk: {
      easy: {
        atk: "140",
        matk: "146",
        def: "165",
        mdef: "165"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "342"
      },
      normal: {
        atk: "140",
        matk: "146",
        def: "165",
        mdef: "165"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×0.5"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×0.1",
        stagger: "×0.5"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "510",
        ap: "10",
        gil: "850"
      },
      hard: {
        exp: "2700",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "510",
        ap: "10",
        gil: "850"
      }
    },
    items: {
      drop: "エーテルターボ(100%)",
      rare: "-",
      steal: "ウィザードブレス(10%)"
    },
    actions: [
      {
        name: "ビートラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "サンダーロッド",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "エアリアルラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "疾風雷電",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ライトニングボム",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "フラッシュスィープ",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "タークス光線",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ピラミッド",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "バインドチェーン",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "タークス暴走",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜65%",
        actions: [
          "ビートラッシュ",
          "サンダーロッド",
          "エアリアルラッシュ",
          "疾風雷電",
          "ライトニングボム",
          "フラッシュスィープ",
          "タークス光線"
        ]
      },
      {
        title: "第二段階残りHP64〜40%",
        actions: [
          "ビートラッシュ",
          "サンダーロッド",
          "エアリアルラッシュ",
          "疾風雷電",
          "ライトニングボム",
          "フラッシュスィープ",
          "タークス光線",
          "ピラミッド"
        ]
      },
      {
        title: "第三段階残りHP39%以下",
        actions: [
          "ビートラッシュ",
          "サンダーロッド",
          "エアリアルラッシュ",
          "疾風雷電",
          "ライトニングボム",
          "フラッシュスィープ",
          "タークス光線",
          "バインドチェーン",
          "タークス暴走"
        ]
      }
    ],
    tactic: "雷半減以下。盗めるのはウィザードブレス。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-rude",
    no: "078",
    name: "ルード",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/rude.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter08/03.jpg",
    places: [
      {
        when: "CHAPTER8",
        where: "伍番街スラム・花香る小道",
        level: "17"
      }
    ],
    hp: {
      easy: "7092",
      normal: "12894",
      hard: "33012"
    },
    atk: {
      easy: {
        atk: "124",
        matk: "124",
        def: "103",
        mdef: "103"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "268",
        mdef: "268"
      },
      normal: {
        atk: "124",
        matk: "124",
        def: "103",
        mdef: "103"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.25"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "480",
        ap: "10",
        gil: "1200"
      },
      hard: {
        exp: "3600",
        ap: "30",
        gil: "4500"
      },
      normal: {
        exp: "480",
        ap: "10",
        gil: "1200"
      }
    },
    items: {
      drop: "メガポーション(100%)",
      rare: "-",
      steal: "メガポーション(10%)"
    },
    actions: [
      {
        name: "パンチコンポ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "キックコンポ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ハンマーパンチ",
        type: "蹴り上げ物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "なぐり物理(近接)",
        type: "-",
        element: "敵単体",
        range: "◯",
        status: "◯"
      },
      {
        name: "つかむ(対クラウド)",
        type: "打 撃物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "投 げ物理(近接)",
        type: "-",
        element: "敵周囲",
        range: "◯",
        status: "◯"
      },
      {
        name: "つかむ(対エアリス)",
        type: "物理(接近)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "タックル",
        type: "跳びつき物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "投 げ物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "グレートパンチ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "かかと落とし",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "○"
      },
      {
        name: "足払い",
        type: "物理(接近)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ドリームパウダー",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "睡眠",
        guard: "×",
        down: "×"
      },
      {
        name: "地走り",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "気烈波",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜65%",
        actions: [
          "パンチコンボ",
          "キックコンボ",
          "ハンマーパンチ",
          "つかむ(対クラウド・エアリス)",
          "タックル",
          "グレートパンチ",
          "かかと落とし",
          "足払い",
          "ドリームパウダー"
        ]
      },
      {
        title: "第二段階残りHP64%以下",
        actions: [
          "パンチコンボ",
          "キックコンボ",
          "ハンマーパンチ",
          "つかむ(対クラウド・エアリス)",
          "タックル",
          "グレートパンチ",
          "かかと落とし",
          "足払い",
          "ドリームパウダー",
          "地走り",
          "気烈波"
        ]
      }
    ],
    tactic: "風が通りやすい。炎半減以下。盗めるのはメガポーション。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-rude2rd",
    no: "078",
    name: "ルード",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/rude2rd.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter12/01.jpg",
    places: [
      {
        when: "CHAPTER12",
        where: "七番街支柱 15F",
        level: "22"
      }
    ],
    hp: {
      easy: "8878",
      normal: "16142",
      hard: "33012"
    },
    atk: {
      easy: {
        atk: "146",
        matk: "146",
        def: "165",
        mdef: "165"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "342"
      },
      normal: {
        atk: "146",
        matk: "146",
        def: "165",
        mdef: "165"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.25"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "340",
        ap: "10",
        gil: "2550"
      },
      hard: {
        exp: "1800",
        ap: "30",
        gil: "6750"
      },
      normal: {
        exp: "340",
        ap: "10",
        gil: "2550"
      }
    },
    items: {
      drop: "メガポーション(100%)",
      rare: "-",
      steal: "プレートガード(10%)"
    },
    actions: [
      {
        name: "パンチコンポ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "キックコンポ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "足払い",
        type: "物理(接近)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ハンマーパンチ",
        type: "蹴り上げ物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "なぐり物理(近接)",
        type: "-",
        element: "敵単体",
        range: "◯",
        status: "◯"
      },
      {
        name: "つかむ(対男性)",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "つかむ(対女性)",
        type: "物理(接近)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "グレートパンチ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "かかと落とし",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "○"
      },
      {
        name: "地走り",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "タイタンブロウ",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "コークスクリュー",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "タークス暴走",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階レノの残りHPが64%になるまで",
        actions: [
          "銃撃"
        ]
      },
      {
        title: "第二段階残りHP100〜52%",
        actions: [
          "銃撃",
          "爆撃"
        ]
      },
      {
        title: "第三段階残りHP51%以下",
        actions: [
          "パンチコンボ",
          "キックコンボ",
          "足払い",
          "ハンマーパンチ",
          "つかむ",
          "グレートパンチ",
          "かかと落とし",
          "地走り",
          "タイタンブロウ",
          "コークスクリュー",
          "タークス暴走"
        ]
      }
    ],
    tactic: "風が通りやすい。炎半減以下。盗めるのはプレートガード。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-rufus",
    no: "079",
    name: "ルーファス",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/rufus.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter17/04/01.jpg",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 70F プレジデントフロア「屋上へリポート」",
        level: "31"
      }
    ],
    hp: {
      easy: "8078",
      normal: "14688",
      hard: "21222"
    },
    atk: {
      easy: {
        atk: "139",
        matk: "139",
        def: "213",
        mdef: "213"
      },
      hard: {
        atk: "220",
        matk: "220",
        def: "312",
        mdef: "312"
      },
      normal: {
        atk: "139",
        matk: "139",
        def: "213",
        mdef: "213"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "100"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "100"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "100"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ショットガン",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "リロード",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "チェインショット",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "援護射撃",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "サンダーショット",
        type: "魔法",
        element: "雷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "Dリンク",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "ダブルショット",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "スモークコイン",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "レーザーコイン",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "トラップコイン",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "スタン",
        guard: "×",
        down: "×"
      },
      {
        name: "ボムコイン",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "装弾数アップ",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階ダークネションの残りHP100〜61%",
        actions: [
          "ショットガン",
          "リロード",
          "チェインショット",
          "援護射撃",
          "サンダーショット",
          "Dリンク"
        ]
      },
      {
        title: "第二段階ダークネイションの残りHP60%以下",
        actions: [
          "ショットガン",
          "リロード",
          "チェインショット",
          "援護射撃",
          "サンダーショット",
          "Dリンク",
          "ダブルショット",
          "スモークコイン",
          "レーザーコイン",
          "トラップコイン",
          "ボムコイン"
        ]
      },
      {
        title: "第三段階ダークネイションが倒された後",
        actions: [
          "ショットガン",
          "リロード",
          "ダブルショット",
          "スモークコイン",
          "レーザーコイン",
          "トラップコイン",
          "ボムコイン",
          "装弾数アップ"
        ]
      }
    ],
    tactic: "炎半減以下。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-scorpion",
    no: "081",
    name: "ガードスコーピオン",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/scorpion.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter01/01.jpg",
    places: [
      {
        when: "CHAPTER1",
        where: "壱番魔晄炉B8F「炉心最下層メインブリッジ」",
        level: "7"
      }
    ],
    hp: {
      easy: "5188",
      normal: "9432",
      hard: "56592"
    },
    atk: {
      easy: {
        atk: "56",
        matk: "56",
        def: "57",
        mdef: "11"
      },
      hard: {
        atk: "301",
        matk: "301",
        def: "326",
        mdef: "268"
      },
      normal: {
        atk: "56",
        matk: "56",
        def: "57",
        mdef: "11"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "100",
        ap: "10",
        gil: "100"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "100",
        ap: "10",
        gil: "100"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "98式機関砲",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "電磁フィールド",
        type: "魔法",
        element: "雷",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ジャンプ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "電磁ブレス",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "スコーピオンテイル",
        type: "物理(近接)",
        element: "雷",
        range: "自分後方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "クローアーム",
        type: "つかみ物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "電撃魔法",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "ターゲットサーチ",
        type: "-",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "なぎはらい",
        type: "物理(近接)",
        element: "雷",
        range: "自分後方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "99式小型ミサイル",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "テイルレーザー",
        type: "電磁波魔法",
        element: "雷",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "レーザー魔法",
        type: "-",
        element: "直線上",
        range: "×",
        status: "◯"
      },
      {
        name: "テイルショット",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "フルバースト",
        type: "※",
        element: "-",
        range: "※",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "自己修復",
        type: "回復",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜80%",
        actions: [
          "98式機関砲",
          "電磁フィールド",
          "ジャンプ",
          "電磁ブレス",
          "スコーピオンテイル",
          "クローアーム",
          "ターゲットサーチ",
          "なぎはらい",
          "99式小型ミサイル"
        ]
      },
      {
        title: "第二段階残りHP79〜49%",
        actions: [
          "98式機関砲",
          "電磁フィールド",
          "ジャンプ",
          "電磁ブレス",
          "スコーピオンテイル",
          "クローアーム",
          "ターゲットサーチ",
          "なぎはらい",
          "99式小型ミサイル"
        ]
      },
      {
        title: "第三段階残りHP48〜17%",
        actions: [
          "98式機関砲",
          "電磁フィールド",
          "ジャンプ",
          "99式小型ミサイル",
          "テイルレーザー",
          "テイルショット"
        ]
      },
      {
        title: "第四段階残りHP16%以下",
        actions: [
          "98式機関砲",
          "電磁フィールド",
          "ジャンプ",
          "なぎはらい",
          "フルバースト",
          "自己修復"
        ]
      }
    ],
    tactic: "雷が通りやすい。残りHPで4段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-crabwarden",
    no: "082",
    name: "ダストドーザー",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/crabwarden.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter05/01.jpg",
    places: [
      {
        when: "CHAPTER5",
        where: "螺旋トンネル E区画「旧車両基地区画」",
        level: "13"
      }
    ],
    hp: {
      easy: "14755",
      normal: "26828",
      hard: "89604"
    },
    atk: {
      easy: {
        atk: "124",
        matk: "124",
        def: "114",
        mdef: "115"
      },
      hard: {
        atk: "463",
        matk: "463",
        def: "379",
        mdef: "385"
      },
      normal: {
        atk: "124",
        matk: "124",
        def: "114",
        mdef: "115"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "50"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "400",
        ap: "10",
        gil: "400"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "400",
        ap: "10",
        gil: "400"
      }
    },
    items: {
      drop: "メタルナック(100%)",
      rare: "-",
      steal: "ファイアカクテル(12%)"
    },
    actions: [
      {
        name: "震脚",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "回転火炎",
        type: "スピン物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "火 球魔法",
        type: "炎",
        element: "着弾周囲",
        range: "△",
        status: "◯"
      },
      {
        name: "炎 魔法",
        type: "炎",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "旋回斉射",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "連射砲",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "クラスターミサイル",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "背面砲撃",
        type: "爆発物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "突進物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "火炎放射",
        type: "魔法",
        element: "炎",
        range: "自分後方",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "電磁フィールド",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ターゲットロック",
        type: "-",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "増援要請",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "レールサンダー",
        type: "魔法",
        element: "雷",
        range: "特定範囲",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜71%",
        actions: [
          "震脚",
          "回転火炎",
          "旋回斉射",
          "連射砲",
          "クラスターミサイル",
          "背面砲撃",
          "火炎放射",
          "電磁フィールド",
          "ターゲットロック"
        ]
      },
      {
        title: "第二段階残りHP70〜41%",
        actions: [
          "震脚",
          "回転火炎",
          "旋回斉射",
          "連射砲",
          "クラスターミサイル",
          "背面砲撃",
          "火炎放射",
          "電磁フィールド",
          "ターゲットロック",
          "増援要請"
        ]
      },
      {
        title: "第三段階残りHP40%以下",
        actions: [
          "震脚",
          "回転火炎",
          "旋回斉射",
          "連射砲",
          "クラスターミサイル",
          "背面砲撃",
          "火炎放射",
          "突進",
          "レールサンダー"
        ]
      }
    ],
    tactic: "雷が通りやすい。盗めるのはファイアカクテル。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-airbuster",
    no: "083",
    name: "エアバスター",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/airbuster.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter07/01.jpg",
    places: [
      {
        when: "CHAPTER7",
        where: "伍番魔晄炉 正面ゲート「ゲート連絡通路」",
        level: "16"
      }
    ],
    hp: {
      easy: "18066",
      normal: "32848",
      hard: "87718"
    },
    atk: {
      easy: {
        atk: "119",
        matk: "119",
        def: "126",
        mdef: "134"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "363"
      },
      normal: {
        atk: "119",
        matk: "119",
        def: "126",
        mdef: "134"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.5"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "100"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "550",
        ap: "10",
        gil: "550"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "550",
        ap: "10",
        gil: "550"
      }
    },
    items: {
      drop: "チタンバングル(100%)",
      rare: "-",
      steal: "AIコア(12%)"
    },
    actions: [
      {
        name: "フィンガービーム",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "スタン",
        guard: "△",
        down: "×"
      },
      {
        name: "ビッグボンバー",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "後方マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "後方グレネード",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "電磁フィールド",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "前方マシンガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "アーム分離",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "ドッキング",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "バスターキャノン",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "バーナー",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ショルダービーム",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "エナジーボール",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "フック",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "○",
        down: "×"
      },
      {
        name: "ハンマーブロウ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜81%",
        actions: [
          "フィンガービーム",
          "ビッグボンバー",
          "後方マシンガン",
          "後方グレネード",
          "電磁フィールド",
          "前方マシンガン",
          "電磁爆雷"
        ]
      },
      {
        title: "第二段階残りHP80〜51%",
        actions: [
          "フィンガービーム",
          "ビッグボンバー",
          "電磁フィールド",
          "前方マシンガン",
          "電磁爆雷",
          "アーム分離",
          "ドッキング",
          "バスターキャノン",
          "バーナー",
          "ショルダービーム"
        ]
      },
      {
        title: "第三段階残りHP50〜16%",
        actions: [
          "フィンガービーム",
          "ビッグボンバー",
          "前方マシンガン",
          "電磁爆雷",
          "バスターキャノン",
          "バーナー",
          "ショルダービーム",
          "エナジーボール",
          "フック",
          "ハンマーブロウ"
        ]
      },
      {
        title: "第四段階残りHP15%以下",
        actions: [
          "フィンガービーム",
          "ビッグボンバー",
          "バスターキャノン",
          "バーナー",
          "ショルダービーム",
          "フック",
          "ハンマーブロウ"
        ]
      }
    ],
    tactic: "雷が通りやすい。盗めるのはAIコア。残りHPで4段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-valkyrie",
    no: "084",
    name: "ヘリガンナー",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/valkyrie.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter15/01.jpg",
    places: [
      {
        when: "CHAPTER15",
        where: "七番街プレート断面 プレート接合面",
        level: "29"
      }
    ],
    hp: {
      easy: "28373",
      normal: "51588",
      hard: "84888"
    },
    atk: {
      easy: {
        atk: "191",
        matk: "191",
        def: "206",
        mdef: "117"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "194"
      },
      normal: {
        atk: "191",
        matk: "191",
        def: "206",
        mdef: "117"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×2.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×0.5"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.25"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.75"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "50"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "1200",
        ap: "10",
        gil: "1200"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "1200",
        ap: "10",
        gil: "1200"
      }
    },
    items: {
      drop: "マキナバングル(100%)",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "98式制圧機銃",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "98式対戦炸裂弾",
        type: "魔法",
        element: "炎",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "投下式ナパーム",
        type: "魔法",
        element: "炎",
        range: "設置周囲",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "対人鎮圧ガス弾",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "毒+睡眠",
        guard: "×",
        down: "×"
      },
      {
        name: "フライングドリル",
        type: "機体下部物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "本 体 物理(近接)",
        type: "-",
        element: "自分周囲",
        range: "◯",
        status: "◯"
      },
      {
        name: "ローリングブレス",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "一斉掃討",
        type: "銃 弾物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "炸裂弾魔法",
        type: "炎",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "焼夷弾魔法",
        type: "炎",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "対魔法モード起動",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜82%",
        actions: [
          "98式制圧機銃",
          "99式対獣炸裂弾",
          "投下式ナパーム"
        ]
      },
      {
        title: "第二段階残りHP81〜61%",
        actions: [
          "98式制圧機銃",
          "99式対獣炸裂弾",
          "投下式ナパーム",
          "対人鎮圧ガス弾",
          "フライングドリル",
          "ローリングプレス",
          "一斉掃討"
        ]
      },
      {
        title: "第三段階残りHP60%以下",
        actions: [
          "98式制圧機銃",
          "99式対獣炸裂弾",
          "投下式ナパーム",
          "対人鎮圧ガス弾",
          "フライングドリル",
          "ローリングプレス",
          "一斉掃討",
          "対魔法モード起動"
        ]
      }
    ],
    tactic: "雷・風が通りやすい。よく落ちるのはマキナバングル。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-arsenal",
    no: "085",
    name: "ハンドレッドガンナー",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/arsenal.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter17/05/01.jpg",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 58F「アトリウム」",
        level: "31"
      }
    ],
    hp: {
      easy: "47573",
      normal: "86496",
      hard: "124974"
    },
    atk: {
      easy: {
        atk: "297",
        matk: "297",
        def: "145",
        mdef: "197"
      },
      hard: {
        atk: "508",
        matk: "508",
        def: "212",
        mdef: "288"
      },
      normal: {
        atk: "297",
        matk: "297",
        def: "145",
        mdef: "197"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×2.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "50"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ラピッドファイア",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "副砲",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "主砲",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "ホーミングレーザー",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "サンダーブレイズ",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "電磁フィールド",
        type: "魔法",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ブーストガン",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "ホーミングレザー改",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "バーナー",
        type: "レーザー魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "火 炎魔法",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "波動砲",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "拡散波動砲",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階バリアビットが全滅するまで",
        actions: [
          "ラピッドファイア",
          "副砲",
          "主砲",
          "ホーミングレーザー",
          "サンダーブレイズ",
          "電磁フィールド"
        ]
      },
      {
        title: "第二段階残りHP100〜61%",
        actions: [
          "ラピッドファイア",
          "副砲",
          "主砲",
          "ホーミングレーザー",
          "サンダーブレイズ",
          "電磁フィールド",
          "突進",
          "ブーストガン",
          "ホーミングレーザー改",
          "ファイアウォール"
        ]
      },
      {
        title: "第三段階残りHP60〜16%",
        actions: [
          "ラピッドファイア",
          "副砲",
          "主砲",
          "ホーミングレーザー",
          "サンダーブレイズ",
          "電磁フィールド",
          "突進",
          "ブーストガン",
          "ホーミングレーザー改",
          "ファイアウォール",
          "波動砲"
        ]
      },
      {
        title: "第四段階残りHP15%以下",
        actions: [
          "ラピッドファイア",
          "副砲",
          "主砲",
          "ホーミングレーザー",
          "サンダーブレイズ",
          "電磁フィールド",
          "突進",
          "ブーストガン",
          "ホーミングレーザー改",
          "ファイアウォール",
          "拡散波動砲"
        ]
      }
    ],
    tactic: "炎・氷・雷・風が通りやすい。残りHPで4段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-h0512",
    no: "087",
    name: "サンプル:H0512",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/h0512.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter16/01.jpg",
    places: [
      {
        when: "CHAPTER16",
        where: "神羅ビル 65F 宝条研究室サブフロア「サンプル試験室」",
        level: "31"
      }
    ],
    hp: {
      easy: "23338",
      normal: "42432",
      hard: "61308"
    },
    atk: {
      easy: {
        atk: "233",
        matk: "184",
        def: "183",
        mdef: "233"
      },
      hard: {
        atk: "391",
        matk: "301",
        def: "268",
        mdef: "342"
      },
      normal: {
        atk: "233",
        matk: "184",
        def: "183",
        mdef: "233"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×0.5",
        stagger: "1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      }
    },
    items: {
      drop: "タリスマン(100%)",
      rare: "-",
      steal: "いにしえのお守り(12%)"
    },
    actions: [
      {
        name: "ぶんまわす",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ひっかく",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "カウンターグラブ",
        type: "たたきつけ物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "衝撃波 物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "左手蘇生",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "怪しい息",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "毒",
        guard: "×",
        down: "×"
      },
      {
        name: "魔晄の息",
        type: "煙 魔法",
        element: "-",
        range: "左記参照",
        status: "毒+スロウ",
        guard: "×",
        down: "×"
      },
      {
        name: "地 面魔法",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "OPT排出",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜81%",
        actions: [
          "ぶんまわす",
          "ひっかく",
          "カウンターグラブ",
          "左手蘇生",
          "怪しい息"
        ]
      },
      {
        title: "第二段階残りHP80〜41%",
        actions: [
          "ぶんまわす",
          "ひっかく",
          "カウンターグラブ",
          "左手蘇生",
          "魔晄の息",
          "OPT排出"
        ]
      },
      {
        title: "第三段階残りHP40%以下",
        actions: [
          "ぶんまわす",
          "ひっかく",
          "カウンターグラブ",
          "左手蘇生",
          "魔晄の息",
          "OPT排出"
        ]
      }
    ],
    tactic: "雷半減以下。盗めるのはいにしえのお守り。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-jenova",
    no: "089",
    name: "ジェノバBeat",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/jenova.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter17/03/01.jpg",
    places: [
      {
        when: "CHAPTER17",
        where: "神羅ビル 70F プレジデントフロア「社長室」",
        level: "31"
      }
    ],
    hp: {
      easy: "43085",
      normal: "78336",
      hard: "113184"
    },
    atk: {
      easy: {
        atk: "198",
        matk: "198",
        def: "233",
        mdef: "233"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "342"
      },
      normal: {
        atk: "198",
        matk: "198",
        def: "233",
        mdef: "233"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接×1.0"
      },
      {
        name: "魔法",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "50"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "1300",
        ap: "10",
        gil: "1300"
      }
    },
    items: {
      drop: "ミスティーク(100%)",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "時空渦",
        type: "魔法",
        element: "-",
        range: "詳細左記",
        status: "ストップ",
        guard: "×",
        down: "×"
      },
      {
        name: "ファイラ",
        type: "魔法",
        element: "炎",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "エアロ",
        type: "弾 魔法",
        element: "風",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "風 魔法",
        type: "風",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "バイオ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "毒",
        guard: "△",
        down: "×"
      },
      {
        name: "尻尾攻撃",
        type: "物理(近接)",
        element: "-",
        range: "自分後方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "腕攻撃",
        type: "物理(近接)",
        element: "-",
        range: "自分側方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "腕拘束",
        type: "しめ上げ魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "回復 回復",
        type: "-",
        element: "自分",
        range: "-",
        status: "-"
      },
      {
        name: "投げ捨て物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "追尾弾",
        type: "魔法",
        element: "-",
        range: "攻撃軌道上",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ジェノバブレス",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "絶叫",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "再生",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "リフレク発動",
        type: "-",
        element: "-",
        range: "自分",
        status: "リフレク",
        guard: "-",
        down: "-"
      },
      {
        name: "シールド発動",
        type: "-",
        element: "-",
        range: "自分",
        status: "シールド",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜81%",
        actions: [
          "時空洞",
          "ファイラ",
          "エアロ",
          "バイオ",
          "尻尾攻撃",
          "腕攻撃",
          "腕拘束",
          "追尾弾",
          "ジェノバブレス",
          "絶叫",
          "再生"
        ]
      },
      {
        title: "第二段階残りHP80〜46%",
        actions: [
          "時空洞",
          "ファイラ",
          "エアロ",
          "バイオ",
          "尻尾攻撃",
          "腕攻撃",
          "腕拘束",
          "追尾弾",
          "ジェノバブレス",
          "絶叫",
          "再生",
          "リフレク発動"
        ]
      },
      {
        title: "第三段階残りHP45〜26%",
        actions: [
          "時空洞",
          "リフレク発動",
          "正宗攻撃",
          "生体維持機能",
          "サイレスシンク",
          "ファイアシンク",
          "レーザーシンク"
        ]
      },
      {
        title: "第四段階残りHP25%以下",
        actions: [
          "時空洞",
          "尻尾攻撃",
          "腕攻撃",
          "腕拘束",
          "追尾弾",
          "ジェノバブレス",
          "絶叫",
          "再生",
          "リフレク発動",
          "シールド発動",
          "正宗攻撃",
          "サイレスシンク"
        ]
      }
    ],
    tactic: "魔法半減以下。よく落ちるのはミスティーク。残りHPで4段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-hellhouse",
    no: "090",
    name: "ヘルハウス",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/hellhouse.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter09/01.jpg",
    places: [
      {
        when: "CHAPTER9",
        where: "六番街スラム「地下闘技場」",
        level: "18"
      }
    ],
    hp: {
      easy: "18770",
      normal: "34128",
      hard: "84888"
    },
    atk: {
      easy: {
        atk: "125",
        matk: "125",
        def: "136",
        mdef: "106"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "268"
      },
      normal: {
        atk: "125",
        matk: "125",
        def: "136",
        mdef: "106"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.5"
      },
      {
        name: "魔法",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×2.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×2.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "650",
        ap: "10",
        gil: "650"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "650",
        ap: "10",
        gil: "650"
      }
    },
    items: {
      drop: "ムームーちゃん(100%)",
      rare: "ヘモヘモくん(25%)",
      steal: "ヘモヘモくん(25%)"
    },
    actions: [
      {
        name: "ヘルブレス",
        type: "物理(遠隔)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "ヘルボンバー",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ぬいぐるみ爆弾",
        type: "物理(遠隔)",
        element: "-",
        range: "設置周囲",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "体当たり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "バリアチェンジ",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "ヘルジェット",
        type: "炎 魔法",
        element: "炎",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "本 体物理(近接)",
        type: "-",
        element: "自分周囲",
        range: "◯",
        status: "◯"
      },
      {
        name: "ブーストロケット",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "ソニックロケット",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "アイスボンバー",
        type: "イ ス物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "時 計魔法",
        type: "氷",
        element: "着弾周囲",
        range: "△",
        status: "×"
      },
      {
        name: "クレイジーアタック",
        type: "身 体物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "腕 物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "×"
      },
      {
        name: "屋敷の腕物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "サンダーアタック",
        type: "身 体物理(近接)",
        element: "雷",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "腕 物理(近接)",
        type: "雷",
        element: "自分前方",
        range: "◯",
        status: "×"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜81%",
        actions: [
          "ヘルプレス",
          "ヘルボンバー",
          "ぬいぐるみ爆弾",
          "体当たり",
          "ヘルジェット",
          "おもてなし"
        ]
      },
      {
        title: "第二段階残りHP80〜29%",
        actions: [
          "ヘルプレス",
          "ヘルボンバー",
          "ぬいぐるみ爆弾",
          "ヘルジェット",
          "ブーストロケット",
          "ソニックロケット",
          "アイスボンバー",
          "クレイジーアタック",
          "サンダーアタック",
          "おもてなし",
          "無敵モード起動",
          "無敵モード再起動準備"
        ]
      },
      {
        title: "第三段階残りHP28%以下",
        actions: [
          "ヘルプレス",
          "ヘルボンバー",
          "ぬいぐるみ爆弾",
          "ヘルジェット",
          "ブーストロケット",
          "ソニックロケット",
          "アイスボンバー",
          "クレイジーアタック",
          "サンダーアタック",
          "もっとおもてなし",
          "無敵モード起動",
          "無敵モード再起動準備"
        ]
      }
    ],
    tactic: "魔法が通りやすい。盗めるのはヘモヘモくん。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-abzu",
    no: "091",
    name: "アプス",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/abzu.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter10/01.jpg",
    places: [
      {
        when: "CHAPTER10",
        where: "地下下水道 六番地区「第一沈殿池室」",
        level: "19"
      }
    ],
    hp: {
      easy: "21450",
      normal: "39000",
      hard: "94320"
    },
    atk: {
      easy: {
        atk: "151",
        matk: "151",
        def: "110",
        mdef: "110"
      },
      hard: {
        atk: "382",
        matk: "382",
        def: "268",
        mdef: "342"
      },
      normal: {
        atk: "151",
        matk: "151",
        def: "110",
        mdef: "110"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "840",
        ap: "10",
        gil: "350"
      },
      hard: {
        exp: "5400",
        ap: "30",
        gil: "1125"
      },
      normal: {
        exp: "840",
        ap: "10",
        gil: "350"
      }
    },
    items: {
      drop: "フェニックスの尾(100%)",
      rare: "-",
      steal: "エーテルターボ(10%)"
    },
    actions: [
      {
        name: "ぶんなぐり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "じだんだ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "猛打ラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "じゃれる(なぐる)",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "拳 物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "じゃれる(なめる)",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "舌 物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "しっぽ物理(近接)",
        type: "-",
        element: "自分周囲",
        range: "×",
        status: "◯"
      },
      {
        name: "汚水かけ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "毒",
        guard: "×",
        down: "×"
      },
      {
        name: "汚水竜巻",
        type: "魔法",
        element: "-",
        range: "着弾周囲",
        status: "毒",
        guard: "×",
        down: "◯"
      },
      {
        name: "挑発",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "いかり (永続)",
        guard: "×",
        down: "×"
      },
      {
        name: "カウンター",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "大興奮",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "突進ラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "下水津波",
        type: "魔法",
        element: "-",
        range: "-",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜51%(HARDモードは100〜81%)",
        actions: [
          "ぶんなぐり",
          "じだんだ",
          "猛打ラッシュ",
          "突進",
          "じゃれる(なぐる)",
          "じゃれる(なめる)",
          "汚水かけ",
          "汚水竜巻",
          "挑発",
          "カウンター"
        ]
      },
      {
        title: "第二段階残りHP50%以下(HARDモードは80%以下)",
        actions: [
          "ぶんなぐり",
          "じだんだ",
          "猛打ラッシュ",
          "突進",
          "じゃれる(なぐる)",
          "じゃれる(なめる)",
          "汚水かけ",
          "汚水竜巻",
          "挑発",
          "カウンター",
          "大興奮",
          "突進ラッシュ"
        ]
      }
    ],
    tactic: "炎が通りやすい。盗めるのはエーテルターボ。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-abzu2nd",
    no: "091",
    name: "アプス",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/abzu2nd.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter14/01.jpg",
    places: [
      {
        when: "CHAPTER14",
        where: "地下下水道 六番地区 封鎖区画「第二沈殿池室」",
        level: "27"
      }
    ],
    hp: {
      easy: "25718",
      normal: "46760",
      hard: "82530"
    },
    atk: {
      easy: {
        atk: "195",
        matk: "195",
        def: "111",
        mdef: "177"
      },
      hard: {
        atk: "382",
        matk: "382",
        def: "194",
        mdef: "312"
      },
      normal: {
        atk: "195",
        matk: "195",
        def: "111",
        mdef: "177"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×0.25"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×1.0",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "840",
        ap: "10",
        gil: "350"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "840",
        ap: "10",
        gil: "350"
      }
    },
    items: {
      drop: "フェニックスの尾(100%)",
      rare: "-",
      steal: "エーテルターボ(10%)"
    },
    actions: [
      {
        name: "ぶんなぐり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "猛打ラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "じだんだ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "じゃれる",
        type: "跳びつき物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "拳 物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "◯"
      },
      {
        name: "挑発",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "いかり (永続)",
        guard: "×",
        down: "×"
      },
      {
        name: "突撃開始!",
        type: "魔法",
        element: "-",
        range: "味方全体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "尻尾ビンタ",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "汚水かけ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "毒",
        guard: "×",
        down: "×"
      },
      {
        name: "下水津波",
        type: "魔法",
        element: "-",
        range: "-",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "おおあばれ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "突進ラッシュ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "津波ラッシュ",
        type: "魔法",
        element: "-",
        range: "特定範囲",
        status: "毒",
        guard: "×",
        down: "◯"
      },
      {
        name: "大興奮",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜76%",
        actions: [
          "ぶんなぐり",
          "猛打ラッシュ",
          "じだんだ",
          "じゃれる",
          "挑発",
          "突撃開始!"
        ]
      },
      {
        title: "第二段階残りHP75〜46%",
        actions: [
          "ぶんなぐり",
          "猛打ラッシュ",
          "じだんだ",
          "じゃれる",
          "挑発",
          "突撃開始!",
          "尻尾ビンタ",
          "突進",
          "汚水かけ",
          "下水津波"
        ]
      },
      {
        title: "第三段階残りHP45%以下",
        actions: [
          "ぶんなぐり",
          "猛打ラッシュ",
          "じだんだ",
          "じゃれる",
          "挑発",
          "突撃開始!",
          "尻尾ビンタ",
          "突進",
          "汚水かけ",
          "下水津波",
          "おおあばれ",
          "突進ラッシュ"
        ]
      }
    ],
    tactic: "炎が通りやすい。盗めるのはエーテルターボ。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-ghoul",
    no: "094",
    name: "グロウガイスト",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/ghoul.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter11/01.jpg",
    places: [
      {
        when: "CHAPTER11",
        where: "列車墓場 車両倉庫2F「整備施設」",
        level: "20"
      }
    ],
    hp: {
      easy: "10276",
      normal: "18683",
      hard: "40086"
    },
    atk: {
      easy: {
        atk: "136",
        matk: "136",
        def: "156",
        mdef: "143"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "342",
        mdef: "312"
      },
      normal: {
        atk: "136",
        matk: "136",
        def: "156",
        mdef: "143"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.75"
      },
      {
        name: "炎",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "35"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "600",
        ap: "10",
        gil: "600"
      },
      hard: {
        exp: "3600",
        ap: "30",
        gil: "1800"
      },
      normal: {
        exp: "600",
        ap: "10",
        gil: "600"
      }
    },
    items: {
      drop: "しょうめつ(100%)",
      rare: "-",
      steal: "エーテルターボ(10%)"
    },
    actions: [
      {
        name: "瓦礫弾",
        type: "物理(近接)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "衝撃波",
        type: "ツメ物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "爆発魔法",
        type: "-",
        element: "直線上",
        range: "△",
        status: "◯"
      },
      {
        name: "ポルターガイスト",
        type: "物理(遠隔)",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "ひっかき",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "沈黙",
        guard: "△",
        down: "×"
      },
      {
        name: "ソウルボイス",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "スタン",
        guard: "×",
        down: "×"
      },
      {
        name: "ゴーストアーム",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "霊体化",
        type: "-",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "鬼火",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "エナジードレイン",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "エナジー放出",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "△",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜56%",
        actions: [
          "瓦礫弾",
          "衝撃波",
          "ポルターガイスト",
          "ひっかき",
          "ソウルボイス",
          "ゴーストアーム",
          "霊体化"
        ]
      },
      {
        title: "第二段階残りHP55%以下",
        actions: [
          "瓦礫弾",
          "衝撃波",
          "ポルターガイスト",
          "ひっかき",
          "ソウルボイス",
          "ゴーストアーム",
          "霊体化",
          "鬼火",
          "エナジードレイン",
          "エナジー放出"
        ]
      }
    ],
    tactic: "炎が通りやすい。氷半減以下。盗めるのはエーテルターボ。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-eligor",
    no: "095",
    name: "エリゴル",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/eligor.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter11/03.jpg",
    places: [
      {
        when: "CHAPTER11",
        where: "列車墓場 貨物保管区",
        level: "21"
      }
    ],
    hp: {
      easy: "17171",
      normal: "31220",
      hard: "66024"
    },
    atk: {
      easy: {
        atk: "144",
        matk: "144",
        def: "169",
        mdef: "159"
      },
      hard: {
        atk: "328",
        matk: "328",
        def: "363",
        mdef: "342"
      },
      normal: {
        atk: "144",
        matk: "144",
        def: "169",
        mdef: "159"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×0.5",
        stagger: "近接 ×1.0"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "35"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "35"
      },
      {
        name: "バーサク",
        value: "35"
      }
    ],
    rewards: {
      easy: {
        exp: "1040",
        ap: "10",
        gil: "1200"
      },
      hard: {
        exp: "5850",
        ap: "30",
        gil: "3375"
      },
      normal: {
        exp: "1040",
        ap: "10",
        gil: "1200"
      }
    },
    items: {
      drop: "やまびこえんまく(100%)",
      rare: "-",
      steal: "ストライクロッド(25%)"
    },
    actions: [
      {
        name: "踏みつけ",
        type: "頭飾り物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "踏みつけ物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "◯"
      },
      {
        name: "突き刺し",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "HARD 沈黙",
        guard: "◯",
        down: "×"
      },
      {
        name: "横振り",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "HARD 沈黙",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "なぎはらい",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ヘレティックレーザー",
        type: "魔法",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "ギャロップ",
        type: "走 行物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "弾 魔法",
        type: "-",
        element: "直線上",
        range: "×",
        status: "×"
      },
      {
        name: "リフレク",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "リフレク",
        guard: "×",
        down: "×"
      },
      {
        name: "サンダージャベリン",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "-",
        guard: "×",
        down: "×"
      },
      {
        name: "モイアイレーザー",
        type: "魔法",
        element: "-",
        range: "直線上",
        status: "沈黙+睡眠",
        guard: "×",
        down: "×"
      },
      {
        name: "ダッシュスラッシュ",
        type: "突進物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ヤリ物理(近接)",
        type: "-",
        element: "自分周囲",
        range: "◯",
        status: "×"
      },
      {
        name: "ギャロップジャベリン",
        type: "走 行物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "ヤ リ物理(近接)",
        type: "-",
        element: "自分周囲",
        range: "◯",
        status: "×"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜71%",
        actions: [
          "踏みつけ",
          "突き刺し",
          "横振り",
          "突進",
          "なぎはらい",
          "ヘレティックレーザー"
        ]
      },
      {
        title: "第二段階残りHP70〜41%",
        actions: [
          "踏みつけ",
          "突き刺し",
          "横振り",
          "ギャロップ",
          "リフレク",
          "サンダージャベリン",
          "モノアイレーザー",
          "ダッシュスラッシュ"
        ]
      },
      {
        title: "第三段階残りHP40%以下",
        actions: [
          "踏みつけ",
          "突き刺し",
          "横振り",
          "ヘレティックレーザー",
          "サンダージャベリン",
          "モノアイレーザー",
          "ダッシュスラッシュ",
          "ギャロップジャベリン",
          "ゲヘナサイクロン"
        ]
      }
    ],
    tactic: "氷が通りやすい。物理半減以下。盗めるのはストライクロッド。残りHPで3段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-failedexperiment",
    no: "096",
    name: "アノニマス",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/failedexperiment.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter13/01.jpg",
    places: [
      {
        when: "CHAPTER13",
        where: "地下実験場 B1F「実験体試験場」",
        level: "24"
      }
    ],
    hp: {
      easy: "11229",
      normal: "20417",
      hard: "40086"
    },
    atk: {
      easy: {
        atk: "184",
        matk: "156",
        def: "159",
        mdef: "137"
      },
      hard: {
        atk: "391",
        matk: "328",
        def: "312",
        mdef: "268"
      },
      normal: {
        atk: "184",
        matk: "156",
        def: "159",
        mdef: "137"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接 ×0.25"
      },
      {
        name: "魔法",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×1.0",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×2.0",
        stagger: "×1.5"
      },
      {
        name: "雷",
        damage: "吸収",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "×1.0",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "35"
      },
      {
        name: "睡眠",
        value: "100"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "950",
        ap: "10",
        gil: "950"
      },
      hard: {
        exp: "4500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "950",
        ap: "10",
        gil: "950"
      }
    },
    items: {
      drop: "ミスリルクロー(100%)",
      rare: "-",
      steal: "どく(12%)"
    },
    actions: [
      {
        name: "キャッチ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "リリース",
        type: "物理(近接)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "なぎはらい",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "ハンマーパンチ",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "飛びかかり",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "放り投げる",
        type: "-",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "毒砲",
        type: "毒の弾物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "毒",
        guard: "△",
        down: "×"
      },
      {
        name: "毒霧物理(近接)",
        type: "-",
        element: "設置周囲",
        range: "×",
        status: "×"
      },
      {
        name: "仲間を呼ぶ",
        type: "-",
        element: "-",
        range: "-",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "ぶっこわす",
        type: "衝撃波物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "○"
      },
      {
        name: "吹き飛ばし物理(近接)",
        type: "-",
        element: "敵単体",
        range: "×",
        status: "×"
      },
      {
        name: "グランドスマッシュ",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "スタンロアー",
        type: "物理(近接)",
        element: "-",
        range: "自分周囲",
        status: "スタン",
        guard: "×",
        down: "×"
      },
      {
        name: "メッタ打ち",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "シールド号令",
        type: "-",
        element: "-",
        range: "味方全体",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "リフレク号令",
        type: "-",
        element: "-",
        range: "味方全体",
        status: "-",
        guard: "-",
        down: "-"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜81%(HARDモード:100%〜91%)",
        actions: [
          "キャッチ",
          "リリース",
          "なぎはらい",
          "ハンマーパンチ",
          "とびかかり",
          "放り投げる",
          "毒砲",
          "仲間を呼ぶ",
          "ぶっこわす",
          "グランドスマッシュ"
        ]
      },
      {
        title: "第二段階残りHP80%以下(HARDモード:90%以下)",
        actions: [
          "キャッチ",
          "リリース",
          "なぎはらい",
          "ハンマーパンチ",
          "飛びかかり",
          "放り投げる",
          "毒砲",
          "仲間を呼ぶ",
          "スタンロアー",
          "メッタ打ち",
          "シールド号令",
          "リフレク号令"
        ]
      }
    ],
    tactic: "氷が通りやすい。雷吸収。盗めるのはどく。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-sephiroth",
    no: "114",
    name: "セフィロス",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/sephiroth.html",
    places: [
      {
        when: "CHAPTER18",
        where: "ミッドガル・ハイウェイ「運命の特異点」",
        level: "34"
      }
    ],
    hp: {
      easy: "35836",
      normal: "65157",
      hard: "87246"
    },
    atk: {
      easy: {
        atk: "205",
        matk: "205",
        def: "251",
        mdef: "251"
      },
      hard: {
        atk: "301",
        matk: "301",
        def: "342",
        mdef: "342"
      },
      normal: {
        atk: "205",
        matk: "205",
        def: "251",
        mdef: "251"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "×1.0",
        stagger: "近接×1.0"
      },
      {
        name: "魔法",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "氷",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "雷",
        damage: "×0.5",
        stagger: "×1.0"
      },
      {
        name: "風",
        damage: "×0.5",
        stagger: "×1.0"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      hard: {
        exp: "0",
        ap: "0",
        gil: "0"
      },
      normal: {
        exp: "0",
        ap: "0",
        gil: "0"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "新撃",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "一陣(横)",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "勤地",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "閃光",
        type: "振り上げ物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "突進斬り物理(近接)",
        type: "-",
        element: "自分前方",
        range: "◯",
        status: "×"
      },
      {
        name: "ファイガ",
        type: "魔法",
        element: "炎",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "ブリザガ",
        type: "弾 魔法",
        element: "氷",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "氷 塊魔法",
        type: "氷",
        element: "敵単体",
        range: "△",
        status: "×"
      },
      {
        name: "正宗の構え",
        type: "魔法",
        element: "-",
        range: "自分",
        status: "-",
        guard: "-",
        down: "-"
      },
      {
        name: "円月",
        type: "物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "◯"
      },
      {
        name: "絶空",
        type: "物理(近接)",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "残心",
        type: "刀 物理(近接)",
        element: "-",
        range: "自分前方",
        status: "-",
        guard: "◯",
        down: "×"
      },
      {
        name: "衝撃波魔法",
        type: "-",
        element: "直線上",
        range: "△",
        status: "×"
      },
      {
        name: "獄門",
        type: "魔法",
        element: "-",
        range: "自分周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "サンダガ",
        type: "魔法",
        element: "-",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      },
      {
        name: "エアロガ",
        type: "弾 魔法",
        element: "風",
        range: "敵単体",
        status: "-",
        guard: "△",
        down: "×"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜86%",
        actions: [
          "斬撃",
          "一陣(縦)",
          "一陣(横)",
          "動地",
          "閃光",
          "ファイガ",
          "ブリザガ"
        ]
      },
      {
        title: "第二段階残りHP85〜63%",
        actions: [
          "斬新",
          "一陣(縦)",
          "一陣(横)",
          "動地",
          "閃光",
          "ファイガ",
          "ブリザガ",
          "正宗の構え",
          "円月",
          "絶空",
          "残心",
          "獄門"
        ]
      },
      {
        title: "第三段階残りHP62〜16%",
        actions: [
          "一陣(縦)",
          "一陣(横)",
          "動地",
          "閃光",
          "ファイガ",
          "ブリザガ",
          "円月",
          "絶空",
          "残心",
          "獄門",
          "サンダガ",
          "エアロガ"
        ]
      },
      {
        title: "第四段階残りHP15%以下",
        actions: [
          "シャドウフレア",
          "滅刀",
          "影斬",
          "孤高の虚無",
          "運命の宣告",
          "心無い天使"
        ]
      }
    ],
    tactic: "魔法半減以下、炎半減以下、氷半減以下、雷半減以下、風半減以下。残りHPで4段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-harbinger",
    name: "フィーラー=プラエコ",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/harbinger.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter04/01.jpg",
    places: [
      {
        when: "CHAPTER18",
        where: "ミッドガル・ハイウェイ「運命の特異点」",
        level: "34"
      }
    ],
    hp: {
      easy: "77484",
      normal: "140880",
      hard: "188640"
    },
    atk: {
      easy: {
        atk: "408",
        matk: "368",
        def: "294",
        mdef: "298"
      },
      hard: {
        atk: "621",
        matk: "558",
        def: "401",
        mdef: "406"
      },
      normal: {
        atk: "408",
        matk: "368",
        def: "294",
        mdef: "298"
      }
    },
    elements: [
      {
        name: "物理",
        damage: "無効",
        stagger: "近接 無効"
      },
      {
        name: "魔法",
        damage: "無効",
        stagger: "無効"
      },
      {
        name: "炎",
        damage: "×0.5",
        stagger: "無効"
      },
      {
        name: "氷",
        damage: "無効",
        stagger: "無効"
      },
      {
        name: "雷",
        damage: "無効",
        stagger: "無効"
      },
      {
        name: "風",
        damage: "無効",
        stagger: "無効"
      }
    ],
    ailments: [
      {
        name: "毒",
        value: "無効"
      },
      {
        name: "沈黙",
        value: "無効"
      },
      {
        name: "睡眠",
        value: "無効"
      },
      {
        name: "スロウ",
        value: "無効"
      },
      {
        name: "ストップ",
        value: "無効"
      },
      {
        name: "バーサク",
        value: "無効"
      }
    ],
    rewards: {
      easy: {
        exp: "4350",
        ap: "10",
        gil: "1450"
      },
      hard: {
        exp: "13500",
        ap: "30",
        gil: "2250"
      },
      normal: {
        exp: "4350",
        ap: "10",
        gil: "1450"
      }
    },
    items: {
      drop: "-",
      rare: "-",
      steal: "-"
    },
    actions: [
      {
        name: "ダイアストロフィズム",
        type: "物理(遠隔)",
        element: "-",
        range: "着弾周囲",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "炎天の煉獄",
        type: "魔法",
        element: "炎",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "雷光の輪廻",
        type: "魔法",
        element: "雷",
        range: "着弾周囲",
        status: "-",
        guard: "△",
        down: "◯"
      },
      {
        name: "運命の奔流",
        type: "魔法",
        element: "-",
        range: "敵全体",
        status: "-",
        guard: "×",
        down: "◯"
      },
      {
        name: "大いなる断罪",
        type: "物理(遠隔)",
        element: "雷",
        range: "自分前方",
        status: "-",
        guard: "×",
        down: "◯"
      }
    ],
    phases: [
      {
        title: "第一段階残りHP100〜71%",
        actions: [
          "連続攻撃",
          "飛翔閃",
          "真空波",
          "かまいたち",
          "ブリザド",
          "ブリザラ",
          "サンダー",
          "サンダラ"
        ]
      },
      {
        title: "第二段階残りHP70%以下",
        actions: [
          "連続攻撃",
          "朧薙ぎ",
          "エグゾーストソード",
          "イグニッションフレーム"
        ]
      }
    ],
    tactic: "物理半減以下、魔法半減以下、炎半減以下、氷半減以下、雷半減以下、風半減以下。残りHPで2段階に分かれる。段階が変わると使う技も変わる。"
  },
  {
    id: "boss-motorball",
    name: "モーターボール",
    kind: "boss",
    source: "https://finalfantasy-jun-site.com/ff7_remake/boss/motorball.html",
    image: "https://finalfantasy-jun-site.com/ff7_remake/boss/chapter18/02.jpg",
    places: [],
    hp: {
      hard: "10000"
    },
    atk: {},
    elements: [],
    ailments: [],
    rewards: {},
    items: {},
    actions: [],
    tactic: "耐久を見て、通りやすい属性を優先する。"
  }
];

globalThis.ENEMIES = ENEMIES;
