import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center container-narrow">
      <div className="space-y-6">
        <p className="text-muted-foreground font-mono text-sm animate-fade-up">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight animate-fade-up animate-delay-100">
          Alex Chen
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground animate-fade-up animate-delay-200">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground max-w-xl text-lg leading-relaxed animate-fade-up animate-delay-300">
          Software engineer specializing in building exceptional digital experiences. 
          Currently focused on creating accessible, human-centered products at{" "}
          <a href="#" className="text-primary hover:underline underline-offset-4">
            TechCorp
          </a>
          .
        </p>
        <div className="pt-4 animate-fade-up animate-delay-400">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View my work
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
