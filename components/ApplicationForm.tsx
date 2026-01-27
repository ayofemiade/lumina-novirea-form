'use client';

import { useState, useMemo } from 'react';
import styles from './ApplicationForm.module.css';
import ProgressIndicator from './ProgressIndicator';
import SuccessScreen from './SuccessScreen';

// Sections
import SectionA from './sections/SectionA';
import SectionB from './sections/SectionB';
import SectionC from './sections/SectionC';
import SectionD from './sections/SectionD';
import SectionE from './sections/SectionE';
import SectionF from './sections/SectionF';
import SectionG from './sections/SectionG';
import SectionH from './sections/SectionH';

const SECTIONS = [
    { id: 'A', title: 'Personal Information', component: SectionA },
    { id: 'B', title: 'Physical Statistics', component: SectionB },
    { id: 'C', title: 'Model Category', component: SectionC },
    { id: 'D', title: 'Digitals (Polaroids)', component: SectionD },
    { id: 'E', title: 'Experience & Background', component: SectionE },
    { id: 'F', title: 'Availability & Commitment', component: SectionF },
    { id: 'G', title: 'Health & Appearance', component: SectionG },
    { id: 'H', title: 'Declaration & Consent', component: SectionH }
];

export default function ApplicationForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const totalSteps = SECTIONS.length;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const currentSection = useMemo(() => SECTIONS[currentStep - 1], [currentStep]);
    const ActiveComponent = currentSection.component;

    if (isSubmitted) {
        return <SuccessScreen />;
    }

    return (
        <div className={`container ${styles.formWrapper}`}>
            <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

            <div className={styles.sectionHeader} key={`header-${currentStep}`}>
                <span className={styles.sectionId}>Section {currentSection.id}</span>
                <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
            </div>

            <div className={styles.formContent} key={`content-${currentStep}`}>
                <ActiveComponent />
            </div>

            <div className={styles.navigation}>
                <button
                    className="btn btn-outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                >
                    Previous
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                >
                    {currentStep === totalSteps ? 'Complete Application' : 'Continue'}
                </button>
            </div>

            <p className={styles.footerNote}>
                Step {currentStep} of {totalSteps} — Your information is encrypted and secure.
            </p>
        </div>
    );
}
