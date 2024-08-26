import getProductDetails from "@/app/api/getProductDetails";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import AddToCartButton from "@/app/components/ui/AddToCartButton";

export default async function ProductDetails({params}) {
   const {id} = params;
   const product = await getProductDetails(id);
   const session = await getServerSession(authOptions);

//   const addToCart = async (productId) => {
//     try {
//       const res = await fetch('/api/cart/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId: session?.user.id, // Replace with logic to get the logged-in user's ID
//           productId: productId,
//           quantity: 1, // You can modify this based on the selected quantity
//         }),
//       });

//       const result = await res.json();
//       console.log(result.message);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     } finally {
//     }
//   };

    return(
        <section class="shop-detail-box-area page-paddings">
            <div class="container">
               <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                     <div class="shop-pro-main">
                        {/* <div class="shop-pro-thumbnail">
                           <ul class="shop-slider">
                              <li><span><img src="/images/category/dog/dog4.jpg" onclick="ChangeImage('assets/images/pro-detail.jpg');" alt=""/></span></li>
                              <li><span><img src="/images/thumbnail/small-1.jpg" onclick="ChangeImage('assets/images/thumbnail/1.jpg');" alt=""/></span></li>
                              <li><span><img src="/images/thumbnail/small-2.jpg" onclick="ChangeImage('assets/images/thumbnail/2.jpg');" alt=""/></span></li>
                              <li><span><img src="/images/thumbnail/small-3.jpg" onclick="ChangeImage('assets/images/thumbnail/3.jpg');" alt=""/></span></li>
                           </ul>
                        </div> */}
                        <div class="shop-pro-images">
                           <img id="image-change" src="/images/pro-detail.jpg" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                     <div class="shop-detail-content">
                        <div class="detail-info">
                           <h2 class="product-title ">{product.productName}</h2>
                           <div class="product-price ">                      
                              <del class="enj-product-price-compare">$20.00 USD</del> 
                              <ins class="enj-product-price engoj_price_main">$19.00 USD</ins>
                           </div>
                           {/* <div class="product-ratting">
                              <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                           </div> */}
                           <div class="pro-detail-desc">
                              <p class="theme-description">This product is for regular dental treatment for the good teeth of your family dog. It is clinically proven to decrease tartar accumulation by up to 80%. It has a Special x-shape & abrasive texture that helps with teeth cleaning. The Ingredients include Active-Zinc Sulphate & Sodium Tripolyphosphate.</p>
                           </div>
                           {/* <div class="product-weight">
                              <ul class="clearfix">
                                 <li><a href="" class="active">1KG</a></li>
                                 <li><a href="">5KG</a></li>
                                 <li><a href="">10KG</a></li>
                                 <li><a href="">15KG</a></li>
                                 <li><a href="">10KG</a></li>
                              </ul>
                           </div> */}
                           <div class="shop-qty-box clearfix">
                              <div class="quantity-control" data-quantity="">
                                 <button class="quantity-btn" data-quantity-minus="">
                                    <svg viewBox="0 0 409.6 409.6">
                                       <g>
                                          <g>
                                             <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"></path>
                                          </g>
                                       </g>
                                    </svg>
                                 </button>
                                 <input type="number" class="quantity-input" data-quantity-target="" value="1" step="1" name="quantity"/>
                                 <button class="quantity-btn" data-quantity-plus="">
                                    <svg viewBox="0 0 426.66667 426.66667">
                                       <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                    </svg>
                                 </button>
                              </div>
                              <div class="shop-cart-btn">
                                 <AddToCartButton productId={product.id} userId={session?.user.id}></AddToCartButton>
                              </div>
                           </div>
                           <div class="shop-buy-btn">
                              <button class="theme-btn">Buy It Now</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div class="pro-detail-tab">
                        <ul class="nav nav-tabs" role="tablist">
                           <li class="nav-item">
                              <a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#customer-ratting" role="tab">Reviews (1)</a>
                           </li>
                        </ul>
                        <div class="tab-content">
                           <div class="tab-pane active" id="description" role="tabpanel">
                              <div class="pro-detail-tab-content">
                                 <p class="theme-description">But you do not have to worry about because pedigree dentastix is here for you.</p>
                                 <p class="theme-description">It is useful to keep your dog's teeth and gums healthy and clean, just one Dentastix stick a day is sufficient to keep your dog's mouth clean.</p>
                              </div>
                           </div>
                           <div class="tab-pane" id="customer-ratting" role="tabpanel">
                              <div class="pro-detail-tab-content">
                                 <div class="comments">
                                    <ul class="comment-list clearfix">
                                       <li>
                                          <div class="comment">
                                             <div class="comment-author">
                                                <img src="pet-shop/demo1/assets/images/avatar.png" alt="Author"/>
                                                <a href="#" rel="external nofollow" class="comment-author-name">James</a>
                                                <span class="comment-meta">March 17, 2015 at 18:45 AM</span>
                                             </div>
                                             <div class="comment-body">
                                                <p>This is a high-quality Pedigree house commodity. Sticks are very dense and furries would love to chew on them. Personally I feel there's no need to place these sticks on daily sticks, use them every 3-5 days as kiddos won't get much harder if they're playing continuously with chewing toys particularly the rope as tartar won't stay due to frequent friction.</p>
                                                <a href="#" class="comment-reply"><i class="fa fa-reply"></i> Reply</a>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="post-reply">
                                    <div class="blog-news-title">
                                       <h2>Add a review</h2>
                                       <p class="theme-description">Your email address will not be published. Required fields are marked *Your rating</p>
                                       <div class="review-ratting-box">
                                          <div class="product-ratting">
                                             <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="comment-form-body">
                                       <form class="comment-form" action="pet-shop/demo1/index.html">
                                          <div class="row">
                                             <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div class="comments-box">
                                                   <label for="author">Your name</label>
                                                   <input id="author" type="text" placeholder="Your name" name="author"/>
                                                </div>
                                             </div>
                                             <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div class="comments-box">
                                                   <label for="email">Email</label>
                                                   <input id="email" type="text" placeholder="Email" name="author"/>
                                                </div>
                                             </div>
                                             <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div class="comments-box">
                                                   <label for="email">Subject</label>
                                                   <input id="subject" type="text" placeholder="Subject" name="subject"/>
                                                </div>
                                             </div>
                                             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div class="comments-box">
                                                   <label for="comment">Comment</label>
                                                   <textarea name="comment" id="comment" cols="35" rows="5"></textarea>
                                                </div>
                                             </div>
                                             <div class="col-md-12">
                                                <div class="comments-box">
                                                   <button class="theme-btn">Post Comment</button>
                                                </div>
                                             </div>
                                          </div>
                                       </form>
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