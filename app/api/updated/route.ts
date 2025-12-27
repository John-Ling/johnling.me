import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.github.com/repos/John-Ling/johnling.me/commits?per_page=1", {
    headers: { Authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}` }
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }

  const response = await res.json();
  const isoDate: Date = new Date(response[0].commit.author.date);
  return NextResponse.json({
    updated: isoDate.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  });
}
