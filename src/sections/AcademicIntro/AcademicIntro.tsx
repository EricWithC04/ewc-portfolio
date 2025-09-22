import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge' 
import { motion } from 'framer-motion'

export const AcademicIntro = ({ isExiting }: { isExiting: boolean }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className='flex flex-col items-center gap-6 py-12'
        >
            <Card className='bg-red-300/10 border-1 border-red-500/40 mx-16'>
                <CardContent>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-semibold'>Colección de Proyectos Académicos</h1>
                        <p className='text-neutral-500 max-w-3/4'>En esta sección encontrarás una colección de proyectos que realicé durante mi etapa académica. Son trabajos relativamente pequeños o incompletos, por lo que no tienen un deploy propio. Por eso los reuní aquí, además, los mismos cuentan con instrucciones para que puedas instalarlos y probarlos en tu propio ordenador si deseas hacerlo.</p>
                        <div className='flex gap-2'>
                            <Badge className='bg-transparent text-red-600 border-red-500/40 bg-red-500/10'>5 Proyectos</Badge>
                            <Badge className='bg-transparent text-black border-neutral-400/40'>3 Frontend</Badge>
                            <Badge className='bg-transparent text-black border-neutral-400/40'>2 Backend</Badge>
                            <Badge className='bg-transparent text-black border-neutral-400/40'>1 FullStack</Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
