import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircle, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import './RightSidebar.css'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function RightSidebar() {
    const cartItems = useSelector((state)=>state.cards.cart) ;
    const totalAmount = useSelector((state)=>state.cards.total);
    const totalDiscount = useSelector((state)=>state.cards.totalDiscount);
    const serviceCharges = useSelector((state)=>state.cards.serviceCharges);
    const navigate = useNavigate();
    
  return (
    <section className='p-3 bg-white right_sidebar_container border_secondary d-flex flex-column justify-content-start' >
        <div className='border_bottom_dotted w-100'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='rightbar_orders'>ORDER#</h3>
                <h3 className='rightbar_orders'>12564878</h3>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <h6 className='guess_table_col'>
                    <FontAwesomeIcon icon={faUserGroup}/>
                    <span className='guess_span mx-2'>GUESS</span> 
                    <span className='sub_guess_table_col'>2</span>
                </h6>
                <h6 className='guess_table_col'>
                    <FontAwesomeIcon icon={faCircle} className='bg-black text-white'/>
                    <span className='mx-2'>TABLE</span> 
                    <span className='sub_guess_table_col'>1</span>
                </h6>                
            </div>
        </div>
        <div className="order_items_height">
            {cartItems.length <= 0 ? (<h1 className="d-flex justify-content-center align-items-center h-100">There is No Items Ordered</h1>): (
                <ul className="list-unstyle p-0">
                    {cartItems.map(items=>
                    <li key={items.id} className="order_list_items p-2 d-flex justify-content-between align-items-center my-3">
                        <img src={items.src} className ="order_items_image" alt={`order-image-${items.id}`}/>
                        <div>
                            <h5>{items.title}</h5>
                            <h3>${items.amount}</h3>
                        </div>
                        <div>
                            <h5>QUANTITY</h5>
                            <h3 className="text-center">{items.quantity}</h3>
                        </div>
                    </li>
                )}
                </ul>
            )}
        </div>
        <div className='border border-lg-dotted rounded rounded-lg p-3 right_sidebar_footer_con'>
            <div className='border_bottom_dotted pb-3'>
                <div className='d-flex justify-content-between align-items-center order_subtotal_text'>
                    <span>SUBTOTAL</span>
                    <span>${totalAmount}.00</span>
                </div>
                <div className='d-flex justify-content-between align-items-center order_subtotal_text'>
                    <span>SERVICE CHARGE 10%</span>
                    <span>${serviceCharges.toFixed(2)}</span>
                </div>
            </div>
            <div>
                <h3 className='d-flex justify-content-between align-items-center py-4'>
                    <span>TOTAL</span>
                    <span>${totalDiscount.toFixed(2)}</span>
                </h3>
                <div className='d-flex justify-content-center align-items-center gap-3'>
                    <Button type="button" className='cancel_order_btn'>CANCEL ORDER</Button>
                    <Button type="button" className='send_order_btn' onClick={() => navigate('/payments')} >SEND ORDER</Button>
                </div>
            </div>
        </div>
    </section>
  )
}
