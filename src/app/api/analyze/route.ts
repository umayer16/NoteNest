import { NextResponse } from "next/server";
import OpenAI from "openai";

export const POST = async (request: Request) => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "No API key" }, { status: 500 });

  const openai = new OpenAI({ apiKey });

  // … rest of your code stays exactly the same
  const { text } = await request.json();
  // ← your existing code here
};