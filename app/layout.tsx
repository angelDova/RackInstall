import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import Footer from "@/components/sections/footer";
import CustomModal from "@/components/modal/contact-modal";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AF Rack Installations",
  description: "Building the future of warehouses together",
  icons: {
    icon: [
      {
        type: "image/svg+xml",
        url: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={font.className}>
        <main className="h-full bg-background w-full">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex w-full items-center justify-center">
              <Navbar />
            </div>
            <CustomModal
              title={"Send us a Message"}
              description=" Please fill out the form below and we will usually respond to your
              inquiry on the same business day."
              defaultOpen={false}
            />
            {children}
            <Footer />
            <Toaster richColors position="top-center" />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
