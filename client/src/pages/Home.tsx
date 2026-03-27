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
 * - Team Name: Aliss-labs
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
      <nav className="fixed top-0 w-full bg-white z-50 border-b-2 border-neutral-100 shadow-sm">
        <div className="container px-4 md:px-8 flex items-center justify-between h-20">
          <div className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tighter uppercase">Aliss-labs</div>
          <div className="hidden md:flex items-center gap-8 font-bold text-sm">
            <a href="#trust" className="hover:text-neutral-500 transition-colors">
              実績
            </a>
            <a href="#product" className="hover:text-neutral-500 transition-colors">
              プロダクト
            </a>
            <a href="#team" className="hover:text-neutral-500 transition-colors">
              チーム
            </a>
            <a href="#service" className="hover:text-neutral-500 transition-colors">
              サービス
            </a>
            <a href="#contact" className="hover:text-neutral-500 transition-colors">
              お問い合わせ
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-neutral-100 rounded-full transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/40 z-30 md:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-40 md:hidden shadow-2xl overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-end p-6">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <nav className="flex-1 px-8 py-4 space-y-6">
                    <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-black">実績</a>
                    <a href="#product" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-black">プロダクト</a>
                    <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-black">チーム</a>
                    <a href="#service" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-black">サービス</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-black">お問い合わせ</a>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section - Starbucks style big split banner */}
      <section className="pt-20 md:pt-28 pb-10 bg-white">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden bg-neutral-900 text-white shadow-2xl">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-neutral-400 font-bold tracking-widest uppercase mb-4 text-sm">Aliss-labs</span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                0→1を、<br />社会実装へ。
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-10 font-bold leading-relaxed max-w-md">
                都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件を拡張性の高いシステムへと昇華。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-neutral-900 text-white font-bold px-8 py-6 text-lg transition-all" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  無料相談
                </Button>
                <Button size="lg" className="rounded-full bg-white text-neutral-900 hover:bg-neutral-200 font-bold px-8 py-6 text-lg transition-all" onClick={() => document.getElementById("trust")?.scrollIntoView({ behavior: "smooth" })}>
                  実績を見る
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 bg-neutral-100 relative min-h-[300px] flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-white opacity-80" />
              <div className="relative z-10 w-4/5 aspect-square rounded-full border-[16px] border-white shadow-xl flex items-center justify-center bg-neutral-900 border-opacity-50">
                <span className="text-6xl font-black text-white italic">AL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section 1 - Trust */}
      <section id="trust" className="py-6 bg-white">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row-reverse bg-neutral-100 rounded-lg overflow-hidden">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-neutral-900 leading-tight">
                都知事杯オープンデータ・ハッカソン 2025
              </h2>
              <p className="text-lg font-bold text-neutral-600 mb-8">
                1,327名の応募から、最優秀賞「都知事杯」を受賞。<br />
                複雑なデータを直感的な価値に変える技術力が、社会課題を解決します。
              </p>
              <div>
                <a
                  href="https://shintosei.metro.tokyo.lg.jp/post_upcp7_251028/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border-2 border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold px-6 py-3 transition-all"
                >
                  公式発表を見る
                </a>
              </div>
            </div>
            <div className="md:w-1/2 bg-neutral-200 min-h-[400px] flex items-center justify-center p-12">
              <Award className="w-48 h-48 text-neutral-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Split Section 2 - Product */}
      <section id="product" className="py-6 bg-white">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row bg-[#ececeb] rounded-lg overflow-hidden">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-neutral-900 leading-tight">
                データ駆動型の<br />社会課題解決
              </h2>
              <p className="text-lg font-bold text-neutral-600 mb-8">
                夜間の安全という課題を、オープンデータ・位置情報・AI分析で解決した「YORUMICHI」。この技術を、貴社のビジネスニーズに応用します。
              </p>
              <div>
                <button
                  onClick={() => window.location.href = '/yorumichi'}
                  className="inline-block rounded-full border-2 border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold px-6 py-3 transition-all"
                >
                  詳細を見る
                </button>
              </div>
            </div>
            <div className="md:w-1/2 bg-[#dbdbdb] min-h-[400px] flex items-center justify-center p-8">
                <div className="w-full max-w-sm aspect-[4/3] rounded-xl bg-white shadow-xl flex flex-col items-center justify-center p-8 text-center rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-20 h-20 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                    <span className="text-3xl font-black text-white">Y</span>
                  </div>
                  <p className="text-neutral-900 font-bold tracking-widest text-xl">YORUMICHI</p>
                  <p className="text-neutral-500 text-sm mt-2 font-bold">INTERFACE DEMO</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#f4f4f3]">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-neutral-900 tracking-tight">TEAM</h2>
            <p className="text-lg font-bold text-neutral-600">
              都知事杯ハッカソン優勝メンバーが、貴社のプロジェクトに専任。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-center p-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-neutral-100">
                <img src="/shuri.jpg" alt="山本 朱倫" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-neutral-900">山本 朱倫</h3>
              <p className="text-sm font-bold text-neutral-500 mb-6 uppercase tracking-widest">CEO / Director</p>
              <p className="text-neutral-600 font-medium text-center">
                高度な技術を「利益」に翻訳するブリッジ役。目標を必ず形にする圧倒的な完遂力で事業を牽引。
              </p>
            </div>

            {/* CTO */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-center p-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-neutral-100">
                <img src="/kano.png" alt="加納 海喜" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-neutral-900">加納 海喜</h3>
              <p className="text-sm font-bold text-neutral-500 mb-6 uppercase tracking-widest">CTO / Lead Arch</p>
              <p className="text-neutral-600 font-medium text-center">
                AIを組み込んだ高度なアーキテクチャ設計と迅速なシステム開発を実現。
              </p>
            </div>

            {/* Engineer */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-center p-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-neutral-100">
                <img src="/ryosuke.png" alt="岩本 涼平" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-neutral-900">岩本 涼平</h3>
              <p className="text-sm font-bold text-neutral-500 mb-6 uppercase tracking-widest">Engineer</p>
              <p className="text-neutral-600 font-medium text-center">
                フロントエンド・インフラを担当。高度なUI実装品質と堅牢な保守性を両立。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Menu Section */}
      <section id="service" className="py-20 bg-white">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-neutral-900 tracking-tight">SERVICE</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-neutral-900 text-white rounded-lg p-10 md:p-14 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-3xl font-black mb-6">新規事業・MVP開発</h3>
                <p className="text-lg font-bold text-neutral-300 leading-relaxed mb-8">
                  アイデアを素早く形にし、市場検証を加速。<br />
                  ハッカソン優勝実績のスピードと品質で、<br />0→1の立ち上げを強力にサポートします。
                </p>
              </div>
              <div>
                <ul className="space-y-4 font-bold text-neutral-400 mb-8 list-none">
                  <li>— 要件定義・アーキテクチャ設計</li>
                  <li>— プロトタイプ・MVP開発</li>
                  <li>— 仮説検証・改善サイクル</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-neutral-100 rounded-lg p-10 flex-1 shadow-sm">
                <h3 className="text-2xl font-black mb-4 text-neutral-900">フルスクラッチ開発</h3>
                <p className="text-base font-bold text-neutral-600 leading-relaxed">
                  拡張性と保守性を備えた、次世代の基幹システムを構築。複雑なビジネス要件を、シンプルで洗練されたアーキテクチャへと昇華させます。
                </p>
              </div>
              <div className="bg-neutral-100 rounded-lg p-10 flex-1 shadow-sm border-l-8 border-neutral-900">
                <h3 className="text-2xl font-black mb-4 text-neutral-900">高度なAIソリューション</h3>
                <p className="text-base font-bold text-neutral-600 leading-relaxed">
                  最新の生成AI技術を駆使し、自動化やインサイト抽出など高度なシステム要件を実現。事業の付加価値を最大化します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-900 border-t-8 border-neutral-800">
        <div className="container px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">CONTACT</h2>
            <p className="text-lg font-bold text-neutral-400">
              貴社のビジョンを、社会実装へ。
            </p>
          </div>

          <form className="bg-white p-8 md:p-12 rounded-lg shadow-2xl space-y-8">
            {submitStatus === 'success' && (
              <div className="p-6 bg-green-50 border-l-8 border-green-500 rounded text-green-900 font-bold">
                {submitMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-6 bg-red-50 border-l-8 border-red-500 rounded text-red-900 font-bold">
                {submitMessage}
              </div>
            )}

            <div>
              <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">
                会社名 / 組織名
              </label>
              <input
                type="text"
                value={contactCompany}
                onChange={(e) => setContactCompany(e.target.value)}
                placeholder="例: 株式会社 〇〇"
                required
                className="w-full px-5 py-4 bg-neutral-100 border-2 border-transparent focus:border-neutral-900 rounded font-bold text-neutral-900 transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">
                  ご担当者名
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="例: 山田太郎"
                  required
                  className="w-full px-5 py-4 bg-neutral-100 border-2 border-transparent focus:border-neutral-900 rounded font-bold text-neutral-900 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">
                  電話番号（任意）
                </label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="例: 090-1234-5678"
                  className="w-full px-5 py-4 bg-neutral-100 border-2 border-transparent focus:border-neutral-900 rounded font-bold text-neutral-900 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">
                メールアドレス
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="example@company.com"
                required
                className="w-full px-5 py-4 bg-neutral-100 border-2 border-transparent focus:border-neutral-900 rounded font-bold text-neutral-900 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-neutral-900 mb-2 uppercase tracking-wide">
                ご相談内容
              </label>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="プロジェクトの概要、課題、期待値などをお聞かせください。"
                rows={5}
                required
                className="w-full px-5 py-4 bg-neutral-100 border-2 border-transparent focus:border-neutral-900 rounded font-bold text-neutral-900 transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-black py-6 text-lg tracking-widest shadow-xl transition-all"
              onClick={async (e) => {
                e.preventDefault();
                if (!contactCompany || !contactName || !contactMessage) {
                  setSubmitStatus('error');
                  setSubmitMessage('会社名、担当者名、ご相談内容は入力必須です。');
                  return;
                }
                setIsSubmitting(true);
                setSubmitStatus('idle');
                try {
                  const response = await fetch('https://formsubmit.co/ajax/alisslabs.jp@gmail.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                      会社名: contactCompany,
                      担当者名: contactName,
                      email: contactEmail,
                      電話番号: contactPhone,
                      message: contactMessage,
                    }),
                  });
                  const data = await response.json();
                  if (response.ok) {
                    setSubmitStatus('success');
                    setSubmitMessage('お問い合わせを受け付けました。');
                    setContactCompany(''); setContactName(''); setContactEmail(''); setContactPhone(''); setContactMessage('');
                  } else {
                    setSubmitStatus('error'); setSubmitMessage(data.message || 'エラーが発生しました。');
                  }
                } catch (error) {
                  setSubmitStatus('error'); setSubmitMessage('送信に失敗しました。しばらく後にお試しください。');
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              {isSubmitting ? '送信中...' : '相談を申し込む'}
            </Button>
          </form>
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
              <h4 className="font-bold mb-4 text-xl">Aliss-labs</h4>
              <p className="text-sm text-white/70 mb-6">
                都知事杯ハッカソン優勝チーム。
                0から創る、圧倒的な速さと強さ。
              </p>

              {/* SNS Icons */}
              <div className="flex gap-4">
                <a href="https://youtube.com/@aliss-labs?si=ynRu90eMUv4o3JmY" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="https://www.tiktok.com/@alisslabs?_r=1&_t=ZS-950wtmJ8Fbp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Video className="w-5 h-5 text-white" />
                  <span className="sr-only">TikTok</span>
                </a>
                <a href="https://www.instagram.com/aliss_labs?igsh=d3hrZmFvNGxuNDBz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://x.com/aliss_labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
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
