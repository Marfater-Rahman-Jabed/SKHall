"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TiTick } from "react-icons/ti";

const SeatAllocationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
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
                    <input id="hallName" type="text" placeholder="Type here" className={`input input-bordered ${errors.hallName ? 'input-error' : 'input-info'}  w-full`} {...register("hallName", { required: true })} />
                    {errors.hallName && errors.hallName.type === "required" && <span className='text-error'>This is required</span>}
                </label>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Room Number</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Room Number' {...register("roomNumber", { required: true })} required>
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
                        <select className="select select-info w-full" placeholder='Seat Number' {...register("seatNumber", { required: true })} required>
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
                        <input id="studentName" type="text" placeholder="Type here" className={`input input-bordered ${errors.studentName ? 'input-error' : 'input-info'}  w-full`} {...register("studentName", { required: true })} />
                        {errors.studentName && errors.studentName.type === "required" && <span className='text-error'>This is required</span>}
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Date Of Birth</span>

                        </div>
                        <input id="dateOfBirth" type="date" placeholder="Type here" className={`input input-bordered ${errors.dateOfBirth ? 'input-error' : 'input-info'}  w-full`} {...register("dateOfBirth", { required: true })} />
                        {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span className='text-error'>This is required</span>}
                    </label>
                </div>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold text-info">Students Permanent Address</span>

                    </div>
                    <input id="studentPermanentAddress" type="text" placeholder="Type here" className={`input input-bordered ${errors.studentPermanentAddress ? 'input-error' : 'input-info'}  w-full`} {...register("studentPermanentAddress", { required: true })} />
                    {errors.studentPermanentAddress && errors.studentPermanentAddress.type === "required" && <span className='text-error'>This is required</span>}
                </label>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Student Image</span>

                        </div>
                        <div className='flex justify-between gap-2'>
                            <input id="image" type="file" placeholder="Image" className={`file-input file-input-bordered ${errors.image ? 'file-input-error' : 'file-input-info'}  w-full`} onChange={handleFileChange} {...register("image", { required: true })} accept='image/*' />
                            <button type='button' className='btn btn-md btn-info' onClick={() => document.querySelector('input[type="file"]').click()}>Browse</button>
                        </div>
                        {errors.image && errors.image.type === "required" && <span className='text-error'>This is required</span>}

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Blood Group</span>

                        </div>
                        <select className="select select-info w-full" placeholder='Blood Group' {...register("bloodGroup", { required: true })} >
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
                        <input id="phoneNumber" type="number" placeholder="Type here" className={`input input-bordered ${errors.phoneNumber ? 'input-error' : 'input-info'}  w-full`} {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && errors.phoneNumber.type === "required" && <span className='text-error'>This is required</span>}
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Special Skill</span>

                        </div>
                        <input id="SpecialSkill" type="text" placeholder="Type here" className={`input input-bordered ${errors.SpecialSkill ? 'input-error' : 'input-info'}  w-full`} {...register("SpecialSkill", { required: true })} />
                        {errors.SpecialSkill && errors.SpecialSkill.type === "required" && <span className='text-error'>This is required</span>}
                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Department</span>

                        </div>
                        <input id="department" type="text" placeholder="Type here" className={`input input-bordered ${errors.department ? 'input-error' : 'input-info'}  w-full`} {...register("department", { required: true })} />
                        {errors.department && errors.department.type === "required" && <span className='text-error'>This is required</span>}
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Session</span>

                        </div>
                        <input id="session" type="text" placeholder="Type here" className={`input input-bordered ${errors.session ? 'input-error' : 'input-info'}  w-full`} {...register("session", { required: true })} />
                        {errors.session && errors.session.type === "required" && <span className='text-error'>This is required</span>}
                    </label>
                </div>
                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Registration/ID</span>

                        </div>
                        <input id="regId" type="text" placeholder="Type here" className={`input input-bordered ${errors.regId ? 'input-error' : 'input-info'}  w-full`} {...register("regId", { required: true })} />
                        {errors.regId && errors.regId.type === "required" && <span className='text-error'>This is required</span>}
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Date of Allocation</span>

                        </div>
                        <input id="allocationDate" type="date" placeholder="Type here" className={`input input-bordered ${errors.allocationDate ? 'input-error' : 'input-info'}  w-full`} {...register("allocationDate", { required: true })} />
                        {errors.allocationDate && errors.allocationDate.type === "required" && <span className='text-error'>This is required</span>}
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