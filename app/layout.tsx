import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EdgeAssist',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>EdgeAssist</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
