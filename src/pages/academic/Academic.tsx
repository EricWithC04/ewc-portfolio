import React from 'react'
import { AcademicNavbar } from '@/components/customs/AcademicNavbar/AcademicNavbar'
import { AcademicIntro } from '@/sections/AcademicIntro/AcademicIntro'
import { AcademicFilters } from '@/components/customs/AcademicFilters/AcademicFilters'

const Academic = ({ isExiting, handleExiting }: { isExiting: boolean, handleExiting: () => void }) => {
    return (
        <div className='pt-24 bg-neutral-50 min-h-screen'>
            <AcademicNavbar
                isExiting={isExiting}
                handleExiting={handleExiting}
            ></AcademicNavbar>
            <AcademicIntro
                isExiting={isExiting}
            ></AcademicIntro>
            <AcademicFilters></AcademicFilters>
        </div>
    )
}

export default Academic