import type { Metadata } from "next";
import "./globals.css";
import { StyledComponentsRegistry } from "@/lib/styleRegistry";

export const metadata: Metadata = {
  title: "Leewonno",
  description: "My Testing Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 아이콘 / Google Icon */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
