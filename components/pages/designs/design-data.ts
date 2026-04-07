export const designDirections = [
  {
    slug: "outlier-protocol-black-site",
    title: "Outlier Protocol Black Site",
    shortTitle: "Outlier Black",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "outlier-protocol-signal-red",
    title: "Outlier Protocol Signal Red",
    shortTitle: "Outlier Red",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "outlier-protocol",
    title: "Outlier Protocol",
    shortTitle: "Outlier",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "future-implementation",
    title: "Future Implementation",
    shortTitle: "Hope Grid",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "structured-future",
    title: "Structured Future",
    shortTitle: "Structured",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "liquid-interface",
    title: "Liquid Interface",
    shortTitle: "Liquid",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "brutalist-future",
    title: "Brutalist Future",
    shortTitle: "Brutalist",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "kinetic-typography-system",
    title: "Kinetic Typography System",
    shortTitle: "Kinetic",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "ai-native-workspace",
    title: "AI Native Workspace",
    shortTitle: "Workspace",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "spatial-canvas",
    title: "Spatial Canvas",
    shortTitle: "Spatial",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "minimal-black-lab",
    title: "Minimal Black Lab",
    shortTitle: "Black Lab",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "editorial-tech-magazine",
    title: "Editorial Tech Magazine",
    shortTitle: "Editorial",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
  {
    slug: "experimental-product-gallery",
    title: "Experimental Product Gallery",
    shortTitle: "Gallery",
    summary: "都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。",
  },
] as const;

export type DesignSlug = (typeof designDirections)[number]["slug"];

export const sharedStats = [
  { label: "受賞", value: "都知事杯 最優秀賞", detail: "都知事杯オープンデータ・ハッカソン 2025 で最優秀賞を受賞" },
  { label: "応募", value: "1,327名", detail: "応募総数から Final Stage 24件に進出し、都知事杯を獲得" },
  { label: "価値", value: "0→1 → 社会実装", detail: "最新技術をビジネス価値へ翻訳し、複雑な要件を実装へ落とし込む" },
];

export const sharedStrengths = [
  {
    title: "0→1を、社会実装へ。",
    body: "アイデア段階の構想を、触れる試作で終わらせず、実際に使われるプロダクトやシステムへ進めます。",
  },
  {
    title: "最新技術をビジネス価値へ翻訳する",
    body: "AI、GIS、クラウド、Web 開発を横断しながら、技術的に面白いだけで終わらない成果へつなげます。",
  },
  {
    title: "複雑な要件を、シンプルで拡張性の高いシステムへ",
    body: "複雑なデータ、運用要件、業務導線を整理し、無理なく拡張できる構造で実装します。",
  },
];

export const sharedProcess = [
  {
    step: "01",
    title: "新規事業・MVP開発",
    body: "アイデアを素早く形にし、市場検証を加速。要件定義、プロトタイプ、改善サイクルまで一気通貫で支援します。",
    bullets: ["要件定義・アーキテクチャ設計", "プロトタイプ・MVP開発", "仮説検証・改善サイクル"],
  },
  {
    step: "02",
    title: "フルスクラッチ開発",
    body: "複雑なビジネス要件を、シンプルで洗練されたアーキテクチャへ昇華。堅牢でスケーラブルなシステムを構築します。",
    bullets: ["ビジネス要件の深掘り・システム設計", "堅牢でスケーラブルなフルスタック開発", "継続的な保守・運用・拡張サポート"],
  },
  {
    step: "03",
    title: "高度なAIソリューション",
    body: "AI活用戦略の策定、PoC、LLM・生成AIの組み込み、独自データとの連携や高度分析まで担います。",
    bullets: ["AI活用戦略の策定・PoC", "LLM・生成AIのシステム組み込み", "独自データとの連携・高度分析"],
  },
];

export const sharedProjects = [
  {
    name: "YORUMICHI",
    type: "Product",
    body: "夜間光データ・犯罪情報・街灯密度を統合し、安全なルートを数値化。夜道の安心をデータで可視化するプロダクト。",
  },
  {
    name: "Project in Progress",
    type: "Coming soon",
    body: "現在、複数の受託開発案件を進行中。AIを組み込んだ高度なシステム開発を通じて、複雑なビジネス課題を解決しています。",
  },
  {
    name: "自治体・企業への応用",
    type: "Expansion",
    body: "防災計画、エリアマーケティング、都市計画。YORUMICHI が実証した技術を、自治体・企業の課題へ応用します。",
  },
];

export const sharedProductFeatures = [
  {
    title: "夜間光データ × 犯罪情報",
    body: "街灯密度、夜間の明るさ、犯罪件数など複数のデータソースを統合。 「怖い」という漠然とした不安を、データで可視化。",
  },
  {
    title: "スマートなルート提案",
    body: "治安・明るさ・人通りを総合計算し、安心して歩ける道を自動提案。 Leaflet、Google Maps APIで直感的に可視化。",
  },
  {
    title: "自治体・企業への応用",
    body: "防災計画、エリアマーケティング、都市計画。 YORUMICHIの技術を、貴社の課題に応用します。",
  },
];

export const sharedAchievements = [
  {
    label: "都知事杯 最優秀賞",
    title: "都知事杯オープンデータ・ハッカソン 2025",
    body: "1,327名の応募から、132件の提案が一次審査に進出、24件が Final Stage へ。東京都主催ハッカソンで最優秀賞を受賞。",
  },
  {
    label: "プロダクト",
    title: "YORUMICHI",
    body: "夜間光データ・犯罪情報・街灯密度を統合し、安全なルートを数値化。治安・明るさ・人通りを総合評価し、安心して歩ける道を可視化。",
  },
  {
    label: "Project in Progress",
    title: "複数の受託開発案件が進行中",
    body: "YORUMICHIが実証した、データ駆動型の社会課題解決を、現在進行中の受託開発案件へ展開しています。",
  },
];

export const sharedTeam = [
  {
    name: "山本 朱倫",
    role: "代表 / ビジネスディレクター",
    image: "/shuri.jpg",
    body: "高度な技術をクライアントの「利益」に翻訳するブリッジ役。MEOやSNSマーケティングの知見と、目標を必ず形にする圧倒的な完遂力で事業を牽引する。",
    bullets: ["AI・技術のビジネス実装", "営業戦略立案・集客支援", "プロジェクトの圧倒的完遂力"],
  },
  {
    name: "可野 海喜",
    role: "CTO",
    image: "/kano.png",
    link: "https://github.com/kkaiki",
    body: "都知事杯ハッカソン優勝メンバー。YORUMICHIの開発を主導。AIを組み込んだ高度なアーキテクチャ設計と迅速なシステム開発を実現。",
    bullets: ["TypeScript / Next.js", "GCP / dbt / AI (Mastra)", "データ分析・可視化"],
  },
  {
    name: "岩本 涼平",
    role: "YORUMICHI開発リード",
    image: "/ryosuke.png",
    body: "都知事杯ハッカソン優勝メンバー。YORUMICHIのフロントエンド・インフラを担当。実装品質と保守性を両立。",
    bullets: ["フルスタック開発", "テスト・CI/CD", "パフォーマンス最適化"],
  },
];
