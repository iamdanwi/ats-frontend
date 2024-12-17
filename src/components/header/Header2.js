"use client"; // Mark this as a Client Component



import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import headerlogo  from '../../../public/image/logo.png'
import './Header.css'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Image src={headerlogo} alt="headerlogo" width={50} height={50} />
        </div>
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
          <Link href="/"><h5>Home</h5></Link>
          <Link href="/about"><h5>About Us</h5></Link>
          <Link href="/activities"><h5>Activities</h5></Link>
          <Link href="/packages"><h5>Packages</h5></Link>
          <Link href="/contact"><h5>Contact Us</h5></Link>
          <Link href="/support"><h5>Support</h5></Link>
        </nav>
        <button className="header-login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
