import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arjun R K — Final Year B.Tech IT Student | AI Intern",
    template: "%s | Arjun R K",
  },
  description:
    "Final Year B.Tech Information Technology student at SRMIST, currently working as an AI Intern. Building data-driven applications, analytics solutions, AI systems, and software products.",
  keywords: [
    "Data Engineering",
    "Machine Learning",
    "Python",
    "SQL",
    "Power BI",
    "FastAPI",
    "Scikit-Learn",
    "LangGraph",
    "PostgreSQL",
    "AI Systems",
  ],
  authors: [{ name: "Arjun R K" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arjun R K — Final Year B.Tech IT Student | AI Intern",
    description:
      "Final Year B.Tech Information Technology student at SRMIST, currently working as an AI Intern. Building data-driven applications, analytics solutions, AI systems, and software products.",
    siteName: "Arjun R K Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun R K — Final Year B.Tech IT Student | AI Intern",
    description:
      "Final Year B.Tech Information Technology student at SRMIST, currently working as an AI Intern. Building data-driven applications, analytics solutions, AI systems, and software products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="min-h-screen flex flex-col bg-bg-primary text-text-primary"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
