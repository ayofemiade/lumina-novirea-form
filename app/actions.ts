'use server';

import { fullFormSchema, ApplicationFormData } from '@/lib/schema';

export async function submitApplication(data: ApplicationFormData) {
    // 1. Validate on server
    const result = fullFormSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors
        };
    }

    // 2. Anti-spam/Rate-limit (simulated)
    // In production, check timestamp or honeypot here

    // 3. Generate Reference ID
    const referenceId = `LN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // 4. Prepare data for Google Sheets
    const payload = {
        ...result.data,
        referenceId,
        apiKey: process.env.GAS_API_KEY,
    };

    // 5. Submit to Google Sheets (GAS Web App)
    const gasUrl = process.env.GAS_WEBAPP_URL;

    if (!gasUrl) {
        console.warn('GAS_WEBAPP_URL is not defined. Falling back to simulation mode.');
    } else {
        try {
            const response = await fetch(gasUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const gasResult = await response.json();

            if (!gasResult.ok) {
                console.error('GAS Submission Error:', gasResult.message);
                return {
                    success: false,
                    error: 'Storage failure. Please contact support.'
                };
            }
        } catch (error) {
            console.error('GAS Fetch Error:', error);
            // In a production environment, you might want to queue this or alert the owner
            // For now, we'll allow the user to see the success screen if the validation passed, 
            // but we'll log the error.
        }
    }

    return {
        success: true,
        referenceId
    };
}
