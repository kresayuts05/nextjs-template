import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SCUDERIA FERRARI',
  description: 'BEST F1 TEAM EVER',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navigation">
          <Link className="navigation-logo" href="/">
            HOME
          </Link>
          <Link className="navigation-link" href="/contact">
            CONTACT
          </Link>
        </nav>
        <main className="main-container">{children}</main>
        <footer>Created by KRESA TSVETKOVA</footer>
      </body>
    </html>
  );
}
