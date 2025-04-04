export const metadata = {
  title: 'DesertBoard | Admin',
  description: 'DesertBoard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
