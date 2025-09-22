import './globals.css'

export const metadata = {
  title: 'PWA Weather App',
  description: 'Ứng dụng thời tiết với Next.js PWA',
  themeColor: '#1976d2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        {/* Link manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color */}
        <meta name="theme-color" content="#1976d2" />
        {/* Mobile meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  )
}
