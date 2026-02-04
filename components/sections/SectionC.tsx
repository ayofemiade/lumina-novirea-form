'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionContent.module.css';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';

export default function SectionC() {
    const { register, watch, control, formState: { errors } } = useFormContext();

    const categories = [
        'Fashion / Runway', 'Commercial', 'Editorial', 'Beauty',
        'Fitness', 'Plus-Size', 'Petite', 'Alternative / Creative',
        'Lifestyle', 'Promotional / Brand Model', 'Other'
    ];

    const selectedCategories = watch('category') || [];
    const showOther = selectedCategories.includes('Other');

    return (
        <div className={styles.container}>
            <p className={styles.introText}>Tick all that apply to your profile. Select at least one.</p>

            <Controller
                name="category"
                control={control}
                render={({ field }) => (
                    <div className={styles.checkGrid}>
                        {categories.map(cat => (
                            <Checkbox
                                key={cat}
                                label={cat}
                                value={cat}
                                checked={field.value?.includes(cat)}
                                onChange={(e) => {
                                    const value = (e.target as HTMLInputElement).value;
                                    const current = field.value || [];
                                    const next = current.includes(value)
                                        ? current.filter((v: string) => v !== value)
                                        : [...current, value];
                                    field.onChange(next);
                                }}
                            />
                        ))}
                    </div>
                )}
            />
            {errors.category && <span className={styles.error} style={{ color: 'var(--color-gold)', fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>{errors.category.message as string}</span>}

            {showOther && (
                <div style={{ marginTop: '1.5rem' }}>
                    <Input
                        label="Other category (please specify)"
                        placeholder="Specify here..."
                        {...register('categoryOther')}
                        error={errors.categoryOther?.message as string}
                    />
                </div>
            )}
        </div>
    );
}
