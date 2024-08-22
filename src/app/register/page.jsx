"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }

        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        if(response.ok) {
            router.push('/login');
        } else {
            console.error("Registration failed");
        }
    };

    return (
        <section className="user-login-area">
            <div className="container">
                <div className="user signupBx">
                    <div className="formBx">
                        <form onSubmit={handleSubmit}>
                            <h2>Create an account</h2>
                            <div className="login-logo">
                                <a href="../../index.html"><span className="theme-logo"></span></a>
                            </div>
                            <div className="theme-input-box">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="user-name"
                                    placeholder="User Name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
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
                                <input
                                    className="form-control"
                                    type="password"
                                    name="confirm-password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="theme-input-box">
                                <button type="submit" className="theme-btn">Sign Up</button>
                            </div>
                            <div onClick={(e) => {
                            e.preventDefault()
                            signIn("google", {callbackUrl: "/"})
                        }}
                            class="signup">Sign in with 
                            <Link href={""}> Google.</Link>
                        </div>
                            <p className="signup">
                                Already have an account?
                                <Link href="/login"> Sign in.</Link>
                            </p>
                        </form>
                    </div>
                    <div className="imgBx"><img src="/images/signup-bg.jpg" alt="" /></div>
                </div>
            </div>
        </section>
    );
}
