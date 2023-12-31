"use client"
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const RoomView = () => {
    return (
        <div className='flex justify-center px-32'>
            <div>
                <div className='flex justify-center gap-10  pt-6 pb-3'>
                    <label className="form-control w-[400px] ">


                        <select className="select select-info w-[400px]" placeholder='Room Number'>
                            <option disabled selected>Room Number</option>
                            <option>101</option>
                            <option>102</option>
                            <option>201</option>
                            <option>202</option>
                            <option>301</option>
                            <option>302</option>
                            <option>401</option>
                            <option>402</option>



                        </select>

                    </label>
                    <div className='btn bg-black hover:bg-black text-white px-10'>
                        <button className='px-2'>Search</button>
                        <IoIosSearch className='text-xl'></IoIosSearch>
                    </div>
                </div>
                <div className="divider divider-info text-2xl text-black font-semibold mx-32  pt-6 pb-8 ">Room Status</div>


                <div className=' pb-16'>
                    <div className='border-2 border-solid rounded-lg border-sky-700  w-[780px] h-[490px] '>

                    </div>
                    <div className='flex justify-center py-3'>
                        <h3 className='text-sky-600 font-semibold'>Room Number - 104 | Type- Six Bed </h3>
                    </div>
                    <div className='flex justify-center gap-4 py-1'>
                        <div className='flex justify-center items-center gap-1'>
                            <MdCheckBoxOutlineBlank className='bg-green-500 text-xl'></MdCheckBoxOutlineBlank>
                            <h3>Reserved</h3>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <MdCheckBoxOutlineBlank className='bg-yellow-500 text-xl'></MdCheckBoxOutlineBlank>
                            <h3>Available</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomView;