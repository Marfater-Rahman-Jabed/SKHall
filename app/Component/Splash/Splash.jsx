import React from 'react';
import splashes from '@/app/Assets/splash.png'
import Image from 'next/image';
const Splash = () => {
    return (
        <div className=' h-[100vh] w-full bg-sky-400 flex justify-center items-center'>
            <div className=''>
                <Image
                    src={splashes}
                    height={240}
                    width={240}
                    className='rounded-full'
                    alt='splash'
                ></Image>
            </div>
        </div>
    );
};

export default Splash;