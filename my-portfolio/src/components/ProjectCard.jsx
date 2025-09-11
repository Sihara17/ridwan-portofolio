'use client'
import { useState } from 'react'
import CaseStudyModal from './CaseStudyModal'


export default function ProjectCard({ project }){
const [open, setOpen] = useState(false)
return (
<article className="rounded-2xl bg-white shadow overflow-hidden">
<div className="md:flex">
<div className="md:w-1/2">
<img src={project.img} alt={project.title} className="w-full h-44 object-cover" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/600x400?text=Project+Image'}} />
</div>
<div className="p-6 md:w-1/2 flex flex-col justify-between">
<div>
<h3 className="text-lg font-semibold">{project.title}</h3>
<p className="mt-2 text-slate-600 text-sm">{project.subtitle}</p>
<div className="mt-3 flex flex-wrap gap-2">
{project.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100">{t}</span>)}
</div>
</div>


<div className="mt-4 flex items-center justify-between">
<button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-lg border">View case study</button>
<a href="#" className="text-sm text-indigo-600">Prototype →</a>
</div>
</div>
</div>


{open && <CaseStudyModal project={project} onClose={()=>setOpen(false)} />}
</article>
)
}