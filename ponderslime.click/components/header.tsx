import { faUser, faPaintRoller, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalHeader = () => {
    return (
        <header className="w-full h-full">
            <div className="row-start-1 flex gap-12 flex-wrap items-center justify-center">
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/">
                <FontAwesomeIcon icon={faUser} className="fa-fw" />
                About Me
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="projects">
                <FontAwesomeIcon icon={faPaintRoller} className="fa-fw" />
                My Projects
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
                <FontAwesomeIcon icon={faBlog} className="fa-fw" />
                My Blog
                </a>
            </div>
        </header>
    )
}

export default GlobalHeader