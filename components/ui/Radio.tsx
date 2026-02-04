'use client';

import React, { forwardRef } from 'react';
import styles from './Radio.module.css';

interface RadioOption {
    value: string;
    label: string;
}

interface RadioGroupProps {
    label: string;
    name: string;
    options: RadioOption[];
    error?: string;
    value?: string;
    onChange?: (value: any) => void;
    onBlur?: (e: any) => void;
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ label, name, options, error, value, onChange, onBlur }, ref) => {
    return (
        <div className={styles.container} ref={ref}>
            <span className={styles.groupLabel}>{label}</span>
            <div className={styles.optionsGrid}>
                {options.map((option) => (
                    <label key={option.value} className={styles.option}>
                        <div className={styles.radioWrapper}>
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={(e) => onChange?.(e.target.value)}
                                onBlur={onBlur}
                                className={styles.hiddenInput}
                            />
                            <div className={styles.circle}>
                                <div className={styles.innerCircle}></div>
                            </div>
                        </div>
                        <span className={styles.label}>{option.label}</span>
                    </label>
                ))}
            </div>
            {error && <span className={styles.error} role="alert">{error}</span>}
        </div>
    );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
