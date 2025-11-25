"use client";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import FolderItem from "./FolderItem";  // ← FIXED: removed wrong comma

export default function FolderTree() {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    // We'll add real data later – placeholder for now
    setSubjects([
      { id: "1", name: "Biology", icon: "DNA" },
      { id: "2", name: "Physics", icon: "Atom" },
      { id: "3", name: "Mathematics", icon: "Calculator" }
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subjects.map(subject => (
        <FolderItem key={subject.id} folder={subject} />
      ))}
    </div>
  );
}