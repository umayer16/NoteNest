// src/app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";   // this also works, but deleting is cleaner

export const metadata: Metadata = {
  title: "NoteNest – Smart Study Notes",
  description: "The ultimate AI-powered note organizer for students",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}