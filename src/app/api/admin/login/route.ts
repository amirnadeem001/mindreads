import { NextResponse } from "next/server";
import { getAdminPassword, setAdminSession } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const password = body?.password;

  if (!password || password !== getAdminPassword()) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  await setAdminSession();
  return NextResponse.json({ ok: true });
}
