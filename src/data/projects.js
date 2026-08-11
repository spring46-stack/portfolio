// 4つの学習プロジェクトのデータ。
// 「なぜこの順番か」→ 実際に取り組んだ順(シンプル→複雑)に並べることで、
// 技術力がどう積み上がってきたかをそのまま見せられるため、番号(01〜04)を
// 実際の進行順として使っている(ここでの numbering は装飾ではなく事実)。
import taskList from "../assets/placeholders/task-list.svg";
import taskForm from "../assets/placeholders/task-form.svg";
import taskEdit from "../assets/placeholders/task-edit.svg";
import notesList from "../assets/placeholders/notes-list.svg";
import notesPreview from "../assets/placeholders/notes-preview.svg";
import notesEdit from "../assets/placeholders/notes-edit.svg";
import kakeiboDashboard from "../assets/placeholders/kakeibo-dashboard.svg";
import kakeiboForm from "../assets/placeholders/kakeibo-form.svg";
import kakeiboMonthly from "../assets/placeholders/kakeibo-monthly.svg";
import phptestRun from "../assets/placeholders/phptest-run.svg";
import phptestCoverage from "../assets/placeholders/phptest-coverage.svg";

export const projects = [
  {
    no: "01",
    id: "task-manager-app",
    title: "タスク帳",
    subtitle: "task-manager-app",
    period: "学習フェーズ 1",
    stack: ["React 18", "Vite", "LocalStorage"],
    repo: "https://github.com/spring46-stack/task-manager-app",
    summary:
      "React学習の最初の一歩として作ったタスク管理アプリ。追加・編集・削除・完了切り替えの基本的なCRUD操作と、状態管理の基礎を身につけることを目的とした。",
    process: [
      {
        step: "設計",
        detail:
          "タスクを「1件のデータ(id・タイトル・完了状態)」の配列として管理する設計にした。まずは一番シンプルな形から始め、後から機能を足しやすくすることを意識した。",
      },
      {
        step: "実装",
        detail:
          "useStateでタスク一覧を管理し、追加・削除・完了トグルの関数を作成。保存先はサーバーではなくLocalStorageとし、まずはフロントエンドの状態管理そのものに集中できるようにした。",
      },
      {
        step: "学び",
        detail:
          "「画面に表示されているものは、常にstateを反映しているだけ」というReactの考え方(宣言的UI)を、実際に手を動かして体感できた。",
      },
    ],
    screens: [
      { src: taskList, label: "タスク一覧画面" },
      { src: taskForm, label: "新規作成画面" },
      { src: taskEdit, label: "編集画面" },
    ],
  },
  {
    no: "02",
    id: "notes-app",
    title: "メモ帳",
    subtitle: "notes-app",
    period: "学習フェーズ 2",
    stack: ["React 18", "Vite", "marked(Markdown)"],
    repo: "https://github.com/spring46-stack/notes-app",
    summary:
      "タスク帳の次のステップとして、検索・絞り込み機能とMarkdownプレビューを備えたメモアプリを作成。「データを探す・整形して見せる」という一歩進んだ要件に挑戦した。",
    process: [
      {
        step: "設計",
        detail:
          "メモの本文をMarkdown形式で保存し、表示時に`marked`ライブラリでHTMLに変換する設計にした。入力(生データ)と表示(整形後)を分けて考える経験になった。",
      },
      {
        step: "実装",
        detail:
          "検索ボックスの入力値でメモ一覧をリアルタイムに絞り込む機能を実装。タイトル・本文どちらも検索対象にし、該当件数が0件のときの表示も用意した。",
      },
      {
        step: "学び",
        detail:
          "外部ライブラリ(marked)を導入する際の「何が渡され、何が返るか」を確認しながら組み込む進め方や、検索のような頻繁に再計算される処理の書き方を学んだ。",
      },
    ],
    screens: [
      { src: notesList, label: "一覧・検索画面" },
      { src: notesPreview, label: "Markdownプレビュー画面" },
      { src: notesEdit, label: "編集画面" },
    ],
  },
  {
    no: "03",
    id: "kakeibo",
    title: "家計簿",
    subtitle: "kakeibo",
    period: "学習フェーズ 3",
    stack: ["Vue.js 3", "Composition API", "Chart表示"],
    repo: "https://github.com/spring46-stack/kakeibo",
    summary:
      "あえてReactではなくVue.js 3(Composition API)を選び、収支を記録・集計する家計簿アプリを作成。別フレームワークを学ぶことで「Reactの何が普遍的で、何がReact固有か」を切り分ける狙いがあった。",
    process: [
      {
        step: "設計",
        detail:
          "収入・支出のデータをカテゴリ別に分類し、月単位で集計する設計にした。Reactで学んだ「状態と表示を分ける」考え方をVueでも意識的に踏襲した。",
      },
      {
        step: "実装",
        detail:
          "`ref`・`reactive`で状態を持ち、`computed`で月別合計などの導出値を、`watch`で入力変化時の副作用を扱った。実装中はコメントでReactの`useState`/`useMemo`/`useEffect`との対応関係を書き残した。",
      },
      {
        step: "学び",
        detail:
          "Reactの`useState`はVueの`ref`、`useMemo`は`computed`、`useEffect`は`watch`におおむね対応する一方、Vueはテンプレート内で自動的に値の変化を検知してくれる(リアクティビティが言語機能寄り)という違いを体感した。",
      },
    ],
    screens: [
      { src: kakeiboDashboard, label: "収支ダッシュボード画面" },
      { src: kakeiboForm, label: "収支入力画面" },
      { src: kakeiboMonthly, label: "月別集計画面" },
    ],
  },
  {
    no: "04",
    id: "php-testing-practice",
    title: "PHPテスト練習",
    subtitle: "php-testing-practice",
    period: "学習フェーズ 4",
    stack: ["PHP", "ユニットテスト", "CI"],
    repo: "https://github.com/spring46-stack/php-testing-practice",
    summary:
      "バックエンド(PHP)のロジックに対して、ユニットテストを書く練習として取り組んだリポジトリ。※このプロジェクトの詳細な仕様は未確認のため、下記は暫定的な説明です。正式公開前に内容を見直してください。",
    process: [
      {
        step: "目的",
        detail:
          "画面のあるアプリ作りだけでなく、「正しく動くことをテストコードで保証する」という設計・実装の別の側面を練習することを目的とした。",
      },
      {
        step: "進め方",
        detail:
          "※詳細は要確認。関数・クラス単位でテストケースを書き、GitHub Actions上でテストを自動実行する流れを想定。",
      },
      {
        step: "学び",
        detail:
          "※詳細は要確認。実装後にこの項目を具体的な学びに書き換えてください。",
      },
    ],
    screens: [
      { src: phptestRun, label: "テスト実行結果画面" },
      { src: phptestCoverage, label: "カバレッジレポート画面" },
    ],
    unverified: true,
  },
];
