import React from 'react';
import styles from './Select.module.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    error?: string;
    placeholder?: string;
}

export default function Select({ label, options, error, placeholder, ...props }: SelectProps) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={props.id || props.name}>
                {label}
            </label>
            <div className={styles.selectWrapper}>
                <select
                    className={`${styles.select} ${error ? styles.selectError : ''}`}
                    id={props.id || props.name}
                    {...props}
                >
                    <option value="" disabled>{placeholder || 'Select an option'}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <div className={styles.arrowContainer}>
                    <svg viewBox="0 0 24 24" className={styles.arrowIcon}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
