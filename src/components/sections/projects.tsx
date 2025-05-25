import Image from 'next/image';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { projects, Project } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { Video } from 'lucide-react';

interface ProjectsProps {
  id: string;
}

export function Projects({ id }: ProjectsProps) {
  return (
    <SectionWrapper id={id} className="bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        My Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project: Project) => (
          <Card key={project.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-0 md:p-0">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-primary">{project.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="space-y-3 text-md text-muted-foreground mb-4">
                    {project.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-7 bg-muted/30 p-4 md:p-6">
                  <Carousel className="w-full mb-4 rounded-lg overflow-hidden shadow-md">
                    <CarouselContent>
                      {project.images.map((imgSrc, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video w-full">
                            <Image
                              src={imgSrc}
                              alt={`${project.title} - Screenshot ${index + 1}`}
                              layout="fill"
                              objectFit="contain"
                              data-ai-hint="project screenshot app"
                              className="rounded-md"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-12" />
                    <CarouselNext className="mr-12" />
                  </Carousel>
                  {project.videoPreviewThumbnail && (
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md group cursor-pointer">
                       <Image
                        src={project.videoPreviewThumbnail}
                        alt={`${project.title} - Video Preview`}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint="video play button"
                        className="rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Video className="h-16 w-16 text-white" />
                      </div>
                      <span className="sr-only">Watch video preview for {project.title}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
