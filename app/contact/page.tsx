import { Mail, MessageSquare, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sora font-bold text-headline-lg md:text-headline-xl text-on-surface dark:text-text-primary-dark mb-4">
            Contact Support & Maintainers
          </h1>
          <p className="font-inter text-body-lg text-text-secondary-light dark:text-text-secondary-dark mb-10">
            Have questions, feedback, or found a broken resource link? We&apos;d love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Cards */}
            <div className="bg-surface-container-lowest dark:bg-bg-dark border border-border-light dark:border-border-dark p-6 rounded-xl flex gap-4 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 dark:bg-inverse-surface flex items-center justify-center text-primary dark:text-primary-fixed-dim shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-sora font-semibold text-body-md text-on-surface dark:text-text-primary-dark mb-1">
                  Email Support
                </h3>
                <p className="font-inter text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">
                  Send us links to new study materials or request support.
                </p>
                <a 
                  href="mailto:support@studybuddykkw.org" 
                  className="font-mono text-body-sm text-primary dark:text-primary-fixed-dim hover:underline"
                >
                  support@studybuddykkw.org
                </a>
              </div>
            </div>

            <div className="bg-surface-container-lowest dark:bg-bg-dark border border-border-light dark:border-border-dark p-6 rounded-xl flex gap-4 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 dark:bg-inverse-surface flex items-center justify-center text-primary dark:text-primary-fixed-dim shrink-0">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="font-sora font-semibold text-body-md text-on-surface dark:text-text-primary-dark mb-1">
                  GitHub Discussions
                </h3>
                <p className="font-inter text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">
                  Discuss feature requests, roadmap, or report a bug.
                </p>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-inter text-body-sm text-primary dark:text-primary-fixed-dim hover:underline font-medium"
                >
                  Open GitHub Discussions →
                </a>
              </div>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-6 rounded-xl flex gap-4 items-start">
            <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-sora font-semibold text-body-md text-amber-800 dark:text-amber-300 mb-1">
                Notice: Broken Link Reporting
              </h4>
              <p className="font-inter text-body-sm text-amber-700 dark:text-amber-400">
                If you find a Google Drive folder or PDF link that is dead or requires permissions, you can also report it directly by opening an issue on our GitHub repository.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
