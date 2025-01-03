import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getArticleData } from "@/lib/articles";

type Params = { slug: string };

const Article = async ({params}: { params: Promise<Params> }) => {
    const slug = await params
    const articleData = await getArticleData(slug.slug)

    return (
        <div className="grid grid-rows-[20px_1fr_20px] gap-16 grid-cols-1 justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-jetbrains-mono)] bg-white dark:bg-slate-900 mx-auto">
            <div className="flex justify-center max-w-screen-lg mx-auto w-full h-full row-start-1 gap-48 md:flex-wrap items-center">
                <Link href="/blog" className="flex flex-row gap-1 items-center">
                    <FontAwesomeIcon icon={faCircleArrowLeft} width={20} height={20}/>
                    <p>back to menu</p>
                </Link>
                <p className="">{articleData.date.toString()}</p>
            </div>
            <article className="md:w-[70%] lg:w-[33.33%] w-full text-left article" dangerouslySetInnerHTML={{__html: articleData.contentHtml }}/>
        </div>
    )
}

export default Article