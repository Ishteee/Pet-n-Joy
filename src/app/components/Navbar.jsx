import Link from "next/link";
// import { useEffect } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "./ui/LogoutButton";
import User from "./User";

export default async function Navbar() {

    const session = await getServerSession(authOptions);
    

    // useEffect(() => {
    //     // Get the elements
    //     const headerBottom = document.querySelector('.header-bottom');
    //     const navbar = document.querySelector('#navbar');

    //     // Add a scroll event listener
    //     window.addEventListener('scroll', function () {
    //         const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    //         if (windowScrollTop >= 300) {
    //             headerBottom.classList.add('fixed-header');
    //         } else {
    //             headerBottom.classList.remove('fixed-header');
    //         }
    //     });

    // }, []); // Empty dependency array ensures this effect runs only once on mount

    // Rest of your event handlers and logic...
    // Empty dependency array ensures this effect runs only once on mount


    return (
        <header className="header-main">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="header-top-left">
                                <ul className="clearfix">
                                    <li><a href=""><i className="fas fa-phone-alt"></i> +91 9987974807</a></li>
                                    <li><a href=""><i className="far fa-envelope"></i> servicedesk@petnjoy.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="header-top-right">
                                <ul className="clearfix">
                                    {session?.user ? (
                                        <>
                                        <span>Welcome, {session?.user.username || session?.user.name}</span>
                                        <LogoutButton></LogoutButton>
                                        </>
                                    ) : (
                                        <><li><Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li></>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                            <div className="header-logo">
                                <a href="index.html"><span className="theme-logo"></span></a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <div className="header-main-menu">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link active" href="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pet-shop/demo1/about.html">About</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link theme-dropdown-menu" href="#">Pages <i className="fas fa-caret-down"></i></a>
                                                <ul className="nav-dropdown">
                                                    <li><a href="pet-shop/demo1/cart.html">Cart</a></li>
                                                    <li><a href="pet-shop/demo1/wishlist.html">Wishlist</a></li>
                                                    <li><a href="pet-shop/demo1/checkout.html">Checkout</a></li>
                                                    <li><a href="pet-shop/demo1/login.html">My Account</a></li>
                                                    <li><a href="pet-shop/demo1/404.html">404</a></li>
                                                    <li><a href="pet-shop/demo1/faq.html">FAQ's</a></li>
                                                    <li><a href="pet-shop/demo1/privacy-policy.html">Privacy Policy</a></li>
                                                </ul>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop">SHOP</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/blog">BLOG</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pet-shop/demo1/contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                            <div className="header-right-btn clearfix">
                                <ul className="float-right">
                                    <li>
                                        <a className="header-search" href="javascript:void(0)"><i className="fas fa-search"></i></a>
                                        <ul className="search-dropdown">
                                            <li>
                                                <div className="header-search-box">
                                                    <input className="form-control" type="text" name="search" placeholder="Search here..." />
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link className="header-cart" href={`/cart/${session?.user.id}`}><i className="fas fa-shopping-bag"></i> <span className="budge">3</span></Link></li>
                                    <li><a className="header-wishlist" href="javascript:void(0)"><i className="fas fa-heart"></i> <span className="budge">10</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
