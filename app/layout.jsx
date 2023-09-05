import { TheHeader } from '@/components/TheHeader'
import { TheFooter } from '@/components/TheFooter'
import './globals.css'
import { MyProvider } from '@/components/MyProvider'

export const metadata = {
  title: 'Автошкола "AutoSchool"',
  description: 'Автошкола "AutoSchool".',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className="container">

          <MyProvider>

            <TheHeader />
            <main className='main'>
              {children}
            </main>
            <TheFooter />

          </MyProvider>

        </div>
      </body>
    </html>
  )
}
