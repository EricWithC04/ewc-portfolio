"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const Hero = () => {

    const [displayedText, setDisplayedText] = useState<string>("")
    const fullText = "Desarrollador de Software Fullstack y Freelancer"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
    }, [])

    return (
        <section className='px-16 relative w-full h-screen bg-black'>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#111]"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/6 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-2xl"></div>

            <div className='relative z-10 pt-32 pb-16'>
                <div className="h-[100%] grid lg:grid-cols-2">
                    <div className='flex flex-col gap-8 text-white'>
                        <span className='bg-red-500/10 text-red-500 border border-red-500 text-md font-semibold px-4 py-2 rounded-full shadow w-fit'>¡Disponible para proyectos!</span>
                        <h1 className='text-6xl font-bold'>Hola, soy <span className='bg-gradient-to-b from-red-500 to-red-600 bg-clip-text text-transparent'>Eric</span></h1>
                        <h2 className='text-4xl font-bold'>
                            {displayedText} 
                            <motion.span
                                className="inline-block w-3 h-10 bg-red-500/40 ml-2"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            />
                        </h2>
                        <p className='text-xl text-neutral-400'>Esucho tus problemas y planteo soluciones digitales para diversos ambitos.</p>
                        <div className="flex gap-6">
                            <Button className='group text-md px-10 py-5 bg-red-500/80 hover:cursor-pointer hover:bg-red-500/80'><Play className='group-hover:scale-120 transition' /> Ver Portfolio <ArrowRight className='group-hover:translate-x-1 transition' /></Button>
                            <Button className='text-md px-10 py-5 bg-red-black border border-red-500 hover:cursor-pointer hover:text-red-400 hover:border-red-400 hover:bg-red-500/20 transition duration-500'><Download /> Descargar CV</Button>
                        </div>
                    </div>
                    <div className='h-full w-full flex items-center justify-center pt-16'>
                        <div className='relative flex items-center justify-center h-96 w-96 rotate-45 rounded-3xl overflow-hidden'>
                            <img className='h-[140%] min-w-[140%] w-[140%] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-lg rotate-[-45deg]' src="./placeholder.svg" alt="imagen" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
