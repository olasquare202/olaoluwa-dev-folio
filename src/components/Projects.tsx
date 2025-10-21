import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
	const projects = [
		{
			title: "Hotel Listing Web API",
			description:
				"Enterprise-level hotel listing API with JWT authentication, global error handling, rate limiting, API versioning, pagination, and comprehensive caching. Implements Unit of Work and Generic Repository patterns.",
			tech: ["C#", "ASP.NET Core 6", "Entity Framework", "JWT", "Swagger"],
			// github: "https://github.com/olasquare202/HotelListing.API.NET6",
			github: "https://github.com/olasquare202/HotelListingAPI",
			highlights: [
				"JWT Bearer Auth",
				"Rate Limiting",
				"API Versioning",
				"Unit of Work Pattern",
			],
		},
		{
			title: "E-Medicine Store API",
			description:
				"Full-featured e-commerce backend for online medicine store with admin panel. Admins can manage inventory, track orders, and approve purchases. Complete CRUD operations with comprehensive API documentation.",
			tech: ["C#", ".NET Core", "Entity Framework", "Swagger", "SQL Server"],
			// github: "https://github.com/olasquare202/EcommerceMedicineStoreBack-End",
			github: "https://github.com/olasquare202/EcommerceMedicineStoreBack-End",
			highlights: [
				"Admin Dashboard",
				"Order Management",
				"Inventory System",
				"API Documentation",
			],
		},
		{
			title: "Book Keeping Web App",
			description:
				"Full-stack MVC application for catalog management with complete CRUD functionality. Features responsive Razor pages and deployed on Microsoft Azure for production use.",
			tech: ["ASP.NET Core MVC", "Razor", "Bootstrap", "Sass", "Azure"],
			// link: "https://booklisting20221212214927.azurewebsites.net/",
			link: "https://github.com/olasquare202/BookKeepingWebAPI",
			highlights: [
				"Azure Deployment",
				"Responsive Design",
				"Full CRUD",
				"MVC Architecture",
			],
		},
		{
			title: "Multipurpose Business Website",
			description:
				"Modern, responsive full-stack website showcasing products and services. Features integrated contact forms, social media links, video content, and interactive FAQ carousel.",
			tech: ["JavaScript", "Bootstrap", "Sass", "HTML/CSS"],
			// link: "http://preciousjn.epizy.com/",
			link: "https://olasquare202.github.io/Boostrap-V5-Project-with-SASS/",
			highlights: [
				"Responsive Design",
				"Contact Integration",
				"Video Content",
				"Interactive UI",
			],
		},
	];

	return (
		<section id="projects" className="py-24 px-6 bg-muted/30">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-xl text-muted-foreground">
						Real-world applications showcasing full-stack development expertise
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="animate-slide-up flex flex-col"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardHeader>
								<CardTitle className="text-2xl">{project.title}</CardTitle>
								<CardDescription className="text-base pt-2">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col justify-between space-y-4">
								<div className="space-y-4">
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, i) => (
											<Badge key={i} variant="secondary">
												{tech}
											</Badge>
										))}
									</div>
									<div className="space-y-2">
										{project.highlights.map((highlight, i) => (
											<div
												key={i}
												className="flex gap-2 text-sm text-muted-foreground"
											>
												<span className="text-accent">✓</span>
												<span>{highlight}</span>
											</div>
										))}
									</div>
								</div>
								<div className="flex gap-3 pt-4">
									{project.github && (
										<Button
											variant="outline"
											size="sm"
											asChild
											className="flex-1"
										>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="w-4 h-4" />
												Code
											</a>
										</Button>
									)}
									{project.link && (
										<Button
											variant="default"
											size="sm"
											asChild
											className="flex-1"
										>
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="w-4 h-4" />
												Live Demo
											</a>
										</Button>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
