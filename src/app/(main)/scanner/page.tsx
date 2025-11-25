// src/app/(main)/scanner/page.tsx
"use client";

import { useState } from "react";
import { Camera, Upload, Sparkles, X, Scan } from "lucide-react";

export default function Scanner() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      {!image ? (
        <div className="text-center py-20">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-20 inline-block">
            <Camera size={120} className="text-white mx-auto mb-8" />
            <h1 className="text-5xl font-bold text-white mb-4">Scan Your Notes</h1>
            <p className="text-xl text-white/80 mb-12">AI will organize them automatically</p>
            <label className="cursor-pointer">
              <input type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImage(URL.createObjectURL(file));
              }} />
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-3xl text-2xl font-bold inline-flex items-center gap-4 hover:scale-105 transition">
                <Scan size={40} /> Scan Now
              </div>
            </label>
          </div>
        </div>
      ) : (
        <div className="bg-black rounded-3xl overflow-hidden relative">
          <img src={image} className="w-full" />
          <button onClick={() => setImage(null)} className="absolute top-6 right-6 bg-white/20 backdrop-blur p-4 rounded-full">
            <X className="text-white" size={32} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-8">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 rounded-3xl text-2xl font-bold flex items-center justify-center gap-4">
              <Sparkles /> Organize with AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export {};
