"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Moon } from "lucide-react"

export const Navbar = ({ isExiting, handleExiting }: { isExiting: boolean, handleExiting: () => void }) => {

    const [scroll, setScroll] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav 
            animate={isExiting ? { y: -100 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`z-100 fixed py-6 px-8 w-full top-0 flex justify-between ${scroll ? "bg-black/80 backdrop-blur-md shadow shadow-red-500 border-b border-neutral-500/20": "bg-black"} duration-300 text-neutral-500`}
        >
            <h1 className="text-2xl text-red-500 font-semibold">{"<EWC/>"}</h1>
            <div className="flex items-center gap-6">
                <ul className="flex gap-6 [&>li>a]:font-semibold [&>li>a]:hover:text-red-500 [&>li>a]:hover:text-lg [&>li>a]:duration-300">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#about">Sobre Mí</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                    <div className="p-2 rounded-lg hover:bg-red-500/20 hover:cursor-pointer" onClick={() => {
                        handleExiting()
                    }}>
                        <Moon color={"#f00"}></Moon>
                    </div>
            </div>
        </motion.nav>
    )
}
