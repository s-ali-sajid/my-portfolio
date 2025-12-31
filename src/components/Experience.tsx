import { useState } from "react";

interface Job {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    company: "VetDrive",
    title: "Senior Software Engineer",
    duration: "Dec 2022 - Present",
    responsibilities: [
      "Architected scalable Node.js microservices and RESTful APIs handling high-volume data with 100% data integrity",
      "Built automated ETL pipelines that reduced client onboarding from 2 weeks to 3 days (78% improvement)",
      "Engineered third-party integrations (QuickBooks, Sage) for real-time transaction synchronization",
      "Improved system performance by 40% through code refactoring, caching strategies, and database optimization",
      "Implemented CI/CD pipelines using Docker and AWS, improving deployment reliability",
    ],
  },
  {
    company: "Folio3",
    title: "Software Engineer",
    duration: "Feb 2022 - Dec 2022",
    responsibilities: [
      "Delivered 15+ backend customizations for enterprise e-commerce clients",
      "Developed backend automation workflows using SuiteScript 2.x, improving operational efficiency by 60%",
      "Built custom RESTful integrations connecting NetSuite with third-party platforms",
      "Created real-time event management module with calendar functionality",
    ],
  },
  {
    company: "Shabakkat Cellular",
    title: "Full-Stack Developer",
    duration: "Aug 2019 - Jan 2022",
    responsibilities: [
      "Built mission-critical GIS monitoring system for Ericsson-Mobily telecommunications project",
      "Designed scalable backend services using Node.js/Express.js processing real-time 2G/3G/TDD network data",
      "Built RESTful APIs with MongoDB handling 1,000+ daily requests with high availability",
      "Reduced network monitoring response time by 75% through performance optimization",
    ],
  },
  {
    company: "Zadfresh",
    title: "Android Developer",
    duration: "Sep 2018 - May 2019",
    responsibilities: [
      "Enhanced e-commerce apps (ZAD, Tayar) serving 100K+ users",
      "Built scalable backend integrations for location-based services using Google Location and Geofence SDK",
      "Developed real-time driver tracking features handling high-volume concurrent requests",
    ],
  },
  {
    company: "Excellent Solutions",
    title: "Android Developer",
    duration: "Oct 2017 - Aug 2018",
    responsibilities: [
      "Developed features for CAPABLE e-learning platform, improving student engagement by 30%",
      "Optimized application performance and resolved critical bugs",
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
