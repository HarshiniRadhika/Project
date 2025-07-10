import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  )
}
