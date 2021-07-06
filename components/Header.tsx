import Link from 'next/link'
import PageConfig from '../config/config';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <Link href="/">
          <a className="logo">
            <span className="logo__tiny">{PageConfig.logo.firstLine}</span>
            <span className="logo__strong">{PageConfig.logo.secondLine}</span>
          </a>
        </Link>
        <button 
          type="button" 
          className={'menuToggler ' + (mobileMenuStatus ? 'active' : '')} 
          onClick={(e) => {setMobileMenuStatus(!mobileMenuStatus)}}
        >
          <div className="menuToggler__line"></div>
          <div className="menuToggler__line"></div>
          <div className="menuToggler__line"></div>
        </button>
        <ul className={'mobileMenu ' + (mobileMenuStatus ? 'active' : '')}>
          {PageConfig.menu.map(menuItem => {
            return <li key={String(menuItem.url)}>
                      <Link href={menuItem.url}>
                        <a onClick={(e) => {setMobileMenuStatus(false)}}>{menuItem.label}</a>
                      </Link>
                    </li>
          })}
        </ul>
      </div>
    </div>
  );

}