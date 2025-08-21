import React from 'react'
import { Badge } from '@/components/ui/badge' 
import Image from "next/image"

export const About = () => {
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
        </section>
    )
}