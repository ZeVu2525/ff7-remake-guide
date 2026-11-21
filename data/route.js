// FINAL FANTASY VII REMAKE のルート枠。
// 本編はれぼそくの章記事に沿ったカード。HARD と INTERmission は仮のまま。
const ROUTE = {
  main: [
    {
      chapterId: "ch01",
      items: [
        {
          id: "ch01-01",
          flag: "story",
          title: "駅から連絡口を抜けて炉へ入る",
          detail: "列車を降りて侵入路を進む。ミニマップは出せる。改札の先でバレットに声をかけ、資材管理区のリフトに乗って金網をくぐる。ゲート前の端末を長押しして、ビッグスとジェシーに扉を開けてもらう。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-02",
          flag: "item",
          title: "連絡口までの箱",
          detail: "改札を上がった先にポーション、部屋の隅に手榴弾がある。資材管理区の北側行き止まりにエーテル、ゲート前にもポーションがある。神羅の木箱は中身が変わり、たまにモーグリメダルが出る。壊したときの赤い光はその場でMPが戻る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-03",
          flag: "trophy",
          trophy: "trophy-first-win",
          title: "はじめての勝利",
          detail: "侵入路の最初の戦闘に勝つと、ソルジャーの肩慣らしが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-04",
          flag: "trophy",
          trophy: "trophy-burst",
          title: "連打でバーストさせる",
          detail: "金網の手前の戦いで、攻撃を重ねて敵をバーストさせるとバーストの一撃が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-05",
          flag: "tips",
          title: "神羅ボックスは通りすがりに壊す",
          detail: "木箱は同じ見た目でも中身が毎回違う。赤く光って消えるものは回復なので、戦闘の直前に使うとポーションを温存できる。配置がない部屋もある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-06",
          flag: "story",
          title: "レーザーを抜けて炉心へ降りる",
          detail: "バレットに交代できるようになる。B2からB4の監視レーザーは消えた隙に走る。スイーパーを倒し、梯子でB8の炉心まで降りる。脱出の制限時間は、爆弾を入れてから始まる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-07",
          flag: "item",
          title: "炉内の宝箱",
          detail: "ゲートを出たすぐのフェニックスの尾、B3のポーション、B4のエーテル、B5のフェニックスの尾、B7のエーテルを拾ってから爆弾へ向かう。B6は一本道で箱がない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-08",
          flag: "missable",
          title: "爆弾の時間は20分か30分か",
          detail: "B8でタイマーを20分か30分から選ぶ。バレットの反応が変わる。選んだ時間が、ボスのあとの脱出に使える時間になる。メニューを開けばその時計は止まる。",
          deadline: "爆弾をセットするとき",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-09",
          flag: "tips",
          title: "ガードスコーピオンは雷で崩す",
          detail: "バレットのサンダーが弱点。当たったら攻撃を重ね、飛んでくる弾はガードで受ける。弱点を突いた瞬間に、弱点への一撃が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-10",
          flag: "trophy",
          trophy: "trophy-weakness",
          title: "はじめて弱点を突く",
          detail: "ガードスコーピオンに雷を当てると、弱点への一撃が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-11",
          flag: "story",
          title: "制限時間内に炉から出る",
          detail: "来た道をダッシュで戻る。梯子の途中でもダッシュできる。崩れた足場でジェシーを助け、別ルートでバレットと合流する。作業通路のスイーパーを抜け、出口のエレベーターに乗る。周囲に敵が残っていると調べられない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-12",
          flag: "item",
          title: "脱出中に箱が戻る",
          detail: "帰りは神羅ボックスが置き直されている。B6のポーションも、行きになかった場所に出る。時間に余裕があれば拾う。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
        {
          id: "ch01-13",
          flag: "trophy",
          trophy: "trophy-ch01",
          title: "この章を終える",
          detail: "エレベーターで炉を出ると、壱番魔晄炉爆破が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter1.html"
        },
      ]
    },
    {
      chapterId: "ch02",
      items: [
        {
          id: "ch02-01",
          flag: "story",
          title: "隔壁を出て八番街を駅へ向かう",
          detail: "連絡通路の先でジェシーと会い、市街地へ出る。かいふくのセットを教わるので、武器か防具の穴に入れる。駅前通りの足場を伝い、謎の男を追ってからLOVELESS通りへ出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter2.html"
        },
        {
          id: "ch02-02",
          flag: "item",
          title: "八番街の道中",
          detail: "隔壁の行き止まりにポーション、物資保管区の階段前にエーテルがある。燃えていない車の近くにギル、手すりに手榴弾、建物の階段にポーションがある。LOVELESS通りでは車の横にHPアップ、北側の奥にハイポーション、南側の戦闘のあと車横にかいひぎり、大通りの突き当りにパワーリストがある。噴水のあと建物の上に手榴弾、降りた先にアイアンバングル、住宅地の角にエーテル、横道のトラック横にハイポーションがある。列車の狭い通路の先にギルがある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter2.html"
        },
        {
          id: "ch02-03",
          flag: "tips",
          title: "花の返事と、部隊長ゴンガ",
          detail: "通りの女性への返事はいくらだといらないのどちらでも、黄色い花が手に入る。住宅地の先は中ボスなので、ほのおを付けておく。部隊長ゴンガは魔法が通りやすく、なければ手榴弾で崩せる。盾を持つ鎮圧兵も魔法かブレイバーで崩す。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter2.html"
        },
        {
          id: "ch02-04",
          flag: "story",
          title: "列車の先頭で章が終わる",
          detail: "ゴンガを倒したら最終列車に乗る。貨物車両から客室を抜け、先頭でジェシーと話すとこの章は終わり。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter2.html"
        },
        {
          id: "ch02-05",
          flag: "trophy",
          trophy: "trophy-ch02",
          title: "この章を終える",
          detail: "列車の先頭の会話のあと、八番街の逃走が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter2.html"
        },
      ]
    },
    {
      chapterId: "ch03",
      items: [
        {
          id: "ch03-01",
          flag: "story",
          title: "アジトとアパートを回る",
          detail: "駅からセブンスヘブンへ入り、三人の誰かと話してからティファについてアパートへ行く。翌朝、屋上の箱を見てから店へ戻る。ティファとアイテム屋、休憩できるベンチ、武器強化が順に開く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-02",
          flag: "item",
          title: "七番街の箱と店",
          detail: "自分の部屋の屋上にフェニックスの尾、武器屋の2階にエーテル、アジトの北のくぐり先に手榴弾、中央の猫広場に興奮剤がある。アイテム屋でプレリュードを買う。ほのおとれいきはあとで拾えるので、先にディスクを優先してよい。駅前の店でバレットのテーマ、店の北東の男からヒップ・デ・チョコボ、店内のジュークボックスでティファのテーマ。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-03",
          flag: "trophy",
          trophy: "trophy-music-3",
          title: "ディスクを3枚そろえる",
          detail: "この街のディスクを3枚手にした時点で、音楽愛好家が付く。4枚あるので、店を出る前に数を確認する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-04",
          flag: "story",
          title: "ガレキ通りで戦い、アイアンブレードをもらう",
          detail: "ティファが仲間になる。洞窟の奥にれいきが落ち、深部に毒消しがある。詰所へ戻って報告したあと武器屋へ寄ると、アイアンブレードと、武器アビリティの熟練の説明がある。バスターソードは最初から熟練が最大。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-05",
          flag: "tips",
          title: "拘束されたら交代する",
          detail: "ガレキ通りで誰かが掴まれたら、操作を替えてその敵を叩く。はじめて助け出すと、拘束への一撃が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-06",
          flag: "trophy",
          trophy: "trophy-rescue",
          title: "はじめて仲間を助ける",
          detail: "ガレキ通りで拘束を解くと、拘束への一撃が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-07",
          flag: "deadline",
          title: "依頼は店の前の人だかりの前まで",
          detail: "ワイマーと話すとなんでも屋が開く。チャドリーにバトルレポートを渡すと、この期間だけ追加の報酬がある。セブンスヘブンの外の人だかりへ進む前に、もう少し街を見るか聞かれる。先へ進むと依頼は閉じ、ティファも一度外れる。",
          deadline: "セブンスヘブンの外へ進むと答える前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-08",
          flag: "request",
          title: "チャドリーレポート",
          detail: "チャドリーからみやぶるをもらい、モンスターを2種類調べて報告する。どれか1件終えると話は先へ進める。6件すべて終えると、追加のふたりきりの時間が開く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-09",
          flag: "request",
          title: "化けネズミの軍団",
          detail: "アイテム屋から受ける。ウェアラットを片付けて報告する。このあとにワイマーからさまよう軍犬が出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-10",
          flag: "request",
          title: "廃工場の羽根トカゲ",
          detail: "ジャンク屋から受ける。廃工場の羽根トカゲを2組倒す。このあとに墓場からの異物が出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-11",
          flag: "request",
          title: "消えたトモダチ",
          detail: "ベティから受ける。スラムの猫を3匹見つけて報告する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-12",
          flag: "request",
          title: "さまよう軍犬",
          detail: "化けネズミの軍団のあと、ワイマーから出る追加の依頼。ガレキ通りの軍犬を追って倒す。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-13",
          flag: "request",
          title: "墓場からの異物",
          detail: "廃工場の依頼のあと、ジャンク屋から出る追加の依頼。工場の奥の敵を倒して報告する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-14",
          flag: "trophy",
          trophy: "trophy-quest-first",
          title: "はじめて依頼を終える",
          detail: "上の6件のどれか1件を報告すると、なんでも屋の初仕事が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-15",
          flag: "missable",
          title: "ふたりきりの時間",
          detail: "6件終えると、アパート前のマーレから追加の出来事が始まる。自分の部屋の洗面台を調べ、ティファの部屋で服装を聞かれる。答えた内容が、チャプター9でティファが着る服になる。やらなければその会話はない。報酬は三日月チャーム。",
          deadline: "セブンスヘブンの外へ進むと答える前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3ex.html"
        },
        {
          id: "ch03-16",
          flag: "story",
          title: "夜の騒ぎのあと、イフリートをもらう",
          detail: "人だかりでジョニーを見てから、ティファと警備兵を片付ける。上級警備兵は炎、ハウンドは氷が通りやすい。店に戻るとカクテルとダーツができる。カウンターに座ったあと、外の男について広場で戦い、アパートでジェシーからイフリートをもらう。準備ができたらジェシーと話す。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-17",
          flag: "optional",
          title: "ダーツはこの店で遊べる",
          detail: "的の中央がブル、細い輪がダブルとトリプル。残りが少ないときにリーチの枠へ入れる。ランキングを取る手順は、次の章で店に戻ったときにも残っている。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
        {
          id: "ch03-18",
          flag: "trophy",
          trophy: "trophy-ch03",
          title: "この章を終える",
          detail: "ジェシーと出発すると、なんでも屋の仕事が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter3.html"
        },
      ]
    },
    {
      chapterId: "ch04",
      items: [
        {
          id: "ch04-01",
          flag: "story",
          title: "バイクで七番街の社宅へ行く",
          detail: "章が始まるとバイクの追跡になる。道路の中央を避け、加速して追いついた敵を叩く。遠距離で撃ってくる相手は左右にかわし、横に付いて剣が光ったら離れる。社宅に着いたらジェシーの家の横から入り、指示どおり隣の部屋の服から社員証を持ち出す。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-02",
          flag: "tips",
          title: "ジェシーにほめられる走り方",
          detail: "最後に採点され、冗談ではなくほめられるとバイクソルジャーが付く。残りHPを7割以上残した状態で確認できる。途中で回復してもらったり、失敗してやり直したりすると付かない。そのときは最後のセーブからやり直す。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-03",
          flag: "trophy",
          trophy: "trophy-bike",
          title: "バイクでほめられる",
          detail: "採点でほめられたら、バイクソルジャーが付く。条件は上のTipsのとおり。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-04",
          flag: "story",
          title: "ローチェを倒してスラムへ戻る",
          detail: "七六分室の北西にハイポーション、地下は1戦ごとにギルがもらえる訓練場がある。ビッグスに準備を告げると陽動作戦が始まる。盾持ちは魔法、スイーパーは雷。ゲージが溜まると召喚が呼べる。ローチェは炎が通りやすく、攻撃はガードするとひるみやすい。倒すとエリクサー。境界面に落ちているそせいを拾ってからスラムへ戻る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-05",
          flag: "item",
          title: "分室と帰り道",
          detail: "七六分室の北西の箱にハイポーションが2つ。プレート境界面に入ったところにそせいが落ちている。スラムの箱の位置は前の章と同じ。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-06",
          flag: "deadline",
          title: "寝る前にジェシーからバリアをもらう",
          detail: "ウェッジを家まで送ったあと、ジェシーの家へ寄るとバリアがもらえる。ビッグスの家に寄る会話は任意。そのあと自分の部屋で朝まで寝る。",
          deadline: "アパートで寝る前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-07",
          flag: "story",
          title: "朝の急襲のあと、列車に乗る",
          detail: "朝に現れた敵を片付け、ティファとセブンスヘブンへ向かう。虚無なる魔物を倒すとギルがもらえる。店でダーツの記録を更新できる。店を出て駅へ向かい、チャドリーに寄ってからバレットに「はい」と答えると出発する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-08",
          flag: "trophy",
          trophy: "trophy-darts",
          title: "ダーツでランキングを取る",
          detail: "セブンスヘブンのダーツで、7本以内にスコアを0にするとランキング1位になり、ダーツエキスパートが付く。1位のあとウェッジに近づくとラッキーがもらえる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
        {
          id: "ch04-09",
          flag: "trophy",
          trophy: "trophy-ch04",
          title: "この章を終える",
          detail: "列車に乗ると、アバランチとの絆が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter4.html"
        },
      ]
    },
    {
      chapterId: "ch05",
      items: [
        {
          id: "ch05-01",
          flag: "story",
          title: "臨時列車から螺旋トンネルへ",
          detail: "客室でティファと話し、奥のバレットのところでかいふくが落ちている。ティファのところへ戻ると3分の制限が付く。メニューを開けば時計は止まる。スタンレイは雷と風。C区画で仲間と合流し、D区画の糸を切り、E区画のクイーングラシュトライクは氷で抜ける。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter5.html"
        },
        {
          id: "ch05-02",
          flag: "item",
          title: "トンネルの箱と忠犬スタンプ",
          detail: "C区画の階段にハイポーション、扉の奥にエリクサーとエーテル。D区画に毒消しとハイポーション、E区画にフェニックスの尾。旧車両基地の南西の小部屋の自販機で忠犬スタンプが買え、いかずちが落ちている。この部屋はボスの前。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter5.html"
        },
        {
          id: "ch05-03",
          flag: "tips",
          title: "ダストドーザーはコアを狙う",
          detail: "弱点は雷。部位を壊すとバーストが溜まり、ジェネレーターコアが出る。コアを弱点で叩き、雑魚が増えたら先に片付ける。レールに電流が走るので、線の上では戦わない。変形したあとも装甲を壊してコアを叩く。召喚のゲージが溜まったらここで使うと、盾にもなる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter5.html"
        },
        {
          id: "ch05-04",
          flag: "trophy",
          trophy: "trophy-summon-first",
          title: "はじめて召喚する",
          detail: "ダストドーザー戦で召喚を出すと、みならい召喚士が付く。ゲージは強敵との戦いで溜まる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter5.html"
        },
        {
          id: "ch05-05",
          flag: "item",
          title: "メタルナックル",
          detail: "ダストドーザーはメタルナックルを落とす。盗むとファイアカクテルも取れる。勝ったときの報酬としてもティファの武器が渡される。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter5.html"
        },
        {
          id: "ch05-06",
          flag: "story",
          title: "整備通路のエレベーターに乗る",
          detail: "細い道を抜け、プレート整備通路のエレベーターに乗ると伍番魔晄炉方面へ進む。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter5.html"
        },
        {
          id: "ch05-07",
          flag: "trophy",
          trophy: "trophy-ch05",
          title: "この章を終える",
          detail: "エレベーターに乗ると、プランＥ展開が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter5.html"
        },
      ]
    },
    {
      chapterId: "ch06",
      items: [
        {
          id: "ch06-01",
          flag: "story",
          title: "ライトを消してH区画へ進む",
          detail: "運搬リフトから梯子を降り、第一照明器のスイッチと制御室を順に操作する。G区画の下層から上層へ上がり、H区画で3つのライトを消す。1つ目は東の階段の上、2つ目は操作盤で東へ道を作った先、3つ目は別のリフトで第三照明機区域へ入った上層。3つ消してから、H-01のメインリフトの端末を調べる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter6.html"
        },
        {
          id: "ch06-02",
          flag: "item",
          title: "プレート内部の箱",
          detail: "最初の梯子の近くにハイポーション、北の照明の梯子の上にポーション。G区画は階段を降りずに進むと有害物質、西の橋の先に万能薬、H区画へ渡る手前に毒消し。1つ目のライトの奥にフェニックスの尾、2つ目へ向かう西の行き止まりにエーテルターボ、3つ目の途中にモーグリメダル、レバーの奥にマジカルの腕輪。隔壁の梯子の上にもモーグリメダルがある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter6.html"
        },
        {
          id: "ch06-03",
          flag: "deadline",
          title: "メインリフトの前に二つの寄り道",
          detail: "3つ目のライトへ行けるようになったら、モーグリメダルの箱の横から下へ降りる。クイーンシュトライクを倒し、リフトを一番下まで動かすとMPアップ、渡った先にぞくせいがある。戻って、メインリフトの西の小さいリフトで換気設備へ行く。自販機でエレキ・デ・チョコボ。端末を起動し、1分以内に隣室の端末を押すと奥でチョコボ＆モーグリが拾える。時間切れでもやり直せる。",
          deadline: "メインリフトの端末を調べる前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter6ex2.html"
        },
        {
          id: "ch06-04",
          flag: "tips",
          title: "ぞくせいの使い方",
          detail: "ぞくせいは、組んだ属性を武器なら攻撃、防具なら耐性に足す。ほのお、れいき、いかずち、かぜが対象で、複数付けたときは最初の属性だけ効く。星が増えると、武器の追加ダメが上がり、防具は半減から無効、吸収へ変わる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter6ex1.html"
        },
        {
          id: "ch06-05",
          flag: "trophy",
          trophy: "trophy-moogle",
          title: "チョコボ＆モーグリを拾う",
          detail: "換気口の奥のマテリアを拾うと、凄腕の整備士が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter6ex2.html"
        },
        {
          id: "ch06-06",
          flag: "story",
          title: "隔壁を抜けて章が終わる",
          detail: "メインリフトの先は銃器を先に壊す。ミサイルランチャーが優先で、雷が通る。梯子を登って隔壁を抜けるとこの章は終わり。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter6.html"
        },
        {
          id: "ch06-07",
          flag: "trophy",
          trophy: "trophy-ch06",
          title: "この章を終える",
          detail: "隔壁の先の会話のあと、スラムの太陽が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter6.html"
        },
      ]
    },
    {
      chapterId: "ch07",
      items: [
        {
          id: "ch07-01",
          flag: "story",
          title: "炉心で爆弾を仕掛け、カードキーで戻る",
          detail: "B1からパイプを降り、B8で爆弾をセットする。戻りながら各整備フロアのカードキーを探し、端末に挿してエアバスターの武装を外していく。捨てた部品は、正面ゲートの廃棄物の部屋で後から回収できる。B1のエレベーターで正面ゲートへ出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter7.html"
        },
        {
          id: "ch07-02",
          flag: "item",
          title: "伍番魔晄炉の拾い物",
          detail: "B4の柱の近くにハイポーション、B5に煙幕とエーテル、B7の梯子を降りずに奥へ行くと防弾チョッキ。B5の連絡通路にティファのソニックフィスト。B7の部屋の北西にいかずち。B3の作業通路にエーテル。カードキーは各整備フロアの机や床にある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter7.html"
        },
        {
          id: "ch07-03",
          flag: "tips",
          title: "カッターマシンとエアバスター",
          detail: "カッターマシンは雷。腕を壊すかダメージを積むと倒れるが、一度起きると暴走して倒れにくくなる。エアバスターも雷。大砲は直線なので横へ避け、腕が分離したら本体より先に腕を叩く。掴まれたらバレットに替える。飛ぶようになったらバレットか魔法。手を合わせたら炎、近づいたら近接。制限は30分。勝つとチタンバングル。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter7.html"
        },
        {
          id: "ch07-04",
          flag: "optional",
          title: "廃棄物の回収",
          detail: "正面ゲートのセキュリティ室で、紫の端末を調べる。ティファの合図の直後に、表示どおり左右のスティックを軽く倒す。4回成功すると奥が開き、マジカルが落ちている。失敗しても最初からではなく、その回からやり直せる。捨てたAIコア、ビッグボンバー、Mユニットもここにある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter7ex.html"
        },
        {
          id: "ch07-05",
          flag: "trophy",
          trophy: "trophy-thieves",
          title: "最上級のロックを開ける",
          detail: "廃棄物の部屋の入力を最後まで成功させると、大泥棒三人組が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter7ex.html"
        },
        {
          id: "ch07-06",
          flag: "item",
          title: "爆破ミッション",
          detail: "ロックを開けた扉の先の自販機で、爆破ミッションが買える。ボスの前にベンチで全回復しておく。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter7.html"
        },
        {
          id: "ch07-07",
          flag: "trophy",
          trophy: "trophy-ch07",
          title: "この章を終える",
          detail: "エアバスターを倒すと、罠に落ちたネズミが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter7.html"
        },
      ]
    },
    {
      chapterId: "ch08",
      items: [
        {
          id: "ch08-01",
          flag: "story",
          title: "教会から伍番街の中心まで歩く",
          detail: "エアリスと話し、レノを振り切る。魔法と雷は通りにくく、機雷は触れると動けなくなるので壊す。2階の下にタリスマン、屋根裏の横道に眠気覚ましがある。屋根を伝って駅へ出る。廃棄指定区の右へ進み、開かないゲートのレバーを調べてからコンテナを押す。たそがれの谷の南を回るとブラックブレス、スチールマウンテンの天井伝いに万能薬。ボルトナットヒルズの裏からレバーを引くと、さっきのゲートが近道になる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8.html"
        },
        {
          id: "ch08-02",
          flag: "item",
          title: "教会から駅まで",
          detail: "教会2階の階段下にタリスマン。屋根裏の細い足場の横に眠気覚まし。屋根を回り込んだ先にモーグリメダル、呼び止められたあとの行き止まりにエーテル。駅の自販機でケット・シーのテーマ。たそがれの谷の回り込みにブラックブレス、スチールマウンテンの掴まり移動の先に万能薬。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8.html"
        },
        {
          id: "ch08-03",
          flag: "tips",
          title: "スモッグファクトは倒したあと離れる",
          detail: "弱点は雷。倒した直後に自爆するので、距離を取る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8.html"
        },
        {
          id: "ch08-04",
          flag: "optional",
          title: "開かないゲート",
          detail: "廃棄指定区のレバーを調べると、向こう側がまだ閉まっていることが分かる。スチールマウンテンの先、ボルトナットヒルズの梯子を登って反対側のレバーを引くと近道が開く。報酬はない。本線を進めていれば、同じ道で開けられる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8ex.html"
        },
        {
          id: "ch08-05",
          flag: "story",
          title: "花を届け、子どもを助けてから依頼が開く",
          detail: "中心街のモニターを見てエアリスの家へ行く。上まで登って1階へ戻ると花を摘める。種類は好みでよい。リーフハウスへ届けたあと、緑のマフラーの子を追うか、しばらくするとクラウドが先を急ぐ。秘密基地の坂の南にメガポーション。沼の連戦のあと、帰り道でムギから出張のなんでも屋が開く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-06",
          flag: "item",
          title: "中心街と秘密基地",
          detail: "町内会のジュークボックスで涙のタンゴ、その近くにスピードドリンク、南の通路に煙幕。マテリア屋で太陽の海岸。十字路にギル。リーフハウスの中にエーテル。秘密基地にモーグリメダル、きもだめしロードの坂の南にメガポーション。エアリスの家のMPアップは、自由に動けるようになってから取りに戻る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-07",
          flag: "trophy",
          trophy: "trophy-flower",
          title: "リーフハウスに花を飾る",
          detail: "依頼が開いたあとリーフハウスへ戻ると、アートフラワーが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-08",
          flag: "deadline",
          title: "伍番街の依頼は家に入る前まで",
          detail: "ルードを倒してエアリスの家に入ると、受けている依頼は進めなくなる。6件すべて終えていると、家の中で花と語りての会話が自動で始まる。チャプター9のエアリスの服は、ここでの件数で決まる。2件以下で淡い服、3件以上で濃いピンク、6件すべてで赤。",
          deadline: "エアリスの家に入る前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-09",
          flag: "request",
          title: "極秘開店モーグリショップ",
          detail: "秘密基地のモーグリの着ぐるみから受ける。会員になると、メダルでディスクや武器と交換できる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-10",
          flag: "request",
          title: "見回りの子供たち",
          detail: "中心街の子どもを探してから、未開発地区の敵を倒す。クラウドの武器が報酬。このあと英雄の証明と、噂のスラムエンジェルが出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-11",
          flag: "request",
          title: "暴走兵器",
          detail: "街の入口付近の機械を片付ける。このあと墓参りの報酬が出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-12",
          flag: "request",
          title: "英雄の証明",
          detail: "見回りのあと、秘密基地で箱を壊す。ノーマルの課題をすべて終えると、クラッシュヒーローが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-13",
          flag: "trophy",
          trophy: "trophy-crash",
          title: "クラッシュボックスのノーマルを終える",
          detail: "ノーマルの課題をすべて終えたら、このカードをオンにする。クラッシュヒーローが一緒にオンになる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-14",
          flag: "request",
          title: "噂のスラムエンジェル",
          detail: "見回りのあと、聞き込みをして対象を倒す。チャプター14のコルネオの隠し財産は、この依頼を終えている必要がある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-15",
          flag: "request",
          title: "墓参りの報酬",
          detail: "暴走兵器のあと、墓地の敵を倒して報告する。墓地の鍵はモーグリ店で交換する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-16",
          flag: "optional",
          title: "シヴァの模擬戦",
          detail: "中心街にチャドリーがいる。報告が進んでいると召喚の模擬戦が開く。はじめて勝つと、たたかう召喚士が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-17",
          flag: "trophy",
          trophy: "trophy-summon-win",
          title: "はじめて召喚獣バトルに勝つ",
          detail: "チャドリーの模擬戦に勝ったらオンにする。たたかう召喚士が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-18",
          flag: "tips",
          title: "ルードは風で、掴みに注意",
          detail: "弱点は風。かかと落としは範囲の蹴り。近づくと掴まれる。HPが減ると地走りと、足元を3回爆発させる攻撃が出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-19",
          flag: "story",
          title: "家を抜けて六番街へ",
          detail: "家の中では缶を踏まないように外へ出る。目的地の六番街まで行くとこの章は終わり。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
        {
          id: "ch08-20",
          flag: "trophy",
          trophy: "trophy-ch08",
          title: "この章を終える",
          detail: "六番街への道で、再会が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter8-2.html"
        },
      ]
    },
    {
      chapterId: "ch09",
      items: [
        {
          id: "ch09-01",
          flag: "story",
          title: "陥没道路を三つのアームで抜ける",
          detail: "エアリスと六番街の道を進み、崩落トンネルのアームで足場へ上げる。機械の墓地ではコンテナに乗せてから、コンテナの上でふうじるを拾わせる。大陥没の自販機で星降る峡谷。盗賊を炎で片付け、ダブルアームではコンテナを二つ積み、マテリアの横にエアリスを下ろしてはんいかを拾う。公園で一度別れ、東のエーテルを見てからウォール・マーケットへ入る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9.html"
        },
        {
          id: "ch09-02",
          flag: "item",
          title: "陥没道路で拾うもの",
          detail: "アームの前のトンネルにモーグリメダル。坂の下のトンネルにギル、下の道にメガポーション。2回目のアームでふうじる、3回目ではんいか。自販機に星降る峡谷。公園の東にエーテル。はんいかはコンテナの上に下ろさないと残る。この1個だけなので、本線の足場へ運ぶ前に拾う。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9.html"
        },
        {
          id: "ch09-03",
          flag: "missable",
          title: "はんいかはアームの上で取る",
          detail: "3回目のアームで、マテリアの横のコンテナにエアリスを下ろす。先の足場へ運ぶだけだと、はんいかを取りこぼす。",
          deadline: "3回目のアームを終える前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9.html"
        },
        {
          id: "ch09-04",
          flag: "story",
          title: "街を歩いて推薦状を集める",
          detail: "チョコボのサムにティファの印象を聞かれたら、スタイルがいいがサム側、店を切り盛りしているがマム側に寄る。街では宿の部屋、チャドリーの先の階段、南の行き止まりのバリア、ジュークボックス、アイテム屋、武器屋のハードブレイカー、ジム男男男のハチマキ、正面玄関の脇、カウガール、居酒屋の歌手を順に確認する。赤と黒の箱は、この章では届かない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-05",
          flag: "optional",
          title: "さすらいのジョニー",
          detail: "武器屋方面の南でジョニーが走る。わかるとサム側に寄り、この会話はあとでジョニーのトロフィーに必要になる。いいや、または無視するとマム側に寄る。一度無視しても、話を進める前なら北にいるジョニーに話しかけて続けられる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-06",
          flag: "deadline",
          title: "サムとマムのどちらに付くか",
          detail: "コイントスの表か裏はサム側、やめておこうでも、それまでの選択によってはサム側で固定されることがある。マムの3000ギルは大きくマム側、1000ギルもマム側、100ギルは寄らない。エアリスの服を俺は嫌いじゃないと答えるとサム側、言わせとけはマム側。手揉み屋の扉で先へ進むと、街の外に出られなくなり、依頼も閉じる。",
          deadline: "手揉み屋の扉で先へ進む前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-07",
          flag: "tips",
          title: "ヘルハウスは色で弱点が変わる",
          detail: "受付のあと、炎、氷、雷、風を持っておく。燃えていれば氷、凍っていれば炎、吸い込んでいれば雷、青ければ風。無敵のときは両手を物理で叩く。HPが低いと空から落ちてくるので、大きくダッシュして離れる。勝つと虎のフリーバトルが開く。アイテムは使えず、戦うたびに少し回復する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-08",
          flag: "request",
          title: "白熱スクワット",
          detail: "ジム男男男で受ける。サム側でもマム側でも出る。初級を終えると依頼は終わる。残りの難度も、この街にいるあいだに続けられる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-09",
          flag: "request",
          title: "あくなき夜",
          detail: "サムのリストのときだけ。服屋のひらめきを取り戻すと、次の闘技場の依頼が出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-10",
          flag: "request",
          title: "爆裂ダイナマイトナイスバディ",
          detail: "白熱スクワットとあくなき夜のあと、コロッセオの追加試合になる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-11",
          flag: "request",
          title: "盗みの代償",
          detail: "マムのリストのときだけ。盗賊を倒すと、次の闘技場の依頼が出る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-12",
          flag: "request",
          title: "逆襲の刃",
          detail: "白熱スクワットと盗みの代償のあと、コロッセオの追加試合になる。報酬の武器は、サム側の追加試合と同じ系統。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-13",
          flag: "trophy",
          trophy: "trophy-squat",
          title: "スクワットをすべて勝つ",
          detail: "初級だけでなく、残っている勝負もすべて終えたらオンにする。マッスルキングが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-14",
          flag: "missable",
          title: "クラウドの服は依頼を終えた側",
          detail: "白熱スクワットを含むサム側の依頼を終えると青、マム側を終えると白。依頼をせずに扉を進むと黒。一方のリストしか受け取れない。",
          deadline: "手揉み屋の扉で先へ進む前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-15",
          flag: "story",
          title: "蜜蜂の館で踊ってから館に入る",
          detail: "ジョニーについてコルネオの館の入口まで行き、橋の上でエアリスと落ち合う。服の濃さは、前の章の依頼の件数どおり。蜜蜂の館の南の部屋に鎮静剤。ハニーガールと話す前にセーブする。練習は何度でもでき、パーフェクトで闘う者達REMAKE。本番は一度きりで、高評価だとアニヤンのピアスがもらえる。外に出たクラウドに二度話しかける。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-16",
          flag: "trophy",
          trophy: "trophy-dance",
          title: "ダンスでピアスをもらう",
          detail: "本番の高評価でアニヤンのピアスを受け取ると、ダンシングクイーンが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-17",
          flag: "trophy",
          trophy: "trophy-dress-3",
          title: "三人の衣装を見る",
          detail: "蜜蜂の館の外でクラウドに話しかけると、この周回で三人の衣装が揃って見える。新米ドレッサーが付く。すべての衣装は、別の選択で章をやり直さないと揃わない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-18",
          flag: "item",
          title: "コルネオの館の寄り道",
          detail: "地下の暖炉前にエーテルターボ、自販機でスラムのドン。1階へ降りて戦闘したあと、階段の下の隙間に怒りの指輪。2階の上下と書かれた床を調べると、奥に不思議な水晶。中央の部屋へ進むと対決になる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
        {
          id: "ch09-19",
          flag: "trophy",
          trophy: "trophy-ch09",
          title: "この章を終える",
          detail: "館の奥の対決のあと、欲望の街が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter9-2.html"
        },
      ]
    },
    {
      chapterId: "ch10",
      items: [
        {
          id: "ch10-01",
          flag: "missable",
          title: "先に起こす相手で好感が変わる",
          detail: "地下牢でティファとエアリスのどちらを先に起こすかで、その人の好感が上がる。アプスは炎が通り、氷は通らない。範囲技は名前が出たら離れ、突進はガード、掴まれたら交代する。上に登ったあとのじゃれるは横へ避ける。泥水は水たまりから離れる。HPが半分を切ると激しくなり、下水津波の溜めは炎でバーストさせると止められる。",
          deadline: "二人のどちらを先に起こすか",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter10.html"
        },
        {
          id: "ch10-02",
          flag: "story",
          title: "鍵を探して大水路を渡る",
          detail: "穴から第一水路へ下り、南のエーテルと、水門を開けた奥のフェザーグラブを拾う。自販機で虐げられた民衆。第二水路の分岐はどちらでも同じ場所へ出る。鍵のある扉を正面に、東の水を抜くと大水路の鍵、西を抜くとギル。赤い竜の扉はこの章では開かない。共同大水路の梯子を登った広場にどくがある。橋を渡ると戻れなくなる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter10.html"
        },
        {
          id: "ch10-03",
          flag: "item",
          title: "下水道で拾うもの",
          detail: "第一水路の南にエーテル、水門の奥にフェザーグラブ、第二水路の途中にハイポーション、西の水抜きにギル。大水路の広場にどく。七番地区の第二水路の南に重力珠。第一水路の南の行き止まりにたいせいと精霊のピアス。北が本線。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter10.html"
        },
        {
          id: "ch10-04",
          flag: "tips",
          title: "排水ポンプは3回止める",
          detail: "エアリスでバルブを開くと針が動く。ボタンを連打して赤いゲージを伸ばし、針が右に来たところでスティックを下げて赤い範囲で止める。3回成功で終わり、失敗してもやり直せる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter10.html"
        },
        {
          id: "ch10-05",
          flag: "story",
          title: "地上への梯子を登る",
          detail: "水を抜いた道の敵を抜け、梯子を登るとこの章は終わり。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter10.html"
        },
        {
          id: "ch10-06",
          flag: "trophy",
          trophy: "trophy-ch10",
          title: "この章を終える",
          detail: "地上へ出るイベントのあと、焦燥の迷宮が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter10.html"
        },
      ]
    },
    {
      chapterId: "ch11",
      items: [
        {
          id: "ch11-01",
          flag: "story",
          title: "灯りを辿って車両倉庫へ",
          detail: "操車場の自販機の近くから、2両目の中を通るとミスリルロッドがある。本線の梯子へ登る前に拾う。B区画の列車の奥にギル、登る前の北西にHPアップ。この先は戻れない。倉庫ではゴーストを炎と物理で交互に崩し、出口が閉まってから灯りの列車で2階へ上がる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter11.html"
        },
        {
          id: "ch11-02",
          flag: "item",
          title: "操車場と倉庫",
          detail: "第二操車場の寄り道にミスリルロッドとHPアップ。倉庫2階の東から1階へ降りるとゴシックバングル。制御室の手前の南にメガポーションと煙幕、建物を回るとギル、自販機で闘う者達、その南にモーグリメダル。クレーンのあと列車の中に煙幕、転車台の行き止まりにハイポーション、列車を動かす装置の横にメガポーション。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter11.html"
        },
        {
          id: "ch11-03",
          flag: "tips",
          title: "グロウガイストは姿で攻撃を変える",
          detail: "通常は物理、赤く透けているときは魔法。霊体のときは回復魔法がダメージになる。フェニックスの尾は効果が薄く、エリクサーの方が通る。物を投げる攻撃は機材の陰、範囲の声はしびれる。HPが半分を切ると火の弾が出て、炎のそばはダメージになる。倒すとしょうめつが落ち、エーテルターボを盗める。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter11.html"
        },
        {
          id: "ch11-04",
          flag: "missable",
          title: "エリゴルからストライクロッドを盗む",
          detail: "ボスの前の自販機で準備する。ぬすむを付け、れいきと、空にいるとき用のかぜを持っておく。ストライクロッドは盗む以外にない。空にいるときはジャンプか風でバーストさせ、地上へ下ろす。車輪に物理は弾かれる。槍はコンテナの裏か真下。車輪が壊せるようになったら、そこを叩いてバーストさせる。",
          deadline: "エリゴルを倒す前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter11.html"
        },
        {
          id: "ch11-05",
          flag: "story",
          title: "転車台の先でボスを倒す",
          detail: "制御室の西の扉で近道を作り、クレーンで列車を動かす。第一操車場ではレバー、列車の装置を順に操作し、ディーングロウは風で抜ける。倒したあとは道なりに進む。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter11.html"
        },
        {
          id: "ch11-06",
          flag: "trophy",
          trophy: "trophy-ch11",
          title: "この章を終える",
          detail: "エリゴルの先で、亡霊の墓場が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter11.html"
        },
      ]
    },
    {
      chapterId: "ch12",
      items: [
        {
          id: "ch12-01",
          flag: "story",
          title: "支柱を上り、途中でエアリスに替わる",
          detail: "駅で虚無なる魔物と戦う。雑魚を先に倒すと、本体の守りが弱まる。支柱に入る前に攻撃魔法を一つは持っておく。3階に重力珠、5階にエーテル。7階でレノを見ると、操作がエアリスに替わる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter12.html"
        },
        {
          id: "ch12-02",
          flag: "story",
          title: "マリンを連れてから最上階へ",
          detail: "セブンスヘブンへ向かう道で子どもを助け、マーレのところへ連れていく。店のカウンターのマリンと話し、外へ出ると操作がクラウドに戻る。10階でジェシー、12階の北にエリクサー。14階のベンチで装備を整え、15階でバレットが戻ってレノとルードになる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter12.html"
        },
        {
          id: "ch12-03",
          flag: "tips",
          title: "レノとルードは役割を分ける",
          detail: "レノに弱点はない。ブレイブでガードから反撃し、ヘリは無視してレノを削る。爆撃は進行方向へ避ける。ピラミッドに閉じ込められたら交代し、近くの機雷をアビリティか魔法で壊す。レノがしゃがんだら、ルードを風で落とす。ぞくせいと風を武器に付け、かいふくとはんいかで範囲回復にしてもよい。勝ったあとは30秒でティファのもとへ走る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter12.html"
        },
        {
          id: "ch12-04",
          flag: "item",
          title: "支柱の箱",
          detail: "3階に重力珠が2つ、5階にエーテル、12階の北の行き止まりにエリクサー。ディスクはない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter12.html"
        },
        {
          id: "ch12-05",
          flag: "trophy",
          trophy: "trophy-ch12",
          title: "この章を終える",
          detail: "30秒のあとのイベントで、死闘が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter12.html"
        },
      ]
    },
    {
      chapterId: "ch13",
      items: [
        {
          id: "ch13-01",
          flag: "story",
          title: "伍番街の家を見て、崩れた道を公園へ",
          detail: "ティファと壁を押すとバレットが仲間になる。ウォール・マーケットを北へ抜け、Y字の左の建物に星のペンダント。エアリスの家の2階、マリンの部屋に幻獣のお守り。南東から六番街へ戻り、陥没道路の旧バイパスを進む。ヴァギドポリスとスモッグファクトは自爆を使うので、てきのわざを持っていればここで覚えられる。みどり公園の店で旅の途中でと、ラージマウスを見てから地下へ入る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter13.html"
        },
        {
          id: "ch13-02",
          flag: "item",
          title: "公園までの拾い物",
          detail: "六伍街道の建物に星のペンダント。家の2階に幻獣のお守り。旧バイパスにメガポーション。下層に降りた横道にプレートガード、折り返しにエーテルと重力珠。アイテム屋で旅の途中で、武器屋でラージマウス。ソーサラの腕輪とウィザードブレスもある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter13.html"
        },
        {
          id: "ch13-03",
          flag: "optional",
          title: "てきのわざを持って地下へ",
          detail: "伍番街にチャドリーがいるなら、敵を30種みやぶるレポートを渡しててきのわざを買っておく。旧バイパスのヴァギドポリスとスモッグファクト、実験場のヴァギドポリスが自爆を使う。受けたときに確率で覚える。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter13.html"
        },
        {
          id: "ch13-04",
          flag: "story",
          title: "バレットで実験場を上り、アノニマスを倒す",
          detail: "接近武器のままだと障害物を壊せないので、銃に戻す。B6の岩の奥にギル、B5の北側にメガポーション、B4の北の岩の奥にヒールチョーカー。ティファと合流したら、左のファンの道にエーテル、檻にれいき、エーテルターボ、たいせい。B1の自販機でFFVIIメインテーマ。ウェッジのところでアノニマスを倒すとミスリルクロー。壁を壊して地上へ出るとこの章は終わり。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter13.html"
        },
        {
          id: "ch13-05",
          flag: "item",
          title: "実験場の檻と箱",
          detail: "B6の岩の奥にギル、B5にメガポーション、B4にヒールチョーカー、B2の左のファンにエーテル。檻の中にれいき、エーテルターボ、たいせい。自販機にFFVIIメインテーマ。ボスはミスリルクローを落とす。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter13.html"
        },
        {
          id: "ch13-06",
          flag: "tips",
          title: "アノニマスは心臓を出す",
          detail: "本体も雑魚のネムレスも氷。雷はネムレスに通りにくい。雑魚を先に片付け、2回目の援軍で2階へ上がれる。触手を壊すと心臓が弱点になる。放電はコンテナの裏。ジャンプはガード。武器に氷を付け、はんいかとれいきで範囲にしてもよい。シヴァがいると楽。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter13.html"
        },
        {
          id: "ch13-07",
          flag: "trophy",
          trophy: "trophy-ch13",
          title: "この章を終える",
          detail: "地上の会話のあと、醒めない悪夢が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter13.html"
        },
      ]
    },
    {
      chapterId: "ch14",
      items: [
        {
          id: "ch14-01",
          flag: "item",
          title: "家を出たところのマテリア",
          detail: "庭の中央付近にあるきまにあを拾う。歩数で別のマテリアに変わる。北西の丘にMPアップがあるが、前に拾っていればない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-02",
          flag: "missable",
          title: "あるきまにあは家の前だけ",
          detail: "あるきまにあはこの場にしか落ちていない。拾って装備し、歩いて変化させる。家を出てすぐに回収する。",
          deadline: "エアリスの家を出た直後",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-03",
          flag: "deadline",
          title: "最後の依頼は壁を越える前",
          detail: "この章でなんでも屋は最後まで受けられる。壁を越えると進めなくなる。16から24をすべて終えると、目的地への道にスラムエンジェルの手紙が落ち、ぞくせいがもう1個手に入る。素通りしない。",
          deadline: "壁を越える前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-04",
          flag: "request",
          title: "消えた子供たち",
          detail: "伍番街の中心で受ける。子どもを探し、報告する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-05",
          flag: "request",
          title: "チョコボを探せ",
          detail: "中心街で自動的に話が始まる。この時点でチョコボ車が使え、1回300ギル。3羽戻すと無料になる。他の依頼の前に終えると移動が短い。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-06",
          flag: "request",
          title: "手下のうらみ",
          detail: "ウォール・マーケットで受ける。コルネオの手下を片付ける。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-07",
          flag: "request",
          title: "揺れる想い",
          detail: "ウォール・マーケットの懸垂。初級で依頼は終わり、残りの勝負もこの章のうちに続けられる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-08",
          flag: "trophy",
          trophy: "trophy-pullup",
          title: "けんすい勝負をすべて勝つ",
          detail: "残っている難度も終えたらオンにする。マッスルクイーンが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-09",
          flag: "request",
          title: "音楽の力",
          detail: "ウォール・マーケットで受ける。この街のディスクは、この依頼で回収する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-10",
          flag: "request",
          title: "秘伝の薬",
          detail: "伍番街の中心で受ける。材料の一つは、地底の咆哮で手に入る角。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-11",
          flag: "request",
          title: "おてんば盗賊",
          detail: "伍番街駅のジョニーから受ける。クリアすると宝物庫の鍵がもらえ、盗まれた財布の続きが開く。コルネオの隠し財産は、受注だけ先にして、鍵を持ってから進める。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-12",
          flag: "optional",
          title: "財布をジョニーに返す",
          detail: "おてんば盗賊のあと、駅のジョニーに話す。チャプター9でさすらいのジョニーを体験し、あくなき夜も終えていると、ここでジョニーのマブダチが付く。一つでも抜けていると、クリア後にその章からやり直す。普通の立ち話は条件に入らない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14ex.html"
        },
        {
          id: "ch14-13",
          flag: "trophy",
          trophy: "trophy-johnny",
          title: "ジョニーの出来事をそろえる",
          detail: "財布を返し、過去のジョニーの出来事が揃っていたらオンにする。ジョニーのマブダチが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14ex.html"
        },
        {
          id: "ch14-14",
          flag: "request",
          title: "コルネオの隠し財産",
          detail: "ステーション通りのY字にいる記者から受ける。おてんば盗賊で鍵を取ってから、下水道の宝物庫へ入る。モーグリメダルが足りなければ、スチールマウンテンの箱を壊しに戻る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-15",
          flag: "request",
          title: "地底の咆哮",
          detail: "みどり公園のワイマーから受ける。実験場の奥の大型を倒す。角は秘伝の薬に使う。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-16",
          flag: "story",
          title: "コルネオの館からアプスを追う",
          detail: "チョコボで移動しながら館へ向かう。地下でコッチを助けるとチャクラが拾える。どくが落ちている部屋を見てから、どろぼうアプスを炎で追う。隠れ家の前に、ほのおのぞくせいとはんいか、召喚を整える。2回目のアプスも炎で、氷は通らない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-17",
          flag: "optional",
          title: "壁の前に残っていること",
          detail: "サラに話すとクラッシュボックスのハードが遊べる。すべて終えるとレジェンドクラッシャー。モーグリ店で剣技指南書、射撃マニュアル、格闘術秘伝書、星の神秘の書がメダル5枚で交換できる。コロッセオのフリーバトルをはじめて勝つとカムバックチャンピオン。依頼を終えて手紙を拾ってから、壁を越える。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-18",
          flag: "trophy",
          trophy: "trophy-crash-hard",
          title: "クラッシュボックスのハードを終える",
          detail: "ハードの課題をすべて終えたらオンにする。レジェンドクラッシャーが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-19",
          flag: "trophy",
          trophy: "trophy-arena",
          title: "フリーバトルに勝つ",
          detail: "コロッセオのフリーバトルをはじめて勝ったらオンにする。カムバックチャンピオンが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-20",
          flag: "trophy",
          trophy: "trophy-letter",
          title: "スラムエンジェルの手紙を拾う",
          detail: "依頼をすべて終えた道に落ちている手紙を拾うと、天使の感謝状が付き、ぞくせいがもう1個手に入る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
        {
          id: "ch14-21",
          flag: "trophy",
          trophy: "trophy-ch14",
          title: "この章を終える",
          detail: "壁を越えたあと、希望への救済が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter14.html"
        },
      ]
    },
    {
      chapterId: "ch15",
      items: [
        {
          id: "ch15-01",
          flag: "story",
          title: "崩れた外壁をワイヤーで上る",
          detail: "瓦礫から梯子とワイヤーで高さを稼ぐ。最初の自販機でじかんが新しく売っている。飛行するディーングロウは風が通り、アイスオーラを使う。てきのわざがあればここで覚えられる。ヘリの照射は物陰でやり過ごす。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter15.html"
        },
        {
          id: "ch15-02",
          flag: "item",
          title: "上る途中の箱",
          detail: "道中の自販機で闇に潜むと、じかんが買える。同じ高さの短いワイヤーの先と、高い足場に箱がある。先へ進む前に、その階を一周する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter15.html"
        },
        {
          id: "ch15-03",
          flag: "tips",
          title: "ヘリガンナーは雷と風",
          detail: "弱点は雷と風。倒すとマキナバングルが落ちる。上まで登ったら、残りの回復を使ってから挑む。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter15.html"
        },
        {
          id: "ch15-04",
          flag: "trophy",
          trophy: "trophy-ch15",
          title: "この章を終える",
          detail: "ヘリガンナーを倒すと、腐ったピザが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter15.html"
        },
      ]
    },
    {
      chapterId: "ch16",
      items: [
        {
          id: "ch16-01",
          flag: "story",
          title: "ティファがロビーからカードキーを取る",
          detail: "駐車場から1階へ入る。人型の敵は炎が通るので、ぞくせいとほのおを武器に付け、盾持ち用にかいひぎりがあると楽。ティファだけで電飾の上を進み、一度落ちたロビーでは雲梯の先のグランドグラブを拾ってから上へ戻る。この箱はティファの操作中だけ。3階はエレベーターか非常階段を選べる。話の分岐はない。エレベーターは階ごとに戦闘と社員の会話、非常階段は戦闘がなく会話だけ。どちらも59階で合流する。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-02",
          flag: "item",
          title: "外周とロビー",
          detail: "降りる途中にハイポーション、準備の部屋にエーテルターボ、北側にファイアカクテル、広場の東にメガポーション、端末の部屋の南西にモーグリメダル、東の通路にギル。雲梯の先にグランドグラブ。3階の東の扉の奥にヘビィメタル。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-03",
          flag: "missable",
          title: "グランドグラブはティファのあいだだけ",
          detail: "ロビーへ落ちたあと、最初の梯子には登らない。天井を伝った行き止まりにグランドグラブがある。上へ戻ると、この箱には戻れない。",
          deadline: "ティファが上の階へ戻る前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-04",
          flag: "story",
          title: "62階で協力者を集め、シミュレーターへ",
          detail: "60階は三つの案内を最後まで見てカードキーを更新する。62階でハットに10000ギル払うとハートビート。63階のジュークボックスでスカーレットのテーマ。ここまでのディスクを拾っていれば、ここでミュージックマエストロが付く。シミュレーターの指定戦を終えると先へ進める。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-05",
          flag: "item",
          title: "上層の拾い物",
          detail: "62階の北にギル。ハットに払うとハートビート。63階のジュークボックスにスカーレットのテーマ。ダクトの左の行き止まりにHPアップ。その先の部屋に毒消し、スピードドリンク、万能薬。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-06",
          flag: "missable",
          title: "ハートビートは10000ギル",
          detail: "62階のハットに10000ギルを渡すと、バレットのハートビートがもらえる。この会話でしか手に入らない。この階にいるうちに払う。",
          deadline: "62階を離れる前",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-07",
          flag: "trophy",
          trophy: "trophy-music-all",
          title: "ディスクが揃っていればここで完成",
          detail: "スカーレットのテーマを取り、それまでのディスクを残していなければ、ミュージックマエストロが付く。抜けがあるときは、その章をやり直してからここへ戻る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-08",
          flag: "story",
          title: "ダクトから研究フロアへ",
          detail: "64階のダクトを抜けて会議を聞き、研究フロアの敵を倒すとこの章は終わり。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
        {
          id: "ch16-09",
          flag: "trophy",
          trophy: "trophy-ch16",
          title: "この章を終える",
          detail: "研究フロアを抜けると、ノーアポイントメントが付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter16.html"
        },
      ]
    },
    {
      chapterId: "ch17",
      items: [
        {
          id: "ch17-01",
          flag: "story",
          title: "ドラムのレバーを切り替えて合流する",
          detail: "最初の部屋にフルメタルロッドがある。バレットは一度外れているので、前の章で拾った箱は空になっている。ポッドを足場に進み、第三層の扉の先にツインスティンガー。通信機でティファ側とクラウド側を替え、番号のレバーを順に下ろす。中央の端末の近くにじかん、横道にどくがある。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter17.html"
        },
        {
          id: "ch17-02",
          flag: "item",
          title: "ドラムの主な箱",
          detail: "開始部屋にフルメタルロッド。小部屋にフェニックスの尾とカエルの指輪、通路にエーテル。ポッドの先にフェニックスの尾、第三層にツインスティンガーとギル。シャッターの奥にフォースブレス、T字を右へミスティーク、南西にチェインバングル。中央にじかん、横道にどく。エレベーターに乗る前なら、取りこぼしへ戻れる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter17.html"
        },
        {
          id: "ch17-03",
          flag: "story",
          title: "三つのボスを倒して外へ出る",
          detail: "ブレインポッドを抜け、ジェノバBeat、ルーファウス、ハンドレッドガンナーの順に戦う。ルーファウスはクラウド一人。エレベーターに乗る前ならドラムへ戻れる。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter17-2.html"
        },
        {
          id: "ch17-04",
          flag: "tips",
          title: "最上階の三連戦",
          detail: "ジェノバBeatを倒すとミスティークとラッキー。ルーファウスに弱点はない。ハンドレッドガンナーは、飛んでいるあいだの攻撃を避けてから部位を狙う。次の章の仲間は、ここでよく動いた人が残りやすい。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter17-2.html"
        },
        {
          id: "ch17-05",
          flag: "trophy",
          trophy: "trophy-malboro",
          title: "モルボルはクリア後のシミュレーター",
          detail: "ドラムには出てこない。クリア後にこの章のシミュレーターでモルボルを倒すと、未知との遭遇が付く。てきのわざの最後の一つも、その相手から覚える。倒したらこのカードをオンにする。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter17-2.html"
        },
        {
          id: "ch17-06",
          flag: "trophy",
          trophy: "trophy-ch17",
          title: "この章を終える",
          detail: "ビルの外へ出ると、混沌からの脱出が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter17-2.html"
        },
      ]
    },
    {
      chapterId: "ch18",
      items: [
        {
          id: "ch18-01",
          flag: "story",
          title: "ハイウェイのバイクを走り切る",
          detail: "ビルを出ると追跡が続く。バイク、トラック、飛行する敵の順に壊し、モーターボールを倒すと走行が終わる。落ちたらその区間の初めに戻る。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter18.html"
        },
        {
          id: "ch18-02",
          flag: "tips",
          title: "最後の連戦は動いた仲間が残る",
          detail: "終端に自販機とベンチがある。会話のあと、ああと答えると戦闘に入る。リミット、魔法、アイテムをよく使った仲間が、最後のパーティに残りやすい。トドメも数に入る。フィーラーは色の付いた個体を先にバーストさせ、その攻撃が本体に通る。途中でバハムートの姿になるので、重い範囲攻撃の前に倒す。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter18.html"
        },
        {
          id: "ch18-03",
          flag: "story",
          title: "エンディングまで戦い切る",
          detail: "パーティは局面ごとに入れ替わる。赤い獣は控えとして付く場面がある。勝ち切るとエンディング。この章に依頼や寄り道の箱はない。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter18.html"
        },
        {
          id: "ch18-04",
          flag: "trophy",
          trophy: "trophy-ch18",
          title: "この章を終える",
          detail: "エンディングに入ると、運命の断裂が付く。",
          source: "https://blog.rebosoku.com/archives/ff7remake_chapter18.html"
        },
      ]
    },
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
