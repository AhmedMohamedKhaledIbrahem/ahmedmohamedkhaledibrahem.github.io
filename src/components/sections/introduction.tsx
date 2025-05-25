import Image from 'next/image';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { aboutMe } from '@/data/portfolio-data';
import { Card, CardContent } from '@/components/ui/card';

interface IntroductionProps {
  id: string;
}

export function Introduction({ id }: IntroductionProps) {
  return (
    <SectionWrapper id={id} className="bg-background">
      <Card className="overflow-hidden shadow-xl">
        <CardContent className="p-0 md:p-0">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-4">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={aboutMe.professionalPhotoUrl}
                  alt={`${aboutMe.name} - ${aboutMe.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                  data-ai-hint={aboutMe.professionalPhotoAiHint}
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-8 p-6 md:p-10 lg:p-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {aboutMe.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                {aboutMe.title}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                {aboutMe.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
