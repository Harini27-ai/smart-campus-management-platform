"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

const accounts=[
 ["Student","student@campus.test","Student@123"],
 ["Faculty","faculty@campus.test","Faculty@123"],
 ["Coordinator","coordinator@campus.test","Coordinator@123"],
 ["Admin","admin@campus.test","Admin@123"]
];

export default function Login(){
 const [email,setEmail]=useState("student@campus.test");
 const [password,setPassword]=useState("Student@123");
 const [error,setError]=useState("");
 const [loading,setLoading]=useState(false);
 async function submit(e:React.FormEvent){e.preventDefault();setLoading(true);setError("");const r=await signIn("credentials",{email,password,redirect:false});setLoading(false);if(r?.error)setError("Invalid email or password.");else window.location.href="/dashboard";}
 return <main className="min-h-screen grid place-items-center px-5"><div className="card p-8 w-full max-w-md">
  <Link href="/" className="text-campus-600 font-bold">← Smart Campus</Link><h1 className="text-3xl font-black mt-5">Sign in</h1><p className="text-slate-500 mt-1">Choose a demo role or enter credentials.</p>
  <div className="grid grid-cols-2 gap-2 mt-5">{accounts.map(a=><button key={a[0]} className="btn btn-ghost text-sm" onClick={()=>{setEmail(a[1]);setPassword(a[2]);}}>{a[0]}</button>)}</div>
  <form onSubmit={submit} className="space-y-4 mt-5"><input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/><input className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password"/>{error&&<p className="text-red-600 text-sm">{error}</p>}<button disabled={loading} className="btn btn-primary w-full">{loading?"Signing in...":"Sign in"}</button></form>
  <div className="mt-5 text-xs text-slate-500">Demo accounts are built into this version, so MongoDB is not required to test login.</div>
 </div></main>
}
