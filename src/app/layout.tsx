import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아 하나의 URL로 공유하세요.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffaf3" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1512" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <head>
        {/* Pretendard: 페이지에 쓰인 글자 묶음만 내려받는 dynamic subset 버전 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="relative isolate flex min-h-full flex-col">{children}</body>
    </html>
  );
}
