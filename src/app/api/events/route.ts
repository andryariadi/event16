import connectDB from "@/config/mongodb";
import { Event } from "@/database";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    let event;

    try {
      event = Object.fromEntries(formData.entries());

      console.log({ event });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Invalid JSON data format" }, { status: 400 });
    }

    const file = formData.get("image") as File | null;

    if (!file) return NextResponse.json({ message: "Image file is required" }, { status: 400 });

    const tags = JSON.parse((formData.get("tags") as string) || "[]");
    const agenda = JSON.parse((formData.get("agenda") as string) || "[]");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image", folder: "events" }, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        })
        .end(buffer);
    });

    console.log({ file, arrayBuffer, buffer, uploadResult, tags, agenda }, "<----createEvent");

    event.image = (uploadResult as { secure_url: string }).secure_url;

    const createEvent = await Event.create({
      ...event,
      tags,
      agenda,
    });

    return NextResponse.json({ message: "Event created successfully", event: createEvent }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Event creation failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json({ message: "Events fetched successfully", events }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch events",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
