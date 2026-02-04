# ポートフォリオサイト

総務課長としての経歴・スキル・プロジェクト実績を紹介するポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: Astro 5.x
- **スタイリング**: Tailwind CSS v4
- **言語**: TypeScript
- **ホスティング**: GitHub Pages
- **デプロイ**: GitHub Actions

## コマンド

| コマンド | 説明 |
|----------|------|
| `npm install` | 依存パッケージのインストール |
| `npm run dev` | 開発サーバー起動（localhost:4321） |
| `npm run build` | 本番ビルド（出力先: dist/） |
| `npm run preview` | ビルド結果のプレビュー |

## ディレクトリ構成

```
src/
├── components/     # 再利用可能なコンポーネント
├── content/
│   ├── blog/       # ブログ記事（Markdown）
│   └── projects/   # プロジェクト情報（Markdown）
├── data/
│   ├── career.ts   # 経歴データ
│   └── skills.ts   # スキルデータ
├── layouts/        # ページレイアウト
├── pages/          # 各ページ
└── styles/         # グローバルCSS
```

## 今後の予定

- [ ] noteアカウント作成後、トップページにRSSフィードから記事タイトルを表示
  - `https://note.com/{ユーザー名}/rss` から取得
  - 定期的な自動ビルド設定（GitHub Actions）
- [ ] OGP画像の設定
- [ ] faviconの設定
