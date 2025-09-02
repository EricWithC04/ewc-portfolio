"use client";
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={pathname}
                initial={{ backgroundColor: "#000000" }}
                animate={{ backgroundColor: "#f5f5f5" }}
                // exit={{ backgroundColor: "#000" }}
                transition={{ duration: 1.2 }}
                className="min-h-screen"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default ClientLayout