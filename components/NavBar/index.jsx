import Link from 'next/link';
import styles from './styles.module.css'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
        </div>
    )
}

export default NavBar;