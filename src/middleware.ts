// import { getConfig } from '@/utils/config';
import type { RequestContext } from 'brisa';

export default async function middleware(req: RequestContext) {
  // Early return for assets (no route) and api endpoints
  if (!req.route || req.route.name.startsWith('/api/')) return;

  if (['/about'].includes(req.route.pathname ?? '')) {
    return new Response('', {
      status: 302,
      headers: {
        Location: new URL('/', req.url).toString(),
      },
    });
  }
}
