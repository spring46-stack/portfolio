import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesは「https://<user>.github.io/<repo名>/」のように
  // サブディレクトリ配下で公開される。絶対パス("/")のままだとJS/CSSが
  // 読み込めなくなるため、リポジトリ名に依存しない相対パス("./")にしている。
  base: "./",
})
