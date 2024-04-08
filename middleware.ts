// 使用中间件：在中间件验证身份之前，受保护的路由不会被渲染，增强安全性和性能
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
// 使用authConfig初始化NextAuth.js
export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};