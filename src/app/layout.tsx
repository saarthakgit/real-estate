import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// Configure all weights under a single font family
const zalandoSans = localFont({
  src: [
    {
      path: './fonts/ZalandoSansSemiExpanded-ExtraLight.ttf',
      // weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Light.ttf',
      // weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Regular.ttf',
      // weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Medium.ttf',
      // weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-SemiBold.ttf',
      // weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Bold.ttf',
      // weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-ExtraBold.ttf',
      // weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Black.ttf',
      // weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-zalando',
});

export const metadata: Metadata = {
  title: "Irish Platinum | Luxury Residences",
  description: "Experience premium living at Irish Platinum. Ultra-luxury 3 & 4 BHK apartments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
  body {
    font-family: var(--font-zalando) !important;
  }
`}</style>
      </head>
      <body
        className={`${zalandoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}