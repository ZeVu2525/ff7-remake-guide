# FINAL FANTASY VII REMAKE 攻略ガイド（骨組み）

非公式のチェックリストです。Chapter 1 から Chapter 18 までの枠と、依頼・トロフィー・召喚獣・敵の技・マテリア・武器の台帳だけが入っています。攻略の中身は、まだ仮のカードです。

ゲーム本編の文章、画像、商標は権利者のものです。このリポジトリが配るのは、進行を記録するための画面とデータ枠です。

## 流用元

画面の殻は、公開リポジトリ [ZeVu2525/xenoblade-chronicles-de-100-guide](https://github.com/ZeVu2525/xenoblade-chronicles-de-100-guide) の `main` から構造だけを流用しています。タブで画面を切り替えること、章ごとのカードとチェック、期限と取り逃しの帯、検索、進行の保存と JSON の書き出し・読み込み、テーマ、編集モード、サービスワーカーによるオフライン対応がそれにあたります。

ゼノブレイドの攻略文、画像、第三者データは含めていません。コードのライセンスは [LICENSE-CODE.md](LICENSE-CODE.md)（MIT、Copyright (c) 2026 finalpantasy）です。

## 構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | 画面。上部のタブ、帯、検索、テーマ、使い方 |
| `app.js` | チェック、絞り込み、保存、書き出しと読み込み |
| `data/game.js` | タイトル、章一覧、フラグ、画面一覧、保存キー、キャッシュ名 |
| `data/route.js` | 本編・HARD・INTERmission の章とカード |
| `data/catalogs.js` | 依頼、トロフィー、召喚獣、敵の技、マテリア、武器 |
| `progress.js` | 進行 JSON の形 |
| `edit-mode.js` | 表示文の修正。`?edit=1`、ページ下のトグル、「編集モードを終了」 |
| `sw.js` | オフライン用キャッシュ |
| `validate-guide.js` | ID の重複と必須項目の検査 |
| `test-guide.js` | ブラウザを使わない動作テスト |

別のゲームに作り替えるときは、まず `data/game.js` のタイトル、章、フラグ、画面、保存キーを変えます。カードの中身は `data/route.js` と `data/catalogs.js` です。画面の動きは共通のままにしてあります。

## データの追加

### 章のカード

`data/route.js` の、足したい章の `items` にオブジェクトを追加します。ID は `ch01-03` のように、章の中で一度決めたら変えません。

```js
{
  id: "ch03-02",
  flag: "missable",       // story / deadline / missable / request / optional / trophy / item / tips
  title: "カードの見出し",
  detail: "自分の言葉で書いた手順。",
  deadline: "次の章に入る前",  // 期限・取り逃しのとき
  trophy: "trophy-ch03",      // flag が trophy のとき。台帳の id
  source: "https://example.com/page"
}
```

フラグは `data/game.js` の `flags` と揃える。本編は進行、期限と取り逃しは帯に出る。依頼、任意、トロフィー、アイテム入手、Tips は絞り込みのチップになる。

トロフィーのカードは `trophy` に台帳の id を書く。そのカードをオンにすると、トロフィー画面の同じ項目もオンになる。カードを外したとき、同じトロフィーを指す別のカードがまだオンなら、台帳はオンのまま残る。台帳を直接オンにしても進行カードは動かない。台帳を直接オフにすると、結んである進行カードも外れる。運命の覇者は、ほかのトロフィーがすべてオンのときだけオンになる。書き出した JSON には、カードとトロフィーの両方が入る。

仮のまま残すカードは `example: true` にし、見出しに「例」と書きます。本番のカードでは両方を外します。

HARD と INTERmission は `hard` と `intermission` に、本編とは別のカードとして置きます。チェックも別々に保存されます。章の表示名は `data/game.js` の `chapters` です。公式の章題は書かず、`Chapter 1` のような番号にしてあります。

### 台帳

`data/catalogs.js` の配列に足します。今は形を示す仮データが 1 件ずつ入っています。

```js
{
  id: "quest-01",
  name: "依頼名",
  area: "受注できる場所",
  detail: "条件と報酬を自分の言葉で書く。",
  source: "https://example.com/page",
  missable: false
}
```

ID はルートのカードと重ならないようにします。

### 文章の方針

攻略サイトの文章や表を、そのまま貼らないでください。確認した事実を自分の言葉で書き、出典の URL を `source` に残します。`source` が空でもカードは表示されます。URL を書くときは `https://` から始めます。

## 保存キー

同じ GitHub Pages のドメインでも、別のガイドと進行が混ざらないように、キーを分けています。

| 用途 | キー |
| --- | --- |
| チェックの進行 | `ff7r-guide-state-v1` |
| 編集モードの文面 | `ff7r-text-edits-v1` |
| オフラインキャッシュ | `ff7r-guide-v1` |

テーマと、リセット前の控えは、同じ `ff7r-` の別キーです。定義は `data/game.js` の `storage` と `cache` にまとめてあります。

## 編集モード

- ページ下の「編集モード：オフ」を押すと、その場でオンになる
- `?edit=1` でも入れる
- オンのあいだ、上部に「編集モードを終了」が出る
- 表示中の文をクリックすると、その文だけを直せる。進行チェックは変わらない

## ローカルで開く

サービスワーカーを使うときは、ファイルを直接開かず、ローカルサーバで開きます。

```bash
python -m http.server 8765
```

ブラウザで `http://127.0.0.1:8765/` を開きます。

検査は依存パッケージなしで動きます。

```bash
node validate-guide.js
node test-guide.js
```

## GitHub Pages

このリポジトリは、`main` ブランチのルートをそのまま公開できます。

1. GitHub のリポジトリで Settings → Pages を開く
2. Build and deployment の Branch を `main`、Folder を `/ (root)` にする
3. 保存する

公開 URL は `https://<ユーザー名>.github.io/ff7-remake-guide/` です。`.nojekyll` を置いてあるので、Jekyll はファイルを加工しません。
