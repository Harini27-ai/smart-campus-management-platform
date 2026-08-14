"use client";
import Navbar from "@/components/Navbar";
import { DEMO_USERS } from "@/lib/demo-data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Admin(){
 const {data:session,status}=useSession(); const router=useRouter();
 if(status==="loading")return <div className="container py-10">Loading...</div>;
 if(session?.user?.role!=="admin"){router.replace("/dashboard");return null;}
 return <><Navbar/><main className="container py-10"><h1 className="text-4xl font-black">Admin Panel</h1><p className="text-slate-500 mt-2">Manage users and monitor the campus system.</p><div className="grid md:grid-cols-4 gap-5 mt-7">{[["👥","Users","2,480"],["📚","Courses","36"],["📅","Events","42"],["💼","Placements","18"]].map(x=><div className="card p-6" key={x[1]}><div className="text-2xl">{x[0]}</div><p className="text-slate-500 mt-3">{x[1]}</p><p className="text-3xl font-black">{x[2]}</p></div>)}</div><div className="card p-6 mt-7"><h2 className="text-xl font-black">Demo accounts</h2><div className="overflow-auto mt-5"><table className="w-full text-left"><thead><tr className="border-b" style={{borderColor:"var(--line)"}}><th className="py-3">Name</th><th>Email</th><th>Role</th></tr></thead><tbody>{DEMO_USERS.map(u=><tr className="border-b" style={{borderColor:"var(--line)"}} key={u.id}><td className="py-3">{u.name}</td><td>{u.email}</td><td><span className="badge bg-slate-100 dark:bg-slate-800">{u.role}</span></td></tr>)}</tbody></table></div></div></main></>
}
