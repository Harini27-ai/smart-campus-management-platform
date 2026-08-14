# Smart Campus Management Platform — Fixed Working MVP

## Why this version is different
The previous ZIP was a scaffold and had a seed/auth mismatch. This version is intentionally built as a **working local demo first**:
- Login works without MongoDB.
- All four roles work.
- Protected routes work.
- Dashboard works.
- Attendance page works.
- Assignment submission demo works.
- Event registration demo works.
- Placement application demo works.
- Admin page is restricted to Admin.
- Theme toggle works.
- Settings save interaction works.
- API routes return working demo data.

MongoDB can be connected later without blocking the local demo.

## Run

1. Open this folder in VS Code.
2. Open Terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open:

http://localhost:3000

## Demo accounts

Student:
student@campus.test
Student@123

Faculty:
faculty@campus.test
Faculty@123

Coordinator:
coordinator@campus.test
Coordinator@123

Admin:
admin@campus.test
Admin@123

## Pages
/
 /login
 /dashboard
 /attendance
 /assignments
 /events
 /placements
 /admin
 /settings

## Next production step
After confirming this MVP works locally, connect MongoDB/Mongoose, file uploads, email verification/reset, Socket.io, and persistent CRUD. This separation avoids the "site opens but login/database features fail" problem during initial setup.
