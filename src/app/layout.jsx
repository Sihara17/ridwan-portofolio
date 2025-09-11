import "./globals.css"

export const metadata = {
  title: "Ridwan Sihara — UI/UX Designer",
  description: "Portfolio of Ridwan Sihara — UI/UX & Product Designer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
