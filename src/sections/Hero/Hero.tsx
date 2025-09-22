"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { TechCarrousel } from '@/components/customs/TechCarrousel/TechCarrousel'
import { Animations } from '@/interfaces/animations'

export const Hero = ({ isExiting, exitingAnimations }: { isExiting: boolean, exitingAnimations: Animations }) => {

    const pathname = usePathname();

    const [displayedText, setDisplayedText] = useState<string>("")
    const fullText = "Desarrollador de Software Fullstack y Freelancer"

    const [currentImage, setCurrentImage] = useState<number>(0)

    const images = [
        "/images/hero-img-1.webp",
        "/images/hero-img-2.webp",
        "/images/hero-img-3.webp",
        "/images/hero-img-4.webp",
    ]

    const imagesTexts = [
        {
            title: "Desarrollo Desktop",
            description: "Aplicaciones para Windows y Linux."
        },
        {
            title: "Desarrollo Web",
            description: "Aplicaciones web modernas."
        },
        {
            title: "Apps Móviles",
            description: "Desarrollo de Apps para celulares."
        },
        {
            title: "Videojuegos",
            description: "Experiencias interactivas."
        },
    ]

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
                setDisplayedText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) clearInterval(interval);
            }, 40);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className='px-16 relative w-full min-h-screen bg-black' id="home">
            <motion.div
                animate={ isExiting ? { opacity: 0 } : {} }
                transition={ { duration: 0.8, delay: 0.6 } }
                className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#111]"
            ></motion.div>
            <div className="absolute top-1/8 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="absolute top-2/6 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-2xl"></div>

            <div className='relative z-10 pt-32 pb-16'>
                <div className="h-[100%] grid lg:grid-cols-2">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
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
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className='relative h-full w-full flex items-center justify-center pt-16'>
                            <motion.div
                                className="absolute z-20 bg-gradient-to-br from-red-400 via-transparent to-red-400 p-52"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                            ></motion.div>
                            <motion.div
                                className="rounded-lg border border-[3px] border-red-500 p-4 absolute top-10 right-30 opacity-60"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            ></motion.div>
                            <motion.div
                                className="rounded-[50%] bg-red-500 p-3 absolute bottom-0 right-135 opacity-60"
                                animate={{ scale: 1.2 }}
                                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            ></motion.div>
                            <div className='relative flex items-center justify-center h-96 w-96 rotate-45 rounded-3xl overflow-hidden'>
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute inset-0"
                                        initial={{ opacity: 0, scale: 1.2 }}
                                        animate={{
                                            opacity: index === currentImage ? 1 : 0,
                                            scale: index === currentImage ? 1 : 1.2
                                        }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                    >
                                        <Image 
                                            className='h-[140%] min-w-[140%] w-[140%] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-lg rotate-[-45deg]' 
                                            src={image} 
                                            alt="imagen"
                                            width={800}
                                            height={600} 
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <div className='absolute top-90 left-10 text-white w-1/2'>
                                {imagesTexts.map((image, index) => (
                                    <motion.div
                                        key={`i${index}`}
                                        className='absolute inset-0 w-full z-20'
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: index === currentImage ? 1 : 0, x: index === currentImage ? 0 : -50 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                    >
                                        <h1 className='text-2xl font-bold'>{image.title}</h1>
                                        <p className='text-lg'>{image.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                    initial={ isExiting ? exitingAnimations.down.initial : { opacity: 1 } }
                    animate={ isExiting ? exitingAnimations.down.animate : {} }
                    transition={ { duration: 0.8, delay: 0.3 } }
                    className='flex items-center justify-center mt-60'>
                    <TechCarrousel></TechCarrousel>
                </motion.div>
            </div>
        </section>
    )
}
