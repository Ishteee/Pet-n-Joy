"use client"; // Mark this as a client component

import { useSession } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "./ui/LogoutButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession(); // Use useSession to get session data

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
                                            <LogoutButton />
                                        </>
                                    ) : (
                                        <li><Link href="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
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
                                            <li className="nav-item">
                                                <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">HOME</Link>
                                            </li>

                                            <li className={"nav-item"}>
                                                <Link className={`nav-link ${pathname === '/pet-shop/demo1/about.html' ? 'active' : ''}`} href="/pet-shop/demo1/about.html">About</Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link ${pathname === '/shop' ? 'active' : ''}`} href="/shop">SHOP</Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link ${pathname === '/blog' ? 'active' : ''}`} href="/blog">BLOG</Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">CONTACT</Link>
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
                                    <li><Link className="header-cart" href={`/cart/${session?.user?.id}`}><i className="fas fa-shopping-bag"></i> <span className="budge">3</span></Link></li>
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
