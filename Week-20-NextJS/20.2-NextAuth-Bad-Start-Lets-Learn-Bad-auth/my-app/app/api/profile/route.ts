import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){
   
    return NextResponse.json({
            avatarUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    });
}