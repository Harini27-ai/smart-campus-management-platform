"use client";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard(){
 const {data:session,status}=useSession();
 if(status==="loading")return <div className="container py-10">Loading...</div>;
 const role=session?.user?.role||"student";
 const name=session?.user?.name||"Campus User";
 return <><Navbar/><main className="container py-10">
  <p className="text-campus-600 font-bold uppercase text-sm">{role} portal</p><h1 className="text-4xl font-black mt-2">Welcome, {name.split(" ")[1]||name} 👋</h1><p className="text-slate-500 mt-2">Here is your campus activity overview.</p>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"><StatCard icon="📚" title="Attendance" value="90.0%" sub="Overall"/><StatCard icon="📝" title="Assignments" value="3" sub="Active"/><StatCard icon="📅" title="Events" value="3" sub="Upcoming"/><StatCard icon="💼" title="Placements" value="3" sub="Open"/></div>
  <div className="grid lg:grid-cols-3 gap-5 mt-8"><div className="card p-6 lg:col-span-2"><h2 className="font-black text-xl">Quick actions</h2><div className="grid sm:grid-cols-2 gap-3 mt-5">{[["📚 Attendance","/attendance"],["📝 Assignments","/assignments"],["📅 Events","/events"],["💼 Placements","/placements"]].map(x=><Link className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold" href={x[1]} key={x[1]}>{x[0]} →</Link>)}</div></div><div className="card p-6"><h2 className="font-black text-xl">Notifications</h2><div className="mt-4 space-y-3"><p className="text-sm">🔔 New assignment posted</p><p className="text-sm">📅 Career Connect registration open</p><p className="text-sm">💼 New placement opportunity</p></div></div></div>
 </main></>
}
