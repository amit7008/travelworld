'use client'

import logoImg from '@/assets/img/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const Header = () => {
  const pathname = usePathname()

  return (
    <header className='container'>
     <Link  href='/'> <img src={logoImg.src} alt='Way to travel in world' /></Link>
      <ul className='mainNav'>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>Home</Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/packages' ? 'active' : ''}`} href='/packages'>Packages</Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/deals' ? 'active' : ''}`} href='/deals'>Deals</Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/destination-guides' ? 'active' : ''}`} href='/destination-guides'>Destination Guides</Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/holiday-themes' ? 'active' : ''}`} href='/holiday-themes'>Holiday Themes</Link>
        </li>
      </ul>
      <Link href='/' className='button'>Plan My Holiday</Link>
    </header>
  )
}

export default Header