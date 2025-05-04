import {z} from 'zod'

export const profileJson = z.object({
    is_senior: z.boolean(),
    graduate_year: z.string().nullable(),
    school: z.string().nullable(),
    major: z.string().nullable(),
    double_major: z.string().nullable(),
    minor: z.string().nullable(),
    student_id: z.string().nullable(),
    name: z.string().nullable(),
    nickname: z.string().nullable(),
    career: z.string().nullable(),
    industry: z.string().nullable(),
    corporation_name: z.string().nullable(),
    fields: z.array(z.string()).nullable(),
    introduction: z.string().nullable(),
    agreement: z.literal(true), // must be agreed to
    submitted_at: z.string().datetime(), // Add timestamp for safety
});
