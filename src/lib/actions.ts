
'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  try {
    const validatedData = contactFormSchema.parse(data);
    // In a real application, you would send an email or save to a database here.
    console.log("Contact form submitted:", validatedData);
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed.", issues: error.issues };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
