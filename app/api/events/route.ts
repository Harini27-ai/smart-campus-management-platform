import { NextResponse } from "next/server";
import { EVENTS } from "@/lib/demo-data";
export async function GET(){return NextResponse.json(EVENTS);}
export async function POST(req:Request){const body=await req.json();return NextResponse.json({ok:true,event:{id:"new-"+Date.now(),...body}},{status:201});}
