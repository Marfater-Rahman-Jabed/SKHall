import React from 'react';
import defaultLogo from '@/app/Assets/coulogo.jpeg'
import Image from 'next/image';
const SeatDesign = () => {
    return (
        <div className='py-6' >
            <div className='flex flex-col cursor-pointer' onClick={() => document.getElementById('AllocateModal').showModal()}>
                <div className='w-[100px] h-[12px] mx-auto rounded-b-2xl ' style={{ backgroundColor: 'rgba(11, 147, 82, 1)' }}>

                </div>
                <div className='w-[90px] h-[149px] mx-auto -mt-1' style={{ backgroundColor: 'rgba(11, 147, 82, 1)' }}>

                    <h2 className='text-center text-white font-semibold py-4'>1-W</h2>
                </div>
                <div className='w-[100px] h-[12px] mx-auto -mt-1  rounded-t-2xl' style={{ backgroundColor: 'rgba(11, 147, 82, 1)' }}>

                </div>
            </div>




            <dialog id="AllocateModal" className="modal">
                <div className="modal-box  w-4/5 max-w-3xl h-full">
                    <h3 className='text-info pb-3 font-semibold'>Sheikh Hasina Hall | Room-104 | Seat-A</h3>
                    <div className='flex justify-center items-end gap-20 pb-4'>
                        <div >
                            <Image src={defaultLogo}
                                height={150}
                                width={150}
                                alt='coulogo'
                            ></Image>

                        </div>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Students Name</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Phone Number</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Date of Birth</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Blood Group</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Special Skill</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <label className="form-control w-full h-[80px]">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Students Permanent Address</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                    </label>
                    <div className='grid grid-cols-2 gap-10'>
                        <div>
                            <label className="form-control w-full h-[80px]">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Hall Name</span>

                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                            </label>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <label className="form-control w-full h-[80px]">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Room No</span>

                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                            </label>
                            <label className="form-control w-full h-[80px]">
                                <div className="label">
                                    <span className="label-text font-semibold text-info">Seat No</span>

                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Department</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Session</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Registration/ID</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                        <label className="form-control w-full h-[80px]">
                            <div className="label">
                                <span className="label-text font-semibold text-info">Allocation Date</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full bg-sky-300 text-black" value={'01827717200'} readOnly />

                        </label>
                    </div>
                    <div className="modal-action flex justify-center">
                        <form method="dialog" className='flex justify-center gap-8'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" w-[136px] h-[40px]  bg-sky-400 rounded-md px-10 hover:bg-sky-400">Close</button>
                            <button className="w-[145px] h-[40px] rounded-md bg-black hover:bg-black text-white ">Cancel Allocation</button>
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

export default SeatDesign;