// src/app/layout.tsx (full example)
import type { Metadata } from 'next';
import './globals.css';  // Your Tailwind styles

export const metadata: Metadata = {
  title: 'NoteNest – AI Study Notes',
  description: 'Scan, organize, and quiz your notes with AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
