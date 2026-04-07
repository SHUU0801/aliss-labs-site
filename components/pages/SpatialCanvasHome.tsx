"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Instagram,
  MapPinned,
  Menu,
  MessagesSquare,
  Phone,
  Sparkles,
  Trophy,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#hero", label: "Aliss-labs" },
  { href: "#work", label: "実績" },
  { href: "#product", label: "プロダクト" },
  { href: "#team", label: "チーム" },
  { href: "#services", label: "サービス" },
  { href: "#contact", label: "お問い合わせ" },
];

const stats = [
  "都知事杯 最優秀賞",
  "1,327名の応募から受賞",
  "0→1を社会実装へ",
];

const productFeatures = [
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

const teamProfiles = [
  {
    name: "山本 朱倫",
    role: "代表 / ビジネスディレクター",
    image: "/shuri.jpg",
    description:
      "高度な技術をクライアントの「利益」に翻訳するブリッジ役。MEOやSNSマーケティングの知見と、目標を必ず形にする圧倒的な完遂力で事業を牽引する。",
    bullets: ["AI・技術のビジネス実装", "営業戦略立案・集客支援", "プロジェクトの圧倒的完遂力"],
  },
  {
    name: "可野 海喜",
    role: "CTO",
    image: "/kano.png",
    description:
      "都知事杯ハッカソン優勝メンバー。 YORUMICHIの開発を主導。AIを組み込んだ高度なアーキテクチャ設計と迅速なシステム開発を実現。",
    bullets: ["TypeScript / Next.js", "GCP / dbt / AI (Mastra)", "データ分析・可視化"],
    github: "https://github.com/kkaiki",
  },
  {
    name: "岩本 涼平",
    role: "YORUMICHI開発リード",
    image: "/ryosuke.png",
    description:
      "都知事杯ハッカソン優勝メンバー。 YORUMICHIのフロントエンド・インフラを担当。実装品質と保守性を両立。",
    bullets: ["フルスタック開発", "テスト・CI/CD", "パフォーマンス最適化"],
  },
];

const services = [
  {
    title: "新規事業・MVP開発",
    body: "アイデアを素早く形にし、市場検証を加速。ハッカソン優勝実績のスピードと品質で、0→1の立ち上げを強力にサポートします。",
    bullets: ["要件定義・アーキテクチャ設計", "プロトタイプ・MVP開発", "仮説検証・改善サイクル"],
  },
  {
    title: "フルスクラッチ開発",
    body: "拡張性と保守性を備えた、次世代の基幹システムを構築。複雑なビジネス要件を、シンプルで洗練されたアーキテクチャへと昇華させます。",
    bullets: ["ビジネス要件の深掘り・システム設計", "堅牢でスケーラブルなフルスタック開発", "継続的な保守・運用・拡張サポート"],
  },
  {
    title: "高度なAIソリューション",
    body: "事業の付加価値を最大化するAIインテグレーション。最新のAI技術やデータ連携を駆使し、自動化やインサイト抽出など高度なシステム要件を実現します。",
    bullets: ["AI活用戦略の策定・PoC", "LLM・生成AIのシステム組み込み", "独自データとの連携・高度分析"],
  },
];

export default function SpatialCanvasHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#111827]">
      <motion.div className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-[#111827]" style={{ scaleX: progressScale }} />

      <header className="fixed inset-x-0 top-0 z-[80] border-b border-white/40 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <button type="button" onClick={() => scrollToId("hero")} className="text-left">
            <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">Aliss-labs</div>
            <div className="mt-1 text-xl font-semibold tracking-[-0.03em] text-slate-950">Aliss-labs</div>
          </button>

          <nav className="hidden items-center gap-7 text-sm text-slate-700 md:flex">
            {navItems.map((item) => (
              <button key={item.href} type="button" onClick={() => scrollToId(item.href.slice(1))} className="transition hover:text-slate-950">
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200/80 bg-white/90 px-6 pb-5 pt-4 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToId(item.href.slice(1))}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-40">
        <section id="hero" className="grid gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_16px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-cyan-600" />
              Aliss-labs
            </div>

            <h1 className="mt-7 text-5xl leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[6rem]">
              0→1を、
              <span className="text-slate-500"> 社会実装へ。</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => scrollToId("contact")} className="h-14 rounded-full bg-slate-950 px-8 text-base text-white hover:bg-slate-800">
                まずは無料相談から
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="outline" className="h-14 rounded-full border-slate-300 bg-white/70 px-8 text-base text-slate-900 backdrop-blur-xl hover:bg-white">
                <Link href="/yorumichi">実績を見る</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white/78 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:translate-y-8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image src="/kano.png" alt="可野 海喜" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 30vw" />
              </div>
              <div className="mt-4 px-2 pb-2">
                <div className="text-sm font-semibold text-slate-950">可野 海喜</div>
                <div className="mt-1 text-sm text-slate-600">CTO / YORUMICHI開発リード</div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-slate-200 bg-white/78 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image src="/shuri.jpg" alt="山本 朱倫" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 30vw" />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <div className="text-sm font-semibold text-slate-950">山本 朱倫</div>
                  <div className="mt-1 text-sm text-slate-600">代表 / ビジネスディレクター</div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">日本最大級のハッカソン優勝</div>
                <div className="mt-4 grid gap-3">
                  {stats.map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="work" eyebrow="実績" title="都知事杯オープンデータ・ハッカソン 2025">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card>
              <h3 className="text-3xl tracking-[-0.04em] text-slate-950">日本最大級のハッカソン優勝</h3>
              <p className="mt-5 text-base leading-8 text-slate-700">
                1,327名の応募から、最優秀賞「都知事杯」を受賞。 複雑なデータを直感的な価値に変える技術力が、社会課題を解決します。
              </p>
            </Card>
            <Card>
              <h3 className="text-3xl tracking-[-0.04em] text-slate-950">都知事杯 最優秀賞</h3>
              <p className="mt-5 text-base leading-8 text-slate-700">
                東京都主催「都知事杯オープンデータ・ハッカソン 2025」で最優秀賞を受賞。 1,327名の応募から、132件の提案が一次審査に進出、24件がFinal Stageへ。
              </p>
              <div className="mt-8">
                <Button asChild className="h-14 rounded-full bg-slate-950 px-8 text-white hover:bg-slate-800">
                  <a href="https://www.tokyo-opendata-hackathon.jp/" target="_blank" rel="noopener noreferrer">
                    公式発表を見る
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="product" eyebrow="プロダクト" title="YORUMICHIが実証した、データ駆動型の社会課題解決">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <Card dark>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">Y</div>
              <h3 className="mt-4 text-4xl tracking-[-0.05em] text-white">YORUMICHI Interface</h3>
              <p className="mt-5 text-base leading-8 text-white/72">
                YORUMICHI - 夜間の安全なルートを数値化・可視化
              </p>
              <div className="mt-8">
                <Button asChild className="h-14 rounded-full bg-white px-8 text-slate-950 hover:bg-white/90">
                  <Link href="/yorumichi">YORUMICHIについて詳しく見る</Link>
                </Button>
              </div>
            </Card>

            <div className="grid gap-6">
              {productFeatures.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-2xl tracking-[-0.04em] text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="進行中" id="progress" title="Project in Progress">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card>
              <h3 className="text-3xl tracking-[-0.04em] text-slate-950">Coming soon</h3>
              <p className="mt-5 text-base leading-8 text-slate-700">
                現在、複数の受託開発案件を進行中。 AIを組み込んだ高度なシステム開発を通じて、クライアントの複雑なビジネス課題を解決しています。
              </p>
            </Card>
            <Card>
              <h3 className="text-3xl tracking-[-0.04em] text-slate-950">YORUMICHIが実証した、データ駆動型の社会課題解決</h3>
              <p className="mt-5 text-base leading-8 text-slate-700">
                夜間の安全という社会課題を、オープンデータ・位置情報・AI分析で解決したYORUMICHI。 この技術を、貴社のビジネスニーズに応用します。
              </p>
            </Card>
          </div>
        </Section>

        <Section id="team" eyebrow="チーム構成" title="都知事杯ハッカソン優勝メンバーが、貴社のプロジェクトに専任。">
          <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-700">技術、営業、戦略を統合した、最高のチーム体制。</p>
          <div className="space-y-6">
            {teamProfiles.map((profile, index) => (
              <Reveal key={profile.name} delay={index * 0.05}>
                <Card>
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="relative h-28 w-28 overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white">
                      <Image src={profile.image} alt={profile.name} fill className="object-cover object-top" sizes="112px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="text-lg font-semibold text-slate-950">{profile.name}</div>
                          <h3 className="mt-1 text-3xl tracking-[-0.04em] text-slate-950">{profile.name}</h3>
                          <p className="mt-2 text-base font-medium text-slate-600">{profile.role}</p>
                        </div>
                        {profile.github ? (
                          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-950">
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        ) : null}
                      </div>
                      <p className="mt-5 text-base leading-8 text-slate-700">{profile.description}</p>
                      <div className="mt-6 grid gap-3 md:grid-cols-3">
                        {profile.bullets.map((item) => (
                          <div key={item} className="rounded-[1.4rem] border border-slate-200 bg-slate-50/90 p-4 text-sm leading-7 text-slate-700">
                            ✓ {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 backdrop-blur-xl hover:bg-white">
              <Link href="/team">チームメンバーの詳細を見る</Link>
            </Button>
          </div>
        </Section>

        <Section id="services" eyebrow="サービスメニュー" title="アイデアの検証から、エンタープライズシステムまで。">
          <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-700">貴社の成長段階に応じた、最適なソリューション。</p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <Card>
                  <h3 className="text-3xl tracking-[-0.04em] text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{service.body}</p>
                  <div className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-slate-950" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="お問い合わせ" title="まずは無料相談から">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card dark>
              <h3 className="text-4xl leading-[1.05] tracking-[-0.05em] text-white">
                最高のチームと、
                <br />
                最高のプロダクトを。
              </h3>
              <p className="mt-6 text-base leading-8 text-white/72">
                貴社のビジョンを、社会実装へ。まずはお気軽にご相談ください。
              </p>
              <div className="mt-8">
                <Button asChild className="h-14 rounded-full bg-white px-8 text-slate-950 hover:bg-white/90">
                  <a href="mailto:alisslabs.jp@gmail.com">相談を申し込む</a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/50">プライバシーポリシーに同意の上、送信してください。</p>
            </Card>

            <div className="grid gap-4">
              <FormCard icon={MessagesSquare} title="会社名 / 組織名" body="例: 株式会社 〇〇" />
              <FormCard icon={Sparkles} title="ご担当者名" body="例: 山田太郎" />
              <FormCard icon={MessagesSquare} title="メールアドレス" body="example@company.com" />
              <FormCard icon={Phone} title="電話番号（任意）" body="例: 090-1234-5678" />
              <FormCard icon={MessagesSquare} title="ご相談内容" body="プロジェクトの概要、課題、期待値などをお聞かせください。" />
            </div>
          </div>
        </Section>

        <footer className="pb-16 pt-4">
          <Card>
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Aliss-labs</div>
                <div className="mt-3 text-2xl tracking-[-0.04em] text-slate-950">都知事杯ハッカソン優勝チーム。 0から創る、圧倒的な速さと強さ。</div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2"><Youtube className="h-4 w-4" />YouTube</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">TikTok</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2"><Instagram className="h-4 w-4" />Instagram</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">X (Twitter)</span>
                </div>
              </div>
              <FooterColumn title="サービス" items={["MVP開発", "フルスクラッチ開発", "自治体・DX支援"]} />
              <FooterColumn title="チーム" items={["メンバー紹介", "GitHub"]} />
              <FooterColumn title="お問い合わせ" items={["相談フォーム", "© 2026 YORUMICHI. All rights reserved."]} />
            </div>
          </Card>
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mb-10">
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</div>
        <h2 className="mt-4 text-4xl leading-[1.02] tracking-[-0.06em] text-slate-950 md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:p-10"
          : "rounded-[2rem] border border-slate-200 bg-white/78 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-10"
      }
    >
      {children}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}

function FormCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof MessagesSquare;
  title: string;
  body: string;
}) {
  return (
    <Card>
      <Icon className="h-7 w-7 text-slate-950" />
      <h3 className="mt-4 text-2xl tracking-[-0.04em] text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{body}</p>
    </Card>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="text-sm font-semibold text-slate-950">{title}</div>
      <div className="mt-4 space-y-3 text-sm text-slate-600">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
