'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export const Request: React.FC = () => {
  const [response, setResponse] = useState<unknown | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [start, setStart] = useState<Date | null>(null);
  const [latency, setLatency] = useState<number | null>(null);

  const { mutate, isLoading } = useMutation(
    async () =>
      fetch('/api/ratelimit').then(async (res) => {
        setStatus(res.status);
        setResponse(await res.json());
      }),
    {
      onMutate: () => setStart(new Date()),
      onSettled: () => setLatency(new Date().getTime() - (start as Date).getTime()),
    },
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <pre className={`${isLoading ? 'opacity-30' : ''} w-full rounded-lg border p-4`}>
        {JSON.stringify(
          { latency: latency ? `${latency}ms` : null, status, data: response },
          null,
          2,
        )}
      </pre>

      <button
        type="button"
        className="w-fit rounded-lg border-2 border-zinc-800 bg-zinc-800 px-8 py-4 text-white transition-colors hover:bg-white hover:text-zinc-800"
        onClick={() => mutate()}
      >
        Make a request
      </button>
    </div>
  );
};
