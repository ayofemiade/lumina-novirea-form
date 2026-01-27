import React from 'react';
import Header from './Header';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <div className="container">
                    <p className={styles.copyright} suppressHydrationWarning>
                        © {new Date().getFullYear()} LUMINA NOVIREÁ. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
