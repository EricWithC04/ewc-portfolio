import React from 'react'
import {
    Code,
    Smartphone,
    Database,
    Server,
    Layout,
    Cpu,
    GitBranch,
    Terminal,
    Settings
} from "lucide-react"
import Tailwind from "@/../public/tailwind.svg"
import ReactIcon from "@/../public/react.svg"

import { motion } from 'framer-motion'

export const TechCarrousel = () => {

    const technologies = [
        { icon: Code, name: "HTML", color: "#F24E1E" },
        { icon: Layout, name: "CSS", color: "#3178C6" },
        { icon: Layout, name: "Tailwind", color: "#31AACB" },
        { icon: Code, name: "TypeScript", color: "#3178C6" },
        { icon: Code, name: "React", color: "#61DAFB" },
        { icon: Database, name: "Node.js", color: "#339933" },
        { icon: Cpu, name: "PostgreSQL", color: "#336791" },
        { icon: Database, name: "MongoDB", color: "#47A248" },
        { icon: GitBranch, name: "Git", color: "#F05032" },
        { icon: Terminal, name: "Python", color: "#3776AB" },
        { icon: Smartphone, name: "Flutter", color: "#02569B" },
        { icon: Code, name: "Electron", color: "#02468B" },
        { icon: Server, name: "Express", color: "#000000" },
        { icon: Layout, name: "Next.js", color: "#000000" },
        { icon: Settings, name: "Docker", color: "#2496ED" },
    ]

    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-red-500 text-3xl font-semibold'>Tecnologías</h1>
            <p className='text-neutral-500 text-lg'>Stack tecnológico actualizado y en constante evolución</p>
            <div className='flex flex-wrap justify-center items-center gap-6'>
                {
                    technologies.map((tech, index) => (
                        <motion.div 
                            key={index} 
                            className='flex flex-col items-center justify-center gap-2 group'
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className='h-18 w-18 flex items-center justify-center bg-neutral-900 border border-red-900 rounded-lg group-hover:border-red-500 group-hover:border-2 duration-300'>
                                <tech.icon color={tech.color} size={32}></tech.icon>
                            </div>
                            <p className='text-neutral-500 group-hover:text-red-500 duration-300'>{tech.name}</p>
                        </motion.div>))
                }
            </div>
        </div>
    )
}
