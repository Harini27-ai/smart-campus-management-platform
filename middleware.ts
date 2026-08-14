export { default } from "next-auth/middleware";
export const config={matcher:["/dashboard/:path*","/attendance/:path*","/assignments/:path*","/events/:path*","/placements/:path*","/admin/:path*","/settings/:path*"]};
