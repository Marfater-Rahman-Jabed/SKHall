import SeatAllocationForm from '@/app/Component/SeatAllocationForm/SeatAllocationForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="divider divider-info text-3xl text-black font-semibold  mx-44 pt-10 pb-8">Seat Allocation Form</div>
            <SeatAllocationForm></SeatAllocationForm>
        </div>
    );
};

export default page;