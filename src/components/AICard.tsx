import { Sparkles } from "lucide-react";

export default function AICard({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="glass p-6 flex items-center gap-4 hover:scale-105 transition transform"
    >
      <Sparkles className="text-yellow-500" size={32} />
      <div className="text-left">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">Powered by GPT-4o</p>
      </div>
    </button>
  );
}