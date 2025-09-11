'use client'
import { motion } from 'framer-motion'


export default function CaseStudyModal({ project, onClose }){
return (
<div className="fixed inset-0 z-50 flex items-center justify-center">
<div className="absolute inset-0 bg-black/40" onClick={onClose} />
<motion.div initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white w-[min(900px,95%)] rounded-2xl p-6 shadow-lg">
<button className="absolute top-4 right-4" onClick={onClose}>✕</button>
<h3 className="text-xl font-bold">{project.title}</h3>
<p className="mt-2 text-slate-600">{project.subtitle}</p>


<div className="mt-4 grid md:grid-cols-2 gap-4">
<div>
<h4 className="font-semibold">Overview</h4>
<p className="mt-1 text-slate-600">{project.caseStudy.overview}</p>


<h4 className="mt-4 font-semibold">Problem</h4>
<p className="mt-1 text-slate-600">{project.caseStudy.problem}</p>
</div>


<div>
<h4 className="font-semibold">Approach</h4>
<p className="mt-1 text-slate-600">{project.caseStudy.approach}</p>


<h4 className="mt-4 font-semibold">Results</h4>
<p className="mt-1 text-slate-600">{project.caseStudy.results}</p>
</div>
</div>


<div className="mt-6 flex justify-end gap-3">
<a href="#" className="px-4 py-2 border rounded">Read full case study</a>
<button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded">Close</button>
</div>
</motion.div>
</div>
)
}