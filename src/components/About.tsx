const About = () => {
  const technologies = [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
  ];

  return (
    <section id="about" className="section-padding container-narrow">
      <h2 className="text-sm font-mono text-muted-foreground mb-2">01.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-8">About Me</h3>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hello! I'm Alex, a software engineer based in San Francisco. I enjoy 
            creating things that live on the internet, whether that be websites, 
            applications, or anything in between. My goal is to always build products 
            that provide pixel-perfect, performant experiences.
          </p>
          <p>
            Shortly after graduating from{" "}
            <span className="text-foreground">UC Berkeley</span> with a degree in 
            Computer Science, I joined the engineering team at{" "}
            <span className="text-foreground">TechCorp</span> where I work on a wide 
            variety of interesting and meaningful projects on a daily basis.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 pt-2">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2 text-sm">
                <span className="text-accent">▹</span>
                <span className="font-mono">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative group">
          <div className="aspect-square rounded-lg bg-card border border-border overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-lg border-2 border-primary translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
        </div>
      </div>
    </section>
  );
};

export default About;
