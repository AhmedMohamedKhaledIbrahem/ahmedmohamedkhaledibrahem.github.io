import { Introduction } from '@/components/sections/introduction';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { AIEmailGenerator } from '@/components/sections/ai-email-generator';

export default function HomePage() {
  return (
    <>
      <Introduction id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <AIEmailGenerator id="ai-tool" />
    </>
  );
}
