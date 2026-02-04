'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionD.module.css';
import FileUpload from '../ui/FileUpload';
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
                            label="Submission Method"
                            options={[
                                { value: 'upload', label: 'Online form upload' },
                                { value: 'drive', label: 'Google Drive link' },
                                { value: 'email', label: 'Email attachment (Apply now, send later)' }
                            ]}
                            error={errors.digitalsMethod?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>

            {method === 'upload' && (
                <div className={styles.uploadArea}>
                    <FileUpload
                        label="Upload Digitals (Max 10MB per image)"
                        onFileSelect={() => { }}
                        acceptedTypes="image/*"
                    />
                    <p className={styles.helpText} style={{ marginTop: '0.5rem', opacity: 0.7, fontSize: '0.8rem' }}>
                        * Note: File upload integration requires backend setup. For this demo, please use Google Drive if possible.
                    </p>
                </div>
            )}

            {method === 'drive' && (
                <div className={styles.linkArea}>
                    <Input
                        label="Link to Digitals"
                        placeholder="https://drive.google.com/..."
                        {...register('digitalsLink')}
                        error={errors.digitalsLink?.message as string}
                        helperText="Ensure link sharing is set to 'Anyone with the link'"
                    />
                </div>
            )}

            {method === 'email' && (
                <div className={styles.infoBox} style={{ padding: '1rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
                        After submitting this form, please email your digitals to <strong>join@luminanovirea.com</strong> with your full name as the subject.
                    </p>
                </div>
            )}

            <div className={styles.checklist}>
                <span className={styles.checklistLabel}>Please confirm you have included:</span>
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
