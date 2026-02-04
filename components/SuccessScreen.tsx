'use client';

import styles from './SuccessScreen.module.css';

interface SuccessScreenProps {
    referenceId?: string;
}

export default function SuccessScreen({ referenceId }: SuccessScreenProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" className={styles.icon}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h2 className={styles.title}>Application Received</h2>
                <div className={styles.referenceBadge}>
                    Ref: {referenceId || 'LN-LOADING'}
                </div>
                <p className={styles.message}>
                    Thank you for sharing your story with Lumina Novireá.
                    Our scouting team will review your profile with the utmost care.
                    If there is a potential match, we will be in touch.
                </p>
                <p className={styles.closing}>Discovery is only the beginning.</p>
                <button
                    className="btn btn-outline"
                    onClick={() => window.location.reload()}
                >
                    Return Home
                </button>
            </div>
        </div>
    );
}
