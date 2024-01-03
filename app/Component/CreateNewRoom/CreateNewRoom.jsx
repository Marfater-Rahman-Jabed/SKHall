"use client"
import React, { useState } from 'react';
// import { TiTick } from 'react-icons/ti';
import { FiPlus } from "react-icons/fi";
import { useForm } from 'react-hook-form';

const CreateNewRoom = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [seatNumber, setSeatNumber] = useState(4)
    const ListSeat = Array(seatNumber).fill('seatNo')
    // console.log(typeof (seatNumber), ListSeat)
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className=' px-36'>
            <div className="divider divider-info text-3xl text-black font-semibold py-10 px-10">Create New Room</div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <div className='grid grid-cols-2 gap-20'>
                    <label className="form-control w-80 ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Room Number</span>

                        </div>
                        <input type="text" placeholder="Type here" className={`input input-bordered ${errors.roomNumber ? 'input-error' : 'input-info'}  
                        w-full`} {...register("roomNumber", { required: true })} />
                        {errors.roomNumber && errors.roomNumber.type === "required" && <span className='text-error'>Room Number required</span>}

                    </label>
                    <label className="form-control w-80 ">
                        <div className="label">
                            <span className="label-text font-semibold text-info">Room Type</span>

                        </div>
                        <select className="select select-info w-80" placeholder='Seat Number' onChange={(e) => setSeatNumber(parseInt(e.target.value))}  >
                            <option disabled defaultValue={''}>Select Room Type</option>
                            <option value={4}>Four Seat</option>
                            <option value={6}>Six Seat</option>
                            <option value={8}>Eight Seat</option>



                        </select>

                    </label>
                </div>
                <h3 className=' py-3 text-lg  text-info font-semibold'>List of Seat</h3>
                <div className='grid grid-cols-2 gap-4 gap-x-20'>
                    {
                        ListSeat.map((seat, i) => <div key={i}>
                            <label className="form-control w-80 " >

                                <input type="text" placeholder="Type here" className="input input-bordered input-info w-80" {...register(`${seat}${i + 1}`, { required: true })} />

                            </label>
                        </div>)

                    }


                </div>


                <div className='flex justify-center py-16' onClick={handleSubmit(onSubmit)}>
                    <div className='bg-black hover:bg-black btn  text-white px-16 btn-md'>
                        <input type="submit" value={'Add'} className='px-2 cursor-pointer' />
                        <FiPlus className='text-xl'></FiPlus>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateNewRoom;