"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)

    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    console.log(currentTheme)
    return (
        <div className="fixed right-5 z-[10000000000] max-lg:pt-10 lg:pt-10">
            <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                type="button"
                className="flex h-10 w-10 p-2 items-center justify-center rounded-md border border-gray-800 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-slate-300 dark:text-white"
            >
                {currentTheme === "dark" ? (
                    <FontAwesomeIcon
                        icon={faSun}
                        width={20}
                        height={20}
                        className="opacity-100 scale-100 transition-all duration-300"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faMoon}
                        width={20}
                        height={20}
                        className="opacity-100 scale-100 transition-all duration-300"
                    />
                )}
            </button>

        </div>
    )
}

export default ThemeSwitcher