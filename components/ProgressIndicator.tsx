'use client';

import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
    const percentage = (currentStep / totalSteps) * 100;

    return (
        <div className={styles.wrapper}>
            <div className={styles.stepCounter}>
                <span className={styles.current}>Section {currentStep}</span>
                <span className={styles.total}> / {totalSteps}</span>
            </div>
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
