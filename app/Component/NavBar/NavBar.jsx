import Image from 'next/image';
import React from 'react';
import Logo from '@/app/Assets/coulogo.jpeg'
const NavBar = () => {
    return (
        <div className="bg-sky-400 shadow-lg py-4 flex justify-start items-center gap-12 px-16">
            <div>
                <Image src={Logo}
                    height={90}
                    width={90}
                    className='rounded-full'
                    alt='coulogo'
                ></Image>
            </div>
            <div>
                <h3 className='text-4xl font-bold text-white'>Sheikh Hasina Hall, Comilla University</h3>
            </div>
        </div>
    );
};

export default NavBar;