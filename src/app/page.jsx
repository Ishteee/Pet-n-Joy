"use client";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/MySlickCarousel';
import Services from "./components/Services";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import FurryFriend from "./components/FurryFriend";
import FeaturedProducts from "./components/FeaturedProducts";
import Blog from "./components/Blog";
import './styles/responsive.css';

export default function HomePage() {
  return (
    <div>
      <MyCarousel/>
      <Services/>
      <FurryFriend/>
      <FeaturedProducts/>
      <Blog/>
    </div>
  );
}
