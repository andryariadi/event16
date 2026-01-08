import connectDB from "@/config/mongodb";
import { Event } from "@/database";
import { NextResponse } from "next/server";

export async function GET(req: Request, params: { params: Promise<{ slug: string }> }) {
  await connectDB();

  try {
    const { slug } = await params.params;

    // Validate slug parameter
    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return NextResponse.json({ message: "Invalid or missing slug parameter" }, { status: 400 });
    }

    // Sanitize slug (remove any potential malicious input)
    const sanitizedSlug = slug.trim().toLowerCase();

    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Event fetched successfully", event }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch event",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
