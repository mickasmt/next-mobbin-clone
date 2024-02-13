import { Analytics } from "@/components/analytics";
import { CheckboxToolbar } from "@/components/checkbox-toolbar";
import { ModalProvider } from "@/components/modal-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Mobbin Clone",
  description: "Next Mobbin Clone for testing shadcn-ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <CheckboxToolbar />
          <ModalProvider />
          <TailwindIndicator />
          <Analytics />
          <div className="fixed left-1/2 right-0 top-0 h-[728px] max-h-screen -z-10" id="hc-boundary"/>
        </ThemeProvider>
      </body>
    </html>
  );
}
