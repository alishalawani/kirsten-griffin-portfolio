import React from 'react'
import { ReelSection } from './ReelSection';
import './MainView.css';
import RecentWorks from './RecentWorks';
import Services from './Services';
export const MainView = () => {
  return (
    <div className='main-page'>
        <ReelSection/>
        <RecentWorks/>
        <Services/>
    </div>
  )
}
