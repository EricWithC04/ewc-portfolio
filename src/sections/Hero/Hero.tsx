"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Play, ArrowRight } from 'lucide-react'

export const Hero = () => {
    return (
        <section className='px-16 w-full h-screen bg-black'>
            <div className="pt-32 pb-8 h-[100%] grid lg:grid-cols-2">
                <div className='flex flex-col gap-8 text-white'>
                    <span className='bg-red-500/10 text-red-500 border border-red-500 text-md font-semibold px-4 py-2 rounded-full shadow w-fit'>¡Disponible para proyectos!</span>
                    <h1 className='text-6xl font-bold'>Hola, soy <span className='bg-gradient-to-b from-red-500 to-red-600 bg-clip-text text-transparent'>Eric</span></h1>
                    <h2 className='text-4xl font-bold'>Desarrollador de Software Fullstack y Freelancer</h2>
                    <p className='text-xl text-neutral-400'>Esucho tus problemas y planteo soluciones digitales para diversos ambitos.</p>
                    <div className="flex gap-6">
                        <Button className='group text-md px-10 py-5 bg-red-500/80 hover:cursor-pointer hover:bg-red-500/80'><Play className='group-hover:scale-120 transition' /> Ver Portfolio <ArrowRight className='group-hover:translate-x-1 transition' /></Button>
                        <Button className='text-md px-10 py-5 bg-red-black border border-red-500 hover:cursor-pointer hover:text-red-400 hover:border-red-400 hover:bg-red-500/20 transition duration-500'><Download /> Descargar CV</Button>
                    </div>
                </div>
                <div className='h-full w-full flex items-center justify-center'>
                    <div className='relative flex items-center justify-center h-96 w-96 rotate-45 rounded-3xl overflow-hidden'>
                        <img className='h-[140%] min-w-[140%] w-[140%] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-lg rotate-[-45deg]' src="./placeholder.svg" alt="imagen" />
                    </div>
                </div>
            </div>
        </section>
    )
}
