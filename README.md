# K — Portfolio

React + Viteで作成したエンジニアポートフォリオサイトです。

これまでの開発経験や制作物、今後の学習・キャリアロードマップなどをまとめています。

また、単にWebサイトを作るだけではなく、開発環境の構築からビルド・デプロイまでを一通り経験することを目的として、Docker・GitHub Actions・GitHub Pagesを利用しています。

---

## Portfolio

**公開サイト**

https://spring46-stack.github.io/portfolio/

---

## Features

このポートフォリオでは、以下の内容を掲載しています。

- 自己紹介
- スキル・使用技術
- 開発・制作したプロジェクト
- プロジェクトの詳細
- エンジニアとしての学習内容
- 今後の学習・キャリアロードマップ

また、以下の開発環境・運用環境を構築しています。

- React + Viteによるフロントエンド開発
- Dockerによるローカル開発環境
- GitHub Actionsによる自動ビルド
- GitHub Pagesへの自動デプロイ

---

# 🛠 使用技術

| 分類 | 技術 |
| --- | --- |
| フロントエンド | React 18 |
| ビルドツール | Vite |
| 開発環境 | Docker / docker-compose |
| バージョン管理 | Git / GitHub |
| CI/CD | GitHub Actions |
| ホスティング | GitHub Pages |

---

# システム構成

このポートフォリオは、以下の流れで開発・公開しています。

```text
┌─────────────────┐
│   Local PC      │
│                 │
│ React + Vite    │
│ Docker          │
└────────┬────────┘
         │
         │ git push
         ↓
┌─────────────────┐
│     GitHub      │
│                 │
│ Git Repository  │
└────────┬────────┘
         │
         │ pushを検知
         ↓
┌─────────────────┐
│ GitHub Actions  │
│                 │
│ npm ci          │
│ npm run build   │
└────────┬────────┘
         │
         │ deploy
         ↓
┌─────────────────┐
│  GitHub Pages   │
│                 │
│  Portfolio      │
└─────────────────┘
