// src/lib/ocr.ts
import { createWorker } from "tesseract.js";

export async function extractTextFromImage(file: File): Promise<string> {
  const worker = await createWorker("eng", 1, {
    workerPath: "/scanner-worker.js",
    corePath: "https://unpkg.com/tesseract.js-core@v5.1.0/tesseract-core.wasm.js",
    logger: (m) => console.log(m), // optional progress logging
  });

  const { data } = await worker.recognize(file);
  await worker.terminate();

  return data.text.trim();
}