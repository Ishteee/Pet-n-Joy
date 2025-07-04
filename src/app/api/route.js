import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const session = await getServerSession(authOptions);

    return NextResponse.json({authenticated: !!session})
}