import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { metadataKeywords } from "./metadata";
import { siteConfig } from "@/lib/site";
import { SiteNav } from "@/components/site-nav";
import Footer from "@/components/footer";
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.2x.nz"),
  title: {
    default: "Yuの博客",
    template: "%s | Yuの博客",
  },
  description: "博客一定要能写",
  keywords: metadataKeywords,
  authors: [{ name: "Yu", url: "https://blog.2x.nz" }],
  creator: "Yu",
  // 站点图标用导航栏同一张头像
  icons: {
    icon: siteConfig.avatar,
    shortcut: siteConfig.avatar,
    apple: siteConfig.avatar,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://blog.2x.nz",
    title: "Yuの博客",
    description: "博客一定要能写",
    siteName: "Yuの博客",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuの博客",
    description: "博客一定要能写",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script defer src="https://umami.2x.nz/script.js" data-website-id="5d710dbd-3a2e-43e3-a553-97b415090c63"></script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
