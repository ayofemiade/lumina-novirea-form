import React, { forwardRef } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, helperText, className, id, name, ...props }, ref) => {
    const inputId = id || name;
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={inputId}>
                {label}
            </label>
            <input
                ref={ref}
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                id={inputId}
                name={name}
                onClick={(e) => {
                    if (props.type === 'date' && 'showPicker' in e.currentTarget) {
                        try {
                            (e.currentTarget as any).showPicker();
                        } catch (err) {
                            console.debug('showPicker not supported or blocked');
                        }
                    }
                }}
                {...props}
            />
            {error && <span className={styles.error} role="alert">{error}</span>}
            {helperText && !error && <span className={styles.helper}>{helperText}</span>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
