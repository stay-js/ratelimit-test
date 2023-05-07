import type { NextPage } from 'next';
import { createMetadata } from '@utils/createMetadata';
import { Request } from '@components/Request';

export const metadata = createMetadata({
  path: '',
  title: 'Upstash Rate Limiter test',
  description: 'Upstash Rate Limiter test',
});

const Page: NextPage = () => {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-16 py-12">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl font-bold">Upstash Rate Limiter test</h1>
        <h2 className="text-lg">
          You can send <b>three request</b> per every <b>ten seconds</b>.
        </h2>
      </div>

      <Request />
    </main>
  );
};

export default Page;
