export const summary =
  "C#、.NET Core、Blazor、TypeScript、React、Next.jsを用いたフルスタック開発を経験。PT Realta Chakradarmaでは、不動産管理システム「Bimasakti 11」のモバイルアプリ全面刷新を主導し、2か月で開発を完了しました。また、業務用デスクトップアプリのビジネスアナリストを代行し、業務要件を詳細な技術仕様に落とし込みました。システム設計、性能改善、セキュリティ対策に加え、部門横断での課題解決に取り組んできました。";

export const realta = [
  {
    period: { from: "2025年4月", to: "2026年3月" },
    title: "ソフトウェアエンジニア（R&D部門）",
    achievements: [
      "社内エンジニア向けの教材を作成し、RealtaNetCoreLibraryのフロントエンド開発手順とコンポーネント、Cursorを用いた既存コードの改修、独自バックエンドが生成する署名付きURLの組み込みについて、複数日にわたる研修を実施。",
      "社内フロントエンドライブラリRealtaNetCoreLibraryの機能追加、不具合修正、最適化を担当。40件以上の積み残しを解消し、新規チケットに継続して対応できる開発ペースを確保。",
      "APIエンドポイントの約95%で使われる、DataTableからDTOへの変換・マッピング処理（社内バックエンドライブラリRealtaLibrary）を最適化。時間計算量をO(m × n × o)からO(m × n)に改善し、処理時間を5,000 ms超から25 ms未満に短縮（約200倍の高速化）。",
      "RealtaNetCoreLibraryの複数コンポーネントで描画処理を見直し、不要な再描画とメモリ使用量を削減。最長8秒間のフリーズが発生していた画面を、フレーム落ちなく120 FPSで安定動作するよう改善。",
    ],
  },
  {
    period: { from: "2024年4月", to: "2025年3月" },
    title: "ソフトウェアエンジニア（Software Factory部門）",
    achievements: [
      "不動産管理システム「Bimasakti 11」の開発において、旧Bimasakti Mobile AppsからBimasakti 11 Mobile Appsへの全面刷新を主導。チーム管理、技術仕様策定、品質管理を兼務し、従来約1年を要していた開発を2か月で完了。",
      "業務用デスクトップアプリ「Bimasakti 11 Core」のビジネスアナリストを初めて担当。業務要件を詳細な業務フロー、UI/UXプロトタイプ、データベーススキーマ、クエリ設計に落とし込み、進行上のボトルネックを解消して納期を約2か月短縮。",
      "HMAC認証とJWTを利用したマイクロサービス間のAPI通信向けセキュリティ機構を1か月で設計・開発し、本番環境に導入。攻撃を受けた場合の影響がシステム全体に及ばないよう、影響範囲を限定。",
      "R&D部門の社内ライブラリのドキュメントを新規作成。初めて利用するエンジニアも理解しやすくなり、立ち上がりの早期化と生産性向上に貢献。",
    ],
  },
];

export const freelance = [
  {
    name: "BioTrace",
    period: "2025年 ～ 現在",
    overview:
      "インドネシア大学の法歯学部門と連携し、歯科診療記録とDNAデータを管理する法医学向け身元確認プラットフォームを共同開発。システム構成、データベーススキーマ、UI/UXを設計し、構造化データ入力、マルチテナント型の組織管理、複数組織へのユーザーアクセス、ロールベースのアクセス制御を実装。インドネシア全土での活用を見据え、法医学的分析と個人の身元確認機能を開発中。侵入テストに備え、OWASP Top 10に基づくセキュリティ対策を実施。",
    stack: "TypeScript、React.js、Next.js、TanStack、Drizzle ORM、PostgreSQL",
  },
  {
    name: "Solusi Investor Digital",
    period: "2022年 ～ 2025年",
    overview:
      "Bubble.ioを用いたウェブサイトの設計、開発、保守を単独で担当。システム構成を設計し、ユーザー登録、データ収集、メール通知、レポート一括生成を実装。初期開発を3か月で完了。",
    stack: "Bubble.io",
  },
  {
    name: "Bo’a Gardens Rote Website（2023年）、Yuanita Makeup（2024年）",
    overview:
      "各顧客の要望に合わせ、使いやすさを重視した企業紹介・情報掲載サイトを単独で開発。",
    stack: "Next.js、Tailwind CSS",
  },
];

export const personalProjects = [
  {
    name: "AniWiki",
    overview:
      "ReactとTypeScriptで、Netflixの画面構成を参考にしたMyAnimeListクライアントを開発。REST APIと連携し、Vercelに公開。",
    stack: "React、TypeScript、REST API、Vercel",
  },
  {
    name: "Rekindle",
    overview:
      "3人チームでゲームジャム「Ludum Dare 51」に参加し、企画から完成までを72時間で実施。",
    stack: "Unity",
  },
];

export const skills = [
  { category: "プログラミング言語", details: "C#、TypeScript、HTML、CSS" },
  { category: "フロントエンド", details: "React.js、Next.js、TanStack、Tailwind CSS、Blazor" },
  { category: "バックエンド・認証", details: ".NET Core、REST API、OAuth、JWT、HMAC認証" },
  { category: "データベース・ORM", details: "PostgreSQL、SQL Server、Drizzle ORM" },
  { category: "設計", details: "システム、データベース、UI/UX、API、マルチテナント構成" },
  { category: "DevOps", details: "Git、GitHub、GitHub Actions、Docker、Vercel" },
  { category: "その他", details: "Unity、Bubble.io" },
  { category: "語学", details: "インドネシア語（母語）、英語（流暢）、日本語（JLPT N4合格、N3相当を学習中）" },
];
