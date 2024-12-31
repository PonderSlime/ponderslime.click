"use client"
import AutoScroll from "@/components/auto-scroll";
import GlobalFooter from "@/components/footer";
import GlobalHeader from "@/components/header";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [favoriteProjects, setFavoriteProjects] = useState([]);
  useEffect(() => {
    async function fetchFavoriteProjects() {
      try {
        const response = await fetch("/api/favorite-projects");
        if (!response.ok) {
          throw new Error("Failed to fetch favorite projects");
        }
        const data = await response.json();
        setFavoriteProjects(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFavoriteProjects();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-jetbrains-mono)] bg-white dark:bg-slate-900" >
      <GlobalHeader />
      <main className="h-full w-full">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <Image src="https://avatars.githubusercontent.com/u/174149291" className="self-center" alt="pfp" width={512} height={512}/>
          <div className="text-center items-center justify-center self-center text-red-500">
            <h1 className="text-center text-6xl underline decoration-solid decoration-2 hover:decoration-4 underline-offset-8 pt-20 font-[family-name:var(--font-courier-mono)]">
              Hi there! I&apos;m PonderSlime!
            </h1>
            <div className="pt-9 text-2xl text-left indent-8 break-words text-wrap w-2/3 flex mx-auto self-center">
              <p className="text-lime-600">
                Hello! Welcome to my corner of the web! I am a freshman in High School, and I love the outdoors. I spend a lot of my free time coding and building projects. Also, I am an active member of&nbsp;
                <a className="underline decoration-solid decoration-2 hover:decoration-4 text-blue-400" href="https://hackclub.com/">Hack Club</a>
                 , which is a nonprofit organization deditcated to teaching teens about technology.
              </p>
            </div>
            <h1 className="text-center text-3xl underline decoration-solid decoration-2 hover:decoration-4 underline-offset-8 pt-20 font-[family-name:var(--font-courier-mono)]">
              Some of my Projects
            </h1>
            <div className="pt-9 text-2xl text-left indent-8 break-words text-wrap w-2/3 flex mx-auto self-center">
              <p className="text-lime-600">
                Over this past year, I have coded quite a few projects. All of these can be found on my&nbsp;
                 <a className="underline decoration-solid decoration-2 hover:decoration-4 text-blue-400" href="https://hackclub.com/">Github Profile!</a>
              </p>
            </div>
            <div className="pt-20">
              <AutoScroll items={favoriteProjects} direction="to-left"/>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}