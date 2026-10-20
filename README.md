# who's who — ISSEI MASUYA

舛谷一成の個人プロフィールサイトのデザイン試作。九十九良品の固定左ナビ・中央ビジュアル・右の情報欄という構成を参考に、独自の色・文字・コンテンツで実装しています。

## 公開

https://onebe-inc.github.io/whos-who/

GitHub Pages: main / root。全HTMLに `noindex, nofollow` を指定。robots.txtでクロールを拒否せず、検索エンジンがnoindexを取得できる状態にしています。noindexはアクセス制限ではありません。

## 原稿と素材

- OneBeの既存corporateリポジトリの公開済み代表紹介、本人写真 `public/assets/portrait.webp`。
- 本人note https://note.com/isseimasuya/n/n8f726bd15c72
- note記事一覧・リンクはcorporateの `src/note-posts.json` に準拠。
- 実績件数、料金、未確認の実績・口コミは掲載していません。
- ヒーロー・各セクションの見出しは今回のデザイン提案です。
- 参考サイトの写真・ロゴ・イラスト・ソースコードは流用していません。イラストは使用していません。

## 構成

ビルド不要のHTML/CSS/JavaScript。スマホでは開閉メニュー、PCでは固定左ナビ。プロフィール、提供領域、経歴、note、問い合わせ導線。問い合わせは既存OneBeフォームに接続します。

## 2026-10-21 / OneBe tone revision

ユーザー指定により、参考サイトの人物写真・文字サイズの強さを再構成し、OneBe既存サイトのネイビー #111936、白、淡いブルーグレーを採用。「本気の想いに、本気で向き合う。」を主見出しとし、対話と伴走を軸とする表現へ統一。本人写真を大きくトリミングし、実例UMUI・MIYAGEYAの店舗写真を追加。画像は既存corporateの `public/assets/umui-miyageya.webp` に由来。イラストなし。変更スタイルは `impact.css`。noindex継続。

## デザイン案の保存・呼び出し

[デザイン案台帳](DESIGN_CATALOG.md)で複数案を管理します。案01は九十九良品ベース・OneBeロゴ版（reference-study/）。ネイビーの親ページとは別です。
