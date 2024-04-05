import { useState } from 'react';
import { useMediaQuery } from '../../hooks';
import Logo from '../Logo/Logo';
import { Link } from 'react-scroll';
import  styles from '../../styles/header.module.scss';
import  stylesMenu from '../../styles/header.module.scss';


const Header = () => {
    const isMobile = useMediaQuery(640);
    const [menuOpen, setMenuOpen] = useState(false);
    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;
    const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.header__nav__list__item;

    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden');
        setMenuOpen(false);
    }

    const closeMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden');
        setMenuOpen(!menuOpen);

    }

        return(
        <header className={styles.header}>
            <div className={`container ${styles.header_container}`}>
                <Logo />
                {isMobile && <button onClick={handleToggleMenu} className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}>
                    <span/>
                    <span/>
                    <span/>
                </button>}
                <nav className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${menuOpen ? styles.open : ''}`}>
                    <ul className={`${ isMobile ? styles.list_reset : styles.header__nav__list}`}>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" 
                            to='about'
                            spy={spy}
                            smooth={smooth}
                            offset={offset}
                            duration={duration}
                            className={styles.header__nav__list__item__link}
                            >
                                Обо мне</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" 
                            to='about'
                            spy={spy}
                            smooth={smooth}
                            offset={offset}
                            duration={duration}
                            className={styles.header__nav__list__item__link}
                            >
                                Навыки</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" 
                            to='about'
                            spy={spy}
                            smooth={smooth}
                            offset={offset}
                            duration={duration}
                            className={styles.header__nav__list__item__link}
                            >
                                Портфолио</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" 
                            to='about'
                            spy={spy}
                            smooth={smooth}
                            offset={offset}
                            duration={duration}
                            className={styles.header__nav__list__item__link}
                            >
                                Обратная связь</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;