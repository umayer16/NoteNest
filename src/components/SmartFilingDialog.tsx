"use client";

import { useState } from "react";

export default function SmartFilingDialog({ result, image, ocrText }: any) {
  const { subject = "Unknown", chapter = "General", topic = "New Topic" } = result || {};

  const saveNote = async () => {
    // Save to Firebase (implementation in final batch)
    alert(`Saved to ${subject} → ${chapter} → ${topic}`);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-end">
      <div className="bg-white w-full rounded-t-3xl p-8">
        <h2 className="text-3xl font-bold mb-6">AI Suggests:</h2>
        <div className="space-y-4 text-xl">
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Chapter:</strong> {chapter}</p>
          <p><strong>Topic:</strong> {topic}</p>
        </div>
        <button onClick={saveNote} className="w-full mt-8 bg-primary text-white py-5 rounded-2xl text-xl font-bold">
          Save Here
        </button>
      </div>
    </div>
  );
}