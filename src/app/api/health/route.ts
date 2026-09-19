import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "naskhah-thesis",
    phase: 0,
  });
}
