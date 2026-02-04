import React, { forwardRef } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, error, ...props }, ref) => {
    return (
        <div className={styles.outerContainer}>
            <label className={styles.container}>
                <div className={styles.checkboxWrapper}>
                    <input ref={ref} type="checkbox" className={styles.hiddenInput} {...props} />
                    <div className={styles.box}>
                        <svg viewBox="0 0 24 24" className={styles.checkIcon}>
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <span className={styles.label}>{label}</span>
            </label>
            {error && <span className={styles.error} role="alert">{error}</span>}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
