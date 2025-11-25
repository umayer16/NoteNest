import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FolderItem({ folder }: { folder: any }) {
  return (
    <Link href={`/topic/${folder.name}`}>
      <div className="glass p-8 hover:scale-105 transition transform">
        <div className="text-5xl mb-4">{folder.icon || "Book"}</div>
        <h3 className="text-2xl font-bold">{folder.name}</h3>
        <p className="text-gray-600 mt-2">12 chapters • 89 topics</p>
        <ChevronRight className="ml-auto mt-6" />
      </div>
    </Link>
  );
}