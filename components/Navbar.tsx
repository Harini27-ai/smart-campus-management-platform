 "use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
  const {data:session}=useSession();
  return <header className="sticky top-0 z-50 border-b bg-white/90 dark:bg-slate-950/90 backdrop-blur" style={{borderColor:"var(--line)"}}>
    <div className="container h-16 flex items-center justify-between gap-4">
      <Link href="/" className="font-black text-xl text-campus-600">🎓 Smart Campus</Link>
      <nav className="hidden md:flex items-center gap-5 text-sm font-semibold">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/attendance">Attendance</Link>
        <Link href="/assignments">Assignments</Link>
        <Link href="/events">Events</Link>
        <Link href="/placements">Placements</Link>
        {session?.user?.role==="admin" && <Link href="/admin">Admin</Link>}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle/>
        {session ? <button className="btn btn-ghost" onClick={()=>signOut({callbackUrl:"/"})}>Logout</button> : <Link className="btn btn-primary" href="/login">Login</Link>}
      </div>
    </div>
  </header>;
}
