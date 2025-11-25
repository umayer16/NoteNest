"use client";

import FolderTree from "@/components/FolderTree";
import { Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gradient">My Subjects</h1>
        <button className="bg-primary text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition">
          <Plus size={28} />
        </button>
      </div>
      <FolderTree />
    </div>
  );
}