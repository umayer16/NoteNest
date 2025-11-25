"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

export default function NoteEditor({ content = "", onUpdate }: { content?: string; onUpdate?: (content: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Start typing your notes..." }),
    ],
    content,
    onUpdate: ({ editor }) => onUpdate?.(editor.getHTML()),
  });

  return (
    <div className="prose prose-lg max-w-none">
      <EditorContent editor={editor} className="min-h-96 bg-white/70 backdrop-blur rounded-2xl p-8" />
    </div>
  );
}