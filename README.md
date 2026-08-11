# K — Portfolio

React + Viteで作成したポートフォリオサイトです。GitHub Actionsで自動ビルド・GitHub Pagesへの自動デプロイを行います。

詳しい仕様は [SPEC.md](./SPEC.md) を参照してください。

## 使用技術

- フロントエンド: React 18, Vite
- ローカル開発環境: Docker, docker-compose
- CI/CD: GitHub Actions
- ホスティング: GitHub Pages

## ローカルでの動かし方

### npmで直接動かす場合

```bash
npm install
npm run dev
# http://localhost:5173 で確認できます
```

### Dockerで動かす場合

```bash
# 開発サーバー(ホットリロードあり)
docker compose up dev
# http://localhost:5173

# 本番ビルドの確認(GitHub Pagesに公開される見た目に近い状態)
docker compose up preview
# http://localhost:8080
```

## GitHubリポジトリを作成して公開するまでの手順

このリポジトリはローカルの `git` リポジトリとして作成済みですが、GitHub上への作成・pushは
認証情報が必要なため、お手元で行っていただく必要があります。以下の手順で進めてください。

1. **GitHub上に空のリポジトリを作成する**
   [https://github.com/new](https://github.com/new) から、Owner を `spring46-stack`、リポジトリ名を任意(例: `portfolio`)で作成します。「Add a README」などのチェックは付けずに、空の状態で作成してください。

2. **ローカルのリポジトリにリモートを追加してpushする**

   ```bash
   cd portfolio
   git remote add origin https://github.com/spring46-stack/<作成したリポジトリ名>.git
   git branch -M main
   git push -u origin main
   ```

3. **GitHub Pagesを有効にする**

   リポジトリの `Settings` → `Pages` を開き、`Build and deployment` の `Source` を **「GitHub Actions」** に設定します。(すでに `.github/workflows/deploy.yml` を用意しているので、この設定をするだけで自動的にビルド・公開が行われます。)

4. **公開を確認する**

   `main` ブランチにpushすると、`Actions` タブでワークフローが実行されます。成功すると
   `https://spring46-stack.github.io/<リポジトリ名>/` でサイトが公開されます。

## 内容を差し替える前に確認してほしいこと

- `src/data/projects.js` の `php-testing-practice` の項目は、リポジトリの詳細を確認できなかったため暫定的な説明になっています。実際の作業内容に合わせて書き換えてください。
- `src/assets/placeholders/` 内のSVGは仮の画面図です。各リポジトリの実際のスクリーンショットに差し替えてください(モーダル内の `screens` 配列で参照しています)。
- `src/data/roadmap.js` に記載しているキャリアビジョンは、いただいた内容をそのまま反映しています。内容に変更があれば、このファイルを直接編集してください。

## ディレクトリ構成(抜粋)

```
portfolio/
├─ .github/workflows/deploy.yml   # CI/CD
├─ src/
│  ├─ components/                 # 各セクションのコンポーネント
│  ├─ data/                       # プロジェクト・ロードマップのデータ
│  ├─ assets/placeholders/        # 画面図のプレースホルダー画像
│  └─ hooks/useReveal.js          # スクロール時のフェードイン
├─ Dockerfile                     # dev / build / prod のマルチステージ構成
├─ docker-compose.yml
├─ SPEC.md
└─ README.md
```
