const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req){
    const url = new URL(req.url);
    if(url.pathname === '/') return new Response("Home Page of Bun");
    if(url.pathname === '/blog') return new Response("Blog of Bun");
    return new Response('Sorry 404!');
  },
});
console.log(`listening on port ${server.port}`);