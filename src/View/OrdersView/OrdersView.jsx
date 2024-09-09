import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'
import OrderSideBar from '../../components/OrderSideBar/OrderSideBar'

export default function Orders() {
  return (
    <section className='h-100 d-flex justify-content-between '>
        <Sidebar/>
        <div className='d-flex justify-content-between w-100'>
          <Table/>
          <OrderSideBar />
        </div>
    </section>
  )
}
