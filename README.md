# RePlay ホームページ

React / TypeScript / Viteで構築した静的サイトです。PHPやデータベースは使用していません。

## 開発

Node.js 24（`.nvmrc`）を使用します。

```sh
nvm use
npm ci --ignore-scripts
npm run dev
```

開発サーバーはローカルで使用し、インターネットに公開しないでください。

## 確認とビルド

```sh
npm audit --audit-level=moderate
npm run check
npm run build
npm run preview
```

`node_modules/`と`dist/`は生成物としてGit管理から除外しています。
`package-lock.json`をコミットし、依存関係を再現してください。

## 公開

既存のVercelプロジェクトを使用します。`vercel.json`で型チェック、ビルド、
出力先`dist/`、SPA用ルーティング、セキュリティヘッダーを設定しています。
これらのヘッダーはVercelへのデプロイ後に適用されます。
ローカルのVite previewには自動適用されません。

CSPは同一オリジンのスクリプトとGoogle Fontsを許可します。
Reactのインラインスタイルを使うため、スタイルのみ`unsafe-inline`を許可しています。
スクリプトのインライン実行、他サイトによる埋め込み、フォーム送信は禁止しています。
フォームや外部サービスを追加する際はCSPも見直してください。

## 問い合わせ

メールアプリを開くリンクと電話リンクを使用します。
サイトからメールを送信するバックエンドは実装していません。
メールアプリの設定・送信操作は利用者側で必要です。

## 継続的な確認

GitHub Actionsで依存関係監査、型チェック、ビルドを実行します。
Dependabotを週次で実行する設定を含みます。
Vercel・GitHub・ドメイン管理の2要素認証、権限、ログイン履歴、APIトークンは、
各サービスの管理画面で別途確認してください。
