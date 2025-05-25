'use client';

import { SectionWrapper } from '@/components/common/section-wrapper';
import { contactInfo, ContactInfo as ContactInfoType } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/actions';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, {message: "Message must be less than 500 characters."}),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactProps {
  id: string;
}

export function Contact({ id }: ContactProps) {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    const result = await submitContactForm(data);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <SectionWrapper id={id} className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Contact Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {contactInfo.map((info: ContactInfoType) => (
              <div key={info.type} className="flex items-center">
                <info.icon className="h-8 w-8 mr-4 text-accent" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-lg">{info.label}</h4>
                  {info.href ? (
                    <Link href={info.href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors break-all">
                      {info.value}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground break-all">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message here..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
