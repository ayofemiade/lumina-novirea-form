'use client';

import { useFormContext } from 'react-hook-form';
import styles from './SectionContent.module.css';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';
import { useEffect } from 'react';

export default function SectionH() {
    const { register, setValue, watch, formState: { errors } } = useFormContext();

    // Auto-set today's date if not set
    const signatureDate = watch('signatureDate');
    useEffect(() => {
        if (!signatureDate) {
            const today = new Date().toISOString().split('T')[0];
            setValue('signatureDate', today);
        }
    }, [signatureDate, setValue]);

    return (
        <div className={styles.container}>
            <div className={styles.declaration}>
                <p className={styles.declarationText}>
                    I confirm that the information provided above is true and accurate to the best of my knowledge.
                    I understand that submission of this form does not guarantee representation by
                    Lumina Novireá Modeling Agency.
                </p>
                <p className={styles.declarationText}>
                    I grant Lumina Novireá Modeling Agency permission to review my application and
                    digitals for evaluation and potential representation.
                </p>
            </div>

            <div className={styles.consentArea}>
                <Checkbox
                    label="I agree to the terms and conditions"
                    {...register('consent')}
                    error={errors.consent?.message as string}
                />
            </div>

            <div className={styles.signatureArea}>
                <Input
                    label="Applicant’s Full Name"
                    placeholder="Your legal full name"
                    {...register('signatureName')}
                    error={errors.signatureName?.message as string}
                />
                <div className={styles.row}>
                    <Input
                        label="Signature (Type your name)"
                        placeholder="Signature"
                        {...register('signature')}
                        error={errors.signature?.message as string}
                    />
                    <Input
                        label="Today's Date"
                        type="date"
                        {...register('signatureDate')}
                        error={errors.signatureDate?.message as string}
                    />
                </div>
            </div>

            <div className={styles.closingMessage}>
                <p>We look forward to discovering you.</p>
            </div>
        </div>
    );
}
