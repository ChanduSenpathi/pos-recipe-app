import React, { useState } from 'react';
import './BankSelector.css'; // Include your custom styles here

const bankImages = [
    { imgSrc: './images/bankimages/axis.png', title: 'AXIS BANK' },
    { imgSrc: './images/bankimages/hdfc.png', title: 'HDFC BANK' },
    { imgSrc: './images/bankimages/stb.png', title: 'STB BANK' },
    { imgSrc: './images/bankimages/canara.png', title: 'CANARA BANK' },
    { imgSrc: './images/bankimages/boi.png', title: 'BOI BANK' },
    { imgSrc: './images/bankimages/kotak.png', title: 'KOTAK BANK' },
    { imgSrc: './images/bankimages/sbi.png', title: 'SBI BANK' },
    { imgSrc: './images/bankimages/icici.png', title: 'ICICI BANK' },
];
export default function BankSelector({ setFormDetails, formDetails }) {

    const [selectedBank, setSelectedBank] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleBankSelect = (bank) => {
        setSelectedBank(bank);
        setFormDetails({...formDetails, bankName: bank.title});
        setIsDropdownOpen(false);
    };

    return (
        <div className='d-flex flex-column w-100 custom-dropdown'>
            <label htmlFor='selBank' className='account_labels'>Select Bank</label>
            <div 
                id='selBank' 
                className='w-100 py-2 px-3 bank-dropdown'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                {selectedBank ? (
                    <div className="d-flex align-items-center">
                        <img src={selectedBank.imgSrc} className='dropdown_bank_upi_images' alt={selectedBank.title} />
                        <span>{selectedBank.title}</span>
                    </div>
                ) : (
                    <span>Select a Bank</span>
                )}
            </div>
            {isDropdownOpen && (
                <ul className='bank-options'>
                    {bankImages.map((items, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleBankSelect(items)} 
                            className='d-flex align-items-center bank-option'
                        >
                            <img src={items.imgSrc} className='dropdown_bank_upi_images' alt={items.title} />
                            <span>{items.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
