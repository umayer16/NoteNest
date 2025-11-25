// public/scanner-worker.js
// This file makes Tesseract OCR 5–10x faster by running in a Web Worker
// No need to change anything — just drop it in /public

importScripts("https://unpkg.com/tesseract.js@5.1.0/dist/worker.min.js");

self.addEventListener("message", async (event) => {
  const { id, image, lang = "eng" } = event.data;

  try {
    const worker = await Tesseract.createWorker({
      workerPath: "https://unpkg.com/tesseract.js@5.1.0/dist/worker.min.js",
      langPath: "https://tessdata.projectnaptha.com/4.0.0_best",
      corePath: "https://unpkg.com/tesseract.js-core@v5.1.0/tesseract-core.wasm.js",
      logger: (m) => {
        // Send progress back to main thread
        if (m.status === "recognizing text") {
          self.postMessage({ id, type: "progress", progress: m.progress });
        }
      },
    });

    await worker.load();
    await worker.loadLanguage(lang);
    await worker.initialize(lang);

    const {
      data: { text, confidence },
    } = await worker.recognize(image);

    await worker.terminate();

    self.postMessage({
      id,
      type: "result",
      text: text.trim(),
      confidence,
    });
  } catch (error) {
    self.postMessage({
      id,
      type: "error",
      error: error.message || "OCR failed",
    });
  }
});