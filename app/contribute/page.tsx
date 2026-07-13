import { GitFork, FileJson, CheckCircle, Info } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContributePage() {
  const steps = [
    {
      title: "1. Fork the Repository",
      desc: "Click the 'Fork' button on our GitHub repository to create a copy under your personal account.",
      icon: GitFork,
    },
    {
      title: "2. Edit or Add JSON Content",
      desc: "Locate the subject file inside the content/ directory (e.g. content/first-year/maths-2.json) and add or update your drive links.",
      icon: FileJson,
    },
    {
      title: "3. Open a Pull Request",
      desc: "Submit your changes as a Pull Request. Once our maintainers verify the link permissions, it gets merged and deployed instantly!",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-sora font-bold text-headline-lg md:text-headline-xl text-on-surface dark:text-text-primary-dark mb-4">
              Contribute to Study Buddy
            </h1>
            <p className="font-inter text-body-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              Help your fellow classmates! Add your study notes, question banks, or handwritten resources via GitHub. No coding knowledge required.
            </p>
            
            <div className="mt-8 flex justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-6 py-3 rounded-lg font-sora font-semibold transition-colors shadow-sm"
              >
                <GithubIcon className="w-5 h-5" />
                Fork on GitHub
              </a>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-surface-container-lowest dark:bg-bg-dark border border-border-light dark:border-border-dark p-6 rounded-xl flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary dark:text-primary-fixed-dim flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-sora font-semibold text-body-md text-on-surface dark:text-text-primary-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-body-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guidelines Box */}
          <div className="bg-surface-container-lowest dark:bg-bg-dark border border-border-light dark:border-border-dark p-8 rounded-xl transition-colors">
            <h3 className="font-sora font-semibold text-headline-sm text-on-surface dark:text-text-primary-dark mb-4 flex items-center gap-2">
              <Info size={20} className="text-primary dark:text-primary-fixed-dim" />
              Resource Sharing Guidelines
            </h3>
            
            <ul className="space-y-3 font-inter text-body-sm text-text-secondary-light dark:text-text-secondary-dark list-disc list-inside">
              <li>
                <strong className="text-on-surface dark:text-text-primary-dark">Drive Permissions:</strong> Make sure the Google Drive link is shared with <span className="font-semibold text-primary dark:text-primary-fixed-dim">&quot;Anyone with the link can view&quot;</span>, otherwise other students won&apos;t be able to open it.
              </li>
              <li>
                <strong className="text-on-surface dark:text-text-primary-dark">Clear Labels:</strong> Keep the labels simple and clean, e.g. <span className="font-mono text-[12px] bg-surface-container px-1 py-0.5 rounded">&quot;Unit 1 Notes&quot;</span> or <span className="font-mono text-[12px] bg-surface-container px-1 py-0.5 rounded">&quot;Handwritten Notes&quot;</span>.
              </li>
              <li>
                <strong className="text-on-surface dark:text-text-primary-dark">Deduplication:</strong> Before adding a link, check if the same material already exists under that unit to avoid clutter.
              </li>
              <li>
                <strong className="text-on-surface dark:text-text-primary-dark">Verified Content:</strong> Only upload notes and question papers that are officially part of the KKW curriculum.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
