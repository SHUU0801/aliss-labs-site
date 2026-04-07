"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { designDirections } from "@/components/pages/designs/design-data";

export default function DesignIndexPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f8fc_0%,#edf2fb_100%)] px-6 py-16 text-slate-950 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            Aliss-labs
          </div>
          <h1 className="mt-6 text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl">
            0→1を、
            <br />
            社会実装へ。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            都知事杯ハッカソン優勝。最新技術をビジネス価値へ翻訳し、複雑な要件をシンプルかつ拡張性の高いシステムへと昇華させる精鋭開発ギルド。
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {designDirections.map((direction, index) => (
            <motion.div
              key={direction.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Link
                href={`/designs/${direction.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  実績 / プロダクト / チーム / サービス
                </div>
                <h2 className="mt-4 text-3xl leading-tight tracking-[-0.04em]">{direction.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{direction.summary}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                  デザインを見る
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
