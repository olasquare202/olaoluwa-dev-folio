export const Footer = () => {
	return (
		<footer className="py-8 px-6 border-t border-border/50">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center text-muted-foreground">
					<p>
						© {new Date().getFullYear()} Olaoluwa Esan. Built with React,
						TypeScript, and Tailwind CS.
					</p>
				</div>
			</div>
		</footer>
	);
};
