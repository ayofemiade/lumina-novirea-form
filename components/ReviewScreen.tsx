'use client';

import React from 'react';
import { useApplicationForm } from '../lib/FormContext';
import styles from './ReviewScreen.module.css';

export default function ReviewScreen() {
    const { methods, setCurrentStep } = useApplicationForm();
    const data = methods.getValues();

    const sections = [
        { id: 1, title: 'Personal Information', fields: ['fullName', 'stageName', 'dob', 'age', 'gender', 'nationality', 'residence', 'phone', 'email'] },
        { id: 2, title: 'Physical Statistics', fields: ['height', 'weight', 'eyeColor', 'hairColor', 'skinTone'] },
        { id: 3, title: 'Model Category', fields: ['category', 'categoryOther'] },
        { id: 4, title: 'Digitals', fields: ['digitalsMethod', 'digitalsLink'] },
        { id: 5, title: 'Experience', fields: ['isSigned', 'agencyName', 'experienceLevel', 'previousWork'] },
        { id: 6, title: 'Availability', fields: ['shortNotice', 'travelWillingness', 'restrictions'] },
        { id: 7, title: 'Health & Appearance', fields: ['hasTattoos', 'hasPiercings', 'hasScars'] },
    ];

    const formatValue = (key: string, value: any) => {
        if (Array.isArray(value)) return value.join(', ');
        if (typeof value === 'boolean') return value ? 'Yes' : 'No';
        if (!value) return 'N/A';
        return value.toString();
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Review Your Application</h3>
            <p className={styles.subtitle}>Please double-check your information before submitting.</p>

            {sections.map(section => (
                <div key={section.id} className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h4>{section.title}</h4>
                        <button
                            type="button"
                            className={styles.editButton}
                            onClick={() => {
                                setCurrentStep(section.id);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            Edit
                        </button>
                    </div>
                    <div className={styles.grid}>
                        {section.fields.map(field => (
                            <div key={field} className={styles.item}>
                                <span className={styles.label}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                                <span className={styles.value}>{formatValue(field, (data as any)[field])}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
