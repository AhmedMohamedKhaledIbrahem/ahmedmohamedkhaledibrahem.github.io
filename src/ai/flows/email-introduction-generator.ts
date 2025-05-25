'use server';

/**
 * @fileOverview Generates a draft for an introductory email based on user portfolio details.
 *
 * - generateEmailIntroduction - A function that generates the email draft.
 * - EmailIntroductionInput - The input type for the generateEmailIntroduction function.
 * - EmailIntroductionOutput - The return type for the generateEmailIntroduction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmailIntroductionInputSchema = z.object({
  name: z.string().describe('The name of the user.'),
  title: z.string().describe('The job title of the user.'),
  skills: z.array(z.string()).describe('A list of the user skills.'),
  projectDescription: z.string().describe('A brief description of a highlighted project.'),
  contactInfo: z.string().describe('The contact information of the user (email, LinkedIn, Github, etc.).'),
});
export type EmailIntroductionInput = z.infer<typeof EmailIntroductionInputSchema>;

const EmailIntroductionOutputSchema = z.object({
  emailDraft: z.string().describe('A draft for an introductory email.'),
});
export type EmailIntroductionOutput = z.infer<typeof EmailIntroductionOutputSchema>;

export async function generateEmailIntroduction(input: EmailIntroductionInput): Promise<EmailIntroductionOutput> {
  return generateEmailIntroductionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'emailIntroductionPrompt',
  input: {schema: EmailIntroductionInputSchema},
  output: {schema: EmailIntroductionOutputSchema},
  prompt: `You are an expert email writer, who can generate introductory emails based on provided portfolio details.

  Generate a personalized introductory email draft based on the following information:

  Name: {{{name}}}
  Title: {{{title}}}
  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Project Description: {{{projectDescription}}}
  Contact Information: {{{contactInfo}}}
  `,
});

const generateEmailIntroductionFlow = ai.defineFlow(
  {
    name: 'generateEmailIntroductionFlow',
    inputSchema: EmailIntroductionInputSchema,
    outputSchema: EmailIntroductionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
