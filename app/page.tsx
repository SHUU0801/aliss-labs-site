"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Code,
  ExternalLink,
  Instagram,
  MapPinned,
  Menu,
  Radar,
  Sparkles,
  Video,
  X,
  Youtube,
  Zap,
} from "lucide-react";

type SubmitStatus = "idle" | "success" | "error";

const navItems = [
  { href: "#trust", label: "実績" },
  { href: "#product", label: "ケース" },
  { href: "#team", label: "チーム" },
  { href: "#service", label: "サービス" },
  { href: "#contact", label: "相談する" },
];

const heroSignals = [
  { label: "Hackathon", value: "Tokyo Gov 2025 Winner" },
  { label: "Shipping", value: "MVP to Production" },
  { label: "Focus", value: "AI / Data / Social Impact" },
];

const cityStats = [
  { value: "1327", label: "応募者数" },
  { value: "24", label: "Final Stage" },
  { value: "0→1", label: "実装速度" },
];

const trustCards = [
  {
    title: "都知事杯 最優秀賞",
    body:
      "東京都主催のオープンデータ・ハッカソンで最優秀賞を獲得。アイデアだけでなく、データを機能へ落とす実装力で評価されました。",
    accent: "from-cyan-400/70 via-sky-300/20 to-transparent",
    icon: Award,
    href: "https://shintosei.metro.tokyo.lg.jp/post_upcp7_251028/",
    cta: "公式発表を見る",
    external: true,
  },
  {
    title: "YORUMICHI",
    body:
      "夜道の安全を、光量・犯罪情報・人流からスコアリング。都市の不安をデータで扱える課題へ変換した実証例です。",
    accent: "from-violet-400/70 via-fuchsia-300/20 to-transparent",
    icon: MapPinned,
    href: "/yorumichi",
    cta: "プロジェクト詳細",
    external: false,
  },
  {
    title: "In Progress",
    body:
      "現在も複数案件で AI とデータ活用の社会実装を進行中。企画整理から実装、改善まで一気通貫で伴走します。",
    accent: "from-amber-300/70 via-orange-300/20 to-transparent",
    icon: Radar,
    href: "#contact",
    cta: "相談する",
    external: false,
  },
];

const teamMembers = [
  {
    name: "山本 朱倫",
    role: "代表 / ビジネスディレクター",
    image: "/shuri.jpg",
    description:
      "技術をビジネス価値へ翻訳するブリッジ役。市場理解と実行力で、構想を事業に接続します。",
    points: ["営業戦略立案", "AI・技術の事業実装", "プロジェクト完遂力"],
  },
  {
    name: "可野 海喜",
    role: "CTO / YORUMICHI開発リード",
    image: "/kano.png",
    description:
      "AI とデータ基盤を軸に、高度な設計と高速なプロダクト開発を両立。0→1 の技術意思決定を牽引します。",
    points: ["TypeScript / Next.js", "GCP / dbt / AI", "データ分析・可視化"],
  },
  {
    name: "岩本 涼平",
    role: "Engineer / フルスタックエンジニア",
    image: "/ryosuke.png",
    description:
      "実装品質と保守性を両立するフルスタックエンジニア。インフラから UI まで強く、運用に耐える形へ仕上げます。",
    points: ["フルスタック開発", "CI/CD", "パフォーマンス最適化"],
  },
];

const services = [
  {
    id: "01",
    title: "MVP Launch",
    description:
      "アイデア検証の速度を最大化し、仮説を市場に出して検証できる形まで短距離で持っていきます。",
    points: ["要件整理", "プロトタイプ開発", "改善サイクル設計"],
  },
  {
    id: "02",
    title: "Data-driven Build",
    description:
      "都市データ、業務データ、LLM を統合し、複雑な情報を意思決定に使えるプロダクトへ変換します。",
    points: ["データ統合", "可視化", "AI 組み込み"],
  },
  {
    id: "03",
    title: "Production Hardening",
    description:
      "PoC 止まりで終わらせず、運用・拡張・改善に耐えるアーキテクチャへ育てます。",
    points: ["クラウド設計", "品質向上", "継続開発支援"],
  },
];

const socialLinks = [
  {
    href: "https://youtube.com/@aliss-labs?si=ynRu90eMUv4o3JmY",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://www.tiktok.com/@alisslabs?_r=1&_t=ZS-950wtmJ8Fbp",
    label: "TikTok",
    icon: Video,
  },
  {
    href: "https://www.instagram.com/aliss_labs?igsh=d3hrZmFvNGxuNDBz",
    label: "Instagram",
    icon: Instagram,
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
    <div className="urban-shell min-h-screen text-foreground">
      <div className="urban-grid pointer-events-none fixed inset-0 opacity-60" />
      <div className="urban-glow urban-glow-a pointer-events-none fixed left-[-10%] top-0" />
      <div className="urban-glow urban-glow-b pointer-events-none fixed right-[-15%] top-[20%]" />
      <div className="urban-glow urban-glow-c pointer-events-none fixed bottom-[-10%] left-[20%]" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="container flex h-[4.5rem] items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">Urban Night Lab</div>
              <div className="text-lg font-semibold text-white">Aliss-labs</div>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToId(item.href.slice(1))}
                className="text-sm text-slate-300 transition hover:text-cyan-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/90 md:hidden">
            <div className="container flex flex-col gap-3 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToId(item.href.slice(1))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="relative">
        <section className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="container relative z-10">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
                  Light up the unknown
                </div>

                <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[7.2rem]">
                  都市の暗闇を、
                  <br />
                  <span className="urban-headline">社会実装の光</span>
                  <br />
                  に変える。
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  Aliss-labs は、AI、都市データ、プロダクト実装を接続する少数精鋭チームです。
                  曖昧な課題を、光るインターフェースと実際に動くシステムへ変換します。
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    onClick={() => scrollToId("contact")}
                    className="urban-primary-button h-14 rounded-full px-8 text-base"
                  >
                    無料相談を始める
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => scrollToId("product")}
                    variant="outline"
                    className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-slate-100 hover:bg-white/10"
                  >
                    ケーススタディを見る
                  </Button>
                </div>

                <div className="mt-12 grid gap-3 md:grid-cols-3">
                  {heroSignals.map((signal) => (
                    <div key={signal.label} className="urban-panel rounded-3xl p-5">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/50">
                        {signal.label}
                      </div>
                      <div className="mt-3 text-sm font-medium text-slate-100">{signal.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="urban-panel relative overflow-hidden rounded-[2rem] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_48%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/50">
                        City Signal Map
                      </div>
                      <div className="mt-2 text-xl font-semibold text-white">
                        Urban Risk, Light, Flow
                      </div>
                    </div>
                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                      Live concept
                    </div>
                  </div>

                  <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,182,212,0.12),transparent_45%,rgba(217,70,239,0.12))]" />
                    <div className="absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent shadow-[0_0_20px_rgba(103,232,249,0.75)]" />
                    <div className="absolute left-[20%] top-[18%] h-32 w-px bg-gradient-to-b from-transparent via-cyan-200/60 to-transparent" />
                    <div className="absolute right-[23%] top-[26%] h-24 w-px bg-gradient-to-b from-transparent via-fuchsia-300/50 to-transparent" />
                    <div className="absolute left-[12%] top-[58%] h-px w-56 bg-gradient-to-r from-transparent via-cyan-200/65 to-transparent" />
                    <div className="absolute right-[10%] top-[48%] h-px w-48 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
                    <div className="absolute left-[18%] top-[18%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_26px_rgba(103,232,249,0.95)]" />
                    <div className="absolute right-[23%] top-[26%] h-3 w-3 rounded-full bg-fuchsia-300 shadow-[0_0_26px_rgba(232,121,249,0.95)]" />
                    <div className="absolute left-[28%] top-[58%] h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_22px_rgba(125,211,252,0.95)]" />
                    <div className="absolute right-[18%] top-[48%] h-3 w-3 rounded-full bg-amber-200 shadow-[0_0_22px_rgba(253,230,138,0.95)]" />

                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-sm">
                      <div className="grid grid-cols-3 gap-3">
                        {cityStats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-2xl font-semibold text-white">{stat.value}</div>
                            <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="relative py-24">
          <div className="container">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="urban-kicker">Trust Signal</div>
                <h2 className="mt-4 max-w-3xl text-4xl text-white md:text-5xl">
                  実績は、都市の中で
                  <span className="text-cyan-200"> ちゃんと光る。</span>
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                賞歴、プロダクト、進行中案件を単なる実績一覧ではなく、Aliss-labs の現在位置を示すシグナルとして見せます。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {trustCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.title} className="urban-card group relative overflow-hidden rounded-[2rem] p-7">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-20 transition-opacity duration-500 group-hover:opacity-30`}
                    />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                          <Icon className="h-5 w-5 text-cyan-200" />
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                          {card.external ? "External" : "Internal"}
                        </div>
                      </div>
                      <h3 className="mt-8 text-2xl text-white">{card.title}</h3>
                      <p className="mt-4 leading-7 text-slate-300">{card.body}</p>
                      {card.external ? (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                        >
                          {card.cta}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : card.href.startsWith("/") ? (
                        <Link
                          href={card.href}
                          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                        >
                          {card.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => scrollToId(card.href.slice(1))}
                          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                        >
                          {card.cta}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="product" className="relative py-24">
          <div className="container">
            <div className="urban-case-frame grid gap-10 overflow-hidden rounded-[2rem] p-7 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
              <div className="relative">
                <div className="urban-kicker">Case Study</div>
                <h2 className="mt-4 max-w-2xl text-4xl text-white md:text-5xl">
                  YORUMICHI は、都市の不安を
                  <span className="text-fuchsia-200"> インターフェース化した。</span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  夜道の安全という曖昧な不安を、光量、犯罪情報、人流データを使ってルート提案へ変換。
                  「データを社会実装する」とは何かを、最も分かりやすく示すケースです。
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/50">Input</div>
                    <div className="mt-3 text-sm leading-6 text-slate-200">
                      夜間光、犯罪情報、街灯、人流
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/50">Engine</div>
                    <div className="mt-3 text-sm leading-6 text-slate-200">
                      統合スコアリング、GIS、最適ルーティング
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/50">Outcome</div>
                    <div className="mt-3 text-sm leading-6 text-slate-200">
                      不安の可視化、行動変容、社会的価値
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="urban-primary-button h-[3.25rem] rounded-full px-7">
                    <Link href="/yorumichi">
                      YORUMICHI の詳細を見る
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-[3.25rem] rounded-full border-white/15 bg-white/5 px-7 text-slate-100 hover:bg-white/10"
                    onClick={() => scrollToId("service")}
                  >
                    この技術を応用する
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(232,121,249,0.16),transparent_35%)]" />
                <div className="relative h-full min-h-[420px] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.6),rgba(15,23,42,0.85))] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/50">
                        Route Interface
                      </div>
                      <div className="mt-2 text-lg font-medium text-white">Night Safety Index</div>
                    </div>
                    <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                      Stable route
                    </div>
                  </div>

                  <div className="relative mt-8 h-[250px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-900/80">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.0)_50%,rgba(15,23,42,0.05)_100%)]" />
                    <div className="absolute left-[12%] top-[12%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.95)]" />
                    <div className="absolute left-[42%] top-[34%] h-3 w-3 rounded-full bg-fuchsia-300 shadow-[0_0_20px_rgba(232,121,249,0.95)]" />
                    <div className="absolute right-[18%] top-[24%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.95)]" />
                    <div className="absolute left-[14%] top-[13%] h-[2px] w-[34%] rotate-[18deg] bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 shadow-[0_0_16px_rgba(125,211,252,0.6)]" />
                    <div className="absolute left-[44%] top-[34%] h-[2px] w-[28%] -rotate-[12deg] bg-gradient-to-r from-fuchsia-300 via-violet-200 to-emerald-300 shadow-[0_0_16px_rgba(196,181,253,0.6)]" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Safety score</span>
                        <span className="text-lg font-semibold text-white">87 / 100</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Signals</div>
                      <div className="mt-2 text-sm text-slate-200">crime / light / station / crowd</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Runtime</div>
                      <div className="mt-2 text-sm text-slate-200">fast scoring / visual route / map UX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="relative py-24">
          <div className="container">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="urban-kicker">Team Node</div>
                <h2 className="mt-4 text-4xl text-white md:text-5xl">
                  技術、事業、実装が
                  <span className="text-cyan-200"> 同じ画面で会話する。</span>
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                Aliss-labs は、単に作るだけのチームではなく、構想を現場で回るプロダクトへ変換するユニットです。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="urban-card relative overflow-hidden rounded-[2rem] p-7">
                  <div className="absolute right-6 top-6 text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    Node {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-5">
                      <div className="h-24 w-24 overflow-hidden rounded-full border border-cyan-300/25 bg-white/5 p-1">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full rounded-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white">{member.name}</h3>
                        <p className="mt-2 text-sm font-medium text-cyan-200">{member.role}</p>
                      </div>
                    </div>

                    <p className="mt-6 leading-7 text-slate-300">{member.description}</p>

                    <ul className="mt-6 space-y-3">
                      {member.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-sm text-slate-200">
                          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.85)]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 px-7 text-slate-100 hover:bg-white/10">
                <Link href="/team">
                  メンバーの詳細を見る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="service" className="relative py-24">
          <div className="container">
            <div className="mb-14">
              <div className="urban-kicker">Service Flow</div>
              <h2 className="mt-4 max-w-4xl text-4xl text-white md:text-5xl">
                暗闇を読み解き、
                <span className="text-fuchsia-200"> 意味ある体験へ変換する</span>
                までを引き受ける。
              </h2>
            </div>

            <div className="space-y-5">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="urban-service-line grid gap-8 rounded-[2rem] border border-white/10 bg-slate-950/55 p-7 backdrop-blur-sm lg:grid-cols-[120px_minmax(0,1fr)_360px]"
                >
                  <div className="text-4xl font-semibold tracking-[-0.04em] text-cyan-200/80">
                    {service.id}
                  </div>
                  <div>
                    <h3 className="text-2xl text-white">{service.title}</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-slate-300">{service.description}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {service.points.map((point) => (
                      <li key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="urban-panel rounded-[2rem] p-8">
                <div className="urban-kicker">Contact Node</div>
                <h2 className="mt-4 text-4xl text-white md:text-5xl">
                  最高のチームと、
                  <br />
                  最高のプロダクトを。
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  課題がまだ曖昧でも構いません。アイデア段階、PoC、既存事業の刷新まで、状況に合わせて整理します。
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/50">Best for</div>
                    <div className="mt-2 text-sm leading-6 text-slate-200">
                      新規事業立ち上げ / AI 活用相談 / データプロダクト / 都市・公共領域
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/50">Response</div>
                    <div className="mt-2 text-sm leading-6 text-slate-200">
                      初回の整理は無料。要件が曖昧な状態でも、前提整理から入れます。
                    </div>
                  </div>
                </div>
              </div>

              <form className="urban-contact-form space-y-6 rounded-[2rem] p-8 md:p-10" onSubmit={handleSubmit}>
                {submitStatus === "success" && (
                  <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm font-medium text-emerald-50">
                    {submitMessage}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-2xl border border-rose-300/30 bg-rose-300/10 px-4 py-3 text-sm font-medium text-rose-50">
                    {submitMessage}
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-100">会社名 / 組織名</label>
                    <input
                      type="text"
                      placeholder="例: 株式会社 〇〇"
                      required
                      value={contactCompany}
                      onChange={(event) => setContactCompany(event.target.value)}
                      className="urban-input"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-100">ご担当者名</label>
                    <input
                      type="text"
                      placeholder="例: 山田太郎"
                      required
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                      className="urban-input"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-100">メールアドレス</label>
                    <input
                      type="email"
                      placeholder="example@company.com"
                      required
                      value={contactEmail}
                      onChange={(event) => setContactEmail(event.target.value)}
                      className="urban-input"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-100">電話番号（任意）</label>
                    <input
                      type="tel"
                      placeholder="例: 090-1234-5678"
                      value={contactPhone}
                      onChange={(event) => setContactPhone(event.target.value)}
                      className="urban-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-100">ご相談内容</label>
                  <textarea
                    placeholder="プロジェクトの概要、課題、期待値などをお聞かせください。"
                    rows={6}
                    required
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                    className="urban-input min-h-[180px] resize-none"
                  />
                </div>

                <Button type="submit" className="urban-primary-button h-14 w-full rounded-full text-base" disabled={isSubmitting}>
                  {isSubmitting ? "送信中..." : "相談を申し込む"}
                </Button>

                <p className="text-center text-xs text-slate-500">
                  プライバシーポリシーに同意の上、送信してください。
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/95 py-12">
        <div className="container">
          <div className="mb-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/50">Aliss-labs</div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                都知事杯ハッカソン優勝チーム。都市、データ、AI を使って、課題を社会実装へつなぐ。
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  );
                })}
                <a
                  href="https://x.com/aliss_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">X</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Navigate</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button type="button" onClick={() => scrollToId(item.href.slice(1))} className="transition hover:text-cyan-100">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Explore</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>
                  <Link href="/yorumichi" className="transition hover:text-cyan-100">
                    YORUMICHI
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="transition hover:text-cyan-100">
                    Team Detail
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Signal</h4>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                From dark data to visible value. We build things people can actually use.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-sm text-slate-500">
            © 2026 Aliss-labs. Urban Night Lab direction prototype.
          </div>
        </div>
      </footer>
    </div>
  );
}
