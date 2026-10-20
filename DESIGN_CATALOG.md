# who's-who デザイン案台帳

更新日: 2026-10-21
対象: 舛谷一成のwho's-who。複数のデザイン案を今後作成し、ユーザーの指示で既存案を呼び出す。
状態: 比較候補。保存は最終採用の決定を意味しない。

## 案01 — 九十九良品ベース / OneBeロゴ版

- ID: WHOS-WHO-01
- 呼出名: 「who's-whoの案01」「九十九良品ベースの案」「オレンジの案」「写真差替え比較版」
- 公開URL: https://onebe-inc.github.io/whos-who/reference-study/?logo=onebe
- リポジトリ: https://github.com/OneBe-inc/whos-who
- 配置: reference-study/
- 保存時の確定コミット: b80a0c0cfd2e94595bbfa59aeffa43653be2ddeb
- 固定タグ: whos-who-design-01-tsukumo-v1
- 固定ソース: https://github.com/OneBe-inc/whos-who/tree/whos-who-design-01-tsukumo-v1/reference-study
- プレビュー: [案01の画面](design-previews/design-01-onebe-logo.jpg)
- 参考サイト: https://tsukumo-ryouhin.jp/
- 主な特徴: オレンジ背景 #f9834a、白い固定左サイドバー、中央の大きな本人写真、街並みとオレンジの帯、右側の縦長カード＋記事欄、角丸、写真下部に重ねた大きな白い見出し。
- PC寸法: 全体最大1340px、左190px、右250px、列間10px。スマホでは1列と開閉メニュー。
- ロゴ: OneBe正式ロゴ assets/onebe-logo.png。参考会社のロゴへ戻さない。
- 人物写真: 舛谷一成の既存本人写真。背景はbuilt-in imagegenで生成したラスター画像。
- 検索方針: noindex,nofollow を維持。
- 元サイトとの差: 本文は本人用、背景は生成、本人写真は同一ポーズを複数箇所に使用、SNSは文字リンク、ヒーローは固定。短い見出しは比較用に元サイトのものを使用。完全な写真だけの差替えではない。
- 採用状態: 候補として保存。ユーザーの最終決定は未実施。

## 呼び出し・追加時の扱い

1. 「案01を呼び出して」等の指示では上記URLとプレビューを提示し、変更指示がなければ編集しない。
2. 新しいデザイン案は案02、案03…と追加し、別ディレクトリ・別URLで保存。案01を新案で上書きしない。
3. 案01の改訂を明示された場合は版を追加し、既存タグを動かさない。
4. 保存時点を取り出す場合は固定タグを参照し、別ブランチや別作業ディレクトリで扱う。既存作業に破壊的なリセットをしない。
5. 親階層 https://onebe-inc.github.io/whos-who/ は以前のネイビーのOneBeトーン試作。案01の呼出先と取り違えない。現時点で案02には登録しない。
