import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const GET = async (request: Request) => {
  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, '10 s'),
    analytics: true,
    prefix: '@upstash/ratelimit',
  });

  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for');
  if (!ip) return new Response(JSON.stringify({ error: 'No IP', ip }), { status: 400 });

  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return new Response(JSON.stringify({ error: 'Too many requests', ip }), { status: 429 });
  }

  return new Response(JSON.stringify({ message: 'Success', ip }), { status: 200 });
};
