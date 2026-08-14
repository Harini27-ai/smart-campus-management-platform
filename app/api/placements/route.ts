import { NextResponse } from "next/server";
import { PLACEMENTS } from "@/lib/demo-data";
export async function GET(){return NextResponse.json(PLACEMENTS);}
export async function POST(req:Request){const body=await req.json();return NextResponse.json({ok:true,placement:{id:"new-"+Date.now(),...body}},{status:201});}
