'use server';

import { z } from 'zod';
import { generateEmailIntroduction as generateEmailIntroductionFlow, type EmailIntroductionInput } from '@/ai/flows/email-introduction-generator';

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


const aiEmailGeneratorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  skills: z.string().min(1, "Skills are required (comma-separated)"),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters"),
  contactInfo: z.string().min(5, "Contact info must be at least 5 characters"),
});


export async function generateAIEmail(data: z.infer<typeof aiEmailGeneratorSchema>) {
  try {
    const validatedData = aiEmailGeneratorSchema.parse(data);
    
    const skillsArray = validatedData.skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);

    const inputForAI: EmailIntroductionInput = {
      name: validatedData.name,
      title: validatedData.title,
      skills: skillsArray,
      projectDescription: validatedData.projectDescription,
      contactInfo: validatedData.contactInfo,
    };
    
    const result = await generateEmailIntroductionFlow(inputForAI);
    return { success: true, emailDraft: result.emailDraft };

  } catch (error) {
    console.error("Error generating AI email:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed.", issues: error.issues };
    }
    return { success: false, error: "Failed to generate email. Please try again." };
  }
}
