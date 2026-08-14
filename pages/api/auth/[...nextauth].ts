import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DEMO_USERS } from "@/lib/demo-data";

export const authOptions:any={
 session:{strategy:"jwt"},
 providers:[
  CredentialsProvider({
   name:"Demo Credentials",
   credentials:{email:{label:"Email",type:"email"},password:{label:"Password",type:"password"}},
   async authorize(credentials:any){
    const u=DEMO_USERS.find(x=>x.email.toLowerCase()===String(credentials?.email||"").toLowerCase()&&x.password===credentials?.password);
    if(!u)return null;
    return {id:u.id,name:u.name,email:u.email,role:u.role};
   }
  })
 ],
 callbacks:{
  async jwt({token,user}:any){if(user){token.id=user.id;token.role=user.role;}return token;},
  async session({session,token}:any){session.user.id=token.id;session.user.role=token.role;return session;}
 },
 pages:{signIn:"/login"}
};

export default NextAuth(authOptions);
