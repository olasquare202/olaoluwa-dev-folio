import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "ClearlineHMO",
      location: "Lagos",
      role: "Software Engineer",
      period: "Feb 2023 - Present",
      achievements: [
        "Developed NHIS Portal solution from scratch with comprehensive functionalities",
        "Created Microsoft Power App to consume APIs, meeting business demands efficiently",
        "Built MVC application for fuzzy lookup in Excel, comparing drug data across large datasets",
        "Improved customer satisfaction by 40% through effective collaboration with cross-functional teams",
        "Implemented microservices architecture and RESTful APIs with comprehensive documentation"
      ],
      tech: ["C#", ".NET Core", "Power Apps", "Microservices", "Azure DevOps"]
    },
    {
      company: "Archware Technologies",
      location: "Lagos",
      role: "Software Engineer",
      period: "May 2022 - Feb 2023",
      achievements: [
        "Designed and developed high-performance Web API services with C# and .NET Core",
        "Contributed to system architecture ensuring alignment with business objectives",
        "Enhanced database performance and reliability for enterprise applications",
        "Managed deployment to Microsoft Azure using DevOps practices",
        "Worked effectively in Agile/Scrum team environments"
      ],
      tech: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Azure"]
    },
    {
      company: "Opay Oride",
      location: "Akure",
      role: "Software Engineer/Data Analyst",
      period: "May 2019 - Jan 2020",
      achievements: [
        "Monitored and collected data on company operations",
        "Analyzed field data using Python for predictive modeling",
        "Supported management decisions through data-driven insights",
        "Managed rider onboarding and activity monitoring"
      ],
      tech: ["Python", "Data Analysis", "Predictive Modeling"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building enterprise solutions across healthcare, fintech, and technology sectors
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{exp.company}</CardTitle>
                      <p className="text-muted-foreground mt-1">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-primary">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
