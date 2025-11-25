// src/types/index.ts

import { Timestamp } from "firebase/firestore";

export type FolderType = "subject" | "chapter" | "topic";

export interface Folder {
  id: string;
  name: string;
  parentId: string | null;        // null = subject (top level)
  type: FolderType;
  userId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  icon?: string;                  // e.g. "Biology", "Math"
  color?: string;                 // hex or tailwind class
}

export interface Note {
  id: string;
  title: string;
  content: string;                // HTML from Tiptap
  topicId: string;
  userId: string;
  imageUrl?: string;              // scanned page
  ocrText?: string;               // extracted text
  aiSummary?: string;
  aiData?: {
    subject: string;
    chapter: string;
    topic: string;
    mcqs: MCQ[];
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface MCQ {
  question: string;
  options: string[];
  correct: number;                // index of correct answer
  explanation?: string;
}

export interface Quiz {
  id: string;
  topicId: string;
  userId: string;
  title: string;
  questions: MCQ[];
  score?: number;
  totalQuestions: number;
  createdAt: Timestamp;
}

export interface UserStats {
  totalScans: number;
  totalQuizzes: number;
  totalNotes: number;
  streak: number;
}