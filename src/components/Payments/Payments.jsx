import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import LocationDisplay from '../LocationDisplay/LocationDisplay'
import { FaPlus } from 'react-icons/fa'
import BankSelector from '../BankSelector/BankSelector'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetState } from '../../store/store'
import './Payments.css'


const paymentMethods = {upi:[],cards:[],}

const bankImages = [
    {
        imgSrc: './images/bankimages/axis.png',
        title : 'AXIS BANK'
    },
    {
        imgSrc: './images/bankimages/hdfc.png',
        title : 'HDFC BANK'
    },
    {
        imgSrc: './images/bankimages/stb.png',
        title : 'STB BANK'
    },
    {
        imgSrc: './images/bankimages/canara.png',
        title : 'CANARA BANK'
    },
    {
        imgSrc: './images/bankimages/boi.png',
        title : 'BOI BANK'
    },
    {
        imgSrc: './images/bankimages/kotak.png',
        title : 'KOTAK BANK'
    },
    {
        imgSrc: './images/bankimages/sbi.png',
        title : 'SBI BANK'
    },
    {
        imgSrc: './images/bankimages/icici.png',
        title : 'ICICI BANK'
    },
]

export default function Payments() {
    const totalDiscount = useSelector(state=> state.cards.totalDiscount)
    const [activeIndex, setActiveIndex] = useState({upiIndex: false, upiMainIndex: false, cardsIndex: false, cardsMainIndex: false, activePayment : false});
    const [paymentDetails, setPaymentDetails] = useState({upiName: '', upiImg: '', });
    const [payments, setPayments] = useState({upiPay: paymentMethods.upi, cardsPay: paymentMethods.cards, isPaymentSelected: false})
    const [formDetails, setFormDetails] = useState({accName: '', accNum: '', accMobileNum: '', cvv: '', accImg:'', accImg: '', bankName: ''})
    const [isTrue, setTrue] = useState({isOpen: false, isCode: false, mobileNum : formDetails.accMobileNum, verifyCode: '', userCode: '' ,isCodeSend: false})
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formEventHandler = (e) => {
        e.preventDefault();
        const {upiName} = paymentDetails;
        const randomNum = Math.floor(Math.random()*bankImages.length);        
        const obj = {
            upiName,
            upiImg: bankImages[randomNum].imgSrc
        }
        payments.upiPay.push(obj)
        setPaymentDetails({upiName: ''})                
    }

    const popupFormHandler = (e) => {
        e.preventDefault();
        const {accName, accNum, accMobileNum, cvv, bankName, } = formDetails;
        if(accName === '' && accNum === '' && accMobileNum === '' && cvv === '' && bankName === ''){
            alert('Please fill All the Fields');
        }else if(accNum.length !== 16){
            alert('Please fill the 16 Digit Account Number')
        }else if(accMobileNum.length !== 10){
            alert('Please Enter 10 Digit Account Number');
        }else if(cvv.length !== 3){
            alert('Please Enter 3 Digit CVV number')
        }else {
            setActiveIndex({...activeIndex, cardsIndex: false});
            const bankImg = bankImages.find(item => item.title === bankName)         
            const obj = {
                accName,
                accNum,
                accMobileNum,
                cvv,
                bankName,
                bankImg : bankImg.imgSrc
            }
            payments.cardsPay.push(obj);
            console.log(payments.cardsPay);            
            setFormDetails({accName: '', accNum: '', accMobileNum: '', cvv: '', bankName : ''});
        }
    }

    const togglePopUp = (e) => {
        if(e.target.tagName === 'SECTION'){
            setActiveIndex({...activeIndex, cardsIndex: false});
            setFormDetails({accName: '', accNum: '', accMobileNum: '', cvv: ''});
        } else if(e.target.tagName === 'DIV') {
            setTrue({...isTrue, isOpen: false, isCode:false, isCodeSend: false});
        }    
    }      

    const sendVerificationCode = async (e) => {
        e.preventDefault();
        if (isTrue.isCodeSend) {            
            if(parseInt(isTrue.userCode) === isTrue.verifyCode && isTrue.userCode !== ""){
                alert("Order Confirmed Successfully")
                setTrue({...isTrue, isOpen: false, isCode: false, mobileNum : formDetails.accMobileNum, verifyCode: '', userCode: '' ,isCodeSend: false});
                dispatch(resetState())
                navigate('/');
            }else {
                alert(`Please Re-enter otp code ${isTrue.verifyCode}`)
            }
        } else {
            const random = Math.floor(Math.random()* 10000);
            alert(`your OTP is ${random}`)
            setTrue({ ...isTrue, isCode: true, isCodeSend: true, verifyCode: random });
            // try {
            //     const response = await axios.post('https://textbelt.com/text', {
            //         phone: `${isTrue.mobileNum}`,
            //         userid: 'chandu.com',
            //         key: '3b4b296a0bd687a494e930b675d591be9f468277nZzOjqepMOWmtA4nOaOS39d5N'
            //     }, {
            //         headers: { 'Content-Type': 'application/json' }
            //     });
    
            //     console.log(response.data);
            // } catch (error) {
            //     console.error('Error sending SMS:', error);
            // }
        }
    };

  return (
    <section className='position-relative'>
        <Container>
            <div className='border_bottom_solid d-flex justify-content-between align-items-center'>
                <h1 className='text-center'>Payments</h1>
                <div>
                    <h3>Total Amount : { totalDiscount === 0 ? "0" : (totalDiscount).toFixed(2)}</h3>
                </div>
            </div>
            <LocationDisplay />
            <div>
                <h3>Payments Methods</h3>
                <div className='d-flex flex-wrap gap-5'>
                    <div className='payments_max_width p-4'>
                        <button type='button' onClick={()=> setActiveIndex({...activeIndex, upiMainIndex:
                            !activeIndex.upiMainIndex})} className='payments_toggle_btn d-flex
                            justify-content-between
                            align-items-center w-100'>
                            <span>UPI</span>
                            <span>{activeIndex.upiMainIndex ? '-' : "+"}</span>
                        </button>
                        <button type='button' className='border w-100 add_upi_btn mt-3 d-flex p-2 align-items-center'
                            onClick={()=>
                            setActiveIndex({...activeIndex, upiIndex: !activeIndex.upiIndex})}>
                            <span className='me-2'>
                                <FaPlus /></span>
                            <span>Add new UPI ID</span>
                        </button>
                        <form onSubmit={formEventHandler} className={`toggle_form d-flex justify-content-between
                            align-items-center mt-2 ${activeIndex.upiIndex ? 'formActive' : '' }`}>
                            <input type='text' onChange={(e)=> setPaymentDetails({...paymentDetails, upiName:
                            e.target.value})} className='flex-grow-1 py-2 px-3 me-2'
                            value={paymentDetails.upiName}/>
                            <input type='submit' value="Add" className='py-2 px-3' />
                        </form>
                        <ul className={`payments_common_ul_container mt-3 ${activeIndex.upiMainIndex ? "mainIndexActive"
                            : '' }`}>
                            {payments.upiPay.length<=0 && <h3 className='text-center'>No UPI ID's Found</h3>}
                                {payments.upiPay.length >0 && payments.upiPay.map((items, index)=>
                                <li className='border_bottom_solid d-flex justify-content-between align-items-center py-3'
                                    key={index}>
                                    <div className='d-flex align-items-center'>
                                        <img src={items.upiImg} alt={`upi-image-${index}`}
                                            className='bank_upi_images me-4' />
                                        <label htmlFor={`upiradio-${index}`}>{items.upiName}</label>
                                    </div>
                                    <input type='radio' id={`upiradio-${index}`} onChange={() => setActiveIndex({...activeIndex, activePayment: true})} name='upiradio'
                                        value={`upi-${index}`} />
                                </li>
                                )}
                        </ul>
                    </div>
                    <div className='payments_max_width p-4'>
                        <button type='button' onClick={()=> setActiveIndex({...activeIndex, cardsMainIndex:
                            !activeIndex.cardsMainIndex})} className='payments_toggle_btn d-flex
                            justify-content-between
                            align-items-center w-100'>
                            <span>Credit & Debit Cards</span>
                            <span>{activeIndex.cardsMainIndex ? '-' : "+"}</span>
                        </button>
                        <button type='button' className='border w-100 add_upi_btn mt-3 d-flex p-2 align-items-center'
                            onClick={()=>
                            setActiveIndex({...activeIndex, cardsIndex: !activeIndex.cardsIndex})}>
                            <span className='me-2'>
                                <FaPlus /></span>
                            <span>Add Debit or Credit Card</span>
                        </button>
                        <section className={`popup_form_container ${activeIndex.cardsIndex ? 'd-block' : 'd-none' }`}
                            onClick={togglePopUp}>
                            <form onSubmit={popupFormHandler} className={`w-100 h-75 toggle_form additional_form mt-2
                                p-4 d-flex flex-column justify-content-between`}>
                                <h3>Account Details</h3>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='accName' className='account_labels'>Account Name</label>
                                    <input type='text' id='accName' className='w-100 py-1 px-3' onChange={(e)=>
                                    setFormDetails({...formDetails, accName:e.target.value})} placeholder='Enter
                                    your Account Name' value={formDetails.accName}/>
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='accNumber' className='account_labels'>Account Number</label>
                                    <input type='number' id='accNumber' className='w-100 py-1 px-3' onChange={(e)=>
                                    setFormDetails({...formDetails, accNum:e.target.value})} placeholder='Enter your
                                    Account Number' value={formDetails.accNum}/>
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='accMobile' className='account_labels'>Mobile Number</label>
                                    <input type='number' id='accMobile' className='w-100 py-1 px-3' onChange={(e)=>
                                    setFormDetails({...formDetails, accMobileNum:e.target.value})}
                                    placeholder='Enter your Mobile Number' value={formDetails.accMobileNum}/>
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <BankSelector setFormDetails={setFormDetails} formDetails={formDetails} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='accCVV' className='account_labels'>CVV</label>
                                    <input type='number' id='accCVV' className='w-50 py-1 px-3' onChange={(e)=>
                                    setFormDetails({...formDetails, cvv:e.target.value})} placeholder='Enter your
                                    CVV' value={formDetails.cvv}/>
                                </div>
                                <input type="submit" value="submit"
                                    className='mt-3 py-3 w-100 formsubmit_control_btn' />
                            </form>
                        </section>
                        <ul className={`payments_common_ul_container mt-3 ${activeIndex.cardsMainIndex
                            ? "mainIndexActive" : '' }`}>
                            {payments.cardsPay.length<=0 && <h3 className='text-center'>No UPI ID's Found</h3>}
                                {payments.cardsPay.length >0 && payments.cardsPay.map((items, index)=>
                                <li key={index}
                                    className='d-flex justify-content-between align-items-center border_bottom_solid my-2 pb-2'>
                                    <div className='d-flex align-items-center'>
                                        <img src={items.bankImg} alt={`${items.bankName}-bank-logo`}
                                            className='bank_upi_images me-3' />
                                        <div className='d-flex flex-column'>
                                            <label htmlFor={`bank-radio-${index}`}>Account Holder:
                                                {items.accName}</label>
                                            <span className='bank_name_text'>Banking Name: {items.bankName}</span>
                                        </div>
                                    </div>
                                    <input type='radio' id={`bank-radio-${index}`} onChange={() => setActiveIndex({...activeIndex, activePayment: true})} name='bank-radio'
                                        value={`card-${index}`} />
                                </li>
                                )}
                        </ul>
                    </div>
                </div>
            </div>
            <button type='button' className={`${activeIndex.activePayment ? "" : "payment_btn_disabled"} mt-4 payments_pay_btn text-center`} 
            onClick={() =>  setTrue({...isTrue, isOpen:!isTrue.isOpen})}>Pay Rs. 
            {totalDiscount === 0 ? "0" : (totalDiscount).toFixed(2)}
            </button>
            {isTrue.isOpen && 
            <div className='popup_form_container' onClick={togglePopUp}>
                <form className='additional_form p-5 w-100' onSubmit={sendVerificationCode}>
                    <div className='d-flex flex-column'>
                        <label htmlFor='mobileNumber' className='account_labels my-3'>Mobile Number</label>
                        <input type='number' id='mobileNumber' className='px-3 py-2' onChange={(e) =>  setTrue({...isTrue, mobileNum:e.target.value})} value={isTrue.mobileNum} placeholder='Enter Mobile Number'/>
                    </div>
                    {isTrue.isCode && 
                        <div className='d-flex flex-column'>
                            <label htmlFor='verifyCode' className='account_labels my-3'>Enter Verification Code</label>
                            <input type='number' id='verifyCode' className='px-3 py-2' placeholder='Enter Verification Code' onChange={(e) => setTrue({...isTrue, userCode: e.target.value})} value={isTrue.userCode}/>
                        </div>
                    }
                    <input type='submit' value={`${isTrue.isCode ? "Submit Code" : "Send Code"}`} className='send_code_btn px-3 py-2 mt-3' />
                </form>
            </div>}
        </Container>
    </section>
  )
}
