'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionContent.module.css';
import RadioGroup from '../ui/Radio';
import Input from '../ui/Input';

export default function SectionG() {
    const { register, watch, control, formState: { errors } } = useFormContext();

    const hasTattoos = watch('hasTattoos');
    const hasPiercings = watch('hasPiercings');
    const hasScars = watch('hasScars');

    return (
        <div className={styles.container}>
            <p className={styles.disclosureNote}>
                This information is confidential and used for professional placement only.
            </p>

            <div className={styles.subSection}>
                <Controller
                    name="hasTattoos"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Tattoos"
                            options={[
                                { value: 'none', label: 'None' },
                                { value: 'yes', label: 'Yes' }
                            ]}
                            error={errors.hasTattoos?.message as string}
                            {...field}
                        />
                    )}
                />
                {hasTattoos === 'yes' && (
                    <div style={{ marginTop: '1rem' }}>
                        <Input
                            label="If yes, please specify location & size"
                            placeholder="Details..."
                            {...register('tattooDetails')}
                            error={errors.tattooDetails?.message as string}
                        />
                    </div>
                )}
            </div>

            <div className={styles.subSection}>
                <Controller
                    name="hasPiercings"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Piercings (excluding ears)"
                            options={[
                                { value: 'none', label: 'None' },
                                { value: 'yes', label: 'Yes' }
                            ]}
                            error={errors.hasPiercings?.message as string}
                            {...field}
                        />
                    )}
                />
                {hasPiercings === 'yes' && (
                    <div style={{ marginTop: '1rem' }}>
                        <Input
                            label="If yes, please specify"
                            placeholder="Details..."
                            {...register('piercingDetails')}
                            error={errors.piercingDetails?.message as string}
                        />
                    </div>
                )}
            </div>

            <div className={styles.subSection}>
                <Controller
                    name="hasScars"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Visible Scars/Birthmarks"
                            options={[
                                { value: 'none', label: 'None' },
                                { value: 'yes', label: 'Yes' }
                            ]}
                            error={errors.hasScars?.message as string}
                            {...field}
                        />
                    )}
                />
                {hasScars === 'yes' && (
                    <div style={{ marginTop: '1rem' }}>
                        <Input
                            label="If yes, please specify"
                            placeholder="Details..."
                            {...register('scarDetails')}
                            error={errors.scarDetails?.message as string}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
