import { SectionWrapper } from '@/components/common/section-wrapper';
import { skillCategories, SkillCategory } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillsProps {
  id: string;
}

export function Skills({ id }: SkillsProps) {
  return (
    <SectionWrapper id={id} className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category: SkillCategory) => (
          <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center p-3 bg-card rounded-md shadow-sm transition-all duration-200 hover:bg-accent/10 group">
                    <skill.icon className="h-7 w-7 mr-4 text-accent group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span className="text-lg font-medium text-foreground">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
