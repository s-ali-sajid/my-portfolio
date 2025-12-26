import { useState } from "react";

interface Job {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    company: "TechCorp",
    title: "Senior Software Engineer",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Lead development of microservices architecture serving 10M+ users",
      "Mentor junior developers and conduct technical interviews",
      "Reduced API response times by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    company: "StartupXYZ",
    title: "Full Stack Developer",
    duration: "Jun 2020 - Dec 2021",
    responsibilities: [
      "Built customer-facing features using React and Node.js",
      "Designed and implemented RESTful APIs and GraphQL endpoints",
      "Collaborated with design team to create intuitive UX",
      "Maintained 95%+ code coverage with comprehensive testing",
    ],
  },
  {
    company: "DevAgency",
    title: "Junior Developer",
    duration: "Aug 2019 - May 2020",
    responsibilities: [
      "Developed responsive web applications for various clients",
      "Participated in agile development processes",
      "Fixed bugs and improved application performance",
      "Wrote documentation for internal tools and APIs",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding container-narrow">
      <h2 className="text-sm font-mono text-muted-foreground mb-2">03.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-12">
        Where I've Worked
      </h3>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {jobs.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-sm font-mono whitespace-nowrap transition-all duration-300 text-left ${
                activeTab === index
                  ? "text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-[2px] bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-[300px]">
          <div className="space-y-4">
            <h4 className="text-lg font-medium">
              {jobs[activeTab].title}{" "}
              <span className="text-primary">@ {jobs[activeTab].company}</span>
            </h4>
            <p className="text-sm font-mono text-muted-foreground">
              {jobs[activeTab].duration}
            </p>
            <ul className="space-y-3">
              {jobs[activeTab].responsibilities.map((resp, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                >
                  <span className="text-accent mt-1">▹</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
