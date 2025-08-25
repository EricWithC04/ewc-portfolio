import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export const ContactForm = () => {

    const inputsClasses = "border-0 bg-neutral-900/80 focus:border-1 focus-visible:border-red-500! focus-visible:ring-4 focus-visible:ring-red-500/40"

    return (
        <Card className='bg-neutral-900/40 border-1 border-neutral-600/50 w-full'>
            <CardHeader>
                <CardTitle className='text-white'>Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
                <form className='flex flex-col gap-6 text-white'>
                    <div className='flex gap-6'>
                        <div className='space-y-2 w-full'>
                            <Label>Nombre *</Label>
                            <Input type="text" className={inputsClasses} placeholder="Tu nombre completo" />
                        </div>
                        <div className='space-y-2 w-full'>
                            <Label>Email *</Label>
                            <Input type="text" className={inputsClasses} placeholder="tu@email.com" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <Label>Asunto *</Label>
                        <Input type="text" className={inputsClasses} placeholder='¿En qué puedo ayudarte?' />
                    </div>
                    <div className='space-y-2'>
                        <Label>Mensaje *</Label>
                        <Textarea className={inputsClasses} rows={5} placeholder='Cuéntame sobre tu proyecto...' />
                    </div>
                    <Button className='w-full bg-red-500 hover:bg-red-600 hover:cursor-pointer text-center duration-300'>Enviar Mensaje</Button>
                </form>
            </CardContent>
        </Card>
    )
}
