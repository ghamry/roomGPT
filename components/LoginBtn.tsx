'use client';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import Image from "next/image";

import React from 'react'

function LoginBtn() {
    const { data: session } = useSession()

    if (session) {
        return (<div className="flex max-w-fit items-center justify-items-center space-x-2 ">
            <p>welcome {session?.user?.name}</p>
            {session?.user?.image && (
                <Image width="40" height="40" alt="avatar" src={session?.user?.image} className=" rounded-sm" />
            )}
            <Link
                className="rounded-full border text-white px-5 py-2 text-sm shadow-md hover:bg-gray-500 bg-black-600 font-medium transition"
                href={"/"}
                onClick={() => signOut()}
                rel="noopener noreferrer">
                <p>Sign Out</p>
            </Link>

        </div>)
    }
    return (<Link className="flex max-w-fit items-center justify-center space-x-2 rounded-full border
         border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
        href={"api/auth/signin"}
        rel="noopener noreferrer">

        <p>Sign In</p>
    </Link>)

}

export default LoginBtn  