'use client';

import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
    const percentage = (currentStep / totalSteps) * 100;

    const getStepLabel = () => {
        if (currentStep === 8) return 'Final Review';
        if (currentStep === 9) return 'Section H (Declaration)';
        return `Section ${String.fromCharCode(64 + currentStep)}`;
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.stepCounter}>
                <span className={styles.current}>{getStepLabel()}</span>
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
