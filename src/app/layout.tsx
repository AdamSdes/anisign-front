import './globals.css';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Укажите нужные вам веса шрифта
});

export const metadata = {
  title: 'Anisign',
  description: 'Аниме сайт',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className='dark montserrat.className'>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
