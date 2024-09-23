"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Services({setLoading}) {
  const router = useRouter();
  const pathname = usePathname();
  const [path, setPath] = useState('');



  const handleClick = (path) => {
   setPath(path);
   setLoading(true);
   if (path === "/" && pathname === "/") {
       setLoading(false);
   }
   else {
       router.push(path);
   }
 };

 // Hide loader when the pathname changes (indicating navigation has finished)
 useEffect(() => {
   if (pathname === path) {
     setLoading(false);
   }
 }, [pathname])




  const handleCategoryClick = (category) => {
   setLoading(true);
    sessionStorage.setItem('selectedCategory', category); // Store the clicked category in sessionStorage
    router.push('/shop'); // Redirect to the shop page
    setPath("/shop");
  };

  return (
    <section className="our-service-area">
      <div className="container">
        <div className="row">
          {/* Dog Food */}
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
            <div className="category-week-box text-center">
              <div className="category-week-img">
                <a onClick={() => handleCategoryClick('Dog Food')}>
                  <img src="/images/category/category-1.png" alt="Dog Food" />
                </a>
              </div>
              <h3 className="theme-title">
                <a onClick={() => handleCategoryClick('Dog Food')}>Dog Food</a>
              </h3>
            </div>
          </div>

          {/* Cat Food */}
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
            <div className="category-week-box text-center">
              <div className="category-week-img">
                <a onClick={() => handleCategoryClick('Cat Food')}>
                  <img src="/images/category/category-2.png" alt="Cat Food" />
                </a>
              </div>
              <h3 className="theme-title">
                <a onClick={() => handleCategoryClick('Cat Food')}>Cat Food</a>
              </h3>
            </div>
          </div>

          {/* Fish Food */}
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
            <div className="category-week-box text-center">
              <div className="category-week-img">
                <a onClick={() => handleCategoryClick('Fish Food')}>
                  <img src="/images/category/category-3.png" alt="Fish Food" />
                </a>
              </div>
              <h3 className="theme-title">
                <a onClick={() => handleCategoryClick('Fish Food')}>Fish Food</a>
              </h3>
            </div>
          </div>

          {/* Bird Food */}
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
            <div className="category-week-box text-center">
              <div className="category-week-img">
                <a onClick={() => handleCategoryClick('Bird Food')}>
                  <img src="/images/category/category-4.png" alt="Bird Food" />
                </a>
              </div>
              <h3 className="theme-title">
                <a onClick={() => handleCategoryClick('Bird Food')}>Bird Food</a>
              </h3>
            </div>
          </div>

          {/* Reptile Food */}
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
            <div className="category-week-box text-center">
              <div className="category-week-img">
                <a onClick={() => handleCategoryClick('Reptile Food')}>
                  <img src="/images/category/category-5.png" alt="Reptile Food" />
                </a>
              </div>
              <h3 className="theme-title">
                <a onClick={() => handleCategoryClick('Reptile Food')}>Reptile Food</a>
              </h3>
            </div>
          </div>

          {/* Small Pet Food */}
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12">
            <div className="category-week-box text-center">
              <div className="category-week-img">
                <a onClick={() => handleCategoryClick('Small Pet Food')}>
                  <img src="/images/category/category-6.png" alt="Small Pet Food" />
                </a>
              </div>
              <h3 className="theme-title">
                <a onClick={() => handleCategoryClick('Small Pet Food')}>Small Pet Food</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
