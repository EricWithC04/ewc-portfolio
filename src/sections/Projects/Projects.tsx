"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Image from "next/image"
import { Zap, ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi';
import { Button } from '@/components/ui/button'
import { Animations } from '@/interfaces/animations'

export const Projects = ({ isExiting, exitingAnimations, handleExiting }: { isExiting: boolean, exitingAnimations: Animations, handleExiting: () => void }) => {

    const [appearanceAnimation, setAppearanceAnimation] = useState<any>({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    })

    useEffect(() => {
        if (isExiting) {
            setAppearanceAnimation({
                ...exitingAnimations.down,
                transition: { duration: 0.8, delay: 0.3 }
            })
        }
    }, [isExiting])

    return (
        <section className='w-full bg-black' id="projects">
            <div className="relative flex flex-col items-center gap-6 py-12">
                <motion.div
                    initial={isExiting ? { opacity: 1 } : {}}
                    animate={isExiting ? { opacity: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='absolute inset-0 bg-gradient-to-b from-neutral-800/20 to-neutral-900/20 z-4'
                ></motion.div>
                <motion.div
                    initial={isExiting ? { opacity: 1 } : {}}
                    animate={isExiting ? { opacity: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='absolute bg-red-500/10 blur-3xl rounded-full p-48 z-5'
                ></motion.div>
                <motion.div 
                    className='flex flex-col items-center gap-6 my-18 z-10'
                    {...appearanceAnimation}
                >
                    <div className='inline-flex items-center space-x-2 bg-red-500/10 text-red-500 border border-red-500 px-4 py-2 rounded-full shadow w-fit'>
                        <Zap className="w-4 h-4" />
                        <span className='text-md font-semibold'>Proyectos Destacados</span>
                    </div>
                    <h1 className='text-6xl text-white font-bold'>Portfolio</h1>
                    <p className='text-xl text-neutral-500 text-center max-w-3/4'>Proyectos importantes en los que he trabajado, ya sea en un contexto academico como de forma personal</p>
                </motion.div>
                <div className='grid w-full px-24 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10'>
                    <motion.div className='col-span-2' {...appearanceAnimation}>
                        <Card className='group bg-black border-red-500/30 pt-0 overflow-hidden'>
                            <div className='relative h-[300px] w-full overflow-hidden'>
                                <Image 
                                    height={300} 
                                    width={600} 
                                    style={{ height: "300px", width: "100%", objectFit: "cover" }} 
                                    className='group-hover:scale-110 transition-transform duration-700'
                                    src="./placeholder.svg" 
                                    alt="Imagen" 
                                />

                                <div className='absolute inset-0 z-10 bg-red-500/30 opacity-0 group-hover:opacity-100 duration-700'></div>

                                <div className='absolute z-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 duration-300'>
                                    <Button 
                                        className='hover:cursor-pointer bg-gradient-to-r from-red-600 to-red-800 border border-neutral-400'
                                        onClick={handleExiting}
                                    >
                                        <ExternalLink />
                                        Ver Proyectos
                                    </Button>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                                <CardDescription className='group-hover:text-white'>Descripión del Proyecto</CardDescription>
                            </CardHeader>
                            <CardContent className='space-x-2'>
                                <Badge>HTML</Badge>
                                <Badge>CSS</Badge>
                                <Badge>JavaScript</Badge>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div {...appearanceAnimation}>
                        <Card className='group bg-black border-red-500/30 pt-0 overflow-hidden'>
                            <div className='relative h-[300px] w-full overflow-hidden'>
                                <Image 
                                    height={300} 
                                    width={600} 
                                    style={{ height: "300px", width: "100%", objectFit: "cover" }} 
                                    className='group-hover:scale-110 transition-transform duration-700'
                                    src="./placeholder.svg" 
                                    alt="Imagen" 
                                />

                                <div className='absolute inset-0 z-10 bg-red-500/30 opacity-0 group-hover:opacity-100 duration-700'></div>

                                <div className='absolute z-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 duration-300'>
                                    <Button className='hover:cursor-pointer bg-gradient-to-r from-red-600 to-red-800 border border-neutral-400'>
                                        <ExternalLink />
                                        Demo
                                    </Button>
                                    <Button className='hover:cursor-pointer hover:bg-white hover:text-black bg-black border border-neutral-400'>
                                        <FiGithub />
                                        Github
                                    </Button>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                                <CardDescription className='group-hover:text-white'>Descripión del Proyecto</CardDescription>
                            </CardHeader>
                            <CardContent className='space-x-2'>
                                <Badge>HTML</Badge>
                                <Badge>CSS</Badge>
                                <Badge>JavaScript</Badge>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div {...appearanceAnimation}>
                        <Card className='group bg-black border-red-500/30 pt-0 overflow-hidden'>
                            <div className='relative h-[300px] w-full overflow-hidden'>
                                <Image 
                                    height={300} 
                                    width={600} 
                                    style={{ height: "300px", width: "100%", objectFit: "cover" }} 
                                    className='group-hover:scale-110 transition-transform duration-700'
                                    src="./placeholder.svg" 
                                    alt="Imagen" 
                                />

                                <div className='absolute inset-0 z-10 bg-red-500/30 opacity-0 group-hover:opacity-100 duration-700'></div>

                                <div className='absolute z-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 duration-300'>
                                    <Button className='hover:cursor-pointer bg-gradient-to-r from-red-600 to-red-800 border border-neutral-400'>
                                        <ExternalLink />
                                        Demo
                                    </Button>
                                    <Button className='hover:cursor-pointer hover:bg-white hover:text-black bg-black border border-neutral-400'>
                                        <FiGithub />
                                        Github
                                    </Button>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                                <CardDescription className='group-hover:text-white'>Descripión del Proyecto</CardDescription>
                            </CardHeader>
                            <CardContent className='space-x-2'>
                                <Badge>HTML</Badge>
                                <Badge>CSS</Badge>
                                <Badge>JavaScript</Badge>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div className='col-span-2' {...appearanceAnimation}>
                        <Card className='group bg-black border-red-500/30 col-span-2 pt-0 overflow-hidden'>
                            <div className='relative h-[300px] w-full overflow-hidden'>
                                <Image 
                                    height={300} 
                                    width={600} 
                                    style={{ height: "300px", width: "100%", objectFit: "cover" }} 
                                    className='group-hover:scale-110 transition-transform duration-700'
                                    src="./placeholder.svg" 
                                    alt="Imagen" 
                                />

                                <div className='absolute inset-0 z-10 bg-red-500/30 opacity-0 group-hover:opacity-100 duration-700'></div>

                                <div className='absolute z-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 duration-300'>
                                    <Button className='hover:cursor-pointer bg-gradient-to-r from-red-600 to-red-800 border border-neutral-400'>
                                        <ExternalLink />
                                        Demo
                                    </Button>
                                    <Button className='hover:cursor-pointer hover:bg-white hover:text-black bg-black border border-neutral-400'>
                                        <FiGithub />
                                        Github
                                    </Button>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                                <CardDescription className='group-hover:text-white'>Descripión del Proyecto</CardDescription>
                            </CardHeader>
                            <CardContent className='space-x-2'>
                                <Badge>HTML</Badge>
                                <Badge>CSS</Badge>
                                <Badge>JavaScript</Badge>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
                <motion.div className='flex justify-center py-12' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                    <Button className='z-10 group p-5! bg-gradient-to-r from-red-600 to-red-800 hover:cursor-pointer'>
                        <FiGithub 
                            className='group-hover:rotate-30 transition duration-300'
                        />
                        Ver Todos en Github
                        <ExternalLink 
                            className='group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300'
                        />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
