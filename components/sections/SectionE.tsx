'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionContent.module.css';
import RadioGroup from '../ui/Radio';
import Input from '../ui/Input';

export default function SectionE() {
    const { register, watch, control, formState: { errors } } = useFormContext();

    const isSigned = watch('isSigned');

    return (
        <div className={styles.container}>
            <div className={styles.subSection}>
                <Controller
                    name="isSigned"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Are you signed to any modeling agency currently?"
                            options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' }
                            ]}
                            error={errors.isSigned?.message as string}
                            {...field}
                        />
                    )}
                />
                {isSigned === 'yes' && (
                    <div style={{ marginTop: '1rem' }}>
                        <Input
                            label="If yes, please state agency name"
                            placeholder="Agency name..."
                            {...register('agencyName')}
                            error={errors.agencyName?.message as string}
                        />
                    </div>
                )}
            </div>

            <div className={styles.subSection}>
                <Controller
                    name="experienceLevel"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Modeling Experience"
                            options={[
                                { value: 'beginner', label: 'Beginner (No experience)' },
                                { value: 'some', label: 'Some experience' },
                                { value: 'professional', label: 'Professional' }
                            ]}
                            error={errors.experienceLevel?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>

            <div className={styles.subSection}>
                <h3 className={styles.subTitle}>Previous Work</h3>
                <p className={styles.helpText}>Runways, Shoots, Campaigns — if any.</p>
                <textarea
                    className={styles.textarea}
                    placeholder="List your previous work here..."
                    rows={4}
                    {...register('previousWork')}
                ></textarea>
                {errors.previousWork && <span className={styles.error}>{errors.previousWork.message as string}</span>}
            </div>
        </div>
    );
}
