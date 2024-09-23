'use client';

import './globals.css';
import './styles/style.css';
import './styles/bootstrap.min.css';
import './fontawesome/css/all.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { usePathname, useRouter } from "next/navigation"; // Updated imports
import { useState } from 'react';
import Provider from './components/Provider';
import styles from "./HomePage.module.css";
import LoadingSpinner from './components/ui/LoadingSpinner';


export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false); // State to manage loading

  return (
    <html lang="en">
      <body>
        <Provider>
          <header className="header-main">
            <Navbar setLoading={setLoading} /> {/* Pass setLoading to Navbar */}
          </header>
          <main>
            {/* Show the loading spinner when loading is true */}

            <div>
              {children}
              {/* Show loading spinner */}
              {loading && (
                <div className={styles.loadingOverlay}>
                  <LoadingSpinner />
                </div>
              )}
            </div>

          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
