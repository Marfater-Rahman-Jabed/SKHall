'use client'
import Link from "next/link";
import NavBar from "../Component/NavBar/NavBar";
import Splash from "../Component/Splash/Splash";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const DashBoardlayout = ({ children }) => {
    const pathname = usePathname()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            // setCount('Timeout called!');
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? <Splash></Splash> : <section className="">
                <NavBar></NavBar>
                <div className=" flex ">
                    <div className="  pr-6 pt-2">
                        <nav className="flex flex-col bg-sky-400 min-h-full w-60 rounded-tr-lg px-6">
                            <ul role="list" className="flex flex-1 flex-col gap-y-8 text-start ">

                                <Link href={'/RoomList'} className={`mt-10 w-44 border-2 border-solid border-black py-1 rounded-md ${pathname.startsWith("/RoomList") ? "bg-white border-white" : "border-black"}`}>
                                    <li className=" px-3  ">Room List</li>
                                </Link>
                                <Link href={'/AllocateSeat'} className={` w-44 border-2 border-solid border-black py-1 rounded-md ${pathname.startsWith("/AllocateSeat") ? "bg-white border-white" : "border-black"}`}>
                                    <li className=" px-3  ">Allocate Seat</li>
                                </Link>
                                <Link href={'/ViewRoom'} className={` w-44 border-2 border-solid border-black py-1 rounded-md ${pathname.startsWith("/ViewRoom") ? "bg-white border-white" : "border-black"}`}>
                                    <li className=" px-3  ">View Room</li>
                                </Link>
                                <Link href={'/Createroom'} className={` w-44 border-2 border-solid border-black py-1 rounded-md ${pathname.startsWith("/Createroom") ? "bg-white border-white" : "border-black"}`}>
                                    <li className=" px-3  ">Create New Room</li>
                                </Link>
                                <div className="bg-white py-[1px] w-44">

                                </div>
                                <Link href={'/'} className=" w-44 border-2 border-solid border-white text-white py-1 rounded-md ">
                                    <li className=" px-3  ">Home</li>
                                </Link>





                            </ul>
                        </nav>
                    </div>
                    <main>
                        {
                            children
                        }
                    </main>
                </div>
            </section>
            }
        </div>
    );
};

export default DashBoardlayout;