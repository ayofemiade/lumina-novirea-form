import { z } from 'zod';

const nameRegex = /^[a-zA-Z\s'-]+$/;
const phoneRegex = /^\+?[0-9]{8,15}$/;

// Helper to handle required strings with custom messages
const requiredString = (name: string) => z.string().min(1, { message: `${name} is required` });

export const sectionASchema = z.object({
    fullName: z.string().min(2, { message: "Full name is required" })
        .regex(nameRegex, { message: "Only letters, spaces, hyphens and apostrophes allowed" })
        .transform(s => s.trim().replace(/\s+/g, ' ')),
    stageName: z.string()
        .regex(nameRegex, { message: "Only letters, spaces, hyphens and apostrophes allowed" })
        .transform(s => s.trim().replace(/\s+/g, ' '))
        .optional()
        .or(z.literal('')),
    dob: requiredString("Date of birth"),
    age: z.coerce.number().min(10, { message: "Minimum age is 10" })
        .max(60, { message: "Maximum age is 60" }),
    gender: requiredString("Gender"),
    nationality: z.string().min(2, { message: "Nationality is required" })
        .regex(nameRegex, { message: "Only letters and spaces allowed" }),
    residence: requiredString("Residence"),
    phone: z.string()
        .regex(phoneRegex, { message: "Invalid phone number format" }),
    email: z.string().email({ message: "Invalid email address" })
        .refine(val => val.toLowerCase().endsWith('@gmail.com'), {
            message: "Please use a Gmail address"
        }),
    instagram: z.string()
        .transform(s => s.replace(/\s+/g, '').replace(/^@/, ''))
        .optional()
        .or(z.literal('')),
    tiktok: z.string()
        .transform(s => s.replace(/\s+/g, '').replace(/^@/, ''))
        .optional()
        .or(z.literal('')),
    socialOthers: z.string().optional().or(z.literal('')),
});

export const sectionBSchema = z.object({
    height: z.coerce.number().min(100, { message: "Min height 100cm" }).max(250, { message: "Max height 250cm" }),
    weight: z.coerce.number().min(30, { message: "Min weight 30kg" }).max(200, { message: "Max weight 200kg" }),
    eyeColor: requiredString("Eye color"),
    hairColor: requiredString("Hair color"),
    skinTone: requiredString("Skin tone"),
});

export const sectionCSchema = z.object({
    category: z.array(z.string()).min(1, { message: "Select at least one category" }),
    categoryOther: z.string().optional().or(z.literal('')),
}).refine(data => {
    if (data.category.includes('Other') && (!data.categoryOther || data.categoryOther.trim() === '')) {
        return false;
    }
    return true;
}, {
    message: "Please specify your other category",
    path: ["categoryOther"]
});

export const sectionDSchema = z.object({
    digitalsMethod: z.enum(['upload', 'drive', 'email']),
    digitalsLink: z.string().url({ message: "Invalid URL" }).optional().or(z.literal('')),
    confirmHeadshot: z.boolean(),
    confirmLeftProfile: z.boolean(),
    confirmRightProfile: z.boolean(),
    confirmFullFront: z.boolean(),
    confirmFullSide: z.boolean(),
    confirmFullBack: z.boolean(),
}).refine(data => {
    if (data.digitalsMethod === 'drive' && !data.digitalsLink) return false;
    return true;
}, {
    message: "Drive link is required for this method",
    path: ["digitalsLink"]
});

export const sectionESchema = z.object({
    isSigned: z.enum(['yes', 'no']),
    agencyName: z.string().optional().or(z.literal('')),
    experienceLevel: requiredString("Experience level"),
    previousWork: z.string().optional().or(z.literal('')),
}).refine(data => {
    if (data.isSigned === 'yes' && (!data.agencyName || data.agencyName.trim() === '')) return false;
    return true;
}, {
    message: "Agency name is required",
    path: ["agencyName"]
});

export const sectionFSchema = z.object({
    shortNotice: z.enum(['yes', 'no']),
    travelWillingness: z.enum(['yes', 'no', 'sometimes']),
    restrictions: z.string().optional().or(z.literal('')),
});

export const sectionGSchema = z.object({
    hasTattoos: z.enum(['none', 'yes']),
    tattooDetails: z.string().optional().or(z.literal('')),
    hasPiercings: z.enum(['none', 'yes']),
    piercingDetails: z.string().optional().or(z.literal('')),
    hasScars: z.enum(['none', 'yes']),
    scarDetails: z.string().optional().or(z.literal('')),
}).refine(data => {
    if (data.hasTattoos === 'yes' && (!data.tattooDetails || data.tattooDetails.trim() === '')) return false;
    return true;
}, { message: "Tattoo details required", path: ["tattooDetails"] })
    .refine(data => {
        if (data.hasPiercings === 'yes' && (!data.piercingDetails || data.piercingDetails.trim() === '')) return false;
        return true;
    }, { message: "Piercing details required", path: ["piercingDetails"] })
    .refine(data => {
        if (data.hasScars === 'yes' && (!data.scarDetails || data.scarDetails.trim() === '')) return false;
        return true;
    }, { message: "Scar details required", path: ["scarDetails"] });

export const sectionHSchema = z.object({
    consent: z.boolean().refine(val => val === true, { message: "You must consent to proceed" }),
    signatureName: requiredString("Full name"),
    signature: requiredString("Signature"),
    signatureDate: requiredString("Date"),
});

export const fullFormSchema = z.object({
    ...sectionASchema.shape,
    ...sectionBSchema.shape,
    ...sectionCSchema.shape,
    ...sectionDSchema.shape,
    ...sectionESchema.shape,
    ...sectionFSchema.shape,
    ...sectionGSchema.shape,
    ...sectionHSchema.shape,
});

export type ApplicationFormData = z.infer<typeof fullFormSchema>;
