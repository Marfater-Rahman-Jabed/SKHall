import React from 'react';
import styles from '@/app/styles/cards.modules.css'
import logo from '@/app/Assets/halllogo.png'
import Link from 'next/link';
const Cards = () => {
    return (
        <div>
            <div className="cardss w-80 h-32 mb-6">
                <div className="cardss w-80 h-32" style={{ backgroundImage: `url("https://i.ibb.co/7tCPNV3/halllogo.png")` }}>

                </div>
                <Link href={'/RoomList'} className="overlays">
                    <h3 className="text-2xl font-bold text-center uppercase text-black pb-2">Sheikh Hasina Hall</h3>
                    <h3 className="text-xl  text-center text-black">Total Room : 100</h3>
                    <h3 className="text-xl  text-center text-black">Total Students : 400</h3>


                </Link>

            </div>
        </div>
    );
};

export default Cards;