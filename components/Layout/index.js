import Head from 'next/head'
import Link from "next/link"

import { CardIcon, HouseIcon } from '../Icons'
import { useCart } from '../../hooks/useCart'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Shopping</title>
                <meta name="example test shopping app" content="Shopping app " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="pt-[80px] px-[5%] w-full m-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
}

const Header = () => {
    const cart = useCart().getCart()
    return (
        <header className="menu fixed w-screen font-bold px-10 py-4 z-10 ">
            <nav>
                <ul className="flex justify-between">
                    <li className='underline-offset-4 hover:underline'>
                        <Link href={"/"}>
                            <a>
                                <HouseIcon />
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li className='underline-offset-4 hover:underline'>
                        <Link href={"/Details"}>
                            <a>
                                <CardIcon />
                                <span>{cart.length} Products</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                &#169; Shopping App {new Date().getFullYear()}
            </p>
        </footer>
    )
}