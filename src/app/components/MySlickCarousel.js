// components/MySlickCarousel.js
"use client";
import React from 'react';
import Slider from 'react-slick';
import CustomNextArrow from './CustomNextArrow';
import CustomPrevArrow from './CustomPrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../globals.css'; // Assuming you have a global styles file

const MySlickCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider {...settings}>


<div>
        <div className="slider-box-area">
          <div className="slider-banner-img">
            <img src="/images/pet-img.png" alt="" />
          </div>
          <div className="slider-area">
            <div className="banner-slider banner-two">
              <div className="banner-box">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                      <div className="banner-description-box">
                        <div className="banner-description-img">
                          <img src="/images/shop-slider-background.png" alt="" />
                        </div>
                        <div className="banner-description">
                          <span>Pabu Animals & Pets Theme</span>
                          <h2>PET WELLNESS</h2>
                          <div className="sl-paw-icon">
                            <img src="/images/paw-slider.png" alt="" />
                          </div>
                          <p>Our pet wellness products will keep your pet healthy and safe. Our products are clinically developed and certified by veterinarians and are designed to facilitate optimal wellness.</p>
                          <div className="slider-btn">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                      <div className="banner-slide-images">
                        <img src="/images/slide2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="slider-box-area">
          <div className="slider-banner-img">
            <img src="/images/pet-img.png" alt="" />
          </div>
          <div className="slider-area">
            <div className="banner-slider banner-one">
              <div className="banner-box">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                      <div className="banner-description-box">
                        <div className="banner-description-img">
                          <img src="/images/shop-slider-background.png" alt="" />
                        </div>
                        <div className="banner-description">

                          <h2>Ofresh puppy</h2>
                          <div className="sl-paw-icon">
                            <img src="/images/paw-slider.png" alt="" />
                          </div>
                          <p>Ofresh prime offers the different flavourful foods that your PET loves. Our products filled with raw ingredients with their original nutrition.</p>
                          <div className="slider-btn">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                      <div className="banner-slide-images">
                        <img src="/images/slide1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slider-box-area">
          <div className="slider-banner-img">
            <img src="/images/pet-img.png" alt="" />
          </div>
          <div className="slider-area">
            <div className="banner-slider banner-three">
              <div className="banner-box">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                      <div className="banner-description-box">
                        <div className="banner-description-img">
                          <img src="/images/shop-slider-background.png" alt="" />
                        </div>
                        <div className="banner-description">

                          <h2>BIGGEST SALE</h2>
                          <div className="sl-paw-icon">
                            <img src="/images/paw-slider.png" alt="" />
                          </div>
                          <p>Grab the deal on various types of nutritional pet foods. It’s the best time to give your pet what it wants.</p>
                          <div className="slider-btn">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                      <div className="banner-slide-images">
                        <img src="/images/slide3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MySlickCarousel;
