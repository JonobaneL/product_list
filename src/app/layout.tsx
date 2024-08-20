import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import FiltersProvider from "@/context/filtersContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volt",
  description: "Electronic store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col min-h-dvh")}>
        <FiltersProvider>
          <>
            <Header />
            {children}
          </>
        </FiltersProvider>
      </body>
    </html>
  );
}
