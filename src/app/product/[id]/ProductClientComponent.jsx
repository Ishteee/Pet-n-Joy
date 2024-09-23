"use client";

import { useEffect, useState } from "react";
import AddToCartButton from "@/app/components/ui/AddToCartButton";
import BuyNowButton from "@/app/components/ui/BuyNowButton";
import { useRouter } from "next/navigation";
import styles from "./ProductClientComponent.module.css";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";
import { usePathname } from "next/navigation";


export default function ProductClientComponent({ product, userId, reviews }) {
    const [isLoading, setIsLoading] = useState(false);
    const [comment, setComment] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const [quantity, setQuantity] = useState(1);

    const handlePostReview = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,  // Assuming userId is passed as a prop
                    productId: product.id, // Assuming productId is passed as a prop
                    rating: rating,
                    comment: comment,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setSuccess(true);
                setComment(''); // Clear the comment field
                setRating(0); // Reset the rating
                window.location.reload(); // Reload the window to refresh the page
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Something went wrong while submitting your review.');
        } finally {
            setIsLoading(false);
        }
    };

    const addToCart = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId, // Replace with logic to get the logged-in user's ID
                    productId: product.id,
                    quantity: quantity, // You can modify this based on the selected quantity
                    buyNow: false,
                }),
            });

            const result = await res.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };




    const BuyNow = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId, // Replace with logic to get the logged-in user's ID
                    productId: product.id,
                    quantity: quantity, // You can modify this based on the selected quantity
                    buyNow: true,
                }),
            });

            const result = await res.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            router.push("/checkout")
        }
    };

    useEffect(() => {
        if (pathname === "/checkout") {
            setIsLoading(false);
        }
    }, [pathname]);







    return (
        <section class="shop-detail-box-area page-paddings">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="shop-pro-main">
                            <div class="shop-pro-thumbnail">
                                {/* <ul class="shop-slider">
                              <li><span><img src="/images/category/dog/dog4.jpg" onclick="ChangeImage('assets/images/pro-detail.jpg');" alt=""/></span></li>
                              <li><span><img src="/images/thumbnail/small-1.jpg" onclick="ChangeImage('assets/images/thumbnail/1.jpg');" alt=""/></span></li>
                              <li><span><img src="/images/thumbnail/small-2.jpg" onclick="ChangeImage('assets/images/thumbnail/2.jpg');" alt=""/></span></li>
                              <li><span><img src="/images/thumbnail/small-3.jpg" onclick="ChangeImage('assets/images/thumbnail/3.jpg');" alt=""/></span></li>
                           </ul> */}
                            </div>
                            <div class="shop-pro-images">
                                <img id="image-change" src={product.imageUrl} height={435} width={400} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="shop-detail-content">
                            <div class="detail-info">
                                <h2 class="product-title ">{product.productName}</h2>
                                <div class="product-price ">
                                    <del class="enj-product-price-compare">₹{product.originalPrice}</del>
                                    <ins class="enj-product-price engoj_price_main">₹{product.discountedPrice}</ins>
                                </div>
                                {/* <div class="product-ratting">
                              <i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star ratting-active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                           </div> */}
                                <div class="pro-detail-desc">
                                    <p class="theme-description">This premium pet food is crafted with high-quality, natural ingredients to provide balanced nutrition for your pet. Packed with essential vitamins, minerals, and proteins, it supports healthy growth, a shiny coat, and optimal digestion. Its irresistible taste ensures even the pickiest eaters will love every bite, promoting overall well-being and vitality for your furry companion.</p>
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
                                    <div className="quantity-control" data-quantity="">
                                        <button className="quantity-btn" data-quantity-minus="" onClick={handleDecrement}>
                                            <svg viewBox="0 0 409.6 409.6">
                                                <g>
                                                    <g>
                                                        <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                        <input
                                            type="number"
                                            className="quantity-input"
                                            data-quantity-target=""
                                            value={quantity}
                                            step="1"
                                            name="quantity"
                                            onChange={handleInputChange}
                                        />
                                        <button className="quantity-btn" data-quantity-plus="" onClick={handleIncrement}>
                                            <svg viewBox="0 0 426.66667 426.66667">
                                                <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="shop-cart-btn">
                                        <button onClick={addToCart} className="theme-btn">Add to Cart</button>
                                        {/* <AddToCartButton productId={product.id} userId={userId} quantity={quantity} buyNow={false}></AddToCartButton> */}
                                    </div>
                                </div>
                                <div class="shop-buy-btn">
                                    <button onClick={BuyNow} className="theme-btn">Buy Now</button>
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
                                    <a className="nav-link active" data-toggle="tab" href="#customer-ratting" role="tab">
                                        Reviews {reviews.length > 0 ? `(${reviews.length})` : ""}
                                    </a>

                                </li>
                            </ul>
                            <div class="tab-content">
                                {/* <div class="tab-pane active" id="description" role="tabpanel">
                                    <div class="pro-detail-tab-content">
                                        <p class="theme-description">But you do not have to worry about because pedigree dentastix is here for you.</p>
                                        <p class="theme-description">It is useful to keep your dog's teeth and gums healthy and clean, just one Dentastix stick a day is sufficient to keep your dog's mouth clean.</p>
                                    </div>
                                </div> */}
                                <div class="tab-pane active" id="customer-ratting" role="tabpanel">
                                    <div class="pro-detail-tab-content">
                                        <div class="comments">
                                            {reviews.length > 0 ? (
                                                <ul class="comment-list clearfix">
                                                    {reviews.map((review) => (
                                                        <li key={review.id}>
                                                            <div class="comment">
                                                                <div class="comment-author">
                                                                    <img src="/images/avatar.png" alt="Author" />
                                                                    <a href="#" rel="external nofollow" className="comment-author-name">
                                                                        {review.user.name ? review.user.name : review.user.username}
                                                                    </a>
                                                                    <span class="comment-meta">{new Date(review.createdAt).toLocaleDateString('en-US', {
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric',
                                                                    })}{" "}
                                                                        at{" "}
                                                                        {new Date(review.createdAt).toLocaleTimeString('en-US', {
                                                                            hour: '2-digit',
                                                                            minute: '2-digit',
                                                                            hour12: true,
                                                                        })}</span>
                                                                </div>
                                                                <div class="comment-body">
                                                                    <p>{review.comment}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>No reviews yet.</p>
                                            )}
                                        </div>
                                        <div class="post-reply">
                                            <div class="blog-news-title">
                                                <h2>Add a review</h2>
                                            </div>
                                            <div class="comment-form-body">
                                                <form class="comment-form" action="pet-shop/demo1/index.html">
                                                    <div class="row">
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div class="comments-box">
                                                                <label for="comment">Comment</label>
                                                                <textarea
                                                                    name="comment"
                                                                    id="comment"
                                                                    cols="35"
                                                                    rows="5"
                                                                    value={comment}
                                                                    onChange={handleCommentChange}
                                                                    placeholder="Write a comment"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="comments-box">
                                                                <button className="theme-btn" onClick={handlePostReview}>Post Comment</button>
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
            {isLoading && (
                <div className={styles.loadingOverlay}>
                    <LoadingSpinner />
                </div>
            )}
        </section>
    );
}