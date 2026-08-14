"use client";
import Navbar from "@/components/Navbar";
import { EVENTS } from "@/lib/demo-data";
import { useState } from "react";

export default function Events(){
 const [events,setEvents]=useState(EVENTS); const [message,setMessage]=useState("");
 function register(id:string){setEvents(events.map(e=>e.id===id?{...e,registered:Math.min(e.seats,e.registered+1)}:e));setMessage("Registration successful! Your demo QR ticket is ready.");}
 return <><Navbar/><main className="container py-10"><h1 className="text-4xl font-black">Campus Events</h1><p className="text-slate-500 mt-2">Register for upcoming campus events.</p>{message&&<div className="mt-5 rounded-xl bg-green-100 text-green-800 p-4">{message}</div>}<div className="grid md:grid-cols-3 gap-5 mt-8">{events.map(e=><div className="card overflow-hidden" key={e.id}><div className="h-32 bg-gradient-to-r from-campus-500 to-campus-700 grid place-items-center text-5xl">🎤</div><div className="p-6"><h2 className="text-xl font-black">{e.title}</h2><p className="text-slate-500 mt-2">{e.description}</p><div className="text-sm mt-4 space-y-1"><p>📍 {e.venue}</p><p>📅 {e.date}</p><p>👥 {e.registered}/{e.seats} registered</p></div><button disabled={e.registered>=e.seats} onClick={()=>register(e.id)} className="btn btn-primary w-full mt-5">{e.registered>=e.seats?"Full":"Register"}</button></div></div>)}</div></main></>
}
