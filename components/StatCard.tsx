export default function StatCard({icon,title,value,sub}:{icon:string,title:string,value:string,sub:string}){
 return <div className="card p-5"><div className="flex items-center justify-between"><span className="text-2xl">{icon}</span><span className="text-xs text-slate-500">{sub}</span></div><p className="text-slate-500 mt-4">{title}</p><p className="text-3xl font-black mt-1">{value}</p></div>
}
