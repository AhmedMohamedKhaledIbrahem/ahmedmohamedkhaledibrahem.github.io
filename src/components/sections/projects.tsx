
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { projects, Project } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Video as VideoIcon, ExternalLink } from 'lucide-react';
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
                <div className="md:col-span-7 px-6 pt-5 pb-6 md:px-8 md:pt-5 md:pb-8 flex flex-col">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-primary">{project.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="space-y-3 text-md text-muted-foreground mb-4">
                    {project.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  {project.repoLink && (
                    <Button asChild variant="outline" className="mt-4 self-start">
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project / Repo
                      </Link>
                    </Button>
                  )}
                </div>
                <div className="md:col-span-5 bg-muted/30 p-4 md:p-6">
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
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300">
                        <VideoIcon className="h-12 w-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
                      </div>
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
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full"
                src={selectedVideo.url}
                controls
                autoPlay
                onEnded={() => setSelectedVideo(null)} 
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
