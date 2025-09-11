import type { Metadata } from "next";
import "~/styles/index.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import AOSWrapper from "~/components/AOSWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiclub.cs.unlv.edu"),
  title: "UNLV AI & Data Science Club",
  description:
    "Join us to explore the latest in AI and data science at UNLV. Participate in events, workshops, and networking opportunities.",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://aiclub.cs.unlv.edu",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "AI Data Science Club",
    url: "https://aiclub.cs.unlv.edu",
    title: "AI & Data Science Club at UNLV",
    description:
      "Join us to explore the latest in AI and data science at UNLV. Participate in events, workshops, and networking opportunities.",
    images: ["https://aiclub.cs.unlv.edu/AIDataScience_Image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNLV AI & Data Science Club",
    description:
      "Join us to explore the latest in AI and data science at UNLV. Participate in events, workshops, and networking opportunities.",
    images: ["https://aiclub.cs.unlv.edu/AIDataScience_Image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AOSWrapper>
          <Navbar />
          {children}
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
