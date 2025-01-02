import ArticleListItem from "@/components/article-list-item";
import AutoScroll from "@/components/auto-scroll";
import GlobalFooter from "@/components/footer";
import GlobalHeader from "@/components/header";
import { getCategorizedArticles } from "@/lib/articles";
import Image from "next/image";

const THRESHOLD = 9;

export default function Projects() {
    const articles = getCategorizedArticles()

    console.log(articles)

    return (
        <div className="grid grid-rows-[20px_1fr_20px] gap-16 grid-cols-1 items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-jetbrains-mono)] bg-white dark:bg-slate-900">
            <GlobalHeader />
            <main className="w-full">
                {articles !== null && Object.keys(articles).map(article => (
                    <ArticleListItem
                        category={article}
                        articles={articles[article]}
                        key={article}
                    />
                ))}
            </main>
            <GlobalFooter />
        </div>
    )
}