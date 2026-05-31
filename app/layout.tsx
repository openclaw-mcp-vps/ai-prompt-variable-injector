import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Variable Injector — Inject dynamic variables safely",
  description: "Sanitize and inject user data into AI prompts while preventing prompt injection attacks. Built for AI app developers and prompt engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="be4add9c-16fb-4d42-9bdf-8e486e646c21"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
