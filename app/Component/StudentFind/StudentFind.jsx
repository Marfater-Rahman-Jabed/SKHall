"use client"
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import defaultLogo from '@/app/Assets/coulogo.jpeg'
import Image from 'next/image';
const StudentFind = () => {
    return (
        <div className=''>
            <div className='flex justify-between gap-8 px-16'>
                <label className="form-control w-full max-w-sm">

                    <input type="text" placeholder="Student's Name" className="input input-bordered input-info w-full max-w-sm " />

                </label>
                <label className="form-control w-36">

                    <input type="text" placeholder="Department" className="input input-bordered input-info w-36" />

                </label>
                <label className="form-control w-36">

                    <input type="text" placeholder="Session" className="input input-bordered input-info w-36" />

                </label>
                <label className="form-control w-full max-w-sm">

                    <input type="text" placeholder="Sheikh Hasina Hall" className="input input-bordered input-info w-full max-w-sm" />

                </label>
                <div className='btn bg-black hover:bg-black text-white px-10'>
                    <button className='px-2'>Search</button>
                    <IoIosSearch className='text-xl'></IoIosSearch>
                </div>
            </div>
            <div className='py-16'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-sky-300  text-black'>

                                <th className='border-4 border-white'>Students Name</th>
                                <th className='border-4 border-white'>Department</th>
                                <th className='border-4 border-white'>Session</th>
                                <th className='border-4 border-white'>ID</th>
                                <th className='border-4 border-white'>Hall Name</th>
                                <th className='border-4 border-white'>Room No</th>
                                <th className='border-4 border-white'>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className='bg-purple-200 text-black'>

                                <td className='border-4 border-white'>ABC</td>
                                <td className='border-4 border-white'>ICT</td>
                                <td className='border-4 border-white'>2019-20</td>
                                <td className='border-4 border-white'>12009000</td>
                                <td className='border-4 border-white'>Sheikh Hasina Hall</td>
                                <td className='border-4 border-white'>101</td>
                                <td className='border-4 border-white text-blue-500'><button className="" onClick={() => document.getElementById('my_modal_2').showModal()}>Click</button></td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box  w-4/5 max-w-3xl h-full">
                    <div className='flex justify-center items-end gap-20 pb-4'>
                        <div >
                            <Image src={defaultLogo}
                                height={150}
                                width={150}
                            ></Image>

                        </div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Students Name</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Phone Number</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Date of Birth</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Blood Group</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Special Skill</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Students Permanent Address</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                    </label>
                    <div className='grid grid-cols-2 gap-10'>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Hall Name</span>

                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                            </label>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Room No</span>

                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Seat No</span>

                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Department</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Session</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Registration/ID</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Allocation Date</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default StudentFind;