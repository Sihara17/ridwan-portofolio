import React from "react";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <section className="text-center space-y-6 max-w-2xl">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">Ridwan Sihara</span>’s Portfolio
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700">
          UI/UX Designer & Frontend Enthusiast
        </h2>
        <p className="text-gray-600 leading-relaxed">
          I’m <strong>Ridwan Sihara</strong>, a passionate UI/UX designer dedicated to creating
          intuitive, user-friendly, and visually appealing digital experiences.
          With a focus on design systems, usability, and responsive design, my
          goal is to craft interfaces that not only look great but also work
          seamlessly.
        </p>

import Link from 'next/link';

<Link href="/assets/5084525163845560448.vrm" className="text-blue-600 hover:underline font-medium"> 
  Lihat Partner & Backlink
</Link>

        {/* Call To Action */}
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            View Portfolio <ArrowRight size={18} />
          </a>
          <a
            href="mailto:sihararidwansihara@gmail.com"
            className="inline-flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
