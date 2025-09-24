import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Option {
    text: string
    selected: boolean
}

export const AcademicFilters = () => {

    const [typeProjects, setTypeProjects] = useState<Array<Option>>([
        {
            text: "Todos",
            selected: true
        }, 
        {
            text: "Frontend",
            selected: false
        }, 
        {
            text: "Backend",
            selected: false
        }, 
        {
            text: "Fullstack",
            selected: false
        }, 
        {
            text: "Análisis de Datos",
            selected: false
        }
    ])

    const [technologies, setTechnologies] = useState<Array<Option>>([
        {
            text: "Todas",
            selected: true
        },
        {
            text: "React",
            selected: false
        },
        {
            text: "Chart.js",
            selected: false
        },
        {
            text: "Next.js",
            selected: false
        },
        {
            text: "Python",
            selected: false
        },
        {
            text: "Node.js",
            selected: false
        },
        {
            text: "Express",
            selected: false
        },
        {
            text: "JWT",
            selected: false
        },
        {
            text: "MongoDB",
            selected: false
        },
        {
            text: "PostgreSQL",
            selected: false
        },
        {
            text: "MySQL",
            selected: false
        },
        {
            text: "Socket.io",
            selected: false
        },
        {
            text: "TypeScript",
            selected: false
        },
    ])

    const selectOption = (type: "type" | "tech", text: string) => {
        const newSelected: Array<Option> = (type === "type" ? typeProjects : technologies).map((option) => {
                if (option.text === text || option.selected) {
                    option.selected = !option.selected
                }
                return option
            })
        type === "type" ? setTypeProjects(newSelected) : setTechnologies(newSelected)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.2 }} 
        >
            <Card className='mx-16'>
                <CardContent className='flex'>
                    <div className="flex flex-col flex-1 gap-2">
                        <h4 className='font-semibold text-neutral-500'>TIPO DE PROYECTO</h4>
                        <div className='max-w-3/4 space-x-2 space-y-1'>
                            {typeProjects.map((type, index) => (
                                <Badge 
                                    key={index}
                                    onClick={() => selectOption("type", type.text)}
                                    className={`${ type.selected ? "bg-red-600 text-white" : "bg-white border-1 border-neutral-500/20 text-black" } text-sm font-semibold py-1 px-2`}
                                >{type.text}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col flex-2 gap-2'>
                        <h4 className='font-semibold text-neutral-500'>TECNOLOGÍAS</h4>
                        <div className='max-w-3/4 space-x-2 space-y-1'>
                            {technologies.map((tech, index) => (
                                <Badge 
                                    key={index}
                                    onClick={() => selectOption("tech", tech.text)}
                                    className={`${ tech.selected ? "bg-red-600 text-white" : "bg-white border-1 border-neutral-500/20 text-black" } text-sm font-semibold py-1 px-2`}
                                >{tech.text}</Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
