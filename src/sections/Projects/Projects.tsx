import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import Image from "next/image"
import { Zap } from 'lucide-react'

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
                    <Card className='bg-black border-red-500/30 col-span-2 pt-0 overflow-hidden'>
                        <Image height={300} width={600} style={{ height: "300px", width: "100%", objectFit: "cover" }} src="./placeholder.svg" alt="Imagen" />
                        <CardHeader>
                            <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                            <CardDescription>Descripión del Proyecto</CardDescription>
                        </CardHeader>
                        <CardContent className='space-x-2'>
                            <Badge>HTML</Badge>
                            <Badge>CSS</Badge>
                            <Badge>JavaScript</Badge>
                        </CardContent>
                    </Card>
                    <Card className='bg-black border-red-500/30 pt-0 overflow-hidden'>
                        <Image height={300} width={600} style={{ height: "300px", width: "100%", objectFit: "cover" }} src="./placeholder.svg" alt="Imagen" />
                        <CardHeader>
                            <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                            <CardDescription>Descripión del Proyecto</CardDescription>
                        </CardHeader>
                        <CardContent className='space-x-2'>
                            <Badge>HTML</Badge>
                            <Badge>CSS</Badge>
                            <Badge>JavaScript</Badge>
                        </CardContent>
                    </Card>
                    <Card className='bg-black border-red-500/30 pt-0 overflow-hidden'>
                        <Image height={300} width={600} style={{ height: "300px", width: "100%", objectFit: "cover" }} src="./placeholder.svg" alt="Imagen" />
                        <CardHeader>
                            <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                            <CardDescription>Descripión del Proyecto</CardDescription>
                        </CardHeader>
                        <CardContent className='space-x-2'>
                            <Badge>HTML</Badge>
                            <Badge>CSS</Badge>
                            <Badge>JavaScript</Badge>
                        </CardContent>
                    </Card>
                    <Card className='bg-black border-red-500/30 col-span-2 pt-0 overflow-hidden'>
                        <Image height={300} width={600} style={{ height: "300px", width: "100%", objectFit: "cover" }} src="./placeholder.svg" alt="Imagen" />
                        <CardHeader>
                            <CardTitle className='text-red-500'>Nombre del Proyecto</CardTitle>
                            <CardDescription>Descripión del Proyecto</CardDescription>
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
