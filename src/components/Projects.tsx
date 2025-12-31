import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  external?: string;
}

const projects: Project[] = [
  {
    title: "VetDrive Platform",
    description:
      "Cloud-based practice management SaaS platform serving 120+ veterinary clinics. Architected scalable Node.js microservices and RESTful APIs with automated ETL pipelines that reduced client onboarding from 2 weeks to 3 days.",
    tech: ["Node.js", "TypeScript", "AWS", "Docker", "MongoDB"],
    external: "https://vetdrive.co",
  },
  {
    title: "GIS Monitoring System",
    description:
      "Mission-critical real-time monitoring system for Ericsson-Mobily telecommunications project. Built scalable backend services processing 2G/3G/TDD network data with RESTful APIs handling 1,000+ daily requests.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "ZAD & Tayar Apps",
    description:
      "Enhanced e-commerce mobile applications serving 100K+ users. Built real-time driver tracking features and location-based services with high-volume concurrent request handling.",
    tech: ["Java", "Android SDK", "Google Location API", "Geofence SDK"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding container-narrow">
      <h2 className="text-sm font-mono text-muted-foreground mb-2">02.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-12">
        Featured Projects
      </h3>

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
              {project.external && (
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
