"use client";

import { useState } from "react";
import { extractTextFromImage } from "@/lib/ocr";  // ← FIXED
import { analyzeNote } from "@/lib/openai";
import SmartFilingDialog from "./SmartFilingDialog";
import { X, Camera } from "lucide-react";

export default function DocumentScanner() {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const handleCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const url = URL.createObjectURL(file);
    setImage(url);

    const extracted = await extractTextFromImage(file);
    setText(extracted);

    const result = await analyzeNote(extracted);
    setAiResult(result);
    setLoading(false);
  };

  return (
    <>
      {!image ? (
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <label className="cursor-pointer">
            <input type="file" accept="image/*" capture="environment" onChange={handleCapture} className="hidden" />
            <div className="bg-white/20 backdrop-blur p-16 rounded-3xl">
              <Camera size={80} />
              <p className="text-2xl mt-6">Tap to scan notes</p>
            </div>
          </label>
        </div>
      ) : (
        <div className="relative h-screen">
          <img src={image} alt="scan" className="w-full h-full object-contain bg-black" />
          <button onClick={() => { setImage(null); setAiResult(null); }} className="absolute top-8 right-8 bg-black/50 p-4 rounded-full">
            <X size={32} className="text-white" />
          </button>
          {loading && <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-2xl">Analyzing with AI...</p>}
        </div>
      )}

      {aiResult && <SmartFilingDialog result={aiResult} image={image!} ocrText={text} />}
    </>
  );
}