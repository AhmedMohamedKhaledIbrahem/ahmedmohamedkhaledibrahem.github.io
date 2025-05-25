// 'use client';

// import { useState } from 'react';
// import { SectionWrapper } from '@/components/common/section-wrapper';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useForm, type SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { useToast } from '@/hooks/use-toast';
// import { generateAIEmail } from '@/lib/actions';
// import { Loader2 } from 'lucide-react';

// // Schema matches the one in actions.ts and indirectly the Genkit flow input
// const aiEmailGeneratorSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   title: z.string().min(1, "Title is required"),
//   skills: z.string().min(1, "Skills are required (comma-separated)"),
//   projectDescription: z.string().min(10, "Project description must be at least 10 characters"),
//   contactInfo: z.string().min(5, "Contact info must be at least 5 characters (e.g., email, LinkedIn)"),
// });

// type AIEmailGeneratorFormValues = z.infer<typeof aiEmailGeneratorSchema>;

// interface AIEmailGeneratorProps {
//   id: string;
// }

// export function AIEmailGenerator({ id }: AIEmailGeneratorProps) {
//   const { toast } = useToast();
//   const [generatedEmail, setGeneratedEmail] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<AIEmailGeneratorFormValues>({
//     resolver: zodResolver(aiEmailGeneratorSchema),
//     defaultValues: {
//       name: "",
//       title: "",
//       skills: "",
//       projectDescription: "",
//       contactInfo: "",
//     },
//   });

//   const onSubmit: SubmitHandler<AIEmailGeneratorFormValues> = async (data) => {
//     setIsLoading(true);
//     setGeneratedEmail(null);
//     const result = await generateAIEmail(data);
//     setIsLoading(false);

//     if (result.success && result.emailDraft) {
//       setGeneratedEmail(result.emailDraft);
//       toast({
//         title: "Email Draft Generated!",
//         description: "Your personalized email introduction is ready.",
//       });
//     } else {
//       toast({
//         title: "Error Generating Email",
//         description: result.error || "Failed to generate email. Please check your input and try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <SectionWrapper id={id} className="bg-background">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
//         AI Email Introduction Generator
//       </h2>
//       <div className="grid md:grid-cols-2 gap-12 items-start">
//         <Card className="shadow-lg">
//           <CardHeader>
//             <CardTitle className="text-2xl font-semibold text-primary">Provide Your Details</CardTitle>
//             <CardDescription>
//               Fill in the form below, and our AI will craft a personalized introductory email draft for you.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Your Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="e.g., Jane Doe" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="title"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Your Title</FormLabel>
//                       <FormControl>
//                         <Input placeholder="e.g., Software Engineer" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="skills"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Key Skills (comma-separated)</FormLabel>
//                       <FormControl>
//                         <Input placeholder="e.g., Kotlin, Flutter, Project Management" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="projectDescription"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Highlighted Project Description</FormLabel>
//                       <FormControl>
//                         <Textarea placeholder="Briefly describe a key project..." rows={3} {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="contactInfo"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Your Contact Info (for email signature)</FormLabel>
//                       <FormControl>
//                         <Input placeholder="e.g., jane.doe@email.com | linkedin.com/in/janedoe" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button type="submit" className="w-full" disabled={isLoading}>
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Generating...
//                     </>
//                   ) : (
//                     'Generate Email Draft'
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>

//         <Card className="shadow-lg">
//           <CardHeader>
//             <CardTitle className="text-2xl font-semibold text-primary">Generated Email Draft</CardTitle>
//             <CardDescription>
//               Review your AI-generated email below. Copy and paste it to use.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             {isLoading && (
//               <div className="flex items-center justify-center h-40">
//                 <Loader2 className="h-8 w-8 animate-spin text-primary" />
//               </div>
//             )}
//             {!isLoading && generatedEmail && (
//               <Textarea
//                 readOnly
//                 value={generatedEmail}
//                 className="min-h-[300px] text-sm bg-muted/50"
//                 aria-label="Generated email draft"
//               />
//             )}
//             {!isLoading && !generatedEmail && (
//               <p className="text-muted-foreground text-center py-10">
//                 Your generated email will appear here once you submit the form.
//               </p>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </SectionWrapper>
//   );
// }
