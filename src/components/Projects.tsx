import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
}

const projects: Project[] = [
  {
    title: "Cloud Dashboard",
    description:
      "A comprehensive cloud infrastructure monitoring dashboard with real-time metrics, automated alerts, and cost optimization recommendations. Built for enterprise-scale deployments.",
    tech: ["React", "TypeScript", "D3.js", "AWS", "WebSocket"],
    github: "#",
    external: "#",
  },
  {
    title: "AI Code Assistant",
    description:
      "An intelligent code completion and refactoring tool powered by machine learning. Integrates seamlessly with popular IDEs and supports multiple programming languages.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
    github: "#",
    external: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce solution with headless architecture, supporting multiple storefronts, payment gateways, and inventory management systems.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
    github: "#",
    external: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding container-narrow">
      <h2 className="text-sm font-mono text-muted-foreground mb-2">02.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-12">Featured Projects</h3>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`relative grid md:grid-cols-12 gap-4 items-center ${
              index % 2 === 1 ? "md:text-right" : ""
            }`}
          >
            <div
              className={`md:col-span-7 ${
                index % 2 === 1 ? "md:col-start-6" : ""
              }`}
            >
              <div className="aspect-video rounded-lg bg-card border border-border overflow-hidden hover-lift shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-4xl opacity-50">🖥️</span>
                </div>
              </div>
            </div>

            <div
              className={`md:col-span-6 md:absolute ${
                index % 2 === 1 ? "md:left-0" : "md:right-0"
              } space-y-4`}
            >
              <p className="text-sm font-mono text-accent">Featured Project</p>
              <h4 className="text-xl md:text-2xl font-semibold">
                {project.title}
              </h4>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <ul
                className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground ${
                  index % 2 === 1 ? "md:justify-end" : ""
                }`}
              >
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div
                className={`flex gap-4 ${
                  index % 2 === 1 ? "md:justify-end" : ""
                }`}
              >
                {project.github && (
                  <a
                    href={project.github}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
