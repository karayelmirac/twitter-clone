import './globals.css'


export const metadata = {
  title: 'Twitter',
  description: 'Twitter Clone by Mirac Karayel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body >{children}</body>
    </html>
  )
}
