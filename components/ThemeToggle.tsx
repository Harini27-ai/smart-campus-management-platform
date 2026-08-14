"use client";
export default function ThemeToggle(){
  return <button className="btn btn-ghost" onClick={()=>{
    const dark=document.documentElement.classList.toggle("dark");
    localStorage.setItem("smart-campus-theme",dark?"dark":"light");
  }}>☾ Theme</button>;
}
