import { faUser, faPaintRoller, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const GlobalHeader = () => {
    return (
        <header className="w-full h-full">
            <div className="row-start-1 flex gap-12 flex-wrap items-center justify-center">
                <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/">
                <FontAwesomeIcon icon={faUser} className="fa-fw" />
                About Me
                </Link>
                <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="projects">
                <FontAwesomeIcon icon={faPaintRoller} className="fa-fw" />
                My Projects
                </Link>
                <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="blog">
                <FontAwesomeIcon icon={faBlog} className="fa-fw" />
                My Blog
                </Link>
            </div>
        </header>
    )
}

export default GlobalHeader