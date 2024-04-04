import { NextRequest } from "next/server";

export function POST(req: NextRequest) {
  return Response.json({ message: "Hello from Next.js!" });
}
