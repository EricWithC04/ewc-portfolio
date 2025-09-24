"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle } from '@/components/ui/dialog'
import { Eye } from 'lucide-react'
import { FiGithub } from 'react-icons/fi';
import Image from "next/image"
import { Button } from '@/components/ui/button'

interface ProjectData {
    title: string
    type: "Frontend" | "Backend" | "Fullstack" | "Análisis de Datos"
    smDescription: string
    techs: Array<string>
}

export const AcademicProjects = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false)

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
            smDescription: "Aplicación para gestionar completamente el flujo de un restaurante.",
            techs: ["Next.js", "React", "Prisma", "+1"]
        },
        {
            title: "Chat básico para 2 personas",
            type: "Fullstack",
            smDescription: "Aplicación de chat básica desarrollada para probar socket.io.",
            techs: ["Socket.io", "Node.js"]
        },
        {
            title: "Estadísticas de mediante datos de youtube",
            type: "Análisis de Datos",
            smDescription: "Dashboard con estadísticas realizadas con un dataset de youtube.",
            techs: ["React", "Chart.js"]
        },
    ]

    const installationSteps = ["Clonar el repo de Github: git clone [URL]", "Instalar las dependencias: npm install", "Ejecutar en desarrollo: npm run dev", "Acceder a http://localhost:3000 desde el navegador", "Probar la aplicación"]

    const tagColors: Record<string, string> = {
        "Frontend": "border-blue-500 bg-blue-500/10 text-blue-600",
        "Backend": "border-green-500 bg-green-500/10 text-green-600",
        "Fullstack": "border-purple-500 bg-purple-500/10 text-purple-600",
        "Análisis de Datos": "border-orange-500 bg-orange-500/10 text-orange-600",
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.4 }} 
            className='flex flex-col gap-6 py-12'
        >
            <div className={`absolute inset-0 z-${modalOpen ? "50" : "0"}`}>
                <Dialog
                    open={modalOpen} 
                    onOpenChange={() => setModalOpen(!modalOpen)}
                >
                    <DialogContent className='bg-white min-w-3/5 max-h-4/5 overflow-auto'>
                        <DialogHeader>
                            <div className='space-x-2 my-1'>
                                <Badge className={tagColors["Frontend"]}>Frontend</Badge>
                            </div>
                            <DialogTitle className='text-2xl'>Stock Equipos Informáticos</DialogTitle>
                            <DialogDescription className='text-lg text-neutral-500'>
                                Aplicación para gestionar los equipos tecnologicos de una empresa.
                            </DialogDescription>
                        </DialogHeader>
                        <div className='max-w-3/4 rounded-lg overflow-hidden'>
                            <Image 
                                src="/placeholder.svg" 
                                width={100} 
                                height={100}
                                className='w-full max-h-[400px] object-cover' 
                                alt="foto"
                            ></Image>
                        </div>
                        <div className='flex flex-col gap-2 my-2'>
                            <h2 className='text-xl font-semibold'>Descripción del Proyecto</h2>
                            <p className='text-lg text-neutral-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, totam quasi veritatis similique libero natus. At hic dolores, tempore consectetur ea minima excepturi laboriosam iste iure molestiae sint non, enim ratione autem nesciunt maxime id. Magni, debitis aliquam id tenetur dolores distinctio deserunt culpa. Quibusdam delectus facere molestias distinctio rerum?</p>
                        </div>
                        <div className='w-full h-[1px] bg-neutral-200'></div>
                        <div className='flex flex-col gap-4 my-2'>
                            <span className='text-lg'>Tecnologías utilizadas</span>
                            <div className='flex gap-2 max-w-1/2'>
                                {["React", "Node.js", "Express", "JWT", "Sequelize", "PostgreSQL", "TypeScript", "POO",].map((tech, i) => (
                                    <Badge 
                                        key={i}
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
                                {installationSteps.map((step, i) => (
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
                        <Button className='bg-red-600 hover:cursor-pointer hover:bg-red-500 duration-300'>
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
                                {project.techs.map((tech, index) => (
                                    <Badge key={index} className='bg-neutral-100 border-1 border-neutral-200 text-black'>{tech}</Badge>
                                ))}
                            </div>
                            <div>
                                <Button 
                                    className='w-full flex items-center bg-neutral-100 border-1 border-neutral-200 text-black group-hover:bg-red-600 group-hover:text-white hover:cursor-pointer hover:bg-red-500 duration-300'
                                    onClick={() => setModalOpen(true)}
                                >
                                    <Eye className='mr-2' />
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
