'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Styles from './nav-link.module.css'

export default function NavLink ({href , children}) {
  const path = usePathname()

  return ( 
  <>
  <Link 
  href={href}
  className={path.startsWith(href) ?  `${Styles['nav-link']} ${Styles.active}`: Styles['nav-link']}
  >
    {children}
  </Link>
    
  </>)

}