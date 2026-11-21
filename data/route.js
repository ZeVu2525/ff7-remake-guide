// FINAL FANTASY VII REMAKE のルート枠。
// 本編の手順は番号順。トロフィー・アイテム・Tips は直前の手順の子カード。
// 依頼カードは台帳の quest ID と結んである。HARD と INTERmission は仮のまま。
const ROUTE = {
  "main": [
    {
      "chapterId": "ch01",
      "items": [
        {
          "id": "ch01-s01",
          "flag": "story",
          "step": 1,
          "title": "警備兵2体との戦闘を終えて進む",
          "detail": "侵入路を進む。警備兵2体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-02",
          "flag": "item",
          "title": "連絡口までの箱",
          "detail": "改札を上がった先にポーション、部屋の隅に手榴弾がある。資材管理区の北側行き止まりにエーテル、ゲート前にもポーションがある。神羅の木箱は中身が変わり、たまにモーグリメダルが出る。壊したときの赤い光はその場でMPが戻る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "items": [
            {
              "id": "key-001",
              "qty": 1
            },
            {
              "id": "cons-001",
              "qty": 2
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "cons-016",
              "qty": 1
            }
          ],
          "parent": "ch01-s01"
        },
        {
          "id": "ch01-03",
          "flag": "trophy",
          "trophy": "trophy-first-win",
          "title": "はじめての勝利",
          "detail": "侵入路の最初の戦闘に勝つと、ソルジャーの肩慣らしが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "parent": "ch01-s01"
        },
        {
          "id": "ch01-04",
          "flag": "trophy",
          "trophy": "trophy-burst",
          "title": "連打でバーストさせる",
          "detail": "金網の手前の戦いで、攻撃を重ねて敵をバーストさせるとバーストの一撃が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "parent": "ch01-s01"
        },
        {
          "id": "ch01-05",
          "flag": "tips",
          "title": "神羅ボックスは通りすがりに壊す",
          "detail": "木箱は同じ見た目でも中身が毎回違う。赤く光って消えるものは回復なので、戦闘の直前に使うとポーションを温存できる。配置がない部屋もある。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "parent": "ch01-s01"
        },
        {
          "id": "ch01-07",
          "flag": "item",
          "title": "炉内の宝箱",
          "detail": "ゲートを出たすぐのフェニックスの尾、B3のポーション、B4のエーテル、B5のフェニックスの尾、B7のエーテルを拾ってから爆弾へ向かう。B6は一本道で箱がない。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "items": [
            {
              "id": "cons-007",
              "qty": 2
            },
            {
              "id": "cons-001",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 2
            }
          ],
          "parent": "ch01-s01"
        },
        {
          "id": "ch01-s02",
          "flag": "story",
          "step": 2,
          "title": "改札に入るには、続けて警備兵2体をまとめて片付ける",
          "detail": "侵入路を進む。改札に入るには、続けて警備兵2体をまとめて片付ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s03",
          "flag": "story",
          "step": 3,
          "title": "さらに警備兵3体を倒しつつ目的地4を目指して歩く",
          "detail": "侵入路を進む。さらに警備兵3体を倒しつつ目的地4を目指して歩く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s04",
          "flag": "story",
          "step": 4,
          "title": "ウェッジのいるところまで移動する",
          "detail": "侵入路を進む。ウェッジのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s05",
          "flag": "story",
          "step": 5,
          "title": "バレットのいるところまで移動する",
          "detail": "侵入路を進む。バレットのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s06",
          "flag": "story",
          "step": 6,
          "title": "ガードハウンド2体+警備兵2体との戦闘を終えて進む",
          "detail": "魔晄炉に侵入。ガードハウンド2体+警備兵2体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s07",
          "flag": "story",
          "step": 7,
          "title": "リフトに乗って上層へ移動",
          "detail": "魔晄炉に侵入。リフトに乗って上層へ移動。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s08",
          "flag": "story",
          "step": 8,
          "title": "ガードハウンド1体+警備兵2体との戦闘を終えて進む",
          "detail": "魔晄炉に侵入。ガードハウンド1体+警備兵2体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s09",
          "flag": "story",
          "step": 9,
          "title": "ゲートを開けて仲間を追い",
          "detail": "魔晄炉に侵入。次の手順は、ゲートを開けて仲間を追い。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s10",
          "flag": "story",
          "step": 10,
          "title": "ビッグスと話して次へ進む",
          "detail": "セキュリティ突破。ビッグスと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s11",
          "flag": "story",
          "step": 11,
          "title": "警備兵4体との戦闘を終えて進む",
          "detail": "セキュリティ突破。警備兵4体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s12",
          "flag": "story",
          "step": 12,
          "title": "ジェシーと話して次へ進む",
          "detail": "セキュリティ突破。ジェシーと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s13",
          "flag": "story",
          "step": 13,
          "title": "セキュリティーを解除してエレベーターに乗って移動する",
          "detail": "セキュリティ突破。セキュリティーを解除してエレベーターに乗って移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s14",
          "flag": "story",
          "step": 14,
          "title": "バレットがバトルにが仲間に入る",
          "detail": "魔晄だまりを目指す。バレットがバトルにが仲間に入る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s15",
          "flag": "story",
          "step": 15,
          "title": "ファーストレイ3体+モノドライブ3体との戦闘を終えて進む",
          "detail": "魔晄だまりを目指す。ファーストレイ3体+モノドライブ3体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s16",
          "flag": "story",
          "step": 16,
          "title": "監視レーザーをくぐり抜け",
          "detail": "ジェシーに続け。次の手順は、監視レーザーをくぐり抜け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s17",
          "flag": "story",
          "step": 17,
          "title": "スィーパーを倒してから先へ歩く",
          "detail": "ジェシーに続け。スィーパーを倒してから先へ歩く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s18",
          "flag": "story",
          "step": 18,
          "title": "爆弾の設置で、爆破時間を選ぶ",
          "detail": "爆弾の設置。爆弾の設置で、爆破時間を選ぶ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-08",
          "flag": "missable",
          "title": "爆弾の時間は20分か30分か",
          "detail": "B8でタイマーを20分か30分から選ぶ。バレットの反応が変わる。選んだ時間が、ボスのあとの脱出に使える時間になる。メニューを開けばその時計は止まる。",
          "deadline": "爆弾をセットするとき",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s19",
          "flag": "story",
          "step": 19,
          "title": "ガードスコーピオンとの戦闘を終えて進む",
          "detail": "爆弾の設置。ガードスコーピオンとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-09",
          "flag": "tips",
          "title": "ガードスコーピオンは雷で崩す",
          "detail": "バレットのサンダーが弱点。当たったら攻撃を重ね、飛んでくる弾はガードで受ける。弱点を突いた瞬間に、弱点への一撃が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "parent": "ch01-s19"
        },
        {
          "id": "ch01-10",
          "flag": "trophy",
          "trophy": "trophy-weakness",
          "title": "はじめて弱点を突く",
          "detail": "ガードスコーピオンに雷を当てると、弱点への一撃が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "parent": "ch01-s19"
        },
        {
          "id": "ch01-12",
          "flag": "item",
          "title": "脱出中に箱が戻る",
          "detail": "帰りは神羅ボックスが置き直されている。B6のポーションも、行きになかった場所に出る。時間に余裕があれば拾う。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "items": [
            {
              "id": "cons-001",
              "qty": 1
            }
          ],
          "parent": "ch01-s19"
        },
        {
          "id": "ch01-13",
          "flag": "trophy",
          "trophy": "trophy-ch01",
          "title": "この章を終える",
          "detail": "エレベーターで炉を出ると、壱番魔晄炉爆破が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter1.html",
          "map": "chapter01",
          "parent": "ch01-s19"
        },
        {
          "id": "ch01-s20",
          "flag": "story",
          "step": 20,
          "title": "崩れた床を渡ってジェシーを助ける",
          "detail": "魔晄炉から脱出しよう。次の手順は、崩れた床を渡ってジェシーを助ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s21",
          "flag": "story",
          "step": 21,
          "title": "ジェシーと1〜5を進み",
          "detail": "魔晄炉から脱出しよう。次の手順は、ジェシーと1〜5を進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s22",
          "flag": "story",
          "step": 22,
          "title": "魔晄炉から脱出しようで、バレットと会話イベントを見る",
          "detail": "魔晄炉から脱出しよう。魔晄炉から脱出しようで、バレットと会話イベントを見る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s23",
          "flag": "story",
          "step": 23,
          "title": "警備兵2体+モノドライブ2体との戦闘を終えて進む",
          "detail": "逃走路へ急げ。警備兵2体+モノドライブ2体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s24",
          "flag": "story",
          "step": 24,
          "title": "戦闘員2体+ファーストレイ2体との戦闘を終えて進む",
          "detail": "逃走路へ急げ。戦闘員2体+ファーストレイ2体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        },
        {
          "id": "ch01-s25",
          "flag": "story",
          "step": 25,
          "title": "逃走路へ急げで、エレベーターのボタンを操作する",
          "detail": "逃走路へ急げ。逃走路へ急げで、エレベーターのボタンを操作する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter01.html",
          "map": "chapter01"
        }
      ]
    },
    {
      "chapterId": "ch02",
      "items": [
        {
          "id": "ch02-s01",
          "flag": "story",
          "step": 1,
          "title": "通路を抜け、八番街を目指そう",
          "detail": "迷走経路を進む。次の手順は、通路を抜け、八番街を目指そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter02.html",
          "map": "chapter02"
        },
        {
          "id": "ch02-02",
          "flag": "item",
          "title": "八番街の道中",
          "detail": "隔壁の行き止まりにポーション、物資保管区の階段前にエーテルがある。燃えていない車の近くにギル、手すりに手榴弾、建物の階段にポーションがある。LOVELESS通りでは車の横にHPアップ、北側の奥にハイポーション、南側の戦闘のあと車横にかいひぎり、大通りの突き当りにパワーリストがある。噴水のあと建物の上に手榴弾、降りた先にアイアンバングル、住宅地の角にエーテル、横道のトラック横にハイポーションがある。列車の狭い通路の先にギルがある。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter2.html",
          "map": "chapter02",
          "items": [
            {
              "id": "arm-002",
              "qty": 1
            },
            {
              "id": "cons-002",
              "qty": 2
            },
            {
              "id": "acc-001",
              "qty": 1
            },
            {
              "id": "cons-001",
              "qty": 2
            },
            {
              "id": "mat-im-015",
              "qty": 1
            },
            {
              "id": "mat-im-021",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 2
            },
            {
              "id": "cons-016",
              "qty": 2
            }
          ],
          "parent": "ch02-s01"
        },
        {
          "id": "ch02-03",
          "flag": "tips",
          "title": "花の返事と、部隊長ゴンガ",
          "detail": "通りの女性への返事はいくらだといらないのどちらでも、黄色い花が手に入る。住宅地の先は中ボスなので、ほのおを付けておく。部隊長ゴンガは魔法が通りやすく、なければ手榴弾で崩せる。盾を持つ鎮圧兵も魔法かブレイバーで崩す。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter2.html",
          "map": "chapter02",
          "parent": "ch02-s01"
        },
        {
          "id": "ch02-05",
          "flag": "trophy",
          "trophy": "trophy-ch02",
          "title": "この章を終える",
          "detail": "列車の先頭の会話のあと、八番街の逃走が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter2.html",
          "map": "chapter02",
          "parent": "ch02-s01"
        },
        {
          "id": "ch02-s02",
          "flag": "story",
          "step": 2,
          "title": "アバランチの後に続こう",
          "detail": "迷走経路を進む。次の手順は、アバランチの後に続こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter02.html",
          "map": "chapter02"
        },
        {
          "id": "ch02-s03",
          "flag": "story",
          "step": 3,
          "title": "先行するジェシーたちを追って駅を目指そう",
          "detail": "八番街駅を目指す。次の手順は、先行するジェシーたちを追って駅を目指そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter02.html",
          "map": "chapter02"
        },
        {
          "id": "ch02-s04",
          "flag": "story",
          "step": 4,
          "title": "ハシゴに近づくと道が崩れ落ち",
          "detail": "八番街駅を目指す。次の手順は、ハシゴに近づくと道が崩れ落ち。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter02.html",
          "map": "chapter02"
        },
        {
          "id": "ch02-s05",
          "flag": "story",
          "step": 11,
          "title": "神羅の包囲網を突破",
          "detail": "包囲網を突破。次の手順は、神羅の包囲網を突破。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter02.html",
          "map": "chapter02"
        },
        {
          "id": "ch02-s06",
          "flag": "story",
          "step": 12,
          "title": "次々と現れる敵との戦闘を終えて進む",
          "detail": "包囲網を突破。次々と現れる敵との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter02.html",
          "map": "chapter02"
        }
      ]
    },
    {
      "chapterId": "ch03",
      "items": [
        {
          "id": "ch03-s01",
          "flag": "story",
          "step": 1,
          "title": "ティファと話して次へ進む",
          "detail": "アジトへの帰還。ティファと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-02",
          "flag": "item",
          "title": "七番街の箱と店",
          "detail": "自分の部屋の屋上にフェニックスの尾、武器屋の2階にエーテル、アジトの北のくぐり先に手榴弾、中央の猫広場に興奮剤がある。アイテム屋でプレリュードを買う。ほのおとれいきはあとで拾えるので、先にディスクを優先してよい。駅前の店でバレットのテーマ、店の北東の男からヒップ・デ・チョコボ、店内のジュークボックスでティファのテーマ。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "items": [
            {
              "id": "cons-007",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "cons-012",
              "qty": 1
            },
            {
              "id": "cons-016",
              "qty": 1
            },
            {
              "id": "mat-ma-004",
              "qty": 1
            },
            {
              "id": "mat-ma-005",
              "qty": 1
            }
          ],
          "parent": "ch03-s01"
        },
        {
          "id": "ch03-03",
          "flag": "trophy",
          "trophy": "trophy-music-3",
          "title": "ディスクを3枚そろえる",
          "detail": "この街のディスクを3枚手にした時点で、音楽愛好家が付く。4枚あるので、店を出る前に数を確認する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "parent": "ch03-s01"
        },
        {
          "id": "ch03-05",
          "flag": "tips",
          "title": "拘束されたら交代する",
          "detail": "ガレキ通りで誰かが掴まれたら、操作を替えてその敵を叩く。はじめて助け出すと、拘束への一撃が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "parent": "ch03-s01"
        },
        {
          "id": "ch03-06",
          "flag": "trophy",
          "trophy": "trophy-rescue",
          "title": "はじめて仲間を助ける",
          "detail": "ガレキ通りで拘束を解くと、拘束への一撃が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "parent": "ch03-s01"
        },
        {
          "id": "ch03-s02",
          "flag": "story",
          "step": 2,
          "title": "マリンと話して次へ進む",
          "detail": "アジトへの帰還。マリンと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s03",
          "flag": "story",
          "step": 3,
          "title": "ティファについていく",
          "detail": "アジトへの帰還。次の手順は、ティファについていく。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s04",
          "flag": "story",
          "step": 4,
          "title": "ティファの部屋の前で会話",
          "detail": "アジトへの帰還。次の手順は、ティファの部屋の前で会話。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s05",
          "flag": "story",
          "step": 5,
          "title": "クラウドの部屋に入る500ギル入手",
          "detail": "アジトへの帰還。次の手順は、クラウドの部屋に入る500ギル入手。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s06",
          "flag": "story",
          "step": 6,
          "title": "部屋を出て、203号室のドアを調べる",
          "detail": "うめき声。次の手順は、部屋を出て、203号室のドアを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s07",
          "flag": "story",
          "step": 7,
          "title": "大家のマーレと会話",
          "detail": "スラムの日常。次の手順は、大家のマーレと会話。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s08",
          "flag": "story",
          "step": 8,
          "title": "セブンスヘブンにいるティファから仕事の話を聞く",
          "detail": "スラムの日常。次の手順は、セブンスヘブンにいるティファから仕事の話を聞く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s09",
          "flag": "story",
          "step": 9,
          "title": "ティファと一緒にJSフィルターの集金に向かおう",
          "detail": "スラムの日常。次の手順は、ティファと一緒にJSフィルターの集金に向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s10",
          "flag": "story",
          "step": 10,
          "title": "アイテム屋から200ギル集金する",
          "detail": "スラムの日常。次の手順は、アイテム屋から200ギル集金する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s11",
          "flag": "story",
          "step": 11,
          "title": "大家のマーレから200ギル集金する",
          "detail": "スラムの日常。次の手順は、大家のマーレから200ギル集金する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s12",
          "flag": "story",
          "step": 12,
          "title": "武器屋から200ギル集金する",
          "detail": "スラムの日常。次の手順は、武器屋から200ギル集金する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s13",
          "flag": "story",
          "step": 13,
          "title": "ティファと一緒に自警団を訪ねてみ",
          "detail": "スラムの日常。次の手順は、ティファと一緒に自警団を訪ねてみ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s14",
          "flag": "story",
          "step": 15,
          "title": "依頼をこなすため、ガレキ通りへ向かおう",
          "detail": "自警団の依頼。次の手順は、依頼をこなすため、ガレキ通りへ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-07",
          "flag": "deadline",
          "title": "依頼は店の前の人だかりの前まで",
          "detail": "ワイマーと話すとなんでも屋が開く。チャドリーにバトルレポートを渡すと、この期間だけ追加の報酬がある。セブンスヘブンの外の人だかりへ進む前に、もう少し街を見るか聞かれる。先へ進むと依頼は閉じ、ティファも一度外れる。",
          "deadline": "セブンスヘブンの外へ進むと答える前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-08",
          "flag": "request",
          "title": "チャドリーレポート",
          "detail": "チャドリーからみやぶるをもらい、モンスターを2種類調べて報告する。どれか1件終えると話は先へ進める。6件すべて終えると、追加のふたりきりの時間が開く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "quest": "quest-chadley"
        },
        {
          "id": "ch03-09",
          "flag": "request",
          "title": "化けネズミの軍団",
          "detail": "アイテム屋から受ける。ウェアラットを片付けて報告する。このあとにワイマーからさまよう軍犬が出る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "quest": "quest-doomrat"
        },
        {
          "id": "ch03-10",
          "flag": "request",
          "title": "廃工場の羽根トカゲ",
          "detail": "ジャンク屋から受ける。廃工場の羽根トカゲを2組倒す。このあとに墓場からの異物が出る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "quest": "quest-lesser-drake"
        },
        {
          "id": "ch03-11",
          "flag": "request",
          "title": "消えたトモダチ",
          "detail": "ベティから受ける。スラムの猫を3匹見つけて報告する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "quest": "quest-lost-friends"
        },
        {
          "id": "ch03-12",
          "flag": "request",
          "title": "さまよう軍犬",
          "detail": "化けネズミの軍団のあと、ワイマーから出る追加の依頼。ガレキ通りの軍犬を追って倒す。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "quest": "quest-wrath-hound"
        },
        {
          "id": "ch03-13",
          "flag": "request",
          "title": "墓場からの異物",
          "detail": "廃工場の依頼のあと、ジャンク屋から出る追加の依頼。工場の奥の敵を倒して報告する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "quest": "quest-cerulean-drake"
        },
        {
          "id": "ch03-14",
          "flag": "trophy",
          "trophy": "trophy-quest-first",
          "title": "はじめて依頼を終える",
          "detail": "上の6件のどれか1件を報告すると、なんでも屋の初仕事が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "parent": "ch03-s14"
        },
        {
          "id": "ch03-15",
          "flag": "missable",
          "title": "ふたりきりの時間",
          "detail": "6件終えると、アパート前のマーレから追加の出来事が始まる。自分の部屋の洗面台を調べ、ティファの部屋で服装を聞かれる。答えた内容が、チャプター9でティファが着る服になる。やらなければその会話はない。報酬は三日月チャーム。",
          "deadline": "セブンスヘブンの外へ進むと答える前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3ex.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s15",
          "flag": "story",
          "step": 16,
          "title": "ガレキ通りにいる敵を全滅させる",
          "detail": "自警団の依頼。次の手順は、ガレキ通りにいる敵を全滅させる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s16",
          "flag": "story",
          "step": 17,
          "title": "報告のため、ビッグスの元へ戻ろう",
          "detail": "自警団の依頼。次の手順は、報告のため、ビッグスの元へ戻ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s17",
          "flag": "story",
          "step": 18,
          "title": "武器屋に行ってみ",
          "detail": "自警団の依頼。次の手順は、武器屋に行ってみ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s18",
          "flag": "story",
          "step": 19,
          "title": "ワイマーと話して次へ進む",
          "detail": "なんでも屋の仕事。ワイマーと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s19",
          "flag": "story",
          "step": 20,
          "title": "チャドリーからバトルレポート,「みやぶる」マテリアを入手",
          "detail": "なんでも屋の仕事。次の手順は、チャドリーからバトルレポート,「みやぶる」マテリアを入手する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s20",
          "flag": "story",
          "step": 21,
          "title": "依頼人の元へ向かい、仕事をこなそう",
          "detail": "なんでも屋の仕事。次の手順は、依頼人の元へ向かい、仕事をこなそう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s21",
          "flag": "story",
          "step": 22,
          "title": "人だかりの様子を確認",
          "detail": "仕事が終わったら。次の手順は、人だかりの様子を確認。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s22",
          "flag": "story",
          "step": 23,
          "title": "隠れてジョニーの様子を伺い",
          "detail": "動く新羅。次の手順は、隠れてジョニーの様子を伺い。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s23",
          "flag": "story",
          "step": 24,
          "title": "もう一度、隠れて様子を伺い",
          "detail": "動く新羅。次の手順は、もう一度、隠れて様子を伺い。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s24",
          "flag": "story",
          "step": 25,
          "title": "警備兵の注意をひきつけ、ジョニーを助け",
          "detail": "動く新羅。次の手順は、警備兵の注意をひきつけ、ジョニーを助け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s25",
          "flag": "story",
          "step": 26,
          "title": "ジョニーに話しかけ",
          "detail": "動く新羅。次の手順は、ジョニーに話しかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s26",
          "flag": "story",
          "step": 27,
          "title": "セブンスヘブンに戻り、報酬を受け取ろう",
          "detail": "動く新羅。次の手順は、セブンスヘブンに戻り、報酬を受け取ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s27",
          "flag": "story",
          "step": 28,
          "title": "ティファの問いかけに答える",
          "detail": "動く新羅。次の手順は、ティファの問いかけに答える。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s28",
          "flag": "story",
          "step": 29,
          "title": "作戦会議で、ダーツを調べる",
          "detail": "作戦会議。作戦会議で、ダーツを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-17",
          "flag": "optional",
          "title": "ダーツはこの店で遊べる",
          "detail": "的の中央がブル、細い輪がダブルとトリプル。残りが少ないときにリーチの枠へ入れる。ランキングを取る手順は、次の章で店に戻ったときにも残っている。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-18",
          "flag": "trophy",
          "trophy": "trophy-ch03",
          "title": "この章を終える",
          "detail": "ジェシーと出発すると、なんでも屋の仕事が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter3.html",
          "map": "chapter03",
          "parent": "ch03-s28"
        },
        {
          "id": "ch03-s29",
          "flag": "story",
          "step": 30,
          "title": "カウンターで待機する1050ギル入手",
          "detail": "作戦会議。次の手順は、カウンターで待機する1050ギル入手。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s30",
          "flag": "story",
          "step": 31,
          "title": "あやしげな男たちの様子を探ろう",
          "detail": "不穏な影。次の手順は、あやしげな男たちの様子を探ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s31",
          "flag": "story",
          "step": 32,
          "title": "あやしげな男たちについて行こう",
          "detail": "不穏な影。次の手順は、あやしげな男たちについて行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s32",
          "flag": "story",
          "step": 33,
          "title": "不穏な影で、天望荘へ戻ろう",
          "detail": "不穏な影。不穏な影で、天望荘へ戻ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        },
        {
          "id": "ch03-s33",
          "flag": "story",
          "step": 34,
          "title": "準備を整えて、ジェシーに話しかけ",
          "detail": "ジェシーの依頼。次の手順は、準備を整えて、ジェシーに話しかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter03.html",
          "map": "chapter03"
        }
      ]
    },
    {
      "chapterId": "ch04",
      "items": [
        {
          "id": "ch04-s01",
          "flag": "story",
          "step": 1,
          "title": "レバーを調べて扉を開け",
          "detail": "七番街へ。次の手順は、レバーを調べて扉を開け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s02",
          "flag": "story",
          "step": 2,
          "title": "ジェシーの家へ向かおう",
          "detail": "帰宅。次の手順は、ジェシーの家へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-02",
          "flag": "tips",
          "title": "ジェシーにほめられる走り方",
          "detail": "最後に採点され、冗談ではなくほめられるとバイクソルジャーが付く。残りHPを7割以上残した状態で確認できる。途中で回復してもらったり、失敗してやり直したりすると付かない。そのときは最後のセーブからやり直す。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter4.html",
          "map": "chapter04",
          "parent": "ch04-s02"
        },
        {
          "id": "ch04-03",
          "flag": "trophy",
          "trophy": "trophy-bike",
          "title": "バイクでほめられる",
          "detail": "採点でほめられたら、バイクソルジャーが付く。条件は上のTipsのとおり。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter4.html",
          "map": "chapter04",
          "parent": "ch04-s02"
        },
        {
          "id": "ch04-s03",
          "flag": "story",
          "step": 3,
          "title": "ジェシー宅の裏手で待機",
          "detail": "ジェシーの依頼。次の手順は、ジェシー宅の裏手で待機。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s04",
          "flag": "story",
          "step": 4,
          "title": "裏口から侵入し、頼まれた仕事をこなそう",
          "detail": "ジェシーの依頼。次の手順は、裏口から侵入し、頼まれた仕事をこなそう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s05",
          "flag": "story",
          "step": 5,
          "title": "神羅カンパニー社員証を入手し、家の外へ出",
          "detail": "ジェシーの依頼。次の手順は、神羅カンパニー社員証を入手し、家の外へ出。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s06",
          "flag": "story",
          "step": 6,
          "title": "ビッグスたちと七六分室へ向かおう",
          "detail": "七六分室に侵入。次の手順は、ビッグスたちと七六分室へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-05",
          "flag": "item",
          "title": "分室と帰り道",
          "detail": "七六分室の北西の箱にハイポーションが2つ。プレート境界面に入ったところにそせいが落ちている。スラムの箱の位置は前の章と同じ。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter4.html",
          "map": "chapter04",
          "items": [
            {
              "id": "cons-002",
              "qty": 2
            },
            {
              "id": "mat-ma-003",
              "qty": 1
            }
          ],
          "parent": "ch04-s06"
        },
        {
          "id": "ch04-s07",
          "flag": "story",
          "step": 7,
          "title": "広場前で待機し、作戦開始に備え",
          "detail": "七六分室に侵入。次の手順は、広場前で待機し、作戦開始に備え。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s08",
          "flag": "story",
          "step": 8,
          "title": "七六分室の広場に侵入",
          "detail": "陽動作戦。次の手順は、七六分室の広場に侵入。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s09",
          "flag": "story",
          "step": 9,
          "title": "ローチェとの戦闘を終えて進む",
          "detail": "陽動作戦。ローチェとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s10",
          "flag": "story",
          "step": 11,
          "title": "ジェシーの後に続き、社宅地区を後に",
          "detail": "スラムへ帰ろう。次の手順は、ジェシーの後に続き、社宅地区を後に。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-06",
          "flag": "deadline",
          "title": "寝る前にジェシーからバリアをもらう",
          "detail": "ウェッジを家まで送ったあと、ジェシーの家へ寄るとバリアがもらえる。ビッグスの家に寄る会話は任意。そのあと自分の部屋で朝まで寝る。",
          "deadline": "アパートで寝る前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter4.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-08",
          "flag": "trophy",
          "trophy": "trophy-darts",
          "title": "ダーツでランキングを取る",
          "detail": "セブンスヘブンのダーツで、7本以内にスコアを0にするとランキング1位になり、ダーツエキスパートが付く。1位のあとウェッジに近づくとラッキーがもらえる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter4.html",
          "map": "chapter04",
          "parent": "ch04-s10"
        },
        {
          "id": "ch04-09",
          "flag": "trophy",
          "trophy": "trophy-ch04",
          "title": "この章を終える",
          "detail": "列車に乗ると、アバランチとの絆が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter4.html",
          "map": "chapter04",
          "parent": "ch04-s10"
        },
        {
          "id": "ch04-s11",
          "flag": "story",
          "step": 12,
          "title": "脱出ポイントを目指そう",
          "detail": "スラムへ帰ろう。次の手順は、脱出ポイントを目指そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s12",
          "flag": "story",
          "step": 16,
          "title": "未知なる魔物6体との戦闘を終えて進む",
          "detail": "急襲。未知なる魔物6体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s13",
          "flag": "story",
          "step": 17,
          "title": "虚無なる魔物3体との戦闘を終えて進む",
          "detail": "急襲。虚無なる魔物3体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        },
        {
          "id": "ch04-s14",
          "flag": "story",
          "step": 18,
          "title": "バレットから500ギル入手",
          "detail": "急襲。次の手順は、バレットから500ギル入手。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter04.html",
          "map": "chapter04"
        }
      ]
    },
    {
      "chapterId": "ch05",
      "items": [
        {
          "id": "ch05-s01",
          "flag": "story",
          "step": 1,
          "title": "ティファの話を聞きくと、車両のドアが開けられるようになり",
          "detail": "四番街行き列車。次の手順は、ティファの話を聞きくと、車両のドアが開けられるようになり。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s02",
          "flag": "story",
          "step": 2,
          "title": "バレットの様子を見にいき",
          "detail": "四番街行き列車。次の手順は、バレットの様子を見にいき。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s03",
          "flag": "story",
          "step": 3,
          "title": "制限時間内にスタンレイを倒し、列車から脱出",
          "detail": "隔離開始。次の手順は、制限時間内にスタンレイを倒し、列車から脱出。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s04",
          "flag": "story",
          "step": 4,
          "title": "敵を倒しながら、バレットを探",
          "detail": "仲間を探せ。次の手順は、敵を倒しながら、バレットを探。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s05",
          "flag": "story",
          "step": 5,
          "title": "バレットに加勢して3人で敵との戦闘を終えて進む",
          "detail": "仲間を探せ。バレットに加勢して3人で敵との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s06",
          "flag": "story",
          "step": 6,
          "title": "バレットから作戦を聞き",
          "detail": "作戦会議。次の手順は、バレットから作戦を聞き。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s07",
          "flag": "story",
          "step": 7,
          "title": "アバランチの目印\"スタンプ\"の鼻が指し示す先へ進む",
          "detail": "目印発見。次の手順は、アバランチの目印\"スタンプ\"の鼻が指し示す先へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-02",
          "flag": "item",
          "title": "トンネルの箱と忠犬スタンプ",
          "detail": "C区画の階段にハイポーション、扉の奥にエリクサーとエーテル。D区画に毒消しとハイポーション、E区画にフェニックスの尾。旧車両基地の南西の小部屋の自販機で忠犬スタンプが買え、いかずちが落ちている。この部屋はボスの前。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter5.html",
          "map": "chapter05",
          "items": [
            {
              "id": "cons-007",
              "qty": 1
            },
            {
              "id": "cons-002",
              "qty": 2
            },
            {
              "id": "cons-006",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "mat-ma-006",
              "qty": 1
            },
            {
              "id": "cons-008",
              "qty": 1
            }
          ],
          "parent": "ch05-s07"
        },
        {
          "id": "ch05-s08",
          "flag": "story",
          "step": 8,
          "title": "クモの巣を取り除きながら前に進み",
          "detail": "目印発見。次の手順は、クモの巣を取り除きながら前に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s09",
          "flag": "story",
          "step": 9,
          "title": "クモの巣を取り除きながら前に進み",
          "detail": "目印発見。次の手順は、クモの巣を取り除きながら前に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s10",
          "flag": "story",
          "step": 10,
          "title": "クモの巣を取り除きながら前に進み",
          "detail": "目印発見。次の手順は、クモの巣を取り除きながら前に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s11",
          "flag": "story",
          "step": 11,
          "title": "路線図に近づいて、バレットの話を聞こう",
          "detail": "進路確認。次の手順は、路線図に近づいて、バレットの話を聞こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s12",
          "flag": "story",
          "step": 12,
          "title": "バレットの元へ行き、状況を確認",
          "detail": "基地前の準備。次の手順は、バレットの元へ行き、状況を確認。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s13",
          "flag": "story",
          "step": 13,
          "title": "警備を蹴散らし、先へ進もう",
          "detail": "基地前の準備。次の手順は、警備を蹴散らし、先へ進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s14",
          "flag": "story",
          "step": 14,
          "title": "車両基地横の階段を上り、施錠されたゲートを迂回",
          "detail": "階段から迂回する。次の手順は、車両基地横の階段を上り、施錠されたゲートを迂回。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s15",
          "flag": "story",
          "step": 15,
          "title": "スタンプの絵のいるところまで移動する",
          "detail": "階段から迂回する。スタンプの絵のいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s16",
          "flag": "story",
          "step": 16,
          "title": "ダストドーザーとの戦闘を終えて進む",
          "detail": "階段から迂回する。ダストドーザーとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-03",
          "flag": "tips",
          "title": "ダストドーザーはコアを狙う",
          "detail": "弱点は雷。部位を壊すとバーストが溜まり、ジェネレーターコアが出る。コアを弱点で叩き、雑魚が増えたら先に片付ける。レールに電流が走るので、線の上では戦わない。変形したあとも装甲を壊してコアを叩く。召喚のゲージが溜まったらここで使うと、盾にもなる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter5.html",
          "map": "chapter05",
          "parent": "ch05-s16"
        },
        {
          "id": "ch05-04",
          "flag": "trophy",
          "trophy": "trophy-summon-first",
          "title": "はじめて召喚する",
          "detail": "ダストドーザー戦で召喚を出すと、みならい召喚士が付く。ゲージは強敵との戦いで溜まる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter5.html",
          "map": "chapter05",
          "parent": "ch05-s16"
        },
        {
          "id": "ch05-05",
          "flag": "item",
          "title": "メタルナックル",
          "detail": "ダストドーザーはメタルナックルを落とす。盗むとファイアカクテルも取れる。勝ったときの報酬としてもティファの武器が渡される。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter5.html",
          "map": "chapter05",
          "items": [
            {
              "id": "cons-021",
              "qty": 1
            },
            {
              "id": "wpn-ti-002",
              "qty": 2
            }
          ],
          "parent": "ch05-s16"
        },
        {
          "id": "ch05-07",
          "flag": "trophy",
          "trophy": "trophy-ch05",
          "title": "この章を終える",
          "detail": "エレベーターに乗ると、プランＥ展開が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter5.html",
          "map": "chapter05",
          "parent": "ch05-s16"
        },
        {
          "id": "ch05-s17",
          "flag": "story",
          "step": 17,
          "title": "隠し通路を進もう",
          "detail": "伍番魔晄炉への道。次の手順は、隠し通路を進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        },
        {
          "id": "ch05-s18",
          "flag": "story",
          "step": 18,
          "title": "リフトのスィッチを操作する",
          "detail": "伍番魔晄炉への道。リフトのスィッチを操作する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter05.html",
          "map": "chapter05"
        }
      ]
    },
    {
      "chapterId": "ch06",
      "items": [
        {
          "id": "ch06-s01",
          "flag": "story",
          "step": 1,
          "title": "スィッチを調べてみ",
          "detail": "G区画を目指す。次の手順は、スィッチを調べてみ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-02",
          "flag": "item",
          "title": "プレート内部の箱",
          "detail": "最初の梯子の近くにハイポーション、北の照明の梯子の上にポーション。G区画は階段を降りずに進むと有害物質、西の橋の先に万能薬、H区画へ渡る手前に毒消し。1つ目のライトの奥にフェニックスの尾、2つ目へ向かう西の行き止まりにエーテルターボ、3つ目の途中にモーグリメダル、レバーの奥にマジカルの腕輪。隔壁の梯子の上にもモーグリメダルがある。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter6.html",
          "map": "chapter06",
          "items": [
            {
              "id": "cons-007",
              "qty": 1
            },
            {
              "id": "key-001",
              "qty": 2
            },
            {
              "id": "cons-002",
              "qty": 1
            },
            {
              "id": "cons-005",
              "qty": 1
            },
            {
              "id": "arm-005",
              "qty": 1
            },
            {
              "id": "cons-001",
              "qty": 1
            },
            {
              "id": "cons-017",
              "qty": 1
            },
            {
              "id": "cons-008",
              "qty": 1
            },
            {
              "id": "cons-014",
              "qty": 1
            }
          ],
          "parent": "ch06-s01"
        },
        {
          "id": "ch06-s02",
          "flag": "story",
          "step": 2,
          "title": "制御室へ向かい、電力の供給状況を確認",
          "detail": "制御室へ向かう。次の手順は、制御室へ向かい、電力の供給状況を確認。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s03",
          "flag": "story",
          "step": 3,
          "title": "ライトを消して、非常用電力を確保",
          "detail": "非常用電力の確保。次の手順は、ライトを消して、非常用電力を確保。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s04",
          "flag": "story",
          "step": 4,
          "title": "ゲートに戻って、ロックを解除",
          "detail": "非常用電力の確保。次の手順は、ゲートに戻って、ロックを解除。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s05",
          "flag": "story",
          "step": 5,
          "title": "ティファの元を目指して歩く",
          "detail": "H区画への道。ティファの元を目指して歩く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s06",
          "flag": "story",
          "step": 6,
          "title": "換気ファンを目印に、道を探",
          "detail": "H区画への道。次の手順は、換気ファンを目印に、道を探。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s07",
          "flag": "story",
          "step": 7,
          "title": "メインリフトに近づいてみ",
          "detail": "リフトの電力確保。次の手順は、メインリフトに近づいてみ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-03",
          "flag": "deadline",
          "title": "メインリフトの前に二つの寄り道",
          "detail": "3つ目のライトへ行けるようになったら、モーグリメダルの箱の横から下へ降りる。クイーンシュトライクを倒し、リフトを一番下まで動かすとMPアップ、渡った先にぞくせいがある。戻って、メインリフトの西の小さいリフトで換気設備へ行く。自販機でエレキ・デ・チョコボ。端末を起動し、1分以内に隣室の端末を押すと奥でチョコボ＆モーグリが拾える。時間切れでもやり直せる。",
          "deadline": "メインリフトの端末を調べる前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter6ex2.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-04",
          "flag": "tips",
          "title": "ぞくせいの使い方",
          "detail": "ぞくせいは、組んだ属性を武器なら攻撃、防具なら耐性に足す。ほのお、れいき、いかずち、かぜが対象で、複数付けたときは最初の属性だけ効く。星が増えると、武器の追加ダメが上がり、防具は半減から無効、吸収へ変わる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter6ex1.html",
          "map": "chapter06",
          "parent": "ch06-s07"
        },
        {
          "id": "ch06-05",
          "flag": "trophy",
          "trophy": "trophy-moogle",
          "title": "チョコボ＆モーグリを拾う",
          "detail": "換気口の奥のマテリアを拾うと、凄腕の整備士が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter6ex2.html",
          "map": "chapter06",
          "parent": "ch06-s07"
        },
        {
          "id": "ch06-07",
          "flag": "trophy",
          "trophy": "trophy-ch06",
          "title": "この章を終える",
          "detail": "隔壁の先の会話のあと、スラムの太陽が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter6.html",
          "map": "chapter06",
          "parent": "ch06-s07"
        },
        {
          "id": "ch06-s08",
          "flag": "story",
          "step": 8,
          "title": "1つ目のライトを消して、非常用電力を確保",
          "detail": "1つ目のライト。次の手順は、1つ目のライトを消して、非常用電力を確保。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s09",
          "flag": "story",
          "step": 9,
          "title": "電力が回復した端末を確認してみ",
          "detail": "復旧した端末。次の手順は、電力が回復した端末を確認してみ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s10",
          "flag": "story",
          "step": 10,
          "title": "操作盤を調べて可動式通路を動か",
          "detail": "2つ目のライト。次の手順は、操作盤を調べて可動式通路を動か。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s11",
          "flag": "story",
          "step": 11,
          "title": "2つ目のライトを消して、非常用電力を確保",
          "detail": "2つ目のライト。次の手順は、2つ目のライトを消して、非常用電力を確保。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s12",
          "flag": "story",
          "step": 12,
          "title": "リフトを操作して先に進み",
          "detail": "3つ目のライト。次の手順は、リフトを操作して先に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s13",
          "flag": "story",
          "step": 13,
          "title": "リフトを操作して先に進み",
          "detail": "3つ目のライト。次の手順は、リフトを操作して先に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s14",
          "flag": "story",
          "step": 14,
          "title": "操作盤を調べて可動式通路を動か",
          "detail": "3つ目のライト。次の手順は、操作盤を調べて可動式通路を動か。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s15",
          "flag": "story",
          "step": 15,
          "title": "3つ目のライトを消して、非常用電力を確保",
          "detail": "3つ目のライト。次の手順は、3つ目のライトを消して、非常用電力を確保。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s16",
          "flag": "story",
          "step": 16,
          "title": "リフトを操作して、H-01に戻り",
          "detail": "3つ目のライト。次の手順は、リフトを操作して、H-01に戻り。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s17",
          "flag": "story",
          "step": 17,
          "title": "メインリフトに戻り、起動を確保",
          "detail": "メインリフトの先へ。次の手順は、メインリフトに戻り、起動を確保。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s18",
          "flag": "story",
          "step": 18,
          "title": "スイッチを操作して、メインリフトを動か",
          "detail": "メインリフトの先へ。次の手順は、スイッチを操作して、メインリフトを動か。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s19",
          "flag": "story",
          "step": 19,
          "title": "敵を倒してハシゴを登り",
          "detail": "メインリフトの先へ。次の手順は、敵を倒してハシゴを登り。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        },
        {
          "id": "ch06-s20",
          "flag": "story",
          "step": 20,
          "title": "メインリフトの先へで、ビッグスと合流",
          "detail": "メインリフトの先へ。メインリフトの先へで、ビッグスと合流。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter06.html",
          "map": "chapter06"
        }
      ]
    },
    {
      "chapterId": "ch07",
      "items": [
        {
          "id": "ch07-s01",
          "flag": "story",
          "step": 1,
          "title": "通路の奥まで進み",
          "detail": "パイプを降下。次の手順は、通路の奥まで進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s02",
          "flag": "story",
          "step": 2,
          "title": "パイプをつたって下まで降り",
          "detail": "パイプを降下。次の手順は、パイプをつたって下まで降り。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s03",
          "flag": "story",
          "step": 3,
          "title": "魔晄炉からの脱出で、爆弾をセット",
          "detail": "魔晄炉からの脱出。魔晄炉からの脱出で、爆弾をセット。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s04",
          "flag": "story",
          "step": 4,
          "title": "ハシゴのいるところまで移動する",
          "detail": "魔晄炉からの脱出。ハシゴのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s05",
          "flag": "story",
          "step": 5,
          "title": "スイッチを調べて先に進み",
          "detail": "モニターの情報。次の手順は、スイッチを調べて先に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s06",
          "flag": "story",
          "step": 6,
          "title": "敵を倒して、モニターを操作する",
          "detail": "モニターの情報。次の手順は、敵を倒して、モニターを操作する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s07",
          "flag": "story",
          "step": 7,
          "title": "伍番魔晄炉カードキーを拾い",
          "detail": "モニターの情報。次の手順は、伍番魔晄炉カードキーを拾い。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-02",
          "flag": "item",
          "title": "伍番魔晄炉の拾い物",
          "detail": "B4の柱の近くにハイポーション、B5に煙幕とエーテル、B7の梯子を降りずに奥へ行くと防弾チョッキ。B5の連絡通路にティファのソニックフィスト。B7の部屋の北西にいかずち。B3の作業通路にエーテル。カードキーは各整備フロアの机や床にある。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter7.html",
          "map": "chapter07",
          "items": [
            {
              "id": "wpn-ti-003",
              "qty": 1
            },
            {
              "id": "cons-002",
              "qty": 1
            },
            {
              "id": "acc-002",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 2
            },
            {
              "id": "mat-ma-006",
              "qty": 1
            }
          ],
          "parent": "ch07-s07"
        },
        {
          "id": "ch07-s08",
          "flag": "story",
          "step": 8,
          "title": "パネルを操作してパーツを廃棄",
          "detail": "モニターの情報。次の手順は、パネルを操作してパーツを廃棄。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s09",
          "flag": "story",
          "step": 9,
          "title": "スイッチを調べて先に進み",
          "detail": "モニターの情報。次の手順は、スイッチを調べて先に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s10",
          "flag": "story",
          "step": 10,
          "title": "スィッチを調べて部屋に入り",
          "detail": "モニターの情報。次の手順は、スィッチを調べて部屋に入り。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s11",
          "flag": "story",
          "step": 11,
          "title": "敵を倒して、カードを拾い",
          "detail": "モニターの情報。次の手順は、敵を倒して、カードを拾い。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s12",
          "flag": "story",
          "step": 12,
          "title": "スィッチを調べて先に進み",
          "detail": "モニターの情報。次の手順は、スィッチを調べて先に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s13",
          "flag": "story",
          "step": 13,
          "title": "スィッチを調べて部屋に入り",
          "detail": "モニターの情報。次の手順は、スィッチを調べて部屋に入り。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s14",
          "flag": "story",
          "step": 14,
          "title": "敵を倒し、スィッチを操作する",
          "detail": "モニターの情報。敵を倒し、スィッチを操作する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s15",
          "flag": "story",
          "step": 15,
          "title": "スイッチを調べて部屋に入り",
          "detail": "モニターの情報。次の手順は、スイッチを調べて部屋に入り。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s16",
          "flag": "story",
          "step": 16,
          "title": "敵を倒し、スィッチを操作する",
          "detail": "モニターの情報。敵を倒し、スィッチを操作する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s17",
          "flag": "story",
          "step": 17,
          "title": "スィッチを調べて、扉を開け",
          "detail": "モニターの情報。次の手順は、スィッチを調べて、扉を開け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s18",
          "flag": "story",
          "step": 18,
          "title": "端末を調べて扉を開け",
          "detail": "モニターの情報。次の手順は、端末を調べて扉を開け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s19",
          "flag": "story",
          "step": 19,
          "title": "敵を倒して扉を開け",
          "detail": "モニターの情報。次の手順は、敵を倒して扉を開け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s20",
          "flag": "story",
          "step": 20,
          "title": "モニターのいるところまで移動する",
          "detail": "エアバスターの警備状況。モニターのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-03",
          "flag": "tips",
          "title": "カッターマシンとエアバスター",
          "detail": "カッターマシンは雷。腕を壊すかダメージを積むと倒れるが、一度起きると暴走して倒れにくくなる。エアバスターも雷。大砲は直線なので横へ避け、腕が分離したら本体より先に腕を叩く。掴まれたらバレットに替える。飛ぶようになったらバレットか魔法。手を合わせたら炎、近づいたら近接。制限は30分。勝つとチタンバングル。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter7.html",
          "map": "chapter07",
          "parent": "ch07-s20"
        },
        {
          "id": "ch07-04",
          "flag": "optional",
          "title": "廃棄物の回収",
          "detail": "正面ゲートのセキュリティ室で、紫の端末を調べる。ティファの合図の直後に、表示どおり左右のスティックを軽く倒す。4回成功すると奥が開き、マジカルが落ちている。失敗しても最初からではなく、その回からやり直せる。捨てたAIコア、ビッグボンバー、Mユニットもここにある。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter7ex.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s21",
          "flag": "story",
          "step": 21,
          "title": "ティファのいるところまで移動する",
          "detail": "エアバスターの警備状況。ティファのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s22",
          "flag": "story",
          "step": 22,
          "title": "カッターマシンを倒して、先に進み",
          "detail": "エアバスターの警備状況。次の手順は、カッターマシンを倒して、先に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s23",
          "flag": "story",
          "step": 23,
          "title": "エレベーターのスイッチを調べる",
          "detail": "直接対決。次の手順は、エレベーターのスイッチを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s24",
          "flag": "story",
          "step": 24,
          "title": "扉の端末を調べる",
          "detail": "直接対決。次の手順は、扉の端末を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-s25",
          "flag": "story",
          "step": 25,
          "title": "緊急ロックモードを解除",
          "detail": "緊急ロックを解除。次の手順は、緊急ロックモードを解除。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        },
        {
          "id": "ch07-05",
          "flag": "trophy",
          "trophy": "trophy-thieves",
          "title": "最上級のロックを開ける",
          "detail": "廃棄物の部屋の入力を最後まで成功させると、大泥棒三人組が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter7ex.html",
          "map": "chapter07",
          "parent": "ch07-s25"
        },
        {
          "id": "ch07-06",
          "flag": "item",
          "title": "爆破ミッション",
          "detail": "ロックを開けた扉の先の自販機で、爆破ミッションが買える。ボスの前にベンチで全回復しておく。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter7.html",
          "map": "chapter07",
          "parent": "ch07-s25"
        },
        {
          "id": "ch07-07",
          "flag": "trophy",
          "trophy": "trophy-ch07",
          "title": "この章を終える",
          "detail": "エアバスターを倒すと、罠に落ちたネズミが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter7.html",
          "map": "chapter07",
          "parent": "ch07-s25"
        },
        {
          "id": "ch07-s26",
          "flag": "story",
          "step": 26,
          "title": "エアバスターとの戦闘を終えて進む",
          "detail": "緊急ロックを解除。エアバスターとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter07.html",
          "map": "chapter07"
        }
      ]
    },
    {
      "chapterId": "ch08",
      "items": [
        {
          "id": "ch08-s01",
          "flag": "story",
          "step": 1,
          "title": "エアリスに話しかけ",
          "detail": "再会。次の手順は、エアリスに話しかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-02",
          "flag": "item",
          "title": "教会から駅まで",
          "detail": "教会2階の階段下にタリスマン。屋根裏の細い足場の横に眠気覚まし。屋根を回り込んだ先にモーグリメダル、呼び止められたあとの行き止まりにエーテル。駅の自販機でケット・シーのテーマ。たそがれの谷の回り込みにブラックブレス、スチールマウンテンの掴まり移動の先に万能薬。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8.html",
          "map": "chapter08",
          "items": [
            {
              "id": "key-001",
              "qty": 1
            },
            {
              "id": "arm-007",
              "qty": 1
            },
            {
              "id": "cons-010",
              "qty": 1
            },
            {
              "id": "acc-004",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "cons-014",
              "qty": 1
            }
          ],
          "parent": "ch08-s01"
        },
        {
          "id": "ch08-03",
          "flag": "tips",
          "title": "スモッグファクトは倒したあと離れる",
          "detail": "弱点は雷。倒した直後に自爆するので、距離を取る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8.html",
          "map": "chapter08",
          "parent": "ch08-s01"
        },
        {
          "id": "ch08-s02",
          "flag": "story",
          "step": 2,
          "title": "レノとの戦闘を終えて進む",
          "detail": "再会。レノとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s03",
          "flag": "story",
          "step": 3,
          "title": "エアリスに近づき、脱出口を確認",
          "detail": "屋根裏へ。次の手順は、エアリスに近づき、脱出口を確認。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s04",
          "flag": "story",
          "step": 4,
          "title": "シャンデリアを落とし、階下のエアリスを助け",
          "detail": "エアリスの救出。次の手順は、シャンデリアを落とし、階下のエアリスを助け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s05",
          "flag": "story",
          "step": 5,
          "title": "HOLDで障害物をどけ",
          "detail": "エアリスの救出。次の手順は、HOLDで障害物をどけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s06",
          "flag": "story",
          "step": 6,
          "title": "エアリスと一緒に屋根裏を目指して歩く",
          "detail": "屋根裏へ。エアリスと一緒に屋根裏を目指して歩く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s07",
          "flag": "story",
          "step": 7,
          "title": "駅を目指すで、屋根裏の外へ出",
          "detail": "駅を目指す。駅を目指すで、屋根裏の外へ出。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s08",
          "flag": "story",
          "step": 8,
          "title": "エアリスのいるところまで移動する",
          "detail": "駅を目指す。エアリスのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s09",
          "flag": "story",
          "step": 9,
          "title": "駅を目指すで、エアリスを引き上げ",
          "detail": "駅を目指す。駅を目指すで、エアリスを引き上げ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s10",
          "flag": "story",
          "step": 10,
          "title": "モンスターに警戒しつつ、駅を目指そう",
          "detail": "駅を目指す。次の手順は、モンスターに警戒しつつ、駅を目指そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s11",
          "flag": "story",
          "step": 11,
          "title": "神羅のヘリを目撃する",
          "detail": "駅の様子。次の手順は、神羅のヘリを目撃する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s12",
          "flag": "story",
          "step": 12,
          "title": "タークスを回避してエアリスを家に送り届け",
          "detail": "駅の様子。次の手順は、タークスを回避してエアリスを家に送り届け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s13",
          "flag": "story",
          "step": 13,
          "title": "ゲートのレバーを調べる",
          "detail": "ゲートを迂回。次の手順は、ゲートのレバーを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-04",
          "flag": "optional",
          "title": "開かないゲート",
          "detail": "廃棄指定区のレバーを調べると、向こう側がまだ閉まっていることが分かる。スチールマウンテンの先、ボルトナットヒルズの梯子を登って反対側のレバーを引くと近道が開く。報酬はない。本線を進めていれば、同じ道で開けられる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8ex.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s14",
          "flag": "story",
          "step": 14,
          "title": "コンテナをHOLDで2回押す",
          "detail": "ゲートを迂回。次の手順は、コンテナをHOLDで2回押す。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s15",
          "flag": "story",
          "step": 15,
          "title": "レバーを調べて扉を開ける",
          "detail": "ゲートを迂回。次の手順は、レバーを調べて扉を開ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s16",
          "flag": "story",
          "step": 16,
          "title": "ゲートのレバーを調べる",
          "detail": "ゲートを迂回。次の手順は、ゲートのレバーを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s17",
          "flag": "story",
          "step": 17,
          "title": "コンテナをHOLDで2回押す",
          "detail": "ゲートを迂回。次の手順は、コンテナをHOLDで2回押す。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s18",
          "flag": "story",
          "step": 18,
          "title": "鉄棒にぶら下がって移動する",
          "detail": "ゲートを迂回。次の手順は、鉄棒にぶら下がって移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s19",
          "flag": "story",
          "step": 19,
          "title": "レバーを調べてゲートを開ける",
          "detail": "ゲートを迂回。次の手順は、レバーを調べてゲートを開ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s20",
          "flag": "story",
          "step": 23,
          "title": "エアリスの家の中を探索する",
          "detail": "リーフハウスへの届け物。次の手順は、エアリスの家の中を探索する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s21",
          "flag": "story",
          "step": 24,
          "title": "花壇の花を3回摘む",
          "detail": "リーフハウスへの届け物。次の手順は、花壇の花を3回摘む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s22",
          "flag": "story",
          "step": 25,
          "title": "リーフハウスまで花を届け",
          "detail": "リーフハウスへの届け物。次の手順は、リーフハウスまで花を届け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s23",
          "flag": "story",
          "step": 26,
          "title": "ムギと話して次へ進む",
          "detail": "リーフハウスへの届け物。ムギと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s24",
          "flag": "story",
          "step": 27,
          "title": "エアリスのいるところまで移動する",
          "detail": "リーフハウスへの届け物。エアリスのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s25",
          "flag": "story",
          "step": 28,
          "title": "ムギの後をついて行こう",
          "detail": "秘密基地の危機。次の手順は、ムギの後をついて行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-06",
          "flag": "item",
          "title": "中心街と秘密基地",
          "detail": "町内会のジュークボックスで涙のタンゴ、その近くにスピードドリンク、南の通路に煙幕。マテリア屋で太陽の海岸。十字路にギル。リーフハウスの中にエーテル。秘密基地にモーグリメダル、きもだめしロードの坂の南にメガポーション。エアリスの家のMPアップは、自由に動けるようになってから取りに戻る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "items": [
            {
              "id": "cons-015",
              "qty": 1
            },
            {
              "id": "key-001",
              "qty": 1
            },
            {
              "id": "cons-003",
              "qty": 1
            },
            {
              "id": "mat-im-016",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            }
          ],
          "parent": "ch08-s25"
        },
        {
          "id": "ch08-07",
          "flag": "trophy",
          "trophy": "trophy-flower",
          "title": "リーフハウスに花を飾る",
          "detail": "依頼が開いたあとリーフハウスへ戻ると、アートフラワーが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "parent": "ch08-s25"
        },
        {
          "id": "ch08-08",
          "flag": "deadline",
          "title": "伍番街の依頼は家に入る前まで",
          "detail": "ルードを倒してエアリスの家に入ると、受けている依頼は進めなくなる。6件すべて終えていると、家の中で花と語りての会話が自動で始まる。チャプター9のエアリスの服は、ここでの件数で決まる。2件以下で淡い服、3件以上で濃いピンク、6件すべてで赤。",
          "deadline": "エアリスの家に入る前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-09",
          "flag": "request",
          "title": "極秘開店モーグリショップ",
          "detail": "秘密基地のモーグリの着ぐるみから受ける。会員になると、メダルでディスクや武器と交換できる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "quest": "quest-moguya"
        },
        {
          "id": "ch08-s26",
          "flag": "story",
          "step": 29,
          "title": "秘密基地の危機で、敵を全滅させ",
          "detail": "秘密基地の危機。秘密基地の危機で、敵を全滅させ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s27",
          "flag": "story",
          "step": 30,
          "title": "子供たちとともにで、子供たちを救出",
          "detail": "子供たちとともに。子供たちとともにで、子供たちを救出。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-10",
          "flag": "request",
          "title": "見回りの子供たち",
          "detail": "中心街の子どもを探してから、未開発地区の敵を倒す。クラウドの武器が報酬。このあと英雄の証明と、噂のスラムエンジェルが出る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "quest": "quest-hedgehog-pie-king"
        },
        {
          "id": "ch08-11",
          "flag": "request",
          "title": "暴走兵器",
          "detail": "街の入口付近の機械を片付ける。このあと墓参りの報酬が出る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "quest": "quest-mark-li-monodrive"
        },
        {
          "id": "ch08-12",
          "flag": "request",
          "title": "英雄の証明",
          "detail": "見回りのあと、秘密基地で箱を壊す。ノーマルの課題をすべて終えると、クラッシュヒーローが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "quest": "quest-crush-box"
        },
        {
          "id": "ch08-13",
          "flag": "trophy",
          "trophy": "trophy-crash",
          "title": "クラッシュボックスのノーマルを終える",
          "detail": "ノーマルの課題をすべて終えたら、このカードをオンにする。クラッシュヒーローが一緒にオンになる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "parent": "ch08-s27"
        },
        {
          "id": "ch08-14",
          "flag": "request",
          "title": "噂のスラムエンジェル",
          "detail": "見回りのあと、聞き込みをして対象を倒す。チャプター14のコルネオの隠し財産は、この依頼を終えている必要がある。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "quest": "quest-chromogger"
        },
        {
          "id": "ch08-15",
          "flag": "request",
          "title": "墓参りの報酬",
          "detail": "暴走兵器のあと、墓地の敵を倒して報告する。墓地の鍵はモーグリ店で交換する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "quest": "quest-venomantis"
        },
        {
          "id": "ch08-16",
          "flag": "optional",
          "title": "シヴァの模擬戦",
          "detail": "中心街にチャドリーがいる。報告が進んでいると召喚の模擬戦が開く。はじめて勝つと、たたかう召喚士が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-17",
          "flag": "trophy",
          "trophy": "trophy-summon-win",
          "title": "はじめて召喚獣バトルに勝つ",
          "detail": "チャドリーの模擬戦に勝ったらオンにする。たたかう召喚士が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "parent": "ch08-s27"
        },
        {
          "id": "ch08-s28",
          "flag": "story",
          "step": 31,
          "title": "子供たちとともにで、ムギに近づこう",
          "detail": "子供たちとともに。子供たちとともにで、ムギに近づこう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s29",
          "flag": "story",
          "step": 32,
          "title": "なんでも屋の仕事を引き受け",
          "detail": "子供たちとともに。次の手順は、なんでも屋の仕事を引き受け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s30",
          "flag": "story",
          "step": 23,
          "title": "ルードのいるところまで移動する",
          "detail": "出張なんでも屋。ルードのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-18",
          "flag": "tips",
          "title": "ルードは風で、掴みに注意",
          "detail": "弱点は風。かかと落としは範囲の蹴り。近づくと掴まれる。HPが減ると地走りと、足元を3回爆発させる攻撃が出る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "parent": "ch08-s30"
        },
        {
          "id": "ch08-20",
          "flag": "trophy",
          "trophy": "trophy-ch08",
          "title": "この章を終える",
          "detail": "六番街への道で、再会が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html",
          "map": "chapter08",
          "parent": "ch08-s30"
        },
        {
          "id": "ch08-s31",
          "flag": "story",
          "step": 24,
          "title": "ルードとの戦闘を終えて進む",
          "detail": "出張なんでも屋。ルードとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s32",
          "flag": "story",
          "step": 25,
          "title": "エアリスを家まで送り",
          "detail": "力の代償。次の手順は、エアリスを家まで送り。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s33",
          "flag": "story",
          "step": 26,
          "title": "物音を立てないように階下へ行こう",
          "detail": "力の代償。次の手順は、物音を立てないように階下へ行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        },
        {
          "id": "ch08-s34",
          "flag": "story",
          "step": 27,
          "title": "家を出て、六番街へ向かおう",
          "detail": "力の代償。次の手順は、家を出て、六番街へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter08.html",
          "map": "chapter08"
        }
      ]
    },
    {
      "chapterId": "ch09",
      "items": [
        {
          "id": "ch09-s01",
          "flag": "story",
          "step": 1,
          "title": "近道を通り抜け、七番街スラムへ向かおう",
          "detail": "近道を進む。次の手順は、近道を通り抜け、七番街スラムへ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s02",
          "flag": "story",
          "step": 2,
          "title": "共同作業で、操作盤を調べ",
          "detail": "共同作業。共同作業で、操作盤を調べ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s03",
          "flag": "story",
          "step": 3,
          "title": "再び操作盤を調べ",
          "detail": "共同作業。次の手順は、再び操作盤を調べ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s04",
          "flag": "story",
          "step": 4,
          "title": "焚き火の跡を確認する",
          "detail": "共同作業。次の手順は、焚き火の跡を確認する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s05",
          "flag": "story",
          "step": 5,
          "title": "行き止まりの先へで、扉を調べる",
          "detail": "行き止まりの先へ。行き止まりの先へで、扉を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s06",
          "flag": "story",
          "step": 6,
          "title": "ベグ、ブッチョ、バドとの戦闘を終えて進む",
          "detail": "行き止まりの先へ。ベグ、ブッチョ、バドとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s07",
          "flag": "story",
          "step": 7,
          "title": "三度、操作盤を調べてみる",
          "detail": "共同作業再び。次の手順は、三度、操作盤を調べてみる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s08",
          "flag": "story",
          "step": 6,
          "title": "陥没道路の出口へ向かおう",
          "detail": "別れの時。次の手順は、陥没道路の出口へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09-03"
        },
        {
          "id": "ch09-02",
          "flag": "item",
          "title": "陥没道路で拾うもの",
          "detail": "アームの前のトンネルにモーグリメダル。坂の下のトンネルにギル、下の道にメガポーション。2回目のアームでふうじる、3回目ではんいか。自販機に星降る峡谷。公園の東にエーテル。はんいかはコンテナの上に下ろさないと残る。この1個だけなので、本線の足場へ運ぶ前に拾う。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9.html",
          "map": "chapter09-03",
          "items": [
            {
              "id": "key-001",
              "qty": 1
            },
            {
              "id": "cons-003",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "mat-ma-010",
              "qty": 1
            },
            {
              "id": "mat-im-002",
              "qty": 2
            }
          ],
          "parent": "ch09-s08"
        },
        {
          "id": "ch09-03",
          "flag": "missable",
          "title": "はんいかはアームの上で取る",
          "detail": "3回目のアームで、マテリアの横のコンテナにエアリスを下ろす。先の足場へ運ぶだけだと、はんいかを取りこぼす。",
          "deadline": "3回目のアームを終える前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9.html",
          "map": "chapter09-03"
        },
        {
          "id": "ch09-05",
          "flag": "optional",
          "title": "さすらいのジョニー",
          "detail": "武器屋方面の南でジョニーが走る。わかるとサム側に寄り、この会話はあとでジョニーのトロフィーに必要になる。いいや、または無視するとマム側に寄る。一度無視しても、話を進める前なら北にいるジョニーに話しかけて続けられる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-06",
          "flag": "deadline",
          "title": "サムとマムのどちらに付くか",
          "detail": "コイントスの表か裏はサム側、やめておこうでも、それまでの選択によってはサム側で固定されることがある。マムの3000ギルは大きくマム側、1000ギルもマム側、100ギルは寄らない。エアリスの服を俺は嫌いじゃないと答えるとサム側、言わせとけはマム側。手揉み屋の扉で先へ進むと、街の外に出られなくなり、依頼も閉じる。",
          "deadline": "手揉み屋の扉で先へ進む前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-07",
          "flag": "tips",
          "title": "ヘルハウスは色で弱点が変わる",
          "detail": "受付のあと、炎、氷、雷、風を持っておく。燃えていれば氷、凍っていれば炎、吸い込んでいれば雷、青ければ風。無敵のときは両手を物理で叩く。HPが低いと空から落ちてくるので、大きくダッシュして離れる。勝つと虎のフリーバトルが開く。アイテムは使えず、戦うたびに少し回復する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "parent": "ch09-s08"
        },
        {
          "id": "ch09-08",
          "flag": "request",
          "title": "白熱スクワット",
          "detail": "ジム男男男で受ける。サム側でもマム側でも出る。初級を終えると依頼は終わる。残りの難度も、この街にいるあいだに続けられる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "quest": "quest-dandandan"
        },
        {
          "id": "ch09-09",
          "flag": "request",
          "title": "あくなき夜",
          "detail": "サムのリストのときだけ。服屋のひらめきを取り戻すと、次の闘技場の依頼が出る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "quest": "quest-inspiration"
        },
        {
          "id": "ch09-10",
          "flag": "request",
          "title": "爆裂ダイナマイトナイスバディ",
          "detail": "白熱スクワットとあくなき夜のあと、コロッセオの追加試合になる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "quest": "quest-bomb"
        },
        {
          "id": "ch09-11",
          "flag": "request",
          "title": "盗みの代償",
          "detail": "マムのリストのときだけ。盗賊を倒すと、次の闘技場の依頼が出る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "quest": "quest-grungy-bandit"
        },
        {
          "id": "ch09-12",
          "flag": "request",
          "title": "逆襲の刃",
          "detail": "白熱スクワットと盗みの代償のあと、コロッセオの追加試合になる。報酬の武器は、サム側の追加試合と同じ系統。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "quest": "quest-jury-rigged-cutter"
        },
        {
          "id": "ch09-13",
          "flag": "trophy",
          "trophy": "trophy-squat",
          "title": "スクワットをすべて勝つ",
          "detail": "初級だけでなく、残っている勝負もすべて終えたらオンにする。マッスルキングが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "parent": "ch09-s08"
        },
        {
          "id": "ch09-s09",
          "flag": "story",
          "step": 7,
          "title": "エアリスに別れを告げ、七番街へ向かおう",
          "detail": "別れの時。次の手順は、エアリスに別れを告げ、七番街へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s10",
          "flag": "story",
          "step": 8,
          "title": "チョコボ車の行方を追いかけ",
          "detail": "ティファの行方。次の手順は、チョコボ車の行方を追いかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s11",
          "flag": "story",
          "step": 9,
          "title": "チョコボスタッフに話しかけ",
          "detail": "ティファの行方。次の手順は、チョコボスタッフに話しかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s12",
          "flag": "story",
          "step": 13,
          "title": "「チョコボ小屋のサム」に会おう",
          "detail": "3人の代理人。次の手順は、「チョコボ小屋のサム」に会おう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s13",
          "flag": "story",
          "step": 14,
          "title": "「蜜蜂の館のアニアン」に会おう",
          "detail": "3人の代理人。次の手順は、「蜜蜂の館のアニアン」に会おう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s14",
          "flag": "story",
          "step": 15,
          "title": "「手揉み屋のマム」に会おう",
          "detail": "3人の代理人。次の手順は、「手揉み屋のマム」に会おう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s15",
          "flag": "story",
          "step": 16,
          "title": "改めて、マムに推薦状を頼もうコルネオ杯出場権入手",
          "detail": "マムの要求。次の手順は、改めて、マムに推薦状を頼もうコルネオ杯出場権入手。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s16",
          "flag": "story",
          "step": 17,
          "title": "エレベーターで、地下の控室へ向かおう",
          "detail": "地下闘技場の戦い。次の手順は、エレベーターで、地下の控室へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s17",
          "flag": "story",
          "step": 18,
          "title": "準備を整えたら、決勝戦まで勝ち進もう",
          "detail": "地下闘技場の戦い。次の手順は、準備を整えたら、決勝戦まで勝ち進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s18",
          "flag": "story",
          "step": 19,
          "title": "ゲートキーパーに近づこう",
          "detail": "地下闘技場の戦い。次の手順は、ゲートキーパーに近づこう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s19",
          "flag": "story",
          "step": 20,
          "title": "ボーナスマッチに勝利して、マムに報告",
          "detail": "地下闘技場の戦い。次の手順は、ボーナスマッチに勝利して、マムに報告。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s20",
          "flag": "story",
          "step": 22,
          "title": "手揉み屋のドアを開けてエアリスを迎え",
          "detail": "ティファを救え。次の手順は、手揉み屋のドアを開けてエアリスを迎え。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s21",
          "flag": "story",
          "step": 23,
          "title": "レズリーに話しかけ",
          "detail": "ティファを救え。次の手順は、レズリーに話しかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s22",
          "flag": "story",
          "step": 24,
          "title": "一度出直して、作戦を立て直そうマムの推薦状入手",
          "detail": "ティファを救え。次の手順は、一度出直して、作戦を立て直そうマムの推薦状入手。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s23",
          "flag": "story",
          "step": 25,
          "title": "蜜蜂の館受付に声を掛ける",
          "detail": "エアリスの秘策。次の手順は、蜜蜂の館受付に声を掛ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s24",
          "flag": "story",
          "step": 26,
          "title": "3人のハニーガールと話して次へ進む",
          "detail": "エアリスの秘策。3人のハニーガールと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s25",
          "flag": "story",
          "step": 27,
          "title": "女装のクラウドに2回話しかけるアニアンの推薦状を入手",
          "detail": "エアリスの秘策。次の手順は、女装のクラウドに2回話しかけるアニアンの推薦状を入手。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-14",
          "flag": "missable",
          "title": "クラウドの服は依頼を終えた側",
          "detail": "白熱スクワットを含むサム側の依頼を終えると青、マム側を終えると白。依頼をせずに扉を進むと黒。一方のリストしか受け取れない。",
          "deadline": "手揉み屋の扉で先へ進む前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-16",
          "flag": "trophy",
          "trophy": "trophy-dance",
          "title": "ダンスでピアスをもらう",
          "detail": "本番の高評価でアニヤンのピアスを受け取ると、ダンシングクイーンが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "parent": "ch09-s25"
        },
        {
          "id": "ch09-17",
          "flag": "trophy",
          "trophy": "trophy-dress-3",
          "title": "三人の衣装を見る",
          "detail": "蜜蜂の館の外でクラウドに話しかけると、この周回で三人の衣装が揃って見える。新米ドレッサーが付く。すべての衣装は、別の選択で章をやり直さないと揃わない。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "parent": "ch09-s25"
        },
        {
          "id": "ch09-s26",
          "flag": "story",
          "step": 28,
          "title": "レズリーと話して次へ進む",
          "detail": "オーディション。レズリーと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s27",
          "flag": "story",
          "step": 29,
          "title": "階段を上がり、奥の部屋へ進もう",
          "detail": "オーディション。次の手順は、階段を上がり、奥の部屋へ進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s28",
          "flag": "story",
          "step": 30,
          "title": "オーディションが始まるのを待とう",
          "detail": "オーディション。次の手順は、オーディションが始まるのを待とう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s29",
          "flag": "story",
          "step": 31,
          "title": "オーディション会場へ向かおう",
          "detail": "オーディション。次の手順は、オーディション会場へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-s30",
          "flag": "story",
          "step": 32,
          "title": "クラウドを迎えに行こう",
          "detail": "コルネオとの対決。次の手順は、クラウドを迎えに行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        },
        {
          "id": "ch09-18",
          "flag": "item",
          "title": "コルネオの館の寄り道",
          "detail": "地下の暖炉前にエーテルターボ、自販機でスラムのドン。1階へ降りて戦闘したあと、階段の下の隙間に怒りの指輪。2階の上下と書かれた床を調べると、奥に不思議な水晶。中央の部屋へ進むと対決になる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "items": [
            {
              "id": "cons-005",
              "qty": 1
            },
            {
              "id": "acc-015",
              "qty": 1
            },
            {
              "id": "acc-017",
              "qty": 1
            }
          ],
          "parent": "ch09-s30"
        },
        {
          "id": "ch09-19",
          "flag": "trophy",
          "trophy": "trophy-ch09",
          "title": "この章を終える",
          "detail": "館の奥の対決のあと、欲望の街が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html",
          "map": "chapter09",
          "parent": "ch09-s30"
        },
        {
          "id": "ch09-s31",
          "flag": "story",
          "step": 33,
          "title": "扉を開けて、部屋に突撃",
          "detail": "コルネオとの対決。次の手順は、扉を開けて、部屋に突撃。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter09.html",
          "map": "chapter09"
        }
      ]
    },
    {
      "chapterId": "ch10",
      "items": [
        {
          "id": "ch10-s01",
          "flag": "story",
          "step": 1,
          "title": "ティファかエアリスに声を掛ける",
          "detail": "地下牢からの脱出。次の手順は、ティファかエアリスに声を掛ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-01",
          "flag": "missable",
          "title": "先に起こす相手で好感が変わる",
          "detail": "地下牢でティファとエアリスのどちらを先に起こすかで、その人の好感が上がる。アプスは炎が通り、氷は通らない。範囲技は名前が出たら離れ、突進はガード、掴まれたら交代する。上に登ったあとのじゃれるは横へ避ける。泥水は水たまりから離れる。HPが半分を切ると激しくなり、下水津波の溜めは炎でバーストさせると止められる。",
          "deadline": "二人のどちらを先に起こすか",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s02",
          "flag": "story",
          "step": 2,
          "title": "アプスを倒し、壊れた壁の先を確認",
          "detail": "地下牢からの脱出。次の手順は、アプスを倒し、壊れた壁の先を確認。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s03",
          "flag": "story",
          "step": 3,
          "title": "レバーを調べて水門を開ける",
          "detail": "下水道を進む。次の手順は、レバーを調べて水門を開ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-03",
          "flag": "item",
          "title": "下水道で拾うもの",
          "detail": "第一水路の南にエーテル、水門の奥にフェザーグラブ、第二水路の途中にハイポーション、西の水抜きにギル。大水路の広場にどく。七番地区の第二水路の南に重力珠。第一水路の南の行き止まりにたいせいと精霊のピアス。北が本線。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter10.html",
          "map": "chapter10",
          "items": [
            {
              "id": "cons-002",
              "qty": 1
            },
            {
              "id": "wpn-ti-004",
              "qty": 1
            },
            {
              "id": "acc-021",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "mat-im-003",
              "qty": 1
            },
            {
              "id": "mat-ma-008",
              "qty": 1
            }
          ],
          "parent": "ch10-s03"
        },
        {
          "id": "ch10-s04",
          "flag": "story",
          "step": 4,
          "title": "ロックされた扉を調べる",
          "detail": "合鍵を探す。次の手順は、ロックされた扉を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s05",
          "flag": "story",
          "step": 5,
          "title": "レバーを調べて発電システムを稼働させる",
          "detail": "合鍵を探す。次の手順は、レバーを調べて発電システムを稼働させる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s06",
          "flag": "story",
          "step": 6,
          "title": "レバーを調べて水門を開く",
          "detail": "合鍵を探す。次の手順は、レバーを調べて水門を開く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s07",
          "flag": "story",
          "step": 7,
          "title": "大水路へのカギを拾う",
          "detail": "合鍵を探す。次の手順は、大水路へのカギを拾う。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s08",
          "flag": "story",
          "step": 8,
          "title": "扉のロックを解除して、先に進もう",
          "detail": "合鍵を探す。次の手順は、扉のロックを解除して、先に進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s09",
          "flag": "story",
          "step": 9,
          "title": "レバーを調べて水門を開放",
          "detail": "水門を渡る。次の手順は、レバーを調べて水門を開放。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s10",
          "flag": "story",
          "step": 10,
          "title": "水門を渡るで、水門を渡ろう",
          "detail": "水門を渡る。水門を渡るで、水門を渡ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s11",
          "flag": "story",
          "step": 11,
          "title": "レバーを調べて水門を閉じ",
          "detail": "水門を渡る。次の手順は、レバーを調べて水門を閉じ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s12",
          "flag": "story",
          "step": 12,
          "title": "水門を渡るで、水門を渡ろう",
          "detail": "水門を渡る。水門を渡るで、水門を渡ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s13",
          "flag": "story",
          "step": 13,
          "title": "レバーを調べて、足場を出現させ",
          "detail": "水門を渡る。次の手順は、レバーを調べて、足場を出現させ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s14",
          "flag": "story",
          "step": 14,
          "title": "足場を渡って向こう岸に進もう",
          "detail": "水門を渡る。次の手順は、足場を渡って向こう岸に進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s15",
          "flag": "story",
          "step": 15,
          "title": "排水装置のレバーを調べ",
          "detail": "地上への道。次の手順は、排水装置のレバーを調べ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-04",
          "flag": "tips",
          "title": "排水ポンプは3回止める",
          "detail": "エアリスでバルブを開くと針が動く。ボタンを連打して赤いゲージを伸ばし、針が右に来たところでスティックを下げて赤い範囲で止める。3回成功で終わり、失敗してもやり直せる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter10.html",
          "map": "chapter10",
          "parent": "ch10-s15"
        },
        {
          "id": "ch10-06",
          "flag": "trophy",
          "trophy": "trophy-ch10",
          "title": "この章を終える",
          "detail": "地上へ出るイベントのあと、焦燥の迷宮が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter10.html",
          "map": "chapter10",
          "parent": "ch10-s15"
        },
        {
          "id": "ch10-s16",
          "flag": "story",
          "step": 16,
          "title": "ポンプを操作し、排水パイプのつまりを解消",
          "detail": "手動ポンプを操作。次の手順は、ポンプを操作し、排水パイプのつまりを解消。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s17",
          "flag": "story",
          "step": 17,
          "title": "再度排水装置レバーを起動させ",
          "detail": "手動ポンプを操作。次の手順は、再度排水装置レバーを起動させ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        },
        {
          "id": "ch10-s18",
          "flag": "story",
          "step": 18,
          "title": "モンスターを片付け、ハシゴまで向かおう",
          "detail": "手動ポンプを操作。次の手順は、モンスターを片付け、ハシゴまで向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter10.html",
          "map": "chapter10"
        }
      ]
    },
    {
      "chapterId": "ch11",
      "items": [
        {
          "id": "ch11-s01",
          "flag": "story",
          "step": 1,
          "title": "あかりのついた車両へ向かおう",
          "detail": "あかりを辿る。次の手順は、あかりのついた車両へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s02",
          "flag": "story",
          "step": 2,
          "title": "何者かの気配で、扉の先を確認",
          "detail": "何者かの気配。何者かの気配で、扉の先を確認。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s03",
          "flag": "story",
          "step": 3,
          "title": "ティファとエアリスをボタンで振り払って先に進もう",
          "detail": "車両倉庫を抜ける。次の手順は、ティファとエアリスをボタンで振り払って先に進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-02",
          "flag": "item",
          "title": "操車場と倉庫",
          "detail": "第二操車場の寄り道にミスリルロッドとHPアップ。倉庫2階の東から1階へ降りるとゴシックバングル。制御室の手前の南にメガポーションと煙幕、建物を回るとギル、自販機で闘う者達、その南にモーグリメダル。クレーンのあと列車の中に煙幕、転車台の行き止まりにハイポーション、列車を動かす装置の横にメガポーション。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter11.html",
          "map": "chapter11",
          "items": [
            {
              "id": "arm-010",
              "qty": 1
            },
            {
              "id": "key-001",
              "qty": 1
            },
            {
              "id": "cons-002",
              "qty": 1
            },
            {
              "id": "cons-003",
              "qty": 2
            },
            {
              "id": "wpn-ae-004",
              "qty": 1
            },
            {
              "id": "mat-im-015",
              "qty": 1
            }
          ],
          "parent": "ch11-s03"
        },
        {
          "id": "ch11-03",
          "flag": "tips",
          "title": "グロウガイストは姿で攻撃を変える",
          "detail": "通常は物理、赤く透けているときは魔法。霊体のときは回復魔法がダメージになる。フェニックスの尾は効果が薄く、エリクサーの方が通る。物を投げる攻撃は機材の陰、範囲の声はしびれる。HPが半分を切ると火の弾が出て、炎のそばはダメージになる。倒すとしょうめつが落ち、エーテルターボを盗める。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter11.html",
          "map": "chapter11",
          "parent": "ch11-s03"
        },
        {
          "id": "ch11-s04",
          "flag": "story",
          "step": 4,
          "title": "エアリスに近づこう",
          "detail": "車両倉庫を抜ける。次の手順は、エアリスに近づこう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s05",
          "flag": "story",
          "step": 5,
          "title": "ゴーストとの戦闘を終えて進む",
          "detail": "車両倉庫を抜ける。ゴーストとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s06",
          "flag": "story",
          "step": 6,
          "title": "あかりのついた車両の中を進もう",
          "detail": "墓場行き列車。次の手順は、あかりのついた車両の中を進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s07",
          "flag": "story",
          "step": 7,
          "title": "扉を調べて部屋に入ろう",
          "detail": "制御室に漂う影。次の手順は、扉を調べて部屋に入ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s08",
          "flag": "story",
          "step": 8,
          "title": "扉を調べて部屋に入ろう",
          "detail": "制御室に漂う影。次の手順は、扉を調べて部屋に入ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s09",
          "flag": "story",
          "step": 9,
          "title": "階段を降りて反対側へ行ける道を探そう",
          "detail": "制御室に漂う影。次の手順は、階段を降りて反対側へ行ける道を探そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s10",
          "flag": "story",
          "step": 10,
          "title": "ハシゴを登って反対側へ渡る",
          "detail": "制御室に漂う影。次の手順は、ハシゴを登って反対側へ渡る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s11",
          "flag": "story",
          "step": 11,
          "title": "制御装置を調べる",
          "detail": "制御室に漂う影。次の手順は、制御装置を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s12",
          "flag": "story",
          "step": 12,
          "title": "クロウガイストとの戦闘を終えて進む",
          "detail": "制御室に漂う影。クロウガイストとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s13",
          "flag": "story",
          "step": 13,
          "title": "レバーを調べてクレーンを動かす",
          "detail": "クレーンを操作。次の手順は、レバーを調べてクレーンを動かす。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s14",
          "flag": "story",
          "step": 14,
          "title": "1階に戻り、繋がった車両の先へ進もう",
          "detail": "出口を目指す。次の手順は、1階に戻り、繋がった車両の先へ進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s15",
          "flag": "story",
          "step": 15,
          "title": "レバーを操作して、転車台を動かそう",
          "detail": "塞がれた道。次の手順は、レバーを操作して、転車台を動かそう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s16",
          "flag": "story",
          "step": 16,
          "title": "レバーを操作して、車両を動かそう",
          "detail": "塞がれた道。次の手順は、レバーを操作して、車両を動かそう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s17",
          "flag": "story",
          "step": 17,
          "title": "レバーを操作して車両を動かそう",
          "detail": "進路の確保。次の手順は、レバーを操作して車両を動かそう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s18",
          "flag": "story",
          "step": 18,
          "title": "移動した車両の屋根に登って進もう",
          "detail": "進路の確保。次の手順は、移動した車両の屋根に登って進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s19",
          "flag": "story",
          "step": 19,
          "title": "レバーを操作して車両を動かそう",
          "detail": "進路の確保。次の手順は、レバーを操作して車両を動かそう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-s20",
          "flag": "story",
          "step": 20,
          "title": "エリゴルとの戦闘を終えて進む",
          "detail": "進路の確保。エリゴルとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-04",
          "flag": "missable",
          "title": "エリゴルからストライクロッドを盗む",
          "detail": "ボスの前の自販機で準備する。ぬすむを付け、れいきと、空にいるとき用のかぜを持っておく。ストライクロッドは盗む以外にない。空にいるときはジャンプか風でバーストさせ、地上へ下ろす。車輪に物理は弾かれる。槍はコンテナの裏か真下。車輪が壊せるようになったら、そこを叩いてバーストさせる。",
          "deadline": "エリゴルを倒す前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter11.html",
          "map": "chapter11"
        },
        {
          "id": "ch11-06",
          "flag": "trophy",
          "trophy": "trophy-ch11",
          "title": "この章を終える",
          "detail": "エリゴルの先で、亡霊の墓場が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter11.html",
          "map": "chapter11",
          "parent": "ch11-s20"
        }
      ]
    },
    {
      "chapterId": "ch12",
      "items": [
        {
          "id": "ch12-s01",
          "flag": "story",
          "step": 1,
          "title": "虚無なる魔物+未知なる魔物との戦闘を終えて進む",
          "detail": "支柱へ急げ。虚無なる魔物+未知なる魔物との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s02",
          "flag": "story",
          "step": 2,
          "title": "クラウド一人で支柱へ潜入",
          "detail": "支柱へ急げ。次の手順は、クラウド一人で支柱へ潜入。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s03",
          "flag": "story",
          "step": 3,
          "title": "ビッグスから事情を聞き",
          "detail": "アバランチと合流。次の手順は、ビッグスから事情を聞き。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s04",
          "flag": "story",
          "step": 4,
          "title": "上階で苦戦中のアバランチの元へ急ごう",
          "detail": "アバランチと合流。次の手順は、上階で苦戦中のアバランチの元へ急ごう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s05",
          "flag": "story",
          "step": 5,
          "title": "ウェッジについて行こう",
          "detail": "避難誘導。次の手順は、ウェッジについて行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s06",
          "flag": "story",
          "step": 6,
          "title": "マーレから事情を聞こう",
          "detail": "避難誘導。次の手順は、マーレから事情を聞こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s07",
          "flag": "story",
          "step": 7,
          "title": "ボタンを操作してエアリスを立たせ",
          "detail": "避難誘導。次の手順は、ボタンを操作してエアリスを立たせ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s08",
          "flag": "story",
          "step": 8,
          "title": "ベティを安全な場所へ連れて行こう",
          "detail": "救助。次の手順は、ベティを安全な場所へ連れて行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s09",
          "flag": "story",
          "step": 9,
          "title": "マーレに近づこう",
          "detail": "救助。次の手順は、マーレに近づこう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s10",
          "flag": "story",
          "step": 10,
          "title": "ボタンを操作してエアリスを立たせ",
          "detail": "救助。次の手順は、ボタンを操作してエアリスを立たせ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s11",
          "flag": "story",
          "step": 11,
          "title": "マリンに近づこう",
          "detail": "救助。次の手順は、マリンに近づこう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s12",
          "flag": "story",
          "step": 12,
          "title": "マリンを連れて、安全場所に避難",
          "detail": "救助。次の手順は、マリンを連れて、安全場所に避難。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s13",
          "flag": "story",
          "step": 13,
          "title": "ティファと共に、上階へ進もう",
          "detail": "最上階へ。次の手順は、ティファと共に、上階へ進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s14",
          "flag": "story",
          "step": 14,
          "title": "敵を倒しながら、タークスのヘリを追跡",
          "detail": "最上階へ。次の手順は、敵を倒しながら、タークスのヘリを追跡。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s15",
          "flag": "story",
          "step": 15,
          "title": "ジェシーを助け出そう",
          "detail": "決戦。次の手順は、ジェシーを助け出そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-s16",
          "flag": "story",
          "step": 16,
          "title": "レノとルードを倒そう",
          "detail": "決戦。次の手順は、レノとルードを倒そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        },
        {
          "id": "ch12-03",
          "flag": "tips",
          "title": "レノとルードは役割を分ける",
          "detail": "レノに弱点はない。ブレイブでガードから反撃し、ヘリは無視してレノを削る。爆撃は進行方向へ避ける。ピラミッドに閉じ込められたら交代し、近くの機雷をアビリティか魔法で壊す。レノがしゃがんだら、ルードを風で落とす。ぞくせいと風を武器に付け、かいふくとはんいかで範囲回復にしてもよい。勝ったあとは30秒でティファのもとへ走る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter12.html",
          "map": "chapter12",
          "parent": "ch12-s16"
        },
        {
          "id": "ch12-04",
          "flag": "item",
          "title": "支柱の箱",
          "detail": "3階に重力珠が2つ、5階にエーテル、12階の北の行き止まりにエリクサー。ディスクはない。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter12.html",
          "map": "chapter12",
          "items": [
            {
              "id": "cons-006",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            }
          ],
          "parent": "ch12-s16"
        },
        {
          "id": "ch12-05",
          "flag": "trophy",
          "trophy": "trophy-ch12",
          "title": "この章を終える",
          "detail": "30秒のあとのイベントで、死闘が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter12.html",
          "map": "chapter12",
          "parent": "ch12-s16"
        },
        {
          "id": "ch12-s17",
          "flag": "story",
          "step": 17,
          "title": "脱出方法を探すために、ティファに近づこう",
          "detail": "決戦。次の手順は、脱出方法を探すために、ティファに近づこう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter12.html",
          "map": "chapter12"
        }
      ]
    },
    {
      "chapterId": "ch13",
      "items": [
        {
          "id": "ch13-s01",
          "flag": "story",
          "step": 1,
          "title": "壁をHOLDで動かそう",
          "detail": "ガレキの中を進む。次の手順は、壁をHOLDで動かそう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-02",
          "flag": "item",
          "title": "公園までの拾い物",
          "detail": "六伍街道の建物に星のペンダント。家の2階に幻獣のお守り。旧バイパスにメガポーション。下層に降りた横道にプレートガード、折り返しにエーテルと重力珠。アイテム屋で旅の途中で、武器屋でラージマウス。ソーサラの腕輪とウィザードブレスもある。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter13.html",
          "map": "chapter13",
          "items": [
            {
              "id": "arm-011",
              "qty": 1
            },
            {
              "id": "cons-003",
              "qty": 1
            },
            {
              "id": "acc-011",
              "qty": 1
            },
            {
              "id": "arm-012",
              "qty": 1
            },
            {
              "id": "acc-027",
              "qty": 1
            },
            {
              "id": "wpn-ba-003",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            }
          ],
          "parent": "ch13-s01"
        },
        {
          "id": "ch13-s02",
          "flag": "story",
          "step": 2,
          "title": "伍番街スラムへ向かおう",
          "detail": "残された希望。次の手順は、伍番街スラムへ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s03",
          "flag": "story",
          "step": 3,
          "title": "エアリスの家へ向かおう",
          "detail": "残された希望。次の手順は、エアリスの家へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s04",
          "flag": "story",
          "step": 4,
          "title": "2階にいるマリンの様子を見に行こう",
          "detail": "残された希望。次の手順は、2階にいるマリンの様子を見に行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s05",
          "flag": "story",
          "step": 5,
          "title": "七番街へと続く道で、陥没通路を抜け",
          "detail": "七番街へと続く道。七番街へと続く道で、陥没通路を抜け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s06",
          "flag": "story",
          "step": 6,
          "title": "七番街へと続く道で、崩れた道を迂回",
          "detail": "七番街へと続く道。七番街へと続く道で、崩れた道を迂回。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s07",
          "flag": "story",
          "step": 7,
          "title": "周囲に潜む敵に注意",
          "detail": "七番街へと続く道。次の手順は、周囲に潜む敵に注意。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s08",
          "flag": "story",
          "step": 8,
          "title": "ベグ一味との戦闘を終えて進む",
          "detail": "七番街へと続く道。ベグ一味との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s09",
          "flag": "story",
          "step": 9,
          "title": "準備を整え、地下通路から七番街スラムへ向かおう",
          "detail": "七番街へと続く道。次の手順は、準備を整え、地下通路から七番街スラムへ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-03",
          "flag": "optional",
          "title": "てきのわざを持って地下へ",
          "detail": "伍番街にチャドリーがいるなら、敵を30種みやぶるレポートを渡しててきのわざを買っておく。旧バイパスのヴァギドポリスとスモッグファクト、実験場のヴァギドポリスが自爆を使う。受けたときに確率で覚える。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-05",
          "flag": "item",
          "title": "実験場の檻と箱",
          "detail": "B6の岩の奥にギル、B5にメガポーション、B4にヒールチョーカー、B2の左のファンにエーテル。檻の中にれいき、エーテルターボ、たいせい。自販機にFFVIIメインテーマ。ボスはミスリルクローを落とす。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter13.html",
          "map": "chapter13",
          "items": [
            {
              "id": "acc-026",
              "qty": 1
            },
            {
              "id": "cons-003",
              "qty": 1
            },
            {
              "id": "cons-005",
              "qty": 1
            },
            {
              "id": "wpn-ti-005",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "mat-im-003",
              "qty": 1
            },
            {
              "id": "mat-ma-005",
              "qty": 1
            }
          ],
          "parent": "ch13-s09"
        },
        {
          "id": "ch13-s10",
          "flag": "story",
          "step": 10,
          "title": "鉄板をホールドで押し倒そう",
          "detail": "帰るべき場所。次の手順は、鉄板をホールドで押し倒そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s11",
          "flag": "story",
          "step": 11,
          "title": "ウェッジの猫を追いかけ",
          "detail": "帰るべき場所。次の手順は、ウェッジの猫を追いかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s12",
          "flag": "story",
          "step": 12,
          "title": "帰るべき場所で、ウェッジを救出",
          "detail": "帰るべき場所。帰るべき場所で、ウェッジを救出。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s13",
          "flag": "story",
          "step": 13,
          "title": "ボタンでガレキを破壊",
          "detail": "孤高のバレット。次の手順は、ボタンでガレキを破壊。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s14",
          "flag": "story",
          "step": 14,
          "title": "ボタンでガレキを破壊",
          "detail": "孤高のバレット。次の手順は、ボタンでガレキを破壊。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s15",
          "flag": "story",
          "step": 15,
          "title": "ボタンでガレキを破壊",
          "detail": "孤高のバレット。次の手順は、ボタンでガレキを破壊。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s16",
          "flag": "story",
          "step": 16,
          "title": "ボタンでファンを破壊",
          "detail": "孤高のバレット。次の手順は、ボタンでファンを破壊。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s17",
          "flag": "story",
          "step": 17,
          "title": "怪奇虫の巣を破壊",
          "detail": "ティファと合流。怪奇虫の巣を破壊。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s18",
          "flag": "story",
          "step": 18,
          "title": "応戦中のティファと合流",
          "detail": "ティファと合流。次の手順は、応戦中のティファと合流。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s19",
          "flag": "story",
          "step": 19,
          "title": "怪奇虫を全滅させる",
          "detail": "ティファと合流。次の手順は、怪奇虫を全滅させる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s20",
          "flag": "story",
          "step": 20,
          "title": "ウェッジに近づこう",
          "detail": "ウェッジの元へ。次の手順は、ウェッジに近づこう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s21",
          "flag": "story",
          "step": 21,
          "title": "アノニマスとの戦闘を終えて進む",
          "detail": "ウェッジの元へ。アノニマスとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-06",
          "flag": "tips",
          "title": "アノニマスは心臓を出す",
          "detail": "本体も雑魚のネムレスも氷。雷はネムレスに通りにくい。雑魚を先に片付け、2回目の援軍で2階へ上がれる。触手を壊すと心臓が弱点になる。放電はコンテナの裏。ジャンプはガード。武器に氷を付け、はんいかとれいきで範囲にしてもよい。シヴァがいると楽。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter13.html",
          "map": "chapter13",
          "parent": "ch13-s21"
        },
        {
          "id": "ch13-07",
          "flag": "trophy",
          "trophy": "trophy-ch13",
          "title": "この章を終える",
          "detail": "地上の会話のあと、醒めない悪夢が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter13.html",
          "map": "chapter13",
          "parent": "ch13-s21"
        },
        {
          "id": "ch13-s22",
          "flag": "story",
          "step": 22,
          "title": "ボタンで壁を壊そう",
          "detail": "ウェッジの元へ。次の手順は、ボタンで壁を壊そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        },
        {
          "id": "ch13-s23",
          "flag": "story",
          "step": 23,
          "title": "ウェッジを安全な場所に連れて行こう",
          "detail": "帰還。次の手順は、ウェッジを安全な場所に連れて行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter13.html",
          "map": "chapter13"
        }
      ]
    },
    {
      "chapterId": "ch14",
      "items": [
        {
          "id": "ch14-s01",
          "flag": "story",
          "step": 1,
          "title": "仲間の一人のいるところまで移動する",
          "detail": "それぞれの決意。仲間の一人のいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-01",
          "flag": "item",
          "title": "家を出たところのマテリア",
          "detail": "庭の中央付近にあるきまにあを拾う。歩数で別のマテリアに変わる。北西の丘にMPアップがあるが、前に拾っていればない。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "items": [
            {
              "id": "mat-im-032",
              "qty": 1
            },
            {
              "id": "mat-im-016",
              "qty": 1
            }
          ],
          "parent": "ch14-s01"
        },
        {
          "id": "ch14-02",
          "flag": "missable",
          "title": "あるきまにあは家の前だけ",
          "detail": "あるきまにあはこの場にしか落ちていない。拾って装備し、歩いて変化させる。家を出てすぐに回収する。",
          "deadline": "エアリスの家を出た直後",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-03",
          "flag": "deadline",
          "title": "最後の依頼は壁を越える前",
          "detail": "この章でなんでも屋は最後まで受けられる。壁を越えると進めなくなる。16から24をすべて終えると、目的地への道にスラムエンジェルの手紙が落ち、ぞくせいがもう1個手に入る。素通りしない。",
          "deadline": "壁を越える前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-04",
          "flag": "request",
          "title": "消えた子供たち",
          "detail": "伍番街の中心で受ける。子どもを探し、報告する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "quest": "quest-phantom"
        },
        {
          "id": "ch14-05",
          "flag": "request",
          "title": "チョコボを探せ",
          "detail": "中心街で自動的に話が始まる。この時点でチョコボ車が使え、1回300ギル。3羽戻すと無料になる。他の依頼の前に終えると移動が短い。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "quest": "quest-quest17"
        },
        {
          "id": "ch14-06",
          "flag": "request",
          "title": "手下のうらみ",
          "detail": "ウォール・マーケットで受ける。コルネオの手下を片付ける。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter09",
          "quest": "quest-tonberry"
        },
        {
          "id": "ch14-07",
          "flag": "request",
          "title": "揺れる想い",
          "detail": "ウォール・マーケットの懸垂。初級で依頼は終わり、残りの勝負もこの章のうちに続けられる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter09",
          "quest": "quest-kensui"
        },
        {
          "id": "ch14-08",
          "flag": "trophy",
          "trophy": "trophy-pullup",
          "title": "けんすい勝負をすべて勝つ",
          "detail": "残っている難度も終えたらオンにする。マッスルクイーンが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "parent": "ch14-s01"
        },
        {
          "id": "ch14-09",
          "flag": "request",
          "title": "音楽の力",
          "detail": "ウォール・マーケットで受ける。この街のディスクは、この依頼で回収する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter09",
          "quest": "quest-musicpower"
        },
        {
          "id": "ch14-10",
          "flag": "request",
          "title": "秘伝の薬",
          "detail": "伍番街の中心で受ける。材料の一つは、地底の咆哮で手に入る角。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "quest": "quest-hiden"
        },
        {
          "id": "ch14-11",
          "flag": "request",
          "title": "おてんば盗賊",
          "detail": "伍番街駅のジョニーから受ける。クリアすると宝物庫の鍵がもらえ、盗まれた財布の続きが開く。コルネオの隠し財産は、受注だけ先にして、鍵を持ってから進める。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter09",
          "quest": "quest-helhound"
        },
        {
          "id": "ch14-12",
          "flag": "optional",
          "title": "財布をジョニーに返す",
          "detail": "おてんば盗賊のあと、駅のジョニーに話す。チャプター9でさすらいのジョニーを体験し、あくなき夜も終えていると、ここでジョニーのマブダチが付く。一つでも抜けていると、クリア後にその章からやり直す。普通の立ち話は条件に入らない。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14ex.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-13",
          "flag": "trophy",
          "trophy": "trophy-johnny",
          "title": "ジョニーの出来事をそろえる",
          "detail": "財布を返し、過去のジョニーの出来事が揃っていたらオンにする。ジョニーのマブダチが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14ex.html",
          "map": "chapter08",
          "parent": "ch14-s01"
        },
        {
          "id": "ch14-s02",
          "flag": "story",
          "step": 2,
          "title": "ドン・コルネオの元へ向かう",
          "detail": "情報収集。次の手順は、ドン・コルネオの元へ向かう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter09"
        },
        {
          "id": "ch14-14",
          "flag": "request",
          "title": "コルネオの隠し財産",
          "detail": "ステーション通りのY字にいる記者から受ける。おてんば盗賊で鍵を取ってから、下水道の宝物庫へ入る。モーグリメダルが足りなければ、スチールマウンテンの箱を壊しに戻る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter09",
          "quest": "quest-sahagin-prince"
        },
        {
          "id": "ch14-15",
          "flag": "request",
          "title": "地底の咆哮",
          "detail": "みどり公園のワイマーから受ける。実験場の奥の大型を倒す。角は秘伝の薬に使う。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "quest": "quest-type-o-behemoth"
        },
        {
          "id": "ch14-17",
          "flag": "optional",
          "title": "壁の前に残っていること",
          "detail": "サラに話すとクラッシュボックスのハードが遊べる。すべて終えるとレジェンドクラッシャー。モーグリ店で剣技指南書、射撃マニュアル、格闘術秘伝書、星の神秘の書がメダル5枚で交換できる。コロッセオのフリーバトルをはじめて勝つとカムバックチャンピオン。依頼を終えて手紙を拾ってから、壁を越える。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-18",
          "flag": "trophy",
          "trophy": "trophy-crash-hard",
          "title": "クラッシュボックスのハードを終える",
          "detail": "ハードの課題をすべて終えたらオンにする。レジェンドクラッシャーが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "parent": "ch14-s02"
        },
        {
          "id": "ch14-19",
          "flag": "trophy",
          "trophy": "trophy-arena",
          "title": "フリーバトルに勝つ",
          "detail": "コロッセオのフリーバトルをはじめて勝ったらオンにする。カムバックチャンピオンが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "parent": "ch14-s02"
        },
        {
          "id": "ch14-20",
          "flag": "trophy",
          "trophy": "trophy-letter",
          "title": "スラムエンジェルの手紙を拾う",
          "detail": "依頼をすべて終えた道に落ちている手紙を拾うと、天使の感謝状が付き、ぞくせいがもう1個手に入る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "parent": "ch14-s02"
        },
        {
          "id": "ch14-21",
          "flag": "trophy",
          "trophy": "trophy-ch14",
          "title": "この章を終える",
          "detail": "壁を越えたあと、希望への救済が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter14.html",
          "map": "chapter08",
          "parent": "ch14-s02"
        },
        {
          "id": "ch14-s03",
          "flag": "story",
          "step": 3,
          "title": "キリエの演説を聞く",
          "detail": "情報収集。次の手順は、キリエの演説を聞く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s04",
          "flag": "story",
          "step": 4,
          "title": "レズリーと話して次へ進む",
          "detail": "情報収集。レズリーと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s05",
          "flag": "story",
          "step": 5,
          "title": "レズリーのいるところまで移動する",
          "detail": "地下下水道を進む。レズリーのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s06",
          "flag": "story",
          "step": 6,
          "title": "レズリーの案内に従う",
          "detail": "隠れ家へ。次の手順は、レズリーの案内に従う。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s07",
          "flag": "story",
          "step": 7,
          "title": "レズリーの案内に従う",
          "detail": "隠れ家へ。次の手順は、レズリーの案内に従う。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s08",
          "flag": "story",
          "step": 8,
          "title": "鍵を奪ったアプスベビーを追いかける",
          "detail": "隠れ家へ。次の手順は、鍵を奪ったアプスベビーを追いかける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s09",
          "flag": "story",
          "step": 9,
          "title": "アプスベビーを追いかける",
          "detail": "鍵の奪還。次の手順は、アプスベビーを追いかける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s10",
          "flag": "story",
          "step": 10,
          "title": "アプスベビーのいるところまで移動する",
          "detail": "鍵の奪還。アプスベビーのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s11",
          "flag": "story",
          "step": 11,
          "title": "アプスベビーをはさみ撃ちにする",
          "detail": "鍵の奪還。次の手順は、アプスベビーをはさみ撃ちにする。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s12",
          "flag": "story",
          "step": 12,
          "title": "どろぼうアプス+アプスベビーとの戦闘を終えて進む",
          "detail": "鍵の奪還。どろぼうアプス+アプスベビーとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s13",
          "flag": "story",
          "step": 13,
          "title": "レズリーの案内に従う",
          "detail": "鍵の奪還。次の手順は、レズリーの案内に従う。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s14",
          "flag": "story",
          "step": 12,
          "title": "レズリーの後を追おう",
          "detail": "因縁の決着。次の手順は、レズリーの後を追おう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s15",
          "flag": "story",
          "step": 13,
          "title": "アプスとの戦闘を終えて進む",
          "detail": "因縁の決着。アプスとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s16",
          "flag": "story",
          "step": 14,
          "title": "レズリーの安否を確かめ",
          "detail": "再会のために。次の手順は、レズリーの安否を確かめ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s17",
          "flag": "story",
          "step": 15,
          "title": "地上に戻り、上へ行く方法を聞き出そう",
          "detail": "再会のために。次の手順は、地上に戻り、上へ行く方法を聞き出そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        },
        {
          "id": "ch14-s18",
          "flag": "story",
          "step": 16,
          "title": "レズリーからワイヤーガンを受け取る",
          "detail": "壁を超える。次の手順は、レズリーからワイヤーガンを受け取る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter14.html",
          "map": "chapter08"
        }
      ]
    },
    {
      "chapterId": "ch15",
      "items": [
        {
          "id": "ch15-s01",
          "flag": "story",
          "step": 1,
          "title": "自警団の男のいるところまで移動する",
          "detail": "崩れた街。自警団の男のいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-02",
          "flag": "item",
          "title": "上る途中の箱",
          "detail": "道中の自販機で闇に潜むと、じかんが買える。同じ高さの短いワイヤーの先と、高い足場に箱がある。先へ進む前に、その階を一周する。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter15.html",
          "map": "chapter15",
          "items": [
            {
              "id": "mat-ma-012",
              "qty": 1
            }
          ],
          "parent": "ch15-s01"
        },
        {
          "id": "ch15-s02",
          "flag": "story",
          "step": 2,
          "title": "ワイヤーガンが使えそうな場所を探そう",
          "detail": "上を目指して。次の手順は、ワイヤーガンが使えそうな場所を探そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s03",
          "flag": "story",
          "step": 3,
          "title": "ワイヤーガンが使えそうな場所を探そう",
          "detail": "上を目指して。次の手順は、ワイヤーガンが使えそうな場所を探そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s04",
          "flag": "story",
          "step": 4,
          "title": "神羅の増援を蹴散らし、先へ進もう",
          "detail": "捜索隊をかわす。次の手順は、神羅の増援を蹴散らし、先へ進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s05",
          "flag": "story",
          "step": 5,
          "title": "ワイヤーガンを使い、ビルを登って行こう",
          "detail": "崩れかけたビル。次の手順は、ワイヤーガンを使い、ビルを登って行こう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s06",
          "flag": "story",
          "step": 6,
          "title": "登れそうな場所を探しながら、上を目指そう",
          "detail": "崩れかけたビル。次の手順は、登れそうな場所を探しながら、上を目指そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s07",
          "flag": "story",
          "step": 7,
          "title": "グレネードソーサーを倒して先に進もう",
          "detail": "崩れかけたビル。次の手順は、グレネードソーサーを倒して先に進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s08",
          "flag": "story",
          "step": 7,
          "title": "ヘリガンナーの銃撃をかわしながら進む",
          "detail": "銃撃戦。次の手順は、ヘリガンナーの銃撃をかわしながら進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-03",
          "flag": "tips",
          "title": "ヘリガンナーは雷と風",
          "detail": "弱点は雷と風。倒すとマキナバングルが落ちる。上まで登ったら、残りの回復を使ってから挑む。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter15.html",
          "map": "chapter15",
          "parent": "ch15-s08"
        },
        {
          "id": "ch15-04",
          "flag": "trophy",
          "trophy": "trophy-ch15",
          "title": "この章を終える",
          "detail": "ヘリガンナーを倒すと、腐ったピザが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter15.html",
          "map": "chapter15",
          "parent": "ch15-s08"
        },
        {
          "id": "ch15-s09",
          "flag": "story",
          "step": 9,
          "title": "ワイヤーガンを使って登る",
          "detail": "プレートの上へ。次の手順は、ワイヤーガンを使って登る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s10",
          "flag": "story",
          "step": 10,
          "title": "ワイヤーガンを使って登る",
          "detail": "プレートの上へ。次の手順は、ワイヤーガンを使って登る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s11",
          "flag": "story",
          "step": 11,
          "title": "ヘリガンナーから逃げる",
          "detail": "プレートの上へ。次の手順は、ヘリガンナーから逃げる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        },
        {
          "id": "ch15-s12",
          "flag": "story",
          "step": 12,
          "title": "ヘリガンナーとの戦闘を終えて進む",
          "detail": "プレートの上へ。ヘリガンナーとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter15.html",
          "map": "chapter15"
        }
      ]
    },
    {
      "chapterId": "ch16",
      "items": [
        {
          "id": "ch16-s01",
          "flag": "story",
          "step": 1,
          "title": "トラックに乗り移ろう",
          "detail": "潜入。次の手順は、トラックに乗り移ろう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-02",
          "flag": "item",
          "title": "外周とロビー",
          "detail": "降りる途中にハイポーション、準備の部屋にエーテルターボ、北側にファイアカクテル、広場の東にメガポーション、端末の部屋の南西にモーグリメダル、東の通路にギル。雲梯の先にグランドグラブ。3階の東の扉の奥にヘビィメタル。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter16.html",
          "map": "chapter16",
          "items": [
            {
              "id": "cons-021",
              "qty": 1
            },
            {
              "id": "key-001",
              "qty": 1
            },
            {
              "id": "cons-002",
              "qty": 1
            },
            {
              "id": "cons-003",
              "qty": 1
            },
            {
              "id": "cons-005",
              "qty": 1
            },
            {
              "id": "wpn-ti-006",
              "qty": 1
            }
          ],
          "parent": "ch16-s01"
        },
        {
          "id": "ch16-03",
          "flag": "missable",
          "title": "グランドグラブはティファのあいだだけ",
          "detail": "ロビーへ落ちたあと、最初の梯子には登らない。天井を伝った行き止まりにグランドグラブがある。上へ戻ると、この箱には戻れない。",
          "deadline": "ティファが上の階へ戻る前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-05",
          "flag": "item",
          "title": "上層の拾い物",
          "detail": "62階の北にギル。ハットに払うとハートビート。63階のジュークボックスにスカーレットのテーマ。ダクトの左の行き止まりにHPアップ。その先の部屋に毒消し、スピードドリンク、万能薬。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter16.html",
          "map": "chapter16",
          "items": [
            {
              "id": "cons-015",
              "qty": 1
            },
            {
              "id": "wpn-ba-006",
              "qty": 1
            },
            {
              "id": "mat-im-015",
              "qty": 1
            },
            {
              "id": "cons-008",
              "qty": 1
            },
            {
              "id": "cons-014",
              "qty": 1
            }
          ],
          "parent": "ch16-s01"
        },
        {
          "id": "ch16-06",
          "flag": "missable",
          "title": "ハートビートは10000ギル",
          "detail": "62階のハットに10000ギルを渡すと、バレットのハートビートがもらえる。この会話でしか手に入らない。この階にいるうちに払う。",
          "deadline": "62階を離れる前",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-07",
          "flag": "trophy",
          "trophy": "trophy-music-all",
          "title": "ディスクが揃っていればここで完成",
          "detail": "スカーレットのテーマを取り、それまでのディスクを残していなければ、ミュージックマエストロが付く。抜けがあるときは、その章をやり直してからここへ戻る。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter16.html",
          "map": "chapter16",
          "parent": "ch16-s01"
        },
        {
          "id": "ch16-09",
          "flag": "trophy",
          "trophy": "trophy-ch16",
          "title": "この章を終える",
          "detail": "研究フロアを抜けると、ノーアポイントメントが付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter16.html",
          "map": "chapter16",
          "parent": "ch16-s01"
        },
        {
          "id": "ch16-s02",
          "flag": "story",
          "step": 2,
          "title": "敵を倒しつつ、先に進む",
          "detail": "地下駐車場を突破。次の手順は、敵を倒しつつ、先に進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s03",
          "flag": "story",
          "step": 3,
          "title": "通用口から、ビル内部へ潜入",
          "detail": "神羅ビルの情報。次の手順は、通用口から、ビル内部へ潜入。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s04",
          "flag": "story",
          "step": 4,
          "title": "上へ向かう方法を探そう",
          "detail": "神羅ビルの情報。次の手順は、上へ向かう方法を探そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s05",
          "flag": "story",
          "step": 5,
          "title": "カードキー入手で、端末を調べる",
          "detail": "カードキー入手。カードキー入手で、端末を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s06",
          "flag": "story",
          "step": 6,
          "title": "照明器具に飛び移って進む",
          "detail": "カードキー入手。次の手順は、照明器具に飛び移って進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s07",
          "flag": "story",
          "step": 7,
          "title": "照明器具に飛び移るのを失敗して落下する",
          "detail": "カードキー入手。次の手順は、照明器具に飛び移るのを失敗して落下する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s08",
          "flag": "story",
          "step": 8,
          "title": "車の屋根とオブジェをつたって移動する",
          "detail": "カードキー入手。次の手順は、車の屋根とオブジェをつたって移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s09",
          "flag": "story",
          "step": 9,
          "title": "天井の格子を伝って移動する",
          "detail": "カードキー入手。次の手順は、天井の格子を伝って移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s10",
          "flag": "story",
          "step": 10,
          "title": "照明器具に飛び移る",
          "detail": "カードキー入手。次の手順は、照明器具に飛び移る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s11",
          "flag": "story",
          "step": 11,
          "title": "照明に飛び移って受付ブースの上から侵入する",
          "detail": "カードキー入手。次の手順は、照明に飛び移って受付ブースの上から侵入する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s12",
          "flag": "story",
          "step": 12,
          "title": "受付のバリアを解除する入手神羅ビルカードキー",
          "detail": "スカイフロアを目指す。次の手順は、受付のバリアを解除する入手神羅ビルカードキー。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s13",
          "flag": "story",
          "step": 13,
          "title": "カードキーの端末を調べる",
          "detail": "スカイフロアを目指す。次の手順は、カードキーの端末を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s14",
          "flag": "story",
          "step": 14,
          "title": "見学ツアーで、受付に話しかけ",
          "detail": "見学ツアー。見学ツアーで、受付に話しかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s15",
          "flag": "story",
          "step": 15,
          "title": "更新されたカードキーで、先に進もう",
          "detail": "見学ツアー。次の手順は、更新されたカードキーで、先に進もう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s16",
          "flag": "story",
          "step": 16,
          "title": "カードキーの端末を調べる",
          "detail": "見学ツアー。次の手順は、カードキーの端末を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s17",
          "flag": "story",
          "step": 17,
          "title": "ナビゲーターの説明を聞き終える",
          "detail": "見学ツアー。次の手順は、ナビゲーターの説明を聞き終える。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s18",
          "flag": "story",
          "step": 18,
          "title": "ナビゲーターの説明を聞き終える",
          "detail": "見学ツアー。次の手順は、ナビゲーターの説明を聞き終える。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s19",
          "flag": "story",
          "step": 19,
          "title": "見学ツアーで、装置を調べる",
          "detail": "見学ツアー。見学ツアーで、装置を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s20",
          "flag": "story",
          "step": 20,
          "title": "見学ツアーで、装置を調べる",
          "detail": "見学ツアー。見学ツアーで、装置を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s21",
          "flag": "story",
          "step": 21,
          "title": "協力者で、扉を調べ",
          "detail": "協力者。協力者で、扉を調べ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s22",
          "flag": "story",
          "step": 22,
          "title": "カードキーの端末を調べる",
          "detail": "協力者。次の手順は、カードキーの端末を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s23",
          "flag": "story",
          "step": 23,
          "title": "神羅社員と話して次へ進む",
          "detail": "協力者。神羅社員と話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s24",
          "flag": "story",
          "step": 24,
          "title": "チーム「市長最高」で勝利する",
          "detail": "協力者。次の手順は、チーム「市長最高」で勝利する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s25",
          "flag": "story",
          "step": 25,
          "title": "協力者から事情を聞く",
          "detail": "協力者。次の手順は、協力者から事情を聞く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s26",
          "flag": "story",
          "step": 26,
          "title": "64Fミーティングフロアへ移動する",
          "detail": "協力者。次の手順は、64Fミーティングフロアへ移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s27",
          "flag": "story",
          "step": 27,
          "title": "カードキーの端末を調べる",
          "detail": "敵情視察。次の手順は、カードキーの端末を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s28",
          "flag": "story",
          "step": 28,
          "title": "男子トイレ個室の天井を調べる",
          "detail": "敵情視察。次の手順は、男子トイレ個室の天井を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s29",
          "flag": "story",
          "step": 29,
          "title": "敵情視察で、通気口を調べる",
          "detail": "敵情視察。敵情視察で、通気口を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s30",
          "flag": "story",
          "step": 30,
          "title": "扉のいるところまで移動する",
          "detail": "敵情視察。扉のいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s31",
          "flag": "story",
          "step": 31,
          "title": "宝条のいるところまで移動する",
          "detail": "エアリス救出作戦。宝条のいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s32",
          "flag": "story",
          "step": 32,
          "title": "サンプル:H0512との戦闘を終えて進む",
          "detail": "エアリス救出作戦。サンプル:H0512との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s33",
          "flag": "story",
          "step": 33,
          "title": "エレベーターに乗り、宝条を追いかけ",
          "detail": "エアリス救出作戦。次の手順は、エレベーターに乗り、宝条を追いかけ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s34",
          "flag": "story",
          "step": 34,
          "title": "敵を倒してエアリスを救い出そう",
          "detail": "エアリス救出作戦。次の手順は、敵を倒してエアリスを救い出そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        },
        {
          "id": "ch16-s35",
          "flag": "story",
          "step": 35,
          "title": "・・・の元へ向かおう",
          "detail": "エアリス救出作戦。次の手順は、・・・の元へ向かおう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter16.html",
          "map": "chapter16"
        }
      ]
    },
    {
      "chapterId": "ch17",
      "items": [
        {
          "id": "ch17-s01",
          "flag": "story",
          "step": 1,
          "title": "エアリスと話して次へ進む",
          "detail": "脱出方法を探る。エアリスと話して次へ進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-02",
          "flag": "item",
          "title": "ドラムの主な箱",
          "detail": "開始部屋にフルメタルロッド。小部屋にフェニックスの尾とカエルの指輪、通路にエーテル。ポッドの先にフェニックスの尾、第三層にツインスティンガーとギル。シャッターの奥にフォースブレス、T字を右へミスティーク、南西にチェインバングル。中央にじかん、横道にどく。エレベーターに乗る前なら、取りこぼしへ戻れる。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter17.html",
          "map": "chapter17",
          "items": [
            {
              "id": "cons-007",
              "qty": 2
            },
            {
              "id": "wpn-ae-006",
              "qty": 1
            },
            {
              "id": "arm-018",
              "qty": 1
            },
            {
              "id": "arm-019",
              "qty": 1
            },
            {
              "id": "acc-018",
              "qty": 1
            },
            {
              "id": "arm-021",
              "qty": 1
            },
            {
              "id": "cons-004",
              "qty": 1
            },
            {
              "id": "mat-ma-012",
              "qty": 1
            },
            {
              "id": "mat-ma-008",
              "qty": 1
            }
          ],
          "parent": "ch17-s01"
        },
        {
          "id": "ch17-s02",
          "flag": "story",
          "step": 2,
          "title": "モニターのいるところまで移動する",
          "detail": "脱出方法を探る。モニターのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s03",
          "flag": "story",
          "step": 3,
          "title": "エレベーターのスイッチを調べる",
          "detail": "脱出方法を探る。次の手順は、エレベーターのスイッチを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s04",
          "flag": "story",
          "step": 4,
          "title": "ネムレス4体を全滅させる",
          "detail": "脱出方法を探る。次の手順は、ネムレス4体を全滅させる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s05",
          "flag": "story",
          "step": 5,
          "title": "エレベーターのスィッチを調べる",
          "detail": "脱出方法を探る。次の手順は、エレベーターのスィッチを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s06",
          "flag": "story",
          "step": 6,
          "title": "ジェノバのいるところまで移動する",
          "detail": "脱出方法を探る。ジェノバのいるところまで移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s07",
          "flag": "story",
          "step": 7,
          "title": "仲間を探しに行く",
          "detail": "仲間との合流。次の手順は、仲間を探しに行く。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s08",
          "flag": "story",
          "step": 8,
          "title": "レバーを引いて、先に進む",
          "detail": "仲間との合流。次の手順は、レバーを引いて、先に進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s09",
          "flag": "story",
          "step": 9,
          "title": "レッドXIIIと協力して敵との戦闘を終えて進む",
          "detail": "仲間との合流。レッドXIIIと協力して敵との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s10",
          "flag": "story",
          "step": 10,
          "title": "レッドXIIIにレバーを操作してもらう",
          "detail": "仲間との合流。次の手順は、レッドXIIIにレバーを操作してもらう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s11",
          "flag": "story",
          "step": 11,
          "title": "バレットと協力して敵との戦闘を終えて進む",
          "detail": "バレットと合流。バレットと協力して敵との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s12",
          "flag": "story",
          "step": 12,
          "title": "レッドXIIIにレバーを操作してもらう",
          "detail": "バレットと合流。次の手順は、レッドXIIIにレバーを操作してもらう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s13",
          "flag": "story",
          "step": 13,
          "title": "バレットと合流で、通信機を調べる",
          "detail": "バレットと合流。バレットと合流で、通信機を調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s14",
          "flag": "story",
          "step": 15,
          "title": "レバーを調べて、第6層と第4層に橋桁用のカプセルを出現さ",
          "detail": "第三研究室。次の手順は、レバーを調べて、第6層と第4層に橋桁用のカプセルを出現させる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s15",
          "flag": "story",
          "step": 16,
          "title": "通信機を調べて、クラウドに報告する",
          "detail": "第三研究室。次の手順は、通信機を調べて、クラウドに報告する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s16",
          "flag": "story",
          "step": 17,
          "title": "パーティを切り替えて、中央端末を目指す",
          "detail": "中央端末を操作。次の手順は、パーティを切り替えて、中央端末を目指す。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s17",
          "flag": "story",
          "step": 18,
          "title": "レバーを調べて橋を出現させる",
          "detail": "中央端末を操作。次の手順は、レバーを調べて橋を出現させる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s18",
          "flag": "story",
          "step": 19,
          "title": "03のスィッチを操作して、第三研究室の扉を開放する",
          "detail": "中央端末を操作。次の手順は、03のスィッチを操作して、第三研究室の扉を開放する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s19",
          "flag": "story",
          "step": 20,
          "title": "通信機を調べて、ティファに報告する",
          "detail": "中央端末を操作。次の手順は、通信機を調べて、ティファに報告する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s20",
          "flag": "story",
          "step": 21,
          "title": "パーティを切り替えて、第三研究室へ移動する",
          "detail": "中央端末を操作。次の手順は、パーティを切り替えて、第三研究室へ移動する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s21",
          "flag": "story",
          "step": 22,
          "title": "レバーを調べてシャッターを開ける",
          "detail": "中央端末を操作。次の手順は、レバーを調べてシャッターを開ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s22",
          "flag": "story",
          "step": 23,
          "title": "レベーを調べてシャッターを開け",
          "detail": "中央端末を操作。次の手順は、レベーを調べてシャッターを開け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s23",
          "flag": "story",
          "step": 24,
          "title": "パイプの上を渡る",
          "detail": "中央端末を操作。次の手順は、パイプの上を渡る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s24",
          "flag": "story",
          "step": 25,
          "title": "ゼネネ2体との戦闘を終えて進む",
          "detail": "中央端末を操作。ゼネネ2体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s25",
          "flag": "story",
          "step": 26,
          "title": "レバーを引いて、足場を出現さる",
          "detail": "中央端末を操作。次の手順は、レバーを引いて、足場を出現さる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s26",
          "flag": "story",
          "step": 27,
          "title": "通信機を調べて、でクラウドに報告する",
          "detail": "中央端末を操作。次の手順は、通信機を調べて、でクラウドに報告する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s27",
          "flag": "story",
          "step": 28,
          "title": "スィッチを調べて、第二研究室の扉を開ける",
          "detail": "第二研究室。次の手順は、スィッチを調べて、第二研究室の扉を開ける。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s28",
          "flag": "story",
          "step": 29,
          "title": "ゼネネ2体との戦闘を終えて進む",
          "detail": "第二研究室。ゼネネ2体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s29",
          "flag": "story",
          "step": 30,
          "title": "モススラッシャー1体、スタンテイザー3体との戦闘を終えて",
          "detail": "第二研究室。モススラッシャー1体、スタンテイザー3体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s30",
          "flag": "story",
          "step": 31,
          "title": "デジョンハンマ3体との戦闘を終えて進む",
          "detail": "第二研究室。デジョンハンマ3体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s31",
          "flag": "story",
          "step": 32,
          "title": "プレインポット1体との戦闘を終えて進む",
          "detail": "第二研究室。プレインポット1体との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s32",
          "flag": "story",
          "step": 33,
          "title": "レッドXIIIにレバーを操作してもらう",
          "detail": "第四研究室。次の手順は、レッドXIIIにレバーを操作してもらう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s33",
          "flag": "story",
          "step": 34,
          "title": "通信機を調べて、ティファに報告する",
          "detail": "第四研究室。次の手順は、通信機を調べて、ティファに報告する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s34",
          "flag": "story",
          "step": 35,
          "title": "レッドXIIIを助けに向かう",
          "detail": "レッドXIIIの危機。次の手順は、レッドXIIIを助けに向かう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s35",
          "flag": "story",
          "step": 36,
          "title": "レッドXIIIと協力して戦う",
          "detail": "レッドXIIIの危機。次の手順は、レッドXIIIと協力して戦う。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s36",
          "flag": "story",
          "step": 37,
          "title": "レッドXIIIにレバーを操作してもらう",
          "detail": "中央端末へ向かう。次の手順は、レッドXIIIにレバーを操作してもらう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s37",
          "flag": "story",
          "step": 38,
          "title": "レバーを調べて、足場を出現させる",
          "detail": "中央端末へ向かう。次の手順は、レバーを調べて、足場を出現させる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s38",
          "flag": "story",
          "step": 39,
          "title": "レバーを調べて、第四研究室の扉を開け",
          "detail": "中央端末へ向かう。次の手順は、レバーを調べて、第四研究室の扉を開け。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s39",
          "flag": "story",
          "step": 40,
          "title": "通信機を調べて、パーティを切り替える",
          "detail": "中央端末へ向かう。次の手順は、通信機を調べて、パーティを切り替える。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s40",
          "flag": "story",
          "step": 41,
          "title": "第四研究室へ向かう",
          "detail": "中央端末へ向かう。次の手順は、第四研究室へ向かう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s41",
          "flag": "story",
          "step": 42,
          "title": "中央端末へ向かうで、レバーを調べる",
          "detail": "中央端末へ向かう。中央端末へ向かうで、レバーを調べる。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s42",
          "flag": "story",
          "step": 43,
          "title": "バレットと協力して、ソードダンスと戦う",
          "detail": "中央端末へ向かう。次の手順は、バレットと協力して、ソードダンスと戦う。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s43",
          "flag": "story",
          "step": 44,
          "title": "エアリスと協力して、ソードダンスとの戦闘を終えて進む",
          "detail": "中央端末へ向かう。エアリスと協力して、ソードダンスとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s44",
          "flag": "story",
          "step": 45,
          "title": "エレベーターを調べて、先に進む",
          "detail": "中央端末へ向かう。次の手順は、エレベーターを調べて、先に進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s45",
          "flag": "story",
          "step": 46,
          "title": "レバーを操作して、扉を押し倒そう",
          "detail": "音の正体。次の手順は、レバーを操作して、扉を押し倒そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s46",
          "flag": "story",
          "step": 47,
          "title": "最上階に戻り、神羅ビル屋上を目指そう",
          "detail": "音の正体。次の手順は、最上階に戻り、神羅ビル屋上を目指そう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-04",
          "flag": "tips",
          "title": "最上階の三連戦",
          "detail": "ジェノバBeatを倒すとミスティークとラッキー。ルーファウスに弱点はない。ハンドレッドガンナーは、飛んでいるあいだの攻撃を避けてから部位を狙う。次の章の仲間は、ここでよく動いた人が残りやすい。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter17-2.html",
          "map": "chapter17",
          "parent": "ch17-s46"
        },
        {
          "id": "ch17-05",
          "flag": "trophy",
          "trophy": "trophy-malboro",
          "title": "モルボルはクリア後のシミュレーター",
          "detail": "ドラムには出てこない。クリア後にこの章のシミュレーターでモルボルを倒すと、未知との遭遇が付く。てきのわざの最後の一つも、その相手から覚える。倒したらこのカードをオンにする。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter17-2.html",
          "map": "chapter17",
          "parent": "ch17-s46"
        },
        {
          "id": "ch17-06",
          "flag": "trophy",
          "trophy": "trophy-ch17",
          "title": "この章を終える",
          "detail": "ビルの外へ出ると、混沌からの脱出が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter17-2.html",
          "map": "chapter17",
          "parent": "ch17-s46"
        },
        {
          "id": "ch17-s47",
          "flag": "story",
          "step": 48,
          "title": "エレベーターを調べて屋上へ向かう",
          "detail": "音の正体。次の手順は、エレベーターを調べて屋上へ向かう。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s48",
          "flag": "story",
          "step": 49,
          "title": "声のする方へ行ってみ",
          "detail": "血の跡。次の手順は、声のする方へ行ってみ。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s49",
          "flag": "story",
          "step": 50,
          "title": "ジェノバBeatとの戦闘を終えて進む",
          "detail": "血の跡。ジェノバBeatとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s50",
          "flag": "story",
          "step": 51,
          "title": "対峙で、ハシゴを上る",
          "detail": "対峙。対峙で、ハシゴを上る。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s51",
          "flag": "story",
          "step": 52,
          "title": "バレットたちと合流する",
          "detail": "対峙。次の手順は、バレットたちと合流する。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        },
        {
          "id": "ch17-s52",
          "flag": "story",
          "step": 53,
          "title": "ハンドレッドガンナーとの戦闘を終えて進む",
          "detail": "対峙。ハンドレッドガンナーとの戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter17.html",
          "map": "chapter17"
        }
      ]
    },
    {
      "chapterId": "ch18",
      "items": [
        {
          "id": "ch18-s01",
          "flag": "story",
          "step": 1,
          "title": "エアリスからの「行く?」という問いに、「ああ」と答えると",
          "detail": "特異点。次の手順は、エアリスからの「行く?」という問いに、「ああ」と答えるとストーリーが最終決戦へと進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter18.html"
        },
        {
          "id": "ch18-02",
          "flag": "tips",
          "title": "最後の連戦は動いた仲間が残る",
          "detail": "終端に自販機とベンチがある。会話のあと、ああと答えると戦闘に入る。リミット、魔法、アイテムをよく使った仲間が、最後のパーティに残りやすい。トドメも数に入る。フィーラーは色の付いた個体を先にバーストさせ、その攻撃が本体に通る。途中でバハムートの姿になるので、重い範囲攻撃の前に倒す。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter18.html",
          "parent": "ch18-s01"
        },
        {
          "id": "ch18-04",
          "flag": "trophy",
          "trophy": "trophy-ch18",
          "title": "この章を終える",
          "detail": "エンディングに入ると、運命の断裂が付く。",
          "source": "https://blog.rebosoku.com/archives/ff7remake_chapter18.html",
          "parent": "ch18-s01"
        },
        {
          "id": "ch18-s02",
          "flag": "story",
          "step": 2,
          "title": "パーティにバレット+ティファが加入",
          "detail": "特異点。次の手順は、パーティにバレット+ティファが加入。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter18.html"
        },
        {
          "id": "ch18-s03",
          "flag": "story",
          "step": 3,
          "title": "敵を倒しながら先に進みます。戦い方",
          "detail": "特異点。次の手順は、敵を倒しながら先に進みます。戦い方。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter18.html"
        },
        {
          "id": "ch18-s04",
          "flag": "story",
          "step": 4,
          "title": "敵を倒しながら先に進み",
          "detail": "特異点。次の手順は、敵を倒しながら先に進み。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter18.html"
        },
        {
          "id": "ch18-s05",
          "flag": "story",
          "step": 5,
          "title": "バレットと二人で敵との戦闘を終えて進む",
          "detail": "特異点。バレットと二人で敵との戦闘を終えて進む。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter18.html"
        },
        {
          "id": "ch18-s06",
          "flag": "story",
          "step": 6,
          "title": "ティファ+エアリスとともに敵にとどめを打ち",
          "detail": "特異点。次の手順は、ティファ+エアリスとともに敵にとどめを打ち。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter18.html"
        },
        {
          "id": "ch18-s07",
          "flag": "story",
          "step": 7,
          "title": "セフィロスを倒しましょう。戦い方",
          "detail": "特異点。次の手順は、セフィロスを倒しましょう。戦い方。",
          "source": "https://finalfantasy-jun-site.com/ff7_remake/story/chapter18.html"
        }
      ]
    }
  ],
  "hard": [
    {
      "chapterId": "ch01",
      "items": [
        {
          "id": "hard-ch01-01",
          "flag": "story",
          "example": true,
          "title": "例: HARDだけのチェック",
          "detail": "例: 本編のチェックとは別に保存される。難易度ごとの差だけを書く。",
          "source": ""
        }
      ]
    },
    {
      "chapterId": "ch02",
      "items": []
    },
    {
      "chapterId": "ch03",
      "items": []
    },
    {
      "chapterId": "ch04",
      "items": []
    },
    {
      "chapterId": "ch05",
      "items": []
    },
    {
      "chapterId": "ch06",
      "items": []
    },
    {
      "chapterId": "ch07",
      "items": []
    },
    {
      "chapterId": "ch08",
      "items": []
    },
    {
      "chapterId": "ch09",
      "items": []
    },
    {
      "chapterId": "ch10",
      "items": []
    },
    {
      "chapterId": "ch11",
      "items": []
    },
    {
      "chapterId": "ch12",
      "items": []
    },
    {
      "chapterId": "ch13",
      "items": []
    },
    {
      "chapterId": "ch14",
      "items": []
    },
    {
      "chapterId": "ch15",
      "items": []
    },
    {
      "chapterId": "ch16",
      "items": []
    },
    {
      "chapterId": "ch17",
      "items": []
    },
    {
      "chapterId": "ch18",
      "items": []
    }
  ],
  "intermission": [
    {
      "chapterId": "im01",
      "items": [
        {
          "id": "im01-01",
          "flag": "story",
          "example": true,
          "title": "例: INTERmissionのチェック",
          "detail": "例: 本編とは別の進行として保存される。章題は番号のままにする。",
          "source": ""
        }
      ]
    },
    {
      "chapterId": "im02",
      "items": []
    }
  ]
};

globalThis.ROUTE = ROUTE;
