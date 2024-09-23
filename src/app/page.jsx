"use client";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/MySlickCarousel';
import Services from "./components/Services";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import FurryFriend from "./components/FurryFriend";
import FeaturedProducts from "./components/FeaturedProducts";
import Blog from "./components/Blog";
import { useState } from "react";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import styles from './HomePage.module.css';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <MyCarousel/>
      <Services setLoading={setLoading}/>
      <FurryFriend/>
      <Blog/>
      {loading && (
          <div className={styles.loadingOverlay}>
            <LoadingSpinner />
          </div>
        )}
    </div>
  );
}
