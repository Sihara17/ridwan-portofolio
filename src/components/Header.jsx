import Link from 'next/link'
import { Mail, DownloadCloud } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="font-bold">Ridwan Sihara.</Link>

        <nav className="flex items-center gap-4">
          <Link href="/portfolio" className="text-sm">Portfolio</Link>
          <a href="/resume.pdf" className="text-sm inline-flex items-center gap-1">
            <DownloadCloud size={14}/> Resume
          </a>

          {/* Email button */}
          <a
            href="mailto:sihararidwansihara@gmail.com"
            className="inline-flex items-center gap-2 px-3 py-1 rounded border"
          >
            <Mail size={14} /> 
            <span className="text-sm hidden md:inline">Hire me</span>
          </a>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/6282111182593"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded border bg-green-500 text-white hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
