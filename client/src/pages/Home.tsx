import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap, Users, Code, Award, ExternalLink, Menu, X, Youtube, Instagram, Twitter, Video } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy:
 * - White-based minimalism inspired by Apple product pages
 * - Premium typography: Playfair Display for headings, Sora for body
 * - Ample whitespace and subtle depth with soft shadows
 * - Framer Motion for smooth, sophisticated animations
 * - Trust-building through public achievements (Tokyo Governor's Cup Hackathon)
 * 
 * Key Facts:
 * - Team Name: Aliss-labs.com
 * - Main Product: YORUMICHI - Night-time safe route navigation using crime data & street lighting
 * - Achievement: Winner of Tokyo Governor's Cup Open Data Hackathon 2025 (Japan's largest hackathon)
 * - Team Member: Kaiki Kano (CTO) - GitHub: https://github.com/kkaiki
 */

export default function Home() {
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any // Apple-like smooth easing
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl md:text-2xl font-bold text-primary">Aliss-labs.com</div>
          <div className="hidden md:flex gap-8">
            <a href="#trust" className="text-sm hover:text-primary transition">
              実績
            </a>
            <a href="#product" className="text-sm hover:text-primary transition">
              プロダクト
            </a>
            <a href="#team" className="text-sm hover:text-primary transition">
              チーム
            </a>
            <a href="#service" className="text-sm hover:text-primary transition">
              サービス
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition">
              お問い合わせ
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-secondary rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Slide from right */}
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/30 z-30 md:hidden"
              />
              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-64 bg-white z-40 md:hidden shadow-2xl overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* Close button */}
                  <div className="flex justify-end p-4 border-b border-border">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 hover:bg-secondary rounded-lg transition"
                      aria-label="Close menu"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  {/* Menu items */}
                  <nav className="flex-1 px-4 py-6 space-y-1">
                    <a
                      href="#trust"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition"
                    >
                      実績
                    </a>
                    <a
                      href="#product"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition"
                    >
                      プロダクト
                    </a>
                    <a
                      href="#team"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition"
                    >
                      チーム
                    </a>
                    <a
                      href="#service"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition"
                    >
                      サービス
                    </a>
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition"
                    >
                      お問い合わせ
                    </a>
                  </nav>
                  {/* CTA Button */}
                  <div className="p-4 border-t border-border">
                    <Button
                      className="w-full gap-2"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        const contactSection = document.getElementById("contact");
                        contactSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span>相談する</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663326135477/Eqeq6acEPPmzqFHMycahdn/hero-abstract-tech-UaFgzi9vEGSUXyU3fokh3L.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              0→1を、
              <br />
              <span className="text-primary">社会実装へ。</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                まずは無料相談から
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                実績を見る
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section - Tokyo Governor's Cup */}
      <section id="trust" className="py-20 bg-gradient-to-b from-white to-secondary/20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">日本最大級のハッカソン優勝</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                都知事杯オープンデータ・ハッカソン 2025
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                1,327名の応募から、最優秀賞「都知事杯」を受賞。
                複雑なデータを直感的な価値に変える技術力が、社会課題を解決します。
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition"
              >
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">都知事杯 最優秀賞</h3>
                <p className="text-muted-foreground mb-4">
                  東京都主催「都知事杯オープンデータ・ハッカソン 2025」で最優秀賞を受賞。
                  1,327名の応募から、132件の提案が一次審査に進出、24件がFinal Stageへ。
                </p>
                <a
                  href="https://shintosei.metro.tokyo.lg.jp/post_upcp7_251028/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
                >
                  公式発表を見る
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition"
              >
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">YORUMICHI</h3>
                <p className="text-muted-foreground mb-4">
                  夜間光データ・犯罪情報・街灯密度を統合し、安全なルートを数値化。
                  治安・明るさ・人通りを総合評価し、安心して歩ける道を可視化。
                </p>
                <a
                  href="/yorumichi"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
                >
                  プロジェクトの詳細を見る
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition"
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Project in Progress</h3>
                <p className="text-muted-foreground mb-4">
                  現在、複数の受託開発案件を進行中。
                  AIを組み込んだ高度なシステム開発を通じて、クライアントの複雑なビジネス課題を解決しています。
                </p>
                <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold opacity-80">
                  Coming soon
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Section - Yorumichi */}
      <section id="product" className="py-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                YORUMICHIが実証した、データ駆動型の社会課題解決
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                夜間の安全という社会課題を、オープンデータ・位置情報・AI分析で解決したYORUMICHI。
                この技術を、貴社のビジネスニーズに応用します。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div variants={itemVariants}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663326135477/Eqeq6acEPPmzqFHMycahdn/yorumichi-product-showcase-mBDftCcectrKiwd5oZVJcN.webp"
                  alt="Yorumichi Product"
                  className="rounded-2xl shadow-lg w-full"
                />
                <p className="text-center text-sm text-muted-foreground mt-4">
                  YORUMICHI - 夜間の安全なルートを数値化・可視化
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">夜間光データ × 犯罪情報</h3>
                  <p className="text-muted-foreground">
                    街灯密度、夜間の明るさ、犯罪件数など複数のデータソースを統合。
                    「怖い」という漠然とした不安を、データで可視化。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">スマートなルート提案</h3>
                  <p className="text-muted-foreground">
                    治安・明るさ・人通りを総合計算し、安心して歩ける道を自動提案。
                    Leaflet、Google Maps APIで直感的に可視化。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">自治体・企業への応用</h3>
                  <p className="text-muted-foreground">
                    防災計画、エリアマーケティング、都市計画。
                    YORUMICHIの技術を、貴社の課題に応用します。
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.location.href = '/yorumichi'}
              >
                YORUMICHIについて詳しく見る
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663326135477/Eqeq6acEPPmzqFHMycahdn/team-bg-gradient-2dd2G3RdDoJDb9vXUr4RqV.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                チーム構成
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                都知事杯ハッカソン優勝メンバーが、貴社のプロジェクトに専任。
                技術、営業、戦略を統合した、最高のチーム体制。
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* CEO */}
              <motion.div
                variants={itemVariants}
                className="bg-[#f0f9ff]/80 p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col h-full"
              >
                <div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 border-primary/20 flex items-center justify-center shrink-0">
                  <img src="/shuri.jpg" alt="山本 朱倫" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-2xl font-bold mb-2">山本 朱倫</h3>
                <p className="text-sm text-primary font-semibold mb-3">代表 / ビジネスディレクター</p>
                <p className="text-muted-foreground mb-4 flex-grow">
                  高度な技術をクライアントの「利益」に翻訳するブリッジ役。MEOやSNSマーケティングの知見と、目標を必ず形にする圧倒的な完遂力で事業を牽引する。
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground mb-6">
                  <li>✓ AI・技術のビジネス実装</li>
                  <li>✓ 営業戦略立案・集客支援</li>
                  <li>✓ プロジェクトの圧倒的完遂力</li>
                </ul>
              </motion.div>

              {/* CTO */}
              <motion.div
                variants={itemVariants}
                className="bg-[#eff6ff]/80 p-8 rounded-2xl border border-blue-200 shadow-md flex flex-col h-full"
              >
                <div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 border-primary/20 flex items-center justify-center shrink-0">
                  <img src="/kano.png" alt="加納 海喜" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-2xl font-bold mb-2">加納 海喜</h3>
                <p className="text-sm text-primary font-semibold mb-3">CTO / YORUMICHI開発リード</p>
                <p className="text-muted-foreground mb-4 flex-grow">
                  都知事杯ハッカソン優勝メンバー。
                  YORUMICHIの開発を主導。AIを組み込んだ高度なアーキテクチャ設計と迅速なシステム開発を実現。
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground mb-6">
                  <li>✓ TypeScript / Next.js</li>
                  <li>✓ GCP / dbt / AI (Mastra)</li>
                  <li>✓ データ分析・可視化</li>
                </ul>
              </motion.div>

              {/* Engineer */}
              <motion.div
                variants={itemVariants}
                className="bg-[#f8fafc]/80 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full"
              >
                <div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 border-primary/20 flex items-center justify-center shrink-0">
                  <img src="/ryosuke.png" alt="岩本 涼平" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-2xl font-bold mb-2">岩本 涼平</h3>
                <p className="text-sm text-primary font-semibold mb-3">Engineer / フルスタックエンジニア</p>
                <p className="text-muted-foreground mb-4 flex-grow">
                  都知事杯ハッカソン優勝メンバー。
                  YORUMICHIのフロントエンド・インフラを担当。実装品質と保守性を両立。
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground mb-6">
                  <li>✓ フルスタック開発</li>
                  <li>✓ テスト・CI/CD</li>
                  <li>✓ パフォーマンス最適化</li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.location.href = '/team'}
              >
                チームメンバーの詳細を見る
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Menu Section */}
      <section id="service" className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                サービスメニュー
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                アイデアの検証から、エンタープライズシステムまで。
                貴社の成長段階に応じた、最適なソリューション。
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* MVP */}
              <motion.div
                variants={itemVariants}
                className="bg-[#f0fdf4]/80 p-6 md:p-8 rounded-2xl border-none shadow-sm hover:shadow-lg transition flex flex-col h-full"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">新規事業・MVP開発</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  アイデアを素早く形にし、市場検証を加速。ハッカソン優勝実績のスピードと品質で、0→1の立ち上げを強力にサポートします。
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>要件定義・アーキテクチャ設計</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>プロトタイプ・MVP開発</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>仮説検証・改善サイクル</span>
                  </li>
                </ul>
              </motion.div>

              {/* Full Scratch */}
              <motion.div
                variants={itemVariants}
                className="bg-[#eff6ff]/90 p-6 md:p-8 rounded-2xl border-none shadow-md hover:shadow-xl transition flex flex-col h-full relative overflow-hidden"
              >
                {/* 削除した個別相談のバッジの代わりにアクセントを追加 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">フルスクラッチ開発</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  拡張性と保守性を備えた、次世代の基幹システムを構築。複雑なビジネス要件を、シンプルで洗練されたアーキテクチャへと昇華させます。
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>ビジネス要件の深掘り・システム設計</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>堅牢でスケーラブルなフルスタック開発</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>継続的な保守・運用・拡張サポート</span>
                  </li>
                </ul>
              </motion.div>

              {/* AI Integration */}
              <motion.div
                variants={itemVariants}
                className="bg-[#fcf5ff]/80 p-6 md:p-8 rounded-2xl border-none shadow-sm hover:shadow-lg transition flex flex-col h-full"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">高度なAIソリューション</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  事業の付加価値を最大化するAIインテグレーション。最新のAI技術やデータ連携を駆使し、自動化やインサイト抽出など高度なシステム要件を実現します。
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>AI活用戦略の策定・PoC</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>LLM・生成AIのシステム組み込み</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>独自データとの連携・高度分析</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-12 flex justify-center">
              <Button
                size="lg"
                className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                まずは無料相談から
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663326135477/Eqeq6acEPPmzqFHMycahdn/contact-section-bg-aFq3K9bESdpZ3EFSrpUaqG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                最高のチームと、最高のプロダクトを。
              </h2>
              <p className="text-lg text-muted-foreground">
                貴社のビジョンを、社会実装へ。まずはお気軽にご相談ください。
              </p>
            </motion.div>

            <motion.form
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
            >
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">{submitMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-800">{submitMessage}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  会社名 / 組織名
                </label>
                <input
                  type="text"
                  value={contactCompany}
                  onChange={(e) => setContactCompany(e.target.value)}
                  placeholder="例: 株式会社 〇〇"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  ご担当者名
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="例: 山田太郎"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="example@company.com"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  電話番号（任意）
                </label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="例: 090-1234-5678"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  ご相談内容
                </label>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="プロジェクトの概要、課題、期待値などをお聞かせください。"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
                onClick={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus('idle');

                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        companyName: contactCompany,
                        contactName,
                        email: contactEmail,
                        phone: contactPhone,
                        message: contactMessage,
                      }),
                    });

                    const data = await response.json();

                    if (response.ok) {
                      setSubmitStatus('success');
                      setSubmitMessage(data.message || 'お問い合わせを受け付けました。');
                      setContactCompany('');
                      setContactName('');
                      setContactEmail('');
                      setContactPhone('');
                      setContactMessage('');
                    } else {
                      setSubmitStatus('error');
                      setSubmitMessage(data.message || 'エラーが発生しました。');
                    }
                  } catch (error) {
                    setSubmitStatus('error');
                    setSubmitMessage('送信に失敗しました。しばらく後にお試しください。');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                {isSubmitting ? '送信中...' : '相談を申し込む'}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                プライバシーポリシーに同意の上、送信してください。
              </p>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      {showStickyCTA && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
        >
          <Button
            size="lg"
            className="gap-2 shadow-lg hover:shadow-xl transition-shadow rounded-full px-6"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>まずは無料相談から</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-xl">未定</h4>
              <p className="text-sm text-white/70 mb-6">
                都知事杯ハッカソン優勝チーム。
                0から創る、圧倒的な速さと強さ。
              </p>

              {/* SNS Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Video className="w-5 h-5 text-white" />
                  <span className="sr-only">TikTok</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#service" className="hover:text-white transition">
                    MVP開発
                  </a>
                </li>
                <li>
                  <a href="#service" className="hover:text-white transition">
                    フルスクラッチ開発
                  </a>
                </li>
                <li>
                  <a href="#service" className="hover:text-white transition">
                    自治体・DX支援
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">チーム</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#team" className="hover:text-white transition">
                    メンバー紹介
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kkaiki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    相談フォーム
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 YORUMICHI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  );
}
