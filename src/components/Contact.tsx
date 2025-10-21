import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "olaoluwaesan.dev@gmail.com",
			href: "mailto:olaoluwaesan.dev@gmail.com",
		},
		{
			icon: Phone,
			label: "Phone",
			value: "+234 806 673 8561",
			href: "tel:+2348066738561",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Lagos, Nigeria",
			href: null,
		},
	];

	const socialLinks = [
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/olasquare202",
			color: "hover:text-foreground",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/olaoluwa-esan/",
			color: "hover:text-primary",
		},
	];

	return (
		<section id="contact" className="py-24 px-6">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
					<p className="text-xl text-muted-foreground">
						Let's discuss your next project or opportunity
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6 mb-12">
					{contactInfo.map((info, index) => {
						const Icon = info.icon;
						return (
							<Card
								key={index}
								className="animate-slide-up"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<CardContent className="p-6 text-center space-y-3">
									<div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto">
										<Icon className="w-6 h-6 text-primary-foreground" />
									</div>
									<div>
										<p className="text-sm text-muted-foreground mb-1">
											{info.label}
										</p>
										{info.href ? (
											<a
												href={info.href}
												className="font-medium hover:text-primary transition-smooth"
											>
												{info.value}
											</a>
										) : (
											<p className="font-medium">{info.value}</p>
										)}
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="text-center space-y-6 animate-fade-in">
					<div className="flex justify-center gap-4">
						{socialLinks.map((social, index) => {
							const Icon = social.icon;
							return (
								<Button key={index} variant="outline" size="lg" asChild>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`${social.color} transition-smooth`}
									>
										<Icon className="w-5 h-5" />
										{social.label}
									</a>
								</Button>
							);
						})}
					</div>

					<Button variant="hero" size="lg" asChild>
						<a href="mailto:olaoluwaesan.dev@gmail.com">Send a Message</a>
					</Button>
				</div>
			</div>
		</section>
	);
};
