
import AutoScroll from "@/components/auto-scroll";
import { faUser, faPaintRoller, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


const favorite_projects = [
  {"image": "https://avatars.githubusercontent.com/u/41168529", "link": "https://github.com/qcoral/"},
  {"image": "https://avatars.githubusercontent.com/u/92754843", "link": "https://github.com/taciturnaxolotl"},
  {"image": "https://avatars.githubusercontent.com/u/101356372", "link": "https://github.com/acornitum"},
  {"image": "https://avatars.githubusercontent.com/u/174149291", "link": "https://github.com/ponderslime/"},
  {"image": "https://avatars.githubusercontent.com/u/93046303", "link": "https://github.com/techy-robot/"},
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-jetbrains-mono)] bg-slate-900" >
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
            <h1 className="text-center text-4xl underline decoration-solid decoration-2 hover:decoration-4 underline-offset-8 pt-20 font-[family-name:var(--font-courier-mono)]">
              Welcome to my website!
            </h1>
            <AutoScroll items={favorite_projects} direction="to-right"/>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
