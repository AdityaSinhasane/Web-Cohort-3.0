import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
    //Ideally we should check the usernama and password in the DB and only if it is right we should return the JWT token

    const body = await req.json();

    const username = body.username;
    const password = body.password;
    //check in the DB

    const userId = 1;
    const token = jwt.sign({
        userId
    }, "SECRET");

    return NextResponse.json({
        token
    });

}