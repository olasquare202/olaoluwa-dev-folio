import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Hero = () => {
	return (
		<section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "1s" }}
				></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
					<div className="space-y-4">
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight">
							<span className="block text-foreground">Olaoluwa Esan</span>
							<span className="block mt-2 text-primary">
								.NET Software Engineer
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
							Building robust, scalable applications with C#, .NET Core, and
							modern cloud technologies
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4 pt-4">
						<Button variant="hero" size="lg" asChild>
							<a href="#projects">View Projects</a>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<a href="#contact">Get In Touch</a>
						</Button>
					</div>

					<div className="flex justify-center gap-6 pt-8">
						<a
							href="https://github.com/olasquare202"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-smooth"
							aria-label="GitHub Profile"
						>
							<Github className="w-6 h-6" />
						</a>
						<a
							href="https://www.linkedin.com/in/olaoluwa-esan/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-smooth"
							aria-label="LinkedIn Profile"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a
							href="mailto:olaoluwaesan.dev@gmail.com"
							className="text-muted-foreground hover:text-primary transition-smooth"
							aria-label="Email"
						>
							<Mail className="w-6 h-6" />
						</a>
						<a
							href="tel:+2348066738561"
							className="text-muted-foreground hover:text-primary transition-smooth"
							aria-label="Phone"
						>
							<Phone className="w-6 h-6" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
