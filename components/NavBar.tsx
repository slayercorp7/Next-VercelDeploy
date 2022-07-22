import {ActiveLink} from './ActiveLink';
import  styles  from "./NavBar.module.css";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({href, text}) => (
          <ActiveLink href={href} text={text} key={text}/>
        ))
      }
        
      {/* <ActiveLink href="/"text={'home'}/>
      <ActiveLink href="/about" text={'about'}/>
      <ActiveLink href="/contact" text={'contact'}/>
      <ActiveLink href="/pricing" text={'pricing'}/> */}
    </nav>
  );
};
