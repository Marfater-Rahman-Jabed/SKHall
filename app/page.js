
import { useEffect } from "react";
import HomeTop from "./Component/HomeTop/HomeTop";
import connectMongoDB from "@/libs/db";

export default function Home() {
  useEffect(() => {
    connectMongoDB();
  }
    , [])
    
  return (
    <main className=" ">
      <HomeTop></HomeTop>

    </main>
  )
}
