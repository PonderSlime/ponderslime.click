import AutoScroll from "@/components/auto-scroll";
import GlobalFooter from "@/components/footer";
import GlobalHeader from "@/components/header";
import Image from "next/image";

export default function Projects() {
    fetch('/api/favorite-projects')
        .then(response => response.json())
        .then(data => console.log(data));
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-jetbrains-mono)] bg-white dark:bg-slate-900">
            <GlobalHeader />
            <main>
                Hello
            </main>
            <GlobalFooter />

        </div>
    )
}