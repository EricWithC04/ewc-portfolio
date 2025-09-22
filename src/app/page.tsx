"use client"
import { Navbar } from "@/components/customs/Navbar/Navbar";
import { About } from "@/sections/About/About";
import { Contact } from "@/sections/Contact/Contact";
import { Hero } from "@/sections/Hero/Hero";
import { Projects } from "@/sections/Projects/Projects";
import { useState } from "react";
import { motion } from "framer-motion";
import { Animations } from "@/interfaces/animations";

import Academic from "@/pages/academic/Academic"

export default function Home() {

    const [currentPage, setCurrentPage] = useState<"main" | "academic">("main");

    const [isExiting, setIsExiting] = useState(false);

    const handleExiting = () => {
        setIsExiting(!isExiting);
        setTimeout(() => {
            setCurrentPage(currentPage === "academic" ? "main" : "academic");
        }, 1500) 
    };

    const exitingAnimations: Animations = {
        down: { initial: { opacity: 1, y: 0 }, animate: { opacity: 0, y: 50 } },
        left: { initial: { opacity: 1, x: 0 }, animate: { opacity: 0, x: -50 } },
        right: { initial: { opacity: 1, x: 0 }, animate: { opacity: 0, x: 50 } }
    }

    return (
        <motion.div 
            initial={currentPage === "main" ? { backgroundColor: "#000" } : { backgroundColor: "#f5f5f5" }}
            animate={currentPage === "academic" ? { backgroundColor: "#f5f5f5" } : { backgroundColor: "#000" }}
            transition={{duration: 0.8, delay: 0.5}}
            className="min-h-screen"
        >
            {
                currentPage === "main" ? (
                    <>
                        <Navbar 
                            isExiting={isExiting}
                        ></Navbar>
                        <Hero
                            isExiting={isExiting}
                            exitingAnimations={exitingAnimations}
                        ></Hero>
                        <Projects
                            isExiting={isExiting}
                            exitingAnimations={exitingAnimations}
                            handleExiting={handleExiting}
                        ></Projects>
                        <About></About>
                        <Contact></Contact>
                    </>
                ) : (
                    <>
                        <Academic
                            isExiting={isExiting}
                            handleExiting={handleExiting}
                        ></Academic>
                    </>
                )
            }
            
        </motion.div>
    );
}
