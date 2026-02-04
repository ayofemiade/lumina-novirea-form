'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionContent.module.css';
import RadioGroup from '../ui/Radio';

export default function SectionF() {
    const { register, control, formState: { errors } } = useFormContext();

    return (
        <div className={styles.container}>
            <div className={styles.subSection}>
                <Controller
                    name="shortNotice"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Are you available for castings, fittings, and bookings on short notice?"
                            options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' }
                            ]}
                            error={errors.shortNotice?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>

            <div className={styles.subSection}>
                <Controller
                    name="travelWillingness"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Are you willing to travel for jobs?"
                            options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' },
                                { value: 'sometimes', label: 'Sometimes' }
                            ]}
                            error={errors.travelWillingness?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>

            <div className={styles.subSection}>
                <h3 className={styles.subTitle}>Restrictions</h3>
                <p className={styles.helpText}>Any restrictions we should be aware of (school, work, health, etc.)</p>
                <textarea
                    className={styles.textarea}
                    placeholder="Specify any restrictions here..."
                    rows={3}
                    {...register('restrictions')}
                ></textarea>
                {errors.restrictions && <span className={styles.error}>{errors.restrictions.message as string}</span>}
            </div>
        </div>
    );
}
