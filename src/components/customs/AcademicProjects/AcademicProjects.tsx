"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from "next/image"
import { Button } from '@/components/ui/button'

interface ProjectData {
    title: string
    type: "Frontend" | "Backend" | "Fullstack" | "Análisis de Datos"
    smDescription: string
    techs: Array<string>
}

export const AcademicProjects = () => {

    const projectsInfo: Array<ProjectData> = [
        {
            title: "Stock Equipos Informáticos",
            type: "Frontend",
            smDescription: "Aplicación para gestionar los equipos tecnologicos de una empresa.",
            techs: ["React", "Express", "JWT", "+1"]
        },
        {
            title: "E-Commerce Backend",
            type: "Backend",
            smDescription: "Servidor completo para una aplicación de e-commerce.",
            techs: ["Express", "JWT", "POO", "+1"]
        },
        {
            title: "Sistema Restaurante",
            type: "Fullstack",
            smDescription: "Aplicación para gestionar completamente el flujo de un restaurante",
            techs: ["Next.js", "React", "Prisma", "+1"]
        },
    ]

    const tagColors: Record<string, string> = {
        "Frontend": "border-blue-500 bg-blue-500/10 text-blue-600",
        "Backend": "border-green-500 bg-green-500/10 text-green-600",
        "Fullstack": "border-purple-500 bg-purple-500/10 text-purple-600",
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.4 }} 
            className='flex flex-col gap-6 py-12'
        >
            <div className='mx-16'>
                <h4 className='text-xl font-semibold'>Proyectos</h4>
                <span className='text-lg text-neutral-500'>5 proyectos principales</span>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-16'>
                {projectsInfo.map((project, index) => (
                    <Card
                        key={index}
                        className='group hover:shadow-xl duration-200'
                    >
                        <CardContent 
                            className='flex flex-col gap-4'
                        >
                            <div>
                                <Badge className={`border-1 ${tagColors[project.type]}`}>{project.type}</Badge>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-lg font-semibold group-hover:text-red-600 duration-300'>{project.title}</h3>
                                <p className='text-lg text-neutral-500'>{project.smDescription}</p>
                            </div>
                            <div>
                                <Image 
                                    src="/placeholder.svg" 
                                    width={240} 
                                    height={120} 
                                    className='w-full max-h-[200px] object-cover rounded-lg' 
                                    alt="imagen del proyecto"
                                ></Image>
                            </div>
                            <div className='space-x-2 space-y-1'>
                                {project.techs.map((tech, index) => (
                                    <Badge key={index} className='bg-neutral-100 border-1 border-neutral-200 text-black'>{tech}</Badge>
                                ))}
                            </div>
                            <div>
                                <Button 
                                    className='w-full bg-neutral-100 border-1 border-neutral-200 text-black group-hover:bg-red-600 group-hover:text-white'
                                >
                                    Ver proyecto
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    )
}
