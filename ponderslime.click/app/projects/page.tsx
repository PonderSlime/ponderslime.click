"use client"
import AutoScroll from "@/components/auto-scroll";
import GlobalFooter from "@/components/footer";
import GlobalHeader from "@/components/header";
import Image from "next/image";
import { useEffect, useState } from "react";

const THRESHOLD = 9;

export default function Projects() {
    const [projectsByYear, setProjectsByYear] = useState<{ [year: string]: any[] }>({})


    useEffect(() => {
    fetch('/api/projects')
        .then(response => response.json())
        .then(data => {
            const groupedProjects = data.reduce((acc: { [year: string]: any[] }, project: any) => {
                const year = project.year
                if (!acc[year]) {
                    acc[year] = []
                }
                acc[year].push(project)
                return acc
            }, {})
            setProjectsByYear(groupedProjects)
        })
        
    }, [])
    
    const chunkArray = (arr: any[], size: number) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size))
        }
        return chunks
    }

    let rowIndex = 0;

    return (
        <div className="grid grid-rows-[20px_1fr_20px] gap-16 grid-cols-1 items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-jetbrains-mono)] bg-white dark:bg-slate-900">
            <GlobalHeader />
            <main className="w-full">
                {Object.entries(projectsByYear).map(([year, projects], yearIndex) => (
                    <div key={year} className="flex flex-col items-center mt-16">
                        <h2 className="text-4xl font-bold text-center mb-4">{year}</h2>
                        {chunkArray(projects, THRESHOLD).map((chunk, chunkIndex) => {
                            const isToLeft = rowIndex % 2 === 0;
                            rowIndex++;

                            return (
                                <div className="mb-[232px]" key={`${year}-${chunkIndex}`}>
                                    <AutoScroll
                                        items={chunk}
                                        direction={isToLeft ? "to-left" : "to-right"}
                                    />
                                </div>
                            )
                        })}
                        
                    </div>
                ))}
                
            </main>
            <GlobalFooter />
        </div>
    )
}