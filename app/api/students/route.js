import { NextResponse,NextRequest } from "next/server";
import Student from "../../../models/student";

export async function POST(request) {
    // connectMongoDB();
    const formData = await request.json()
//   const name = formData.get('name')
    const { name } = formData;
    
    const student = await Student.create({ name });
    
    // await student.save();
    
    return NextResponse.json({
        message: 'Student created successfully!',
        student,


    }); 
    }


export async function GET(req) {
    const students = await Student.find({});
    return NextResponse.json({
        message: 'Students fetched successfully!',
        students,
    });
}

