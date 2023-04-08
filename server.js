const server = http.createServer();
const wss = new WebSocket.Server({ server });

server.listen(3000, () => {
  console.log(`WebSocket server started on port 3000`);
});
