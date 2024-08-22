import getProducts from "@/app/api/getProducts";

export default async function Cart() {
    const products = await getProducts();
    return (
        <section className="shopping-cart-area page-paddings">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                     <div className="shopping-cart-box">
                        <div className="shopping-cart-table">
                           <table>
                              <thead>
                                 <tr>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                    <th>Remove</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {products.map((product) => {
                                return(
                                 <tr key={product.id}>
                                    <td>
                                       <div className="cart-pro-box">
                                          <div className="cart-pro-img"><img src={product.imageUrl} alt=""/></div>
                                          <span>{product.productName}</span>
                                       </div>
                                    </td>
                                    <td>$28.00</td>
                                    <td>
                                       <div className="quantity-control" data-quantity="">
                                          <button className="quantity-btn" data-quantity-minus="">
                                             <svg viewBox="0 0 409.6 409.6">
                                                <g>
                                                   <g>
                                                      <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"></path>
                                                   </g>
                                                </g>
                                             </svg>
                                          </button>
                                          <input type="number" className="quantity-input" data-quantity-target="" value="1" step="1" name="quantity"/>
                                          <button className="quantity-btn" data-quantity-plus="">
                                             <svg viewBox="0 0 426.66667 426.66667">
                                                <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                             </svg>
                                          </button>
                                       </div>
                                    </td>
                                    <td><span className="cart-subtotal">$28.00</span></td>
                                    <td><button className="cart-tras-btn" data-toggle="modal" data-target="#remove-product"><i className="fas fa-trash-alt"></i></button></td>
                                 </tr>
                                 )})}
                                 {/* <tr>
                                    <td>
                                       <div className="cart-pro-box">
                                          <div className="cart-pro-img"><img src="../../pet-shop/demo1/assets/images/small/dog2.jpg" alt=""/></div>
                                          <span>Peanut Butter</span>
                                       </div>
                                    </td>
                                    <td>$28.00</td>
                                    <td>
                                       <div className="quantity-control" data-quantity="">
                                          <button className="quantity-btn" data-quantity-minus="">
                                             <svg viewBox="0 0 409.6 409.6">
                                                <g>
                                                   <g>
                                                      <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"></path>
                                                   </g>
                                                </g>
                                             </svg>
                                          </button>
                                          <input type="number" className="quantity-input" data-quantity-target="" value="1" step="1" name="quantity"/>
                                          <button className="quantity-btn" data-quantity-plus="">
                                             <svg viewBox="0 0 426.66667 426.66667">
                                                <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                             </svg>
                                          </button>
                                       </div>
                                    </td>
                                    <td><span className="cart-subtotal">$28.00</span></td>
                                    <td><button className="cart-tras-btn" data-toggle="modal" data-target="#remove-product"><i className="fas fa-trash-alt"></i></button></td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="cart-pro-box">
                                          <div className="cart-pro-img"><img src="../../pet-shop/demo1/assets/images/small/dog3.jpg" alt=""/></div>
                                          <span>All Breeds</span>
                                       </div>
                                    </td>
                                    <td>$28.00</td>
                                    <td>
                                       <div className="quantity-control" data-quantity="">
                                          <button className="quantity-btn" data-quantity-minus="">
                                             <svg viewBox="0 0 409.6 409.6">
                                                <g>
                                                   <g>
                                                      <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"></path>
                                                   </g>
                                                </g>
                                             </svg>
                                          </button>
                                          <input type="number" className="quantity-input" data-quantity-target="" value="1" step="1" name="quantity"/>
                                          <button className="quantity-btn" data-quantity-plus="">
                                             <svg viewBox="0 0 426.66667 426.66667">
                                                <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                             </svg>
                                          </button>
                                       </div>
                                    </td>
                                    <td><span className="cart-subtotal">$28.00</span></td>
                                    <td><button className="cart-tras-btn" data-toggle="modal" data-target="#remove-product"><i className="fas fa-trash-alt"></i></button></td>
                                 </tr> */}
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div className="shopping-cart-footer">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              {/* <div className="shopping-cart-btn">
                                 <a href="" className="theme-btn btn-light">Update Shopping Cart</a>
                              </div> */}
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="shopping-cart-btn text-right">
                                 <a href="" className="theme-btn">Clear Shopping Cart</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                     <div className="sidebar">
                        <div className="shopping-cart-box widget-box">
                           <div className="widget">
                              <div className="widget-category">
                                 <div className="blog-news-title">
                                    <h2>Subtotal</h2>
                                 </div>
                                 <div className="subtotal-content">
                                    <h3 className="theme-title">Grand Total: $84.00</h3>
                                    {/* <button className="theme-btn btn-light">Proceed To Checkout</button> */}
                                    
                                    <div className="subtotal-content-box">
                                       <ul>
                                          <li>2 items <span>$84.00</span></li>
                                          <li>Shipping <span>Free</span></li>
                                       </ul>
                                       <ul>
                                          <li>Total (tax excl.) <span>$84.00</span></li>
                                          <li>SGST 9% <span>$0.00</span></li>
                                          <li>CGST 9% <span>$0.00</span></li>
                                       </ul>
                                    </div>
                                    <div className="subtotal-btn text-center">
                                       <a href="../../pet-shop/demo1/checkout.html" className="theme-btn btn-light">Proceed To Checkout</a>
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