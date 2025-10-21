import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Backend & Frameworks",
      skills: ["C#", ".NET Core", "ASP.NET", "MVC", "Entity Framework", "REST API"]
    },
    {
      category: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MySQL", "Stored Procedures"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Azure", "Azure DevOps", "Docker", "CI/CD", "Git"]
    },
    {
      category: "Frontend & Tools",
      skills: ["React", "JavaScript", "Bootstrap", "Razor Pages", "HTML/CSS", "Sass"]
    },
    {
      category: "Architecture & Practices",
      skills: ["Microservices", "RESTful APIs", "Agile/Scrum", "Unit Testing", "Code Review"]
    },
    {
      category: "Other",
      skills: ["Power Apps", "Swashbuckle", "JSON", "Microsoft Teams"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive toolkit for building modern enterprise applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="space-y-4 animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="default" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
