import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from "next/head"

export default function Layout({children}){
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>PokéNext</title>
        </Head>
            <Navbar />
            <main className="main-conteiner">{children}</main>
            <Footer />
        </>
    )
}