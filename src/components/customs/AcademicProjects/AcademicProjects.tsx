"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
    Dialog, 
    DialogContent, 
    DialogDescription,
    DialogHeader, 
    DialogTitle } from '@/components/ui/dialog'
import { Eye } from 'lucide-react'
import { FiGithub } from 'react-icons/fi';
import Image from "next/image"
import { Button } from '@/components/ui/button'

import styles from "./AcademicProjects.module.css"

interface ProjectData {
    title: string
    type: "Frontend" | "Backend" | "Fullstack" | "Análisis de Datos"
    smDescription: string
    lgDescription: string
    value: string
    techs: Array<string>
    installationSteps: Array<string>
    githubLink: string
}

export const AcademicProjects = ({ isExiting }: { isExiting: boolean }) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [currentProject, setCurrentProject] = useState<ProjectData | null>(null)

    const projectsInfo: Array<ProjectData> = [
        {
            title: "Stock Equipos Informáticos",
            type: "Frontend",
            smDescription: "Sistema backend para la gestión de stock de equipos informáticos.",
            lgDescription: "Sistema backend para la gestión de stock de equipos informáticos, con funcionalidades para registrar, actualizar y administrar inventario.",
            value: "A diferencia del proyecto del backend para E-commerce, este fue desarrollado con TypeScript, lo que me permitió comprender mejor la tipificación estática, mejorar la legibilidad del código y detectar errores de manera temprana.",
            techs: ["React", "TypeScript", "POO", "Node.js", "Express", "JWT", "Sequelize", "PostreSQL"],
            installationSteps: [
                "Clonar el repo de Github: git clone [URL]", 
                "Instalar las dependencias: npm install", 
                "Ejecutar en desarrollo: npm run dev", 
                "Acceder a http://localhost:3000 desde el navegador", 
                "Probar la aplicación"
            ],
            githubLink: "https://github.com",
        },
        {
            title: "E-Commerce Backend",
            type: "Backend",
            smDescription: "Un backend para un sistema de e-commerce que incluye la gestión de productos, usuarios y órdenes.",
            lgDescription: "Un backend para un sistema de e-commerce que incluye la gestión de productos, usuarios y órdenes. Desarrollado en un entorno orientado a objetos para estructurar mejor las entidades y relaciones.",
            value: "Este proyecto me sirvió como práctica inicial en Programación Orientada a Objetos (POO), consolidando conceptos como clases, herencia y encapsulamiento en el desarrollo de un sistema más robusto.",
            techs: ["JavaScript", "Node.js", "Express", "JWT", "POO", "Sequelize", "MySQL"],
            installationSteps: [
                "Clonar el repo de Github: git clone [URL]", 
                "Instalar las dependencias: npm install", 
                "Ejecutar en desarrollo: npm run dev", 
                "Acceder a http://localhost:3000 desde el navegador", 
                "Probar la aplicación"
            ],
            githubLink: "https://github.com",
        },
        {
            title: "Sistema Restaurante",
            type: "Fullstack",
            smDescription: "Aplicación para gestionar completamente el flujo de un restaurante.",
            lgDescription: "Aplicación de gestión para restaurantes desarrollada con Next.js, enfocada en la administración de pedidos, mesas y menús. Fue diseñada como un proyecto académico para experimentar con arquitecturas de software.",
            value: "Con este proyecto profundicé en la arquitectura monolítica y en cómo organizar una aplicación de mayor escala, aplicando buenas prácticas de estructuración y separación de responsabilidades dentro del código.",
            techs: ["Next.js", "React", "TypeScript", "SSE", "Prisma", "MySQL"],
            installationSteps: [
                "Clonar el repo de Github: git clone [URL]", 
                "Instalar las dependencias: npm install", 
                "Ejecutar en desarrollo: npm run dev", 
                "Acceder a http://localhost:3000 desde el navegador", 
                "Probar la aplicación"
            ],
            githubLink: "https://github.com",
        },
        {
            title: "Chat de Usuarios Simple",
            type: "Fullstack",
            smDescription: "Una aplicación de chat en tiempo real que permite la comunicación entre múltiples usuarios.",
            lgDescription: "Una aplicación de chat en tiempo real que permite la comunicación entre múltiples usuarios. Implementa WebSockets para manejar la conexión persistente entre cliente y servidor.",
            value: "Fue mi primera experiencia trabajando con WebSockets, lo que me permitió comprender cómo funcionan las conexiones en tiempo real y la importancia de manejar eventos de manera eficiente en aplicaciones interactivas.",
            techs: ["Socket.io", "Node.js", "JavaScript", "HTML y CSS"],
            installationSteps: [
                "Clonar el repo de Github: git clone [URL]", 
                "Instalar las dependencias: npm install", 
                "Ejecutar en desarrollo: npm run dev", 
                "Acceder a http://localhost:3000 desde el navegador", 
                "Probar la aplicación"
            ],
            githubLink: "https://github.com",
        },
        {
            title: "Estadísticas de mediante datos de youtube",
            type: "Análisis de Datos",
            smDescription: "Dashboard con estadísticas realizadas con un dataset de youtube.",
            lgDescription: "Dashboard interactivo con visualizaciones estadísticas sobre un dataset de videos de YouTube, incluyendo métricas como vistas, likes y categorías. Desarrollado como parte de una clase de análisis de datos.",
            value: "Este proyecto me permitió aplicar técnicas de análisis y visualización de datos, fortaleciendo mi capacidad para transformar datos crudos en información clara y comprensible mediante gráficos y paneles interactivos.",
            techs: ["React", "Chart.js"],
            installationSteps: [
                "Clonar el repo de Github: git clone [URL]", 
                "Instalar las dependencias: npm install", 
                "Ejecutar en desarrollo: npm run dev", 
                "Acceder a http://localhost:3000 desde el navegador", 
                "Probar la aplicación"
            ],
            githubLink: "https://github.com",
        },
    ]

    const tagColors: Record<string, string> = {
        "Frontend": "border-blue-500 bg-blue-500/10 text-blue-600",
        "Backend": "border-green-500 bg-green-500/10 text-green-600",
        "Fullstack": "border-purple-500 bg-purple-500/10 text-purple-600",
        "Análisis de Datos": "border-orange-500 bg-orange-500/10 text-orange-600",
    }

    const obtainThree = (strings: Array<string>) => {
        if (strings.length <= 3) return strings
        const newStrings: Array<string> = []
        strings.forEach((string) => {
            if (newStrings.length < 3) newStrings.push(string)
            if (newStrings.length === 3) newStrings.push(`+${strings.length - 3}`)
        })
        return newStrings
    }

    return (
        <motion.div
            initial={isExiting ? { opacity: 0, y: 30 }: { opacity: 1, y: 0 }} 
            animate={isExiting ? { opacity: 1, y: 0 }: { opacity: 0, y: 30 }} 
            transition={{ duration: 0.8, delay: isExiting ? 1.4 : 0.5 }} 
            className='flex flex-col gap-6 py-12'
        >
            <div className={`absolute inset-0 z-${modalOpen ? "50" : "0"}`}>
                <Dialog
                    open={modalOpen} 
                    onOpenChange={() => setModalOpen(!modalOpen)}
                >
                    <DialogContent className={`bg-white min-w-3/5 max-h-4/5 overflow-auto ${styles.dialog}`}>
                        <DialogHeader>
                            <div className='space-x-2 my-1'>
                                <Badge className={tagColors["Frontend"]}>{currentProject?.type}</Badge>
                            </div>
                            <DialogTitle className='text-2xl'>{currentProject?.title}</DialogTitle>
                            <DialogDescription className='text-lg text-neutral-500'>
                                {currentProject?.smDescription}
                            </DialogDescription>
                        </DialogHeader>
                        <div className='max-w-3/4 rounded-lg overflow-hidden'>
                            <Image 
                                src="/placeholder.svg" 
                                width={100} 
                                height={100}
                                loading='lazy'
                                className='w-full max-h-[400px] object-cover' 
                                alt="foto"
                            ></Image>
                        </div>
                        <div className='flex flex-col gap-2 my-2'>
                            <h2 className='text-xl font-semibold'>Descripción del Proyecto</h2>
                            <p className='text-lg text-neutral-500'>{currentProject?.lgDescription}</p>
                        </div>
                        <div className='w-full h-[1px] bg-neutral-200'></div>
                        <div className='flex flex-col gap-2 my-2'>
                            <h2 className='text-xl font-semibold'>Valor de Aprendizaje</h2>
                            <p className='text-lg text-neutral-500'>{currentProject?.value}</p>
                        </div>
                        <div className='w-full h-[1px] bg-neutral-200'></div>
                        <div className='flex flex-col gap-4 my-2'>
                            <span className='text-lg'>Tecnologías utilizadas</span>
                            <div className='flex gap-2 max-w-1/2'>
                                {currentProject?.techs.map((tech, i) => (
                                    <Badge 
                                        key={`tech-${i}`}
                                        className='text-black border-1 py-1 px-2 border-neutral-200 bg-neutral-100'
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-neutral-200'></div>
                        <div className='flex flex-col gap-4 my-2'>
                            <span className='text-lg'>Instrucciones para probar el proyecto</span>
                            <div className='flex flex-col gap-2'>
                                {currentProject?.installationSteps.map((step, i) => (
                                    <div className='flex gap-3 items-center'>
                                        <div className='relative p-3 rounded-full bg-red-600'>
                                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md text-white'>{i + 1}</span>
                                        </div>
                                        <span className='text-md text-black'>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-neutral-200'></div>
                        <Button 
                            className='bg-red-600 hover:cursor-pointer hover:bg-red-500 duration-300'
                            onClick={() => window.open(currentProject?.githubLink, "_blank")}
                        >
                            <FiGithub></FiGithub>
                            Ver codigo fuente
                        </Button>
                    </DialogContent>
                </Dialog>
            </div>
            <div className='mx-16'>
                <h4 className='text-xl font-semibold'>Proyectos</h4>
                <span className='text-lg text-neutral-500'>5 proyectos principales</span>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-16'>
                {projectsInfo.map((project, index) => (
                    <Card
                        key={index}
                        className='group hover:shadow-xl duration-200 h-full'
                    >
                        <CardContent 
                            className='flex flex-col gap-4 justify-between h-full'
                        >
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <Badge className={`border-1 ${tagColors[project.type]}`}>{project.type}</Badge>
                                </div>
                                <div className='space-y-2'>
                                    <h3 className='text-lg font-semibold group-hover:text-red-600 duration-300'>{project.title}</h3>
                                    <p className='text-lg text-neutral-500'>{project.smDescription}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className="overflow-hidden rounded-lg">
                                    <Image 
                                        src="/placeholder.svg" 
                                        width={240} 
                                        height={120} 
                                        className='w-full max-h-[200px] object-cover group-hover:scale-110 duration-300' 
                                        alt="imagen del proyecto"
                                    ></Image>
                                </div>
                                <div className='space-x-2 space-y-1'>
                                    {obtainThree(project.techs).map((tech, index) => (
                                        <Badge key={index} className='bg-neutral-100 border-1 border-neutral-200 text-black'>{tech}</Badge>
                                    ))}
                                </div>
                                <div>
                                    <Button 
                                        className='w-full flex items-center bg-neutral-100 border-1 border-neutral-200 text-black group-hover:bg-red-600 group-hover:text-white hover:cursor-pointer hover:bg-red-500 duration-300'
                                        onClick={() => {
                                            setCurrentProject(project)
                                            setModalOpen(true)
                                        }}
                                    >
                                        <Eye className='mr-2' />
                                        Ver proyecto
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    )
}
