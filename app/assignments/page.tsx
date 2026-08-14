"use client";
import Navbar from "@/components/Navbar";
import { ASSIGNMENTS } from "@/lib/demo-data";
import { useState } from "react";

export default function Assignments(){
 const [items,setItems]=useState(ASSIGNMENTS); const [selected,setSelected]=useState<string|null>(null);
 function submit(id:string){setItems(items.map(x=>x.id===id?{...x,status:"Submitted",marks:"Pending"}:x));setSelected(null);}
 return <><Navbar/><main className="container py-10"><div className="flex justify-between items-end"><div><h1 className="text-4xl font-black">Assignments</h1><p className="text-slate-500 mt-2">Track deadlines and submit your work.</p></div><span className="badge bg-campus-100 text-campus-700">{items.filter(x=>x.status==="Pending").length} pending</span></div><div className="space-y-4 mt-8">{items.map(a=><div className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-5" key={a.id}><div><p className="text-sm text-campus-600 font-bold">{a.subject}</p><h2 className="text-xl font-black mt-1">{a.title}</h2><p className="text-slate-500 mt-2">Deadline: {a.deadline}</p></div><div className="flex items-center gap-3"><span className="badge bg-slate-100 dark:bg-slate-800">{a.status}</span>{a.status==="Pending"&&<button className="btn btn-primary" onClick={()=>setSelected(a.id)}>Submit</button>}</div>{selected===a.id&&<div className="fixed inset-0 bg-black/40 grid place-items-center p-5 z-50"><div className="card p-7 w-full max-w-md"><h3 className="text-xl font-black">Submit assignment</h3><p className="text-slate-500 mt-2">Demo submission — no file upload is required.</p><input className="input mt-5" placeholder="GitHub link (optional)"/><div className="flex gap-2 mt-5"><button className="btn btn-primary" onClick={()=>submit(a.id)}>Submit now</button><button className="btn btn-ghost" onClick={()=>setSelected(null)}>Cancel</button></div></div></div>}</div>)}</div></main></>
}
