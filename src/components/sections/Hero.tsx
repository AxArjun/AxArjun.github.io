"use client";

import { Terminal } from "@/components/ui/Terminal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowDown, Download, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const quickLinks = [
  {
    icon: Mail,
    customIcon: null as null | typeof GithubIcon,
    label: "Email",
    href: "mailto:arjunramprasad.2005@gmail.com",
  },
  {
    icon: null,
    customIcon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/AxArjun",
  },
  {
    icon: null,
    customIcon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/axarjun/",
  },
  {
    icon: MapPin,
    customIcon: null as null | typeof GithubIcon,
    label: "Chennai, India",
    href: null,
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <ScrollReveal>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tighter text-text-primary leading-[0.95]">
                Arjun R K
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-5">
                <span className="text-lg md:text-xl text-accent font-semibold tracking-tight">
                  Final Year B.Tech IT Student | AI Intern
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-6 space-y-4">
                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
                  Final Year B.Tech Information Technology student at SRM Institute of Science and Technology, currently working as an AI Intern. Passionate about building data-driven applications, analytics solutions, AI systems, and software products while continuously learning modern technologies and engineering practices.
                </p>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
                  Actively seeking full-time opportunities and internships in Data Analytics, AI/ML, Technology Consulting, and Software Development.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-white rounded-md hover:bg-accent-hover transition-colors duration-200"
                >
                  View Projects
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-secondary border border-border-subtle rounded-md hover:text-text-primary hover:border-border-strong transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </ScrollReveal>

            {/* Quick recruiter links */}
            <ScrollReveal delay={0.4}>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  const CustomIcon = link.customIcon;
                  const content = (
                    <span className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors duration-200">
                      {IconComponent ? (
                        <IconComponent className="w-3.5 h-3.5" />
                      ) : CustomIcon ? (
                        <CustomIcon className="w-3.5 h-3.5" />
                      ) : null}
                      {link.label}
                    </span>
                  );

                  if (link.href) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("mailto") ? undefined : "_blank"
                        }
                        rel={
                          link.href.startsWith("mailto")
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        {content}
                      </a>
                    );
                  }
                  return <span key={link.label}>{content}</span>;
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Terminal */}
          <ScrollReveal delay={0.3} className="hidden lg:block">
            <Terminal />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
