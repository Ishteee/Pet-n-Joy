"use client";
import './globals.css';
import './styles/style.css'; 
import './styles/bootstrap.min.css'; 
import './fontawesome/css/all.min.css';
import Head from 'next/head';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  


  return (
    <html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Pet Supplies Store</title> 
      </Head>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
