/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoDownloadOutline } from "react-icons/io5";

const BuyerList = () => {
    return (
        <div className='mt-20 md:mt-44 mx-5 md:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-[#FDF0E7] p-5 rounded-md'>
                <h2 className='text-4xl font-extrabold text-[#D95D0F]'>2k+</h2>
                <p className='mb-10'>New Flat Listed</p>
                <div className='flex justify-between'>
                    <a className="link text-[#D95D0F]">View All</a>
                    <p className='text-[#D95D0F] text-2xl'><IoDownloadOutline /></p>
                </div>
            </div>
            <div className='bg-[#ECF5FF] p-5 rounded-md'>
                <h2 className='text-4xl font-extrabold text-[#0051A1]'>3k+</h2>
                <p className='mb-10'>New Flat Listed</p>
                <div className='flex justify-between'>
                    <a className="link text-[#0051A1]">View All</a>
                    <p className='text-[#0051A1] text-2xl'><IoDownloadOutline /></p>
                </div>
            </div>
            <div className='bg-[#FDF0E7] p-5 rounded-md'>
                <h2 className='text-4xl font-extrabold text-[#D95D0F]'>4k+</h2>
                <p className='mb-10'>New Flat Listed</p>
                <div className='flex justify-between'>
                    <a className="link text-[#D95D0F]">View All</a>
                    <p className='text-[#D95D0F] text-2xl'><IoDownloadOutline /></p>
                </div>
            </div>
            <div className='bg-[#ECF5FF] p-5 rounded-md'>
                <h2 className='text-4xl font-extrabold text-[#0051A1]'>2k+</h2>
                <p className='mb-10'>New Flat Listed</p>
                <div className='flex justify-between'>
                    <a className="link text-[#0051A1]">View All</a>
                    <p className='text-[#0051A1] text-2xl'><IoDownloadOutline /></p>
                </div>
            </div>
        </div>
    );
};

export default BuyerList;
