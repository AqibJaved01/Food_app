'use client'
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Styles from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
export default function MainHeader () {
    const path = usePathname()

    return <>
    <MainHeaderBackground/>
    <header className={Styles.header}>

        <Link className={Styles.logo} href='/'>
          <Image src={logoImg} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={Styles.nav}>
            <ul>
                <li>
                    <NavLink href='/meals'>Meals</NavLink>
                </li>
                <li>
                    <NavLink href='/community'>Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
}