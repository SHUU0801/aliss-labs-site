import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Code,
  ExternalLink,
  Instagram,
  Menu,
  Video,
  X,
  Youtube,
  Zap,
} from "lucide-react";

type SubmitStatus = "idle" | "success" | "error";

const navItems = [
  { href: "#trust", label: "実績" },
  { href: "#product", label: "プロダクト" },
  { href: "#team", label: "チーム" },
  { href: "#service", label: "サービス" },
  { href: "#contact", label: "お問い合わせ" },
];

const teamMembers = [
  {
    name: "山本 朱倫",
    role: "代表 / ビジネスディレクター",
    image: "/shuri.jpg",
    description:
      "高度な技術をクライアントの「利益」に翻訳するブリッジ役。MEOやSNSマーケティングの知見と、目標を必ず形にする圧倒的な完遂力で事業を牽引する。",
    points: [
      "AI・技術のビジネス実装",
      "営業戦略立案・集客支援",
      "プロジェクトの圧倒的完遂力",
    ],
  },
  {
    name: "可野 海喜",
    role: "CTO / YORUMICHI開発リード",
    image: "/kano.png",
    description:
      "都知事杯ハッカソン優勝メンバー。YORUMICHIの開発を主導。AIを組み込んだ高度なアーキテクチャ設計と迅速なシステム開発を実現。",
    points: [
      "TypeScript / Next.js",
      "GCP / dbt / AI (Mastra)",
      "データ分析・可視化",
    ],
  },
  {
    name: "岩本 涼平",
    role: "Engineer / フルスタックエンジニア",
    image: "/ryosuke.png",
    description:
      "都知事杯ハッカソン優勝メンバー。YORUMICHIのフロントエンド・インフラを担当。実装品質と保守性を両立。",
    points: [
      "フルスタック開発",
      "テスト・CI/CD",
      "パフォーマンス最適化",
    ],
  },
];

const services = [
  {
    title: "新規事業・MVP開発",
    description:
      "アイデアを素早く形にし、市場検証を加速。ハッカソン優勝実績のスピードと品質で、0→1の立ち上げを強力にサポートします。",
    points: [
      "要件定義・アーキテクチャ設計",
      "プロトタイプ・MVP開発",
      "仮説検証・改善サイクル",
    ],
  },
  {
    title: "フルスクラッチ開発",
    description:
      "拡張性と保守性を備えた、次世代の基幹システムを構築。複雑なビジネス要件を、シンプルで洗練されたアーキテクチャへと昇華させます。",
    points: [
      "ビジネス要件の深掘り・システム設計",
      "堅牢でスケーラブルなフルスタック開発",
      "継続的な保守・運用・拡張サポート",
    ],
  },
  {
    title: "高度なAIソリューション",
    description:
      "事業の付加価値を最大化するAIインテグレーション。最新のAI技術やデータ連携を駆使し、自動化やインサイト抽出など高度なシステム要件を実現します。",
    points: [
      "AI活用戦略の策定・PoC",
      "LLM・生成AIのシステム組み込み",
      "独自データとの連携・高度分析",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contactCompany || !contactName || !contactEmail || !contactMessage) {
      setSubmitStatus("error");
      setSubmitMessage("会社名、ご担当者名、メールアドレス、ご相談内容は入力必須です。");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/alisslabs.jp@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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

      if (!response.ok) {
        throw new Error(data.message || "送信に失敗しました。");
      }

      setSubmitStatus("success");
      setSubmitMessage("お問い合わせを受け付けました。追ってご連絡します。");
      setContactCompany("");
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactMessage("");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(error instanceof Error ? error.message : "送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold text-primary md:text-2xl">Aliss-labs</div>

          <div className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded-lg p-2 transition hover:bg-secondary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-white md:hidden">
            <div className="container flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToId(item.href.slice(1))}
                  className="text-left text-base font-medium text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-white pb-20 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-bl from-neutral-200 via-neutral-100 to-transparent opacity-70 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-neutral-300 via-neutral-100 to-transparent opacity-50 blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="mb-8 text-5xl font-sans font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              0→1を、
              <br />
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent">
                社会実装へ。
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
              都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="gap-2 bg-neutral-900 px-6 text-white shadow-xl transition-all duration-300 hover:bg-neutral-800 hover:shadow-2xl"
                onClick={() => scrollToId("contact")}
              >
                まずは無料相談から
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-neutral-300 px-6 transition-colors duration-300 hover:bg-neutral-50"
                onClick={() => scrollToId("trust")}
              >
                実績を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="bg-gradient-to-b from-white to-secondary/20 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-semibold text-primary">
                日本最大級のハッカソン優勝
              </span>
            </div>
            <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">
              都知事杯オープンデータ・ハッカソン 2025
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              1,327名の応募から、最優秀賞「都知事杯」を受賞。複雑なデータを直感的な価値に変える技術力が、社会課題を解決します。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md md:p-8">
              <Award className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-sans text-xl font-bold">都知事杯 最優秀賞</h3>
              <p className="mb-4 text-muted-foreground">
                東京都主催「都知事杯オープンデータ・ハッカソン 2025」で最優秀賞を受賞。1,327名の応募から、132件の提案が一次審査に進出、24件がFinal Stageへ。
              </p>
              <a
                href="https://shintosei.metro.tokyo.lg.jp/post_upcp7_251028/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                公式発表を見る
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md md:p-8">
              <Code className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-sans text-xl font-bold">YORUMICHI</h3>
              <p className="mb-4 text-muted-foreground">
                夜間光データ・犯罪情報・街灯密度を統合し、安全なルートを数値化。治安・明るさ・人通りを総合評価し、安心して歩ける道を可視化。
              </p>
              <a
                href="/yorumichi"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                プロジェクトの詳細を見る
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md md:p-8">
              <Zap className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-sans text-xl font-bold">Project in Progress</h3>
              <p className="mb-4 text-muted-foreground">
                現在、複数の受託開発案件を進行中。AIを組み込んだ高度なシステム開発を通じて、クライアントの複雑なビジネス課題を解決しています。
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-80">
                Coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">
              YORUMICHIが実証した、データ駆動型の社会課題解決
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              夜間の安全という社会課題を、オープンデータ・位置情報・AI分析で解決したYORUMICHI。この技術を、貴社のビジネスニーズに応用します。
            </p>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-200 p-8 text-center shadow-inner">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="bg-gradient-to-br from-neutral-900 to-neutral-500 bg-clip-text text-2xl font-bold text-transparent">
                    Y
                  </span>
                </div>
                <p className="font-medium tracking-wide text-neutral-500">YORUMICHI Interface</p>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                YORUMICHI - 夜間の安全なルートを数値化・可視化
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-sans text-xl font-bold md:text-2xl">
                  夜間光データ × 犯罪情報
                </h3>
                <p className="text-muted-foreground">
                  街灯密度、夜間の明るさ、犯罪件数など複数のデータソースを統合。「怖い」という漠然とした不安を、データで可視化。
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-sans text-xl font-bold md:text-2xl">
                  スマートなルート提案
                </h3>
                <p className="text-muted-foreground">
                  治安・明るさ・人通りを総合計算し、安心して歩ける道を自動提案。Leaflet、Google Maps APIで直感的に可視化。
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-sans text-xl font-bold md:text-2xl">
                  自治体・企業への応用
                </h3>
                <p className="text-muted-foreground">
                  防災計画、エリアマーケティング、都市計画。YORUMICHIの技術を、貴社の課題に応用します。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="gap-2 px-6"
              onClick={() => {
                window.location.href = "/yorumichi";
              }}
            >
              YORUMICHIについて詳しく見る
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="relative bg-gradient-to-b from-white via-neutral-50 to-white py-20"
      >
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">チーム構成</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              都知事杯ハッカソン優勝メンバーが、貴社のプロジェクトに専任。技術、営業、戦略を統合した、最高のチーム体制。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mb-2 font-sans text-2xl font-bold">{member.name}</h3>
                <p className="mb-3 text-sm font-semibold text-primary">{member.role}</p>
                <p className="mb-4 flex-grow text-muted-foreground">{member.description}</p>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  {member.points.map((point) => (
                    <li key={point}>✓ {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="gap-2 px-6"
              onClick={() => {
                window.location.href = "/team";
              }}
            >
              チームメンバーの詳細を見る
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="service" className="bg-secondary/30 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">サービスメニュー</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              アイデアの検証から、エンタープライズシステムまで。貴社の成長段階に応じた、最適なソリューション。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md md:p-8"
              >
                <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-neutral-100 to-transparent transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mb-4 font-sans text-xl font-bold md:text-2xl">{service.title}</h3>
                <p className="mb-6 flex-grow text-muted-foreground">{service.description}</p>
                <ul className="mb-8 space-y-3 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              className="gap-2 rounded-full px-8 py-6 text-lg shadow-lg transition-all hover:shadow-xl"
              onClick={() => scrollToId("contact")}
            >
              まずは無料相談から
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20"
        style={{
          backgroundImage:
            'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663326135477/Eqeq6acEPPmzqFHMycahdn/contact-section-bg-aFq3K9bESdpZ3EFSrpUaqG.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">
                最高のチームと、最高のプロダクトを。
              </h2>
              <p className="text-lg text-muted-foreground">
                貴社のビジョンを、社会実装へ。まずはお気軽にご相談ください。
              </p>
            </div>

            <form
              className="space-y-6 rounded-2xl bg-white p-8 shadow-lg"
              onSubmit={handleSubmit}
            >
              {submitStatus === "success" && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-900">
                  {submitMessage}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900">
                  {submitMessage}
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-semibold">会社名 / 組織名</label>
                <input
                  type="text"
                  placeholder="例: 株式会社 〇〇"
                  required
                  value={contactCompany}
                  onChange={(event) => setContactCompany(event.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">ご担当者名</label>
                <input
                  type="text"
                  placeholder="例: 山田太郎"
                  required
                  value={contactName}
                  onChange={(event) => setContactName(event.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">メールアドレス</label>
                <input
                  type="email"
                  placeholder="example@company.com"
                  required
                  value={contactEmail}
                  onChange={(event) => setContactEmail(event.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">電話番号（任意）</label>
                <input
                  type="tel"
                  placeholder="例: 090-1234-5678"
                  value={contactPhone}
                  onChange={(event) => setContactPhone(event.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">ご相談内容</label>
                <textarea
                  placeholder="プロジェクトの概要、課題、期待値などをお聞かせください。"
                  rows={5}
                  required
                  value={contactMessage}
                  onChange={(event) => setContactMessage(event.target.value)}
                  className="w-full resize-none rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "送信中..." : "相談を申し込む"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                プライバシーポリシーに同意の上、送信してください。
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-12 text-white">
        <div className="container">
          <div className="mb-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            <div>
              <h4 className="mb-4 font-sans text-xl font-bold">Aliss-labs</h4>
              <p className="mb-6 text-sm text-white/70">
                都知事杯ハッカソン優勝チーム。0から創る、圧倒的な速さと強さ。
              </p>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@aliss-labs?si=ynRu90eMUv4o3JmY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                >
                  <Youtube className="h-5 w-5 text-white" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href="https://www.tiktok.com/@alisslabs?_r=1&_t=ZS-950wtmJ8Fbp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                >
                  <Video className="h-5 w-5 text-white" />
                  <span className="sr-only">TikTok</span>
                </a>
                <a
                  href="https://www.instagram.com/aliss_labs?igsh=d3hrZmFvNGxuNDBz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                >
                  <Instagram className="h-5 w-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://x.com/aliss_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">X</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-sans font-bold">サービス</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#service" className="transition hover:text-white">
                    MVP開発
                  </a>
                </li>
                <li>
                  <a href="#service" className="transition hover:text-white">
                    フルスクラッチ開発
                  </a>
                </li>
                <li>
                  <a href="#service" className="transition hover:text-white">
                    自治体・DX支援
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-sans font-bold">チーム</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#team" className="transition hover:text-white">
                    メンバー紹介
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kkaiki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-sans font-bold">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    相談フォーム
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2026 YORUMICHI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
