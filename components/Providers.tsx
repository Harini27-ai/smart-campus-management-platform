"use client";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export function Providers({children}:{children:React.ReactNode}){
  useEffect(()=>{
    const t=localStorage.getItem("smart-campus-theme");
    if(t==="dark") document.documentElement.classList.add("dark");
  },[]);
  return <SessionProvider>{children}</SessionProvider>;
}
