import React, { forwardRef } from 'react';
import styles from './Select.module.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    error?: string;
    placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, options, error, placeholder, id, name, ...props }, ref) => {
    const selectId = id || name;
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={selectId}>
                {label}
            </label>
            <div className={styles.selectWrapper}>
                <select
                    ref={ref}
                    className={`${styles.select} ${error ? styles.selectError : ''}`}
                    id={selectId}
                    name={name}
                    defaultValue=""
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
            {error && <span className={styles.error} role="alert">{error}</span>}
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
