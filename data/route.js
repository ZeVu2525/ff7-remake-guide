// FINAL FANTASY VII REMAKE のルート枠。
// カードの形（仮データは example: true と、文面の「例」を残す）:
// {
//   id: "ch01-01",       // 章の中で安定した連番。後から変えない
//   flag: "story",       // game.js の flags.id（story / deadline / missable / request / optional）
//   example: true,       // 仮データだけ true。本番のカードでは外す
//   title: "例: …",
//   detail: "例: …",     // 自分の言葉。攻略文の転載はしない
//   deadline: "例: …",   // 期限・取り逃しのときだけ
//   source: ""           // 出典URL。空でもよい
// }
const ROUTE = {
  main: [
    {
      chapterId: "ch01",
      items: [
        {
          id: "ch01-01",
          flag: "story",
          example: true,
          title: "例: この章で行うこと",
          detail: "例: 手順は自分の言葉で書く。攻略サイトの文章や表は貼らない。",
          source: ""
        },
        {
          id: "ch01-02",
          flag: "missable",
          example: true,
          title: "例: 取り逃すと戻れないこと",
          detail: "例: 何を、どの時点の前に終えるかを書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        }
      ]
    },
    {
      chapterId: "ch02",
      items: [
        {
          id: "ch02-01",
          flag: "deadline",
          example: true,
          title: "例: 期限のあるチェック",
          detail: "例: 過ぎると消えるものを、deadline に期限の目安と一緒に書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        },
        {
          id: "ch02-02",
          flag: "request",
          example: true,
          title: "例: この章の依頼",
          detail: "例: 依頼の本体は台帳に書き、ここには着手する時点だけ置く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch03",
      items: [
        {
          id: "ch03-01",
          flag: "request",
          example: true,
          title: "例: この章の依頼",
          detail: "例: 依頼の本体は台帳に書き、ここには着手する時点だけ置く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch04",
      items: [
        {
          id: "ch04-01",
          flag: "deadline",
          example: true,
          title: "例: 期限のあるチェック",
          detail: "例: 過ぎると消えるものを、deadline に期限の目安と一緒に書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        }
      ]
    },
    {
      chapterId: "ch05",
      items: [
        {
          id: "ch05-01",
          flag: "missable",
          example: true,
          title: "例: 取り逃すと戻れないこと",
          detail: "例: 何を、どの時点の前に終えるかを書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        }
      ]
    },
    {
      chapterId: "ch06",
      items: [
        {
          id: "ch06-01",
          flag: "story",
          example: true,
          title: "例: この章で行うこと",
          detail: "例: 手順は自分の言葉で書く。攻略サイトの文章や表は貼らない。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch07",
      items: [
        {
          id: "ch07-01",
          flag: "optional",
          example: true,
          title: "例: 寄り道のチェック",
          detail: "例: 進まなくても本編は進むものを、この形で置く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch08",
      items: [
        {
          id: "ch08-01",
          flag: "request",
          example: true,
          title: "例: この章の依頼",
          detail: "例: 依頼の本体は台帳に書き、ここには着手する時点だけ置く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch09",
      items: [
        {
          id: "ch09-01",
          flag: "deadline",
          example: true,
          title: "例: 期限のあるチェック",
          detail: "例: 過ぎると消えるものを、deadline に期限の目安と一緒に書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        }
      ]
    },
    {
      chapterId: "ch10",
      items: [
        {
          id: "ch10-01",
          flag: "missable",
          example: true,
          title: "例: 取り逃すと戻れないこと",
          detail: "例: 何を、どの時点の前に終えるかを書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        }
      ]
    },
    {
      chapterId: "ch11",
      items: [
        {
          id: "ch11-01",
          flag: "story",
          example: true,
          title: "例: この章で行うこと",
          detail: "例: 手順は自分の言葉で書く。攻略サイトの文章や表は貼らない。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch12",
      items: [
        {
          id: "ch12-01",
          flag: "optional",
          example: true,
          title: "例: 寄り道のチェック",
          detail: "例: 進まなくても本編は進むものを、この形で置く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch13",
      items: [
        {
          id: "ch13-01",
          flag: "request",
          example: true,
          title: "例: この章の依頼",
          detail: "例: 依頼の本体は台帳に書き、ここには着手する時点だけ置く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch14",
      items: [
        {
          id: "ch14-01",
          flag: "deadline",
          example: true,
          title: "例: 期限のあるチェック",
          detail: "例: 過ぎると消えるものを、deadline に期限の目安と一緒に書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        }
      ]
    },
    {
      chapterId: "ch15",
      items: [
        {
          id: "ch15-01",
          flag: "missable",
          example: true,
          title: "例: 取り逃すと戻れないこと",
          detail: "例: 何を、どの時点の前に終えるかを書く。",
          source: "",
          deadline: "例: 次の章へ進む前"
        }
      ]
    },
    {
      chapterId: "ch16",
      items: [
        {
          id: "ch16-01",
          flag: "story",
          example: true,
          title: "例: この章で行うこと",
          detail: "例: 手順は自分の言葉で書く。攻略サイトの文章や表は貼らない。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch17",
      items: [
        {
          id: "ch17-01",
          flag: "optional",
          example: true,
          title: "例: 寄り道のチェック",
          detail: "例: 進まなくても本編は進むものを、この形で置く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch18",
      items: [
        {
          id: "ch18-01",
          flag: "request",
          example: true,
          title: "例: この章の依頼",
          detail: "例: 依頼の本体は台帳に書き、ここには着手する時点だけ置く。",
          source: ""
        }
      ]
    }
  ],
  hard: [
    {
      chapterId: "ch01",
      items: [
        {
          id: "hard-ch01-01",
          flag: "story",
          example: true,
          title: "例: HARDだけのチェック",
          detail: "例: 本編のチェックとは別に保存される。難易度ごとの差だけを書く。",
          source: ""
        }
      ]
    },
    {
      chapterId: "ch02",
      items: [

      ]
    },
    {
      chapterId: "ch03",
      items: [

      ]
    },
    {
      chapterId: "ch04",
      items: [

      ]
    },
    {
      chapterId: "ch05",
      items: [

      ]
    },
    {
      chapterId: "ch06",
      items: [

      ]
    },
    {
      chapterId: "ch07",
      items: [

      ]
    },
    {
      chapterId: "ch08",
      items: [

      ]
    },
    {
      chapterId: "ch09",
      items: [

      ]
    },
    {
      chapterId: "ch10",
      items: [

      ]
    },
    {
      chapterId: "ch11",
      items: [

      ]
    },
    {
      chapterId: "ch12",
      items: [

      ]
    },
    {
      chapterId: "ch13",
      items: [

      ]
    },
    {
      chapterId: "ch14",
      items: [

      ]
    },
    {
      chapterId: "ch15",
      items: [

      ]
    },
    {
      chapterId: "ch16",
      items: [

      ]
    },
    {
      chapterId: "ch17",
      items: [

      ]
    },
    {
      chapterId: "ch18",
      items: [

      ]
    }
  ],
  intermission: [
    {
      chapterId: "im01",
      items: [
        {
          id: "im01-01",
          flag: "story",
          example: true,
          title: "例: INTERmissionのチェック",
          detail: "例: 本編とは別の進行として保存される。章題は番号のままにする。",
          source: ""
        }
      ]
    },
    {
      chapterId: "im02",
      items: [

      ]
    }
  ]
};

globalThis.ROUTE = ROUTE;
