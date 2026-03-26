# Vercel デプロイガイド

このプロジェクトは Vercel Serverless Functions を使用して、Vercel にデプロイ可能な構成になっています。

## 構成

- **フロントエンド**: React 19 + Vite + Tailwind CSS
- **バックエンド**: Vercel Serverless Functions (`/api` ディレクトリ)
- **お問い合わせ処理**: `/api/contact.ts`

## Vercel へのデプロイ手順

### 1. GitHub にプッシュ

```bash
git add .
git commit -m "Vercel Serverless Functions 対応"
git push origin main
```

### 2. Vercel にデプロイ

#### オプション A: Vercel CLI を使用

```bash
npm i -g vercel
vercel
```

#### オプション B: Vercel ダッシュボード

1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. 「Add New」→「Project」
3. GitHub リポジトリを選択
4. デプロイ

### 3. 環境変数の設定（オプション）

メール送信機能を有効にする場合は、以下の環境変数を Vercel ダッシュボードで設定してください：

```
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=contact@yorumichi.com
```

## メール送信機能の統合

現在、お問い合わせフォームの送信は `/api/contact.ts` で処理されていますが、メール送信機能は未実装です。

### Resend を使用する場合

1. [Resend](https://resend.com) にサインアップ
2. API キーを取得
3. `api/contact.ts` のコメント部分を有効にして実装

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yorumichi.com',
  to: process.env.CONTACT_EMAIL,
  subject: `新しいお問い合わせ: ${companyName}`,
  html: `...`,
});
```

### SendGrid を使用する場合

1. [SendGrid](https://sendgrid.com) にサインアップ
2. API キーを取得
3. `api/contact.ts` で SendGrid クライアントを使用

## ファイル構成

```
.
├── api/
│   └── contact.ts           # お問い合わせエンドポイント
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx     # メインページ（フォーム含む）
│   │   └── ...
│   └── index.html
├── vercel.json              # Vercel 設定
├── vite.config.ts           # Vite 設定
└── package.json
```

## トラブルシューティング

### API エンドポイントが 404 を返す

- `vercel.json` の `rewrites` 設定を確認してください
- API ファイルが `/api` ディレクトリに存在することを確認してください

### フォーム送信が失敗する

- ブラウザのコンソールでエラーメッセージを確認してください
- Vercel のログを確認してください: `vercel logs`

### ビルドが失敗する

- `pnpm install` でローカルでビルドをテストしてください
- TypeScript エラーを確認してください: `pnpm check`

## 参考リンク

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Vite Documentation](https://vitejs.dev)
