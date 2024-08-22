"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signInData = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
        });

        if (signInData?.error) {
            console.error("Login failed: ", signInData.error);
        } else {
            console.log("Login successful: ", signInData);
            router.push('/');
            router.refresh();
        }
    };

    return (
        <section className="user-login-area">
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx"><img src="/images/login-bg.jpg" alt="" /></div>
                    <div className="formBx">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign In</h2>
                            <div className="login-logo">
                                <a href="../../index.html"><span className="theme-logo"></span></a>
                            </div>
                            <div className="theme-input-box">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="theme-input-box">
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="theme-input-box">
                                <button className="theme-btn">Login</button>
                            </div>
                            <div
                                onClick={ async (e) => {
                                    e.preventDefault();
                                    await signIn("google", {callbackUrl: "/"})
                                }}
                                class="signup"
                            >
                                Sign in with 
                                <Link href={""}> Google.</Link>
                            </div>
                            <p className="signup">
                                Don't have an account?
                                <Link href="/register"> Sign Up.</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
