import { motion } from "framer-motion";
import { ArrowLeft, Shield, Map, Lightbulb, Zap, Truck, Building2, ShieldAlert, Code, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Yorumichi() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="min-h-screen bg-white text-foreground">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
                <div className="container flex items-center h-16">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            トップへ戻る
                        </Button>
                    </Link>
                    <div className="mx-auto text-xl font-bold text-primary">YORUMICHI</div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 pb-20">
                <div className="container max-w-5xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                                <span className="text-sm font-semibold text-primary">都知事杯オープンデータ・ハッカソン 2025 最優秀賞</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">YORUMICHI</h1>
                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                                夜道に、「安心」という名の光を。
                                オープンデータとAIを駆使し、最も安全なルートを導き出すナビゲーションシステム。
                            </p>
                            <div className="mb-12">
                                <a href="https://yorumichi.com" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="rounded-full shadow-lg gap-2 text-lg px-8 py-6">
                                        <ExternalLink className="w-5 h-5" />
                                        製品デモ版を見る (yorumichi.com)
                                    </Button>
                                </a>
                            </div>
                            <img
                                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663326135477/Eqeq6acEPPmzqFHMycahdn/yorumichi-product-showcase-mBDftCcectrKiwd5oZVJcN.webp"
                                alt="YORUMICHI アプリイメージ"
                                className="w-full rounded-3xl shadow-2xl border border-border"
                            />
                        </motion.div>

                        {/* 問題提起とソリューション */}
                        <div className="grid md:grid-cols-2 gap-12 items-center my-24">
                            <motion.div variants={itemVariants}>
                                <h2 className="text-3xl font-bold mb-6">夜の暗闇に潜む「不安」をデータで可視化する</h2>
                                <p className="text-muted-foreground mb-4">
                                    「最寄り駅から家まで、どの道が一番明るいのか？」「過去に事件が起きていないか？」
                                    私たちが日常的に感じる夜道の不安。しかし、一般的なマップアプリが教えてくれるのは「最短距離」だけです。
                                </p>
                                <p className="text-muted-foreground">
                                    YORUMICHIは、東京都が提供するオープンデータを活用し、漠然とした「怖さ」をデータに基づいて可視化・数値化。誰もが安心して帰路につける社会を目指します。
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                                <div className="bg-secondary/20 p-6 rounded-2xl flex flex-col items-center text-center">
                                    <Shield className="w-10 h-10 text-primary mb-3" />
                                    <h3 className="font-bold mb-1">犯罪発生情報</h3>
                                    <p className="text-xs text-muted-foreground">過去のエリア別犯罪データをマッピング</p>
                                </div>
                                <div className="bg-primary/5 p-6 rounded-2xl flex flex-col items-center text-center">
                                    <Lightbulb className="w-10 h-10 text-primary mb-3" />
                                    <h3 className="font-bold mb-1">街灯密度</h3>
                                    <p className="text-xs text-muted-foreground">ルート上の明るさをインフラデータから算出</p>
                                </div>
                                <div className="bg-primary/5 p-6 rounded-2xl flex flex-col items-center text-center">
                                    <Map className="w-10 h-10 text-primary mb-3" />
                                    <h3 className="font-bold mb-1">安全ルーティング</h3>
                                    <p className="text-xs text-muted-foreground">最短ではなく、最も「安全な」道を提案</p>
                                </div>
                                <div className="bg-secondary/20 p-6 rounded-2xl flex flex-col items-center text-center">
                                    <Zap className="w-10 h-10 text-primary mb-3" />
                                    <h3 className="font-bold mb-1">リアルタイム性</h3>
                                    <p className="text-xs text-muted-foreground">最新のオープンデータ連携による信頼性</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* システムの特徴 */}
                        <motion.div variants={itemVariants} className="bg-zinc-50 p-8 md:p-12 rounded-3xl mb-16 border border-border">
                            <h2 className="text-3xl font-bold mb-8 text-center">コアとなるAI・データ技術</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="text-xl font-bold mb-3">1. 統合スコアリング</h4>
                                    <p className="text-sm text-muted-foreground">
                                        犯罪ヒートマップ、警察署・交番の近さ、街灯の多さなど、異なる粒度のデータを統合し、任意のルートの「安全スコア」を瞬時に算出します。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3">2. GeoPandas / GIS処理</h4>
                                    <p className="text-sm text-muted-foreground">
                                        複雑な地理空間データ（GIS）を高度なPythonライブラリを用いて解析。ポリゴンデータとポイントデータの高速な交差判定を実現しています。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3">3. スケーラブルな基盤</h4>
                                    <p className="text-sm text-muted-foreground">
                                        GCP（Cloud Run, BigQuery 等）を活用し、膨大な都市データのリクエストに対しても遅延のないレスポンスを返すアーキテクチャを構築。
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* ビジネス横展開・受託開発 */}
                        <motion.div variants={itemVariants} className="mb-20">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold mb-4">この技術構造を、あらゆる事業の「課題解決」へ。</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    YORUMICHIの基盤である「オープンデータのリアルタイム統合・高度なルーティング・機械学習による予測」は、多様なビジネスシーンにおける横展開（toB）および高度な受託開発として提供可能です。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* 物流の効率化 */}
                                <div className="bg-white border text-left border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <Truck className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">物流・配送ルートの最適化</h3>
                                    <p className="text-muted-foreground text-sm">
                                        最短距離だけでなく「時間帯ごとの通行しやすさ」や「安全データ」を加味した動的なルーティングシステムを構築。ドライバーの負担軽減や配送効率の劇的な向上に貢献します。
                                    </p>
                                </div>

                                {/* 不動産・インフラ */}
                                <div className="bg-white border text-left border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">不動産付加価値・インフラ配置</h3>
                                    <p className="text-muted-foreground text-sm">
                                        物件周辺の「客観的な安全スコア」を可視化し、賃貸・売買時の新たな付加価値（セキュリティアピール）として提供。また、自治体向けの街灯・防犯カメラの最適配置地点の予測も行います。
                                    </p>
                                </div>

                                {/* 防災マップ */}
                                <div className="bg-white border text-left border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <ShieldAlert className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">リアルタイム防災・ハザードマップ</h3>
                                    <p className="text-muted-foreground text-sm">
                                        静的なマップ情報だけでなく、ユーザーからの現在地ベースのヒヤリハット情報やSNSデータをリアルタイムで収集・反映する、生きたハザードマップシステムをご提供します。
                                    </p>
                                </div>

                                {/* 受託開発ソリューション */}
                                <div className="bg-zinc-50 border text-left border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mb-6">
                                        <Code className="w-6 h-6 text-zinc-700" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">高度なWebシステム・受託開発</h3>
                                    <p className="text-muted-foreground text-sm">
                                        ハッカソン優勝レベルの機械学習・アルゴリズム設計と、堅牢なバックエンド、GCPを活用したスケーラブルなインフラを掛け合わせ、お客様のビジネス課題を根底から解決するシステムをゼロから開発します。
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center mt-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4">この技術を、貴社のビジネスへ。</h3>
                            <p className="text-muted-foreground mb-6">
                                YORUMICHIで培った「複雑なデータの統合と可視化」「AI・アルゴリズムの実装力」は、あらゆるビジネス課題に応用可能です。
                            </p>
                            <Link href="/">
                                <Button size="lg" className="rounded-full">お問い合わせはこちら</Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </main>
        </div>
    );
}
