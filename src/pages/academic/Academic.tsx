import React from 'react'
import { AcademicNavbar } from '@/components/customs/AcademicNavbar/AcademicNavbar'
import { AcademicIntro } from '@/sections/AcademicIntro/AcademicIntro'
import { AcademicFilters } from '@/components/customs/AcademicFilters/AcademicFilters'
import { AcademicProjects } from '@/components/customs/AcademicProjects/AcademicProjects'
import { Animations } from '@/interfaces/animations'

const Academic = ({ isExiting, exitingAnimations, handleExiting }: { isExiting: boolean, exitingAnimations: Animations, handleExiting: () => void }) => {
    return (
        <div className='pt-24 min-h-screen'>
            <AcademicNavbar
                isExiting={isExiting}
                handleExiting={handleExiting}
            ></AcademicNavbar>
            <AcademicIntro
                isExiting={isExiting}
                exitingAnimations={exitingAnimations}
            ></AcademicIntro>
            <AcademicFilters
                isExiting={isExiting}
            ></AcademicFilters>
            <AcademicProjects
                isExiting={isExiting}
            ></AcademicProjects>
        </div>
    )
}

export default Academic