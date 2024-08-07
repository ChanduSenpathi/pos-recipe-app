import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Cards from '../Cards/Cards'
import RightSidebar from '../RightSidebar/RightSidebar'



export default function Home() {
  return (
    <section className='h-100 d-flex justify-content-between flex-wrap'>
        <Sidebar />
        <Cards />
        <RightSidebar />
    </section>
  )
}
