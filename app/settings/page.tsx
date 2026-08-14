"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Settings(){
 const [saved,setSaved]=useState(false); const [name,setName]=useState("Campus User");
 return <><Navbar/><main className="container py-10 max-w-4xl"><h1 className="text-4xl font-black">Settings</h1><div className="card p-7 mt-7"><h2 className="text-xl font-black">Profile</h2><div className="grid md:grid-cols-2 gap-5 mt-5"><label>Name<input className="input mt-2" value={name} onChange={e=>setName(e.target.value)}/></label><label>Department<select className="select mt-2"><option>Computer Science</option><option>CSBS</option><option>Information Technology</option></select></label></div><button className="btn btn-primary mt-5" onClick={()=>setSaved(true)}>Save changes</button>{saved&&<p className="text-green-600 mt-3">Saved successfully.</p>}</div><div className="card p-7 mt-5"><h2 className="text-xl font-black">Notification preferences</h2><div className="space-y-4 mt-5">{["Assignment reminders","Attendance alerts","Event reminders","Placement updates"].map(x=><label className="flex items-center gap-3" key={x}><input type="checkbox" defaultChecked/> {x}</label>)}</div></div></main></>
}
