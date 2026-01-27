import React from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
    return (
        <label className={styles.container}>
            <div className={styles.checkboxWrapper}>
                <input type="checkbox" className={styles.hiddenInput} {...props} />
                <div className={styles.box}>
                    <svg viewBox="0 0 24 24" className={styles.checkIcon}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            </div>
            <span className={styles.label}>{label}</span>
        </label>
    );
}
