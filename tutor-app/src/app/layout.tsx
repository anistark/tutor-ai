import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tutor AI",
  description: "Your personal code helper tool!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="absolute bottom-0 w-screen text-center text-white mx-auto py-4 bg-slate-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
          <p>
            Built with ❤️ by <strong>Ani</strong>
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:mail@anirudha.dev" style={{ color: "#61dafb" }}>
              mail@anirudha.dev
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
