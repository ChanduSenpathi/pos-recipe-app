import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Table from '../Table/Table'
import OrderSideBar from '../OrderSideBar/OrderSideBar'

export default function Orders() {
  return (
    <section className='h-100 d-flex justify-content-between flex-wrap'>
        <Sidebar/>
        <Table/>
        <OrderSideBar />
    </section>
  )
}
