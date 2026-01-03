import './globals.css';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bricolage',
});

export const metadata = {
  title: 'SkoolVibe',
  description: 'Seasonal student vibes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} font-sans bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
