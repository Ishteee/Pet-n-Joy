"use client";

export default function MainShop() {
    return(
        <section class="shop-page-area page-paddings">
            <div class="container">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                     <div class="shop-sidebar">
                        <div class="sidebar-widget sidebar-search">
                           <h3 class="widget-title">Search</h3>
                           <div class="sidebar-widget-box">
                              <form>
                                 <div class="theme-input-box">
                                    <input class="form-control" type="text" name="search-store" placeholder="Search our store"/>
                                    <button class="widget-search-btn"><i class="fas fa-search"></i></button>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div class="sidebar-widget category-sub-menu">
                           <h3 class="widget-title">Categories</h3>
                           <div class="sidebar-widget-box">
                              <ul class="sidebar-category">
                                 <li><a href="../../pet-shop/demo1/dog-food.html">Dog Food <span>(12)</span></a></li>
                                 <li><a href="../../pet-shop/demo1/cat-food.html">Cat Food <span>(6)</span></a></li>
                                 <li><a href="../../pet-shop/demo1/fish-food.html">Fish Food <span>(9)</span></a></li>
                                 <li><a href="../../pet-shop/demo1/bird-food.html">Bird Food <span>(9)</span></a></li>
                                 <li><a href="../../pet-shop/demo1/reptile-food.html">Reptile Food <span>(9)</span></a></li>
                                 <li><a href="../../pet-shop/demo1/small-pet-food.html">Small Pet Food <span>(0)</span></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="sidebar-widget product-sidebar-size">
                           <h3 class="widget-title">Shop By Price</h3>
                           <div class="sidebar-widget-box">
                              <ul>
                                 <li><a href="">$100 - $200</a></li>
                                 <li><a href="">$200 - $300</a></li>
                                 <li><a href="">$300 -  $500</a></li>
                                 <li><a href="">$500 - $700</a></li>
                                 <li><a href="">$700 - $1000</a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="sidebar-widget product-sidebar-tag">
                           <h3 class="widget-title">Tag</h3>
                           <div class="sidebar-widget-box">
                              <ul>
                                 <li><a href="" class="active">GMO Free</a></li>
                                 <li><a href="">Grain Free</a></li>
                                 <li><a href="">Holistic</a></li>
                                 <li><a href="">Organic</a></li>
                                 <li><a href="">Wholegrain</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                     <div class="collection-shorting clearfix">
                        <div class="short-tab">
                           <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item">
                                 <a class="nav-link active" data-toggle="tab" href="#sort-1" role="tab"><i class="fas fa-th"></i></a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" data-toggle="tab" href="#sort-2" role="tab"><i class="fas fa-list"></i></a>
                              </li>
                           </ul>
                        </div>
                        <div class="short-list">
                           <div class="product-filter clearfix">
                              <ul class="clearfix">
                                 <li>
                                    <label>Show:</label>
                                    <select class="product-filter-dropdown">
                                       <option>20</option>
                                       <option>40</option>
                                       <option>60</option>
                                       <option>80</option>
                                       <option>100</option>
                                    </select>
                                 </li>
                                 <li>
                                    <label>Sort by:</label>
                                    <select class="product-filter-dropdown">
                                       <option value="manual">Featured</option>
                                       <option value="best-selling">Best Selling</option>
                                       <option value="title-ascending">Alphabetically, A-Z</option>
                                       <option value="title-descending">Alphabetically, Z-A</option>
                                       <option value="price-ascending">Price, low to high</option>
                                       <option value="price-descending">Price, high to low</option>
                                       <option value="created-descending">Date, new to old</option>
                                       <option value="created-ascending">Date, old to new</option>
                                    </select>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="shop-grid-box">
                        <div class="tab-content">
                           <div class="tab-pane active" id="sort-1" role="tabpanel">
                              <div class="shop-product-box">
                                 <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Peanut Butter</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog3.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">All Breeds</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog4.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Chunks in Gravy</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Tuna in Jelly</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Intersand Odourlock</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat3.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Drools Adult Dry Cat</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat4.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Fish Chunks in Gravy</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/fish/fish1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Optimum Fish Food</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/fish/fish2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Optimum 3 in 1 Food</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/fish/fish3.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Tetra Bits Complete</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/fish/fish4.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Bioactive Formula</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/small-pet/small-pet1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Pedigree Puppy</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/small-pet/small-pet2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Drools Chicken</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/small-pet/small-pet3.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Pedigree Puppy Dog</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/small-pet/small-pet4.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Pedigree Puppy Dry</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/birds/birds1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Puppies Petslife</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/birds/birds2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Exotic Birds</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                       <div class="product-box out-of-stock-box text-center">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <span>BEEF</span>
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Dog Biscuits</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                          <div class="product-out-stock">
                                             <span>Out Of Stock</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="theme-pagination clearfix">
                                          <ul class="pagination">
                                             <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                             <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                             <li class="page-item"><a class="page-link " href="#">2</a></li>
                                             <li class="page-item"><a class="page-link" href="#">3</a></li>
                                             <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="tab-pane" id="sort-2" role="tabpanel">
                              <div class="shop-product-box shop-product-listing">
                                 <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box clearfix">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Peanut Butter</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog3.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">All Breeds</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog4.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Chunks in Gravy</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Tuna in Jelly</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Intersand Odourlock</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat3.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Drools Adult Dry Cat</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/cat/cat4.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Fish Chunks in Gravy</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/fish/fish1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Optimum Fish Food</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/fish/fish2.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico whislist-show">
                                                <i class="fas fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Optimum 3 in 1 Food</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="product-box out-of-stock-box clearfix">
                                          <div class="product-images">
                                             <a href="../../pet-shop/demo1/shop-detail.html">
                                             <img src="/images/category/dog/dog1.jpg" alt=""/>
                                             </a>
                                             <div class="pro-whislist-ico">
                                                <i class="far fa-heart"></i>
                                             </div>
                                          </div>
                                          <div class="product-content">
                                             <h3 class="theme-title"><a href="../../pet-shop/demo1/shop-detail.html">Dog Biscuits</a></h3>
                                             <div class="product-ratting">
                                                <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                             </div>
                                             <div class="product-price">
                                                <span class="price"><del>$30.00</del> <ins>$28.00</ins></span>
                                             </div>
                                             <div class="product-description">
                                                <p class="theme-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                             </div>
                                             <div class="product-btn">
                                                <a href="../../pet-shop/demo1/shop-detail.html" class="theme-btn">Add To Cart</a>
                                             </div>
                                          </div>
                                          <div class="product-out-stock">
                                             <span>Out Of Stock</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                       <div class="theme-pagination clearfix">
                                          <ul class="pagination">
                                             <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                             <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                             <li class="page-item"><a class="page-link " href="#">2</a></li>
                                             <li class="page-item"><a class="page-link" href="#">3</a></li>
                                             <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                          </ul>
                                       </div>
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