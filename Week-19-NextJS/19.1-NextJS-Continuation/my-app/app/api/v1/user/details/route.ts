import { NextResponse } from "next/server";


export function GET(){
    return NextResponse.json({
        user: "Harkirat",
        email: "harkirat@gmail.com"
    });
}

export function POST(){
    return NextResponse.json({
        user: "Harkirat",
        email: "harkirat@gmail.com"
    });
}

export function PUT(){
    return NextResponse.json({
        user: "Harkirat",
        email: "harkirat@gmail.com"
    });
}


export function DELETE(){
    return NextResponse.json({
        user: "Harkirat delete",
        email: "harkirat@gmail.com"
    });
}