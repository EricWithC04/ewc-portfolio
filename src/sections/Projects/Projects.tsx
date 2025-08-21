import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import Image from "next/image"
import { Zap, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Projects = () => {
    return (
        <section className='w-full bg-black'>
            <div className="relative flex flex-col items-center gap-6 py-12">
                <div className='absolute inset-0 bg-gradient-to-b from-neutral-800/10 to-neutral-900/10 z-4'></div>
                <div className='absolute bg-red-500/10 blur-3xl rounded-full p-48 z-5'></div>
                <div className='flex flex-col items-center gap-6 my-18 z-10'>
                    <div className='inline-flex items-center space-x-2 bg-red-500/10 text-red-500 border border-red-500 px-4 py-2 rounded-full shadow w-fit'>
                        <Zap className="w-4 h-4" />
                        <span className='text-md font-semibold'>Proyectos Destacados</span>
                    </div>
                    <h1 className='text-6xl text-white font-bold'>Portfolio</h1>
                    <p className='text-xl text-neutral-500 text-center max-w-3/4'>Proyectos importantes en los que he trabajado, ya sea en un contexto academico como de forma personal</p>
                </div>
                <div className='grid w-full px-24 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10'>
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
                                    <Github />
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
                                    <Github />
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
                                    <Github />
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
                                    <Github />
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
                </div>
            </div>
        </section>
    )
}
