"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/app/account/ProfileClientComponent.module.css";


const LogoutButton = () => {
    //const router = useRouter();
    return(
        // <Link style={{color: "white"}} href={""} onClick={(e) => {
        //     e.preventDefault()
        //     signOut({ callbackUrl: '/' })
        //     router.refresh();
        // }}><i className="fas fa-sign-in-alt"></i> Logout
        // </Link>
        <button className={styles.signOutButton} onClick={() => signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/`,
        })
    }>Logout</button>
    );
}

export default LogoutButton;