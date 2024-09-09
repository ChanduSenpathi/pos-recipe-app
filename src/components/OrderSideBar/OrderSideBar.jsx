import React, { useState } from 'react'
import "./OrderSideBar.css"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill1, faTicket, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {addTips, appliedVoucher} from '../../store/store'

const tipsBtn = [
    {
        id: 1,
        title: 5
    },
    {
        id: 2,
        title : 10
    },
    {
        id: 3,
        title : 15
    },
    {
        id: 4,
        title : 20
    }
]

const cardsMethods = [
    {
        id:1,
        title : 'CASH',
        icon: faMoneyBill1
    },
    {
        id: 2,
        title: 'CARD',
        icon: faCreditCard
    },
    {
        id:3,
        title: 'VOUCHER',
        icon: faTicket
    }
]

export default function OrderSideBar() {
    const [activeBtn, setActiveBtn] = useState({tipsId: '', cardsId: ''});
    const {totalDiscount , serviceCharges, tipsCharges, total} = useSelector(state => state.cards)
    const dispatch = useDispatch();

    const tipsHandler = (item) => {
        if(totalDiscount !== 0 ){
            setActiveBtn({...activeBtn, tipsId: item.id});
            dispatch(addTips(item.title));
        }else {
            alert("Please Select the Order");
        }
    }

    const setCardsHandler = (id) => {
        if(totalDiscount !== 0) {
            setActiveBtn({...activeBtn, cardsId: id});
            if(id === 3) {
                if(totalDiscount <= 100){
                    alert("Sorry Under RS.100 ,Voucher will Not be Applied");
                    return;
                }
                let userInput = prompt("Please Enter Voucher Number");
                if(userInput !== '') {
                    const voucherList = [5, 10, 6, 4, 0 , 0]
                    const random = Math.floor(Math.random() * voucherList.length);
                    if(voucherList[random] !== 0 && totalDiscount !==0) {
                        alert("Voucher Applied Successfully");
                        dispatch(appliedVoucher(voucherList[random]));                 
                    }else {
                        alert("Sorry, Voucher is not available");
                    }
                }else {
                    alert("Please Enter Voucher Code");
                }
            }
        }else {
            alert("Please Select the Order");
        }
            

    }

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
            <ul className='d-flex justify-content-between align-item-center gap-3'>
            {tipsBtn.map(item => 
                <li key={item.id}>
                    <Button type="button" onClick={() => tipsHandler(item)} className={`orders_common_btn_style ${activeBtn.tipsId === item.id ? "" : "orders_common_disabled"}`}>$ {item.title}</Button>
                </li>
            )}
            </ul>
        </div>
        <ul className='d-flex justify-content-between align-items-center py-4 border_bottom_dotted'>
            {cardsMethods.map(card =>
            <li key={card.id}>
                <Button type='button' onClick={() => setCardsHandler(card.id)} className={`text-center orders_common_icons_style ${activeBtn.cardsId === card.id ? "" : "orders_common_disabled"}`}>
                    <FontAwesomeIcon icon={card.icon} /><br />
                    <span>{card.title}</span>
                </Button>
            </li>
            )}
        </ul>
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
                <span>${tipsCharges}.00</span>
            </div>
            <div className='d-flex justify-content-between align-items-center orders_bottom_style'>
                <span>SERVICE CHARGE</span>
                <span>${serviceCharges.toFixed(2)}</span>
            </div>
        </div>
        <div className='d-flex justify-content-between py-4 orders_total_amount'>
            <span>TOTAL</span>
            <span className='text-right'>$ {totalDiscount.toFixed(2)}</span>
        </div>
        <Link type='button' to={`/payments`} className='w-100 pay_now_orders_btn text-center text-decoration-none'>PAY NOW</Link>
    </section>
  )
}
