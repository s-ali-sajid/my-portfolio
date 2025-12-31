const About = () => {
  const technologies = [
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" className="section-padding container-narrow">
      <h2 className="text-sm font-mono text-muted-foreground mb-2">01.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-8">About Me</h3>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hello! I'm Ali, a Senior Backend Engineer with 8 years of experience
            building scalable systems. I specialize in designing
            high-performance APIs and microservices for SaaS platforms, with a
            focus on Node.js, TypeScript, and cloud infrastructure.
          </p>
          <p>
            After graduating from{" "}
            <span className="text-foreground">
              Muhammad Ali Jinnah University
            </span>{" "}
            with a degree in Computer Science, I've worked across diverse
            industries—from telecommunications and e-commerce to veterinary
            practice management. Currently, I'm at{" "}
            <span className="text-foreground">VetDrive</span>, where I architect
            backend systems and automated ETL pipelines that have onboarded 120+
            clinics with 100% data integrity.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
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
