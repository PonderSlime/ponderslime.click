import Link from "next/link";
import type { ArticleItem } from "@/types";

interface Props {
    category: string;
    articles: ArticleItem[]
}

const ArticleListItem = ({category, articles}: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-xl">{category}</h2>
            <div className="flex flex-col gap-2.5 text-sm">
                {articles.map((article, id) => (
                        <Link href={`blog/${article.id}`} key={id} className="text-neutral-900  dark:text-white hover:text-amber-700 transition duration-150">
                            {article.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleListItem