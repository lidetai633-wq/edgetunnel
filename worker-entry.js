export default {
  async fetch(request, env, ctx) {
    try {
      const inner = (await import('./_worker.js')).default;
      return await inner.fetch(request, env, ctx);
    } catch (e) {
      const text = 'CAUGHT: ' + (e && e.name) + ' | ' + (e && e.message) + '\n' + ((e && e.stack) || '');
      return new Response(text, { status: 200, headers: { 'content-type': 'text/plain; charset=utf-8' } });
    }
  }
};
