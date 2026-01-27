import React from 'react';
import styles from './Radio.module.css';

interface RadioOption {
    value: string;
    label: string;
}

interface RadioGroupProps {
    label: string;
    name: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function RadioGroup({ label, name, options, value, onChange, error }: RadioGroupProps) {
    return (
        <div className={styles.container}>
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
                                onChange={() => onChange(option.value)}
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
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
