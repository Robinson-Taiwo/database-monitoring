import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights if needed
});
export const metadata: Metadata = {
  title: "Database Activity Monitoring",
  description:
    "Discover the critical importance of database activity monitoring in safeguarding your organization's data. Learn how monitoring systems can prevent security breaches, ensure compliance, and optimize database performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
