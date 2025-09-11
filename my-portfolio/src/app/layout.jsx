import './globals.css'


export const metadata = {
title: 'Ridwan Sihara — UI/UX Designer',
description: 'Portfolio of Ridwan Sihara — UI/UX & Product Designer',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-slate-50 text-slate-900 antialiased">
{children}
</body>
</html>
)
}