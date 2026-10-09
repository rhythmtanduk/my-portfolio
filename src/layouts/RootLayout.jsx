import { Outlet, ScrollRestoration } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default RootLayout;