
'use client';

import { SectionWrapper } from '@/components/common/section-wrapper';
import { contactInfo, ContactInfo as ContactInfoType } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface ContactProps {
  id: string;
}

export function Contact({ id }: ContactProps) {
  return (
    <SectionWrapper id={id} className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Contact Me
      </h2>
      <div className="flex justify-center"> {/* Centering wrapper */}
        <Card className="shadow-lg w-full max-w-lg"> {/* Max width for the card */}
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
      </div>
    </SectionWrapper>
  );
}
