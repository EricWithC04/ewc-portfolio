"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ContactForm } from '@/components/customs/ContactForm/ContactForm'

export const Contact = () => {

    const contactInfo = [
        {
            icon: "",
            title: "Email",
            desc: "ericmerccado@gmail.com",
        },
        {
            icon: "",
            title: "Teléfono",
            desc: "+54 9 370-4607556",
        },
        {
            icon: "",
            title: "Ubicación",
            desc: "Formosa, Argentina",
        },
    ]

    return (
        <section className='bg-black py-24 px-24 space-y-12' id="contact">
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-4xl text-red-500 font-bold'>¡Trabajemos Juntos!</h1>
                <p className='text-lg text-neutral-500 max-w-1/2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius eos quod sed laboriosam explicabo.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-12'>
                <div className='space-y-4'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl text-red-500 font-semibold'>Información de Contacto</h1>
                        <div className='flex flex-col gap-6'>
                            {contactInfo.map((item, index) => (
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <div key={index} className='relative group flex items-center py-2 px-4 gap-2 rounded-lg overflow-hidden hover:cursor-pointer'>
                                        <div className='absolute inset-0 group-hover:bg-neutral-500/20 duration-300 z-10'></div>
                                        <div className='w-10 h-10 bg-red-500/30 rounded-lg flex items-center justify-center'>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className='text-lg text-white font-semibold'>{item.title}</h3>
                                            <span className='text-md text-neutral-500'>{item.desc}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-xl text-red-500 font-semibold mb-4'>Sígueme en redes</h3>
                        <div className='flex gap-4'>
                            <motion.div 
                                className='h-12 w-12 rounded-lg bg-neutral-500/50 hover:bg-red-500 hover:cursor-pointer'
                                whileHover={{ scale: 1.1 }}
                            ></motion.div>
                            <motion.div 
                                className='h-12 w-12 rounded-lg bg-neutral-500/50 hover:bg-red-500 hover:cursor-pointer'
                                whileHover={{ scale: 1.1 }}
                            ></motion.div>
                            <motion.div 
                                className='h-12 w-12 rounded-lg bg-neutral-500/50 hover:bg-red-500 hover:cursor-pointer'
                                whileHover={{ scale: 1.1 }}
                            ></motion.div>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
