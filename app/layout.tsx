import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "kkastr - home",
  description: "portfolio website",
  creator: "Konstantinos Kastritis",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${roboto.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
