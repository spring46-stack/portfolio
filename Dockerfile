# ==========================================================================
# マルチステージ構成のDockerfile
#
# このポートフォリオサイト自体はGitHub Pages(静的ホスティング)で公開するため、
# 本番の「デプロイ先」としてDockerを使うわけではない。
# ここでのDockerの役割は下記の2つ:
#   1. dev   … ローカル開発環境を誰の手元でも同じ状態で再現する(Node.jsの
#              バージョン差異などによる「自分の環境では動く」を防ぐ)
#   2. prod  … `npm run build` で作られる本番相当のビルド成果物を、
#              GitHub Pagesにデプロイする前にローカルのnginxで確認する
# ==========================================================================

# ---- base: 依存関係のインストールを共通化 ----
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ---- dev: ローカル開発サーバー(ホットリロード付き) ----
FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---- build: 本番用の静的ファイルを生成 ----
FROM base AS build
COPY . .
RUN npm run build

# ---- prod: nginxでビルド成果物を配信(GitHub Pagesに公開する前の最終確認用) ----
FROM nginx:1.27-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
