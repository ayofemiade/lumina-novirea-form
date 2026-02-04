'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useForm, UseFormReturn, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApplicationFormData, fullFormSchema } from './schema';

interface FormContextType {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    totalSteps: number;
    methods: UseFormReturn<ApplicationFormData>;
    isRestored: boolean;
}

const STORAGE_KEY = 'lumina_form_draft';

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProviderWrapper = ({ children, totalSteps }: { children: React.ReactNode, totalSteps: number }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isRestored, setIsRestored] = useState(false);

    const methods = useForm<ApplicationFormData>({
        resolver: zodResolver(fullFormSchema) as any,
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            stageName: '',
            dob: '',
            gender: '',
            nationality: '',
            residence: '',
            phone: '',
            email: '',
            instagram: '',
            tiktok: '',
            socialOthers: '',
            height: 0,
            weight: 0,
            eyeColor: '',
            hairColor: '',
            skinTone: '',
            category: [],
            categoryOther: '',
            digitalsMethod: 'upload',
            digitalsLink: '',
            confirmHeadshot: false,
            confirmLeftProfile: false,
            confirmRightProfile: false,
            confirmFullFront: false,
            confirmFullSide: false,
            confirmFullBack: false,
            isSigned: 'no',
            agencyName: '',
            experienceLevel: '',
            previousWork: '',
            shortNotice: 'no',
            travelWillingness: 'no',
            restrictions: '',
            hasTattoos: 'none',
            tattooDetails: '',
            hasPiercings: 'none',
            piercingDetails: '',
            hasScars: 'none',
            scarDetails: '',
            consent: false,
            signatureName: '',
            signature: '',
            signatureDate: '',
        }
    });

    // Restore from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (data.values) {
                    methods.reset(data.values);
                }
                if (data.step) {
                    setCurrentStep(data.step);
                }
            } catch (e) {
                console.error('Failed to restore form state', e);
            }
        }
        setIsRestored(true);
    }, [methods]);

    // Save to localStorage (debounced)
    useEffect(() => {
        const subscription = methods.watch((value) => {
            const data = {
                values: value,
                step: currentStep,
                updatedAt: new Date().toISOString()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        });
        return () => subscription.unsubscribe();
    }, [methods, currentStep]);

    return (
        <FormContext.Provider value={{
            currentStep,
            setCurrentStep,
            totalSteps,
            methods,
            isRestored
        }}>
            <FormProvider {...methods}>
                {children}
            </FormProvider>
        </FormContext.Provider>
    );
};

export const useApplicationForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useApplicationForm must be used within a FormProviderWrapper');
    }
    return context;
};
