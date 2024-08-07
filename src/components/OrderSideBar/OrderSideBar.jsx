import React from 'react'
import "./OrderSideBar.css"
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill1, faTicket, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

export default function OrderSideBar() {
    const totalDiscount = useSelector(state=> state.cards.totalDiscount);
    const total = useSelector(state=> state.cards.total);
    const serviceCharges = useSelector(state=> state.cards.serviceCharges);
  return (
    <section className='border_secondary p-4 d-flex flex-column responsive_style'>
        <h3>PAYABLE AMOUNT</h3>
        <div className='d-flex justify-content-between align-items-center border_bottom_dotted pb-3'>
            <h4 className='orders_total_discount'>${totalDiscount.toFixed(2)}</h4>
            <h6 className='guess_table_col'>
                <FontAwesomeIcon icon={faUserGroup} />
                <span className='guess_span mx-2'>GUESS</span>
                <span className='sub_guess_table_col'>2</span>
            </h6>
        </div>
        <div className='border_bottom_dotted d-flex justify-content-between align-items-center gap-3 py-4'>
            <h3 className='add_tip'>ADD TIP</h3>
            <Button type="button" className='orders_common_btn_style'>$5</Button>
            <Button type="button" className='orders_common_btn_style orders_common_disabled'>$10</Button>
            <Button type="button" className='orders_common_btn_style orders_common_disabled'>$15</Button>
            <Button type="button" className='orders_common_btn_style orders_common_disabled'>$20</Button>
        </div>
        <div className='d-flex justify-content-between align-items-center py-4 border_bottom_dotted'>
            <Button type='button' className='text-center orders_common_icons_style'>
                <FontAwesomeIcon icon={faMoneyBill1}/><br/>
                <span>CASH</span>
            </Button>
            <Button type='button' className='text-center orders_common_icons_style orders_common_disabled'>
            <FontAwesomeIcon icon={faCreditCard}/><br/>
                <span>CARD</span>
            </Button>
            <Button type='button' className='text-center orders_common_icons_style orders_common_disabled'>
            <FontAwesomeIcon icon={faTicket}/><br/>
                <span>VOUCHER</span>
            </Button>
        </div>
        <div className='d-flex justify-content-around align-items-center add_cash_received_bg py-4'>
            <h4>ADD CASH RECEIVED</h4>
            <h2 className='pb-2 w-25 text-center'>$ 45</h2>
        </div>
        <div className='py-4'>
            <div className='d-flex justify-content-between align-items-center orders_bottom_style'>
                <span>SUBTOTAL</span>
                <span>${total}.00</span>
            </div>
            <div className='d-flex justify-content-between align-items-center orders_bottom_style'>
                <span>TIPS</span>
                <span>$5.00</span>
            </div>
            <div className='d-flex justify-content-between align-items-center orders_bottom_style'>
                <span>SERVICE CHARGE</span>
                <span>${serviceCharges.toFixed(2)}</span>
            </div>
        </div>
        <div className='d-flex justify-content-between py-4 orders_total_amount'>
            <span>TOTAL</span>
            <span className='text-right'>${(totalDiscount + 5).toFixed(2)}</span>
        </div>
        <Button type='button' className='w-100 pay_now_orders_btn'>PAY NOW</Button>
    </section>
  )
}
