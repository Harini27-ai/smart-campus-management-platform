import Link from "next/link";
import Navbar from "@/components/Navbar";

const features=[
 ["📊","Role dashboards","Student, Faculty, Coordinator and Admin workflows."],
 ["📚","Attendance","Subject-wise attendance and session history."],
 ["📝","Assignments","Submission, grading, feedback and deadlines."],
 ["📅","Events","Registration, seats and campus event management."],
 ["💼","Placements","Companies, eligibility and application tracking."],
 ["🔔","Notifications","Central alerts for important campus activity."]
];

export default function Home(){
 return <><Navbar/><main>
  <section className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
   <div><span className="text-campus-600 font-bold">SMART CAMPUS MANAGEMENT</span><h1 className="text-5xl md:text-6xl font-black leading-tight mt-3">Everything your campus needs in one portal.</h1><p className="text-lg text-slate-500 mt-6">A responsive campus management system for academics, events, placements and administration.</p><div className="flex gap-3 mt-8"><Link className="btn btn-primary" href="/login">Get Started</Link><Link className="btn btn-ghost" href="/dashboard">View Dashboard</Link></div></div>
   <div className="card p-7 shadow-xl"><p className="text-sm text-slate-500">Campus at a glance</p><div className="grid grid-cols-2 gap-4 mt-5">{[["2,480","Students"],["156","Faculty"],["42","Events"],["18","Openings"]].map(x=><div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-5" key={x[1]}><p className="text-3xl font-black">{x[0]}</p><p className="text-slate-500 mt-1">{x[1]}</p></div>)}</div></div>
  </section>
  <section className="container pb-20"><h2 className="text-3xl font-black">Core modules</h2><div className="grid md:grid-cols-3 gap-5 mt-7">{features.map(x=><div className="card p-6" key={x[1]}><div className="text-3xl">{x[0]}</div><h3 className="font-black text-xl mt-3">{x[1]}</h3><p className="text-slate-500 mt-2">{x[2]}</p></div>)}</div></section>
 </main></>
}
