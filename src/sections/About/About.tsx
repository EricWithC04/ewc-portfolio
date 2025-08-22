import React from 'react'
import { Badge } from '@/components/ui/badge' 
import Image from "next/image"
import { Card, CardContent } from '@/components/ui/card'

export const About = () => {

    const cardStats = [
        {
            title: '50+',
            desc: 'Proyectos completados'
        },
        {
            title: '50+',
            desc: 'Proyectos completados'
        },
        {
            title: '50+',
            desc: 'Proyectos completados'
        },
        {
            title: '50+',
            desc: 'Proyectos completados'
        },
    ]

    const tech = [
        {
            title: 'Frontend',
            items: [
                'HTML',
            ]
        },
        {
            title: 'Backend',
            items: [
                'HTML',
            ]
        },
        {
            title: 'Mobile',
            items: [
                'HTML',
            ]
        },
        {
            title: 'Game Dev',
            items: [
                'HTML',
            ]
        },
        {
            title: 'Tools',
            items: [
                'HTML',
            ]
        },
    ]

    return (
        <section className='py-24 relative flex flex-col items-center gap-12 bg-black' id="about">
            <div className='absolute inset-0 z-5 bg-neutral-900/50'></div>
            <div className='absolute bg-red-500/20 blur-3xl rounded-full p-24 bottom-140 left-5/6 z-4'></div>
            <div className='absolute bg-red-500/30 blur-3xl rounded-full p-24 bottom-20 left-3/6 z-4'></div>
            <div className='text-center z-10'>
                <h1 className='text-4xl text-red-500 font-bold mb-4'>Sobre Mí</h1>
                <p className='text-xl text-neutral-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, earum.</p>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-24 gap-12 z-10'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl text-red-500 font-bold'>¡Hola! Soy Eric Mercado</h1>
                    <p className='text-lg text-neutral-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam placeat optio molestias autem veniam, tempore hic expedita dolores amet iusto vitae sint tenetur repudiandae perferendis pariatur minima. Voluptates, laborum!</p>
                    <p className='text-lg text-neutral-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam placeat optio molestias autem veniam, tempore hic expedita dolores amet iusto vitae sint tenetur repudiandae perferendis pariatur minima. Voluptates, laborum!</p>
                    <p className='text-lg text-neutral-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam placeat optio molestias autem veniam, tempore hic expedita dolores amet iusto vitae sint tenetur repudiandae perferendis pariatur minima. Voluptates, laborum!</p>
                    <div className='flex gap-4'>
                        <Badge className='p-1.5!'>Desarrollo Web</Badge>
                        <Badge className='p-1.5!'>Aplicaiones Móviles</Badge>
                        <Badge className='p-1.5!'>Videojuegos</Badge>
                        <Badge className='p-1.5!'>Inteligencia Artificial</Badge>
                    </div>
                </div>
                <div className='p-8 z-10'>
                    <Image 
                        width={600} 
                        height={600} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        className='rounded-xl'
                        src="./placeholder.svg" 
                        alt="Imagen"
                    />
                </div>
            </div>
            <div className='w-full px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 [&>div]:bg-neutral-900/30'>
                    {cardStats.map((stat, index) => (
                        <Card key={index} className='text-center py-12 border-1 border-neutral-800'>
                            <CardContent className='space-y-2'>
                                <h1 className='text-3xl font-semibold text-red-500'>{stat.title}</h1>
                                <span className='text-md text-neutral-400'>{stat.desc}</span>
                            </CardContent>
                        </Card>
                    ))}
            </div>
            <div className='w-full flex flex-col py-8 gap-12 items-center z-10'>
                <h1 className='text-2xl text-red-500 font-semibold'>Tecnologías y Herramientas</h1>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-24'>
                    {tech.map((tool, index) => (
                        <Card key={index} className='pt-6 pb-12 border-1 border-neutral-800 bg-neutral-900/30'>
                            <CardContent className='space-y-2'>
                                <h1 className='text-xl font-semibold text-red-500 mb-4'>{tool.title}</h1>
                                <div>
                                    {tool.items.map((item, index) => (
                                        <Badge key={index} className='border-1 border-neutral-800'>{item}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}