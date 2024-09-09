import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Cards from '../../components/Cards/Cards'
import RightSidebar from '../../components/RightSidebar/RightSidebar'



export default function Menu() {
  return (
    <section className='h-100 d-flex justify-content-between flex-wrap'>
        <Sidebar />
        <Cards />
        <RightSidebar />
    </section>
  )
}
