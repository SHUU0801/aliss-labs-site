"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  sharedAchievements,
  designDirections,
  sharedProductFeatures,
  sharedProcess,
  sharedProjects,
  sharedStats,
  sharedStrengths,
  sharedTeam,
  type DesignSlug,
} from "@/components/pages/designs/design-data";

type Props = {
  slug: DesignSlug;
};

const directionMap = Object.fromEntries(designDirections.map((item) => [item.slug, item])) as Record<DesignSlug, (typeof designDirections)[number]>;

export default function DesignShowcasePage({ slug }: Props) {
  const direction = directionMap[slug];
  return <UnifiedDesignPage slug={slug} title={direction.title} summary={direction.summary} />;
}

const unifiedThemes: Record<
  DesignSlug,
  {
    shellClass: string;
    backClass: string;
    progressClass?: string;
    showAmbient?: boolean;
    heroPanelClass: string;
    heroCardClass: string;
    sectionClass: string;
    cardClass: string;
    softCardClass: string;
    mutedClass: string;
    lineClass: string;
    primaryButtonClass: string;
    secondaryButtonClass: string;
    dark?: boolean;
  }
> = {
  "outlier-protocol-black-site": {
    shellClass: "min-h-screen bg-[#050608] text-white",
    backClass: "border-white/14 bg-white/[0.05] text-white",
    progressClass: "bg-white",
    showAmbient: false,
    heroPanelClass: "border border-white/14 bg-white/[0.05] p-8 shadow-[14px_14px_0_rgba(255,255,255,0.08)] md:p-10",
    heroCardClass: "border border-white/12 bg-white/[0.04] p-5",
    sectionClass: "border border-white/14 bg-white/[0.05] p-8 shadow-[14px_14px_0_rgba(255,255,255,0.08)] md:p-10",
    cardClass: "border border-white/14 bg-white/[0.04] p-6",
    softCardClass: "border border-white/10 bg-white/[0.03] p-6",
    mutedClass: "text-white/55",
    lineClass: "border-white/10",
    primaryButtonClass: "rounded-none border border-white bg-white text-[#050608] hover:bg-white/90",
    secondaryButtonClass: "rounded-none border border-white/16 bg-transparent text-white hover:bg-white/8",
    dark: true,
  },
  "outlier-protocol-signal-red": {
    shellClass: "min-h-screen bg-[#f6f0e8] text-[#1a120f]",
    backClass: "border-[#1a120f]/15 bg-[#f6f0e8]/92 text-[#1a120f]",
    progressClass: "bg-[#c63d2f]",
    showAmbient: false,
    heroPanelClass: "border-2 border-[#1a120f] bg-[#f8efe5] p-8 shadow-[14px_14px_0_#1a120f] md:p-10",
    heroCardClass: "border-2 border-[#1a120f] bg-[#fbf6ef] p-5",
    sectionClass: "border-2 border-[#1a120f] bg-[#f8efe5] p-8 shadow-[14px_14px_0_#1a120f] md:p-10",
    cardClass: "border-2 border-[#1a120f] bg-[#fbf6ef] p-6 shadow-[10px_10px_0_rgba(26,18,15,0.08)]",
    softCardClass: "border-2 border-[#1a120f] bg-[#f3cabd] p-6",
    mutedClass: "text-[#7a544a]",
    lineClass: "border-[#1a120f]/15",
    primaryButtonClass: "rounded-none border-2 border-[#1a120f] bg-[#c63d2f] text-white hover:bg-[#b5372a]",
    secondaryButtonClass: "rounded-none border-2 border-[#1a120f] bg-[#fbf6ef] text-[#1a120f]",
  },
  "outlier-protocol": {
    shellClass: "min-h-screen bg-[#f3efe7] text-[#111111]",
    backClass: "border-[#111111]/15 bg-[#f3efe7]/92 text-[#111111]",
    progressClass: "bg-[#111111]",
    showAmbient: false,
    heroPanelClass: "border-2 border-[#111111] bg-[#fff7c8] p-8 shadow-[14px_14px_0_#111111] md:p-10",
    heroCardClass: "border-2 border-[#111111] bg-[#fffdf1] p-5",
    sectionClass: "border-2 border-[#111111] bg-[#fff7c8] p-8 shadow-[14px_14px_0_#111111] md:p-10",
    cardClass: "border-2 border-[#111111] bg-[#fffdf1] p-6 shadow-[10px_10px_0_rgba(17,17,17,0.08)]",
    softCardClass: "border-2 border-[#111111] bg-[#ffef5c] p-6",
    mutedClass: "text-[#625814]",
    lineClass: "border-[#111111]/15",
    primaryButtonClass: "rounded-none border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#2b2b2b]",
    secondaryButtonClass: "rounded-none border-2 border-[#111111] bg-transparent text-[#111111]",
  },
  "future-implementation": {
    shellClass: "min-h-screen bg-[#101114] text-white",
    backClass: "border-white/12 bg-white/[0.05] text-white",
    progressClass: "bg-[#d8ff43]",
    showAmbient: false,
    heroPanelClass: "border border-white/14 bg-white/[0.05] p-8 md:p-10",
    heroCardClass: "border border-white/12 bg-white/[0.04] p-5",
    sectionClass: "border border-white/14 bg-white/[0.05] p-8 md:p-10",
    cardClass: "border border-white/14 bg-white/[0.04] p-6",
    softCardClass: "border border-white/12 bg-white/[0.03] p-6",
    mutedClass: "text-[#d8ff43]/70",
    lineClass: "border-white/10",
    primaryButtonClass: "rounded-none bg-[#d8ff43] text-[#111111] hover:bg-[#caef42]",
    secondaryButtonClass: "rounded-none border-2 border-white/20 bg-transparent text-[#f6f4ef] hover:bg-white/8",
    dark: true,
  },
  "structured-future": {
    shellClass: "min-h-screen bg-[#f4f1ea] text-[#101010]",
    backClass: "border-[#101010] bg-[#f4f1ea] text-[#101010]",
    showAmbient: false,
    heroPanelClass: "border border-[#101010] bg-white p-8 md:p-10",
    heroCardClass: "border border-[#101010] bg-[#f4f1ea] p-5",
    sectionClass: "border border-[#101010] bg-white p-8 md:p-10",
    cardClass: "border border-[#101010] bg-[#f4f1ea] p-6",
    softCardClass: "border border-[#101010] bg-white p-6",
    mutedClass: "text-[#5a554b]",
    lineClass: "border-[#101010]/12",
    primaryButtonClass: "rounded-none bg-[#101010] text-white hover:bg-[#2a2a2a]",
    secondaryButtonClass: "rounded-none border-2 border-[#101010] bg-transparent text-[#101010]",
  },
  "liquid-interface": {
    shellClass: "min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff9fc_0%,#eef7ff_45%,#eef2ff_100%)] text-slate-950",
    backClass: "border-slate-200 bg-white/75 text-slate-900",
    heroPanelClass: "rounded-[2rem] border border-white/70 bg-white/58 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10",
    heroCardClass: "rounded-[1.7rem] border border-white/75 bg-white/62 p-5 backdrop-blur-xl",
    sectionClass: "rounded-[2rem] border border-white/70 bg-white/58 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10",
    cardClass: "rounded-[2rem] border border-white/75 bg-white/62 p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl",
    softCardClass: "rounded-[1.8rem] border border-white/75 bg-white/62 p-6 backdrop-blur-xl",
    mutedClass: "text-slate-500",
    lineClass: "border-slate-200/70",
    primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
    secondaryButtonClass: "rounded-full border-white/70 bg-white/70 text-slate-950",
  },
  "brutalist-future": {
    shellClass: "min-h-screen bg-[#f4f1ea] text-[#101010]",
    backClass: "border-[#101010] bg-[#f4f1ea] text-[#101010]",
    heroPanelClass: "border border-[#101010] bg-white p-8 md:p-10",
    heroCardClass: "border border-[#101010] bg-[#f4f1ea] p-5",
    sectionClass: "border border-[#101010] bg-white p-8 md:p-10",
    cardClass: "border border-[#101010] bg-[#f4f1ea] p-6",
    softCardClass: "border border-[#101010] bg-white p-6",
    mutedClass: "text-[#5a554b]",
    lineClass: "border-[#101010]/12",
    primaryButtonClass: "rounded-none bg-[#101010] text-white hover:bg-[#2a2a2a]",
    secondaryButtonClass: "rounded-none border-2 border-[#101010] bg-transparent text-[#101010]",
  },
  "kinetic-typography-system": {
    shellClass: "min-h-screen overflow-hidden bg-[#f8f8f6] text-slate-950",
    backClass: "border-slate-300 bg-white/75 text-slate-950",
    heroPanelClass: "rounded-[1.8rem] border border-slate-300 bg-white/72 p-8 md:p-10",
    heroCardClass: "rounded-[1.5rem] border border-slate-300 bg-white/82 p-5",
    sectionClass: "rounded-[1.8rem] border border-slate-300 bg-white/72 p-8 md:p-10",
    cardClass: "rounded-[1.8rem] border border-slate-300 bg-white/82 p-6",
    softCardClass: "rounded-[1.5rem] border border-slate-300 bg-slate-50 p-6",
    mutedClass: "text-slate-500",
    lineClass: "border-slate-200",
    primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
    secondaryButtonClass: "rounded-full border-slate-300 bg-white text-slate-950",
  },
  "ai-native-workspace": {
    shellClass: "min-h-screen bg-[#0a0d14] text-white",
    backClass: "border-white/12 bg-white/5 text-white",
    heroPanelClass: "rounded-[2rem] border border-white/12 bg-white/5 p-8 shadow-[0_28px_100px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-10",
    heroCardClass: "rounded-[1.6rem] border border-white/12 bg-white/[0.04] p-5",
    sectionClass: "rounded-[2rem] border border-white/12 bg-white/5 p-8 shadow-[0_28px_100px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-10",
    cardClass: "rounded-[1.8rem] border border-white/12 bg-white/[0.04] p-6",
    softCardClass: "rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6",
    mutedClass: "text-white/55",
    lineClass: "border-white/10",
    primaryButtonClass: "rounded-full bg-white text-slate-950 hover:bg-white/90",
    secondaryButtonClass: "rounded-full border-white/20 bg-transparent text-white hover:bg-white/8",
    dark: true,
  },
  "spatial-canvas": {
    shellClass: "min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fafcff_0%,#eef4fb_100%)] text-slate-950",
    backClass: "border-slate-200 bg-white/75 text-slate-950",
    heroPanelClass: "rounded-[2rem] border border-slate-200 bg-white/72 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.07)] md:p-10",
    heroCardClass: "rounded-[1.7rem] border border-slate-200 bg-white p-5",
    sectionClass: "rounded-[2rem] border border-slate-200 bg-white/72 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.07)] md:p-10",
    cardClass: "rounded-[2rem] border border-slate-200 bg-white/82 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]",
    softCardClass: "rounded-[1.7rem] border border-slate-200 bg-white p-6",
    mutedClass: "text-slate-500",
    lineClass: "border-slate-200",
    primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
    secondaryButtonClass: "rounded-full border-slate-300 bg-white text-slate-950",
  },
  "minimal-black-lab": {
    shellClass: "min-h-screen bg-[#05070a] text-white",
    backClass: "border-white/15 bg-white/4 text-white",
    heroPanelClass: "rounded-[2rem] border border-[#d4ccbe] bg-[#faf8f4] p-8 shadow-[0_20px_50px_rgba(22,20,18,0.08)] text-[#161412] md:p-10",
    heroCardClass: "rounded-[1.7rem] border border-[#d4ccbe] bg-white/90 p-5 text-[#161412]",
    sectionClass: "rounded-[2rem] border border-[#d4ccbe] bg-[#faf8f4] p-8 shadow-[0_20px_50px_rgba(22,20,18,0.08)] text-[#161412] md:p-10",
    cardClass: "rounded-[2rem] border border-[#d4ccbe] bg-white/90 p-6 text-[#161412]",
    softCardClass: "rounded-[1.7rem] border border-[#d4ccbe] bg-[#f4efe7] p-6 text-[#161412]",
    mutedClass: "text-[#7c7367]",
    lineClass: "border-[#d4ccbe]",
    primaryButtonClass: "rounded-full bg-[#161412] text-[#faf8f4] hover:bg-[#2a2621]",
    secondaryButtonClass: "rounded-full border-[#d4ccbe] bg-transparent text-[#161412]",
  },
  "editorial-tech-magazine": {
    shellClass: "min-h-screen bg-[#faf8f4] text-[#161412]",
    backClass: "border-[#d4ccbe] bg-[#faf8f4]/92 text-[#161412]",
    heroPanelClass: "rounded-[2rem] border border-[#d4ccbe] bg-[#faf8f4] p-8 shadow-[0_20px_50px_rgba(22,20,18,0.08)] md:p-10",
    heroCardClass: "rounded-[1.7rem] border border-[#d4ccbe] bg-white/90 p-5",
    sectionClass: "rounded-[2rem] border border-[#d4ccbe] bg-[#faf8f4] p-8 shadow-[0_20px_50px_rgba(22,20,18,0.08)] md:p-10",
    cardClass: "rounded-[2rem] border border-[#d4ccbe] bg-white/90 p-6",
    softCardClass: "rounded-[1.7rem] border border-[#d4ccbe] bg-[#f4efe7] p-6",
    mutedClass: "text-[#7c7367]",
    lineClass: "border-[#d4ccbe]",
    primaryButtonClass: "rounded-full bg-[#161412] text-[#faf8f4] hover:bg-[#2a2621]",
    secondaryButtonClass: "rounded-full border-[#d4ccbe] bg-transparent text-[#161412]",
  },
  "experimental-product-gallery": {
    shellClass: "min-h-screen bg-[#f3f5f9] text-slate-950",
    backClass: "border-slate-300 bg-white/70 text-slate-950",
    heroPanelClass: "rounded-[2rem] border border-slate-200 bg-white/86 p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] md:p-10",
    heroCardClass: "rounded-[1.7rem] border border-slate-200 bg-white p-5",
    sectionClass: "rounded-[2rem] border border-slate-200 bg-white/76 p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] md:p-10",
    cardClass: "rounded-[2rem] border border-slate-200 bg-white/86 p-6 shadow-[0_22px_50px_rgba(15,23,42,0.06)]",
    softCardClass: "rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(160deg,#eef6ff,#ffffff)] p-6",
    mutedClass: "text-slate-500",
    lineClass: "border-slate-200",
    primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
    secondaryButtonClass: "rounded-full border-slate-300 bg-white text-slate-950",
  },
};

function UnifiedDesignPage({ slug, title, summary }: { slug: DesignSlug; title: string; summary: string }) {
  const theme = unifiedThemes[slug];
  return (
    <Shell
      className={theme.shellClass}
      backClassName={theme.backClass}
      progressClassName={theme.progressClass}
      showAmbient={theme.showAmbient ?? true}
    >
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 md:pb-24">
        <div className={theme.heroPanelClass}>
          <div className={`text-xs font-semibold tracking-[0.24em] uppercase ${theme.mutedClass}`}>Aliss-labs</div>
          <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm ${theme.mutedClass}`}>
            {["実績", "プロダクト", "チーム", "サービス", "お問い合わせ"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className={`text-xs font-semibold tracking-[0.24em] uppercase ${theme.mutedClass}`}>{title}</div>
              <h1 className="mt-5 text-5xl leading-[0.88] tracking-[-0.08em] md:text-[6rem]">
                0→1を、
                <br />
                社会実装へ。
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 opacity-85">{summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className={theme.primaryButtonClass}>
                  <Link href="/#contact">まずは無料相談から</Link>
                </Button>
                <Button asChild variant="outline" className={theme.secondaryButtonClass}>
                  <Link href="/yorumichi">実績を見る</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className={theme.heroCardClass}>
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>実績</div>
                <div className="mt-3 text-2xl tracking-[-0.04em]">都知事杯オープンデータ・ハッカソン 2025</div>
                <p className="mt-3 text-sm leading-7 opacity-80">
                  1,327名の応募から、最優秀賞「都知事杯」を受賞。複雑なデータを直感的な価値に変える技術力が、社会課題を解決します。
                </p>
              </div>
              <div className={theme.heroCardClass}>
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>プロダクト</div>
                <div className="mt-3 text-2xl tracking-[-0.04em]">YORUMICHI</div>
                <p className="mt-3 text-sm leading-7 opacity-80">
                  夜間光データ・犯罪情報・街灯密度を統合し、安全なルートを数値化。治安・明るさ・人通りを総合評価し、安心して歩ける道を可視化。
                </p>
              </div>
              <div className={`${theme.heroCardClass} md:col-span-2`}>
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>Project in Progress</div>
                <p className="mt-3 text-sm leading-7 opacity-80">
                  現在、複数の受託開発案件を進行中。AIを組み込んだ高度なシステム開発を通じて、クライアントの複雑なビジネス課題を解決しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FullHomepageSections
        theme={{
          sectionClass: theme.sectionClass,
          cardClass: theme.cardClass,
          softCardClass: theme.softCardClass,
          mutedClass: theme.mutedClass,
          lineClass: theme.lineClass,
          primaryButtonClass: theme.primaryButtonClass,
          secondaryButtonClass: theme.secondaryButtonClass,
        }}
        dark={theme.dark}
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-4 md:px-10">
        <div className={theme.sectionClass}>
          <div className={`text-xs font-semibold tracking-[0.24em] uppercase ${theme.mutedClass}`}>Aliss-labs</div>
          <p className="mt-4 max-w-2xl text-lg leading-8 opacity-85">都知事杯ハッカソン優勝チーム。0から創る、圧倒的な速さと強さ。</p>
          <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm ${theme.mutedClass}`}>
            <span>YouTube</span>
            <span>TikTok</span>
            <span>Instagram</span>
            <span>X (Twitter)</span>
          </div>
          <div className={`mt-10 grid gap-6 border-t pt-8 md:grid-cols-3 ${theme.lineClass}`}>
            <div>
              <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>サービス</div>
              <div className="mt-4 space-y-2 text-sm opacity-85">
                <div>MVP開発</div>
                <div>フルスクラッチ開発</div>
                <div>自治体・DX支援</div>
              </div>
            </div>
            <div>
              <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>チーム</div>
              <div className="mt-4 space-y-2 text-sm opacity-85">
                <div>メンバー紹介</div>
                <div>GitHub</div>
              </div>
            </div>
            <div>
              <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>お問い合わせ</div>
              <div className="mt-4 space-y-2 text-sm opacity-85">
                <div>相談フォーム</div>
                <div>© 2026 YORUMICHI. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}

function OutlierProtocolSignalRedPage({ title, summary }: { title: string; summary: string }) {
  const manifesto = [
    "保守的な正解を最初から捨てる。",
    "仮説検証を画面の中まで持ち込む。",
    "都市データと AI を雑に扱わない。",
    "結果が出るまで手を離さない。",
  ];

  return (
    <Shell
      className="min-h-screen overflow-hidden bg-[#f6f0e8] text-[#1a120f]"
      backClassName="border-[#1a120f]/15 bg-[#f6f0e8]/92 text-[#1a120f]"
      progressClassName="bg-[#c63d2f]"
      showAmbient={false}
    >
      <section className="relative overflow-hidden border-b-2 border-[#1a120f]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10rem] top-14 h-72 w-72 rounded-full bg-[#c63d2f]/18 blur-3xl" />
          <div className="absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-[#ffb36b]/22 blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 1.2, 0, -1.2, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[18%] h-[30rem] w-[30rem] rounded-[3rem] border-2 border-[#1a120f] bg-[#fbf6ef]"
          />
          <motion.div
            animate={{ rotate: [0, -1.6, 0, 1.6, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[12%] top-[10%] h-[24rem] w-[22rem] rounded-[2rem] border-2 border-[#1a120f] bg-[#f3cabd]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex border-2 border-[#1a120f] bg-white px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase">
                {title}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 text-[3.8rem] leading-[0.8] tracking-[-0.08em] md:text-[7rem]"
              >
                WE SHIP
                <br />
                THINGS
                <br />
                PEOPLE
                <br />
                REMEMBER.
              </motion.h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#51443e]">
                {summary} 反骨心と熱量を見せるために、黄色ではなく赤を軸にして、警告よりも「推進力」のある異端児感へ振った案です。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-none border-2 border-[#1a120f] bg-[#c63d2f] px-7 text-white hover:bg-[#b5372a]">
                  <Link href="/">この方向でトップを作る</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-2 border-[#1a120f] bg-[#fbf6ef] px-7 text-[#1a120f]">
                  <Link href="/team">誰が作るかを見る</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 lg:pt-20">
              <motion.div
                initial={{ opacity: 0, x: 24, rotate: -3 }}
                animate={{ opacity: 1, x: 0, rotate: -1 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="ml-6 border-2 border-[#1a120f] bg-[#c63d2f] p-6 text-white shadow-[12px_12px_0_#1a120f]"
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">Manifesto</div>
                <p className="mt-4 text-2xl leading-8 tracking-[-0.04em]">
                  静かな優等生ではなく、
                  <br />
                  危険なくらい前へ出るチームになる。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="grid gap-px border-2 border-[#1a120f] bg-[#1a120f]"
              >
                {manifesto.map((item, index) => (
                  <div key={item} className={`flex items-center justify-between px-5 py-4 text-sm leading-6 ${index === 1 ? "bg-[#f3cabd]" : index === 3 ? "bg-[#ffd9ab]" : "bg-[#fbf6ef]"}`}>
                    <span>{item}</span>
                    <span className="text-xs font-semibold tracking-[0.18em]">0{index + 1}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#1a120f] bg-[#1a120f] py-5 text-[#f6f0e8]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-[200%] gap-8 whitespace-nowrap text-xl font-semibold tracking-[0.02em] md:text-3xl"
        >
          <span>SIGNAL / RED / OUTLIER / PROTOTYPE / GCP / AI / GIS / SHIP FAST / SIGNAL / RED / OUTLIER / PROTOTYPE / GCP / AI / GIS / SHIP FAST</span>
          <span>SIGNAL / RED / OUTLIER / PROTOTYPE / GCP / AI / GIS / SHIP FAST / SIGNAL / RED / OUTLIER / PROTOTYPE / GCP / AI / GIS / SHIP FAST</span>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why This Color"
              title="同じ構成でも、赤にすると異端児感はもっと攻撃的になる。"
              body="黄色が警告なら、赤は決意です。落ち着いた強さではなく、熱量と推進力で前に出る会社像に変わります。"
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {sharedStrengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22, rotate: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -6, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
                className={`border-2 border-[#1a120f] p-6 shadow-[8px_8px_0_#1a120f] ${index === 1 ? "bg-[#f3cabd]" : "bg-white"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6b5850]">Strength {index + 1}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#51443e]">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.42 }}
            className="border-2 border-[#1a120f] bg-white p-8 shadow-[12px_12px_0_#1a120f]"
          >
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6b5850]">Case Study</div>
            <h2 className="mt-4 text-5xl leading-[0.92] tracking-[-0.06em]">YORUMICHI</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#51443e]">
              夜道の安全性を可視化し、最短ではなく最も安心できるルートを提案するプロダクト。社会課題を扱うなら、見た目だけでなく実装の骨格まで強くあるべきだと示すケースです。
            </p>
            <div className="mt-6 grid gap-3">
              {sharedAchievements.map((item) => (
                <div key={item.title} className="border border-[#1a120f]/15 bg-[#fbf6ef] px-4 py-3 text-sm leading-7 text-[#51443e]">
                  <span className="font-semibold text-[#1a120f]">{item.label}:</span> {item.title}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {sharedProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border-2 border-[#1a120f] p-6 ${index === 1 ? "bg-[#ffd9ab]" : "bg-white"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6b5850]">{item.step}</div>
                <h3 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#51443e]">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#1a120f] bg-[#1a120f] text-[#f6f0e8]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading
                eyebrow="People"
                title="熱量の色にしても、最後は人で信頼を取る。"
                body="異端児っぽさが強いほど、誰が責任を持つのかはむしろ明確である必要があります。"
              />
            </Reveal>
            <DesignTeamGrid
              cardClass="border-2 border-white/14 bg-white/[0.05] p-6"
              roleClass="text-white/50"
              bodyClass="mt-4 text-sm leading-7 text-white/72"
              imageBorderClass="border-white/12"
              gridClass="grid gap-4 md:grid-cols-3"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.42 }}
          className="border-2 border-[#1a120f] bg-[#c63d2f] p-8 text-white shadow-[14px_14px_0_#1a120f] md:p-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="もし、静かな会社では物足りないなら。"
            body="新規事業、PoC、AI、都市データの実装まで、普通の説明資料では前に進まないテーマをそのまま持ち込めます。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-none border-2 border-white bg-white text-[#1a120f] hover:bg-white/90">
              <Link href="/">この方向でホームを作る</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none border-2 border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/team">チーム詳細を見る</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "border-2 border-[#1a120f] bg-[#f8efe5] p-8 shadow-[14px_14px_0_#1a120f] md:p-10",
          cardClass: "border-2 border-[#1a120f] bg-[#fbf6ef] p-6 shadow-[10px_10px_0_rgba(26,18,15,0.08)]",
          softCardClass: "border-2 border-[#1a120f] bg-[#f3cabd] p-6",
          mutedClass: "text-[#7a544a]",
          lineClass: "border-[#1a120f]/15",
          primaryButtonClass: "rounded-none border-2 border-[#1a120f] bg-[#c63d2f] text-white hover:bg-[#b5372a]",
          secondaryButtonClass: "rounded-none border-2 border-[#1a120f] bg-[#fbf6ef] text-[#1a120f]",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}

function OutlierProtocolPage({ title, summary }: { title: string; summary: string }) {
  const manifesto = [
    "無難な受託会社に見えることを避ける。",
    "仕様が固まる前から手を動かす。",
    "AI、GIS、Web を分業しない。",
    "受賞や公開まで持っていく。",
  ];

  return (
    <Shell
      className="min-h-screen overflow-hidden bg-[#f3efe7] text-[#111111]"
      backClassName="border-[#111111]/15 bg-[#f3efe7]/92 text-[#111111]"
      progressClassName="bg-[#111111]"
      showAmbient={false}
    >
      <section className="relative overflow-hidden border-b-2 border-[#111111]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-12 h-64 w-64 rounded-full bg-[#ff6a3d]/16 blur-3xl" />
          <div className="absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-[#2744ff]/14 blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[6%] top-[18%] h-[32rem] w-[32rem] rounded-[3rem] border-2 border-[#111111] bg-[#f7f3ec]"
          />
          <motion.div
            animate={{ rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] top-[8%] h-[26rem] w-[22rem] rounded-[2rem] border-2 border-[#111111] bg-[#c5d7ff]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex border-2 border-[#111111] bg-white px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase">
                {title}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 text-[4rem] leading-[0.8] tracking-[-0.08em] md:text-[7.4rem]"
              >
                WE DO
                <br />
                NOT LOOK
                <br />
                SAFE.
              </motion.h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3f3932]">
                {summary} きれいに整って見えることより、異常な速度で仮説を形にできることを前面に出す。そんなチームのためのホームページです。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-none border-2 border-[#111111] bg-[#111111] px-7 text-white hover:bg-[#2b2b2b]">
                  <Link href="/">この方向でトップを作る</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-2 border-[#111111] bg-[#f7f3ec] px-7 text-[#111111]">
                  <Link href="/team">誰が作るかを見る</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 lg:pt-20">
              <motion.div
                initial={{ opacity: 0, x: 24, rotate: -3 }}
                animate={{ opacity: 1, x: 0, rotate: -1 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="ml-6 border-2 border-[#111111] bg-[#ffef5c] p-6 shadow-[12px_12px_0_#111111]"
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase">Manifesto</div>
                <p className="mt-4 text-2xl leading-8 tracking-[-0.04em]">
                  きれいな説明ではなく、
                  <br />
                  変な強さで覚えられる会社になる。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="grid gap-px border-2 border-[#111111] bg-[#111111]"
              >
                {manifesto.map((item, index) => (
                  <div key={item} className={`flex items-center justify-between bg-[#f7f3ec] px-5 py-4 ${index === 1 ? "bg-[#c5d7ff]" : ""}`}>
                    <span className="text-sm leading-6 text-[#111111]">{item}</span>
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#111111]">0{index + 1}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#111111] bg-[#111111] py-5 text-[#f3efe7]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-[200%] gap-8 whitespace-nowrap text-xl font-semibold tracking-[0.02em] md:text-3xl"
        >
          <span>OUTLIER / PROTOTYPE / GIS / AI / GCP / FAST BUILD / STRANGE TASTE / OUTLIER / PROTOTYPE / GIS / AI / GCP / FAST BUILD / STRANGE TASTE</span>
          <span>OUTLIER / PROTOTYPE / GIS / AI / GCP / FAST BUILD / STRANGE TASTE / OUTLIER / PROTOTYPE / GIS / AI / GCP / FAST BUILD / STRANGE TASTE</span>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Us"
              title="異端に見えること自体が、仕事の進め方と繋がっている。"
              body="無難な提案や保守的な設計ではなく、まず仮説を構造化して、すぐに触れる形へ持っていく。その姿勢をデザインでも隠さず出します。"
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {sharedStrengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22, rotate: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -6, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
                className={`border-2 border-[#111111] p-6 shadow-[8px_8px_0_#111111] ${index === 1 ? "bg-[#c5d7ff]" : "bg-white"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#5c564d]">Strength {index + 1}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#3f3932]">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.42 }}
            className="border-2 border-[#111111] bg-white p-8 shadow-[12px_12px_0_#111111]"
          >
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#5c564d]">Case Study</div>
            <h2 className="mt-4 text-5xl leading-[0.92] tracking-[-0.06em]">YORUMICHI</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#3f3932]">
              夜道の安全性を可視化し、最短ではなく最も安心できるルートを提案するプロダクト。オープンデータ、GIS、スコアリング、クラウド基盤までまとめて設計しました。
            </p>
            <div className="mt-6 grid gap-3">
              {sharedAchievements.map((item) => (
                <div key={item.title} className="border border-[#111111]/15 bg-[#f7f3ec] px-4 py-3 text-sm leading-7 text-[#3f3932]">
                  <span className="font-semibold text-[#111111]">{item.label}:</span> {item.title}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-none border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#2b2b2b]">
                <Link href="/yorumichi">ケース詳細を見る</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-2 border-[#111111] bg-transparent text-[#111111]">
                <a href="https://yorumichi.com" target="_blank" rel="noopener noreferrer">
                  デモを見る
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {sharedProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border-2 border-[#111111] p-6 ${index === 1 ? "bg-[#ffef5c]" : "bg-white"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#5c564d]">{item.step}</div>
                <h3 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#3f3932]">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#111111] bg-[#111111] text-[#f3efe7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading
                eyebrow="People"
                title="普通の会社に見えないのは、作る人間の組み合わせが普通じゃないから。"
                body="ビジネス、クラウド、AI、バックエンド、プロダクト実装を少人数で横断する。この密度が異端児っぽさの中身です。"
              />
            </Reveal>
            <DesignTeamGrid
              cardClass="border-2 border-white/14 bg-white/[0.04] p-6"
              roleClass="text-white/50"
              bodyClass="mt-4 text-sm leading-7 text-white/72"
              imageBorderClass="border-white/12"
              gridClass="grid gap-4 md:grid-cols-3"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.42 }}
          className="border-2 border-[#111111] bg-[#ffef5c] p-8 shadow-[14px_14px_0_#111111] md:p-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="もし、普通の提案では足りないなら。"
            body="新規事業、PoC、地図や都市データ、AI の実装。まだ輪郭が曖昧でも、その段階から一緒に組み立てられます。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-none border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#2b2b2b]">
              <Link href="/">この方向でホームを作る</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none border-2 border-[#111111] bg-transparent text-[#111111]">
              <Link href="/team">チーム詳細を見る</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "border-2 border-[#111111] bg-[#fff7c8] p-8 shadow-[14px_14px_0_#111111] md:p-10",
          cardClass: "border-2 border-[#111111] bg-[#fffdf1] p-6 shadow-[10px_10px_0_rgba(17,17,17,0.08)]",
          softCardClass: "border-2 border-[#111111] bg-[#ffef5c] p-6",
          mutedClass: "text-[#625814]",
          lineClass: "border-[#111111]/15",
          primaryButtonClass: "rounded-none border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#2b2b2b]",
          secondaryButtonClass: "rounded-none border-2 border-[#111111] bg-transparent text-[#111111]",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}

function FutureImplementationPage({ title, summary }: { title: string; summary: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const businesses = [
    {
      name: "Urban Safety Intelligence",
      title: "夜間移動の不安を、ルート設計で減らす。",
      body: "YORUMICHI を起点に、夜道の安全性を可視化し、目的に応じた移動判断を支援するプロダクト群へ展開します。",
      accent: "bg-[#dbe8ff]",
    },
    {
      name: "AI Workflow Design",
      title: "調査から提案書まで、AI を実務導線へ接続する。",
      body: "LLM を単体で置くのではなく、入力、レビュー、承認、蓄積まで一つの業務体験に落とし込みます。",
      accent: "bg-[#e9eff7]",
    },
    {
      name: "Spatial Data Products",
      title: "GIS と Web をつなぎ、意思決定に使える画面にする。",
      body: "地図、スコアリング、検索、ダッシュボードをまとめて設計し、PoC 止まりではないプロダクトへ整えます。",
      accent: "bg-[#f1f4f8]",
    },
  ];

  const newsItems = [
    {
      date: "2025.11.16",
      tag: "Award",
      title: "都知事杯オープンデータ・ハッカソン 2025 で最優秀賞を受賞。",
      body: "YORUMICHI の実装を通じて、都市データ、GIS、ルーティング、AI を横断したプロダクトとして評価されました。",
    },
    {
      date: "2025.10.08",
      tag: "Launch",
      title: "夜道の安心を可視化する YORUMICHI を公開。",
      body: "危険箇所の可視化とルート提案を組み合わせ、単なるマップではなく行動支援の体験として設計しました。",
    },
    {
      date: "2025.09.02",
      tag: "Platform",
      title: "GCP / BigQuery / GIS / LLM を横断する実装基盤を整備。",
      body: "PoC の速度と運用を両立するために、分析基盤、推論基盤、アプリ層を一体で設計しています。",
    },
  ];

  const footerLinks = [
    {
      heading: "私たちについて",
      items: ["ミッション", "進め方", "実績", "チーム"],
    },
    {
      heading: "事業内容",
      items: ["Urban Safety Intelligence", "AI Workflow Design", "Spatial Data Products"],
    },
    {
      heading: "その他",
      items: ["お問い合わせ", "YORUMICHI", "デザイン一覧"],
    },
  ];

  const { scrollYProgress } = useScroll();
  const heroShift = useTransform(scrollYProgress, [0, 0.18], [0, 120]);
  const heroFade = useTransform(scrollYProgress, [0, 0.14], [1, 0.45]);
  const circleProgress = useTransform(scrollYProgress, [0, 1], [157, 0]);

  return (
    <Shell
      className="min-h-screen overflow-x-clip bg-white text-[#101828]"
      backClassName="border-[#101828]/12 bg-white/92 text-[#101828]"
      progressClassName="bg-[#4f46e5]"
      showAmbient={false}
    >
      <AnimatePresenceMenu open={menuOpen}>
        <div className="fixed inset-x-0 top-0 z-[90] hidden px-8 pt-24 md:block">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}
            className="mx-auto max-w-[min(92vw,1400px)] overflow-hidden rounded-[2rem] border border-[#101828]/8 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.14)]"
          >
            <div className="grid md:grid-cols-[0.92fr_1.08fr]">
              <div className="border-r border-[#101828]/8 bg-[#f8fbff] p-8">
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#667085]">About</div>
                <div className="mt-4 text-4xl leading-[1.04] tracking-[-0.05em] text-[#101828]">
                  構想を、
                  <br />
                  実装に変える。
                </div>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#475467]">
                  新規事業、都市データ、AI 活用。論点整理から実装まで、一つのチームで進めます。
                </p>
              </div>
              <div className="grid gap-px bg-[#101828]/8 p-px md:grid-cols-2">
                {[
                  { label: "私たちについて", href: "#about" },
                  { label: "事業内容", href: "#business" },
                  { label: "ニュース", href: "#news" },
                  { label: "採用情報", href: "#join-us" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group bg-white p-7 transition hover:bg-[#f8fbff]"
                  >
                    <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#667085]">Menu</div>
                    <div className="mt-8 flex items-center justify-between gap-4 text-2xl tracking-[-0.04em] text-[#101828]">
                      <span>{item.label}</span>
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-[#101828]/12 text-[#4f46e5] transition group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresenceMenu>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-[1] hidden h-[36rem] overflow-hidden md:block">
        <motion.div
          animate={{ x: ["-16%", "6%"] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute left-[-10vw] top-16 h-14 w-[150vw] origin-left -skew-x-[46deg] rounded-full bg-[#d8e5ff]"
        />
        <motion.div
          animate={{ x: ["12%", "-12%"] }}
          transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute right-[-14vw] top-36 h-14 w-[150vw] origin-right skew-x-[46deg] rounded-full bg-[#4f46e5]"
        />
        <motion.div
          animate={{ x: ["-4%", "16%"] }}
          transition={{ duration: 13, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute left-[-24vw] top-64 h-14 w-[170vw] origin-left -skew-x-[46deg] rounded-full bg-[#edf3ff]"
        />
        <svg className="absolute left-[-12vw] top-20 h-20 w-[160vw]" viewBox="0 0 2338 71" aria-hidden="true">
          <path d="M2337.1,6l-34.6,59.9c-1.8,3.1-5.1,5-8.7,5L4,70.9c-3.1,0-5-3.3-3.5-6L35.1,5c1.8-3.1,5.1-5,8.7-5h2289.8c3.1,0,5,3.3,3.5,6Z" fill="#4f46e5" opacity="0.12" />
        </svg>
        <svg className="absolute right-[-18vw] top-40 h-20 w-[160vw] scale-x-[-1]" viewBox="0 0 2338 71" aria-hidden="true">
          <path d="M2337.1,6l-34.6,59.9c-1.8,3.1-5.1,5-8.7,5L4,70.9c-3.1,0-5-3.3-3.5-6L35.1,5c1.8-3.1,5.1-5,8.7-5h2289.8c3.1,0,5,3.3,3.5,6Z" fill="#dbe8ff" opacity="0.8" />
        </svg>
      </div>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-[70] hidden px-8 pt-6 md:block">
        <div className="mx-auto flex max-w-[min(92vw,1400px)] items-center justify-between">
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-[#101828]/10 bg-white px-5 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.1)]"
          >
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[#4f46e5] text-xs font-semibold text-white">A</div>
            <div className="text-left">
              <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#667085]">{title}</div>
              <div className="text-sm font-medium text-[#101828]">{menuOpen ? "Close" : "Menu"}</div>
            </div>
          </button>
          <div className="flex items-center gap-4">
            <Link
              href="/team"
              className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_34px_rgba(79,70,229,0.35)]"
            >
              Join Us
              <span className="rounded-full border border-white/16 px-3 py-1 text-xs">採用情報</span>
            </Link>
            <button
              type="button"
              className="pointer-events-auto relative grid h-14 w-14 place-items-center rounded-full border border-[#101828]/10 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.1)]"
              aria-label="scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <svg className="-rotate-90" width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
                <circle cx="26" cy="26" r="25" fill="white" stroke="#e4e7ec" strokeWidth="2" />
                <motion.circle
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2"
                  strokeDasharray="157"
                  style={{ strokeDashoffset: circleProgress }}
                />
              </svg>
              <ArrowRight className="absolute h-4 w-4 -rotate-90 text-[#4f46e5]" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <div className="mx-auto grid min-h-screen max-w-[min(92vw,1400px)] items-center gap-10 px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-36 lg:grid-cols-[0.84fr_1.16fr]">
          <motion.div style={{ y: heroShift, opacity: heroFade }} className="relative z-[2]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#667085]">Creating a Future Full of Hope.</div>
              <div className="mt-6 text-[3.7rem] leading-[0.86] tracking-[-0.08em] text-[#101828] sm:text-[5.6rem] md:text-[7.4rem] lg:text-[8.6rem]">
                <SplitRevealText text={"未来の希望を、"} />
                <br />
                <SplitRevealText text={"実装しよう。"} startDelay={0.42} />
              </div>
              <div className="mt-6 inline-table text-sm leading-7 text-[#98a2b3] md:text-base">
                <SplitRevealText text={"Creating a Future Full of Hope."} startDelay={0.82} small />
              </div>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#475467] md:text-lg">
                {summary} ただ見た目を整えるのではなく、課題整理、試作、実装、運用までを一つの流れとして届けるスタートアップです。
              </p>
            </motion.div>
          </motion.div>

          <div className="relative z-[2] hidden min-h-[42rem] items-center justify-center md:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative h-[32rem] w-[44rem]"
            >
              <div className="absolute left-8 top-16 h-56 w-80 rounded-[2rem] bg-[#dbe7ff] shadow-[0_30px_100px_rgba(15,23,42,0.08)]" />
              <div className="absolute right-10 top-8 h-64 w-96 rounded-[2rem] border border-[#101828]/10 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.12)]">
                <div className="border-b border-[#101828]/8 px-5 py-4 text-xs font-semibold tracking-[0.22em] uppercase text-[#667085]">Mission</div>
                <div className="p-5">
                  <div className="text-3xl leading-10 tracking-[-0.05em] text-[#101828]">
                    AI、GIS、Web を切り離さず、
                    <br />
                    社会で使われる画面まで作る。
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 grid w-[23rem] gap-px overflow-hidden rounded-[2rem] border border-[#101828]/10 bg-[#d0d5dd]/50 shadow-[0_30px_100px_rgba(15,23,42,0.1)]">
                {sharedStats.map((item) => (
                  <div key={item.label} className="bg-[#f8fafc] p-5">
                    <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#667085]">{item.label}</div>
                    <div className="mt-2 text-3xl tracking-[-0.05em] text-[#101828]">{item.value}</div>
                    <p className="mt-3 text-sm leading-6 text-[#475467]">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-8 right-0 w-[16rem] rounded-[2rem] bg-[#4f46e5] p-6 text-white shadow-[0_30px_100px_rgba(79,70,229,0.4)]">
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/60">Core Message</div>
                <p className="mt-3 text-xl leading-8 tracking-[-0.04em]">
                  課題整理から公開までを、一つのプロダクトとして前に進める。
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-8 hidden items-center gap-3 text-sm text-[#475467] md:flex"
        >
          <div className="relative h-16 w-px bg-[#101828]/14">
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#101828]" />
          </div>
          <span>Scroll</span>
        </motion.div>
      </section>

      <section id="about" className="relative overflow-hidden py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            initial={{ x: -320, y: 160 }}
            whileInView={{ x: -60, y: 30 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-16 h-72 w-[46rem] -skew-x-[36deg] rounded-[2rem] bg-[#dbe8ff]"
          />
          <motion.div
            initial={{ x: 260, y: 160 }}
            whileInView={{ x: 90, y: -20 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="absolute right-[-8rem] top-8 h-72 w-[38rem] skew-x-[36deg] rounded-[2rem] bg-[#4f46e5]"
          />
        </div>
        <div className="relative z-[2] mx-auto max-w-5xl px-6 text-center md:px-10">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#667085]">About</div>
            <div className="mt-6 text-4xl leading-[1.18] tracking-[-0.06em] text-[#101828] md:text-[4.6rem]">
              <SplitRevealText text={"すべての経済活動を、"} />
              <br />
              <SplitRevealText text={"デジタル化する。"} startDelay={0.24} />
              <br />
              <SplitRevealText text={"希望あふれる優しいデジタル社会を、"} startDelay={0.48} />
              <br />
              <SplitRevealText text={"未来に残していくために。"} startDelay={0.72} />
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#475467]">
              机上の整理だけでも、派手な PoC だけでも終わらせません。Aliss-labs は、曖昧な事業課題を整理し、触れる試作へ落とし、実際に使われるプロダクトへ整えるところまでを一貫して担います。
            </p>
            <div className="mt-10">
              <Link href="/team" className="inline-flex items-center gap-4 text-sm font-medium text-[#101828]">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-[#101828]/14 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
                  <ArrowRight className="h-5 w-5 text-[#4f46e5]" />
                </span>
                私たちについて
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="business" className="relative bg-[#f3f5f8] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#667085]">What We Do</div>
            <h2 className="mt-6 max-w-5xl text-4xl leading-[1.02] tracking-[-0.06em] text-[#101828] md:text-6xl">
              社会課題と技術を、実際に使われる事業へ変える。
            </h2>
          </Reveal>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#101828]/8 bg-white">
            {businesses.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="group relative grid gap-6 border-b border-[#101828]/8 px-6 py-6 last:border-b-0 md:grid-cols-[14rem_1fr_auto] md:items-center md:px-8 md:py-8"
              >
                <div className="pointer-events-none absolute inset-x-4 inset-y-2 rounded-[1.6rem] bg-[#f8fbff] opacity-0 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 group-hover:opacity-100" />
                <div className={`overflow-hidden rounded-[1.2rem] ${item.accent} p-4`}>
                  <div className="aspect-[16/10] rounded-[1rem] border border-[#101828]/10 bg-white/70 p-4">
                    <div className="grid h-full grid-cols-5 gap-2">
                      <div className="col-span-3 rounded-xl bg-[#101828]" />
                      <div className="col-span-2 rounded-xl bg-[#4f46e5]" />
                      <div className="col-span-2 rounded-xl bg-[#c7d7fe]" />
                      <div className="col-span-3 rounded-xl bg-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#667085]">{item.name}</div>
                  <h3 className="mt-3 text-2xl leading-9 tracking-[-0.04em] text-[#101828] md:text-[2rem]">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#475467] md:text-base">{item.body}</p>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#101828]/14 text-[#4f46e5] transition group-hover:translate-x-1 group-hover:border-[#4f46e5]/30 group-hover:bg-[#eef2ff]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#667085]">Latest News</div>
            <h2 className="mt-6 text-4xl leading-[1.04] tracking-[-0.06em] text-[#101828] md:text-6xl">最近の動きも、一覧で見せる。</h2>
          </Reveal>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#101828]/8 bg-white">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="grid gap-5 border-b border-[#101828]/8 px-6 py-6 last:border-b-0 md:grid-cols-[11rem_1fr_auto] md:items-start md:px-8"
              >
                <div>
                  <div className="text-sm font-semibold text-[#344054]">{item.date}</div>
                  <div className="mt-2 inline-flex rounded-full bg-[#ecf2ff] px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-[#4f46e5]">
                    {item.tag}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl leading-9 tracking-[-0.04em] text-[#101828]">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#475467] md:text-base">{item.body}</p>
                </div>
                <div className="hidden md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#101828]/14 text-[#4f46e5]">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="join-us" className="overflow-hidden bg-[#101828] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.24em] uppercase text-white/55">Join Us</div>
              <h2 className="mt-6 text-4xl leading-[1.02] tracking-[-0.06em] md:text-6xl">
                未知の課題を、
                <br />
                事業になる速度で
                <br />
                実装する。
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
                まだ名前の付いていない課題を見つけ、必要な技術を組み合わせ、実際に人が使う画面まで落とし込む。そういう仕事をしたい人に向いたチームです。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-white px-6 text-[#101828] hover:bg-white/90">
                  <Link href="/team">チームを見る</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/18 bg-transparent px-6 text-white hover:bg-white/10">
                  <Link href="/">相談する</Link>
                </Button>
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45 }}
              className="relative h-[34rem] overflow-hidden rounded-[2rem] bg-[#0b1220] p-4"
            >
              <div className="flex h-full w-[108%] gap-4">
                {[
                  [
                    { src: "/kano.png", alt: "可野 海喜" },
                    { src: "/shuri.jpg", alt: "山本 朱倫" },
                  ],
                  [
                    { src: "/ryosuke.png", alt: "岩本 涼平" },
                    { src: "/kano.png", alt: "プロダクト風景" },
                  ],
                  [
                    { src: "/shuri.jpg", alt: "チーム風景" },
                    { src: "/ryosuke.png", alt: "エンジニアリング" },
                  ],
                  [
                    { src: "/kano.png", alt: "調査と設計" },
                    { src: "/shuri.jpg", alt: "都市データの活用" },
                  ],
                ].map((column, columnIndex) => (
                  <motion.div
                    key={columnIndex}
                    animate={{ y: columnIndex % 2 === 0 ? [0, -70, 0] : [0, 70, 0] }}
                    transition={{ duration: 11 + columnIndex * 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-1 flex-col gap-4"
                  >
                    {column.map((item, itemIndex) => (
                      <div key={`${item.alt}-${itemIndex}`} className="relative flex-1 overflow-hidden rounded-[1.5rem] border border-white/10">
                        <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="25vw" />
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#101828]/8 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8 border-b border-[#101828]/8 pb-12 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <div className="text-4xl tracking-[-0.05em] text-[#101828] md:text-6xl">Contact</div>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#475467]">
                新規事業の壁打ち、AI の導入整理、都市データを使ったサービス設計など、まだ要件が固まっていない相談でもそのまま持ち込めます。
              </p>
            </div>
            <Button asChild className="h-14 rounded-full bg-[#4f46e5] px-6 text-white hover:bg-[#4338ca]">
              <Link href="/">お問い合わせ</Link>
            </Button>
          </motion.div>

          <div className="grid gap-10 py-12 md:grid-cols-[1fr_repeat(3,0.7fr)]">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#4f46e5] text-sm font-semibold text-white">A</div>
                <div>
                  <div className="text-sm font-semibold text-[#101828]">Aliss-labs</div>
                  <div className="text-sm text-[#667085]">未来の希望を、実装しよう。</div>
                </div>
              </div>
            </div>
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <div className="text-sm font-semibold text-[#101828]">{group.heading}</div>
                <ul className="mt-4 space-y-3 text-sm text-[#667085]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </Shell>
  );
}

function SplitRevealText({
  text,
  startDelay = 0,
  small = false,
}: {
  text: string;
  startDelay?: number;
  small?: boolean;
}) {
  return (
    <span className="inline-table">
      {Array.from(text).map((char, index) => (
        <span key={`${char}-${index}`} className="inline-block overflow-hidden align-top">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: small ? 0.32 : 0.42, delay: startDelay + index * (small ? 0.018 : 0.028), ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function AnimatePresenceMenu({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return open ? <>{children}</> : null;
}

function StructuredFuturePage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell
      className="min-h-screen bg-[#f6f4ef] text-[#111111]"
      backClassName="border-[#111111] bg-[#f6f4ef] text-[#111111]"
      progressClassName="bg-[#111111]"
      showAmbient={false}
    >
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
            <div className="inline-flex border border-[#111111] px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase">
              {title}
            </div>
            <h1 className="mt-6 text-[3.9rem] leading-[0.82] tracking-[-0.08em] sm:text-[5.2rem] md:text-[7.1rem] lg:text-[8.6rem]">
              MAKE
              <br />
              THE CASE
              <br />
              FEEL
              <br />
              INEVITABLE.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#403b34] md:text-lg">
              {summary} 動きで驚かせるのではなく、場面転換とタイポの強さで「このチームは整理して前に進められる」と感じさせる構成です。
            </p>
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, x: 24, rotate: -1.5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="translate-x-4 border-2 border-[#111111] bg-[#d8ff43] p-6 md:translate-x-12"
            >
              <div className="text-xs font-semibold tracking-[0.22em] uppercase">Core Message</div>
              <p className="mt-4 text-xl leading-8 tracking-[-0.03em] md:text-2xl">
                課題整理、試作、実装、運用を切り離さず、事業判断に使える粒度まで持っていく。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="border-2 border-[#111111] bg-white p-6"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {sharedStats.map((item) => (
                  <div key={item.label}>
                    <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#5f594f]">{item.label}</div>
                    <div className="mt-2 text-3xl tracking-[-0.05em]">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-[#5f594f]">{item.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#111111] bg-[#111111] py-5 text-[#f6f4ef]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="flex w-[200%] gap-8 whitespace-nowrap text-xl font-semibold tracking-[-0.04em] md:text-3xl"
        >
          <span>STRATEGY / AI / DATA / PRODUCT / DELIVERY / GCP / GIS / WORKFLOW / STRATEGY / AI / DATA / PRODUCT / DELIVERY / GCP / GIS / WORKFLOW</span>
          <span>STRATEGY / AI / DATA / PRODUCT / DELIVERY / GCP / GIS / WORKFLOW / STRATEGY / AI / DATA / PRODUCT / DELIVERY / GCP / GIS / WORKFLOW</span>
        </motion.div>
      </section>

      <section className="bg-[#111111] text-[#f6f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Why This Works"
                title="最初に、なぜ任せる理由があるのかを強く置く。"
                body="このページでは、サービス一覧より先に『なぜこのチームか』を整理します。信頼は動きではなく、論点の置き順から生まれます。"
              />
            </Reveal>
            <div className="grid gap-px bg-white/14 md:grid-cols-3">
              {sharedStrengths.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="bg-[#111111] p-6"
                >
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">Reason {index + 1}</div>
                  <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/72">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="次に、相談から公開までを場面として切り替える。"
              body="スクロールとセクション切り替えで、論点整理、試作、運用の3段階が自然に頭へ入る構成にします。"
            />
          </Reveal>
          <div className="grid gap-4">
            {sharedProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border-2 border-[#111111] p-6 ${index === 1 ? "bg-[#111111] text-[#f6f4ef]" : "bg-white"}`}
              >
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${index === 1 ? "text-white/50" : "text-[#5f594f]"}`}>{item.step}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.05em]">{item.title}</h2>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-[#403b34]"}`}>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#111111] bg-[#ece7dd]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {sharedAchievements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border-2 border-[#111111] p-6 ${index === 1 ? "bg-[#111111] text-[#f6f4ef]" : "bg-[#f6f4ef]"}`}
              >
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${index === 1 ? "text-white/50" : "text-[#5f594f]"}`}>{item.label}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.05em]">{item.title}</h2>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-[#403b34]"}`}>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="People"
              title="最後に、人と役割を短く強く見せる。"
              body="ブランドトーンが強いほど、人の情報は簡潔で明快である必要があります。役割と専門性が一目で分かる配置にします。"
            />
          </Reveal>
          <DesignTeamGrid
            cardClass="border-2 border-[#111111] bg-white p-6"
            roleClass="text-[#5f594f]"
            bodyClass="mt-4 text-sm leading-7 text-[#403b34]"
            imageBorderClass="border-[#111111]/12"
            gridClass="grid gap-4 md:grid-cols-3"
            nameClass="mt-4 text-3xl tracking-[-0.05em]"
          />
        </div>
      </section>

      <section className="bg-[#111111] text-[#f6f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Call To Action"
                title="最後は、曖昧な相談でもそのまま持ち込めると明言する。"
                body="新規事業の壁打ち、PoC の設計、AI 活用、データ基盤の整理。仕様が固まっていなくても、最初の論点整理から一緒に進められます。"
              />
            </Reveal>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4"
            >
              <Button asChild className="h-16 rounded-none bg-[#d8ff43] px-8 text-base text-[#111111] hover:bg-[#caef42]">
                <Link href="/">この構成をベースに進める</Link>
              </Button>
              <Button asChild variant="outline" className="h-16 rounded-none border-2 border-white/20 bg-transparent px-8 text-base text-[#f6f4ef] hover:bg-white/8">
                <Link href="/team">チーム詳細を見る</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "border border-white/14 bg-white/[0.05] p-8 md:p-10",
          cardClass: "border border-white/14 bg-white/[0.04] p-6",
          softCardClass: "border border-white/12 bg-white/[0.03] p-6",
          mutedClass: "text-[#d8ff43]/70",
          lineClass: "border-white/10",
          primaryButtonClass: "rounded-none bg-[#d8ff43] text-[#111111] hover:bg-[#caef42]",
          secondaryButtonClass: "rounded-none border-2 border-white/20 bg-transparent text-[#f6f4ef] hover:bg-white/8",
        }}
        dark
      />
      <CommonFooter dark />
    </Shell>
  );
}

function Shell({
  children,
  className,
  backClassName = "border-white/20 bg-white/10 text-white",
  progressClassName = "bg-[linear-gradient(90deg,#22d3ee,#60a5fa,#a855f7)]",
  showAmbient = true,
}: {
  children: ReactNode;
  className: string;
  backClassName?: string;
  progressClassName?: string;
  showAmbient?: boolean;
}) {
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const ambientLeftY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const ambientRightY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <main className={className}>
      <motion.div
        className={`fixed left-0 right-0 top-0 z-[80] h-1 origin-left ${progressClassName}`}
        style={{ scaleX: progressScale }}
      />
      {showAmbient ? (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute left-[-8rem] top-[10%] h-80 w-80 rounded-full bg-white/8 blur-3xl"
            style={{ y: ambientLeftY }}
          />
          <motion.div
            className="absolute right-[-8rem] top-[38%] h-96 w-96 rounded-full bg-cyan-300/8 blur-3xl"
            style={{ y: ambientRightY }}
          />
        </div>
      ) : null}
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <Link
          href="/designs"
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm ${backClassName}`}
        >
          <ArrowLeft className="h-4 w-4" />
          デザイン一覧へ戻る
        </Link>
      </div>
      {children}
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  className = "",
}: {
  eyebrow: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="text-xs font-semibold tracking-[0.24em] uppercase opacity-70">{eyebrow}</div>
      <h2 className="mt-4 text-4xl leading-[0.95] tracking-[-0.05em] md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 opacity-80 md:text-lg">{body}</p>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}

function CommonFooter({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`mx-auto mt-20 max-w-7xl px-6 pb-16 md:px-10 ${dark ? "text-white" : "text-slate-950"}`}>
      <div className={`flex flex-col items-start justify-between gap-6 rounded-[2rem] border px-6 py-6 md:flex-row md:items-center ${dark ? "border-white/12 bg-white/6" : "border-slate-200 bg-white/70"}`}>
        <div>
          <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${dark ? "text-white/60" : "text-slate-500"}`}>
            ALISS-LABS
          </div>
          <div className="mt-2 text-2xl tracking-[-0.04em]">構想を、事業になるプロダクトに変える。</div>
        </div>
        <div className="flex gap-3">
          <Button asChild className={dark ? "bg-white text-slate-950 hover:bg-white/90" : "bg-slate-950 text-white hover:bg-slate-800"}>
            <Link href="/">現在のホームへ</Link>
          </Button>
          <Button asChild variant="outline" className={dark ? "border-white/20 bg-transparent text-white hover:bg-white/10" : "border-slate-300 bg-white/80 text-slate-950"}>
            <Link href="/yorumichi">YORUMICHI</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function DesignTeamGrid({
  cardClass,
  roleClass,
  bodyClass,
  imageBorderClass,
  nameClass = "mt-4 text-3xl tracking-[-0.04em]",
  gridClass = "grid gap-6 md:grid-cols-3",
}: {
  cardClass: string;
  roleClass: string;
  bodyClass: string;
  imageBorderClass: string;
  nameClass?: string;
  gridClass?: string;
}) {
  return (
    <div className={gridClass}>
      {sharedTeam.map((member, index) => (
        <motion.article
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className={cardClass}
        >
          <div className={`relative h-28 w-28 overflow-hidden rounded-[1.4rem] border bg-white/90 ${imageBorderClass}`}>
            <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="112px" />
          </div>
          <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${roleClass}`}>{member.role}</div>
          <h2 className={nameClass}>{member.name}</h2>
          <p className={bodyClass}>{member.body}</p>
          {"link" in member && member.link ? (
            <a href={member.link} target="_blank" rel="noopener noreferrer" className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${roleClass}`}>
              <Github className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}

type ThemeConfig = {
  sectionClass: string;
  cardClass: string;
  softCardClass: string;
  mutedClass: string;
  lineClass: string;
  primaryButtonClass: string;
  secondaryButtonClass: string;
};

function FullHomepageSections({
  theme,
  dark = false,
}: {
  theme: ThemeConfig;
  dark?: boolean;
}) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="実績"
            title="日本最大級のハッカソン優勝"
            body="都知事杯オープンデータ・ハッカソン 2025 で最優秀賞を受賞。1,327名の応募から、複雑なデータを直感的な価値へ変える技術力が評価されました。"
            className={dark ? "text-white" : "text-slate-950"}
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sharedAchievements.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={theme.cardClass}
            >
              <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>{item.label}</div>
              <h3 className="mt-4 text-2xl tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 opacity-80">{item.body}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className={theme.primaryButtonClass}>
            <Link href="/#contact">まずは無料相談から</Link>
          </Button>
          <Button asChild variant="outline" className={theme.secondaryButtonClass}>
            <Link href="/yorumichi">実績を見る</Link>
          </Button>
        </div>
      </section>

      <section className={`mx-auto max-w-7xl px-6 py-16 md:px-10 ${dark ? "text-white" : "text-slate-950"}`}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45 }}
          className={theme.sectionClass}
        >
          <SectionHeading
            eyebrow="プロダクト"
            title="YORUMICHIが実証した、データ駆動型の社会課題解決"
            body="夜間の安全という社会課題を、オープンデータ・位置情報・AI分析で解決したYORUMICHI。 この技術を、貴社のビジネスニーズに応用します。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className={theme.cardClass}
            >
              <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>Y</div>
              <h3 className="mt-4 text-3xl tracking-[-0.04em]">YORUMICHI Interface</h3>
              <p className="mt-4 text-sm leading-7 opacity-80">YORUMICHI - 夜間の安全なルートを数値化・可視化</p>
              <div className={`mt-6 grid gap-3 border-t pt-6 ${theme.lineClass}`}>
                {sharedStats.map((stat) => (
                  <div key={stat.value} className={`rounded-2xl border px-4 py-4 ${dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white/70"}`}>
                    <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>{stat.label}</div>
                    <div className="mt-2 text-lg font-semibold tracking-[-0.03em]">{stat.value}</div>
                    <p className="mt-2 text-sm leading-6 opacity-75">{stat.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className={theme.primaryButtonClass}>
                  <Link href="/yorumichi">YORUMICHIについて詳しく見る</Link>
                </Button>
              </div>
            </motion.article>
            <div className={`grid gap-5 ${theme.lineClass} md:grid-cols-3`}>
              {sharedProductFeatures.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={theme.softCardClass}
                >
                  <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>YORUMICHI</div>
                  <h3 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 opacity-80">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="チーム"
            title="都知事杯ハッカソン優勝メンバーが、貴社のプロジェクトに専任。"
            body="技術、営業、戦略を統合した、最高のチーム体制でプロジェクトを前に進めます。"
            className={dark ? "text-white" : "text-slate-950"}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sharedTeam.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={theme.cardClass}
            >
              <div className={`relative h-28 w-28 overflow-hidden rounded-[1.4rem] border bg-white/90 ${dark ? "border-white/12" : "border-slate-200"}`}>
                <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="112px" />
              </div>
              <div className={`mt-5 text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>{member.role}</div>
              <h3 className="mt-3 text-2xl tracking-[-0.04em]">{member.name}</h3>
              <p className="mt-4 text-sm leading-7 opacity-80">{member.body}</p>
              <div className={`mt-5 space-y-2 border-t pt-5 ${theme.lineClass}`}>
                {member.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2 text-sm opacity-85">
                    <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${dark ? "bg-white/65" : "bg-slate-500"}`} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              {"link" in member && member.link ? (
                <a href={member.link} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${theme.mutedClass}`}>
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className={theme.sectionClass}
        >
          <SectionHeading
            eyebrow="サービス"
            title="アイデアの検証から、エンタープライズシステムまで。"
            body="貴社の成長段階に応じた最適なソリューションを用意し、MVP開発からフルスクラッチ、AI実装まで支援します。"
            className={dark ? "text-white" : "text-slate-950"}
          />
          <div className={`mt-10 grid gap-5 ${theme.lineClass} md:grid-cols-3`}>
            {sharedProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={theme.softCardClass}
              >
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>{item.step}</div>
                <h3 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-80">{item.body}</p>
                <div className={`mt-5 space-y-2 border-t pt-5 ${theme.lineClass}`}>
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2 text-sm opacity-85">
                      <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${dark ? "bg-white/65" : "bg-slate-500"}`} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild className={theme.primaryButtonClass}>
              <Link href="/#contact">まずは無料相談から</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className={theme.sectionClass}
        >
          <SectionHeading
            eyebrow="お問い合わせ"
            title="最高のチームと、最高のプロダクトを。"
            body="貴社のビジョンを、社会実装へ。まずはお気軽にご相談ください。"
            className={dark ? "text-white" : "text-slate-950"}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["会社名 / 組織名", "例: 株式会社 〇〇"],
              ["ご担当者名", "例: 山田太郎"],
              ["メールアドレス", "example@company.com"],
              ["電話番号（任意）", "例: 090-1234-5678"],
            ].map(([label, placeholder]) => (
              <div key={label} className={`rounded-2xl border px-4 py-4 ${dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white/70"}`}>
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>{label}</div>
                <div className="mt-2 text-sm opacity-65">{placeholder}</div>
              </div>
            ))}
            <div className={`rounded-2xl border px-4 py-4 md:col-span-2 ${dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white/70"}`}>
              <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${theme.mutedClass}`}>ご相談内容</div>
              <div className="mt-2 text-sm opacity-65">プロジェクトの概要、課題、期待値などをお聞かせください。</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className={theme.primaryButtonClass}>
              <Link href="/#contact">相談を申し込む</Link>
            </Button>
            <p className={`text-sm ${theme.mutedClass}`}>プライバシーポリシーに同意の上、送信してください。</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}

function LiquidInterfacePage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff9fc_0%,#eef7ff_45%,#eef2ff_100%)] text-slate-950" backClassName="border-slate-200 bg-white/75 text-slate-900">
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 md:pb-28">
        <div className="absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute right-[-4rem] top-32 h-96 w-96 rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-flex rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              {title}
            </div>
            <h1 className="mt-6 text-6xl leading-[0.88] tracking-[-0.07em] md:text-[6.5rem]">
              固い情報を、
              <span className="bg-[linear-gradient(90deg,#0f172a,#2563eb,#a855f7)] bg-clip-text text-transparent">
                やわらかく立ち上げる。
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
                <Link href="/">この方向でトップを見る</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/70 bg-white/70 px-6 text-slate-950">
                <Link href="/team">チーム詳細</Link>
              </Button>
            </div>
          </motion.div>
          <div className="relative min-h-[38rem]">
            <motion.div
              animate={{ rotate: [0, 8, -4, 0], scale: [1, 1.05, 0.98, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[8%] top-[12%] h-16 w-16 rounded-full border border-white/60 bg-white/40 backdrop-blur-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.08, 0.96, 1], borderRadius: ["42% 58% 61% 39% / 42% 38% 62% 58%", "54% 46% 38% 62% / 48% 62% 38% 52%", "45% 55% 53% 47% / 60% 42% 58% 40%", "42% 58% 61% 39% / 42% 38% 62% 58%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_30%_30%,rgba(244,114,182,0.36),rgba(255,255,255,0.14)_55%,transparent_72%),radial-gradient(circle_at_70%_40%,rgba(56,189,248,0.34),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.18))] blur-sm"
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
              className="absolute left-1/2 top-[14%] w-[min(36rem,100%)] -translate-x-1/2 rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">What We Build</div>
              <div className="mt-4 text-3xl tracking-[-0.04em]">AI活用プロダクト / データ基盤 / 事業検証用の試作</div>
              <div className="mt-5 grid gap-3">
                <div className="h-3 rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.5),rgba(255,255,255,0.8),rgba(168,85,247,0.42))]" />
                <div className="h-3 w-[80%] rounded-full bg-[linear-gradient(90deg,rgba(244,114,182,0.36),rgba(255,255,255,0.7))]" />
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, 14, 0], opacity: 1 }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
              className="absolute bottom-[10%] left-1/2 w-[min(30rem,92%)] -translate-x-1/2 rounded-[2rem] border border-white/70 bg-white/58 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">Current Signals</div>
              <div className="mt-4 grid gap-3">
                {sharedStats.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-full bg-white/62 px-4 py-3 text-sm">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Surface Logic"
              title="まず、なぜ柔らかい面で見せるのかを言語化する。"
              body="Liquid は装飾ではなく、硬い情報をやわらかく接続するための見せ方です。AI、データ、Web、事業設計の境界を溶かして見せるために使います。"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {sharedStrengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[2rem] border border-white/75 bg-white/62 p-7 shadow-[0_22px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">Strength {index + 1}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/70 bg-white/58 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Scene Flow"
                title="次に、ページの中でどこを主役にするかを絞る。"
                body="Liquid 方向では、すべてを溶かすのではなく、『相談』『試作』『運用』の3場面に主役を絞ると、印象と理解が両立します。"
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {sharedProcess.map((item, index) => (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[1.7rem] border border-white/65 bg-white/48 p-6 backdrop-blur-xl"
                >
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">{item.step}</div>
                  <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {sharedAchievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`rounded-[2rem] border border-white/75 p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl ${index === 1 ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.76),rgba(244,114,182,0.12))]" : "bg-white/62"}`}
            >
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">{item.label}</div>
              <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              eyebrow="People"
              title="最後に、人の輪郭をしっかり残す。"
              body="やわらかい見た目でも、人が見えないと信頼感は落ちます。Liquid は質感で惹きつけ、最後はチームで信頼を固める構成にします。"
            />
          </Reveal>
          <DesignTeamGrid
            cardClass="rounded-[2rem] border border-white/70 bg-white/58 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            roleClass="text-slate-500"
            bodyClass="mt-4 text-sm leading-7 text-slate-700"
            imageBorderClass="border-white/70"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-white/70 bg-white/58 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="相談の入口も、やわらかく見えて迷わせない。"
            body="新規事業、PoC、AI 活用、データ基盤の整理。まだ輪郭が曖昧でも、最初の対話から整理して進められます。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
              <Link href="/">この構成をベースに進める</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/70 bg-white/70 text-slate-950">
              <Link href="/team">チーム詳細を見る</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "rounded-[2rem] border border-white/70 bg-white/58 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10",
          cardClass: "rounded-[2rem] border border-white/75 bg-white/62 p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl",
          softCardClass: "rounded-[1.8rem] border border-white/75 bg-white/62 p-6 backdrop-blur-xl",
          mutedClass: "text-slate-500",
          lineClass: "border-slate-200/70",
          primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
          secondaryButtonClass: "rounded-full border-white/70 bg-white/70 text-slate-950",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}

function BrutalistFuturePage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen bg-[#f4f1ea] text-[#101010]" backClassName="border-[#101010] bg-[#f4f1ea] text-[#101010]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
            <div className="inline-flex border border-[#101010] px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase">
              {title}
            </div>
            <h1 className="mt-6 text-[4.6rem] leading-[0.8] tracking-[-0.08em] md:text-[8.8rem]">
              BUILD
              <br />
              THE CASE
              <br />
              BEFORE
              <br />
              THE PITCH.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#3f3a33]">
              {summary} 受託会社らしい「サービス一覧」ではなく、事業仮説を前へ進めるチームとして見せる構成に振り切る。
            </p>
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, x: 24, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="translate-x-4 border-2 border-[#101010] bg-[#d9ff4a] p-6 md:translate-x-10"
            >
              <div className="text-xs font-semibold tracking-[0.22em] uppercase">Positioning</div>
              <p className="mt-4 text-2xl leading-8 tracking-[-0.03em]">
                課題整理、試作、実装までを切り離さず、事業判断に効く形で前へ出す。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="border-2 border-[#101010] bg-white p-6"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {sharedStats.map((item) => (
                  <div key={item.label}>
                    <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#5c564d]">{item.label}</div>
                    <div className="mt-2 text-3xl tracking-[-0.05em]">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-[#5c564d]">{item.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#101010] bg-[#101010] py-5 text-[#f4f1ea]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="flex w-[200%] gap-8 whitespace-nowrap text-2xl font-semibold tracking-[-0.04em] md:text-4xl"
        >
          <span>STRATEGY / AI / DATA / PRODUCT / GCP / PROTOTYPE / GIS / ROUTING / STRATEGY / AI / DATA / PRODUCT / GCP / PROTOTYPE / GIS / ROUTING</span>
          <span>STRATEGY / AI / DATA / PRODUCT / GCP / PROTOTYPE / GIS / ROUTING / STRATEGY / AI / DATA / PRODUCT / GCP / PROTOTYPE / GIS / ROUTING</span>
        </motion.div>
      </section>

      <section className="bg-[#101010] text-[#f4f1ea]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Why Aliss-labs"
                title="まず、なぜこの会社に相談するのかを明快にする。"
                body="LayerX やラクス系の強いページは、早い段階で信頼の論点を整理しています。この案では『何が違うか』を先に強く置きます。"
              />
            </Reveal>
            <div className="grid gap-px bg-white/14 md:grid-cols-3">
              {sharedStrengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-[#101010] p-6"
                >
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">Strength {index + 1}</div>
                  <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/72">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <SectionHeading
              eyebrow="How It Moves"
              title="次に、どう進むのかを場面で切り替える。"
              body="ただの3カラムではなく、相談、試作、運用の3段階が順に強く見えるように構成する。"
            />
          </Reveal>
          <div className="grid gap-4">
            {sharedProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border-2 border-[#101010] p-6 ${index === 1 ? "bg-[#101010] text-[#f4f1ea]" : "bg-white"}`}
              >
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${index === 1 ? "text-white/50" : "text-[#5c564d]"}`}>{item.step}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.05em]">{item.title}</h2>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-[#3f3a33]"}`}>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#101010] bg-[#ece8df]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {sharedAchievements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border-2 border-[#101010] p-6 ${index === 1 ? "bg-[#101010] text-[#f4f1ea]" : "bg-[#f4f1ea]"}`}
              >
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${index === 1 ? "text-white/50" : "text-[#5c564d]"}`}>{item.label}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.05em]">{item.title}</h2>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/75" : "text-[#3f3a33]"}`}>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeading
              eyebrow="People"
              title="最後に、誰が実際に手を動かすかまで見せる。"
              body="ここで顔と役割を出して、ただのコンセプトではなく実務を担えるチームだと伝える。"
            />
          </Reveal>
          <DesignTeamGrid
            cardClass="border-2 border-[#101010] bg-white p-6"
            roleClass="text-[#5c564d]"
            bodyClass="mt-4 text-sm leading-7 text-[#3f3a33]"
            imageBorderClass="border-[#101010]/12"
            gridClass="grid gap-4 md:grid-cols-3"
            nameClass="mt-4 text-3xl tracking-[-0.05em]"
          />
        </div>
      </section>

      <section className="bg-[#101010] text-[#f4f1ea]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Call To Action"
                title="曖昧な相談でも、そのまま持ち込めると明言する。"
                body="新規事業の壁打ち、AI 活用の試作、データ基盤の整理、プロダクト立ち上げ。仕様が固まっていなくても、最初の論点整理から進めます。"
              />
            </Reveal>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4"
            >
              <Button asChild className="h-16 rounded-none bg-[#d9ff4a] px-8 text-base text-[#101010] hover:bg-[#cfee4a]">
                <Link href="/">この構成をベースに進める</Link>
              </Button>
              <Button asChild variant="outline" className="h-16 rounded-none border-2 border-white/22 bg-transparent px-8 text-base text-[#f4f1ea] hover:bg-white/8">
                <Link href="/team">チーム詳細を見る</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "border border-[#101010] bg-white p-8 md:p-10",
          cardClass: "border border-[#101010] bg-[#f4f1ea] p-6",
          softCardClass: "border border-[#101010] bg-white p-6",
          mutedClass: "text-[#5a554b]",
          lineClass: "border-[#101010]/12",
          primaryButtonClass: "rounded-none bg-[#101010] text-white hover:bg-[#2a2a2a]",
          secondaryButtonClass: "rounded-none border-2 border-[#101010] bg-transparent text-[#101010]",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}

function KineticTypographyPage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen overflow-hidden bg-[#f8f8f6] text-slate-950" backClassName="border-slate-300 bg-white/75 text-slate-950">
      <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-8 md:px-10 md:pb-20">
        <motion.div
          animate={{ x: [0, -80, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-0 top-10 text-[18vw] font-semibold leading-none tracking-[-0.08em] text-slate-900/5"
        >
          MOTION TYPE MOTION TYPE
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10"
        >
          <div className="text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase">{title}</div>
          <h1 className="mt-8 max-w-5xl text-[3.9rem] leading-[0.82] tracking-[-0.08em] md:text-[8rem]">
            技術力は、
            <br />
            文字の強さで
            <br />
            伝えられる。
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">{summary}</p>
        </motion.div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {sharedStats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35 }}
                className="border-b border-slate-300 pb-4"
              >
                <div className="text-sm uppercase text-slate-500">{item.label}</div>
                <div className="mt-1 text-4xl tracking-[-0.05em]">{item.value}</div>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-5">
            {sharedStrengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-slate-300 bg-white/70 p-6"
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">{item.title}</div>
                <p className="mt-4 text-2xl leading-relaxed tracking-[-0.03em]">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Order of Reading"
              title="タイポを主役にするなら、読む順番を強く設計する。"
              body="Kinetic は装飾ではなく、情報の強弱を文字で制御する方向です。大見出し、補助文、実績、CTA の順番を極端に分けた方が効きます。"
            />
          </Reveal>
          <div className="grid gap-5">
            {sharedProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 12 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-slate-300 bg-white/72 p-6"
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">{item.step}</div>
                <h2 className="mt-4 text-4xl leading-[0.95] tracking-[-0.05em]">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-300 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {sharedAchievements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-[1.5rem] border border-slate-300 p-6 ${index === 1 ? "bg-slate-950 text-white" : "bg-white/80"}`}
              >
                <div className={`text-xs font-semibold tracking-[0.22em] uppercase ${index === 1 ? "text-white/50" : "text-slate-500"}`}>{item.label}</div>
                <h2 className="mt-4 text-4xl leading-[0.95] tracking-[-0.05em]">{item.title}</h2>
                <p className={`mt-4 text-base leading-8 ${index === 1 ? "text-white/75" : "text-slate-700"}`}>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeading
              eyebrow="People"
              title="最後は、人と役割を短く強く切り出す。"
              body="タイポが強いほど、人物情報も要点だけを明確に切る必要があります。冗長な説明より、役割と強みを一行で分かる形にします。"
            />
          </Reveal>
          <DesignTeamGrid
            cardClass="rounded-[1.5rem] border border-slate-300 bg-white/80 p-6"
            roleClass="text-slate-500"
            bodyClass="mt-4 text-base leading-8 text-slate-700"
            imageBorderClass="border-slate-200"
            nameClass="mt-4 text-4xl leading-[0.95] tracking-[-0.05em]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-[1.8rem] border border-slate-300 bg-white/72 p-8 md:p-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="最後は、強い文言で相談導線を閉じる。"
            body="新規事業、PoC、AI 活用、データ基盤。輪郭が曖昧でも、最初の論点整理から伴走できます。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
              <Link href="/">この構成をベースに進める</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white text-slate-950">
              <Link href="/team">チーム詳細を見る</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "rounded-[1.8rem] border border-slate-300 bg-white/72 p-8 md:p-10",
          cardClass: "rounded-[1.8rem] border border-slate-300 bg-white/82 p-6",
          softCardClass: "rounded-[1.5rem] border border-slate-300 bg-slate-50 p-6",
          mutedClass: "text-slate-500",
          lineClass: "border-slate-200",
          primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
          secondaryButtonClass: "rounded-full border-slate-300 bg-white text-slate-950",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}

function AiNativeWorkspacePage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen bg-[#0a0d14] text-white" backClassName="border-white/12 bg-white/5 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-4 md:px-10">
        <div className="rounded-[2rem] border border-white/12 bg-white/5 p-4 shadow-[0_28px_100px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <div className="grid gap-4 lg:grid-cols-[220px_1fr_300px]">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-[1.5rem] border border-white/10 bg-[#0f1522] p-5"
            >
              <div className="text-xs font-semibold tracking-[0.24em] text-white/60 uppercase">{title}</div>
              <div className="mt-6 space-y-3">
                {["Overview", "Reason", "Flow", "Proof", "People", "Contact"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/84">
                    {item}
                  </div>
                ))}
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-[#0f1522] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">Workspace Status</div>
                  <h1 className="mt-3 max-w-4xl text-4xl tracking-[-0.05em] md:text-6xl">AI とプロダクト開発を、ひとつの運用画面として見せる。</h1>
                </div>
                <div className="rounded-full border border-emerald-400/25 bg-emerald-400/12 px-4 py-2 text-sm text-emerald-300">Operational</div>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                {summary} 画面の印象だけでなく、実際に AI、データ、実装、運用がどのようにひとつの流れで繋がるのかが見える構成に作り替えます。
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {sharedStats.map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/4 p-4">
                    <div className="text-xs uppercase text-white/50">{item.label}</div>
                    <div className="mt-2 text-2xl">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-white/60">{item.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-[1.5rem] border border-white/10 bg-[#0f1522] p-5"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-white/60 uppercase">Execution Log</div>
              <div className="mt-5 space-y-3 text-sm text-white/72">
                {[
                  "Input: 新規事業の仮説を受け取り、検証論点を分解",
                  "Process: データ要件、画面要件、AI 活用箇所を整理",
                  "Output: 動く試作、評価ダッシュボード、改善計画を生成",
                ].map((line, index) => (
                  <motion.div
                    key={line}
                    animate={{ x: [0, index === 1 ? -4 : 5, 0] }}
                    transition={{ duration: 4.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-xl border border-white/10 bg-white/4 p-3"
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1119]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Why This Format"
                title="まず、なぜ Workspace という見せ方が効くのかを説明する。"
                body="AI 活用やデータ基盤の価値は、単なるカード一覧では伝わりづらい。入力、判断、出力、運用という流れがひとつの空間にある方が、実装力が伝わります。"
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {sharedStrengths.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">Reason {index + 1}</div>
                  <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/72">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Core Screens"
              title="次に、どの画面がこのホームの主役になるかを整理する。"
              body="見せ場は『操作画面』『案件一覧』『成果物』の3つに絞る。多すぎるUI断片は雑然と見えるため、主役画面を固定します。"
            />
          </Reveal>
          <div className="grid gap-4">
            {sharedProjects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 8 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-[1.5rem] border p-6 ${index === 1 ? "border-cyan-400/20 bg-cyan-400/8" : "border-white/10 bg-white/5"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">{project.type}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.04em]">{project.name}</h2>
                <p className="mt-4 text-sm leading-7 text-white/72">{project.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1119]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {sharedAchievements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-[1.5rem] border p-6 ${index === 1 ? "border-fuchsia-400/20 bg-fuchsia-400/8" : "border-white/10 bg-white/5"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">{item.label}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/72">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <SectionHeading
              eyebrow="People in the Loop"
              title="そのうえで、誰がどこを担うのかを画面の外に出す。"
              body="AI Native に寄せても、人がいないと信頼感は落ちます。誰が判断し、誰が設計し、誰が実装するのかを最後に明示します。"
            />
          </Reveal>
          <DesignTeamGrid
            cardClass="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            roleClass="text-white/50"
            bodyClass="mt-4 text-sm leading-7 text-white/72"
            imageBorderClass="border-white/10"
            gridClass="grid gap-4 md:grid-cols-3"
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0f1522]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="最後は、相談の入口を迷わせない。"
                body="新規事業の壁打ち、PoC の設計、AI 活用導線の整理、データ基盤の見直し。まだ曖昧でも、その段階から一緒に整理できます。"
              />
            </Reveal>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4"
            >
              <Button asChild className="h-16 rounded-full bg-white text-slate-950 hover:bg-white/90">
                <Link href="/">この方向をベースに進める</Link>
              </Button>
              <Button asChild variant="outline" className="h-16 rounded-full border-white/20 bg-transparent text-white hover:bg-white/8">
                <Link href="/team">チーム詳細を見る</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "rounded-[2rem] border border-white/12 bg-white/5 p-8 shadow-[0_28px_100px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-10",
          cardClass: "rounded-[1.8rem] border border-white/12 bg-white/[0.04] p-6",
          softCardClass: "rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6",
          mutedClass: "text-white/55",
          lineClass: "border-white/10",
          primaryButtonClass: "rounded-full bg-white text-slate-950 hover:bg-white/90",
          secondaryButtonClass: "rounded-full border-white/20 bg-transparent text-white hover:bg-white/8",
        }}
        dark
      />
      <CommonFooter dark />
    </Shell>
  );
}

function SpatialCanvasPage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fafcff_0%,#eef4fb_100%)] text-slate-950" backClassName="border-slate-200 bg-white/75 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <SectionHeading eyebrow={title} title="ページではなく、面の重なりとして見せる。" body={summary} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
                <Link href="/team">チームを見る</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white/75 text-slate-950">
                <Link href="/yorumichi">ケーススタディ</Link>
              </Button>
            </div>
          </motion.div>
          <div className="relative h-[34rem] perspective-[1400px]">
            {sharedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30, rotateX: 10, rotateZ: index === 1 ? -5 : 5 }}
                animate={{ opacity: 1, y: [0, index * 14 - 10, 0], rotateX: [8, 0, 8], rotateZ: index === 1 ? [-5, -1, -5] : [5, 1, 5] }}
                transition={{ duration: 9 + index, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute left-1/2 top-1/2 w-[min(32rem,92%)] -translate-x-1/2 rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl ${index === 0 ? "-translate-y-[62%]" : index === 1 ? "-translate-y-1/2" : "-translate-y-[38%]"}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">{project.type}</div>
                <div className="mt-4 text-3xl tracking-[-0.05em]">{project.name}</div>
                <p className="mt-4 text-sm leading-7 text-slate-700">{project.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-3 md:px-10">
        {sharedProcess.map((item) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -8, rotateZ: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.8rem] border border-slate-200 bg-white/75 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
          >
            <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">{item.step}</div>
            <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">{item.body}</p>
          </motion.div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Spatial Logic"
              title="奥行きを使うなら、何が前景で何が背景かを整理する。"
              body="Spatial は見た目だけでなく、情報の階層を空間で見せる方向です。前景には意思決定、背景には補助情報を置くと意味が出ます。"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {sharedStrengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, rotateZ: index === 1 ? 0 : 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.8rem] border border-slate-200 bg-white/78 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">Layer {index + 1}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white/72 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.07)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Scene Transition"
                title="空間的な切り替えで、実績を1つずつ主役化する。"
                body="この方向では、すべてを平面的に並べず、ケースごとに面が入れ替わるように見せると強い。"
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {sharedAchievements.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24, rotateX: 12 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ y: -8, rotateZ: index === 1 ? 0 : 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[1.6rem] border border-slate-200 bg-[#f8fbff] p-6"
                >
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">{item.label}</div>
                  <h2 className="mt-4 text-3xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              eyebrow="People"
              title="空間表現でも、最後はチームを実体として見せる。"
              body="抽象表現だけで終わらせず、誰が作るのかを最後に前景へ引き戻して信頼を作ります。"
            />
          </Reveal>
          <DesignTeamGrid
            cardClass="rounded-[1.8rem] border border-slate-200 bg-white/78 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
            roleClass="text-slate-500"
            bodyClass="mt-4 text-sm leading-7 text-slate-700"
            imageBorderClass="border-slate-200"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-slate-200 bg-white/72 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.07)] md:p-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="最後は、空間の印象を残したまま問い合わせに着地させる。"
            body="新規事業、AI 活用、データ基盤、都市データの応用など、テーマが曖昧でも入口から一緒に整理できます。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
              <Link href="/">この構成をベースに進める</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white text-slate-950">
              <Link href="/team">チーム詳細を見る</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "rounded-[2rem] border border-slate-200 bg-white/72 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.07)] md:p-10",
          cardClass: "rounded-[2rem] border border-slate-200 bg-white/82 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]",
          softCardClass: "rounded-[1.7rem] border border-slate-200 bg-white p-6",
          mutedClass: "text-slate-500",
          lineClass: "border-slate-200",
          primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
          secondaryButtonClass: "rounded-full border-slate-300 bg-white text-slate-950",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}

function MinimalBlackLabPage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen bg-[#05070a] text-white" backClassName="border-white/15 bg-white/4 text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-8 md:p-12"
          >
          <div className="text-xs font-semibold tracking-[0.24em] text-white/50 uppercase">{title}</div>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[0.9] tracking-[-0.07em] md:text-7xl">
            静かな画面でも、
            <br />
            技術力はにじみ出る。
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">{summary}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {sharedStats.map((item, index) => (
              <motion.div
                key={item.label}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4 + index * 0.6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-xs uppercase text-white/45">{item.label}</div>
                <div className="mt-2 text-3xl tracking-[-0.04em]">{item.value}</div>
                <div className="mt-2 text-sm leading-7 text-white/55">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="grid gap-px rounded-[2rem] bg-white/10 md:grid-cols-3">
          {sharedStrengths.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.35 }}
              className="bg-[#05070a] p-6"
            >
              <div className="text-sm font-medium text-white/50">{item.title}</div>
              <p className="mt-4 text-base leading-8 text-white/72">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <FullHomepageSections
        dark
        theme={{
          sectionClass: "rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10",
          cardClass: "rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6",
          softCardClass: "rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-6",
          mutedClass: "text-white/45",
          lineClass: "",
          primaryButtonClass: "rounded-full bg-white text-slate-950 hover:bg-white/90",
          secondaryButtonClass: "rounded-full border-white/20 bg-transparent text-white hover:bg-white/8",
        }}
      />
      <CommonFooter dark />
    </Shell>
  );
}

function EditorialTechMagazinePage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen bg-[#faf8f4] text-[#161412]" backClassName="border-[#d4ccbe] bg-[#faf8f4] text-[#161412]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="text-xs font-semibold tracking-[0.24em] text-[#7b7469] uppercase">{title}</div>
            <h1 className="mt-6 text-6xl leading-[0.92] tracking-[-0.06em] [font-family:Georgia,serif] md:text-[6.8rem]">
              技術を、
              <br />
              編集するように
              <br />
              見せる。
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="border-l border-[#d4ccbe] pl-0 lg:pl-8"
          >
            <p className="text-lg leading-9 text-[#4d473f]">
              {summary} 読み物として気持ちよく進みながら、最後には「この会社は実際に作れる」と腑に落ちる構成へ切り替えます。
            </p>
            <div className="mt-8 text-sm leading-8 text-[#6d665c]">
              会社案内ではなく、特集記事を読むように強み、実績、思想、チームを順に理解させるページです。
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-y border-[#d4ccbe] px-6 py-12 md:px-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="mb-10 flex w-[200%] gap-10 whitespace-nowrap text-xs font-semibold tracking-[0.26em] text-[#9f968a] uppercase"
        >
          <span>Editorial / Technology / Systems / Operations / Product / Editorial / Technology / Systems / Operations / Product</span>
          <span>Editorial / Technology / Systems / Operations / Product / Editorial / Technology / Systems / Operations / Product</span>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-[0.66fr_1.34fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Editorial Frame"
              title="最初に、読み方そのものをデザインする。"
              body="この方向では、カードを並べるより、論点の順番を編集することが重要です。何を読むべきかが自然に分かる構成にします。"
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {sharedStrengths.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35 }}
                className="border-t border-[#161412] pt-4"
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-[#7b7469] uppercase">Point</div>
                <h2 className="mt-3 text-3xl tracking-[-0.04em] [font-family:Georgia,serif]">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-[#4d473f]">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Case Narrative"
              title="次に、実績をケースとして読ませる。"
              body="受賞、プロダクト、技術基盤を分離せず、ひとつのケースとして読める構造にする。ここがブランドの信頼を作る主役です。"
            />
          </Reveal>
          <div className="grid gap-6">
            {sharedAchievements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 8 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`grid gap-4 border-t border-[#161412] pt-5 ${index === 0 ? "" : ""}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-[#7b7469] uppercase">{item.label}</div>
                <h2 className="text-4xl tracking-[-0.05em] [font-family:Georgia,serif]">{item.title}</h2>
                <p className="max-w-3xl text-base leading-8 text-[#4d473f]">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d4ccbe] bg-[#f3eee4]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Project Spread"
                title="そこから、他の業界へどう広がるかを見せる。"
                body="物流、不動産、防災などへの展開可能性は、短いラベルではなく小さな論考として見せた方がこの方向に合います。"
              />
            </Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {sharedProjects.map((project) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.35 }}
                  className="border-t border-[#161412] pt-4"
                >
                  <div className="text-xs font-semibold tracking-[0.22em] text-[#7b7469] uppercase">{project.type}</div>
                  <h2 className="mt-3 text-3xl tracking-[-0.04em] [font-family:Georgia,serif]">{project.name}</h2>
                  <p className="mt-4 text-base leading-8 text-[#4d473f]">{project.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              eyebrow="People"
              title="最後は、編集の裏にいる人を出す。"
              body="上品な見せ方でも、誰が何を担えるかが出ていないと企業としては弱い。役割ごとに短く明確に切ります。"
            />
          </Reveal>
          <DesignTeamGrid
            cardClass="border-t border-[#161412] pt-4"
            roleClass="text-[#7b7469]"
            bodyClass="mt-4 text-base leading-8 text-[#4d473f]"
            imageBorderClass="border-[#d4ccbe]"
            nameClass="mt-3 text-3xl tracking-[-0.04em] [font-family:Georgia,serif]"
          />
        </div>
      </section>

      <section className="border-t border-[#d4ccbe] bg-[#fffdf8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="最後は、相談の入口を静かに、しかし強く置く。"
                body="新規事業の立ち上げ、AI 活用の方向づけ、データ基盤の整理、プロダクトの初期設計。まだ言葉にしきれていない相談でも問題ありません。"
              />
            </Reveal>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4"
            >
              <Button asChild className="h-16 rounded-full bg-[#161412] text-[#faf8f4] hover:bg-[#2a2621]">
                <Link href="/">この構成をベースに進める</Link>
              </Button>
              <Button asChild variant="outline" className="h-16 rounded-full border-[#d4ccbe] bg-transparent text-[#161412]">
                <Link href="/team">チーム詳細を見る</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "rounded-[2rem] border border-[#d4ccbe] bg-[#faf8f4] p-8 shadow-[0_20px_50px_rgba(22,20,18,0.08)] md:p-10",
          cardClass: "rounded-[2rem] border border-[#d4ccbe] bg-white/90 p-6",
          softCardClass: "rounded-[1.7rem] border border-[#d4ccbe] bg-[#f4efe7] p-6",
          mutedClass: "text-[#7c7367]",
          lineClass: "border-[#d4ccbe]",
          primaryButtonClass: "rounded-full bg-[#161412] text-[#faf8f4] hover:bg-[#2a2621]",
          secondaryButtonClass: "rounded-full border-[#d4ccbe] bg-transparent text-[#161412]",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}

function OutlierProtocolBlackSitePage({ title, summary }: { title: string; summary: string }) {
  const manifesto = [
    "見た目を整える前に、仮説を走らせる。",
    "静かな画面で、危険な速度を出す。",
    "AI も GIS も UI も一つの系で扱う。",
    "結果が出るまで、実装を止めない。",
  ];

  return (
    <Shell
      className="min-h-screen overflow-hidden bg-[#050608] text-[#f3f5f7]"
      backClassName="border-white/12 bg-white/[0.04] text-white"
      progressClassName="bg-white"
      showAmbient={false}
    >
      <section className="relative overflow-hidden border-b border-white/12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12rem] top-14 h-80 w-80 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-cyan-300/8 blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 1.2, 0, -1.2, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[18%] h-[30rem] w-[30rem] rounded-[3rem] border border-white/12 bg-white/[0.03]"
          />
          <motion.div
            animate={{ rotate: [0, -1.6, 0, 1.6, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] top-[12%] h-[24rem] w-[22rem] rounded-[2rem] border border-white/12 bg-white/[0.05]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase">
                {title}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 text-[3.8rem] leading-[0.8] tracking-[-0.08em] md:text-[7rem]"
              >
                QUIET
                <br />
                SURFACE.
                <br />
                VIOLENT
                <br />
                INTENT.
              </motion.h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                {summary} 黒ベースにすると、異端児っぽさは派手さではなく緊張感として立ち上がります。地下研究室のような、静かな圧で見せる案です。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-none border border-white bg-white px-7 text-[#050608] hover:bg-white/90">
                  <Link href="/">この方向でトップを作る</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border border-white/16 bg-transparent px-7 text-white hover:bg-white/8">
                  <Link href="/team">誰が作るかを見る</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 lg:pt-20">
              <motion.div
                initial={{ opacity: 0, x: 24, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: -1 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="ml-6 border border-white/12 bg-white/[0.06] p-6 shadow-[12px_12px_0_rgba(255,255,255,0.08)]"
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">Manifesto</div>
                <p className="mt-4 text-2xl leading-8 tracking-[-0.04em] text-white">
                  騒がしく見せなくても、
                  <br />
                  危険なチームだと分かるようにする。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="grid gap-px border border-white/12 bg-white/10"
              >
                {manifesto.map((item, index) => (
                  <div key={item} className={`flex items-center justify-between px-5 py-4 text-sm leading-6 ${index === 1 ? "bg-white/[0.09]" : "bg-white/[0.04]"}`}>
                    <span>{item}</span>
                    <span className="text-xs font-semibold tracking-[0.18em] text-white/60">0{index + 1}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/12 bg-white/[0.03] py-5 text-white">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-[200%] gap-8 whitespace-nowrap text-xl font-semibold tracking-[0.02em] md:text-3xl"
        >
          <span>BLACK SITE / OUTLIER / PROTOTYPE / GIS / AI / QUIET PRESSURE / BLACK SITE / OUTLIER / PROTOTYPE / GIS / AI / QUIET PRESSURE</span>
          <span>BLACK SITE / OUTLIER / PROTOTYPE / GIS / AI / QUIET PRESSURE / BLACK SITE / OUTLIER / PROTOTYPE / GIS / AI / QUIET PRESSURE</span>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why This Color"
              title="黒にすると、異端児感はノイズではなく緊張感になる。"
              body="声が大きいから異端なのではなく、静かなまま圧倒的に作れるから異端だと感じさせる。そういう方向です。"
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {sharedStrengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
                className={`border p-6 ${index === 1 ? "border-cyan-300/20 bg-cyan-300/[0.08]" : "border-white/12 bg-white/[0.04]"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">Strength {index + 1}</div>
                <h2 className="mt-4 text-3xl tracking-[-0.04em] text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.42 }}
            className="border border-white/12 bg-white/[0.04] p-8 shadow-[12px_12px_0_rgba(255,255,255,0.08)]"
          >
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">Case Study</div>
            <h2 className="mt-4 text-5xl leading-[0.92] tracking-[-0.06em] text-white">YORUMICHI</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              夜道の安全性を可視化し、最短ではなく最も安心できるルートを提案するプロダクト。派手な見せ方ではなく、技術の骨格そのものが強いと伝えるケースです。
            </p>
            <div className="mt-6 grid gap-3">
              {sharedAchievements.map((item) => (
                <div key={item.title} className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/68">
                  <span className="font-semibold text-white">{item.label}:</span> {item.title}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {sharedProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`border p-6 ${index === 1 ? "border-cyan-300/20 bg-cyan-300/[0.08]" : "border-white/12 bg-white/[0.04]"}`}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/50">{item.step}</div>
                <h3 className="mt-4 text-3xl tracking-[-0.04em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/12 bg-white/[0.03] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading
                eyebrow="People"
                title="静かな画面でも、最後は人の存在をはっきり出す。"
                body="抽象表現だけでは危うさに見えます。だから最後に、誰が責任を持って作るのかをはっきり出します。"
              />
            </Reveal>
            <DesignTeamGrid
              cardClass="border border-white/12 bg-white/[0.04] p-6"
              roleClass="text-white/50"
              bodyClass="mt-4 text-sm leading-7 text-white/72"
              imageBorderClass="border-white/12"
              gridClass="grid gap-4 md:grid-cols-3"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.42 }}
          className="border border-white/14 bg-white/[0.05] p-8 shadow-[14px_14px_0_rgba(255,255,255,0.08)] md:p-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="もし、静かな圧で全部持っていきたいなら。"
            body="新規事業、PoC、AI、都市データの実装まで、整いすぎた提案書ではなく、強い実装で突破したい相談を持ち込めます。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-none border border-white bg-white text-[#050608] hover:bg-white/90">
              <Link href="/">この方向でホームを作る</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none border border-white/16 bg-transparent text-white hover:bg-white/8">
              <Link href="/team">チーム詳細を見る</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "border border-white/14 bg-white/[0.05] p-8 shadow-[14px_14px_0_rgba(255,255,255,0.08)] md:p-10",
          cardClass: "border border-white/14 bg-white/[0.04] p-6",
          softCardClass: "border border-white/10 bg-white/[0.03] p-6",
          mutedClass: "text-white/55",
          lineClass: "border-white/10",
          primaryButtonClass: "rounded-none border border-white bg-white text-[#050608] hover:bg-white/90",
          secondaryButtonClass: "rounded-none border border-white/16 bg-transparent text-white hover:bg-white/8",
        }}
        dark
      />
      <CommonFooter dark />
    </Shell>
  );
}

function ExperimentalProductGalleryPage({ title, summary }: { title: string; summary: string }) {
  return (
    <Shell className="min-h-screen bg-[#f3f5f9] text-slate-950" backClassName="border-slate-300 bg-white/70 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={title} title="会社紹介ではなく、試作と構想のギャラリーとして見せる。" body={summary} />
          <Button asChild className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
            <a href="https://yorumichi.com" target="_blank" rel="noopener noreferrer">
              デモを見る
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[...sharedProjects, ...sharedStrengths].map((item, index) => (
            <motion.article
              key={"name" in item ? item.name : item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className={`group relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-slate-200 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] ${index % 3 === 0 ? "bg-[linear-gradient(160deg,#dff5ff,#ffffff)]" : index % 3 === 1 ? "bg-[linear-gradient(160deg,#f5ecff,#ffffff)]" : "bg-[linear-gradient(160deg,#fef3ea,#ffffff)]"}`}
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.22, 0.35, 0.22] }}
                transition={{ duration: 6 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[-3rem] top-[-3rem] h-28 w-28 rounded-full bg-white/60 blur-2xl"
              />
              <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                {"type" in item ? item.type : `Strength ${index - sharedProjects.length + 1}`}
              </div>
              <h2 className="mt-4 max-w-[14ch] text-4xl leading-tight tracking-[-0.05em]">
                {"name" in item ? item.name : item.title}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-700">
                {"body" in item ? item.body : ""}
              </p>
              <div className="absolute inset-x-6 bottom-6 rounded-[1.4rem] border border-white/70 bg-white/65 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">Inside</div>
                <div className="mt-3 text-sm leading-7 text-slate-700">
                  課題整理、試作、実装、運用までを含めて見せることで、単なる作品集ではなく実装力のあるギャラリーにする。
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <FullHomepageSections
        theme={{
          sectionClass: "rounded-[2rem] border border-slate-200 bg-white/76 p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] md:p-10",
          cardClass: "rounded-[2rem] border border-slate-200 bg-white/86 p-6 shadow-[0_22px_50px_rgba(15,23,42,0.06)]",
          softCardClass: "rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(160deg,#eef6ff,#ffffff)] p-6",
          mutedClass: "text-slate-500",
          lineClass: "",
          primaryButtonClass: "rounded-full bg-slate-950 text-white hover:bg-slate-800",
          secondaryButtonClass: "rounded-full border-slate-300 bg-white text-slate-950",
        }}
      />
      <CommonFooter />
    </Shell>
  );
}
