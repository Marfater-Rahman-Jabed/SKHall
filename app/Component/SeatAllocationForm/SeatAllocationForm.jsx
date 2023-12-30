"use client"
import React from 'react';
import { TiTick } from "react-icons/ti";

const SeatAllocationForm = () => {
    return (
        <div className='px-36 '>
            <form action="">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold text-info">Hall Name</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                </label>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Room Number</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Room Number'>
                            <option disabled selected>Select Room Number</option>
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
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Seat Number</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Seat Number'>
                            <option disabled selected>Select Seat Number</option>
                            <option>W-1</option>
                            <option>1-W</option>
                            <option>W-2</option>
                            <option>2-W</option>
                            <option>D-1</option>
                            <option>D-2</option>


                        </select>

                    </label>
                </div>
                <h3 className='text-center py-6 text-xl text-info font-semibold'>Student Details</h3>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Student Name</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Date Of Birth</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                </div>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold text-info">Students Permanent Address</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                </label>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Student Image</span>

                        </div>
                        <div className='flex justify-between gap-2'>
                            <input type="text" placeholder="Image" className="input input-bordered input-info w-full" readOnly />
                            <button className='btn btn-md btn-info'>Browse</button>
                        </div>

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Blood Group</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Blood Group'>
                            <option disabled selected>Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>

                        </select>

                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Phone Number</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Special Skill</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Department</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Session</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Registration/ID</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Date of Allocation</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />

                    </label>
                </div>
                <div className='flex justify-center py-16'>
                    <div className='bg-black hover:bg-black btn  text-white px-10 btn-md'>
                        <input type="submit" value={'Save'} className='px-2' />
                        <TiTick className='text-xl'></TiTick>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SeatAllocationForm;