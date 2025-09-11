import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 space-y-2">
      <p>&copy; 2025 Ridwan Sihara. All rights reserved.</p>
      <div className="flex items-center justify-center gap-4 text-sm">
        <a
          href="mailto:sihararidwansihara@gmail.com"
          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Mail size={14} />
          sihararidwansihara@gmail.com
        </a>
        <a
          href="https://wa.me/6282111182593"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-green-600 hover:underline"
        >
          <Phone size={14} />
          +62 821-1111-82593
        </a>
      </div>
    </footer>
  );
}
