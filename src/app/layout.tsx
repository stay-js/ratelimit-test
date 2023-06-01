import { Analytics } from '@vercel/analytics/react';
import { ClientProviders } from './client-providers';
import { Footer } from '~/components/footer';

import '~/styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className="antialiased">
    <body className="grid min-h-screen grid-cols-1 grid-rows-[1fr_auto]">
      <ClientProviders>
        <Analytics />

        {children}
        <Footer />
      </ClientProviders>
    </body>
  </html>
);

export default RootLayout;
