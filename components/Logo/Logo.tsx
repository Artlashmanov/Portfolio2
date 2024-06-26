/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from '../../styles/logo.module.scss';

const Logo = () => <Link href='/'>
    <img src="/img/LogoOne.png" alt="logo" className={styles.logo} />
</Link>

export default Logo;