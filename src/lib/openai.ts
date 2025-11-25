const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeNote(text: string) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.3,
    messages: [
      {
        role: "system",
        content: `You are a perfect study assistant. Analyze the text and return ONLY valid JSON with this exact structure:
{
  "subject": "",
  "chapter": "",
  "topic": "",
  "summary": "",
  "mcqs": [
    {
      "question": "",
      "options": ["", "", "", ""],
      "correct": 0
    }
  ]
}`
      },
      { role: "user", content: text.slice(0, 12000) }
    ],
  });

  try {
    return JSON.parse(res.choices[0].message.content || "{}");
  } catch (e) {
    console.error("AI JSON parse failed", e);
    return null;
  }
}