import Link from 'next/link';
import NextImage from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logoLink}>
                    <img
                        src="/assets/logo.jpg"
                        alt="Lumina Novireá"
                        className={styles.logoImage}
                    />
                </Link>
                <div className={styles.info}>
                    <span className={styles.agencyName}>LUMINA NOVIREÁ</span>
                    <span className={styles.tagline}>ELITE FASHION AGENCY</span>
                </div>
            </div>
        </header>
    );
}
