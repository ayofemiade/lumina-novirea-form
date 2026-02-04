'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionContent.module.css';
import Input from '../ui/Input';
import Select from '../ui/Select';

export default function SectionB() {
    const { register, control, formState: { errors } } = useFormContext();

    return (
        <div className={styles.container}>
            <p className={styles.introText}>Please provide accurate and current measurements as seen in your digitals.</p>

            <div className={styles.row}>
                <Input
                    label="Height (cm)"
                    type="number"
                    placeholder="e.g. 175"
                    {...register('height')}
                    error={errors.height?.message as string}
                />
                <Input
                    label="Weight (kg)"
                    type="number"
                    placeholder="e.g. 60"
                    {...register('weight')}
                    error={errors.weight?.message as string}
                />
            </div>

            <div className={styles.featuresGrid}>
                <Controller
                    name="eyeColor"
                    control={control}
                    render={({ field }) => (
                        <Select
                            label="Eye Color"
                            options={[
                                { value: 'black', label: 'Black' },
                                { value: 'brown', label: 'Brown' },
                                { value: 'blue', label: 'Blue' },
                                { value: 'green', label: 'Green' },
                                { value: 'hazel', label: 'Hazel' },
                                { value: 'grey', label: 'Grey' },
                                { value: 'other', label: 'Other' }
                            ]}
                            error={errors.eyeColor?.message as string}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="hairColor"
                    control={control}
                    render={({ field }) => (
                        <Select
                            label="Hair Color"
                            options={[
                                { value: 'black', label: 'Black' },
                                { value: 'brown', label: 'Brown' },
                                { value: 'blonde', label: 'Blonde' },
                                { value: 'red', label: 'Red' },
                                { value: 'grey', label: 'Grey' },
                                { value: 'other', label: 'Other' }
                            ]}
                            error={errors.hairColor?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>

            <Input
                label="Skin Tone/Complexion"
                placeholder="e.g. Fair, Caramel, Ebony"
                {...register('skinTone')}
                error={errors.skinTone?.message as string}
            />
        </div>
    );
}
