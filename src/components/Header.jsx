import React from 'react';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="font-bold">Ridwan Sihara.</Link>
        <nav className="flex items-center gap-4">
          <Link href="/portfolio" className="text-sm">Portfolio</Link>
          <a href="/resume.pdf" className="text-sm">Resume</a>
          <a href="mailto:sihararidwansihara@gmail.com" className="inline-flex items-center gap-2 px-3 py-1 rounded border">
            <Mail size={14}/> <span className="text-sm hidden md:inline">Hire me</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
