import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";
import Providers from "./components/Providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Andres Guerra | Backend Developer - Python & AWS Specialist",
  description:
    "Backend Developer especializado en arquitecturas serverless con Python, AWS Lambda, DynamoDB y ArangoDB. Experiencia en sistemas escalables y APIs de alto rendimiento.",
  keywords: [
    "Backend Developer",
    "Python",
    "AWS",
    "Serverless",
    "DynamoDB",
    "ArangoDB",
    "AWS Lambda",
    "Step Functions",
  ],
  authors: [{ name: "Andres Guerra Montoya" }],
  openGraph: {
    title: "Andres Guerra | Backend Developer",
    description: "Python & AWS Serverless Specialist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ParticleBackground />
          <Providers>
            <div style={{ position: "relative", zIndex: 1 }}>
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
