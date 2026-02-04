'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionD.module.css';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';
import RadioGroup from '../ui/Radio';

export default function SectionD() {
    const { register, watch, control, formState: { errors } } = useFormContext();

    const method = watch('digitalsMethod');

    return (
        <div className={styles.container}>
            <div className={styles.instructions}>
                <h3 className={styles.instructionTitle}>Guidelines for Digitals</h3>
                <p className={styles.instructionText}>
                    Digitals (Polaroids) must be natural, clear, and unedited. Wear simple,
                    form-fitting clothing (e.g., plain tank top and jeans/leggings).
                    No makeup, no hair products, and natural lighting is preferred.
                </p>
                <ul className={styles.requirementList}>
                    <li>Headshot (front-facing, neutral)</li>
                    <li>Profile (left & right side)</li>
                    <li>Full body (front, side, & back)</li>
                </ul>
            </div>

            <div className={styles.submissionMethod}>
                <Controller
                    name="digitalsMethod"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="How will you provide your digitals?"
                            options={[
                                { value: 'drive', label: 'Google Drive / Cloud Link' },
                                { value: 'email', label: 'Email via Gmail (Join@luminanovirea.com)' }
                            ]}
                            error={errors.digitalsMethod?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>

            {method === 'drive' && (
                <div className={styles.linkArea}>
                    <p className={styles.methodInfo}>
                        Upload your photos to a folder in Google Drive, Dropbox, or iCloud, then paste the sharing link below.
                    </p>
                    <Input
                        label="Link to Digitals Folder"
                        placeholder="https://drive.google.com/..."
                        {...register('digitalsLink')}
                        error={errors.digitalsLink?.message as string}
                        helperText="Important: Ensure the link sharing is set to 'Anyone with the link' so we can view them."
                    />
                </div>
            )}

            {method === 'email' && (
                <div className={styles.infoBox} style={{ padding: '1.25rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-ivory)', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                        If you prefer to email us, please complete this application first.
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-gold)', fontWeight: '500' }}>
                        Send your photos to: <span style={{ textDecoration: 'underline' }}>join@luminanovirea.com</span>
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-ivory-dark)', marginTop: '0.5rem' }}>
                        Include your full name and the Reference ID you receive at the end.
                    </p>
                </div>
            )}

            <div className={styles.checklist}>
                <span className={styles.checklistLabel}>Please confirm you have all required shots:</span>
                <div className={styles.checkGrid}>
                    <Checkbox label="Headshot" {...register('confirmHeadshot')} />
                    <Checkbox label="Left Profile" {...register('confirmLeftProfile')} />
                    <Checkbox label="Right Profile" {...register('confirmRightProfile')} />
                    <Checkbox label="Full Body (Front)" {...register('confirmFullFront')} />
                    <Checkbox label="Full Body (Side)" {...register('confirmFullSide')} />
                    <Checkbox label="Full Body (Back)" {...register('confirmFullBack')} />
                </div>
            </div>
        </div>
    );
}
