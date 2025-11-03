
import { z } from 'zod';

// Form schema using Zod for validation
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  program: z.string().min(1, { message: 'Please select a program' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
