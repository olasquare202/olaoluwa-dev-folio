import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Zap } from "lucide-react";

export const About = () => {
	const highlights = [
		{
			icon: Code2,
			title: "Backend Excellence",
			description:
				"Expert in C#, .NET Core, and building scalable enterprise applications with clean architecture",
		},
		{
			icon: Database,
			title: "Database Mastery",
			description:
				"Proficient in SQL Server, PostgreSQL, Entity Framework, and optimized database design",
		},
		{
			icon: Zap,
			title: "DevOps & Cloud",
			description:
				"Experienced with Azure, Docker, CI/CD pipelines, and agile development practices",
		},
	];

	return (
		<section id="about" className="py-24 px-6">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Results-driven software engineer with years of experience designing
						and developing robust, scalable applications. A collaborative team
						player focused on delivering high-quality solutions that drive
						business value.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{highlights.map((item, index) => {
						const Icon = item.icon;
						return (
							<Card
								key={index}
								className="animate-slide-up"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<CardContent className="p-6 text-center space-y-4">
									<div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mx-auto">
										<Icon className="w-7 h-7 text-primary-foreground" />
									</div>
									<h3 className="text-xl font-semibold">{item.title}</h3>
									<p className="text-muted-foreground">{item.description}</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};
