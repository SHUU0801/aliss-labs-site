import { motion } from "framer-motion";
import { Github, Users, Code, Zap, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Team() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
        },
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
                    <div className="mx-auto text-xl font-bold text-primary">Aliss-labs - Team</div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 pb-20 container max-w-4xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">経営・開発チーム</h1>
                        <p className="text-lg text-muted-foreground">
                            都知事杯オープンデータ・ハッカソン2025優勝。
                            それぞれの専門分野を持つスペシャリスト達が、ビジネスの構想から社会実装までを牽引します。
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {/* CEO - 山本 朱倫 */}
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-start bg-[#f0f9ff]/80 p-8 rounded-3xl border border-blue-100">
                            <div className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                                <img src="/shuri.jpg" alt="山本 朱倫" className="w-full h-full object-cover object-top" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">山本 朱倫</h2>
                                <p className="text-primary font-semibold mb-4 text-lg">CEO / Business Director</p>
                                <div className="space-y-4 text-muted-foreground">
                                    <p className="font-bold text-foreground text-xl mb-2">技術を「利益」へ翻訳する、ビジネスアーキテクト</p>
                                    <p>
                                        ビジネスデベロップメントおよびプロジェクトマネジメントの最高責任者。ハッカソン優勝実績を持つエンジニアチーム（加納・岩本）のポテンシャルを、クライアントの「事業成長」と「実利」へと直結させるプロフェッショナル。
                                    </p>
                                    <p>
                                        MEO（マップ検索最適化）やSEO、SNSマーケティングの現場で数多くの集客支援実績を持ち、データと市場心理に基づいた戦略立案を得意とする。自らも生成AIを駆使したプログラミング技術を習得しており、技術的な実現可否を即座に判断しながら、エンジニアと顧客の間に立って要件を最適化する高度なディレクションを実現。
                                    </p>
                                    <p>
                                        自身の人生において「死ぬまでにしたい100のこと」を目標を掲げ、必ず形にする圧倒的な完遂力と実行力が武器。圧倒的な先行投資と行動量で、不確実な市場における正解を最速で導き出す。
                                    </p>
                                    <h3 className="font-bold text-foreground mt-6 mb-2">主な経歴・実績</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>医療機関（歯科・眼科等）向けMEO/SEO実務支援および集客最適化</li>
                                        <li>SNS・動画マーケティングにおける戦略設計（初投稿5万再生超のバイラル創出）</li>
                                        <li>生成AIを活用した技術ディレクションおよびプロジェクト完遂マネジメント</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTO - 加納 海喜 */}
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-start bg-[#eff6ff]/80 p-8 rounded-3xl border border-blue-200">
                            <div className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                                <img src="/kano.png" alt="加納 海喜" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">加納 海喜</h2>
                                        <p className="text-primary font-semibold mb-4 text-lg">CTO / YORUMICHI開発リード</p>
                                    </div>
                                    <a href="https://github.com/kkaiki" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                                        <Github className="w-6 h-6" />
                                    </a>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        プロダクト開発の最高技術責任者。AIを組み込んだ高度なアーキテクチャ設計と、ビジネスのスピードに耐えうる迅速なシステム開発を実現するプロフェッショナル。
                                    </p>
                                    <p>
                                        バックエンド・データ基盤構築・データ分析エンジニアとして、約2年半の実務経験を持つ。現在はデータパイプライン構築に関わるIT企業にてデータエンジニアとして勤務。大学2年次には英語力と国際的な視野を磨くため、1年間カナダへ留学。未経験からWeb開発を始め、インターン等で月200時間以上の学習を経てバックエンド開発を完遂し、その後、機械学習・データ分析やGCP環境での高度なアルゴリズム実装も完遂する圧倒的な学習力を持つ。大切にしていることは少し恐怖を感じることに挑戦し続けること。
                                    </p>
                                    <h3 className="font-bold text-foreground mt-6 mb-2">主な経歴・実績</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>都知事杯オープンデータ・ハッカソン2025 優勝（YORUMICHI 開発リード）</li>
                                        <li>LLM・Mastraを活用したAIエージェント開発およびSNS自動化</li>
                                        <li>GCP (Cloud Run, BigQuery等) 上でのクラウドネイティブ開発とデータ解析</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Engineer - 岩本 涼平 */}
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-start bg-[#f8fafc]/80 p-8 rounded-3xl border border-slate-200">
                            <div className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                                <img src="/ryosuke.png" alt="岩本 涼平" className="w-full h-full object-cover object-top" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">岩本 涼平</h2>
                                <p className="text-primary font-semibold mb-4 text-lg">Engineer / フルスタックエンジニア</p>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        実装品質と保守性を両立させるフルスタックエンジニア。複雑な要件をユーザーフレンドリーなUI/UXへと落とし込み、システムの安定運用を支える。YORUMICHIのチームでも開発の一翼を担った。
                                    </p>
                                    <p>
                                        3年前から独学でプログラミングを学び、大学2年次に1年間休学し、IT企業にてデータエンジニアとしてインターン勤務。現在は別のIT企業でエンジニアのイベント企画・運営に携わりながら、さらに2社でバックエンド・データ基盤の開発・最適化を担当。
                                    </p>
                                    <p>
                                        <strong>データのプロフェッショナル</strong>であり、堅牢なバックエンド設計や複雑なデータ構造を適切に処理する実装を得意とする。得意な技術スタックは以下の順に精通している：
                                    </p>
                                    <ul className="list-decimal list-inside space-y-1 ml-2 font-semibold">
                                        <li>Python</li>
                                        <li>PHP</li>
                                        <li>SQL</li>
                                    </ul>
                                    <h3 className="font-bold text-foreground mt-6 mb-2">主な経歴・実績</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>都知事杯オープンデータ・ハッカソン2025 優勝（YORUMICHIの実装支援）</li>
                                        <li>データモデリングおよびSQLチューニングによるパフォーマンス最適化</li>
                                        <li>Python/PHPを用いた堅牢なバックエンドシステムの設計・開発</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
