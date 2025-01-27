import type { Metadata } from "next";
import { Noto_Sans_Mono, Courier_Prime, JetBrains_Mono, IBM_Plex_Mono } from "next/font/google";
import "./output.css";
import ThemeProvider from "@/utils/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  display: 'swap',
  subsets: ["latin"],
});
const courierPrime = Courier_Prime({
  variable: "--font-courier-mono",
  display: 'swap',
  subsets: ["latin"],
  weight: "700",
});
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  display: 'swap',
  subsets: ["latin"],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  display: 'swap',
  subsets: ["latin"],
  weight: "500",
});


export const metadata: Metadata = {
  title: "PonderSlime.click",
  description: "PonderSlime's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
