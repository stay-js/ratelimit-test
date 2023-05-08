import { Analytics } from '@vercel/analytics/react';
import { ReactQueryWrapper } from '@components/ReactQueryWrapper';
import { Footer } from '@components/Footer';

import '@styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="antialiased">
      <body className="overflow-x-hidden">
        <Analytics />

        <div className="flex min-h-screen flex-col justify-between">
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
