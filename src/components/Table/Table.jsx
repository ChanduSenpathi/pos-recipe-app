import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faClock, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import './Table.css'
import { Button } from 'react-bootstrap';
import { deleteItem } from '../../store/store';


export default function Table() {
    const [time, setTime] = useState('');
    const cartItems = useSelector(state=> state.cards.cart);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours <= 10 ? "0" + hours : hours;
        let ampm = hours >=13 ? 'AM' : 'PM';
        minutes = minutes < 10? '0' + minutes : minutes;
        setTime(`${hours}:${minutes} ${ampm}`)
    },[cartItems])

  return (
    <section className='table_container w-100 p-3'>
        <div className='d-flex justify-content-between align-items-center border_bottom_solid pb-2'>
            <h1 className='table_main_head'>ORDER #: 12564876</h1>
            <div className='d-flex justify-content-between align-items-center gap-5'>
                <h6 className='guess_table_col'>
                    <FontAwesomeIcon icon={faCircle} className='bg-black text-white' />
                    <span className='mx-2'>TABLE</span>
                    <span className='sub_guess_table_col'>1</span>
                </h6>
                <h6>
                    <FontAwesomeIcon icon={faClock} className='mx-2'/>
                    <span className='guess_table_col'>TIME: {time}</span>
                </h6>
            </div>
        </div>
        <div className='table_container_width w-100 mt-5'>
            <div className='table_body_bg mb-5'>
                <table className='table_width pt-5 position-relative top-0 w-100 h-100'>
                    <thead className="text-center table_head_bg position-sticky top-0">
                        <tr>
                            <th>
                                <div className="custom_padding">ITEM</div>
                            </th>
                            <th>
                                <div className="custom_padding">PRICE</div>
                            </th>
                            <th>
                                <div className="custom_padding">QTY</div>
                            </th>
                            <th>
                                <div className="custom_padding">SUBTOTAL</div>
                            </th>
                        </tr>
                    </thead>
                    {cartItems <=0 && (
                        <tbody className='no_items_selected position-absolute'>
                            <tr>
                                <td>
                                    <h1>No Items Selected</h1>
                                </td>
                            </tr>
                        </tbody>
                    )}
                    <tbody>
                        {
                        cartItems.map(items=>
                        <tr key={items.id} className='border_secondary table_row_bg'>
                            <td className='text-center custom_padding'>
                                {items.title}<br/>STARTER
                            </td>
                            <td className='text-center custom_padding'>$ {items.cost}</td>
                            <td className='text-center custom_padding'>{items.quantity}</td>
                            <td className='text-center custom_padding'><span>${items.amount}</span>
                                <Button type='button' className='trash_button text-danger' onClick={() => dispatch(deleteItem(items.id))}>
                                    <FontAwesomeIcon icon={faTrashCan} /></Button>
                            </td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
            <Button type='button' className='w-100 table_cancel_order_btn'>CANCEL ORDER</Button>
        </div>
    </section>
  )
}
