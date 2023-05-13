import { Analytics } from '@vercel/analytics/react';
import { ReactQueryWrapper } from '@components/ReactQueryWrapper';
import { Footer } from '@components/Footer';

import '@styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="antialiased">
      <body className="flex min-h-screen flex-col justify-between overflow-x-hidden">
        <Analytics />

        <ReactQueryWrapper>
          {children}
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
