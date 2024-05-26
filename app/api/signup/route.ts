import dbConnect from '../../lib/dbConnect';
import UserInformation from '../../models/UserInformation';


import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    
  await dbConnect();

  try
  {
    const body = await req.json();

    await UserInformation.create({ 
      name:  body.name, 
      age: body.age, 
      email: body.email, 
      username: body.username, 
      password: body.password,
      credits: 500,
    });


    return NextResponse.json({ data: "User Successfully Created. Please Login"});
  }
  catch(error)
  {
    console.log(error);
    return NextResponse.json({data:"Error Same Username/Email Exists"});
  }


  
  }