import type { NextPage } from 'next';
import { Request } from '~/components/request';
import { createMetadata } from '~/utils/create-metadata';

export const metadata = createMetadata({
  path: '',
  title: 'Upstash Rate Limiter test',
  description: 'Upstash Rate Limiter test',
});

const Page: NextPage = () => (
  <main className="mx-auto flex max-w-2xl flex-col gap-16 px-4 py-12">
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-5xl font-bold">Upstash Rate Limiter test</h1>
      <h2 className="text-lg">
        You can send <b>three request</b> per every <b>ten seconds</b>.
      </h2>
    </div>

    <Request />
  </main>
);

export default Page;
