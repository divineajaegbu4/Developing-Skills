import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
            "Content-Type": "application/json",
            // "API-KEY": process.env.DATA_API_KEY as string
        },
    })

    const data = res.json();
    console.log("data", data)

    return NextResponse.json({ data });
}