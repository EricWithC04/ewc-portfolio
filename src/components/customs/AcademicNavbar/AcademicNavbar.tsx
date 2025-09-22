import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, GraduationCap } from 'lucide-react'

export const AcademicNavbar = ({ isExiting, handleExiting }: { isExiting: boolean, handleExiting: () => void }) => {
    return (
        <motion.nav
            initial={!isExiting ? { y: 0 } : { y: -100 }}
            animate={!isExiting ? { y: -100 } : { y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className='fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 py-4 bg-white border-b border-neutral-500/30'
        >
            <div className='flex gap-2 group hover:cursor-pointer' onClick={handleExiting}>
                <ArrowLeft className='group-hover:-translate-x-1 duration-300' ></ArrowLeft>
                <span>Volver al Portafolio</span>
            </div>
            <div className='flex gap-4 items-center'>
                <GraduationCap size={32} color={"#dc2727"}></GraduationCap>
                <span className='text-lg font-semibold'>Proyectos Académicos</span>
            </div>
            <div className='w-40'></div>
        </motion.nav>
    )
}
