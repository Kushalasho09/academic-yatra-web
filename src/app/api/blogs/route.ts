import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    // 1. Try fetching from Admin Panel API (which connects directly to Hostinger MySQL)
    const adminUrl = "http://localhost:3001/api/blogs";
    try {
      const res = await fetch(adminUrl, { next: { revalidate: 0 } });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          // Return only published blogs for students
          const published = json.data.filter((b: any) => b.isPublished);
          return NextResponse.json({ success: true, data: published });
        }
      }
    } catch {
      // Admin dev server might be on another host or starting up
    }

    // 2. Fallback to shared data file
    const dataFile = path.resolve(process.cwd(), "../academic-yatra-web-admin-panel/data/blogs.json");
    if (fs.existsSync(dataFile)) {
      const content = fs.readFileSync(dataFile, "utf-8");
      const blogs = JSON.parse(content);
      const published = blogs.filter((b: any) => b.isPublished);
      return NextResponse.json({ success: true, data: published });
    }

    return NextResponse.json({ success: true, data: [] });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
