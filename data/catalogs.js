const CATALOGS = {
  quests: {
    title: "依頼",
    lead: "受注場所、条件、報酬、手順を1件ずつ開く。地図は掲載元の画像を参照する。チャドリーレポートの調査表もここにある。",
    items: [
      {
        id: "quest-chadley",
        name: "チャドリーレポート",
        rewards: [],
        steps: [
          "順路では、チャドリーから依頼を引き受ける 入手 「みやぶる」マテリア。",
          "順路では、バトルレポート01「モンスターの生態調査01」をクリア。",
          "順路では、チャドリーに報告。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q01.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/chadrey.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        reports: [
          {
            no: "01",
            title: "モンスターの生態調査No.1",
            topic: "自然にHPが戻る敵の共通点を、みやぶるで調べる。",
            condition: "敵2種をみやぶる",
            record: "2",
            materia: "オートケアル"
          },
          {
            no: "02",
            title: "属性攻撃の調査No.1",
            topic: "炎・氷・雷が効く相手に、その属性を当てた記録を取る。",
            condition: "炎・氷・雷が弱点の敵に弱点属性の攻撃を当てる(各1回)",
            record: "3",
            materia: "かぜ"
          },
          {
            no: "03",
            title: "バースト現象の解析No.1",
            topic: "バースト中の敵へ固有アビリティを当て、ATBのたまりを見る。",
            condition: "バーストの敵に固有アビリティを当てATBゲージを合計10回ためる",
            record: "10",
            materia: "せんせいこうげき"
          },
          {
            no: "04",
            title: "バースト現象の解析No.2",
            topic: "種類の違う敵をバーストさせ、その回数を集める。",
            condition: "敵15種をバーストさせる",
            record: "15",
            materia: "ATBブースト"
          }
        ],
        card: "ch03-08"
      },
      {
        id: "quest-bomb",
        name: "爆裂ダイナマイトボディ",
        rewards: [
          {
            mode: "EASY",
            reward: "4052〜5452"
          },
          {
            mode: "NORMAL",
            reward: "7368〜9912"
          },
          {
            mode: "HARD",
            reward: "18864"
          },
          {
            mode: "EASY",
            reward: "116〜238"
          },
          {
            mode: "NORMAL",
            reward: "1742"
          },
          {
            mode: "HARD",
            reward: "1742"
          }
        ],
        steps: [
          "順路では、サムから事情を聞く。",
          "順路では、スペシャルマッチに挑戦してボム2体を倒す。",
          "順路では、サムから報酬を受け取る。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/15b.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/bomb.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "4052〜5452"
            },
            {
              mode: "NORMAL",
              hp: "7368〜9912"
            },
            {
              mode: "HARD",
              hp: "18864"
            }
          ],
          weak: [],
          actions: [
            {
              name: "体当たり",
              type: "物理(近接)"
            },
            {
              name: "火炎",
              type: "魔法"
            },
            {
              name: "ファイアボール",
              type: "弾 魔法"
            },
            {
              name: "爆 発 魔法",
              type: "炎"
            },
            {
              name: "自爆 てきのわざとして習得可能",
              type: "魔法"
            },
            {
              name: "カウンターファイア",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch09-10"
      },
      {
        id: "quest-cerulean-drake",
        name: "墓場からの異物",
        rewards: [
          {
            mode: "EASY",
            reward: "1621〜5517"
          },
          {
            mode: "NORMAL",
            reward: "2947〜10031"
          },
          {
            mode: "HARD",
            reward: "16506"
          },
          {
            mode: "EASY",
            reward: "73〜297"
          },
          {
            mode: "NORMAL",
            reward: "1742"
          },
          {
            mode: "HARD",
            reward: "1742"
          }
        ],
        steps: [
          "順路では、ジャンク屋に「廃工場の羽根トカゲ」討伐報告。",
          "順路では、グエンから依頼を引き受ける。",
          "順路では、神羅ボックスを壊して、自警団のカギを入手。",
          "順路では、自警団のカギを使用しロックを解除。",
          "ディーングロウを倒す。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q03.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/cerulean-drake.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "1621〜5517"
            },
            {
              mode: "NORMAL",
              hp: "2947〜10031"
            },
            {
              mode: "HARD",
              hp: "16506"
            }
          ],
          weak: [
            "風 ×2.0"
          ],
          actions: [
            {
              name: "ウィングカッター",
              type: "物理(近接)"
            },
            {
              name: "グライドダイブ",
              type: "物理(近接)"
            },
            {
              name: "スリングショット",
              type: "物理(近接)"
            },
            {
              name: "ブリザド",
              type: "弾 魔法"
            },
            {
              name: "氷塊 魔法",
              type: "氷"
            },
            {
              name: "フリーズブレス",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch03-13"
      },
      {
        id: "quest-chromogger",
        name: "噂のスラムエンジェル",
        rewards: [
          {
            mode: "EASY",
            reward: "15197〜20444"
          },
          {
            mode: "NORMAL",
            reward: "27630〜37170"
          },
          {
            mode: "HARD",
            reward: "70740"
          },
          {
            mode: "EASY",
            reward: "32〜66"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "順路では、デマンから依頼を引き受ける。",
          "順路では、ミレイユから事情を聞く。",
          "デマンと話す。",
          "トクシックダクトを倒す。",
          "順路では、スラムエンジェルの予告状を拾う。",
          "デマンに報告。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/09.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/chromogger.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "15197〜20444"
            },
            {
              mode: "NORMAL",
              hp: "27630〜37170"
            },
            {
              mode: "HARD",
              hp: "70740"
            }
          ],
          weak: [
            "雷 ×2.0"
          ],
          actions: [
            {
              name: "パンチ",
              type: "振り上げ 物理(近接)"
            },
            {
              name: "鉄球落下 物理(近接)",
              type: "-"
            },
            {
              name: "鉄球落とし",
              type: "鉄球 物理(近接)"
            },
            {
              name: "衝撃波 物理(近接)",
              type: "-"
            },
            {
              name: "有害スモック",
              type: "噴出した煙 魔法"
            },
            {
              name: "地面の煙 魔法",
              type: "-"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch08-14"
      },
      {
        id: "quest-crush-box",
        name: "英雄の証明",
        rewards: [],
        steps: [
          "サラと話す。",
          "順路では、箱を壊して10000以上のスコアを出す。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/10.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/crush-box.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch08-12"
      },
      {
        id: "quest-dandandan",
        name: "白熱スクワット",
        rewards: [],
        steps: [
          "ジーナンと話す。",
          "順路では、もう一度ジーナンに話しかけて、ゼン・ワンと戦う。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/13.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/dandandan.html",
        enemies: {
          hp: [],
          weak: [
            "EASY メガポーション×3"
          ],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch09-08"
      },
      {
        id: "quest-doomrat",
        name: "化けネズミの軍団",
        client: "アイテム屋",
        place: "七番街スラム「居住区」",
        when: "CHAPTER3「なんでも屋の仕事」開始後から物資保管庫でジョニーを助け、セブンスヘブン入り口でティファの問いに「はい」と答えるまで",
        condition: "ワイマーに話しかけクエストを開始する",
        clear: "化けネズミ×2を倒す。",
        level: "10",
        rewards: [
          {
            mode: "EASY・NORMAL",
            reward: "ハイポーション×5"
          },
          {
            mode: "EASY",
            reward: "1389〜4089"
          },
          {
            mode: "NORMAL",
            reward: "2526〜7434"
          },
          {
            mode: "HARD",
            reward: "14148"
          },
          {
            mode: "EASY",
            reward: "20〜65"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "順路では、アイテム屋から依頼を引き受ける。",
          "ウエアラットを残らず倒す。",
          "順路では、アイテム屋を訪ねる。",
          "化けネズミ2体を倒す。"
        ],
        after: [
          "クエスト「さまよう軍犬」を受けられるようになる。",
          "終えたあと、アイテム屋の品揃えに「ハイポーション」と「ちりょう」マテリアが増える。"
        ],
        map: "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q02.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/doomrat.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "1389〜4089"
            },
            {
              mode: "NORMAL",
              hp: "2526〜7434"
            },
            {
              mode: "HARD",
              hp: "14148"
            }
          ],
          weak: [
            "クリア条件 化けネズミ×2を退治する",
            "氷 ×2.0"
          ],
          actions: [
            {
              name: "かみつき",
              type: "物理(近接)"
            },
            {
              name: "ネズミ返し",
              type: "跳びつき 物理(近接)"
            },
            {
              name: "かみつき 物理(近接)",
              type: "-"
            },
            {
              name: "どろんこ",
              type: "物理(遠隔)"
            },
            {
              name: "チューチュー",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch03-09"
      },
      {
        id: "quest-grungy-bandit",
        name: "盗みの代償",
        rewards: [
          {
            mode: "EASY",
            reward: "3546〜6884"
          },
          {
            mode: "NORMAL",
            reward: "6447〜12516"
          },
          {
            mode: "HARD",
            reward: "16506"
          },
          {
            mode: "EASY",
            reward: "210〜762"
          },
          {
            mode: "NORMAL",
            reward: "3168"
          },
          {
            mode: "HARD",
            reward: "3168"
          },
          {
            mode: "EASY",
            reward: "608〜793"
          },
          {
            mode: "NORMAL",
            reward: "1106〜1442"
          },
          {
            mode: "HARD",
            reward: "2830"
          },
          {
            mode: "EASY",
            reward: "61〜114"
          },
          {
            mode: "NORMAL",
            reward: "928"
          },
          {
            mode: "HARD",
            reward: "928"
          },
          {
            mode: "EASY",
            reward: "1013〜1321"
          },
          {
            mode: "NORMAL",
            reward: "1842〜2402"
          },
          {
            mode: "HARD",
            reward: "4716"
          },
          {
            mode: "EASY",
            reward: "82〜152"
          },
          {
            mode: "NORMAL",
            reward: "1238"
          },
          {
            mode: "HARD",
            reward: "1238"
          },
          {
            mode: "EASY",
            reward: "608〜793"
          },
          {
            mode: "NORMAL",
            reward: "1106〜1442"
          },
          {
            mode: "HARD",
            reward: "2830"
          },
          {
            mode: "EASY",
            reward: "51〜95"
          },
          {
            mode: "NORMAL",
            reward: "774"
          },
          {
            mode: "HARD",
            reward: "774"
          }
        ],
        steps: [
          "順路では、ミレイユから事情を聞く。",
          "順路では、ペグ+ブッチョ+バド+ジャイアントバグラーを倒す。",
          "順路では、ミレイユに報告し、ホンモノの予告状を入手。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/14a.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/grungy-bandit.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "3546〜6884"
            },
            {
              mode: "NORMAL",
              hp: "6447〜12516"
            },
            {
              mode: "HARD",
              hp: "16506"
            },
            {
              mode: "EASY",
              hp: "608〜793"
            },
            {
              mode: "NORMAL",
              hp: "1106〜1442"
            },
            {
              mode: "HARD",
              hp: "2830"
            }
          ],
          weak: [
            "炎 ×2.0",
            "炎 ×2.0",
            "炎 ×2.0",
            "炎 ×2.0"
          ],
          actions: [
            {
              name: "突っ張り",
              type: "物理(近接)"
            },
            {
              name: "タックル",
              type: "物理(近接)"
            },
            {
              name: "ジャンピングニーアアタック",
              type: "物理(近接)"
            },
            {
              name: "リフトアップスラム",
              type: "物理(近接)"
            },
            {
              name: "ネックハンギングツリー",
              type: "しめつけ 物理(近接)"
            },
            {
              name: "たたきつけ 物理(近接)",
              type: "-"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch09-11"
      },
      {
        id: "quest-hedgehog-pie-king",
        name: "見回りの子供たち",
        rewards: [
          {
            mode: "EASY",
            reward: "7092〜9540"
          },
          {
            mode: "NORMAL",
            reward: "12894〜17346"
          },
          {
            mode: "HARD",
            reward: "33012"
          },
          {
            mode: "EASY",
            reward: "32〜65"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "順路では、フォリア先生から事情を聞く。",
          "順路では、〜 6 の場所にいる子供たちを連れ戻す。※順不同。",
          "フォリア先生と話す。",
          "順路では、ヘッジホッグキング1体+ヘッジホッグパイ2体を倒す。",
          "順路では、子供たちに報告。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/08.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/hedgehog-pie-king.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "7092〜9540"
            },
            {
              mode: "NORMAL",
              hp: "12894〜17346"
            },
            {
              mode: "HARD",
              hp: "33012"
            }
          ],
          weak: [
            "氷 ×2.0"
          ],
          actions: [
            {
              name: "体当たり",
              type: "物理(近接)"
            },
            {
              name: "スロウ",
              type: "魔法"
            },
            {
              name: "スィートドリーム",
              type: "魔法"
            },
            {
              name: "みんなを守る",
              type: "-"
            },
            {
              name: "自分を守る",
              type: "-"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch08-10"
      },
      {
        id: "quest-helhound",
        name: "おてんば盗賊",
        rewards: [
          {
            mode: "EASY",
            reward: "19156〜28519"
          },
          {
            mode: "NORMAL",
            reward: "34829〜51852"
          },
          {
            mode: "HARD",
            reward: "68382"
          },
          {
            mode: "EASY",
            reward: "198〜381"
          },
          {
            mode: "NORMAL",
            reward: "1584"
          },
          {
            mode: "HARD",
            reward: "1584"
          },
          {
            mode: "EASY",
            reward: "1013〜1321"
          },
          {
            mode: "NORMAL",
            reward: "1842〜2402"
          },
          {
            mode: "HARD",
            reward: "4716"
          },
          {
            mode: "EASY",
            reward: "51〜95"
          },
          {
            mode: "NORMAL",
            reward: "774"
          },
          {
            mode: "HARD",
            reward: "774"
          }
        ],
        steps: [
          "順路では、ジョニーから事情を聞く。",
          "順路では、キリエから事情を聞く。",
          "順路では、スペシャルマッチに参加して、猛獣使い+ヘルハウンドを倒す。",
          "キリエに報告。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/09.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/helhound.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "19156〜28519"
            },
            {
              mode: "NORMAL",
              hp: "34829〜51852"
            },
            {
              mode: "HARD",
              hp: "68382"
            },
            {
              mode: "EASY",
              hp: "1013〜1321"
            },
            {
              mode: "NORMAL",
              hp: "1842〜2402"
            },
            {
              mode: "HARD",
              hp: "4716"
            }
          ],
          weak: [
            "氷 ×2.0",
            "炎 ×2.0"
          ],
          actions: [
            {
              name: "ツメ",
              type: "物理(近接)"
            },
            {
              name: "ダイブファング",
              type: "物理(近接)"
            },
            {
              name: "ヘルロアー",
              type: "魔法"
            },
            {
              name: "フェイタルバイト",
              type: "かみつき 物理(近接)"
            },
            {
              name: "赤い炎 魔法",
              type: "炎"
            },
            {
              name: "紫の炎 魔法",
              type: "-"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-11"
      },
      {
        id: "quest-hiden",
        name: "秘伝の薬",
        rewards: [],
        steps: [],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/21.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/hiden.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-10"
      },
      {
        id: "quest-inspiration",
        name: "あくなき夜",
        rewards: [],
        steps: [],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/14b.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/inspiration.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch09-09"
      },
      {
        id: "quest-jury-rigged-cutter",
        name: "逆襲の刃",
        rewards: [
          {
            mode: "EASY",
            reward: "7598〜10222"
          },
          {
            mode: "NORMAL",
            reward: "13815〜18585"
          },
          {
            mode: "HARD",
            reward: "35370"
          },
          {
            mode: "EASY",
            reward: "231〜475"
          },
          {
            mode: "NORMAL",
            reward: "3484"
          },
          {
            mode: "HARD",
            reward: "3484"
          }
        ],
        steps: [
          "順路では、ゲートキーパーから依頼を引き受ける。",
          "順路では、スペシャルマッチに挑戦してカッターマシン=カスタムを倒す。",
          "順路では、マムから報酬を受け取る。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/15b.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/jury-rigged-cutter.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "7598〜10222"
            },
            {
              mode: "NORMAL",
              hp: "13815〜18585"
            },
            {
              mode: "HARD",
              hp: "35370"
            }
          ],
          weak: [
            "雷 ×2.0"
          ],
          actions: [
            {
              name: "チェーンソー",
              type: "物理(近接)"
            },
            {
              name: "回転のこぎり",
              type: "物理(近接)"
            },
            {
              name: "突撃",
              type: "カッター 物理(近接)"
            },
            {
              name: "突 進 物理(近接)",
              type: "-"
            },
            {
              name: "連続のこぎり",
              type: "物理(近接)"
            },
            {
              name: "みじんぎり",
              type: "斬りつけ 物理(近接)"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch09-12"
      },
      {
        id: "quest-kensui",
        name: "揺れる想い",
        rewards: [],
        steps: [
          "アニヤンと話す。",
          "順路では、もう一度アニヤンに話しかけて、けんすい勝負初級に勝利。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/19.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/kensui.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-07"
      },
      {
        id: "quest-lesser-drake",
        name: "廃工場の羽根トカゲ",
        rewards: [
          {
            mode: "EASY",
            reward: "811〜2281"
          },
          {
            mode: "NORMAL",
            reward: "1474〜4148"
          },
          {
            mode: "HARD",
            reward: "8253"
          },
          {
            mode: "EASY",
            reward: "52〜143"
          },
          {
            mode: "NORMAL",
            reward: "1224"
          },
          {
            mode: "HARD",
            reward: "1224"
          }
        ],
        steps: [
          "順路では、ジャンク屋から依頼を引き受ける。",
          "自警団員ナルジンと話す。",
          "羽根トカゲ1体を倒す。",
          "羽根トカゲ2体を倒す。",
          "順路では、・ 4 は順不同 レポートNo.049 羽根トカゲ モード 最大HP EASY 811〜2281 50〜113 67〜151 29〜61 60〜134 NORMAL 1474〜4148 HARD 8253 238 328 120 268 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 52〜143 3 60〜134 NORMAL HARD 1224 9 1026 入手できるアイテム 通常 ポーション(12%) レア 重力球(5%) 盗む フェニクスの尾(5%) ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 0体.25 遠隔 0体.25 魔法 1体.0 1体.0 炎 属性 1体.0 0体.25 氷 属性 1体.0 0体.25 雷 属性 1体.0 0体.25 風 属性 2体.0 2体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q03.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/lesser-drake.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "811〜2281"
            },
            {
              mode: "NORMAL",
              hp: "1474〜4148"
            },
            {
              mode: "HARD",
              hp: "8253"
            }
          ],
          weak: [
            "風 ×2.0"
          ],
          actions: [
            {
              name: "ウィングカッター",
              type: "物理(近接)"
            },
            {
              name: "グライド",
              type: "物理(遠隔)"
            },
            {
              name: "トルネード",
              type: "弾 魔法"
            },
            {
              name: "竜巻 魔法",
              type: "風"
            },
            {
              name: "ウィンドバリア",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch03-10"
      },
      {
        id: "quest-lost-friends",
        name: "消えたトモダチ",
        rewards: [],
        steps: [
          "順路では、ベティから事情を聞く。",
          "順路では、白猫を調べる。",
          "順路では、白猫を調べる。",
          "順路では、白猫を調べる。",
          "ベティと話す。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q04.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/lost-friends.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch03-11"
      },
      {
        id: "quest-mark-li-monodrive",
        name: "暴走兵器",
        rewards: [
          {
            mode: "EASY",
            reward: "2026〜3590"
          },
          {
            mode: "NORMAL",
            reward: "3684〜6528"
          },
          {
            mode: "HARD",
            reward: "9432"
          },
          {
            mode: "EASY",
            reward: "32〜90"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "順路では、「おびえた男」から事情を聞く。",
          "順路では、ピアシングアイ3体を倒す。",
          "順路では、ピアシングアイ2体を倒す。",
          "順路では、武器屋の前に移動した「おびえた男」に報告を。",
          "順路では、〜 3 は順不同 画像をクリックすると拡大します。 レポートNo.019 ピアシングアイ モード 最大HP EASY 2026〜3590 140〜223 140〜223 17〜31 17〜31 NORMAL 3684〜6528 HARD 9432 373 373 45 45 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 32〜90 4 101〜300 NORMAL HARD 476 12 787 入手できるアイテム 通常 ハイポーション(12%) レア エーテルターボ(5%) 盗む エーテルターボ(5%) ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 1体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 2体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 無効 バーサク 35 ・・・物理攻撃力。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/09.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/mark-li-monodrive.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "2026〜3590"
            },
            {
              mode: "NORMAL",
              hp: "3684〜6528"
            },
            {
              mode: "HARD",
              hp: "9432"
            }
          ],
          weak: [
            "風 ×2.0"
          ],
          actions: [
            {
              name: "ドリルドライブ",
              type: "物理(近接)"
            },
            {
              name: "グラウンドドリル",
              type: "物理(近接)"
            },
            {
              name: "ファイア",
              type: "魔法"
            },
            {
              name: "トリプルファイア",
              type: "魔法"
            },
            {
              name: "物理耐性付与",
              type: "-"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch08-11"
      },
      {
        id: "quest-moguya",
        name: "極秘開店モーグリショップ",
        rewards: [],
        steps: [
          "モグヤと話す。",
          "順路では、モーグリメダルとモーグリ・モグ会員証を交換。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q01.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/moguya.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch08-09"
      },
      {
        id: "quest-musicpower",
        name: "音楽の力",
        rewards: [],
        steps: [
          "順路では、ベティから事情を聞く。",
          "順路では、宿泊客に話しかけて「16 おやすみまた明日」をもらう。",
          "順路では、若者に話しかけて「30 STAND UP」をもらう。",
          "順路では、おみやげ屋で50ギル払い「12 更に闘う者たち」を買う。",
          "順路では、ジュークボックスで 2 〜 4 を全て再生。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/20.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/musicpower.html",
        enemies: {
          hp: [],
          weak: [],
          actions: []
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-09"
      },
      {
        id: "quest-phantom",
        name: "消えた子供たち",
        rewards: [
          {
            mode: "EASY",
            reward: "7821〜11801"
          },
          {
            mode: "NORMAL",
            reward: "14220〜21456"
          },
          {
            mode: "HARD",
            reward: "28296"
          },
          {
            mode: "EASY",
            reward: "56〜114"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "順路では、フォリオ先生から依頼を引き受ける。",
          "順路では、ファントム2体を倒すく。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/16.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/phantom.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "7821〜11801"
            },
            {
              mode: "NORMAL",
              hp: "14220〜21456"
            },
            {
              mode: "HARD",
              hp: "28296"
            }
          ],
          weak: [
            "炎 ×2.0"
          ],
          actions: [
            {
              name: "ひっかく",
              type: "物理(近接)"
            },
            {
              name: "バニッシュクロー",
              type: "物理(近接)"
            },
            {
              name: "アイスクロー",
              type: "魔法"
            },
            {
              name: "ブリザド",
              type: "弾 魔法"
            },
            {
              name: "氷塊 魔法",
              type: "氷"
            },
            {
              name: "ブリザラ",
              type: "弾 魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-04"
      },
      {
        id: "quest-quest17",
        name: "チョコボを探せ",
        place: "伍番街スラム「ボルトナットヒルズ」",
        level: "23",
        rewards: [
          {
            mode: "EASY",
            reward: "9776〜14751"
          },
          {
            mode: "NORMAL",
            reward: "17775〜26820"
          },
          {
            mode: "HARD",
            reward: "35370"
          },
          {
            mode: "EASY",
            reward: "56〜114"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          },
          {
            mode: "EASY",
            reward: "3303〜4917"
          },
          {
            mode: "NORMAL",
            reward: "6005〜8940"
          },
          {
            mode: "HARD",
            reward: "11790"
          },
          {
            mode: "EASY",
            reward: "59〜114"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "順路では、チョコボスタッフから依頼を引き受ける。 ギザールの野菜3体入手。",
          "順路では、ストライプフォリッジを倒し、チョコボにギザールの野菜を与える。",
          "順路では、チョコボにギザールの野菜を与える。",
          "順路では、ミュータントテイルを倒し、チョコボにギザールの野菜を与える。",
          "サムに報告。",
          "順路では、〜 4 は順不同 レポートNo.051 ストライプフォリッジ 出現場所 伍番街スラム「ボルトナットヒルズ」 レベル 23 ハードモードでの報酬 射撃マニュアル 第11巻 モード 最大HP EASY 9776〜14751 113〜167 113〜167 1 44〜65 NORMAL 17775〜26820 HARD 35370 238 238 1 86 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 56〜114 7 616〜1260 NORMAL HARD 476 21 2624 入手できるアイテム 通常 - レア - 盗む - ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 2体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 2体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/12.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/quest17.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "9776〜14751"
            },
            {
              mode: "NORMAL",
              hp: "17775〜26820"
            },
            {
              mode: "HARD",
              hp: "35370"
            },
            {
              mode: "EASY",
              hp: "3303〜4917"
            },
            {
              mode: "NORMAL",
              hp: "6005〜8940"
            },
            {
              mode: "HARD",
              hp: "11790"
            }
          ],
          weak: [
            "氷 ×2.0",
            "風 ×2.0"
          ],
          actions: [
            {
              name: "ウィングカッター",
              type: "物理(近接)"
            },
            {
              name: "グライド",
              type: "物理(近接)"
            },
            {
              name: "スリングショット",
              type: "物理(近接)"
            },
            {
              name: "ファイアブレス",
              type: "魔法"
            },
            {
              name: "ワームホール",
              type: "魔法"
            },
            {
              name: "ダークボール",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-05"
      },
      {
        id: "quest-sahagin-prince",
        name: "コルネオの隠し財産",
        place: "地下下水道 旧大水路 菅路区画「旧汚染処理区画」",
        condition: "MAINSTORYでどろぼうアプスを倒し、水路間通路にあるレバーを調べて宝物庫の水を抜いた後",
        level: "27",
        rewards: [
          {
            mode: "EASY",
            reward: "10287〜13768"
          },
          {
            mode: "NORMAL",
            reward: "18704〜25032"
          },
          {
            mode: "HARD",
            reward: "33012"
          },
          {
            mode: "EASY",
            reward: "72〜114"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          },
          {
            mode: "EASY",
            reward: "2038〜2792"
          },
          {
            mode: "NORMAL",
            reward: "3705〜5077"
          },
          {
            mode: "HARD",
            reward: "8961"
          },
          {
            mode: "EASY",
            reward: "125〜257"
          },
          {
            mode: "NORMAL",
            reward: "1678"
          },
          {
            mode: "HARD",
            reward: "1678"
          }
        ],
        steps: [
          "順路では、デマンから依頼を引き受ける。",
          "ミレイユと話す。",
          "順路では、クエスト「おてんば盗賊」をクリアし、コルネオ宝物庫のカギを入手。",
          "順路では、宝物庫のカギでドアを開け、ルビーの宝冠を入手。",
          "順路では、宝物庫のカギでドアを開け、ダイヤの宝冠を入手。",
          "順路では、HOLDでレバーを引いて宝物庫の水を抜く。",
          "順路では、宝物庫のカギでドアを開け、敵を倒してエメラルドの宝冠を入手。",
          "順路では、マーレにルビーの宝冠、ダイヤの宝冠、エメラルドの宝冠を渡す。",
          "順路では、~ 7 は順不同 依頼人のいる場所 状況によって移動するデマン ステーション通りでデマンに依頼を引き受ける前に、クエスト「おてんば盗賊」の依頼を引き受けると教会前に移動したデマンから依頼を引き受けることになる。 クエスト進行順 レポートNo.063 サハギンプリンス ・・・物理攻撃力。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/23.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/sahagin-prince.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "10287〜13768"
            },
            {
              mode: "NORMAL",
              hp: "18704〜25032"
            },
            {
              mode: "HARD",
              hp: "33012"
            },
            {
              mode: "EASY",
              hp: "2038〜2792"
            },
            {
              mode: "NORMAL",
              hp: "3705〜5077"
            },
            {
              mode: "HARD",
              hp: "8961"
            }
          ],
          weak: [
            "炎 ×2.0",
            "炎 ×2.0"
          ],
          actions: [
            {
              name: "ヤリ",
              type: "物理(近接)"
            },
            {
              name: "乱れ突き",
              type: "物理(遠隔)"
            },
            {
              name: "ジャンプ",
              type: "物理(近接)"
            },
            {
              name: "カウンターアタック",
              type: "ヤリ 物理(近接)"
            },
            {
              name: "衝撃波 物理(近接)",
              type: "-"
            },
            {
              name: "水鉄砲",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-14"
      },
      {
        id: "quest-tonberry",
        name: "手下のうらみ",
        rewards: [
          {
            mode: "EASY",
            reward: "10428"
          },
          {
            mode: "NORMAL",
            reward: "18960"
          },
          {
            mode: "HARD",
            reward: "37728"
          },
          {
            mode: "EASY",
            reward: "186"
          },
          {
            mode: "NORMAL",
            reward: "1584"
          },
          {
            mode: "HARD",
            reward: "1584"
          }
        ],
        steps: [
          "順路では、マムから事情を聞く。",
          "順路では、トンベリを倒す。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/18.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/tonberry.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "10428"
            },
            {
              mode: "NORMAL",
              hp: "18960"
            },
            {
              mode: "HARD",
              hp: "37728"
            }
          ],
          weak: [],
          actions: [
            {
              name: "包丁",
              type: "物理(近接)"
            },
            {
              name: "やつあたり",
              type: "物理(近接)"
            },
            {
              name: "うらみ節",
              type: "魔法"
            },
            {
              name: "うらめしや",
              type: "魔法"
            },
            {
              name: "うらみ骨髄",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-06"
      },
      {
        id: "quest-type-o-behemoth",
        name: "地底の咆哮",
        rewards: [
          {
            mode: "EASY",
            reward: "22044"
          },
          {
            mode: "NORMAL",
            reward: "40080"
          },
          {
            mode: "HARD",
            reward: "70740"
          },
          {
            mode: "EASY",
            reward: "240"
          },
          {
            mode: "NORMAL",
            reward: "1584"
          },
          {
            mode: "HARD",
            reward: "1584"
          }
        ],
        steps: [
          "順路では、ワイマーから事情を聞く。",
          "順路では、ベヒーモス零式を倒す。",
          "順路では、ワイマーに報告。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/24.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/type-o-behemoth.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "22044"
            },
            {
              mode: "NORMAL",
              hp: "40080"
            },
            {
              mode: "HARD",
              hp: "70740"
            }
          ],
          weak: [],
          actions: [
            {
              name: "ひっかき",
              type: "物理(近接)"
            },
            {
              name: "たたきつけ",
              type: "物理(近接)"
            },
            {
              name: "たたきつけ (暴走モード)",
              type: "脚 物理(近接)"
            },
            {
              name: "衝撃波 魔法",
              type: "-"
            },
            {
              name: "しゃくりあげ",
              type: "物理(近接)"
            },
            {
              name: "しゃくりあげ (暴走モード)",
              type: "物理(近接)"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch14-15"
      },
      {
        id: "quest-venomantis",
        name: "墓参りの報酬",
        rewards: [
          {
            mode: "EASY",
            reward: "5066〜6815"
          },
          {
            mode: "NORMAL",
            reward: "9210〜12390"
          },
          {
            mode: "HARD",
            reward: "23580"
          },
          {
            mode: "EASY",
            reward: "32〜65"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "元気のない老人と話す。",
          "ムギと話す※話しかけなくてもクエストは進行。",
          "順路では、モグの店で墓地のカギを入手する。※依頼を引き受ける前から入手可能。",
          "順路では、墓地のカギを使用して中に入る。",
          "ネフィアウィーバー3体を倒す。",
          "順路では、元気のない老人に報告。",
          "順路では、〜 3 は順不同 レポートNo.054 ネフィアウィーバー モード 最大HP EASY 5066〜6815 108〜136 108〜136 74〜103 74〜103 NORMAL 9210〜12390 HARD 23580 283 283 194 194 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 32〜65 4 252〜531 NORMAL HARD 476 12 1968 入手できるアイテム 通常 - レア - 盗む - ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 2体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 1体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/quest/images/12.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/venomantis.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "5066〜6815"
            },
            {
              mode: "NORMAL",
              hp: "9210〜12390"
            },
            {
              mode: "HARD",
              hp: "23580"
            }
          ],
          weak: [
            "氷 ×2.0"
          ],
          actions: [
            {
              name: "カマ",
              type: "物理(近接)"
            },
            {
              name: "クロスカッター",
              type: "物理(近接)"
            },
            {
              name: "フライングスラッシュ",
              type: "物理(近接)"
            },
            {
              name: "睡眠針",
              type: "物理(近接)"
            },
            {
              name: "睡眠弾",
              type: "魔法"
            },
            {
              name: "糸",
              type: "魔法"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch08-15"
      },
      {
        id: "quest-wrath-hound",
        name: "さまよう軍犬",
        rewards: [
          {
            mode: "EASY",
            reward: "3473〜10222"
          },
          {
            mode: "NORMAL",
            reward: "6315〜18585"
          },
          {
            mode: "HARD",
            reward: "35370"
          },
          {
            mode: "EASY",
            reward: "20〜65"
          },
          {
            mode: "NORMAL",
            reward: "476"
          },
          {
            mode: "HARD",
            reward: "476"
          }
        ],
        steps: [
          "順路では、ワイマーから依頼を引き受ける。",
          "順路では、レイジハウンドを攻撃。",
          "順路では、ワイマーから事情を聞く。",
          "順路では、逃走したレイジハウンドを倒す。",
          "順路では、ワイマーから事情を聞く。",
          "順路では、・ 4 は順不同 レポートNo.016 レイジハウンド モード 最大HP EASY 3473〜10222 101〜229 33〜79 60〜141 35〜80 NORMAL 6315〜18585 HARD 35370 508 148 268 148 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 20〜65 8 266〜1239 NORMAL HARD 476 24 4592 入手できるアイテム 通常 - レア - 盗む - ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 2体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 1体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        after: [],
        map: "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q03.png",
        source: "https://finalfantasy-jun-site.com/ff7_remake/quest/wrath-hound.html",
        enemies: {
          hp: [
            {
              mode: "EASY",
              hp: "3473〜10222"
            },
            {
              mode: "NORMAL",
              hp: "6315〜18585"
            },
            {
              mode: "HARD",
              hp: "35370"
            }
          ],
          weak: [
            "氷 ×2.0"
          ],
          actions: [
            {
              name: "かみつき",
              type: "物理(近接)"
            },
            {
              name: "スナップウィップ",
              type: "物理(遠隔)"
            },
            {
              name: "突進",
              type: "物理(近接)"
            },
            {
              name: "スピアウィップ",
              type: "物理(近接)"
            },
            {
              name: "ネックバイト",
              type: "跳びつき 物理(近接)"
            },
            {
              name: "かみつき 物理(近接)",
              type: "-"
            }
          ]
        },
        detail: "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        card: "ch03-12"
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
        auto: "rest"
      },
      {
        id: "trophy-ch01",
        name: "壱番魔晄炉爆破",
        area: "STORY",
        detail: "１章をクリアした"
      },
      {
        id: "trophy-ch02",
        name: "八番街の逃走",
        area: "STORY",
        detail: "２章をクリアした"
      },
      {
        id: "trophy-ch03",
        name: "なんでも屋の仕事",
        area: "STORY",
        detail: "３章をクリアした"
      },
      {
        id: "trophy-ch04",
        name: "アバランチとの絆",
        area: "STORY",
        detail: "４章をクリアした"
      },
      {
        id: "trophy-ch05",
        name: "プランＥ展開",
        area: "STORY",
        detail: "５章をクリアした"
      },
      {
        id: "trophy-ch06",
        name: "スラムの太陽",
        area: "STORY",
        detail: "６章をクリアした"
      },
      {
        id: "trophy-ch07",
        name: "罠に落ちたネズミ",
        area: "STORY",
        detail: "７章をクリアした"
      },
      {
        id: "trophy-ch08",
        name: "再会",
        area: "STORY",
        detail: "８章をクリアした"
      },
      {
        id: "trophy-ch09",
        name: "欲望の街",
        area: "STORY",
        detail: "９章をクリアした"
      },
      {
        id: "trophy-ch10",
        name: "焦燥の迷宮",
        area: "STORY",
        detail: "１０章をクリアした"
      },
      {
        id: "trophy-ch11",
        name: "亡霊の墓場",
        area: "STORY",
        detail: "１１章をクリアした"
      },
      {
        id: "trophy-ch12",
        name: "死闘",
        area: "STORY",
        detail: "１２章をクリアした"
      },
      {
        id: "trophy-ch13",
        name: "醒めない悪夢",
        area: "STORY",
        detail: "１３章をクリアした"
      },
      {
        id: "trophy-ch14",
        name: "希望への救済",
        area: "STORY",
        detail: "１４章をクリアした"
      },
      {
        id: "trophy-ch15",
        name: "腐ったピザ",
        area: "STORY",
        detail: "１５章をクリアした"
      },
      {
        id: "trophy-ch16",
        name: "ノーアポイントメント",
        area: "STORY",
        detail: "１６章をクリアした"
      },
      {
        id: "trophy-ch17",
        name: "混沌からの脱出",
        area: "STORY",
        detail: "１７章をクリアした"
      },
      {
        id: "trophy-ch18",
        name: "運命の断裂",
        area: "STORY",
        detail: "１８章をクリアした"
      },
      {
        id: "trophy-first-win",
        name: "ソルジャーの肩慣らし",
        area: "STORY",
        detail: "はじめて戦闘に勝利した"
      },
      {
        id: "trophy-weakness",
        name: "弱点への一撃",
        area: "STORY",
        detail: "はじめて弱点属性をついた"
      },
      {
        id: "trophy-rescue",
        name: "拘束への一撃",
        area: "戦闘",
        detail: "はじめて拘束された仲間を助けた"
      },
      {
        id: "trophy-burst",
        name: "バーストの一撃",
        area: "STORY",
        detail: "はじめて敵をバーストさせた"
      },
      {
        id: "trophy-music-3",
        name: "音楽愛好家",
        area: "収集",
        detail: "ミュージックディスクを３個集めた"
      },
      {
        id: "trophy-quest-first",
        name: "なんでも屋の初仕事",
        area: "クエスト",
        detail: "はじめてクエストをクリアした"
      },
      {
        id: "trophy-weapon-novice",
        name: "武器アビリティ初心者",
        area: "行動",
        detail: "はじめて武器アビリティ熟練度MAXにした"
      },
      {
        id: "trophy-materia-novice",
        name: "マテリア初心者",
        area: "STORY",
        detail: "はじめてマテリアレベルが上がった"
      },
      {
        id: "trophy-summon-first",
        name: "みならい召喚士",
        area: "行動",
        detail: "はじめて召喚獣を呼び出した"
      },
      {
        id: "trophy-bike",
        name: "バイクソルジャー",
        area: "行動",
        detail: "バイクゲームの最後にジェシーにほめられた"
      },
      {
        id: "trophy-darts",
        name: "ダーツエキスパート",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "ダーツでセブンスヘブンランキングを制した"
      },
      {
        id: "trophy-moogle",
        name: "凄腕の整備士",
        area: "行動",
        detail: "「チョコボ＆モーグリ」マテリアを入手した"
      },
      {
        id: "trophy-thieves",
        name: "大泥棒三人組",
        area: "行動",
        detail: "魔晄炉の最上級セキュリティを突破した"
      },
      {
        id: "trophy-crash",
        name: "クラッシュヒーロー",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "クラッシュボックスノーマルをすべてクリアした"
      },
      {
        id: "trophy-flower",
        name: "アートフラワー",
        area: "STORY",
        detail: "リーフハウスに花飾りをした"
      },
      {
        id: "trophy-summon-win",
        name: "たたかう召喚士",
        area: "行動",
        detail: "はじめて召喚獣バトルに勝利した"
      },
      {
        id: "trophy-squat",
        name: "マッスルキング",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "スクワット勝負をすべてクリアした"
      },
      {
        id: "trophy-dance",
        name: "ダンシングクイーン",
        area: "行動",
        detail: "ダンスのごほうびで「アニヤンのピアス」を入手した"
      },
      {
        id: "trophy-arena",
        name: "カムバックチャンピオン",
        area: "行動",
        detail: "はじめて闘技場のフリーバトルをクリアした"
      },
      {
        id: "trophy-dress-3",
        name: "新米ドレッサー",
        area: "収集",
        detail: "嫁オーディションの衣装を３種類着こなした"
      },
      {
        id: "trophy-dress-all",
        name: "ベストドレッサー",
        area: "収集",
        detail: "嫁オーディションの衣装をすべて着こなした"
      },
      {
        id: "trophy-crash-hard",
        name: "レジェンドクラッシャー",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "クラッシュボックスハードをすべてクリアした"
      },
      {
        id: "trophy-pullup",
        name: "マッスルクイーン",
        area: "ﾐﾆｹﾞｰﾑ",
        detail: "けんすい勝負をすべてクリアした"
      },
      {
        id: "trophy-letter",
        name: "天使の感謝状",
        area: "クエスト",
        detail: "「スラムエンジェルの手紙」を入手した"
      },
      {
        id: "trophy-johnny",
        name: "ジョニーのマブダチ",
        area: "クエスト",
        detail: "ジョニーとの出来事をすべて体験した"
      },
      {
        id: "trophy-quests-all",
        name: "伝説のなんでも屋",
        area: "クエスト",
        detail: "すべてのクエストをクリアした"
      },
      {
        id: "trophy-music-all",
        name: "ミュージックマエストロ",
        area: "収集",
        detail: "すべてのミュージックディスクを入手した"
      },
      {
        id: "trophy-level",
        name: "レベルマスター",
        area: "カウント",
        detail: "キャラクターのレベルが50になった"
      },
      {
        id: "trophy-burst-max",
        name: "バーストマスター",
        area: "戦闘",
        detail: "バースト時のダメージ倍率300％を突破した"
      },
      {
        id: "trophy-reports",
        name: "バトルレポートマスター",
        area: "行動",
        detail: "バトルレポートをすべて達成した"
      },
      {
        id: "trophy-weapon-all",
        name: "武器アビリティマスター",
        area: "行動",
        detail: "武器アビリティをすべて習得した"
      },
      {
        id: "trophy-enemy-skill",
        name: "てきのわざマスター",
        area: "収集",
        detail: "敵の技をすべて習得した"
      },
      {
        id: "trophy-malboro",
        name: "未知との遭遇",
        area: "討伐",
        detail: "モルボルを倒した"
      },
      {
        id: "trophy-pride",
        name: "究極兵器",
        area: "討伐",
        detail: "プラウド・クラッド零号機を倒した"
      },
      {
        id: "trophy-hard-clear",
        name: "すべてを超えし者",
        area: "難易度",
        detail: "難易度HARDモードですべての章をクリアした"
      }
    ]
  }
};

globalThis.CATALOGS = CATALOGS;
