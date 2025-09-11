import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'


const projects = [
{
id: 'proj-1',
title: 'E-commerce Checkout Redesign',
subtitle: 'Improved conversion by simplifying steps',
img: '/projects/checkout.jpg',
tags: ['Research', 'Prototyping', 'Usability Testing'],
caseStudy: {
overview: 'Redesigned the checkout flow to reduce abandonment.',
problem: 'High drop-off at payment step due to confusing fields.',
approach: 'Interviews → prototyping → A/B test',
results: '+18% conversion',
}
},
{
id: 'proj-2',
title: 'Mobile Banking Onboarding',
subtitle: 'Faster signups and trust signals',
img: '/projects/banking.jpg',
tags: ['UX Writing','Accessibility'],
caseStudy: {
overview: 'Improved KYC success.',
problem: 'Users dropped during verification.',
approach: 'Microcopy + camera flow improvements',
results: '+24% KYC completion',
}
}
]


export default function PortfolioPage(){
return (
<div>
<Header />


<main className="max-w-6xl mx-auto px-6 py-12">
<h2 className="text-2xl font-bold">Selected Case Studies</h2>
<p className="text-slate-600 mt-2">A few projects that highlight my process.</p>


<div className="mt-6 grid md:grid-cols-2 gap-6">
{projects.map(p => <ProjectCard key={p.id} project={p} />)}
</div>
</main>


<Footer />
</div>
)
}