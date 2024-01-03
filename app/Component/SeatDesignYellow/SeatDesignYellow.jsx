'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SeatDesignYellow = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (event) => {
        event.preventDefault()
        setImageFile(event.target.files[0]);
    };
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
    return (
        <div className='py-6'>
            <div className='flex flex-col cursor-pointer' onClick={() => document.getElementById('AvailableSeatModal').showModal()}>
                <div className='w-[100px] h-[12px] mx-auto rounded-b-2xl ' style={{ backgroundColor: 'rgba(255, 194, 37, 1)' }}>

                </div>
                <div className='w-[90px] h-[149px] mx-auto -mt-1' style={{ backgroundColor: 'rgba(255, 194, 37, 1)' }}>

                    <h2 className='text-center text-black font-semibold py-4'>1-W</h2>
                </div>
                <div className='w-[100px] h-[12px] mx-auto -mt-1  rounded-t-2xl' style={{ backgroundColor: 'rgba(255, 194, 37, 1)' }}>

                </div>
            </div>


            <dialog id="AvailableSeatModal" className="modal">
                <div className="modal-box  w-4/5 max-w-3xl h-full">
                    <h3 className='text-info pb-3 font-semibold'>Sheikh Hasina Hall | Room-104 | Seat-A</h3>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex justify-center items-end gap-20 pb-4'>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Student Name</span>

                                </div>
                                <input type="text" placeholder="Type here" className={`input input-bordered ${errors.studentName ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("studentName", { required: true })} />
                                {errors.studentName && errors.studentName.type === "required" && <span className='text-error'>student Name required</span>}

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Date Of Birth</span>

                                </div>
                                <input type="date" placeholder="Type here" className={`input input-bordered ${errors.dateOfBirth ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("dateOfBirth", { required: true })} />
                                {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span className='text-error'>date Of Birth  required</span>}

                            </label>
                        </div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Students Permanent Address</span>

                            </div>
                            <input type="text" placeholder="Type here" className={`input input-bordered ${errors.StudentPermanentAddress ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("StudentPermanentAddress", { required: true })} />
                            {errors.StudentPermanentAddress && errors.StudentPermanentAddress.type === "required" && <span className='text-error'>Student Permanent Address required</span>}
                        </label>
                        <div className='grid grid-cols-2 gap-12'>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Student Image</span>

                                </div>
                                <div >
                                    <input type="file" placeholder="Image" className={`file-input file-input-bordered ${errors.image ? 'file-input-error' : 'file-input-info'}  w-full bg-sky-100 text-black`} onChange={handleFileChange} {...register("image", { required: true })} />
                                    {errors.image && errors.image.type === "required" && <span className='text-error'>Student image required</span>}

                                </div>

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Blood Group</span>

                                </div>
                                <select className="select select-info w-full bg-sky-100" placeholder='Blood Group' {...register("bloodGroup", { required: true })}>
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
                        <div className='grid grid-cols-2 gap-12'>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Phone Number</span>

                                </div>
                                <input type="number" placeholder="Type here" className={`input input-bordered ${errors.phoneNumber ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("phoneNumber", { required: true })} />
                                {errors.phoneNumber && errors.phoneNumber.type === "required" && <span className='text-error'>Phone Number required</span>}
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Special Skill</span>

                                </div>
                                <input type="text" placeholder="Type here" className={`input input-bordered ${errors.specialSkill ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("specialSkill", { required: true })} />
                                {errors.specialSkill && errors.specialSkill.type === "required" && <span className='text-error'>special Skill required</span>}
                            </label>
                        </div>


                        <div className='grid grid-cols-2 gap-12'>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Department</span>

                                </div>
                                <input type="text" placeholder="Type here" className={`input input-bordered ${errors.department ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("department", { required: true })} />
                                {errors.department && errors.department.type === "required" && <span className='text-error'>department required</span>}
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Session</span>

                                </div>
                                <input type="text" placeholder="Type here" className={`input input-bordered ${errors.session ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("session", { required: true })} />
                                {errors.session && errors.session.type === "required" && <span className='text-error'>session required</span>}
                            </label>
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Registration/ID</span>

                                </div>
                                <input type="text" placeholder="Type here" className={`input input-bordered ${errors.regId ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`} {...register("regId", { required: true })} />
                                {errors.regId && errors.regId.type === "required" && <span className='text-error'>Registration/ID required</span>}
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Allocation Date</span>

                                </div>
                                <input type="date" placeholder="Type here"
                                    className={`input input-bordered ${errors.allocateDate ? 'input-error' : 'input-info'}  w-full bg-sky-100 text-black`}
                                    {...register("allocateDate", { required: true })} />
                                {errors.allocateDate && errors.allocateDate.type === "required" && <span className='text-error'>allocate Date required</span>}
                            </label>
                        </div>
                    </form>
                    <div className="modal-action flex justify-center">
                        <form method="dialog" className='flex justify-center gap-8'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" w-[136px] h-[40px]  bg-sky-400 rounded-md px-10 hover:bg-sky-400">Close</button>
                            <button className="w-[145px] h-[40px] rounded-md bg-black hover:bg-black text-white " onClick={handleSubmit(onSubmit)}>Allocate</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default SeatDesignYellow;