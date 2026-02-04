'use client';

import { useFormContext, Controller } from 'react-hook-form';
import styles from './SectionContent.module.css';
import Input from '../ui/Input';
import RadioGroup from '../ui/Radio';
import { useEffect } from 'react';

export default function SectionA() {
    const { register, watch, setValue, control, formState: { errors } } = useFormContext();

    // Auto-calculate age from DOB
    const dob = watch('dob');
    useEffect(() => {
        if (dob) {
            const birthDate = new Date(dob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age > 0) setValue('age', age, { shouldValidate: true });
        }
    }, [dob, setValue]);

    return (
        <div className={styles.container}>
            <Input
                label="Full Name (as on legal ID)"
                placeholder="e.g. Naomi Campbell"
                {...register('fullName')}
                error={errors.fullName?.message as string}
            />
            <Input
                label="Preferred/Stage Name (if any)"
                placeholder="e.g. Naomi"
                {...register('stageName')}
                error={errors.stageName?.message as string}
            />
            <div className={styles.row}>
                <Input
                    label="Date of Birth"
                    type="date"
                    {...register('dob')}
                    error={errors.dob?.message as string}
                    helperText="Must be 10-60 years old"
                />
                <Input
                    label="Age"
                    type="number"
                    placeholder="20"
                    {...register('age')}
                    error={errors.age?.message as string}
                    readOnly
                />
            </div>

            <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                    <RadioGroup
                        label="Gender"
                        options={[
                            { value: 'female', label: 'Female' },
                            { value: 'male', label: 'Male' },
                            { value: 'non-binary', label: 'Non-binary' },
                            { value: 'prefer-not-to-say', label: 'Prefer not to say' }
                        ]}
                        error={errors.gender?.message as string}
                        {...field}
                    />
                )}
            />

            <Input
                label="Nationality"
                placeholder="e.g. British"
                {...register('nationality')}
                error={errors.nationality?.message as string}
            />
            <Input
                label="State & City of Residence"
                placeholder="e.g. London, UK"
                {...register('residence')}
                error={errors.residence?.message as string}
            />
            <Input
                label="Phone Number (WhatsApp preferred)"
                type="tel"
                placeholder="e.g. +2348012345678"
                {...register('phone')}
                error={errors.phone?.message as string}
                helperText="Digits and leading + only (8-15 digits)"
            />
            <Input
                label="Email Address"
                type="email"
                placeholder="name@gmail.com"
                {...register('email')}
                error={errors.email?.message as string}
                helperText="Please use a Gmail address"
            />

            <div className={styles.subSection}>
                <h3 className={styles.subTitle}>Social Media Handles</h3>
                <Input
                    label="Instagram"
                    placeholder="@username"
                    {...register('instagram')}
                    error={errors.instagram?.message as string}
                />
                <Input
                    label="TikTok"
                    placeholder="@username"
                    {...register('tiktok')}
                    error={errors.tiktok?.message as string}
                />
                <Input
                    label="Others"
                    placeholder="e.g. X, Portfolio link"
                    {...register('socialOthers')}
                    error={errors.socialOthers?.message as string}
                />
            </div>
        </div>
    );
}
