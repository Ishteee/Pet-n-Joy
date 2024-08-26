import './globals.css';
import './styles/style.css';
import './styles/bootstrap.min.css';
import './fontawesome/css/all.min.css';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SessionWrapper from './components/Provider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import Provider from './components/Provider';

export default async function RootLayout({ children }) {


  return (
      <html lang="en">
        <body>
        <Provider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
        </body>
      </html>
  );
}
