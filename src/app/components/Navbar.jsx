"use client"; // Mark this as a client component

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Updated imports
import { useEffect, useState } from "react";
import '../styles/style.css';
import styles from '@/app/HomePage.module.css';
import LoadingSpinner from "./ui/LoadingSpinner";

export default function Navbar({ setLoading }) {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session } = useSession();
    const [path, setPath] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [loadingCart, setLoadingCart] = useState(true);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const isExcludedPath = pathname === "/admin" || pathname === "/adminTransactions" || pathname === "/adminInventory" || pathname === "/adminOrders";

    const handleSearchClick = () => {
        setIsSearchActive(prevState => !prevState);
    };

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

    const fetchItems = async () => {
        if (session?.user?.id) {
            setLoadingCart(true);
            const res = await fetch(`https://pet-shop-rust.vercel.app/api/cart/${session.user.id}`);
            const data = await res.json();
            if (res.ok) {
                setCartItems(data.cartItems);
            }
            setLoadingCart(false);
        }
    };

    // Fetch cart items when component mounts or session changes
    useEffect(() => {
        if (session) {
            fetchItems();
        }
    }, [session]);

    // Calculate total number of items in the cart when cartItems change
    useEffect(() => {
        const items = cartItems.reduce((total, item) => total + item.quantity, 0);
        setTotalItems(items); // Update total items when cartItems changes
    }, [cartItems]);



    const handleSearchSubmit = () => {

        if (searchTerm.trim() === '') {
            alert('Please enter a search term');
            return;
        }
        // Perform the search logic (e.g., call an API, update state, etc.)
        sessionStorage.setItem('searchTerm', searchTerm);
        router.push('/shop');
        setIsSearchActive(prevState => !prevState);
        setPath("/shop");
    };


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setLoading(true);
            handleSearchSubmit();
        }
    };

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
                                            <span>Welcome, {session.user.username || session?.user.name}</span>
                                            <Link onClick={() => handleClick("/account")} href="/account">
                                                <i className="fas fa-solid fa-user" style={{ color: "#000000" }}></i>
                                            </Link>
                                        </>
                                    ) : (
                                        pathname === "/admin" || pathname === "/adminAddProduct" || pathname === "/adminInventory" || pathname === "/adminOrders" || pathname === "/adminReviews" ? (
                                            <>
                                                <span>Welcome, Admin</span>
                                                <Link onClick={() => router.push("/")} href="/">
                                                    <span>Logout</span>
                                                </Link>
                                            </>
                                        ) : (
                                            <li>
                                                <Link onClick={() => handleClick("/login")} href="/login">
                                                    <i className="fas fa-sign-in-alt"></i> Login
                                                </Link>
                                            </li>
                                        )
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
                                <Link onClick={() => handleClick("/")} href="/"><span className="theme-logo"></span></Link>
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
                                            <>
                                                {pathname === "/admin" || pathname === "/adminAddProduct" || pathname === "/adminInventory" || pathname === "/adminOrders" || pathname === "/adminReviews" ? (
                                                    <>
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === "/adminReviews" ? 'active' : ''}`} onClick={() => handleClick("/adminReviews")} href="/adminReviews">Customer Reviews</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === '/adminAddProduct' ? 'active' : ''}`} onClick={() => handleClick("/adminAddProduct")} href="/adminAddProduct">Add Product</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === '/adminInventory' ? 'active' : ''}`} onClick={() => handleClick("/adminInventory")} href="/adminInventory">Inventory</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === '/adminOrders' ? 'active' : ''}`} onClick={() => handleClick("/adminOrders")} href="/adminOrders">Orders</Link>
                                                        </li>
                                                    </>
                                                ) : (
                                                    <>
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => handleClick("/")} href="/">HOME</Link>
                                                        </li>
                                                        
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === '/shop' ? 'active' : ''}`} onClick={() => handleClick("/shop")} href="/shop">SHOP</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === '/wishlist' ? 'active' : ''}`} onClick={() => handleClick("/wishlist")} href="/wishlist">WISHLIST</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => handleClick("/contact")} href="/contact">CONTACT</Link>
                                                        </li>
                                                    </>
                                                )}
                                            </>

                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                            <div className="header-right-btn clearfix">

                                <>
                                    {!isExcludedPath ? (
                                        <ul className="float-right">
                                            <li>
                                                <a className={styles.searchIcon}>
                                                    <i className={`fas fa-search ${styles.searchIcon}`} onClick={handleSearchClick}></i>
                                                </a>
                                                <ul className={`search-dropdown ${isSearchActive ? 'search-active' : ''}`}>
                                                    <li>
                                                        <div className="header-search-box">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                name="search"
                                                                placeholder="Search here..."
                                                                value={searchTerm}
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                                onKeyDown={handleKeyDown}
                                                            />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="header-cart" onClick={() => handleClick("/cart")} href={"/cart"}>
                                                    {loadingCart && session ? (
                                                        <i className="fas fa-spinner fa-spin"></i>
                                                    ) : (
                                                        <>
                                                            <i className="fas fa-shopping-bag"></i>
                                                            <span className="budge">{totalItems}</span>
                                                        </>
                                                    )}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="header-wallet" onClick={() => handleClick("/wallet")} href={"/wallet"}>
                                                    <i className="fas fa-wallet"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    ) : null}
                                </>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
