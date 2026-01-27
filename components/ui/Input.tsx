import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    helperText?: string;
}

export default function Input({ label, error, helperText, className, ...props }: InputProps) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={props.id || props.name}>
                {label}
            </label>
            <input
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                id={props.id || props.name}
                {...props}
            />
            {error && <span className={styles.error}>{error}</span>}
            {helperText && !error && <span className={styles.helper}>{helperText}</span>}
        </div>
    );
}
