"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, Download, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const EMAIL = "arjunramprasad.2005@gmail.com";

const links = [
  {
    icon: Mail,
    customIcon: null as null | typeof GithubIcon,
    label: "Email",
    href: `mailto:${EMAIL}`,
    display: EMAIL,
  },
  {
    icon: null,
    customIcon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/axarjun/",
    display: "linkedin.com/in/axarjun",
  },
  {
    icon: null,
    customIcon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/AxArjun",
    display: "github.com/AxArjun",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-14 md:py-16 border-t border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Get in Touch"
            subtitle="Actively seeking full-time opportunities and internships in Data Analytics, AI/ML, Technology Consulting, and Software Development."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Column: Target Roles */}
          <ScrollReveal delay={0.05}>
            <div className="p-6 md:p-8 bg-bg-card border border-border-subtle rounded-lg card-elevated h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-4">
                  Open To Full-Time Roles
                </h3>
                <ul className="space-y-3">
                  {[
                    "Data Analyst",
                    "Business Intelligence Analyst",
                    "AI/ML Engineer (Entry-Level)",
                    "Technology Consultant",
                    "Software Engineer"
                  ].map((role) => (
                    <li key={role} className="flex items-center gap-3 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-xs text-text-muted leading-relaxed">
                Graduating in May 2027. Available for pre-placement interviews and technical evaluations.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Links */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-2">
                {links.map((link) => {
                  const IconComponent = link.icon;
                  const CustomIcon = link.customIcon;
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
                      className="flex items-center gap-4 py-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200 group border-b border-border-subtle last:border-0"
                    >
                      <span className="text-text-muted group-hover:text-accent transition-colors duration-200">
                        {IconComponent ? (
                          <IconComponent className="w-4 h-4" />
                        ) : CustomIcon ? (
                          <CustomIcon className="w-4 h-4" />
                        ) : null}
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                          {link.label}
                        </div>
                        <div className="text-sm font-mono">{link.display}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border-subtle">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-text-secondary border border-border-subtle rounded-md hover:text-text-primary hover:border-border-strong transition-colors duration-200 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-success" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Email
                    </>
                  )}
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-accent border border-accent/30 rounded-md hover:bg-accent-muted transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
