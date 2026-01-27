'use client';

import { useState } from 'react';
import CinematicIntro from '@/components/CinematicIntro';
import PageLayout from '@/components/PageLayout';
import ApplicationForm from '@/components/ApplicationForm';

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <CinematicIntro onComplete={() => setIntroComplete(true)} />}

      <div style={{
        opacity: introComplete ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        visibility: introComplete ? 'visible' : 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <PageLayout>
          <ApplicationForm />
        </PageLayout>
      </div>
    </>
  );
}
