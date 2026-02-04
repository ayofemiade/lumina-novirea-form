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

    // 3. Process data (e.g., save to DB, send email)
    console.log('Server received valid application:', result.data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
        success: true,
        referenceId: `LN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    };
}
