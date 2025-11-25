// src/app/api/save-note/route.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// This API route works perfectly with static export (output: "export")
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const {
      title = "Scanned Note",
      content = "",
      topicId,
      imageUrl,
      ocrText,
      aiData,
      userId = "guest-user", // In production: verify Firebase ID token here
    } = body;

    // Basic validation
    if (!topicId) {
      return NextResponse.json(
        { error: "topicId is required" },
        { status: 400 }
      );
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, "notes"), {
      title,
      content,
      topicId,
      userId,
      imageUrl: imageUrl || null,
      ocrText: ocrText || null,
      aiData: aiData || null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
      noteId: docRef.id,
      message: "Note saved successfully!",
    });
  } catch (error: any) {
    console.error("Save note error:", error);
    return NextResponse.json(
      { error: "Failed to save note", details: error.message },
      { status: 500 }
    );
  }
};

// Important: Disable body parsing for this route (not needed and avoids build issues)
export const config = {
  api: {
    bodyParser: false,
  },
};