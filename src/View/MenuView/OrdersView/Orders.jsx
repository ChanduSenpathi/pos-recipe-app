import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'
import OrderSideBar from '../../components/OrderSideBar/OrderSideBar'

export default function Orders() {
  return (
    <section className='h-100 d-flex justify-content-between flex-wrap'>
        <Sidebar/>
        <Table/>
        <OrderSideBar />
    </section>
  )
}
