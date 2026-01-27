'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CinematicIntro.module.css';

interface CinematicIntroProps {
    onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return;

        // Check if intro was already seen in this session
        const introSeen = sessionStorage.getItem('lumina_intro_seen');
        if (introSeen === 'true') {
            setIsVisible(false);
            onComplete();
            return;
        }

        // Auto-complete intro after 6 seconds for the perfect balance of prestige and speed
        const timer = setTimeout(() => {
            handleComplete();
        }, 6000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const handleComplete = () => {
        setIsExiting(true);
        sessionStorage.setItem('lumina_intro_seen', 'true');

        // Graceful 1-second transition into the form experience
        setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, 1000);
    };

    if (!isVisible) return null;

    return (
        <div className={`${styles.overlay} ${isExiting ? styles.exit : ''}`}>
            <div className={styles.content}>
                <div className={styles.bloom}></div>
                <div className={styles.logoContainer}>
                    <img
                        src="/assets/logo.jpg"
                        alt="Lumina Novireá Logo"
                        className={styles.logoImage}
                    />
                    <div className={styles.textContent}>
                        <h2 className={styles.tagline}>A NEW ERA OF FACES</h2>
                        <span className={styles.subtitle}>ELITE FASHION MANAGEMENT</span>
                    </div>
                </div>
            </div>

            <button
                className={styles.skip}
                onClick={handleComplete}
                aria-label="Skip intro"
            >
                Skip
            </button>
        </div>
    );
}
