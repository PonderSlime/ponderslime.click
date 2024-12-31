
import AutoScroll from "@/components/auto-scroll";
import { faUser, faPaintRoller, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


const favorite_projects = [
  {"image": "/project-images/frogpad/frogpad.png", "link": "https://github.com/ponderslime/frogpad/"},
  {"image": "/project-images/smallburrow/smallburrow.png", "link": "https://github.com/PonderSlime/Samwise-Smallburrow"},
  {"image": "/project-images/pestranded/pestranded.png", "link": "https://github.com/PonderSlime/Planet-Earth-Stranded"},
  {"image": "/project-images/norse/norse.png", "link": "https://github.com/PonderSlime/Norse---Linux-Mint-Rice"},
  {"image": "/project-images/velocity/velocity.png", "link": "https://github.com/PonderSlime/The-Velocity-Project"},
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-jetbrains-mono)] bg-white dark:bg-slate-900" >
      <header className="w-full h-full">
        <div className="row-start-1 flex gap-12 flex-wrap items-center justify-center">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
            <FontAwesomeIcon icon={faUser} className="fa-fw" />
            About Me
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
            <FontAwesomeIcon icon={faPaintRoller} className="fa-fw" />
            My Projects
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
            <FontAwesomeIcon icon={faBlog} className="fa-fw" />
            My Blog
          </a>
        </div>
      </header>
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
              <AutoScroll items={favorite_projects} direction="to-left"/>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-4 flex gap-6 pt-20 flex-wrap items-center justify-center bg-white dark:bg-slate-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="https://ponderslime.click/" className="hover:underline">PonderSlime</a>.</span>
        </div>
      </footer>
    </div>
  );
}