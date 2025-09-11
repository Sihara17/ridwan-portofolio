import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home(){
return (
<div>
<Header />


<main className="max-w-6xl mx-auto px-6 py-12">
<section className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-2 rounded-2xl p-8 bg-white shadow">
<h1 className="text-3xl font-extrabold">Ridwan Sihara — UI/UX Designer</h1>
<p className="mt-4 text-slate-600">Designing product experiences that are useful, accessible, and delightful.</p>


<div className="mt-6 flex gap-3">
<Link href="/portfolio" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">See case studies</Link>
<a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg">Download resume</a>
</div>
</div>


<aside className="rounded-2xl p-6 bg-white shadow">
<h3 className="font-semibold">Quick info</h3>
<p className="text-sm text-slate-600 mt-2">Jakarta, Indonesia — Open for freelance & full-time</p>
</aside>
</section>
</main>


<Footer />
</div>
)
}