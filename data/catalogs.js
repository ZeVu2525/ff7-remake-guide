// 台帳。トロフィーの名称は提供された文言のまま。
// アイテムの買値・売値・入手場所は一覧の事実。説明は短くまとめてある。
// 依頼は章記事の構成に沿って、手順の文章だけ短く書き換えた。
const CATALOGS = {
  "quests": {
    "title": "依頼",
    "lead": "受注場所、条件、報酬、手順を1件ずつ開く。地図は掲載元の画像を参照する。チャドリーレポートの調査表もここにある。",
    "items": [
      {
        "id": "quest-chadley",
        "name": "チャドリーレポート",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [
          "順路では、チャドリーから依頼を引き受ける 入手 「みやぶる」マテリア。",
          "順路では、バトルレポート01「モンスターの生態調査01」をクリア。",
          "順路では、チャドリーに報告。"
        ],
        "after": [],
        "map": "maps/jun-ch03-q01.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/chadrey.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "reports": [
          {
            "no": "01",
            "title": "モンスターの生態調査No.1",
            "topic": "自然にHPが戻る敵の共通点を、みやぶるで調べる。",
            "condition": "敵2種をみやぶる",
            "record": "2",
            "materia": "オートケアル"
          },
          {
            "no": "02",
            "title": "属性攻撃の調査No.1",
            "topic": "炎・氷・雷が効く相手に、その属性を当てた記録を取る。",
            "condition": "炎・氷・雷が弱点の敵に弱点属性の攻撃を当てる(各1回)",
            "record": "3",
            "materia": "かぜ"
          },
          {
            "no": "03",
            "title": "バースト現象の解析No.1",
            "topic": "バースト中の敵へ固有アビリティを当て、ATBのたまりを見る。",
            "condition": "バーストの敵に固有アビリティを当てATBゲージを合計10回ためる",
            "record": "10",
            "materia": "せんせいこうげき"
          },
          {
            "no": "04",
            "title": "バースト現象の解析No.2",
            "topic": "種類の違う敵をバーストさせ、その回数を集める。",
            "condition": "敵15種をバーストさせる",
            "record": "15",
            "materia": "ATBブースト"
          }
        ],
        "card": "ch03-08"
      },
      {
        "id": "quest-bomb",
        "name": "爆裂ダイナマイトボディ",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "4052〜5452"
          },
          {
            "mode": "NORMAL",
            "reward": "7368〜9912"
          },
          {
            "mode": "HARD",
            "reward": "18864"
          },
          {
            "mode": "EASY",
            "reward": "116〜238"
          },
          {
            "mode": "NORMAL",
            "reward": "1742"
          },
          {
            "mode": "HARD",
            "reward": "1742"
          }
        ],
        "steps": [
          "順路では、サムから事情を聞く。",
          "順路では、スペシャルマッチに挑戦してボム2体を倒す。",
          "順路では、サムから報酬を受け取る。"
        ],
        "after": [],
        "map": "maps/jun-quest-15b.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/bomb.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "4052〜5452"
            },
            {
              "mode": "NORMAL",
              "hp": "7368〜9912"
            },
            {
              "mode": "HARD",
              "hp": "18864"
            }
          ],
          "weak": [],
          "actions": [
            {
              "name": "体当たり",
              "type": "物理(近接)"
            },
            {
              "name": "火炎",
              "type": "魔法"
            },
            {
              "name": "ファイアボール",
              "type": "弾 魔法"
            },
            {
              "name": "爆 発 魔法",
              "type": "炎"
            },
            {
              "name": "自爆 てきのわざとして習得可能",
              "type": "魔法"
            },
            {
              "name": "カウンターファイア",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch09-10"
      },
      {
        "id": "quest-cerulean-drake",
        "name": "墓場からの異物",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "1621〜5517"
          },
          {
            "mode": "NORMAL",
            "reward": "2947〜10031"
          },
          {
            "mode": "HARD",
            "reward": "16506"
          },
          {
            "mode": "EASY",
            "reward": "73〜297"
          },
          {
            "mode": "NORMAL",
            "reward": "1742"
          },
          {
            "mode": "HARD",
            "reward": "1742"
          }
        ],
        "steps": [
          "順路では、ジャンク屋に「廃工場の羽根トカゲ」討伐報告。",
          "順路では、グエンから依頼を引き受ける。",
          "順路では、神羅ボックスを壊して、自警団のカギを入手。",
          "順路では、自警団のカギを使用しロックを解除。",
          "ディーングロウを倒す。"
        ],
        "after": [],
        "map": "maps/jun-ch03-q03.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/cerulean-drake.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "1621〜5517"
            },
            {
              "mode": "NORMAL",
              "hp": "2947〜10031"
            },
            {
              "mode": "HARD",
              "hp": "16506"
            }
          ],
          "weak": [
            "風 ×2.0"
          ],
          "actions": [
            {
              "name": "ウィングカッター",
              "type": "物理(近接)"
            },
            {
              "name": "グライドダイブ",
              "type": "物理(近接)"
            },
            {
              "name": "スリングショット",
              "type": "物理(近接)"
            },
            {
              "name": "ブリザド",
              "type": "弾 魔法"
            },
            {
              "name": "氷塊 魔法",
              "type": "氷"
            },
            {
              "name": "フリーズブレス",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch03-13"
      },
      {
        "id": "quest-chromogger",
        "name": "噂のスラムエンジェル",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "15197〜20444"
          },
          {
            "mode": "NORMAL",
            "reward": "27630〜37170"
          },
          {
            "mode": "HARD",
            "reward": "70740"
          },
          {
            "mode": "EASY",
            "reward": "32〜66"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "順路では、デマンから依頼を引き受ける。",
          "順路では、ミレイユから事情を聞く。",
          "デマンと話す。",
          "トクシックダクトを倒す。",
          "順路では、スラムエンジェルの予告状を拾う。",
          "デマンに報告。"
        ],
        "after": [],
        "map": "maps/jun-quest-09.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/chromogger.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "15197〜20444"
            },
            {
              "mode": "NORMAL",
              "hp": "27630〜37170"
            },
            {
              "mode": "HARD",
              "hp": "70740"
            }
          ],
          "weak": [
            "雷 ×2.0"
          ],
          "actions": [
            {
              "name": "パンチ",
              "type": "振り上げ 物理(近接)"
            },
            {
              "name": "鉄球落下 物理(近接)",
              "type": "-"
            },
            {
              "name": "鉄球落とし",
              "type": "鉄球 物理(近接)"
            },
            {
              "name": "衝撃波 物理(近接)",
              "type": "-"
            },
            {
              "name": "有害スモック",
              "type": "噴出した煙 魔法"
            },
            {
              "name": "地面の煙 魔法",
              "type": "-"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch08-14"
      },
      {
        "id": "quest-crush-box",
        "name": "英雄の証明",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [
          "サラと話す。",
          "順路では、箱を壊して10000以上のスコアを出す。"
        ],
        "after": [],
        "map": "maps/jun-quest-10.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/crush-box.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch08-12"
      },
      {
        "id": "quest-dandandan",
        "name": "白熱スクワット",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [
          "ジーナンと話す。",
          "順路では、もう一度ジーナンに話しかけて、ゼン・ワンと戦う。"
        ],
        "after": [],
        "map": "maps/jun-quest-13.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/dandandan.html",
        "enemies": {
          "hp": [],
          "weak": [
            "EASY メガポーション×3"
          ],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch09-08"
      },
      {
        "id": "quest-doomrat",
        "name": "化けネズミの軍団",
        "client": "アイテム屋",
        "place": "七番街スラム「居住区」",
        "when": "CHAPTER3「なんでも屋の仕事」開始後から物資保管庫でジョニーを助け、セブンスヘブン入り口でティファの問いに「はい」と答えるまで",
        "condition": "ワイマーに話しかけクエストを開始する",
        "clear": "化けネズミ×2を倒す。",
        "level": "10",
        "rewards": [
          {
            "mode": "EASY・NORMAL",
            "reward": "ハイポーション×5"
          },
          {
            "mode": "EASY",
            "reward": "1389〜4089"
          },
          {
            "mode": "NORMAL",
            "reward": "2526〜7434"
          },
          {
            "mode": "HARD",
            "reward": "14148"
          },
          {
            "mode": "EASY",
            "reward": "20〜65"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "順路では、アイテム屋から依頼を引き受ける。",
          "ウエアラットを残らず倒す。",
          "順路では、アイテム屋を訪ねる。",
          "化けネズミ2体を倒す。"
        ],
        "after": [
          "クエスト「さまよう軍犬」を受けられるようになる。",
          "終えたあと、アイテム屋の品揃えに「ハイポーション」と「ちりょう」マテリアが増える。"
        ],
        "map": "maps/jun-ch03-q02.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/doomrat.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "1389〜4089"
            },
            {
              "mode": "NORMAL",
              "hp": "2526〜7434"
            },
            {
              "mode": "HARD",
              "hp": "14148"
            }
          ],
          "weak": [
            "クリア条件 化けネズミ×2を退治する",
            "氷 ×2.0"
          ],
          "actions": [
            {
              "name": "かみつき",
              "type": "物理(近接)"
            },
            {
              "name": "ネズミ返し",
              "type": "跳びつき 物理(近接)"
            },
            {
              "name": "かみつき 物理(近接)",
              "type": "-"
            },
            {
              "name": "どろんこ",
              "type": "物理(遠隔)"
            },
            {
              "name": "チューチュー",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch03-09"
      },
      {
        "id": "quest-grungy-bandit",
        "name": "盗みの代償",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "3546〜6884"
          },
          {
            "mode": "NORMAL",
            "reward": "6447〜12516"
          },
          {
            "mode": "HARD",
            "reward": "16506"
          },
          {
            "mode": "EASY",
            "reward": "210〜762"
          },
          {
            "mode": "NORMAL",
            "reward": "3168"
          },
          {
            "mode": "HARD",
            "reward": "3168"
          },
          {
            "mode": "EASY",
            "reward": "608〜793"
          },
          {
            "mode": "NORMAL",
            "reward": "1106〜1442"
          },
          {
            "mode": "HARD",
            "reward": "2830"
          },
          {
            "mode": "EASY",
            "reward": "61〜114"
          },
          {
            "mode": "NORMAL",
            "reward": "928"
          },
          {
            "mode": "HARD",
            "reward": "928"
          },
          {
            "mode": "EASY",
            "reward": "1013〜1321"
          },
          {
            "mode": "NORMAL",
            "reward": "1842〜2402"
          },
          {
            "mode": "HARD",
            "reward": "4716"
          },
          {
            "mode": "EASY",
            "reward": "82〜152"
          },
          {
            "mode": "NORMAL",
            "reward": "1238"
          },
          {
            "mode": "HARD",
            "reward": "1238"
          },
          {
            "mode": "EASY",
            "reward": "608〜793"
          },
          {
            "mode": "NORMAL",
            "reward": "1106〜1442"
          },
          {
            "mode": "HARD",
            "reward": "2830"
          },
          {
            "mode": "EASY",
            "reward": "51〜95"
          },
          {
            "mode": "NORMAL",
            "reward": "774"
          },
          {
            "mode": "HARD",
            "reward": "774"
          }
        ],
        "steps": [
          "順路では、ミレイユから事情を聞く。",
          "順路では、ペグ+ブッチョ+バド+ジャイアントバグラーを倒す。",
          "順路では、ミレイユに報告し、ホンモノの予告状を入手。"
        ],
        "after": [],
        "map": "maps/jun-quest-14a.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/grungy-bandit.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "3546〜6884"
            },
            {
              "mode": "NORMAL",
              "hp": "6447〜12516"
            },
            {
              "mode": "HARD",
              "hp": "16506"
            },
            {
              "mode": "EASY",
              "hp": "608〜793"
            },
            {
              "mode": "NORMAL",
              "hp": "1106〜1442"
            },
            {
              "mode": "HARD",
              "hp": "2830"
            }
          ],
          "weak": [
            "炎 ×2.0",
            "炎 ×2.0",
            "炎 ×2.0",
            "炎 ×2.0"
          ],
          "actions": [
            {
              "name": "突っ張り",
              "type": "物理(近接)"
            },
            {
              "name": "タックル",
              "type": "物理(近接)"
            },
            {
              "name": "ジャンピングニーアアタック",
              "type": "物理(近接)"
            },
            {
              "name": "リフトアップスラム",
              "type": "物理(近接)"
            },
            {
              "name": "ネックハンギングツリー",
              "type": "しめつけ 物理(近接)"
            },
            {
              "name": "たたきつけ 物理(近接)",
              "type": "-"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch09-11"
      },
      {
        "id": "quest-hedgehog-pie-king",
        "name": "見回りの子供たち",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "7092〜9540"
          },
          {
            "mode": "NORMAL",
            "reward": "12894〜17346"
          },
          {
            "mode": "HARD",
            "reward": "33012"
          },
          {
            "mode": "EASY",
            "reward": "32〜65"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "順路では、フォリア先生から事情を聞く。",
          "順路では、〜 6 の場所にいる子供たちを連れ戻す。※順不同。",
          "フォリア先生と話す。",
          "順路では、ヘッジホッグキング1体+ヘッジホッグパイ2体を倒す。",
          "順路では、子供たちに報告。"
        ],
        "after": [],
        "map": "maps/jun-quest-08.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/hedgehog-pie-king.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "7092〜9540"
            },
            {
              "mode": "NORMAL",
              "hp": "12894〜17346"
            },
            {
              "mode": "HARD",
              "hp": "33012"
            }
          ],
          "weak": [
            "氷 ×2.0"
          ],
          "actions": [
            {
              "name": "体当たり",
              "type": "物理(近接)"
            },
            {
              "name": "スロウ",
              "type": "魔法"
            },
            {
              "name": "スィートドリーム",
              "type": "魔法"
            },
            {
              "name": "みんなを守る",
              "type": "-"
            },
            {
              "name": "自分を守る",
              "type": "-"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch08-10"
      },
      {
        "id": "quest-helhound",
        "name": "おてんば盗賊",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "19156〜28519"
          },
          {
            "mode": "NORMAL",
            "reward": "34829〜51852"
          },
          {
            "mode": "HARD",
            "reward": "68382"
          },
          {
            "mode": "EASY",
            "reward": "198〜381"
          },
          {
            "mode": "NORMAL",
            "reward": "1584"
          },
          {
            "mode": "HARD",
            "reward": "1584"
          },
          {
            "mode": "EASY",
            "reward": "1013〜1321"
          },
          {
            "mode": "NORMAL",
            "reward": "1842〜2402"
          },
          {
            "mode": "HARD",
            "reward": "4716"
          },
          {
            "mode": "EASY",
            "reward": "51〜95"
          },
          {
            "mode": "NORMAL",
            "reward": "774"
          },
          {
            "mode": "HARD",
            "reward": "774"
          }
        ],
        "steps": [
          "順路では、ジョニーから事情を聞く。",
          "順路では、キリエから事情を聞く。",
          "順路では、スペシャルマッチに参加して、猛獣使い+ヘルハウンドを倒す。",
          "キリエに報告。"
        ],
        "after": [],
        "map": "maps/jun-quest-09.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/helhound.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "19156〜28519"
            },
            {
              "mode": "NORMAL",
              "hp": "34829〜51852"
            },
            {
              "mode": "HARD",
              "hp": "68382"
            },
            {
              "mode": "EASY",
              "hp": "1013〜1321"
            },
            {
              "mode": "NORMAL",
              "hp": "1842〜2402"
            },
            {
              "mode": "HARD",
              "hp": "4716"
            }
          ],
          "weak": [
            "氷 ×2.0",
            "炎 ×2.0"
          ],
          "actions": [
            {
              "name": "ツメ",
              "type": "物理(近接)"
            },
            {
              "name": "ダイブファング",
              "type": "物理(近接)"
            },
            {
              "name": "ヘルロアー",
              "type": "魔法"
            },
            {
              "name": "フェイタルバイト",
              "type": "かみつき 物理(近接)"
            },
            {
              "name": "赤い炎 魔法",
              "type": "炎"
            },
            {
              "name": "紫の炎 魔法",
              "type": "-"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-11"
      },
      {
        "id": "quest-hiden",
        "name": "秘伝の薬",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [],
        "after": [],
        "map": "maps/jun-quest-21.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/hiden.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-10"
      },
      {
        "id": "quest-inspiration",
        "name": "あくなき夜",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [],
        "after": [],
        "map": "maps/jun-quest-14b.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/inspiration.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch09-09"
      },
      {
        "id": "quest-jury-rigged-cutter",
        "name": "逆襲の刃",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "7598〜10222"
          },
          {
            "mode": "NORMAL",
            "reward": "13815〜18585"
          },
          {
            "mode": "HARD",
            "reward": "35370"
          },
          {
            "mode": "EASY",
            "reward": "231〜475"
          },
          {
            "mode": "NORMAL",
            "reward": "3484"
          },
          {
            "mode": "HARD",
            "reward": "3484"
          }
        ],
        "steps": [
          "順路では、ゲートキーパーから依頼を引き受ける。",
          "順路では、スペシャルマッチに挑戦してカッターマシン=カスタムを倒す。",
          "順路では、マムから報酬を受け取る。"
        ],
        "after": [],
        "map": "maps/jun-quest-15b.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/jury-rigged-cutter.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "7598〜10222"
            },
            {
              "mode": "NORMAL",
              "hp": "13815〜18585"
            },
            {
              "mode": "HARD",
              "hp": "35370"
            }
          ],
          "weak": [
            "雷 ×2.0"
          ],
          "actions": [
            {
              "name": "チェーンソー",
              "type": "物理(近接)"
            },
            {
              "name": "回転のこぎり",
              "type": "物理(近接)"
            },
            {
              "name": "突撃",
              "type": "カッター 物理(近接)"
            },
            {
              "name": "突 進 物理(近接)",
              "type": "-"
            },
            {
              "name": "連続のこぎり",
              "type": "物理(近接)"
            },
            {
              "name": "みじんぎり",
              "type": "斬りつけ 物理(近接)"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch09-12"
      },
      {
        "id": "quest-kensui",
        "name": "揺れる想い",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [
          "アニヤンと話す。",
          "順路では、もう一度アニヤンに話しかけて、けんすい勝負初級に勝利。"
        ],
        "after": [],
        "map": "maps/jun-quest-19.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/kensui.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-07"
      },
      {
        "id": "quest-lesser-drake",
        "name": "廃工場の羽根トカゲ",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "811〜2281"
          },
          {
            "mode": "NORMAL",
            "reward": "1474〜4148"
          },
          {
            "mode": "HARD",
            "reward": "8253"
          },
          {
            "mode": "EASY",
            "reward": "52〜143"
          },
          {
            "mode": "NORMAL",
            "reward": "1224"
          },
          {
            "mode": "HARD",
            "reward": "1224"
          }
        ],
        "steps": [
          "順路では、ジャンク屋から依頼を引き受ける。",
          "自警団員ナルジンと話す。",
          "羽根トカゲ1体を倒す。",
          "羽根トカゲ2体を倒す。",
          "順路では、・ 4 は順不同 レポートNo.049 羽根トカゲ モード 最大HP EASY 811〜2281 50〜113 67〜151 29〜61 60〜134 NORMAL 1474〜4148 HARD 8253 238 328 120 268 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 52〜143 3 60〜134 NORMAL HARD 1224 9 1026 入手できるアイテム 通常 ポーション(12%) レア 重力球(5%) 盗む フェニクスの尾(5%) ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 0体.25 遠隔 0体.25 魔法 1体.0 1体.0 炎 属性 1体.0 0体.25 氷 属性 1体.0 0体.25 雷 属性 1体.0 0体.25 風 属性 2体.0 2体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        "after": [],
        "map": "maps/jun-ch03-q03.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/lesser-drake.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "811〜2281"
            },
            {
              "mode": "NORMAL",
              "hp": "1474〜4148"
            },
            {
              "mode": "HARD",
              "hp": "8253"
            }
          ],
          "weak": [
            "風 ×2.0"
          ],
          "actions": [
            {
              "name": "ウィングカッター",
              "type": "物理(近接)"
            },
            {
              "name": "グライド",
              "type": "物理(遠隔)"
            },
            {
              "name": "トルネード",
              "type": "弾 魔法"
            },
            {
              "name": "竜巻 魔法",
              "type": "風"
            },
            {
              "name": "ウィンドバリア",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch03-10"
      },
      {
        "id": "quest-lost-friends",
        "name": "消えたトモダチ",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [
          "順路では、ベティから事情を聞く。",
          "順路では、白猫を調べる。",
          "順路では、白猫を調べる。",
          "順路では、白猫を調べる。",
          "ベティと話す。"
        ],
        "after": [],
        "map": "maps/jun-ch03-q04.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/lost-friends.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch03-11"
      },
      {
        "id": "quest-mark-li-monodrive",
        "name": "暴走兵器",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "2026〜3590"
          },
          {
            "mode": "NORMAL",
            "reward": "3684〜6528"
          },
          {
            "mode": "HARD",
            "reward": "9432"
          },
          {
            "mode": "EASY",
            "reward": "32〜90"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "順路では、「おびえた男」から事情を聞く。",
          "順路では、ピアシングアイ3体を倒す。",
          "順路では、ピアシングアイ2体を倒す。",
          "順路では、武器屋の前に移動した「おびえた男」に報告を。",
          "順路では、〜 3 は順不同 画像をクリックすると拡大します。 レポートNo.019 ピアシングアイ モード 最大HP EASY 2026〜3590 140〜223 140〜223 17〜31 17〜31 NORMAL 3684〜6528 HARD 9432 373 373 45 45 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 32〜90 4 101〜300 NORMAL HARD 476 12 787 入手できるアイテム 通常 ハイポーション(12%) レア エーテルターボ(5%) 盗む エーテルターボ(5%) ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 1体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 2体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 無効 バーサク 35 ・・・物理攻撃力。"
        ],
        "after": [],
        "map": "maps/jun-quest-09.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/mark-li-monodrive.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "2026〜3590"
            },
            {
              "mode": "NORMAL",
              "hp": "3684〜6528"
            },
            {
              "mode": "HARD",
              "hp": "9432"
            }
          ],
          "weak": [
            "風 ×2.0"
          ],
          "actions": [
            {
              "name": "ドリルドライブ",
              "type": "物理(近接)"
            },
            {
              "name": "グラウンドドリル",
              "type": "物理(近接)"
            },
            {
              "name": "ファイア",
              "type": "魔法"
            },
            {
              "name": "トリプルファイア",
              "type": "魔法"
            },
            {
              "name": "物理耐性付与",
              "type": "-"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch08-11"
      },
      {
        "id": "quest-moguya",
        "name": "極秘開店モーグリショップ",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [
          "モグヤと話す。",
          "順路では、モーグリメダルとモーグリ・モグ会員証を交換。"
        ],
        "after": [],
        "map": "maps/jun-ch03-q01.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/moguya.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch08-09"
      },
      {
        "id": "quest-musicpower",
        "name": "音楽の力",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [],
        "steps": [
          "順路では、ベティから事情を聞く。",
          "順路では、宿泊客に話しかけて「16 おやすみまた明日」をもらう。",
          "順路では、若者に話しかけて「30 STAND UP」をもらう。",
          "順路では、おみやげ屋で50ギル払い「12 更に闘う者たち」を買う。",
          "順路では、ジュークボックスで 2 〜 4 を全て再生。"
        ],
        "after": [],
        "map": "maps/jun-quest-20.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/musicpower.html",
        "enemies": {
          "hp": [],
          "weak": [],
          "actions": []
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-09"
      },
      {
        "id": "quest-phantom",
        "name": "消えた子供たち",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "7821〜11801"
          },
          {
            "mode": "NORMAL",
            "reward": "14220〜21456"
          },
          {
            "mode": "HARD",
            "reward": "28296"
          },
          {
            "mode": "EASY",
            "reward": "56〜114"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "順路では、フォリオ先生から依頼を引き受ける。",
          "順路では、ファントム2体を倒すく。"
        ],
        "after": [],
        "map": "maps/jun-quest-16.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/phantom.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "7821〜11801"
            },
            {
              "mode": "NORMAL",
              "hp": "14220〜21456"
            },
            {
              "mode": "HARD",
              "hp": "28296"
            }
          ],
          "weak": [
            "炎 ×2.0"
          ],
          "actions": [
            {
              "name": "ひっかく",
              "type": "物理(近接)"
            },
            {
              "name": "バニッシュクロー",
              "type": "物理(近接)"
            },
            {
              "name": "アイスクロー",
              "type": "魔法"
            },
            {
              "name": "ブリザド",
              "type": "弾 魔法"
            },
            {
              "name": "氷塊 魔法",
              "type": "氷"
            },
            {
              "name": "ブリザラ",
              "type": "弾 魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-04"
      },
      {
        "id": "quest-quest17",
        "name": "チョコボを探せ",
        "client": "",
        "place": "伍番街スラム「ボルトナットヒルズ」",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "23",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "9776〜14751"
          },
          {
            "mode": "NORMAL",
            "reward": "17775〜26820"
          },
          {
            "mode": "HARD",
            "reward": "35370"
          },
          {
            "mode": "EASY",
            "reward": "56〜114"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          },
          {
            "mode": "EASY",
            "reward": "3303〜4917"
          },
          {
            "mode": "NORMAL",
            "reward": "6005〜8940"
          },
          {
            "mode": "HARD",
            "reward": "11790"
          },
          {
            "mode": "EASY",
            "reward": "59〜114"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "順路では、チョコボスタッフから依頼を引き受ける。 ギザールの野菜3体入手。",
          "順路では、ストライプフォリッジを倒し、チョコボにギザールの野菜を与える。",
          "順路では、チョコボにギザールの野菜を与える。",
          "順路では、ミュータントテイルを倒し、チョコボにギザールの野菜を与える。",
          "サムに報告。",
          "順路では、〜 4 は順不同 レポートNo.051 ストライプフォリッジ 出現場所 伍番街スラム「ボルトナットヒルズ」 レベル 23 ハードモードでの報酬 射撃マニュアル 第11巻 モード 最大HP EASY 9776〜14751 113〜167 113〜167 1 44〜65 NORMAL 17775〜26820 HARD 35370 238 238 1 86 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 56〜114 7 616〜1260 NORMAL HARD 476 21 2624 入手できるアイテム 通常 - レア - 盗む - ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 2体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 2体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        "after": [],
        "map": "maps/jun-quest-12.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/quest17.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "9776〜14751"
            },
            {
              "mode": "NORMAL",
              "hp": "17775〜26820"
            },
            {
              "mode": "HARD",
              "hp": "35370"
            },
            {
              "mode": "EASY",
              "hp": "3303〜4917"
            },
            {
              "mode": "NORMAL",
              "hp": "6005〜8940"
            },
            {
              "mode": "HARD",
              "hp": "11790"
            }
          ],
          "weak": [
            "氷 ×2.0",
            "風 ×2.0"
          ],
          "actions": [
            {
              "name": "ウィングカッター",
              "type": "物理(近接)"
            },
            {
              "name": "グライド",
              "type": "物理(近接)"
            },
            {
              "name": "スリングショット",
              "type": "物理(近接)"
            },
            {
              "name": "ファイアブレス",
              "type": "魔法"
            },
            {
              "name": "ワームホール",
              "type": "魔法"
            },
            {
              "name": "ダークボール",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-05"
      },
      {
        "id": "quest-sahagin-prince",
        "name": "コルネオの隠し財産",
        "client": "",
        "place": "地下下水道 旧大水路 菅路区画「旧汚染処理区画」",
        "when": "",
        "condition": "MAINSTORYでどろぼうアプスを倒し、水路間通路にあるレバーを調べて宝物庫の水を抜いた後",
        "clear": "",
        "level": "27",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "10287〜13768"
          },
          {
            "mode": "NORMAL",
            "reward": "18704〜25032"
          },
          {
            "mode": "HARD",
            "reward": "33012"
          },
          {
            "mode": "EASY",
            "reward": "72〜114"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          },
          {
            "mode": "EASY",
            "reward": "2038〜2792"
          },
          {
            "mode": "NORMAL",
            "reward": "3705〜5077"
          },
          {
            "mode": "HARD",
            "reward": "8961"
          },
          {
            "mode": "EASY",
            "reward": "125〜257"
          },
          {
            "mode": "NORMAL",
            "reward": "1678"
          },
          {
            "mode": "HARD",
            "reward": "1678"
          }
        ],
        "steps": [
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
        "after": [],
        "map": "maps/jun-quest-23.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/sahagin-prince.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "10287〜13768"
            },
            {
              "mode": "NORMAL",
              "hp": "18704〜25032"
            },
            {
              "mode": "HARD",
              "hp": "33012"
            },
            {
              "mode": "EASY",
              "hp": "2038〜2792"
            },
            {
              "mode": "NORMAL",
              "hp": "3705〜5077"
            },
            {
              "mode": "HARD",
              "hp": "8961"
            }
          ],
          "weak": [
            "炎 ×2.0",
            "炎 ×2.0"
          ],
          "actions": [
            {
              "name": "ヤリ",
              "type": "物理(近接)"
            },
            {
              "name": "乱れ突き",
              "type": "物理(遠隔)"
            },
            {
              "name": "ジャンプ",
              "type": "物理(近接)"
            },
            {
              "name": "カウンターアタック",
              "type": "ヤリ 物理(近接)"
            },
            {
              "name": "衝撃波 物理(近接)",
              "type": "-"
            },
            {
              "name": "水鉄砲",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-14"
      },
      {
        "id": "quest-tonberry",
        "name": "手下のうらみ",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "10428"
          },
          {
            "mode": "NORMAL",
            "reward": "18960"
          },
          {
            "mode": "HARD",
            "reward": "37728"
          },
          {
            "mode": "EASY",
            "reward": "186"
          },
          {
            "mode": "NORMAL",
            "reward": "1584"
          },
          {
            "mode": "HARD",
            "reward": "1584"
          }
        ],
        "steps": [
          "順路では、マムから事情を聞く。",
          "順路では、トンベリを倒す。"
        ],
        "after": [],
        "map": "maps/jun-quest-18.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/tonberry.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "10428"
            },
            {
              "mode": "NORMAL",
              "hp": "18960"
            },
            {
              "mode": "HARD",
              "hp": "37728"
            }
          ],
          "weak": [],
          "actions": [
            {
              "name": "包丁",
              "type": "物理(近接)"
            },
            {
              "name": "やつあたり",
              "type": "物理(近接)"
            },
            {
              "name": "うらみ節",
              "type": "魔法"
            },
            {
              "name": "うらめしや",
              "type": "魔法"
            },
            {
              "name": "うらみ骨髄",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-06"
      },
      {
        "id": "quest-type-o-behemoth",
        "name": "地底の咆哮",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "22044"
          },
          {
            "mode": "NORMAL",
            "reward": "40080"
          },
          {
            "mode": "HARD",
            "reward": "70740"
          },
          {
            "mode": "EASY",
            "reward": "240"
          },
          {
            "mode": "NORMAL",
            "reward": "1584"
          },
          {
            "mode": "HARD",
            "reward": "1584"
          }
        ],
        "steps": [
          "順路では、ワイマーから事情を聞く。",
          "順路では、ベヒーモス零式を倒す。",
          "順路では、ワイマーに報告。"
        ],
        "after": [],
        "map": "maps/jun-quest-24.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/type-o-behemoth.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "22044"
            },
            {
              "mode": "NORMAL",
              "hp": "40080"
            },
            {
              "mode": "HARD",
              "hp": "70740"
            }
          ],
          "weak": [],
          "actions": [
            {
              "name": "ひっかき",
              "type": "物理(近接)"
            },
            {
              "name": "たたきつけ",
              "type": "物理(近接)"
            },
            {
              "name": "たたきつけ (暴走モード)",
              "type": "脚 物理(近接)"
            },
            {
              "name": "衝撃波 魔法",
              "type": "-"
            },
            {
              "name": "しゃくりあげ",
              "type": "物理(近接)"
            },
            {
              "name": "しゃくりあげ (暴走モード)",
              "type": "物理(近接)"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch14-15"
      },
      {
        "id": "quest-venomantis",
        "name": "墓参りの報酬",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "5066〜6815"
          },
          {
            "mode": "NORMAL",
            "reward": "9210〜12390"
          },
          {
            "mode": "HARD",
            "reward": "23580"
          },
          {
            "mode": "EASY",
            "reward": "32〜65"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "元気のない老人と話す。",
          "ムギと話す※話しかけなくてもクエストは進行。",
          "順路では、モグの店で墓地のカギを入手する。※依頼を引き受ける前から入手可能。",
          "順路では、墓地のカギを使用して中に入る。",
          "ネフィアウィーバー3体を倒す。",
          "順路では、元気のない老人に報告。",
          "順路では、〜 3 は順不同 レポートNo.054 ネフィアウィーバー モード 最大HP EASY 5066〜6815 108〜136 108〜136 74〜103 74〜103 NORMAL 9210〜12390 HARD 23580 283 283 194 194 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 32〜65 4 252〜531 NORMAL HARD 476 12 1968 入手できるアイテム 通常 - レア - 盗む - ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 2体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 1体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        "after": [],
        "map": "maps/jun-quest-12.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/venomantis.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "5066〜6815"
            },
            {
              "mode": "NORMAL",
              "hp": "9210〜12390"
            },
            {
              "mode": "HARD",
              "hp": "23580"
            }
          ],
          "weak": [
            "氷 ×2.0"
          ],
          "actions": [
            {
              "name": "カマ",
              "type": "物理(近接)"
            },
            {
              "name": "クロスカッター",
              "type": "物理(近接)"
            },
            {
              "name": "フライングスラッシュ",
              "type": "物理(近接)"
            },
            {
              "name": "睡眠針",
              "type": "物理(近接)"
            },
            {
              "name": "睡眠弾",
              "type": "魔法"
            },
            {
              "name": "糸",
              "type": "魔法"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch08-15"
      },
      {
        "id": "quest-wrath-hound",
        "name": "さまよう軍犬",
        "client": "",
        "place": "",
        "when": "",
        "condition": "",
        "clear": "",
        "level": "",
        "rewards": [
          {
            "mode": "EASY",
            "reward": "3473〜10222"
          },
          {
            "mode": "NORMAL",
            "reward": "6315〜18585"
          },
          {
            "mode": "HARD",
            "reward": "35370"
          },
          {
            "mode": "EASY",
            "reward": "20〜65"
          },
          {
            "mode": "NORMAL",
            "reward": "476"
          },
          {
            "mode": "HARD",
            "reward": "476"
          }
        ],
        "steps": [
          "順路では、ワイマーから依頼を引き受ける。",
          "順路では、レイジハウンドを攻撃。",
          "順路では、ワイマーから事情を聞く。",
          "順路では、逃走したレイジハウンドを倒す。",
          "順路では、ワイマーから事情を聞く。",
          "順路では、・ 4 は順不同 レポートNo.016 レイジハウンド モード 最大HP EASY 3473〜10222 101〜229 33〜79 60〜141 35〜80 NORMAL 6315〜18585 HARD 35370 508 148 268 148 獲得する経験値・AP・ギル モード 経験値 AP ギル EASY 20〜65 8 266〜1239 NORMAL HARD 476 24 4592 入手できるアイテム 通常 - レア - 盗む - ダメージ 倍率 バーストゲージ 増加倍率 物理 1体.0 近接 1体.0 遠隔 1体.0 魔法 1体.0 1体.0 炎 属性 1体.0 1体.0 氷 属性 2体.0 1体.0 雷 属性 1体.0 1体.0 風 属性 1体.0 1体.0 固定ダメージ 1体.0 - 割合ダメージ 1体.0 - 状態異常耐性値 毒 35 沈黙 35 睡眠 35 スロウ 35 ストップ 35 バーサク 35 ・・・物理攻撃力。"
        ],
        "after": [],
        "map": "maps/jun-ch03-q03.png",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/quest/wrath-hound.html",
        "enemies": {
          "hp": [
            {
              "mode": "EASY",
              "hp": "3473〜10222"
            },
            {
              "mode": "NORMAL",
              "hp": "6315〜18585"
            },
            {
              "mode": "HARD",
              "hp": "35370"
            }
          ],
          "weak": [
            "氷 ×2.0"
          ],
          "actions": [
            {
              "name": "かみつき",
              "type": "物理(近接)"
            },
            {
              "name": "スナップウィップ",
              "type": "物理(遠隔)"
            },
            {
              "name": "突進",
              "type": "物理(近接)"
            },
            {
              "name": "スピアウィップ",
              "type": "物理(近接)"
            },
            {
              "name": "ネックバイト",
              "type": "跳びつき 物理(近接)"
            },
            {
              "name": "かみつき 物理(近接)",
              "type": "-"
            }
          ]
        },
        "detail": "依頼の受注場所と報酬は下の表。手順は短くまとめている。",
        "card": "ch03-12"
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
        "detail": "1章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch02",
        "name": "八番街の逃走",
        "area": "STORY",
        "detail": "2章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch03",
        "name": "なんでも屋の仕事",
        "area": "STORY",
        "detail": "3章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch04",
        "name": "アバランチとの絆",
        "area": "STORY",
        "detail": "4章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch05",
        "name": "プランE展開",
        "area": "STORY",
        "detail": "5章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch06",
        "name": "スラムの太陽",
        "area": "STORY",
        "detail": "6章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch07",
        "name": "罠に落ちたネズミ",
        "area": "STORY",
        "detail": "7章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch08",
        "name": "再会",
        "area": "STORY",
        "detail": "8章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch09",
        "name": "欲望の街",
        "area": "STORY",
        "detail": "9章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch10",
        "name": "焦燥の迷宮",
        "area": "STORY",
        "detail": "10章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch11",
        "name": "亡霊の墓場",
        "area": "STORY",
        "detail": "11章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch12",
        "name": "死闘",
        "area": "STORY",
        "detail": "12章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch13",
        "name": "醒めない悪夢",
        "area": "STORY",
        "detail": "13章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch14",
        "name": "希望への救済",
        "area": "STORY",
        "detail": "14章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch15",
        "name": "腐ったピザ",
        "area": "STORY",
        "detail": "15章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch16",
        "name": "ノーアポイントメント",
        "area": "STORY",
        "detail": "16章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch17",
        "name": "混沌からの脱出",
        "area": "STORY",
        "detail": "17章をクリアした",
        "source": ""
      },
      {
        "id": "trophy-ch18",
        "name": "運命の断裂",
        "area": "STORY",
        "detail": "18章をクリアした",
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
        "detail": "ミュージックディスクを3個集めた",
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
        "detail": "「チョコボ&モーグリ」マテリアを入手した",
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
        "detail": "嫁オーディションの衣装を3種類着こなした",
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
        "detail": "バースト時のダメージ倍率300%を突破した",
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
    "lead": "召喚マテリア。上昇率は一覧の数値。説明は呼び出しだと短く書いた。",
    "items": [
      {
        "id": "mat-sm-001",
        "name": "イフリート",
        "detail": "イフリートを呼び出す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚",
        "obtain": "3章でジェシーから受け取る",
        "growth": [
          "ー",
          "2%",
          "2",
          "ー",
          "2",
          "ー",
          "ー"
        ]
      },
      {
        "id": "mat-sm-002",
        "name": "チョコボ&モーグリ",
        "detail": "チョコボ&モーグリを呼び出す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚",
        "obtain": "6章で、四番街内部プレート上層「プレート換気」」で拾う",
        "growth": [
          "ー",
          "2%",
          "ー",
          "2",
          "ー",
          "ー",
          "2"
        ]
      },
      {
        "id": "mat-sm-003",
        "name": "シヴァ",
        "detail": "シヴァを呼び出す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚",
        "obtain": "バトルレポート01〜04いずれかを達成後にVR、MISSONで依頼が発生し、クリアすると入手できる。",
        "growth": [
          "ー",
          "4%",
          "ー",
          "2",
          "ー",
          "ー",
          "ー"
        ]
      },
      {
        "id": "mat-sm-004",
        "name": "デブチョコボ",
        "detail": "デブチョコボを呼び出す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚",
        "obtain": "バトルレポート06〜09達成後にVR、MISSONで依頼が発生し、クリアすると入手できる。",
        "growth": [
          "5%",
          "2%",
          "2",
          "ー",
          "ー",
          "ー",
          "ー"
        ]
      },
      {
        "id": "mat-sm-005",
        "name": "リヴァイアサン",
        "detail": "リヴァイアサンを呼び出す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚",
        "obtain": "バトルレポート11〜14達成後にVR、MISSONで依頼が発生し、クリアすると入手できる。",
        "growth": [
          "ー",
          "5%",
          "ー",
          "2",
          "ー",
          "2",
          "ー"
        ]
      },
      {
        "id": "mat-sm-006",
        "name": "バハムート",
        "detail": "バハムートを呼び出す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html",
        "area": "召喚",
        "obtain": "バトルレポート01〜19達成後にVR、MISSONで依頼が発生し、クリアすると入手できる。",
        "growth": [
          "ー",
          "5%",
          "2",
          "2",
          "ー",
          "ー",
          "ー"
        ]
      }
    ]
  },
  "materia": {
    "title": "マテリア",
    "lead": "魔法、支援、コマンド、独立。召喚はアイテムの召喚獣。INTERmissionだけにあるものは、本編の表には出していない。",
    "facet": "area",
    "items": [
      {
        "id": "mat-ma-001",
        "name": "かいふく",
        "detail": "ケアル、ケアルラ、リジェネ、ケアルガが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "ケアル",
            "effect": "味方1人のHPを、魔法攻撃力×7だけ戻す。",
            "sell": "300"
          },
          {
            "spell": "ケアルラ",
            "effect": "味方1人のHPを、魔法攻撃力×13だけ戻す。",
            "sell": "600"
          },
          {
            "spell": "リジェネ",
            "effect": "味方1人のHPを最大の10%戻し、その後も少しずつ回復する。",
            "sell": "1200"
          },
          {
            "spell": "ケアルガ",
            "effect": "味方1人のHPを、魔法攻撃力×24だけ戻す。",
            "sell": "2400"
          }
        ],
        "obtain": "店 各地、宝箱 各地、その他 多数",
        "buy": "600"
      },
      {
        "id": "mat-ma-002",
        "name": "ちりょう",
        "detail": "ポイゾナ、エスナ、レジストが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "ポイゾナ",
            "effect": "味方1人の毒を解く。",
            "sell": "750"
          },
          {
            "spell": "エスナ",
            "effect": "味方1人の不利な状態をすべて解く。",
            "sell": "1500"
          },
          {
            "spell": "レジスト",
            "effect": "味方1人をレジストにし、不利な状態を受けなくする。",
            "sell": "3000"
          }
        ],
        "obtain": "店 各地",
        "buy": "1500"
      },
      {
        "id": "mat-ma-003",
        "name": "そせい",
        "detail": "レイズ、アレイズが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "レイズ",
            "effect": "味方1人の戦闘不能を解き、HPを最大の40%戻す。",
            "sell": "1500"
          },
          {
            "spell": "アレイズ",
            "effect": "味方1人の戦闘不能を解き、HPをすべて戻す。",
            "sell": "3000"
          }
        ],
        "obtain": "店 各地(CHAPTER8以降)、宝箱 七番街 社宅地区",
        "buy": "3000"
      },
      {
        "id": "mat-ma-004",
        "name": "ほのお",
        "detail": "ファイア、ファイラ、ファイガが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "ファイア",
            "effect": "炎の弾が相手を追い、着弾点で爆発する。半径1.6m。",
            "sell": "250"
          },
          {
            "spell": "ファイラ",
            "effect": "炎の弾が相手を追い、着弾点で爆発する。半径2.5m。",
            "sell": "500"
          },
          {
            "spell": "ファイガ",
            "effect": "炎の弾が相手を追い、着弾点で爆発する。半径4m。",
            "sell": "1000"
          }
        ],
        "obtain": "店 各地、宝箱 七番街スラム タラガ廃工場",
        "buy": "500"
      },
      {
        "id": "mat-ma-005",
        "name": "れいき",
        "detail": "ブリザド、ブリザラ、ブリザガが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "ブリザド",
            "effect": "冷気の弾で相手を地面に叩き、1.5秒後に氷が割れる。半径1.6m。",
            "sell": "250"
          },
          {
            "spell": "ブリザラ",
            "effect": "冷気の弾で相手を地面に叩き、1.5秒後に氷が割れる。半径2.5m。",
            "sell": "500"
          },
          {
            "spell": "ブリザガ",
            "effect": "冷気の弾で相手を地面に叩き、2秒後に氷が割れる。半径4.2m。",
            "sell": "1000"
          }
        ],
        "obtain": "店 各地、宝箱 七番街スラム ガレキ通り、地下実験場 B2F",
        "buy": "500"
      },
      {
        "id": "mat-ma-006",
        "name": "いかずち",
        "detail": "サンダー、サンダラ、サンダガが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "サンダー",
            "effect": "頭上から雷を落とし、放電する。半径0.5m。",
            "sell": "250"
          },
          {
            "spell": "サンダラ",
            "effect": "頭上から雷を落とし、放電する。半径1m。",
            "sell": "500"
          },
          {
            "spell": "サンダガ",
            "effect": "頭上から雷を落とし、放電する。半径2m。",
            "sell": "1000"
          }
        ],
        "obtain": "店 各地、宝箱 螺旋トンネル E区画、伍番魔晄炉B7F",
        "buy": "500"
      },
      {
        "id": "mat-ma-007",
        "name": "かぜ",
        "detail": "エアロ、エアロラ、エアロガが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "エアロ",
            "effect": "その場で空気を弾いてひるませ、0.8秒後に突風。半径1m。",
            "sell": "-"
          },
          {
            "spell": "エアロラ",
            "effect": "その場で空気を弾いてひるませ、1秒後に突風。半径2m。",
            "sell": "-"
          },
          {
            "spell": "エアロガ",
            "effect": "その場で空気を弾いてひるませ、1.2秒後に突風。半径3.5m。",
            "sell": "-"
          }
        ],
        "obtain": "その他 バトルレポート02達成後にチャドリーから購入、3個まで。1個目:100ギル、2個目:2000ギル、3個目:5000ギル",
        "buy": "-"
      },
      {
        "id": "mat-ma-008",
        "name": "どく",
        "detail": "バイオ、バイオラ、バイオガが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "バイオ",
            "effect": "毒の泡で包み、4秒後に破裂して毒にする。半径0.9m。",
            "sell": "750"
          },
          {
            "spell": "バイオラ",
            "effect": "毒の泡で包み、4秒後に破裂して毒にする。半径1.5m。",
            "sell": "1500"
          },
          {
            "spell": "バイオガ",
            "effect": "毒の泡で包み、4秒後に破裂して毒にする。半径2.3m。",
            "sell": "3000"
          }
        ],
        "obtain": "店 各地(CHAPTER5以降)、宝箱 地下下水道六番地区、神羅ビル 鑼牟第一層、アノニマス",
        "buy": "1500"
      },
      {
        "id": "mat-ma-009",
        "name": "バリア",
        "detail": "バリア、マバリア、ウォールが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "バリア",
            "effect": "味方1人の受ける物理ダメージを半分にする。",
            "sell": "750"
          },
          {
            "spell": "マバリア",
            "effect": "味方1人の受ける魔法ダメージを半分にする。",
            "sell": "1500"
          },
          {
            "spell": "ウォール",
            "effect": "味方1人の物理ダメージと魔法ダメージを、どちらも半分にする。",
            "sell": "3000"
          }
        ],
        "obtain": "店 各地(CHAPTER5以降)、宝箱 ウォール・マーケット、その他 CHAPTER4でジェシーからもらう",
        "buy": "1500"
      },
      {
        "id": "mat-ma-010",
        "name": "ふうじる",
        "detail": "スリプル、サイレス、バーサクが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "スリプル",
            "effect": "相手を眠りにして、行動できなくする。",
            "sell": "1500"
          },
          {
            "spell": "サイレス",
            "effect": "相手を沈黙にし、魔法を出せなくする。",
            "sell": "3000"
          },
          {
            "spell": "バーサク",
            "effect": "相手をバーサクにし、与えるダメージも受けるダメージも増える。",
            "sell": "6000"
          }
        ],
        "obtain": "店 各地(CHAPTER9以降)、宝箱 陥没道路 下層",
        "buy": "3000"
      },
      {
        "id": "mat-ma-011",
        "name": "しょうめつ",
        "detail": "デバリア、デスペルが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "デバリア",
            "effect": "相手のバリア、マバリア、リフレクをまとめて解く。",
            "sell": "1500"
          },
          {
            "spell": "デスペル",
            "effect": "相手の有利な状態をまとめて解く。",
            "sell": "3000"
          }
        ],
        "obtain": "店 各地(CHAPTER12以降)、クロウガイスト",
        "buy": "3000"
      },
      {
        "id": "mat-ma-012",
        "name": "じかん",
        "detail": "ヘイスト、スロウ、ストップが、レベル順に使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/magic.html",
        "area": "魔法",
        "levels": [
          {
            "spell": "ヘイスト",
            "effect": "味方1人のATBのたまりを速くする。",
            "sell": "2500"
          },
          {
            "spell": "スロウ",
            "effect": "相手のATBのたまりを遅くする。",
            "sell": "5000"
          },
          {
            "spell": "ストップ",
            "effect": "相手をストップにし、行動できなくする。",
            "sell": "10000"
          }
        ],
        "obtain": "店 七番街 プレート断面、神羅ビル63F〜70F、ミッドガル・ハイウェイ、宝箱 神羅ビル 鑼牟第四層、消えた子供たち",
        "buy": "5000"
      },
      {
        "id": "mat-im-001",
        "name": "ぞくせい",
        "area": "支援",
        "detail": "組んだ魔法の属性が装備に付く。武器なら攻撃にその属性が乗り、防具ならその属性を受けにくくなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "obtain": "6章、四番街プレート内部の下層。14章ですべての依頼を終えると、開発地区で手紙と一緒にもう1つ。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "属性ダメージの倍率"
                },
                {
                  "text": "属性耐性"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "8%"
                },
                {
                  "text": "半減"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "15%"
                },
                {
                  "text": "無効"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "23%"
                },
                {
                  "text": "吸収"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-002",
        "name": "はんいか",
        "area": "支援",
        "detail": "組んだ魔法が範囲になる。範囲にすると威力、回復、状態の長さはレベルに応じて落ちる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "obtain": "9章の陥没道路で、ロボットアームを使えるあいだだけ。1個しか出ない。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "ダメージ量"
                },
                {
                  "text": "回復量"
                },
                {
                  "text": "状態変化の持続時間"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "0.4倍",
                  "colspan": 3
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "0.55倍",
                  "colspan": 3
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "0.75倍",
                  "colspan": 3
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-003",
        "name": "たいせい",
        "area": "支援",
        "detail": "組んだ魔法の不利な状態が続く時間を短くする。即死の出やすさも下がる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "obtain": "10章の地下下水道。逃すと14章まで後回し。もう1つは13章の地下実験場で、逃しても14章で取れる。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "持続時間の減少率"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "25%"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "50%"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "無効"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-004",
        "name": "まほうついげき",
        "area": "支援",
        "detail": "操作中でない味方が、組んだ魔法のうち最も低いランクを、狙っている相手へ自動で撃つ。MPかATBが足りないと出ない。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "obtain": "バトルレポート09のあと、チャドリーが100ギルで売る。1個のみ。",
        "showObtain": true
      },
      {
        "id": "mat-im-005",
        "name": "HPきゅうしゅう",
        "area": "支援",
        "detail": "組んだ攻撃が当たると、与えたダメージの一部が自分のHPになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "obtain": "バトルレポート19のあと、チャドリーから。1個目100ギル、2個目5000ギル。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "回復量の倍率"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "20%"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "30%"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "40%"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-006",
        "name": "MPきゅうしゅう",
        "area": "支援",
        "detail": "組んだ攻撃が当たると、与えたダメージの0.1%が自分のMPになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "obtain": "バトルレポート18のあと、チャドリーが100ギルで売る。1個のみ。",
        "showObtain": true
      },
      {
        "id": "mat-im-007",
        "name": "APアップ",
        "area": "支援",
        "detail": "組んだマテリアがもらうAPが2倍になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/support.html",
        "obtain": "14章の「あるきマニア」が、装備して5000歩歩くと変わる。1個のみ。",
        "showObtain": true
      },
      {
        "id": "mat-im-008",
        "name": "チャクラ",
        "area": "コマンド",
        "detail": "減っているHPの割合だけ戻し、毒も解く。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "obtain": "伍番街スラムの教会1階。もう1つは14章、コルネオの館の地下の監禁部屋。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "回復量の倍率"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "20%"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "25%"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "30%"
                }
              ],
              [
                {
                  "text": "4"
                },
                {
                  "text": "35%"
                }
              ],
              [
                {
                  "text": "5"
                },
                {
                  "text": "40%"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-009",
        "name": "みやぶる",
        "area": "コマンド",
        "detail": "敵の特徴、耐性、弱点を見る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "obtain": "バトルレポート01のあと、チャドリーが1000ギルで売る。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "対象"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "敵1体"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "敵全体"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-010",
        "name": "ATBブースト",
        "area": "コマンド",
        "detail": "L1を押しながらR1で、たまっているATBを2倍にする。使ったあとしばらく出せない。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "obtain": "バトルレポート04のあと、チャドリーが100ギルで売る。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "使用できなくなる時間"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "360秒"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "300秒"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "240秒"
                }
              ],
              [
                {
                  "text": "4"
                },
                {
                  "text": "180秒"
                }
              ],
              [
                {
                  "text": "5"
                },
                {
                  "text": "120秒"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-011",
        "name": "いのり",
        "area": "コマンド",
        "detail": "味方全員のHPを、魔法攻撃力×威力だけ戻す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "obtain": "エアリスが最初から持っている。もう1つは依頼「おてんば盗賊」のあと、コルネオの宝物庫。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv."
                },
                {
                  "text": "威力"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "4"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "5"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "6"
                }
              ],
              [
                {
                  "text": "4"
                },
                {
                  "text": "7"
                }
              ],
              [
                {
                  "text": "5"
                },
                {
                  "text": "8"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-012",
        "name": "ぬすむ",
        "area": "コマンド",
        "detail": "敵1体からアイテムを盗む。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "obtain": "バトルレポート07のあと、チャドリーが100ギルで売る。",
        "showObtain": true
      },
      {
        "id": "mat-im-013",
        "name": "てきのわざ",
        "area": "コマンド",
        "detail": "受けた敵の技を、一定の確率で覚えてアビリティとして使える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/command.html",
        "obtain": "バトルレポート16のあと、チャドリーが100ギルで売る。",
        "showObtain": true,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "技名"
                },
                {
                  "text": "効果"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "アイスオーラ",
                  "rowspan": 2
                },
                {
                  "text": "60秒間、自分の周囲3mにいる敵へ、1秒ごとに氷の魔法ダメージ。"
                }
              ],
              [
                {
                  "text": "持つ敵: ディーングロウ"
                }
              ],
              [
                {
                  "text": "自爆",
                  "rowspan": 2
                },
                {
                  "text": "周囲5mにダメージを与え、自分は戦闘不能になる。"
                }
              ],
              [
                {
                  "text": "持つ敵: スモッグファクト、ヴァギドポリス、ボム、H0512-OPTβ"
                }
              ],
              [
                {
                  "text": "霊気吸収",
                  "rowspan": 2
                },
                {
                  "text": "10秒間、周囲6mの敵へ2秒ごとにダメージし、その30%を自分のHPとして戻す。"
                }
              ],
              [
                {
                  "text": "持つ敵: ファントム"
                }
              ],
              [
                {
                  "text": "くさい息",
                  "rowspan": 2
                },
                {
                  "text": "自分と相手を結ぶ直線上の敵を、毒・沈黙・睡眠にする。"
                }
              ],
              [
                {
                  "text": "持つ敵: モルボル"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-015",
        "name": "HPアップ",
        "area": "独立",
        "detail": "最大HPが上がる。複数付けると重なり、上限は+100%。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "最大HP上昇率の倍率"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "10%"
                },
                {
                  "text": "各地(CHAPTER6以降)、八番街 市街地区、列車墓場 B区画、神羅ビル 64F天井裏 空調設備内部",
                  "rowspan": 5
                },
                {
                  "text": "2000",
                  "rowspan": 5
                },
                {
                  "text": "1000"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "20%"
                },
                {
                  "text": "2000"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "30%"
                },
                {
                  "text": "4000"
                }
              ],
              [
                {
                  "text": "4"
                },
                {
                  "text": "40%"
                },
                {
                  "text": "8000"
                }
              ],
              [
                {
                  "text": "5"
                },
                {
                  "text": "50%"
                },
                {
                  "text": "16000"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-016",
        "name": "MPアップ",
        "area": "独立",
        "detail": "最大MPが上がる。複数付けると重なり、上限は+100%。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "最大MP上昇率の倍率"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "10%"
                },
                {
                  "text": "各地(CHAPTER6以降)、四番街 プレート内部下層、伍番街スラム エアリスの家",
                  "rowspan": 5
                },
                {
                  "text": "2000",
                  "rowspan": 5
                },
                {
                  "text": "1000"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "20%"
                },
                {
                  "text": "2000"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "30%"
                },
                {
                  "text": "4000"
                }
              ],
              [
                {
                  "text": "4"
                },
                {
                  "text": "40%"
                },
                {
                  "text": "8000"
                }
              ],
              [
                {
                  "text": "5"
                },
                {
                  "text": "50%"
                },
                {
                  "text": "16000"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-017",
        "name": "マジカル",
        "area": "独立",
        "detail": "魔力が上がる。複数付けると重なる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "魔力上昇率の倍率"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "5%"
                },
                {
                  "text": "伍番魔晄炉 正面ゲート、けんすい勝負(中級クリア)",
                  "rowspan": 5
                },
                {
                  "text": "非売品",
                  "rowspan": 5
                },
                {
                  "text": "ー",
                  "rowspan": 5
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "10%"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "15%"
                }
              ],
              [
                {
                  "text": "4"
                },
                {
                  "text": "20%"
                }
              ],
              [
                {
                  "text": "5"
                },
                {
                  "text": "25%"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-018",
        "name": "ラッキー",
        "area": "独立",
        "detail": "運が上がる。複数付けると重なる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "運上昇率の倍率"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "10%"
                },
                {
                  "text": "ダーツ(ランキング1位)、スクワット勝負(中級クリア)",
                  "rowspan": 5
                },
                {
                  "text": "非売品",
                  "rowspan": 5
                },
                {
                  "text": "ー",
                  "rowspan": 5
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "20%"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "30%"
                }
              ],
              [
                {
                  "text": "4"
                },
                {
                  "text": "40%"
                }
              ],
              [
                {
                  "text": "5"
                },
                {
                  "text": "50%"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-019",
        "name": "ギルアップ",
        "area": "独立",
        "detail": "バトルでもらえるギルが2倍になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "効果"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "バトルでもらえるギルが2倍になる。"
                },
                {
                  "text": "神羅バトルシュミレーター"
                },
                {
                  "text": "非売品"
                },
                {
                  "text": "ー"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-020",
        "name": "けいけんちアップ",
        "area": "独立",
        "detail": "味方全員の経験値が2倍になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "効果"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "味方全員の経験値が2倍になる。"
                },
                {
                  "text": "神羅バトルシュミレーター"
                },
                {
                  "text": "非売品"
                },
                {
                  "text": "ー"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-021",
        "name": "かいひぎり",
        "area": "独立",
        "detail": "回避の直後に、範囲の広い攻撃が出る。キャラクターとレベルで動きが変わる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "効果"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "回避の直後に、範囲の広い攻撃が出る。キャラクターとレベルで動きが変わる。",
                  "rowspan": 2
                },
                {
                  "text": "各地、八番街 市街地",
                  "rowspan": 2
                },
                {
                  "text": "600",
                  "rowspan": 2
                },
                {
                  "text": "300"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "600"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-022",
        "name": "うけながし",
        "area": "独立",
        "detail": "R1を押したまま×で、ガードと回避を兼ねた動きになる。キャラクターとレベルで変わる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "効果"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "R1を押したまま×で、ガードと回避を兼ねた動きになる。キャラクターとレベルで変わる。",
                  "rowspan": 2
                },
                {
                  "text": "バトルレポート12を達成後にチャドリーから購入",
                  "rowspan": 2
                },
                {
                  "text": "1個目:100 2個目:2000 3個目:5000",
                  "rowspan": 2
                },
                {
                  "text": "ー",
                  "rowspan": 2
                }
              ],
              [
                {
                  "text": "2"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-023",
        "name": "せんせいこうげき",
        "area": "独立",
        "detail": "バトル開始時のATBが多くたまっている。疾風のスカーフがあるとさらに増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv",
                  "rowspan": 2
                },
                {
                  "text": "バトル開始時のATBゲージの量",
                  "colspan": 2
                },
                {
                  "text": "入手方法",
                  "rowspan": 2
                },
                {
                  "text": "買値",
                  "rowspan": 2
                },
                {
                  "text": "売値",
                  "rowspan": 2
                }
              ],
              [
                {
                  "text": "通常時"
                },
                {
                  "text": "疾風のスカーフ装備時"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "750〜1000"
                },
                {
                  "text": "1000"
                },
                {
                  "text": "バトルレポート03を達成後にチャドリーから購入",
                  "rowspan": 3
                },
                {
                  "text": "1個目:100 2個目:5000",
                  "rowspan": 3
                },
                {
                  "text": "ー",
                  "rowspan": 3
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "1000〜1250"
                },
                {
                  "text": "1250"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "1250〜2000"
                },
                {
                  "text": "1750〜2000"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-024",
        "name": "オートケアル",
        "area": "独立",
        "detail": "操作中でないとき、自分か仲間のHPが最大の25%以下になるとケアルを自動で使う。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "1回のバトルで使える回数"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "3回"
                },
                {
                  "text": "バトルレポート01達成後にチャドリーから購入",
                  "rowspan": 2
                },
                {
                  "text": "100",
                  "rowspan": 2
                },
                {
                  "text": "ー",
                  "rowspan": 2
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "10回"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-025",
        "name": "アイテムたつじん",
        "area": "独立",
        "detail": "消費アイテムの回復量とダメージが増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "上昇率の倍率"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "30%"
                },
                {
                  "text": "バトルレポート11達成後にチャドリーから購入。",
                  "rowspan": 3
                },
                {
                  "text": "1個目:100 2個目:5000",
                  "rowspan": 3
                },
                {
                  "text": "ー",
                  "rowspan": 3
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "40%"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "50%"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-026",
        "name": "ATBバースト",
        "area": "独立",
        "detail": "敵をバーストさせるたびに、自分のATBが増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "ATBゲージの増加量"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "400"
                },
                {
                  "text": "バトルレポート14達成後にチャドリーから購入。",
                  "rowspan": 3
                },
                {
                  "text": "1個目:100 2個目:2000 3個目:5000",
                  "rowspan": 3
                },
                {
                  "text": "ー",
                  "rowspan": 3
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "650"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "900"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-027",
        "name": "ATBれんけい",
        "area": "独立",
        "detail": "ATBを使うコマンドを2連続で出すたびに、味方全員のATBが増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "ATBゲージの増加量"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "400"
                },
                {
                  "text": "バトルレポート13達成後にチャドリーから購入。",
                  "rowspan": 3
                },
                {
                  "text": "100",
                  "rowspan": 3
                },
                {
                  "text": "ー",
                  "rowspan": 3
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "500"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "600"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-028",
        "name": "ちょうはつ",
        "area": "独立",
        "detail": "操作中でないとき、仲間のHPが最大の25%以下になると敵の注意を自分に寄せる。切れたあとしばらく出せない。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "効果の持続時間"
                },
                {
                  "text": "使用できなくなる時間"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "60秒"
                },
                {
                  "text": "90秒"
                },
                {
                  "text": "バトルレポート08達成後にチャドリーから購入。",
                  "rowspan": 3
                },
                {
                  "text": "100",
                  "rowspan": 3
                },
                {
                  "text": "ー",
                  "rowspan": 3
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "90秒"
                },
                {
                  "text": "60秒"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "120秒"
                },
                {
                  "text": "30秒"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-029",
        "name": "ガード強化",
        "area": "独立",
        "detail": "ガード中のダメージが減り、そのとき増えるATBが増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv",
                  "rowspan": 3
                },
                {
                  "text": "ガード時のリアクション",
                  "colspan": 6
                }
              ],
              [
                {
                  "text": "後退しない"
                },
                {
                  "text": "少し後退"
                },
                {
                  "text": "大きく後退"
                },
                {
                  "text": "後退しない"
                },
                {
                  "text": "少し後退"
                },
                {
                  "text": "大きく後退"
                }
              ],
              [
                {
                  "text": "受けるダメージ量の倍率",
                  "colspan": 3
                },
                {
                  "text": "ATBゲージ増加量",
                  "colspan": 3
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "0.25"
                },
                {
                  "text": "0.35"
                },
                {
                  "text": "0.45"
                },
                {
                  "text": "30"
                },
                {
                  "text": "125"
                },
                {
                  "text": "225"
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "0.2"
                },
                {
                  "text": "0.3"
                },
                {
                  "text": "0.4"
                },
                {
                  "text": "35"
                },
                {
                  "text": "150"
                },
                {
                  "text": "250"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "0.15"
                },
                {
                  "text": "0.25"
                },
                {
                  "text": "0.35"
                },
                {
                  "text": "40"
                },
                {
                  "text": "200"
                },
                {
                  "text": "300"
                }
              ]
            ]
          },
          {
            "head": [
              [
                {
                  "text": "入手方法",
                  "rowspan": 3
                },
                {
                  "text": "買値",
                  "rowspan": 3
                },
                {
                  "text": "売値",
                  "rowspan": 3
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "バトルレポート06達成後にチャドリーから購入。",
                  "rowspan": 3
                },
                {
                  "text": "1個目:100 2個目:2000 3個目:5000",
                  "rowspan": 3
                },
                {
                  "text": "ー",
                  "rowspan": 3
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-030",
        "name": "わざたつじん",
        "area": "独立",
        "detail": "ATBを使うコマンドを3種類出すたびに、自分のATBが増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "ATBゲージの増加量"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "400"
                },
                {
                  "text": "バトルレポート17達成後にチャドリーから購入。",
                  "rowspan": 3
                },
                {
                  "text": "1個目:100 2個目:2000 3個目:5000",
                  "rowspan": 3
                },
                {
                  "text": "ー",
                  "rowspan": 3
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "650"
                }
              ],
              [
                {
                  "text": "3"
                },
                {
                  "text": "900"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-031",
        "name": "ヴィジョン",
        "area": "独立",
        "detail": "ATBを3段階までためられる。使うとリミットゲージを使い切り、直後に500戻る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "リミットLv"
                },
                {
                  "text": "効果持続時間"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1",
                  "rowspan": 2
                },
                {
                  "text": "1"
                },
                {
                  "text": "300秒"
                },
                {
                  "text": "神羅バトルシュミレーター、エアリスの初期装備",
                  "rowspan": 2
                },
                {
                  "text": "非売品",
                  "rowspan": 2
                },
                {
                  "text": "ー",
                  "rowspan": 2
                }
              ],
              [
                {
                  "text": "2"
                },
                {
                  "text": "600秒"
                }
              ]
            ]
          }
        ]
      },
      {
        "id": "mat-im-032",
        "name": "あるきマニア",
        "area": "独立",
        "detail": "装備している間、歩数を数える。5000歩で別のマテリアに変わる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/materia/dokuritsu.html",
        "obtain": "",
        "showObtain": false,
        "tables": [
          {
            "head": [
              [
                {
                  "text": "Lv"
                },
                {
                  "text": "効果"
                },
                {
                  "text": "入手方法"
                },
                {
                  "text": "買値"
                },
                {
                  "text": "売値"
                }
              ]
            ],
            "body": [
              [
                {
                  "text": "1"
                },
                {
                  "text": "装備している間、歩数を数える。5000歩でこのマテリアが変わる。"
                },
                {
                  "text": "伍番街スラム エアリスの家(CHAPTER14限定)"
                },
                {
                  "text": "非売品"
                },
                {
                  "text": "ー"
                }
              ]
            ]
          }
        ]
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
        "detail": "クラウドの武器。武器アビリティはバーストスラッシュ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド",
        "ability": "バーストスラッシュ",
        "obtain": "最初から持っている",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "22",
          "matk": "22",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "91",
          "matk": "91",
          "def": "11",
          "mdef": "11"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+5",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "+100",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ブレイブモードの「強撃」5%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "16"
          },
          {
            "lv": "2",
            "core": "サブコアI",
            "atk": "+8",
            "matk": "+8",
            "defn": "+5",
            "mdef": "+5",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "初期状態",
            "sp": "24"
          },
          {
            "lv": "3",
            "core": "サブコアⅡ",
            "atk": "+8",
            "matk": "+8",
            "defn": "-",
            "mdef": "-",
            "hp": "+150",
            "mp": "+6",
            "luck": "-",
            "speed": "-",
            "other": "MPスピード10%Up",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "48"
          },
          {
            "lv": "4",
            "core": "サブコアⅢ",
            "atk": "+16",
            "matk": "+16",
            "defn": "+6",
            "mdef": "+6",
            "hp": "+150",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl06"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "+16",
            "matk": "+16",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "リミット技強化5%Up",
            "slots": [
              "holl09"
            ],
            "slotText": "",
            "sp": "84"
          },
          {
            "lv": "6",
            "core": "サブコアⅤ",
            "atk": "+16",
            "matk": "+16",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl09",
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "69",
          "matk": "69",
          "defn": "11",
          "mdef": "11",
          "hp": "800",
          "mp": "26",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl05"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/cloud.html"
      },
      {
        "id": "wpn-cl-002",
        "name": "アイアンブレード",
        "detail": "クラウドの武器。武器アビリティはラピッドチェイン。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド",
        "ability": "ラピッドチェイン",
        "obtain": "CHAPTER3進行中、武器屋からもらう",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "23",
          "matk": "31",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "77",
          "matk": "105",
          "def": "13",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "-",
            "defn": "+5",
            "mdef": "-",
            "hp": "+150",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ガード時の物理ダメージ10%Down ブレイブモードのカウンター5%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "16"
          },
          {
            "lv": "2",
            "core": "サブコアI",
            "atk": "+6",
            "matk": "+6",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "HPが高いと魔法攻撃力+5 HPが高いと物理防御力+5",
            "slots": [],
            "slotText": "初期状態",
            "sp": "24"
          },
          {
            "lv": "3",
            "core": "サブコアⅡ",
            "atk": "+8",
            "matk": "6×2",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ピンチでリミットブースト5%Up ピンチで回復50%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "48"
          },
          {
            "lv": "4",
            "core": "サブコアⅢ",
            "atk": "+12",
            "matk": "8×2",
            "defn": "+8",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ダメージアスピル",
            "slots": [
              "holl12"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "+14",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl07",
              "holl08",
              "holl13"
            ],
            "slotText": "",
            "sp": "84"
          },
          {
            "lv": "6",
            "core": "サブコアⅤ",
            "atk": "+14",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "四属性攻撃力5%Up ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "54",
          "matk": "74",
          "defn": "13",
          "mdef": "-",
          "hp": "350",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl03"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/cloud.html"
      },
      {
        "id": "wpn-cl-003",
        "name": "釘バット",
        "detail": "クラウドの武器。武器アビリティはディスオーダー。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド",
        "ability": "ディスオーダー",
        "obtain": "見回りの子供たち",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "30",
          "matk": "30",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "30",
          "matk": "30",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "200×2",
            "mp": "-",
            "luck": "+5",
            "speed": "-",
            "other": "クリティカル率10%Up クリティカルダメージ5%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "40"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "たたかう強化5%Up ピンチでクリティカル率50%Up",
            "slots": [
              "holl01",
              "holl02",
              "holl03"
            ],
            "slotText": "",
            "sp": "50"
          },
          {
            "lv": "4",
            "core": "サブコアⅡ",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "状態異常耐性値+5 ピンチで物理防御力+10 ピンチで魔法防御力+10 部位破壊の攻撃力10%Up アビリティクリティカル率10%Up",
            "slots": [],
            "slotText": "-",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅢ",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "クリティカルダメージ25%Up ピンチでリミットブースト5%Up ピンチでクリティカル率50%Up",
            "slots": [
              "holl12",
              "holl15",
              "holl14"
            ],
            "slotText": "",
            "sp": "98"
          },
          {
            "lv": "6",
            "core": "サブコアⅣ",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "+250",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "リミット技5%Up ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "96"
          }
        ],
        "total": {
          "atk": "-",
          "matk": "-",
          "defn": "-",
          "mdef": "-",
          "hp": "1050",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/cloud.html"
      },
      {
        "id": "wpn-cl-004",
        "name": "ハードブレイカー",
        "detail": "クラウドの武器。武器アビリティはインフィニットエンド。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド",
        "ability": "インフィニットエンド",
        "obtain": "六番街スラム、ウォール・マーケット(CHAPTER14)",
        "buy": "2000",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "57",
          "matk": "19",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "137",
          "matk": "46",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "4×2",
            "matk": "+4",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "強化効果時間10%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "32"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up ジャンプ攻撃強化5%Up ブレイブモードの「強撃」5%Up 部位破壊の攻撃力10%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "40"
          },
          {
            "lv": "4",
            "core": "サブコアⅡ",
            "atk": "8×3",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "バーストドレイン",
            "slots": [],
            "slotText": "初期状態",
            "sp": "60"
          },
          {
            "lv": "5",
            "core": "サブコアⅢ",
            "atk": "8×3",
            "matk": "+8",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "リミット技強化5%Up キルドレイン",
            "slots": [
              "holl07",
              "holl06"
            ],
            "slotText": "",
            "sp": "112"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "12×2",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "アビリティクリティカル率10%Up",
            "slots": [
              "holl09",
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "80",
          "matk": "27",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl04"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/cloud.html"
      },
      {
        "id": "wpn-cl-005",
        "name": "ミスリルセイバー",
        "detail": "クラウドの武器。武器アビリティは破晄撃。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド",
        "ability": "破晄撃",
        "obtain": "六番街スラム、ウォール・マーケット(CHAPTER14)",
        "buy": "3000",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "46",
          "matk": "46",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "46",
          "matk": "138",
          "def": "-",
          "mdef": "10"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+6",
            "matk": "6×2",
            "defn": "-",
            "mdef": "+5",
            "hp": "-",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "初期状態",
            "sp": "50"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「ぞくせい」マテリア効果5%Up 状態異常耐性値+5 ダメージアスピル MP満タンで魔法20%Up HPが高いと物理攻撃+5",
            "slots": [],
            "slotText": "初期状態",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "+8",
            "matk": "10×3",
            "defn": "-",
            "mdef": "+5",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "MP回復スピード50%Up",
            "slots": [
              "holl08",
              "holl09"
            ],
            "slotText": "",
            "sp": "128"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "+8",
            "matk": "12×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "攻撃魔法MP消費量20%Down",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "22",
          "matk": "66",
          "defn": "-",
          "mdef": "10",
          "hp": "-",
          "mp": "10",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl07"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/cloud.html"
      },
      {
        "id": "wpn-cl-006",
        "name": "ツィンスティンガー",
        "detail": "クラウドの武器。武器アビリティは反撃の構え。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/cloud.html",
        "area": "クラウド",
        "ability": "反撃の構え",
        "obtain": "神羅ビル、鑼牟、第三層",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "46",
          "matk": "46",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "73",
          "matk": "73",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "炎属性攻撃5%Up 氷属性攻撃5%Up 雷属性攻撃5%Up 風属性攻撃5%Up 「ぞくせい」マテリア効果10%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "50"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "10×2",
            "luck": "-",
            "speed": "-",
            "other": "強化効果時間10%Up 弱体化効果時間10%Up",
            "slots": [
              "holl09"
            ],
            "slotText": "",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "+12",
            "matk": "+12",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+15",
            "luck": "-",
            "speed": "-",
            "other": "ガード時の物理ダメージ10%Down ガード時の魔法ダメージ10%Down MP回復スピード10%Up",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "128"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "+15",
            "matk": "+15",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "四属性防御5%Up HPが高いと魔法防御力+5 回復魔法MP消費量20%Down ラストリーヴ",
            "slots": [],
            "slotText": "-",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "27",
          "matk": "27",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "35",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl06"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/cloud.html"
      },
      {
        "id": "wpn-ba-001",
        "name": "ガトリングガン",
        "detail": "バレットの武器。武器アビリティはフュエルバースト。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット",
        "ability": "フュエルバースト",
        "obtain": "バレットの最初から持っている",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "19",
          "matk": "19",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "77",
          "matk": "77",
          "def": "9",
          "mdef": "9"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+5",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "+100",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl02"
            ],
            "slotText": "",
            "sp": "16"
          },
          {
            "lv": "2",
            "core": "サブコアI",
            "atk": "+5",
            "matk": "+5",
            "defn": "+4",
            "mdef": "+4",
            "hp": "+100",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl03"
            ],
            "slotText": "",
            "sp": "36"
          },
          {
            "lv": "3",
            "core": "サブコアⅡ",
            "atk": "+8",
            "matk": "+8",
            "defn": "-",
            "mdef": "-",
            "hp": "+150",
            "mp": "+5",
            "luck": "-",
            "speed": "-",
            "other": "「ぶっぱなす」強化10%Up",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "48"
          },
          {
            "lv": "4",
            "core": "サブコアⅢ",
            "atk": "+12",
            "matk": "+12",
            "defn": "+5",
            "mdef": "+5",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl07"
            ],
            "slotText": "",
            "sp": "60"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "+14",
            "matk": "+14",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+8",
            "luck": "-",
            "speed": "-",
            "other": "リミット技強化5%Up",
            "slots": [
              "holl09"
            ],
            "slotText": "",
            "sp": "84"
          },
          {
            "lv": "6",
            "core": "サブコアⅤ",
            "atk": "+14",
            "matk": "+14",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+8",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl09",
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "58",
          "matk": "58",
          "defn": "9",
          "mdef": "9",
          "hp": "950",
          "mp": "21",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl01"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/barret.html"
      },
      {
        "id": "wpn-ba-002",
        "name": "アサルトガン",
        "detail": "バレットの武器。武器アビリティはアバランチ魂。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット",
        "ability": "アバランチ魂",
        "obtain": "CHAPTER6進行中、ビッグスからもらう",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "22",
          "matk": "33",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "62",
          "matk": "93",
          "def": "13",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "+6",
            "defn": "+5",
            "mdef": "-",
            "hp": "+150",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "16"
          },
          {
            "lv": "2",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up ガード時の物理ダメージ10%Down 強化効果時間10%Up 状態異常耐性値+5",
            "slots": [],
            "slotText": "-",
            "sp": "24"
          },
          {
            "lv": "3",
            "core": "サブコアⅡ",
            "atk": "+6",
            "matk": "+6",
            "defn": "+8",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "HPが高いと魔法攻撃+5 HPが高いと物理防御+5",
            "slots": [],
            "slotText": "-",
            "sp": "48"
          },
          {
            "lv": "4",
            "core": "サブコアⅢ",
            "atk": "6×2",
            "matk": "8×2",
            "defn": "+8",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "リミット技強化5%Up",
            "slots": [
              "holl07"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "+10",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "バーストドレイン",
            "slots": [
              "holl06",
              "holl09"
            ],
            "slotText": "",
            "sp": "84"
          },
          {
            "lv": "6",
            "core": "サブコアⅤ",
            "atk": "+12",
            "matk": "+12",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "四属性攻撃力5%Up 回復魔法MP消費量20%DOWN ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "40",
          "matk": "86",
          "defn": "21",
          "mdef": "-",
          "hp": "350",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl05"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/barret.html"
      },
      {
        "id": "wpn-ba-003",
        "name": "ラージマウス",
        "detail": "バレットの武器。武器アビリティはアンガーマックス。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット",
        "ability": "アンガーマックス",
        "obtain": "六番街スラム、みどり公園(CHAPTER13、14)",
        "buy": "2500",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "45",
          "matk": "30",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "93",
          "matk": "62",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+8",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "250×3",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "60"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "HPが高いと物理攻撃力+5 HPが高いと魔法攻撃力+5 ピンチで物理防御+10 ピンチで魔法防御+10 ダメージアスピル ピンチで回復50%Up",
            "slots": [],
            "slotText": "-",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "10×2",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "+250",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "リミット技強化5%Up ピンチで物理防御力+10 ピンチでリミットブースト5%Up",
            "slots": [
              "holl06",
              "holl09"
            ],
            "slotText": "",
            "sp": "112"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "10×2",
            "matk": "+12",
            "defn": "-",
            "mdef": "-",
            "hp": "+250",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "四属性防御5%Up",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "28",
          "matk": "22",
          "defn": "-",
          "mdef": "-",
          "hp": "500",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl04"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/barret.html"
      },
      {
        "id": "wpn-ba-004",
        "name": "アトミックシザー",
        "detail": "バレットの武器。武器アビリティはエナジーアッパー。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット",
        "ability": "エナジーアッパー",
        "obtain": "モーグリメダル7枚と交換",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "53",
          "matk": "39",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "101",
          "matk": "73",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "炎属性攻撃5%Up 氷属性攻撃5%Up 雷属性攻撃5%Up 風属性攻撃5%Up 「ぞくせい」マテリア効果10%Up 弱体化効果時間10%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "60"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "+12",
            "matk": "+8",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+8",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl12",
              "holl07",
              "holl06"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "+16",
            "matk": "+14",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "10×2",
            "luck": "-",
            "speed": "-",
            "other": "MP回復スピード10%Up",
            "slots": [
              "holl09",
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "8×2",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "HPが高いと魔法防御力+5 攻撃魔法MP消費量20%Down 回復魔法MP消費量20%Down MP満タンで魔法20%Up",
            "slots": [],
            "slotText": "-",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "44",
          "matk": "22",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "28",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl03"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/barret.html"
      },
      {
        "id": "wpn-ba-005",
        "name": "キャノンボール",
        "detail": "バレットの武器。武器アビリティはグランドブロウ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット",
        "ability": "グランドブロウ",
        "obtain": "地底の咆哮",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "65",
          "matk": "17",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "117",
          "matk": "31",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "6×2",
            "matk": "+6",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up ATB増加量10&Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "50"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "強化効果時間10%Up ガード時の魔法ダメージ10%Down 部位破壊の攻撃力10%Up",
            "slots": [
              "holl08",
              "holl13"
            ],
            "slotText": "",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "8×3",
            "matk": "+8",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "リミット技強化5%Up キルドレイン バーストドレイン アビリティクリティカル率10%Up",
            "slots": [],
            "slotText": "-",
            "sp": "128"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "8×2",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "MP回復スピード10%Up ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "52",
          "matk": "14",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl07"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/barret.html"
      },
      {
        "id": "wpn-ba-006",
        "name": "ハートビート",
        "detail": "バレットの武器。武器アビリティはゼロレンジシュート。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/barret.html",
        "area": "バレット",
        "ability": "ゼロレンジシュート",
        "obtain": "CHAPTER16進行中、ハットからもらう",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "34",
          "matk": "65",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "54",
          "matk": "105",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "+300",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "クリティカル率10%Up クリティカルダメージ10%Up",
            "slots": [
              "holl15"
            ],
            "slotText": "",
            "sp": "50"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "アビリティクリティカル率10%Up ピンチでクリティカル率50%Up ピンチで物理防御力+10 ピンチで魔法防御力+10",
            "slots": [
              "holl14"
            ],
            "slotText": "",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "+10",
            "matk": "+15",
            "defn": "-",
            "mdef": "-",
            "hp": "+350",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up 「ぶっぱなす」強化10%Up クリティカルダメージ10%Up",
            "slots": [
              "holl13",
              "holl10"
            ],
            "slotText": "",
            "sp": "128"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "+10",
            "matk": "+15",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ピンチでクリティカル率50%Up キルドレイン ラストリーヴ",
            "slots": [
              "holl11"
            ],
            "slotText": "",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "20",
          "matk": "40",
          "defn": "-",
          "mdef": "-",
          "hp": "650",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl12"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/barret.html"
      },
      {
        "id": "wpn-ae-001",
        "name": "ガードロッド",
        "detail": "エアリスの武器。武器アビリティは聖なる魔法陣。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス",
        "ability": "聖なる魔法陣",
        "obtain": "エアリス、の最初から持っている",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "29",
          "matk": "43",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "29",
          "matk": "109",
          "def": "7",
          "mdef": "7"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "+12",
            "defn": "+7",
            "mdef": "+7",
            "hp": "+150",
            "mp": "+8",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "初期状態",
            "sp": "40"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up 「テンペスト」強化5%Up ガード時の物理ダメージ10%Down ガード時の魔法ダメージ10%Down",
            "slots": [
              "holl03"
            ],
            "slotText": "",
            "sp": "50"
          },
          {
            "lv": "4",
            "core": "サブコアⅡ",
            "atk": "-",
            "matk": "+18",
            "defn": "-",
            "mdef": "-",
            "hp": "+150",
            "mp": "+8",
            "luck": "-",
            "speed": "-",
            "other": "MP回復スピード10%Up",
            "slots": [
              "holl04",
              "holl07"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅢ",
            "atk": "-",
            "matk": "+18",
            "defn": "-",
            "mdef": "-",
            "hp": "+150",
            "mp": "+8",
            "luck": "-",
            "speed": "-",
            "other": "攻撃魔法MP消費量20%Down 回復魔法MP消費量20%Down ダメージアスピル",
            "slots": [
              "holl06",
              "holl09"
            ],
            "slotText": "",
            "sp": "98"
          },
          {
            "lv": "6",
            "core": "サブコアⅣ",
            "atk": "-",
            "matk": "+18",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "96"
          }
        ],
        "total": {
          "atk": "-",
          "matk": "69",
          "defn": "7",
          "mdef": "7",
          "hp": "500",
          "mp": "34",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl05"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/aerith.html"
      },
      {
        "id": "wpn-ae-002",
        "name": "シルバーロッド",
        "detail": "エアリスの武器。武器アビリティはイノセンスフォース。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス",
        "ability": "イノセンスフォース",
        "obtain": "モーグリメダル2枚と交換",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "27",
          "matk": "50",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "27",
          "matk": "120",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "+150",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "32"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "炎属性攻撃5%Up 氷属性攻撃5%Up 雷属性攻撃5%Up 風属性攻撃5%Up",
            "slots": [],
            "slotText": "-",
            "sp": "40"
          },
          {
            "lv": "4",
            "core": "サブコアⅡ",
            "atk": "-",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "MP回復スピード50%Up MP満タンで魔法20%Up 弱体化効果時間10%Up",
            "slots": [],
            "slotText": "-",
            "sp": "60"
          },
          {
            "lv": "5",
            "core": "サブコアⅢ",
            "atk": "-",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "攻撃魔法MP消費量20%Down 回復魔法MP消費量20%Down ダメージアスピル",
            "slots": [
              "holl07",
              "holl08"
            ],
            "slotText": "",
            "sp": "112"
          },
          {
            "lv": "6",
            "core": "サブコアⅣ",
            "atk": "-",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "状態異常値+5 ラストリーヴ",
            "slots": [
              "holl09",
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "-",
          "matk": "70",
          "defn": "-",
          "mdef": "-",
          "hp": "350",
          "mp": "-",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl05"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/aerith.html"
      },
      {
        "id": "wpn-ae-003",
        "name": "マジカルロッド",
        "detail": "エアリスの武器。武器アビリティはマジカルサーバント。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス",
        "ability": "マジカルサーバント",
        "obtain": "逆襲の刃または爆裂ダイナマイトボディ",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "24",
          "matk": "36",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "24",
          "matk": "87",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+5",
            "luck": "-",
            "speed": "-",
            "other": "弱体化効果時間10%Up 強化効果時間10%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "40"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "炎属性攻撃5%Up 氷属性攻撃5%Up 雷属性攻撃5%Up 風属性攻撃5%Up 「ぞくせい」マテリア効果10%Up",
            "slots": [],
            "slotText": "-",
            "sp": "50"
          },
          {
            "lv": "4",
            "core": "サブコアⅡ",
            "atk": "-",
            "matk": "7×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up バーストドレイン",
            "slots": [
              "holl09"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅢ",
            "atk": "-",
            "matk": "8×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "攻撃魔法MP消費量20%Down MP回復スピード10%Up",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "98"
          },
          {
            "lv": "6",
            "core": "サブコアⅣ",
            "atk": "-",
            "matk": "8×2",
            "defn": "-",
            "mdef": "-",
            "hp": "+300",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "四属性防御5%Up ラストリーヴ",
            "slots": [],
            "slotText": "-",
            "sp": "96"
          }
        ],
        "total": {
          "atk": "-",
          "matk": "51",
          "defn": "-",
          "mdef": "-",
          "hp": "300",
          "mp": "35",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl06"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/aerith.html"
      },
      {
        "id": "wpn-ae-004",
        "name": "ミスリルロッド",
        "detail": "エアリスの武器。武器アビリティはジャッジメントレイ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス",
        "ability": "ジャッジメントレイ",
        "obtain": "列車墓場、第2操車場",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "24",
          "matk": "92",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "24",
          "matk": "164",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "5×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+13",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl12",
              "holl07"
            ],
            "slotText": "",
            "sp": "50"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "6×3",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "キルドレイン MP満タンで魔法20%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "-",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "HPが高いと物理防御力+5 HPが高いと魔法防御力+5 ピンチでリミットブースト5%Up",
            "slots": [
              "holl06",
              "holl09"
            ],
            "slotText": "",
            "sp": "128"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "-",
            "matk": "12×2",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "状態異常耐性値+5",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "-",
          "matk": "72",
          "defn": "-",
          "mdef": "-",
          "hp": "400",
          "mp": "13",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl03"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/aerith.html"
      },
      {
        "id": "wpn-ae-005",
        "name": "ストライクロッド",
        "detail": "エアリスの武器。武器アビリティは光の盾。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス",
        "ability": "光の盾",
        "obtain": "エリゴル",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "39",
          "matk": "34",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "39",
          "matk": "76",
          "def": "13",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "+8",
            "defn": "+5",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "+5",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "初期状態",
            "sp": "32"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "クリティカル率10%Up クリティカルダメージ10%Up ピンチでクリティカル率50%Up 部位破壊の攻撃力10%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "40"
          },
          {
            "lv": "4",
            "core": "サブコアⅡ",
            "atk": "-",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+12",
            "luck": "-",
            "speed": "-",
            "other": "ピンチでリミットブースト5%Up",
            "slots": [
              "holl06"
            ],
            "slotText": "",
            "sp": "60"
          },
          {
            "lv": "5",
            "core": "サブコアⅢ",
            "atk": "-",
            "matk": "+12",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+15",
            "luck": "-",
            "speed": "-",
            "other": "ピンチで物理防御力+10 ピンチで魔法防御力+10 クリティカルダメージ10%Up ピンチでクリティカル率50%Up",
            "slots": [
              "holl07",
              "holl06"
            ],
            "slotText": "",
            "sp": "112"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "-",
            "matk": "+12",
            "defn": "+8",
            "mdef": "-",
            "hp": "+250",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "HPが高いと魔法攻撃力+5 バーストドレイン",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "-",
          "matk": "42",
          "defn": "13",
          "mdef": "-",
          "hp": "850",
          "mp": "27",
          "luck": "5",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl03"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/aerith.html"
      },
      {
        "id": "wpn-ae-006",
        "name": "フルメタルロッド",
        "detail": "エアリスの武器。武器アビリティは応援の魔法陣。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/aerith.html",
        "area": "エアリス",
        "ability": "応援の魔法陣",
        "obtain": "神羅ビル、65F宝条研究室サブフロア",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "50",
          "matk": "131",
          "def": "-",
          "mdef": "13"
        },
        "maximum": {
          "atk": "50",
          "matk": "131",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "+5",
            "defn": "-",
            "mdef": "+5",
            "hp": "-",
            "mp": "+8",
            "luck": "-",
            "speed": "-",
            "other": "強化効果時間10%Up 状態異常耐性値+5",
            "slots": [],
            "slotText": "初期状態",
            "sp": "50"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "10×2",
            "luck": "-",
            "speed": "-",
            "other": "ガード時の物理ダメージ10%Down ガード時の魔法ダメージ10%Down HPが高いと魔法攻撃力+5 ピンチで回復50%Up",
            "slots": [
              "holl07"
            ],
            "slotText": "",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "-",
            "matk": "10×2",
            "defn": "-",
            "mdef": "+8",
            "hp": "-",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "「テンペスト」強化5%Up HPが高いと物理防御力+5",
            "slots": [
              "holl08",
              "holl13"
            ],
            "slotText": "",
            "sp": "128"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "-",
            "matk": "12×2",
            "defn": "-",
            "mdef": "-",
            "hp": "+300",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "-",
          "matk": "49",
          "defn": "-",
          "mdef": "13",
          "hp": "300",
          "mp": "38",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl04"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/aerith.html"
      },
      {
        "id": "wpn-ti-001",
        "name": "レザーグローブ",
        "detail": "ティファの武器。武器アビリティはかかと落とし。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ",
        "ability": "かかと落とし",
        "obtain": "ティファの最初から持っている",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "32",
          "matk": "22",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "109",
          "matk": "74",
          "def": "8",
          "mdef": "8"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+5",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "+100",
            "mp": "+5",
            "luck": "-",
            "speed": "+5",
            "other": "-",
            "slots": [],
            "slotText": "初期状態",
            "sp": "16"
          },
          {
            "lv": "2",
            "core": "サブコアI",
            "atk": "+6",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "+150",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「秘技」強化10%Up",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "24"
          },
          {
            "lv": "3",
            "core": "サブコアⅡ",
            "atk": "+10",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+8",
            "luck": "-",
            "speed": "+5",
            "other": "リミット技5%Up",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "48"
          },
          {
            "lv": "4",
            "core": "サブコアⅢ",
            "atk": "+18",
            "matk": "+14",
            "defn": "+8",
            "mdef": "+8",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "サンガン流精神統一の発動率50%",
            "slots": [
              "holl06"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "+18",
            "matk": "+14",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ピンチで回復50%Up",
            "slots": [
              "holl09"
            ],
            "slotText": "",
            "sp": "84"
          },
          {
            "lv": "6",
            "core": "サブコアⅤ",
            "atk": "+20",
            "matk": "+14",
            "defn": "-",
            "mdef": "-",
            "hp": "+200",
            "mp": "+10",
            "luck": "-",
            "speed": "+5",
            "other": "-",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "77",
          "matk": "52",
          "defn": "8",
          "mdef": "8",
          "hp": "850",
          "mp": "23",
          "luck": "-",
          "speed": "15",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl05"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/tifa.html"
      },
      {
        "id": "wpn-ti-002",
        "name": "メタルナックル",
        "detail": "ティファの武器。武器アビリティはライズビート。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ",
        "ability": "ライズビート",
        "obtain": "ダストドーザー",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "54",
          "matk": "12",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "164",
          "matk": "36",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "4×3",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "+3",
            "other": "-",
            "slots": [],
            "slotText": "初期状態",
            "sp": "16"
          },
          {
            "lv": "2",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up ジャンプ攻撃強化5%Up 強化効果時間10%Up バックアタッカー10%Up",
            "slots": [],
            "slotText": "-",
            "sp": "24"
          },
          {
            "lv": "3",
            "core": "サブコアⅡ",
            "atk": "8×3",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "+4",
            "other": "-",
            "slots": [
              "holl04"
            ],
            "slotText": "",
            "sp": "48"
          },
          {
            "lv": "4",
            "core": "サブコアⅢ",
            "atk": "10×2",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "キルドレイン サンガン流精神統一30%Up",
            "slots": [
              "holl07"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "12×2",
            "matk": "+6",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ピンチで物理防御力+10 ピンチで魔法防御力+10",
            "slots": [
              "holl08"
            ],
            "slotText": "",
            "sp": "84"
          },
          {
            "lv": "6",
            "core": "サブコアⅤ",
            "atk": "15×2",
            "matk": "+8",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ATB増加量10%Up",
            "slots": [
              "holl13",
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "110",
          "matk": "24",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "-",
          "luck": "-",
          "speed": "7",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl05"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/tifa.html"
      },
      {
        "id": "wpn-ti-003",
        "name": "ソニックフィスト",
        "detail": "ティファの武器。武器アビリティはバックフリップ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ",
        "ability": "バックフリップ",
        "obtain": "伍番魔晄炉B5F",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "32",
          "matk": "21",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "87",
          "matk": "58",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+6",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+6",
            "luck": "-",
            "speed": "+5",
            "other": "-",
            "slots": [],
            "slotText": "初期状態",
            "sp": "16"
          },
          {
            "lv": "2",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "炎属性攻撃5%Up 氷属性攻撃5%Up 雷属性攻撃5%Up 風属性攻撃5%Up 強化効果時間10%Up 弱体化効果時間10%Up",
            "slots": [],
            "slotText": "初期状態",
            "sp": "36"
          },
          {
            "lv": "3",
            "core": "サブコアⅡ",
            "atk": "+8",
            "matk": "+5",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+6",
            "luck": "-",
            "speed": "+5",
            "other": "「ぞくせい」マテリア効果10%Up 状態異常耐性値+5",
            "slots": [],
            "slotText": "初期状態",
            "sp": "48"
          },
          {
            "lv": "4",
            "core": "サブコアⅢ",
            "atk": "+10",
            "matk": "+8",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+6",
            "luck": "-",
            "speed": "+5",
            "other": "サンガン流精神統一の発動率50%",
            "slots": [
              "holl09"
            ],
            "slotText": "",
            "sp": "60"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "+15",
            "matk": "+9",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+6",
            "luck": "-",
            "speed": "-",
            "other": "MP回復スピード50%Up",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "84"
          },
          {
            "lv": "6",
            "core": "サブコアⅤ",
            "atk": "+16",
            "matk": "+10",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+7",
            "luck": "-",
            "speed": "+6",
            "other": "回復魔法MP消費量20%Down HPが高いと物理防御力+5 HPが高いと魔法防御力+5",
            "slots": [],
            "slotText": "-",
            "sp": "112"
          }
        ],
        "total": {
          "atk": "55",
          "matk": "37",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "31",
          "luck": "-",
          "speed": "21",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl06"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/tifa.html"
      },
      {
        "id": "wpn-ti-004",
        "name": "フェザーグラブ",
        "detail": "ティファの武器。武器アビリティはオーバードライブ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ",
        "ability": "オーバードライブ",
        "obtain": "地下下水道、六番地区",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "50",
          "matk": "33",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "120",
          "matk": "80",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+7",
            "matk": "+6",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "+7",
            "other": "ガード時の物理ダメージ10%Down ガード時の魔法ダメージ10%Down",
            "slots": [],
            "slotText": "初期状態",
            "sp": "40"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up ジャンプ攻撃強化5%Up ATB増加量10%Up バックアタッカー10%Up バーストドレイン",
            "slots": [],
            "slotText": "初期状態",
            "sp": "50"
          },
          {
            "lv": "4",
            "core": "サブコアⅡ",
            "atk": "10×2",
            "matk": "+12",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "+7",
            "other": "サンガン流精神統一の発動率70%",
            "slots": [
              "holl12"
            ],
            "slotText": "",
            "sp": "72"
          },
          {
            "lv": "5",
            "core": "サブコアⅢ",
            "atk": "10×2",
            "matk": "+14",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "+7",
            "other": "-",
            "slots": [
              "holl07",
              "holl06",
              "holl09"
            ],
            "slotText": "",
            "sp": "98"
          },
          {
            "lv": "5",
            "core": "サブコアⅣ",
            "atk": "12×2",
            "matk": "+15",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "+7",
            "other": "-",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "96"
          }
        ],
        "total": {
          "atk": "71",
          "matk": "47",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "-",
          "luck": "-",
          "speed": "28",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl03"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/tifa.html"
      },
      {
        "id": "wpn-ti-005",
        "name": "ミスリルクロー",
        "detail": "ティファの武器。武器アビリティは闘気スフィア。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ",
        "ability": "闘気スフィア",
        "obtain": "アノニマス",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "28",
          "matk": "55",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "55",
          "matk": "109",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "+7",
            "matk": "7×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "+10",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [
              "holl07"
            ],
            "slotText": "",
            "sp": "50"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "状態異常耐性値+5 四属性防御5%Up サンガン流精神統一の発動率30% MP満タンで魔法20%Up 攻撃魔法MP消費量20%Down",
            "slots": [],
            "slotText": "-",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "+10",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「ぞくせい」マテリア効果10%Up HPが高いと物理攻撃+5 ATB増加量10%Up",
            "slots": [
              "holl06",
              "holl09"
            ],
            "slotText": "",
            "sp": "128"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "+10",
            "matk": "10×2",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "27",
          "matk": "54",
          "defn": "-",
          "mdef": "-",
          "hp": "-",
          "mp": "10",
          "luck": "-",
          "speed": "-",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl04"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/tifa.html"
      },
      {
        "id": "wpn-ti-006",
        "name": "グランドグラブ",
        "detail": "ティファの武器。武器アビリティは正拳突き。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/weapon/tifa.html",
        "area": "ティファ",
        "ability": "正拳突き",
        "obtain": "神羅ビル、1Fエントランスフロア",
        "buy": "ー",
        "sell": "ー",
        "initial": {
          "label": "初期",
          "atk": "51",
          "matk": "41",
          "def": "-",
          "mdef": "-"
        },
        "maximum": {
          "atk": "82",
          "matk": "66",
          "def": "-",
          "mdef": "-"
        },
        "levels": [
          {
            "lv": "1",
            "core": "コア",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "+250",
            "mp": "-",
            "luck": "-",
            "speed": "+5",
            "other": "クリティカル率10%Up クリティカルダメージ10%Up ピンチで物理防御力+10 ピンチで魔法防御力+10",
            "slots": [],
            "slotText": "初期状態",
            "sp": "60"
          },
          {
            "lv": "2",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "3",
            "core": "-",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "-",
            "slots": [],
            "slotText": "-",
            "sp": "-"
          },
          {
            "lv": "4",
            "core": "サブコアI",
            "atk": "-",
            "matk": "-",
            "defn": "-",
            "mdef": "-",
            "hp": "-",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "「たたかう」強化5%Up 「秘技」強化10%Up サンガン流精神統一の発動率70%Up ピンチでクリティカル率50%Up ピンチでリミットブースト5%Up",
            "slots": [
              "holl08"
            ],
            "slotText": "",
            "sp": "70"
          },
          {
            "lv": "5",
            "core": "サブコアⅡ",
            "atk": "+15",
            "matk": "+12",
            "defn": "-",
            "mdef": "-",
            "hp": "300×2",
            "mp": "-",
            "luck": "-",
            "speed": "+6",
            "other": "クリティカルダメージ10%Up アビリティクリティカル率10%Up",
            "slots": [
              "holl13"
            ],
            "slotText": "",
            "sp": "112"
          },
          {
            "lv": "6",
            "core": "サブコアⅢ",
            "atk": "+16",
            "matk": "+13",
            "defn": "-",
            "mdef": "-",
            "hp": "+300",
            "mp": "-",
            "luck": "-",
            "speed": "-",
            "other": "リミット技5%Up ラストリーヴ",
            "slots": [
              "holl10",
              "holl11"
            ],
            "slotText": "",
            "sp": "108"
          }
        ],
        "total": {
          "atk": "31",
          "matk": "25",
          "defn": "-",
          "mdef": "-",
          "hp": "1150",
          "mp": "-",
          "luck": "-",
          "speed": "11",
          "other": "-",
          "sp": "356"
        },
        "initialSlots": [
          "holl07"
        ],
        "reinforceSource": "https://finalfantasy-jun-site.com/ff7_remake/reinforcement/tifa.html"
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
        "area": "",
        "obtain": "CHAPTER01〜",
        "use": "CHAPTER01〜"
      },
      {
        "id": "key-002",
        "name": "黄色い花",
        "detail": "所持品のだいじなもの。2章、八番街・市街地区 LOVELESS通り、花売りの女性から受け取る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER02",
        "use": "CHAPTER02"
      },
      {
        "id": "key-003",
        "name": "バトルレポート",
        "detail": "所持品のだいじなもの。3章、七番街スラム 居住区、クエスト「チャドリーレポート」を終えると渡される。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER03",
        "use": "CHAPTER03"
      },
      {
        "id": "key-004",
        "name": "自警団のカギ",
        "detail": "所持品のだいじなもの。3章、七番街スラム タラガ廃工場、所定の神羅ボックスを壊す。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER03",
        "use": "CHAPTER03"
      },
      {
        "id": "key-005",
        "name": "神羅カンパニー社員証",
        "detail": "所持品のだいじなもの。4章、七番街・社宅地区 中層社宅エリア、ジェシーの家で、父親の作業服から失敬。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER04",
        "use": "CHAPTER04"
      },
      {
        "id": "key-006",
        "name": "ワイヤーリール",
        "detail": "所持品のだいじなもの。6章、四番街プレート内部 隔壁下層連絡通路、ビッグスからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER06",
        "use": "CHAPTER06"
      },
      {
        "id": "key-007",
        "name": "伍番魔晄炉のカードキー",
        "detail": "所持品のだいじなもの。7章、伍番魔晄炉 B8F以降のB5F整備フロア、所定の場所で拾う。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER07",
        "use": "CHAPTER07"
      },
      {
        "id": "key-008",
        "name": "秘密基地の入場証",
        "detail": "所持品のだいじなもの。8章、伍番街スラム 子供たちの秘密基地、未開発区域ガマガマ沼で子供達を救った後、報酬としてムギからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER08",
        "use": "CHAPTER08"
      },
      {
        "id": "key-009",
        "name": "墓地のカギ",
        "detail": "所持品のだいじなもの。8章、六番街スラム スラム中心地区、モーグリ・モグの店でモーグリメダルと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER08",
        "use": "CHAPTER08"
      },
      {
        "id": "key-010",
        "name": "スラムエンジェルの予告状",
        "detail": "所持品のだいじなもの。8章、伍番街スラム 物見の高台、クエスト「噂のスラムエンジェル」進行中、物見の高台で拾う。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER08",
        "use": "CHAPTER08"
      },
      {
        "id": "key-011",
        "name": "モーグリ・モグ会員証",
        "detail": "所持品のだいじなもの。8章、伍番街スラム 子供たちの秘密基地、モーグリ・モグの店でモーグリメダルと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER08",
        "use": "CHAPTER08"
      },
      {
        "id": "key-012",
        "name": "サムのコイン",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、サムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-013",
        "name": "コルネオ杯出場券",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、マムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-014",
        "name": "マムの仕事依頼リスト",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、マムの好感度がサムより高いとマムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-015",
        "name": "サムの仕事依頼リスト",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、サムの好感度がマムより高いとサムからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-016",
        "name": "ニセモノの予告状",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、クエスト「盗みの代償」開始時に見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-017",
        "name": "ホンモノの予告状",
        "detail": "所持品のだいじなもの。9章、六番街スラム 七六街道、クエスト「盗みの代償」クリア時に見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-018",
        "name": "宿屋特製ポーション",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、宿屋の自動販売機で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-019",
        "name": "宿屋特製興奮剤",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、宿屋の自動販売機で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-020",
        "name": "自販機のアレ",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、宿屋の自動販売機で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-021",
        "name": "薬屋商品クーポン",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、定食屋のオヤジで見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-022",
        "name": "消毒薬",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋で薬屋商品クーポンと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-023",
        "name": "消臭薬",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋で薬屋商品クーポンと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-024",
        "name": "消化薬",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋で薬屋商品クーポンと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-025",
        "name": "VIP会員証",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、クエスト「あくなき夜」進行中、薬屋からもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-026",
        "name": "マムの推薦状",
        "detail": "所持品のだいじなもの。9章、コルネオの館 正面玄関前、着替え終わったエアリスと合流した後に見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-027",
        "name": "アニアンのピアス",
        "detail": "所持品のだいじなもの。9章、蜜蜂の館 ハニーホール、アニアンとのダンスの最終ポイントが112以上で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
      },
      {
        "id": "key-028",
        "name": "アニアンの推薦状",
        "detail": "所持品のだいじなもの。9章、六番街スラム ウォール・マーケット、蜜蜂の館でクラウドがアニアンとダンスを踊った後、蜜蜂の館の前で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER09",
        "use": "CHAPTER09"
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
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-031",
        "name": "コルネオ宝物庫のカギ",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 教会聖堂、クエスト「おてんば盗賊」クリア時、キリエで見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-032",
        "name": "ジョニーの財布",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 教会聖堂、クエスト「おてんば盗賊」クリア時、キリエで見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-033",
        "name": "スラムエンジェルの手紙",
        "detail": "所持品のだいじなもの。14章、六番街スラム 開発地区、CHAPTER14でマムとサムの仕事依頼を全てクリアする。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-034",
        "name": "大水路への扉のカギ",
        "detail": "所持品のだいじなもの。10章、地下下水道 沈砂池回廊、水路の水を抜くと出現。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER10",
        "use": "CHAPTER10"
      },
      {
        "id": "key-035",
        "name": "ギザールの野菜",
        "detail": "所持品のだいじなもの。14章、伍番街スラム スラム中心地区、クエスト「チョコボを探せ」開始時にチョコボスタッフからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-036",
        "name": "チョコボフリーパス",
        "detail": "所持品のだいじなもの。14章、六番街スラム 七六街道、クエスト「チョコボを探せ」クリア時に見つかるする。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-037",
        "name": "町医者のメモ",
        "detail": "所持品のだいじなもの。14章、伍番街スラム スラム中心地区、クエスト「秘伝の薬」開始時に、町医者からもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-038",
        "name": "薬効の花",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 教会聖堂、教会聖堂に咲いている花を調べる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-039",
        "name": "モーグリのすり鉢",
        "detail": "所持品のだいじなもの。14章、伍番街スラム 子供たちの秘密基地、モーグリ・モグの店でモーグリメダルと交換。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-040",
        "name": "ベヒーモスのツノ",
        "detail": "所持品のだいじなもの。14章、地下実験場B5F E型実験体隔離場、クエスト「地底の咆哮」の依頼を受けて、ベヒーモス零式を倒すと見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-041",
        "name": "ルビーの宝冠",
        "detail": "所持品のだいじなもの。14章、伍番街スラム スチールマウンテン、コルネオ宝物庫の宝箱で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-042",
        "name": "ダイヤの宝冠",
        "detail": "所持品のだいじなもの。14章、陥没道路 崩落トンネル、コルネオ宝物庫の宝箱で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-043",
        "name": "エメラルドの宝冠",
        "detail": "所持品のだいじなもの。14章、地下下水道 旧大水路管路区画 旧汚泥処理区画、コルネオ宝物庫の宝箱で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-044",
        "name": "ワイヤーガン",
        "detail": "所持品のだいじなもの。14章、六番街スラム 開発地区、レズリーからもらう。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER14",
        "use": "CHAPTER14"
      },
      {
        "id": "key-045",
        "name": "神羅ビルカードキー",
        "detail": "所持品のだいじなもの。16章、1Fエントランスフロア フロントロビー、受付ブース内で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER16",
        "use": "CHAPTER16"
      },
      {
        "id": "key-046",
        "name": "上級社員カードキー",
        "detail": "所持品のだいじなもの。16章、63F上層 リフレッシュフロア シミュレータラウンジ、チーム「市長最高」をクリアして、協力者で見つかる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER16",
        "use": "CHAPTER16"
      },
      {
        "id": "key-047",
        "name": "宝条研究室カードキー",
        "detail": "所持品のだいじなもの。16章、64Fミーティングフロア 研究フロア接続通路、ストーリー進行中、サンプル:H0512戦開始前のムービーが始まる前に宝条に近づき、64Fミーティングフロア「研究フロア接続通路」まで戻ってくると出現し、拾えるようになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/key-item/index.html",
        "area": "",
        "obtain": "CHAPTER16",
        "use": "CHAPTER16"
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
        "area": "",
        "obtain": "各地、神羅ボックスなど",
        "buy": "50",
        "sell": "25"
      },
      {
        "id": "cons-002",
        "name": "ハイポーション",
        "detail": "味方1人のHPを700戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、化けネズミの軍団、神羅ボックスなど",
        "buy": "300",
        "sell": "150"
      },
      {
        "id": "cons-003",
        "name": "メガポーション",
        "detail": "味方1人のHPを1500戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、ルード(1回目)、コルネオボックス",
        "buy": "700",
        "sell": "350"
      },
      {
        "id": "cons-004",
        "name": "エーテル",
        "detail": "味方1人のMPを20戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、モノドライブ、スィーパー、ディーングロウ、ヘッジホッグパイ、レノ(1回目)、神羅ボックスなど",
        "buy": "500",
        "sell": "250"
      },
      {
        "id": "cons-005",
        "name": "エーテルターボ",
        "detail": "味方1人のMPをすべて戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、盗みの代償、あくなき夜、モーグリメダルと交換、など",
        "buy": "非売品",
        "sell": "1"
      },
      {
        "id": "cons-006",
        "name": "エリクサー",
        "detail": "味方1人のHPとMPをすべて戻す消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、七番街スラム、ミッドガル・ハイウェイ、トンベリ、ローチェ、さまよう軍犬、神羅ボックス、コルネオボックス",
        "buy": "1000",
        "sell": "1"
      },
      {
        "id": "cons-007",
        "name": "フェニックスの尾",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、羽根トカゲ、あくなき夜、神羅ボックスなど",
        "buy": "300",
        "sell": "150"
      },
      {
        "id": "cons-008",
        "name": "毒消し",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、あくなき夜、神羅ボックスなど",
        "buy": "80",
        "sell": "40"
      },
      {
        "id": "cons-009",
        "name": "乙女のキッス",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "地下下水道、神羅ビル、伍番街スラム、消えたトモダチ、神羅ボックスなど",
        "buy": "150",
        "sell": "75"
      },
      {
        "id": "cons-010",
        "name": "眠気覚まし",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、伍番街スラム、七番街、プレート断面、プアゾキュート、あくなき夜、コルネオ・コロッセオ",
        "buy": "80",
        "sell": "50"
      },
      {
        "id": "cons-011",
        "name": "やまびこえんまく",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、伍番魔晄炉、伍番街スラム、列車墓場、神羅ボックス、コルネオボックス",
        "buy": "100",
        "sell": "50"
      },
      {
        "id": "cons-012",
        "name": "興奮剤",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "七番街スラム、六番街スラム、伍番街スラム",
        "buy": "非売品",
        "sell": "50"
      },
      {
        "id": "cons-013",
        "name": "鎮静剤",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "七番街スラム、六番街スラム、鎮圧兵、上級鎮圧兵、重装甲戦闘員、シェザーシアー、ヴァギドポリス、部隊長コンガ",
        "buy": "非売品",
        "sell": "50"
      },
      {
        "id": "cons-014",
        "name": "万能薬",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "各地、ゼネネ、あくなき夜、神羅ボックス、コルネオボックス",
        "buy": "600",
        "sell": "300"
      },
      {
        "id": "cons-015",
        "name": "スピードドリンク",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "伍番街スラム、六番街スラム、神羅ビル、バグラー、ベグ、ブッチョ、バド、あくなき夜",
        "buy": "非売品",
        "sell": "500"
      },
      {
        "id": "cons-016",
        "name": "手榴弾",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "壱番魔晄炉、八番街、七番街スラム、警備兵、魔弾兵、上級擲弾兵、鎮圧兵、上級鎮圧兵",
        "buy": "非売品",
        "sell": "40"
      },
      {
        "id": "cons-017",
        "name": "有害物質",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "ゼネネ、プレインポッド、スモッグファクト、アプスベビー、どろぼうアプス",
        "buy": "非売品",
        "sell": "1"
      },
      {
        "id": "cons-018",
        "name": "クモの糸",
        "detail": "状態の異常を解く消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "グラシュトライク、クィーンシュトライク",
        "buy": "非売品",
        "sell": "1"
      },
      {
        "id": "cons-019",
        "name": "重力球",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "地下下水道、七番街スラム、六番街スラム、コルネオ・コロッセオ、神羅バトルシュミレーター",
        "buy": "非売品",
        "sell": "1"
      },
      {
        "id": "cons-020",
        "name": "ビッグボンバー",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "あくなき夜、神羅バトルシュミレーターなど",
        "buy": "非売品",
        "sell": "1"
      },
      {
        "id": "cons-021",
        "name": "ファイアカクテル",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "伍番街スラム、六番街スラム、神羅ビル、ボム、ダストドーザー、コルネオ・コロッセオ、神羅バトルシミュレーター",
        "buy": "非売品",
        "sell": "200"
      },
      {
        "id": "cons-022",
        "name": "ムームーちゃん",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "六番街スラム、ヘルハウス、コルネオボックス",
        "buy": "200",
        "sell": "100"
      },
      {
        "id": "cons-023",
        "name": "ヘモヘモくん",
        "detail": "敵にダメージを与える消耗品。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/item.html",
        "area": "",
        "obtain": "六番街スラム、ヘルハウス、コルネオボックス",
        "buy": "500",
        "sell": "250"
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
        "detail": "力が5%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地、八番街、市街地",
        "buy": "800",
        "sell": "400"
      },
      {
        "id": "acc-002",
        "name": "防弾チョッキ",
        "detail": "体力が5%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地、伍番魔晄炉、B7F",
        "buy": "800",
        "sell": "400"
      },
      {
        "id": "acc-003",
        "name": "イヤリング",
        "detail": "魔力が5%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地",
        "buy": "800",
        "sell": "400"
      },
      {
        "id": "acc-004",
        "name": "タリスマン",
        "detail": "精神が5%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地、伍番街スラム、教会1F、サンプル:H0512",
        "buy": "800",
        "sell": "400"
      },
      {
        "id": "acc-005",
        "name": "フルパワーリスト",
        "detail": "力が10%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地(CHAPTER9以降)",
        "buy": "5000",
        "sell": "2500"
      },
      {
        "id": "acc-006",
        "name": "サバイバルベスト",
        "detail": "体力が10%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地(CHAPTER9以降)",
        "buy": "5000",
        "sell": "2500"
      },
      {
        "id": "acc-007",
        "name": "プラチナイヤリング",
        "detail": "魔力が10%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地(CHAPTER9以降)",
        "buy": "5000",
        "sell": "2500"
      },
      {
        "id": "acc-008",
        "name": "いにしえのお守り",
        "detail": "精神が10%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地(CHAPTER9以降)、サンプル:H0512",
        "buy": "5000",
        "sell": "2500"
      },
      {
        "id": "acc-009",
        "name": "チャンピオンベルト",
        "detail": "最大HPが10%、力が5%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "ジャイアントバグラー、スクワット勝負、けんすい勝負",
        "buy": "非売品",
        "sell": "5000"
      },
      {
        "id": "acc-010",
        "name": "サークレット",
        "detail": "最大MPが10%、魔力が5%高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "伍番街スラム、スチールマウンテン",
        "buy": "非売品",
        "sell": "5000"
      },
      {
        "id": "acc-011",
        "name": "星のペンダント",
        "detail": "毒状態を防ぐ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地(CHAPTER9以降)、螺旋トンネル、C区画、六番街スラム、六伍街道",
        "buy": "1500",
        "sell": "750"
      },
      {
        "id": "acc-012",
        "name": "ハチマキ",
        "detail": "睡眠状態を防ぐ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地(CHAPTER9以降)、六番街スラム、ウォール・マーケット",
        "buy": "1500",
        "sell": "750"
      },
      {
        "id": "acc-013",
        "name": "守りのブーツ",
        "detail": "スロウ、ストップ状態を防ぐ。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "地下下水道、旧大水路、管路区画、暴走兵器",
        "buy": "非売品",
        "sell": "2500"
      },
      {
        "id": "acc-014",
        "name": "タロットカード",
        "detail": "敵に発生させた不利な状態変化の持続時間が25%長くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "コルネオ・コロッセオ",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-015",
        "name": "不思議な水晶",
        "detail": "自分に発生した不利な状態変化の持続時間が25%短くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "六番街スラム、コルネオの館地下",
        "buy": "非売品",
        "sell": "1000"
      },
      {
        "id": "acc-016",
        "name": "マジックリング",
        "detail": "自分が発生させた有利な状態変化の持続時間が25%長くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "七番街、プレート断面、地上110m付近、ベヒーモス零式",
        "buy": "非売品",
        "sell": "1500"
      },
      {
        "id": "acc-017",
        "name": "怒りの指輪",
        "detail": "バトル中、つねにバーサク状態になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "六番街スラム、コルネオの館、1F",
        "buy": "非売品",
        "sell": "1000"
      },
      {
        "id": "acc-018",
        "name": "カエルの指輪",
        "detail": "バトル中、つねにカエル状態になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "地下下水道、旧大水路、管路区画、神羅ビル65F、宝条研究室サブフロア、モーグリメダルと交換",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-019",
        "name": "トランスポーター",
        "detail": "ATBゲージを消費するたびに、LIMITゲージが「ATBゲージの消費した段階数×20」増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "クラッシュボックス",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-020",
        "name": "魔法の歯車",
        "detail": "魔法を使うたびに、LIMITゲージが「消費MP×2」増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "クラッシュボックス",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-021",
        "name": "精霊のピアス",
        "detail": "バトル中、つねにリレイズ状態になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "各地(CHAPTER3以降)、地下下水道、七番地区",
        "buy": "500",
        "sell": "250"
      },
      {
        "id": "acc-022",
        "name": "三日月チャーム",
        "detail": "バトル中、操作していないパーティメンバーに対し、受けるダメージが20%減る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "クラッシュボックス",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-023",
        "name": "疾風のスカーフ",
        "detail": "バトル開始時のATBゲージ蓄積量が多くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "モーグリメダルと交換",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-024",
        "name": "グッドヴィジョン",
        "detail": "リミット技「ヴィジョン」を使うと、ATBゲージが満タンになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "コルネオ・コロッセオ",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-025",
        "name": "レスキューバッジ",
        "detail": "残りHP25%以下で、バトル中の自分のHP回復量が25%増える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "モーグリメダルと交換",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-026",
        "name": "ヒールチョーカー",
        "detail": "バトル中、自分に対するHP回復量が20% を超える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "地下実験室B4F",
        "buy": "非売品",
        "sell": "2500"
      },
      {
        "id": "acc-027",
        "name": "幻獣のお守り",
        "detail": "自分が呼び出した召喚獣のレベルが通常より5高くなる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "伍番街スラム、エアリスの家2F",
        "buy": "非売品",
        "sell": "2500"
      },
      {
        "id": "acc-028",
        "name": "モーグリのお守り",
        "detail": "敵がアイテムを落とす確率が2倍になる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "コルネオ・コロッセオ",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "acc-029",
        "name": "神々の黄昏",
        "detail": "バトル開始時にLIMITゲージが満タンになる。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html",
        "area": "",
        "obtain": "神羅バトルシミュレーター",
        "buy": "非売品",
        "sell": "ー"
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
        "detail": "物理防御10、魔法防御10。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "クラウドとティファの初期装備",
        "buy": "非売品",
        "sell": "ー",
        "pdef": "10",
        "mdef": "10",
        "slots": "なし"
      },
      {
        "id": "arm-002",
        "name": "アイアンバングル",
        "detail": "物理防御16、魔法防御16。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "七番街スラム、七番街、螺旋トンネル、四番街プレート内部、伍番魔晄炉、伍番街スラム(〜CHAPTER9)、八番街、市街地",
        "buy": "1000",
        "pdef": "16",
        "mdef": "16",
        "slots": "-",
        "sell": "500"
      },
      {
        "id": "arm-003",
        "name": "スターブレス",
        "detail": "物理防御3、魔法防御3。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "七番街スラム、七番街、螺旋トンネル、四番街プレート内部、伍番魔晄炉、伍番街スラム(〜CHAPTER9)、墓場からの異物",
        "buy": "1600",
        "pdef": "3",
        "mdef": "3",
        "slots": "-",
        "sell": "800"
      },
      {
        "id": "arm-004",
        "name": "レザーガード",
        "detail": "物理防御26、魔法防御6。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "pdef": "26",
        "mdef": "6",
        "slots": "-",
        "obtain": "四番街プレート内部、伍番魔晄炉、伍番街スラム(〜CHAPTER9)、陥没道路、螺旋トンネル、E区画",
        "buy": "1600",
        "sell": "800"
      },
      {
        "id": "arm-005",
        "name": "マジカルの腕輪",
        "detail": "物理防御6、魔法防御26。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "pdef": "6",
        "mdef": "26",
        "slots": "-",
        "obtain": "伍番魔晄炉、伍番街スラム(〜CHAPTER9)、陥没道路、四番街プレート内部、上層",
        "buy": "1600",
        "sell": "800"
      },
      {
        "id": "arm-006",
        "name": "チタンバングル",
        "detail": "物理防御25、魔法防御25。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "pdef": "25",
        "mdef": "25",
        "slots": "-",
        "obtain": "伍番街スラム(〜CHAPTER9)、陥没道路、ウォール・マーケット(CHAPTER9)、地下下水道(CHAPTER10)、列車墓場、七番街支柱、エアバスター",
        "buy": "2000",
        "sell": "1000"
      },
      {
        "id": "arm-007",
        "name": "ブラックブレス",
        "detail": "物理防御5、魔法防御5。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "pdef": "5",
        "mdef": "5",
        "slots": "-",
        "obtain": "伍番街スラム(〜CHAPTER9)、陥没道路、ウォール・マーケット(CHAPTER9)、地下下水道(CHAPTER10)、列車墓場、七番街支柱、伍番街スラム、たそがれの谷",
        "buy": "3200",
        "sell": "1600"
      },
      {
        "id": "arm-008",
        "name": "ニードルガード",
        "detail": "物理防御40、魔法防御10。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "ウォール・マーケット(CHAPTER9)、地下下水道(CHAPTER10)、列車墓場、七番街支柱、墓参りの報酬",
        "buy": "3200",
        "pdef": "40",
        "mdef": "10",
        "slots": "-",
        "sell": "1600"
      },
      {
        "id": "arm-009",
        "name": "ミスリルの腕輪",
        "detail": "物理防御10、魔法防御40。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "pdef": "10",
        "mdef": "40",
        "slots": "-",
        "obtain": "ウォール・マーケット(CHAPTER9)、地下下水道(CHAPTER10)、列車墓場、七番街支柱、エアリスの初期装備",
        "buy": "3200",
        "sell": "1600"
      },
      {
        "id": "arm-010",
        "name": "ゴシックバングル",
        "detail": "物理防御33、魔法防御33。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "伍番街スラム(CHAPTER13、14)、みどり公園(CHAPTER13、ウォール・マーケット(CHAPTER14)、地下実験場、地下下水道(CHAPTER14)、七番街、プレート断面",
        "buy": "3000",
        "pdef": "33",
        "mdef": "33",
        "slots": "-",
        "sell": "1500"
      },
      {
        "id": "arm-011",
        "name": "ウィザードブレス",
        "detail": "物理防御7、魔法防御7。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "伍番街スラム(CHAPTER13、14)、みどり公園(CHAPTER13、ウォール・マーケット(CHAPTER14)、地下実験場、地下下水道(CHAPTER14)、七番街、プレート断面",
        "buy": "4800",
        "pdef": "7",
        "mdef": "7",
        "slots": "-",
        "sell": "2400"
      },
      {
        "id": "arm-012",
        "name": "プレートガード",
        "detail": "物理防御53、魔法防御13。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "伍番街スラム(CHAPTER13、14)、みどり公園(CHAPTER13、ウォール・マーケット(CHAPTER14)、地下実験場、地下下水道(CHAPTER14)、七番街、プレート断面",
        "buy": "4800",
        "pdef": "53",
        "mdef": "13",
        "slots": "-",
        "sell": "2400"
      },
      {
        "id": "arm-013",
        "name": "ソーサラーの腕輪",
        "detail": "物理防御13、魔法防御53。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "伍番街スラム(CHAPTER13、14)、みどり公園(CHAPTER13、ウォール・マーケット(CHAPTER14)、地下実験場、地下下水道(CHAPTER14)、七番街、プレート断面",
        "buy": "4800",
        "pdef": "13",
        "mdef": "53",
        "slots": "-",
        "sell": "2400"
      },
      {
        "id": "arm-014",
        "name": "マキナバングル",
        "detail": "物理防御39、魔法防御39。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "pdef": "39",
        "mdef": "39",
        "slots": "-",
        "obtain": "神羅ビル63F〜70F、ミッドガル・ハイウェイ、ヘリガンナー、神羅バトルシュミレーター",
        "buy": "4000",
        "sell": "2000"
      },
      {
        "id": "arm-015",
        "name": "ジオメトリブレス",
        "detail": "物理防御8、魔法防御8。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "神羅ビル63F〜70F、ミッドガル・ハイウェイ、神羅バトルシュミレーター",
        "buy": "6400",
        "pdef": "8",
        "mdef": "8",
        "slots": "-",
        "sell": "3200"
      },
      {
        "id": "arm-016",
        "name": "ハイパーガード",
        "detail": "物理防御62、魔法防御16。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "神羅ビル63F〜70F、ミッドガル・ハイウェイ、神羅バトルシュミレーター",
        "buy": "6400",
        "pdef": "62",
        "mdef": "16",
        "slots": "-",
        "sell": "3200"
      },
      {
        "id": "arm-017",
        "name": "ルーンの指輪",
        "detail": "物理防御16、魔法防御62。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "神羅ビル63F〜70F、ミッドガル・ハイウェイ、神羅バトルシュミレーター",
        "buy": "6400",
        "pdef": "16",
        "mdef": "62",
        "slots": "-",
        "sell": "3200"
      },
      {
        "id": "arm-018",
        "name": "チェインバングル",
        "detail": "物理防御50、魔法防御50。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "pdef": "50",
        "mdef": "50",
        "slots": "-",
        "obtain": "神羅ビル、鑼牟、第五層",
        "buy": "非売品",
        "sell": "ー"
      },
      {
        "id": "arm-019",
        "name": "フォースブレス",
        "detail": "物理防御9、魔法防御9。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "神羅ビル、鑼牟、第六層、ソードダンス",
        "buy": "非売品",
        "pdef": "9",
        "mdef": "9",
        "slots": "-",
        "sell": "4000"
      },
      {
        "id": "arm-020",
        "name": "ヘヴィメタル",
        "detail": "物理防御124、魔法防御20。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "神羅ビル、3Fエレベーターフロア、モススラッシャー",
        "buy": "非売品",
        "sell": "4000",
        "pdef": "124",
        "mdef": "20",
        "slots": "なし"
      },
      {
        "id": "arm-021",
        "name": "ミスティーク",
        "detail": "物理防御20、魔法防御124。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/item/protector.html",
        "area": "",
        "obtain": "神羅ビル、鑼牟、第四層、ジェノバBeat",
        "buy": "非売品",
        "sell": "4000",
        "pdef": "20",
        "mdef": "124",
        "slots": "なし"
      }
    ]
  },
  "intermission": {
    "title": "INTERmission",
    "lead": "本編の表には出さない。あとでINTERmission用に使う控え。",
    "hidden": true,
    "items": [
      {
        "id": "wpn-im-001",
        "name": "十字手裏剣",
        "detail": "ユフィが使う武器。武器アビリティは忍術変化・炎氷雷風。最初から持っている。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true,
        "obtain": "ユフィの初期装備"
      },
      {
        "id": "wpn-im-002",
        "name": "かまぐるま",
        "detail": "ユフィが使う武器。武器アビリティは邪鬼退散。入手の目安は物資輸送場「中層第一区」 自販機(神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true,
        "obtain": "物資輸送場「中層第一区」、自販機(神羅ビル)"
      },
      {
        "id": "wpn-im-003",
        "name": "ブーメラン",
        "detail": "ユフィが使う武器。武器アビリティはくもがくれ。入手の目安は七番街スラム「アバランチ本家アジト」 自販機(メインピラー整備場、神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true,
        "obtain": "七番街スラム「アバランチ本家アジト」、自販機(メインピラー整備場、神羅ビル)"
      },
      {
        "id": "wpn-im-004",
        "name": "五輪棒",
        "detail": "ユフィが使う武器。武器アビリティは疾風怒涛。最初から持っている。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true,
        "obtain": "ソノンの初期装備"
      },
      {
        "id": "wpn-im-005",
        "name": "魔人棒",
        "detail": "ユフィが使う武器。武器アビリティは怒気集中。入手の目安は神羅ビルB14F「メンテナンス区画」 自販機(神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true,
        "obtain": "神羅ビルB14F「メンテナンス区画」、自販機(神羅ビル)"
      },
      {
        "id": "wpn-im-006",
        "name": "金剛棒",
        "detail": "ユフィが使う武器。武器アビリティはウータイの闘志。入手の目安は七番街スラム「輸送場連絡口」 自販機(神羅ビル)。INTERmissionの装備。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/weapon.html",
        "area": "ユフィ",
        "intermission": true,
        "obtain": "七番街スラム「輸送場連絡口」、自販機(神羅ビル)"
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
        "id": "arm-im-014",
        "name": "忍びの腕輪",
        "detail": "物理防御38、魔法防御38の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "ユフィの初期装備",
        "buy": "非売品"
      },
      {
        "id": "arm-im-015",
        "name": "鬼神の腕輪",
        "detail": "物理防御42、魔法防御42の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "コルネオの手下初戦時の報酬",
        "buy": "非売品"
      },
      {
        "id": "arm-im-016",
        "name": "魔翔の腕輪",
        "detail": "物理防御44、魔法防御44の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "神羅ビル14F「メンテナンス区画」",
        "buy": "非売品"
      },
      {
        "id": "arm-im-017",
        "name": "鳳凰の腕輪",
        "detail": "物理防御46、魔法防御46の防具。INTERmissionで手に入る。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/armor.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "クリムゾン・メア初戦時の報酬",
        "buy": "非売品"
      },
      {
        "id": "acc-im-013",
        "name": "絆のくみひも",
        "detail": "付けているあいだ、連携で消費するATBが減少する。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "七番街スラム「物資保管区」",
        "buy": "非売品"
      },
      {
        "id": "acc-im-014",
        "name": "赤鬼メモリ",
        "detail": "付けているあいだ、※防具「鬼神の腕輪」専用アクセサリ 残りHPの割合が多いほど与えるダメージが高くなる。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "ホーンクリプシェイ初戦時の報酬",
        "buy": "非売品"
      },
      {
        "id": "acc-im-015",
        "name": "青鬼メモリ",
        "detail": "付けているあいだ、※防具「鬼神の腕輪」専用アクセサリ 残りMPの割合が少ないほど与えるダメージが高くなる。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "レブリコン初戦時の報酬",
        "buy": "非売品"
      },
      {
        "id": "acc-im-016",
        "name": "リボン",
        "detail": "付けているあいだ、状態変化を防ぐ。魔法の詠唱中にひるみにくくなる。INTERmissionで買える。",
        "source": "https://finalfantasy-jun-site.com/ff7_remake/intergrade/item/accessory.html",
        "area": "INTERmission",
        "intermission": true,
        "obtain": "神羅ビルB14F「中央装置整備通路」",
        "buy": "非売品"
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
      }
    ]
  }
};

globalThis.CATALOGS = CATALOGS;
