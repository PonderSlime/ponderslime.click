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
            <main className="w-full h-full">
                <h1 className="text-center text-amber-700 text-6xl underline decoration-solid decoration-2 hover:decoration-4 underline-offset-8 font-[family-name:var(--font-courier-mono)]">
                My Blog
                </h1>
                <div className="flex flex-col gap-2 items-center sm:items-start">
                    {articles !== null && Object.keys(articles).map(article => (
                        <ArticleListItem
                            category={article}
                            articles={articles[article]}
                            key={article}
                        />
                    ))}
                </div>
            </main>
            <GlobalFooter />
        </div>
    )
}