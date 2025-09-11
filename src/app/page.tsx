"use client"
import { Navbar } from "@/components/customs/Navbar/Navbar";
import { About } from "@/sections/About/About";
import { Contact } from "@/sections/Contact/Contact";
import { Hero } from "@/sections/Hero/Hero";
import { Projects } from "@/sections/Projects/Projects";
import { useState } from "react";
import { Animations } from "@/interfaces/animations";

export default function Home() {

    const [isExiting, setIsExiting] = useState(false);

    const handleExiting = () => setIsExiting(true);

    const exitingAnimations: Animations = {
        down: { initial: { opacity: 1, y: 0 }, animate: { opacity: 0, y: 50 } },
        left: { initial: { opacity: 1, x: 0 }, animate: { opacity: 0, x: -50 } },
        right: { initial: { opacity: 1, x: 0 }, animate: { opacity: 0, x: 50 } }
    }

    return (
        <div className="">
            <Navbar 
                handleExiting={handleExiting}
            ></Navbar>
            <Hero
                isExiting={isExiting}
                exitingAnimations={exitingAnimations}
            ></Hero>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
}
