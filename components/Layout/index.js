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
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

const Header = () => {
    const cart = useCart().getCart()
    return (
        <header className="menu">
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