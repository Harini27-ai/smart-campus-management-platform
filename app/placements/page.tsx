"use client";
import Navbar from "@/components/Navbar";
import { PLACEMENTS } from "@/lib/demo-data";
import { useState } from "react";

export default function Placements(){
 const [applied,setApplied]=useState<string[]>([]);
 return <><Navbar/><main className="container py-10"><h1 className="text-4xl font-black">Placement Opportunities</h1><p className="text-slate-500 mt-2">Explore companies and apply for eligible roles.</p><div className="space-y-4 mt-8">{PLACEMENTS.map(p=><div className="card p-6 flex flex-col md:flex-row justify-between gap-5" key={p.id}><div><h2 className="text-xl font-black">{p.company}</h2><p className="text-campus-600 font-bold mt-1">{p.role}</p><div className="flex flex-wrap gap-2 mt-4"><span className="badge bg-slate-100 dark:bg-slate-800">CTC {p.ctc}</span><span className="badge bg-slate-100 dark:bg-slate-800">{p.eligibility}</span><span className="badge bg-slate-100 dark:bg-slate-800">Deadline {p.deadline}</span></div></div><button className="btn btn-primary md:w-32 h-fit" onClick={()=>setApplied([...applied,p.id])}>{applied.includes(p.id)?"Applied ✓":"Apply"}</button></div>)}</div></main></>
}
