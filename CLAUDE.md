# Portfolio Site - CLAUDE.md

## プロジェクト概要

DXコンサルタント・総務マネージャーとしてのポートフォリオサイト。
技術発信（ブログ）、実績紹介、経歴書を兼ねたオールインワンのサイト。

## 技術スタック

- **フレームワーク**: Astro (最新安定版)
- **スタイリング**: Tailwind CSS v4
- **言語**: TypeScript
- **ホスティング**: GitHub Pages
- **デプロイ**: GitHub Actions (`withastro/action@v5`)
- **パッケージマネージャ**: npm

## コマンド

- `npm run dev` — 開発サーバー起動 (localhost:4321)
- `npm run build` — 本番ビルド (出力先: dist/)
- `npm run preview` — ビルド結果のプレビュー
- `npm run lint` — ESLint実行
- `npm run format` — Prettierでフォーマット

## ディレクトリ構成

```
/
├── public/                  # 静的ファイル（favicon, OGP画像等）
├── src/
│   ├── components/          # 再利用可能なAstroコンポーネント
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── ProjectCard.astro
│   │   └── SkillBadge.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro # 全ページ共通レイアウト（head, header, footer）
│   │   └── BlogLayout.astro # ブログ記事用レイアウト
│   ├── pages/
│   │   ├── index.astro      # トップページ
│   │   ├── about.astro      # 自己紹介・経歴
│   │   ├── projects.astro   # 実績・プロジェクト一覧
│   │   ├── skills.astro     # スキル一覧
│   │   ├── blog/
│   │   │   └── index.astro  # ブログ一覧
│   │   └── contact.astro    # お問い合わせ
│   ├── content/
│   │   ├── blog/            # ブログ記事（Markdownファイル）
│   │   └── projects/        # プロジェクトデータ（Markdownファイル）
│   ├── styles/
│   │   └── global.css       # グローバルCSS（Tailwindインポート）
│   └── data/
│       ├── skills.ts        # スキルデータ
│       └── career.ts        # 経歴データ
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages自動デプロイ
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── CLAUDE.md
```

## ページ構成と要件

### トップページ (index.astro)
- ヒーローセクション: 名前・肩書き・キャッチフレーズ
- 強みのサマリー（DXコンサル / システム開発 / 組織改革）
- 最新ブログ記事3件
- 主要プロジェクトのハイライト

### 自己紹介・経歴 (about.astro)
- プロフィール文
- 職務経歴のタイムライン表示
- 保有資格・学歴

### 実績・プロジェクト (projects.astro)
- カード形式でプロジェクト一覧を表示
- 各プロジェクトはMarkdownファイルで管理（src/content/projects/）
- frontmatterに title, description, tags, date, thumbnail を持つ

### スキル (skills.astro)
- カテゴリ別にスキルを表示（技術 / 業務 / マネジメント）
- 習熟度やカテゴリでフィルタリング可能

### ブログ (blog/)
- Astro Content Collections で記事管理
- 記事はMarkdown (.md) で src/content/blog/ に配置
- frontmatterに title, description, date, tags, draft を持つ
- タグ別フィルタリング
- RSSフィード生成（@astrojs/rss）

### お問い合わせ (contact.astro)
- SNSリンク（GitHub, X/Twitter 等）
- メールリンクまたは外部フォームへの導線

## デザイン方針

- 日本語メインのサイト。フォントはNoto Sans JPを基本に使う
- ダークモード対応（システム設定に追従 + 手動切り替え）
- モバイルファースト・レスポンシブデザイン
- シンプルで落ち着いた配色。アクセントカラーは控えめに使う
- 過度なアニメーションは避け、ページ遷移はView Transitionsで滑らかにする

## コーディング規約

- コンポーネントのProps型は明示的にinterfaceで定義する
- CSS-in-JSは使わない。Tailwindユーティリティクラスを優先する
- 画像はAstroの`<Image />`コンポーネントで最適化する
- コミットメッセージは日本語OK。Conventional Commitsに準拠する
    - 例: `feat: ブログ一覧ページを追加`
    - 例: `fix: モバイルでヘッダーが崩れる問題を修正`

## リポジトリ・GitHub Pages設定

- **リポジトリ名**: `kita-motors.github.io`（GitHubユーザーサイト）
- **ローカルフォルダ名**: `my-portfolio`
- **公開URL**: `https://kita-motors.github.io/`
- baseの指定は不要（ユーザーサイトなのでルート配信される）

```bash
git clone https://github.com/kita-motors/kita-motors.github.io.git my-portfolio
```

astro.config.mjsで以下を設定する:

```js
export default defineConfig({
  site: 'https://kita-motors.github.io',
});
```

## 関連アカウント

- **メインアカウント**: `kita-motors` - ポートフォリオサイトのホスティング用
- **個人アカウント**: `takeyakita` - 個人プロジェクト用

`takeyakita` アカウントのプロジェクトも本ポートフォリオに掲載可能。
プロジェクトは区別なく、他のプロジェクトと同様に扱う。

deploy.ymlは公式のwithastro/action@v5を使用する。

## コンテンツ管理

ブログ記事のfrontmatter例:

```markdown
---
title: "おしえてタケヤくん開発記"
description: "社内チャットボットをNext.js + Gemini APIで構築した話"
date: 2025-12-01
tags: ["AI", "Next.js", "社内DX"]
draft: false
---
```

プロジェクトのfrontmatter例:

```markdown
---
title: "おしえてタケヤくん"
description: "社内向けAIチャットボットシステム"
tags: ["Next.js", "Gemini API", "TypeScript"]
date: 2025-06-01
thumbnail: "./images/takeya-kun.png"
url: ""
---
```

## 重要な注意事項

- `.env`ファイルは絶対にコミットしない
- 個人情報（電話番号、住所等）はコードに直接書かない
- 画像ファイルはsrc/assets/配下に置いてAstroの画像最適化を使う
- publicに置くのはfaviconやOGP画像など最適化不要なもののみ