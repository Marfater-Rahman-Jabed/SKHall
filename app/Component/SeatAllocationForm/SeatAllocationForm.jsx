"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TiTick } from "react-icons/ti";

const SeatAllocationForm = () => {
    const { register, handleSubmit } = useForm()
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (event) => {
        event.preventDefault()
        setImageFile(event.target.files[0]);
    };
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='px-36 '>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold text-info">Hall Name</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" {...register("hallName")} />

                </label>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Room Number</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Room Number' {...register("roomNumber")}>
                            <option disabled defaultValue={''}>Select Room Number</option>
                            <option value={'101'}>101</option>
                            <option value={'102'}>102</option>
                            <option value={'201'}>201</option>
                            <option value={'202'}>202</option>
                            <option value={'301'}>301</option>
                            <option value={'302'}>302</option>
                            <option value={'401'}>401</option>
                            <option value={'402'}>402</option>

                        </select>

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Seat Number</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Seat Number' {...register("seatNumber")}>
                            <option disabled defaultValue={''}>Select Seat Number</option>
                            <option value={'W-1'}>W-1</option>
                            <option value={'1-W'}>1-W</option>
                            <option value={'W-2'}>W-2</option>
                            <option value={'2-W'}>2-W</option>
                            <option value={'D-1'}>D-1</option>
                            <option value={'D-2'}>D-2</option>


                        </select>

                    </label>
                </div>
                <h3 className='text-center py-6 text-xl text-info font-semibold'>Student Details</h3>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Student Name</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" {...register("studentName")} />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Date Of Birth</span>

                        </div>
                        <input type="date" placeholder="Type here" className="input input-bordered input-info w-full" {...register("dateOfBirth")} />

                    </label>
                </div>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold text-info">Students Permanent Address</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" {...register("studentPermanentAddress")} />

                </label>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Student Image</span>

                        </div>
                        <div className='flex justify-between gap-2'>
                            <input type="file" placeholder="Image" className="file-input file-input-bordered file-input-info w-full" onChange={handleFileChange} />
                            <button type='button' className='btn btn-md btn-info' onClick={() => document.querySelector('input[type="file"]').click()}>Browse</button>
                        </div>

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Blood Group</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Blood Group' {...register("bloodGroup")}>
                            <option disabled defaultValue={''}>Blood Group</option>
                            <option value={'A+'}>A+</option>
                            <option value={'A-'}>A-</option>
                            <option value={'B+'}>B+</option>
                            <option value={'B-'}>B-</option>
                            <option value={'O+'}>O+</option>
                            <option value={'O-'}>O-</option>
                            <option value={'AB+'}>AB+</option>
                            <option value={'AB-'}>AB-</option>

                        </select>

                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Phone Number</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-info w-full" {...register("phoneNumber")} />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Special Skill</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" {...register("SpecialSkill")} />

                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Department</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" {...register("department")} />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Session</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" {...register("session")} />

                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Registration/ID</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" {...register("regId")} />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Date of Allocation</span>

                        </div>
                        <input type="date" placeholder="Type here" className="input input-bordered input-info w-full" {...register("allocationDate")} />

                    </label>
                </div>
                <div className='flex justify-center py-16 cursor-pointer' onClick={handleSubmit(onSubmit)}>
                    <div className='bg-black hover:bg-black btn  text-white px-10 btn-md'>
                        <input type="submit" value={'Save'} className='px-2 cursor-pointer' />
                        <TiTick className='text-xl'></TiTick>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SeatAllocationForm;