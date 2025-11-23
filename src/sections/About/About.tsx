"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge' 

export const About = () => {

    const cardStats = [
        {
            title: '4+',
            desc: 'Años como programador'
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
                'HTML y CSS',
                'JavaScript',
                'TypeScript',
                'React',
                'Tailwind CSS',
                'Next',
            ]
        },
        {
            title: 'Backend',
            items: [
                'Node.js',
                'TypeScript',
                'Express',
                'Sequelize',
                'MySQL y PostgreSQL',
                'MongoDB',
            ]
        },
        {
            title: 'Mobile',
            items: [
                'Flutter',
            ]
        },
        {
            title: 'Tools',
            items: [
                'Git y Github',
                'Docker',
                'Jira',
                'IA',
            ]
        },
    ]

    const appearanceAnimation = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <section className='py-24 relative flex flex-col items-center gap-12 bg-black' id="about">
            <div className='absolute inset-0 z-5 bg-neutral-900/50'></div>
            <div className='absolute bg-red-500/20 blur-3xl rounded-full p-24 bottom-140 left-5/6 z-4'></div>
            <div className='absolute bg-red-500/30 blur-3xl rounded-full p-24 bottom-20 left-3/6 z-4'></div>
            <motion.div className='text-center z-10' {...appearanceAnimation}>
                <h1 className='text-4xl text-red-500 font-bold mb-4'>Sobre Mí</h1>
                <p className='text-xl text-neutral-400'>Conoce más sobre mi perfil profesional y experiencia en el desarrollo de software</p>
            </motion.div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-24 gap-12 z-10'>
                <motion.div 
                    className='flex flex-col gap-4'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='text-2xl text-red-500 font-bold'>¡Hola! Soy Eric Mercado</h1>
                    <p className='text-lg text-neutral-400'>Desarrollador Fullstack, con experiencia en el desarrollo de aplicaciones web y un poco de desarrollo mobile. Programo desde hace más de 4 años y mi objetivo es seguir aprendiendo y creciendo como profesional.</p>
                    <p className='text-lg text-neutral-400'>Me gradué en la carrera de Tecnicatura Superior en Desarrollo de Software Multiplataforma del Instituto Politécnico Formosa en el año 2024. Aunque ya tenía conocimientos previos en programación, fue durante la carrera cuando pude aplicar mis conocimientos de forma práctica mediante proyectos y trabajos reales.</p>
                    <p className='text-lg text-neutral-400'>Me gusta mantenerme en constante práctica, tanto en lo técnico como en lo personal. Siempre estoy explorando nuevas tecnologías y buscando maneras de mejorar, adaptarme y aportar más valor en cada proyecto.</p>
                    <div className='flex gap-4'>
                        <Badge className='p-1.5!'>Desarrollo Web</Badge>
                        <Badge className='p-1.5!'>Frontend</Badge>
                        <Badge className='p-1.5!'>Backend</Badge>
                        <Badge className='p-1.5!'>Aplicaciones Móviles</Badge>
                        <Badge className='p-1.5!'>Inteligencia Artificial</Badge>
                    </div>
                </motion.div>
                <motion.div 
                    className='p-8 z-10'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image 
                        width={600} 
                        height={600} 
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        className='rounded-xl'
                        src="./placeholder.svg" 
                        alt="Imagen"
                    />
                </motion.div>
            </div>
            <motion.div 
                className='w-full px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 [&>div]:bg-neutral-900/30'
                {...appearanceAnimation}
            >
                    {cardStats.map((stat, index) => (
                        <Card key={index} className='text-center py-12 border-1 border-neutral-800'>
                            <CardContent className='space-y-2'>
                                <h1 className='text-3xl font-semibold text-red-500'>{stat.title}</h1>
                                <span className='text-md text-neutral-400'>{stat.desc}</span>
                            </CardContent>
                        </Card>
                    ))}
            </motion.div>
            <motion.div {...appearanceAnimation} className='w-full flex flex-col py-8 gap-12 items-center z-10'>
                <h1 className='text-2xl text-red-500 font-semibold'>Tecnologías y Herramientas</h1>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-24'>
                    {tech.map((tool, index) => (
                        <Card key={index} className='pt-6 pb-12 border-1 border-neutral-800 bg-neutral-900/30'>
                            <CardContent className='space-y-2'>
                                <h1 className='text-xl font-semibold text-red-500 mb-4'>{tool.title}</h1>
                                <div className='flex flex-wrap gap-2'>
                                    {tool.items.map((item, index) => (
                                        <Badge key={index} className='border-1 border-neutral-800'>{item}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}