import React from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { IoMdContact, IoMdMail } from 'react-icons/io';

const ContactInformation = ({ data }) => {
    return (
        <main className='grid gap-8 p-4 sm:p-8'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-[#0B235D] text-xl font-medium'>My Conatct Information</h1>
              
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-center w-full max-w-6xl mx-auto'>
                <div className='flex flex-col items-center text-center  border rounded-lg shadow-md p-4'>
                    <p className='w-20 h-20 rounded-full text-4xl bg-[#6684CE] text-white flex justify-center items-center'>
                        <FaLocationPin />
                    </p>
                    <p className='font-semibold mt-2'> Location</p>
                    <p className='text-sm text-[#636C7E]'>Gulmi</p>
                </div>
                <div className='flex flex-col items-center text-center  border rounded-lg shadow-md p-4'>
                    <p className='w-20 h-20 rounded-full text-4xl bg-[#6684CE] text-white flex justify-center items-center'>
                        <IoMdMail />
                    </p>
                    <p className='font-semibold mt-2'> Email</p>
                    <p className='text-sm text-[#636C7E]'>aryalpratik29@gmail.com</p>
                </div>
                <div className='flex flex-col items-center text-center  border rounded-lg shadow-md p-4'>
                    <p className='w-20 h-20 rounded-full text-4xl bg-[#6684CE] text-white flex justify-center items-center'>
                        <IoMdContact />
                    </p>
                    <p className='font-semibold mt-2'> Contact</p>
                    <p className='text-sm text-[#636C7E]'>+977-9845455112</p>
                </div>
            </div>
        </main>
    );
}

export default ContactInformation;
