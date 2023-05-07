import { Analytics } from '@vercel/analytics/react';
import { ReactQueryWrapper } from '@components/ReactQueryWrapper';

import '@styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Analytics />

        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
