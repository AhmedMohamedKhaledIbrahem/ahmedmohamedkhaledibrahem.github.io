
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { projects, Project } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { Video as VideoIcon } from 'lucide-react'; // Renamed to avoid conflict with HTML <video>
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectsProps {
  id: string;
}

export function Projects({ id }: ProjectsProps) {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

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
                              data-ai-hint="app screenshot"
                              className="rounded-md"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-12" />
                    <CarouselNext className="mr-12" />
                  </Carousel>
                  {project.videoPreviewThumbnail && project.videoUrl && (
                    <div
                      className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md group cursor-pointer"
                      onClick={() => setSelectedVideo({ url: project.videoUrl!, title: project.title })}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedVideo({ url: project.videoUrl!, title: project.title }); }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play video preview for ${project.title}`}
                    >
                       <Image
                        src={project.videoPreviewThumbnail}
                        alt={`${project.title} - Video Preview Thumbnail`}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint="video thumbnail"
                        className="rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <VideoIcon className="h-16 w-16 text-white" />
                      </div>
                      {/* Screen reader text moved to aria-label on the parent div */}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedVideo && (
        <Dialog
          open={!!selectedVideo}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedVideo(null);
            }
          }}
        >
          <DialogContent className="max-w-3xl w-[90vw] p-0 border-0 bg-transparent shadow-none data-[state=open]:rounded-lg">
            {/* <DialogHeader className="p-2 bg-background rounded-t-lg absolute top-0 left-0 right-0 z-10">
              <DialogTitle className="text-sm text-primary">{selectedVideo.title} - Preview</DialogTitle>
            </DialogHeader> */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full"
                src={selectedVideo.url}
                controls
                autoPlay
                onEnded={() => setSelectedVideo(null)} // Optional: close dialog on video end
                aria-label={`${selectedVideo.title} video player`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </SectionWrapper>
  );
}
