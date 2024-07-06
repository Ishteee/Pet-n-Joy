"use client";

export default function FeaturedProducts() {
    return(
        <section class="featured-product-area page-paddings">
            <div class="container">
               <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div class="page-title text-center">
                        <h2>Featured Products</h2>
                        <p>Below are the products that have something special and unique than regular ones. This is specifically made for your pet’s health & happiness.</p>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <ul class="nav nav-tabs pet-tab-box" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                           <img src="/images/category/cate1.jpg" alt=""/> Dogs
                           </a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                           <img src="/images/category/cate2.jpg" alt=""/> Cats
                           </a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                           <img src="/images/category/cate3.jpg" alt=""/> Fishes
                           </a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                           <img src="/images/category/cate4.jpg" alt=""/> Small pets
                           </a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab">
                           <img src="/images/category/cate5.jpg" alt=""/> Birds
                           </a>
                        </li>
                     </ul>
                     <div class="tab-content">
                        <div class="tab-pane active" id="tabs-1" role="tabpanel">
                           <div class="featured-product-box">
                              <div class="row">
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box out-of-stock-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/dog/dog1.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Dog Biscuits</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                       <div class="product-out-stock">
                                          <span>Out Of Stock</span>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/dog/dog2.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Peanut Butter</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/dog/dog3.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">All Breeds</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/dog/dog4.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Chunks in Gravy</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="show-more-btn text-center">
                                       <a href="pet-shop/demo1/shop.html" class="theme-btn btn-light">Show More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane" id="tabs-2" role="tabpanel">
                           <div class="featured-product-box">
                              <div class="row">
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/cat/cat1.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Tuna in Jelly</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/cat/cat2.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Intersand Odourlock</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/cat/cat3.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Drools Adult Dry Cat</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/cat/cat4.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Fish Chunks in Gravy</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="show-more-btn text-center">
                                       <a href="pet-shop/demo1/shop.html" class="theme-btn btn-light">Show More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane" id="tabs-3" role="tabpanel">
                           <div class="featured-product-box">
                              <div class="row">
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/fish/fish1.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Optimum Fish Food</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/fish/fish2.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Optimum 3 in 1 Food</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/fish/fish3.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Tetra Bits Complete</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/fish/fish4.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Bioactive Formula</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="show-more-btn text-center">
                                       <a href="pet-shop/demo1/shop.html" class="theme-btn btn-light">Show More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane" id="tabs-4" role="tabpanel">
                           <div class="featured-product-box">
                              <div class="row">
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/small-pet/small-pet1.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Pedigree Puppy</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/small-pet/small-pet2.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico whislist-show">
                                             <i class="fas fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Drools Chicken</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/small-pet/small-pet3.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Pedigree Puppy Dog</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/small-pet/small-pet4.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Pedigree Puppy Dry</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="show-more-btn text-center">
                                       <a href="pet-shop/demo1/shop.html" class="theme-btn btn-light">Show More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane" id="tabs-5" role="tabpanel">
                           <div class="featured-product-box">
                              <div class="row">
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/birds/birds1.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Puppies Petslife</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/birds/birds2.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Exotic Birds</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/birds/birds3.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Boltz Bird Food</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ps-column-width">
                                    <div class="product-box text-center">
                                       <div class="product-images">
                                          <a href="pet-shop/demo1/shop-detail.html">
                                          <img src="/images/category/birds/birds4.jpg" alt=""/>
                                          </a>
                                          <div class="pro-whislist-ico">
                                             <i class="far fa-heart"></i>
                                          </div>
                                       </div>
                                       <div class="product-content">
                                          <span>BEEF</span>
                                          <h3 class="theme-title"><a href="pet-shop/demo1/shop-detail.html">Vitapol Economic Food</a></h3>
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                          <div class="product-price">
                                             <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                          </div>
                                          <div class="product-btn">
                                             <a href="pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="show-more-btn text-center">
                                       <a href="pet-shop/demo1/shop.html" class="theme-btn btn-light">Show More</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
}