'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import logo from '../../Assets/coulogo.jpeg'
import Cards from '../Cards/Cards';
import SeatAllocationForm from '../SeatAllocationForm/SeatAllocationForm';
import StudentFind from '../StudentFind/StudentFind';
import Splash from '../Splash/Splash';
const HomeTop = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            // setCount('Timeout called!');
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            {loading ? <Splash></Splash> : <div className='p-24'>
                <div className='flex justify-center items-center gap-10'>
                    <div>
                        <Image
                            src={logo}
                            height={160}

                        ></Image>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-sky-500 pb-4">Sheikh Hasina Hall</h3>
                        <h4 className="text-5xl font-bold text-sky-500">Comilla University</h4>
                    </div>
                </div>
                <div className="divider divider-info text-3xl text-black font-semibold pt-16 mx-44 ps-20">Quick Links</div>
                <div className='flex justify-center py-10 ps-16'>
                    <Cards></Cards>
                </div>
                <div className="divider divider-info text-3xl text-black font-semibold  mx-44 ps-20">Seat Allocation Form</div>
                <div className='ps-12 py-10'>
                    <SeatAllocationForm></SeatAllocationForm>
                </div>
                <div className="divider divider-info text-3xl text-black font-semibold  mx-44 ps-20">Find A Student</div>
                <div className='py-10'>
                    <StudentFind></StudentFind>
                </div>
            </div>}
        </div>
    );
};

export default HomeTop;