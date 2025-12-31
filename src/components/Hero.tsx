import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start container-narrow pt-20">
      <div className="space-y-6">
        <p className="text-muted-foreground font-mono text-sm animate-fade-up">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight animate-fade-up animate-delay-100">
          Ali Sajid
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground animate-fade-up animate-delay-200">
          I build scalable backend systems.
        </h2>
        <p className="text-muted-foreground max-w-xl text-lg leading-relaxed animate-fade-up animate-delay-300">
          8 years crafting scalable backend systems. From automated ETL
          pipelines to microservices handling high-volume data — I turn complex
          infrastructure challenges into elegant solutions.
        </p>
        <div className="flex flex-wrap gap-2 pt-2 animate-fade-up animate-delay-350">
          {["Node.js", "TypeScript", "AWS", "Docker"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-mono border border-border rounded-full bg-card/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-8 pt-6 animate-fade-up animate-delay-400">
          {[
            { value: "5+", label: "Industries Served" },
            { value: "120+", label: "Data Migrations" },
            { value: "15+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground pt-4 animate-fade-up animate-delay-450">
          Currently at{" "}
          <a
            href="https://vetdrive.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4"
          >
            VetDrive
          </a>{" "}
          — building SaaS for 120+ veterinary clinics
        </p>
        <div className="pt-4 animate-fade-up animate-delay-500">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View my work
          </a>
        </div>
      </div>
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div> */}
    </section>
  );
};

export default Hero;
