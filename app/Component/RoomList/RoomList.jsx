import Link from 'next/link';
import React from 'react';

const RoomList = () => {
    const newArray = Array.from(Array(10))
    // console.log(newArray.length)
    return (
        <div>
            <div className="divider divider-info text-3xl text-black font-semibold  mx-52  pt-10 pb-4">Room List</div>
            <div className="pe-4 pb-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-sky-300'>

                            <th className='w-[400px] h-[8px] border-4 border-solid border-white font-semibold  text-black text-start'>Room Number</th>
                            <th className='w-[400px] h-[8px] border-4 border-solid border-white font-semibold  text-black text-start'>No Of Seats</th>
                            <th className='w-[400px] h-[8px] border-4 border-solid border-white font-semibold  text-black text-start'>Available Seats</th>
                            <th className='w-[400px] h-[8px] border-4 border-solid border-white font-semibold  text-black text-start'>Booked Seats</th>
                            <th className='w-[400px] h-[8px] border-4 border-solid border-white font-semibold  text-black text-start'>View Room</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            newArray.map((ele, i) => <tr style={{ backgroundColor: '#EBEBEB' }} className=" text-black" key={i}>

                                <td className='border-4 h-[8px] border-white'>101</td>
                                <td className='border-4 h-[8px] border-white'>4</td>
                                <td className='border-4 h-[8px] border-white'>W-1</td>
                                <td className='border-4 h-[8px] border-white'>W-2,D-1,D-2</td>
                                <td className='border-4 h-[8px] border-white text-blue-600'><Link href={'/ViewRoom'}>View</Link></td>
                            </tr>)
                        }






                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RoomList;