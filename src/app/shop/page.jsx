"use client";

import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/responsive.css';
import Breadcrumb from "../components/Breadcrumb";
import MainShop from "../components/MainShop";

export default function Shop() {
    return (
      <div>
        <Breadcrumb name="Shop"/>
        <MainShop/>
      </div>
    );
  }