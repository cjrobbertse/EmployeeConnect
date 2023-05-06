import { WebSocketServer } from 'ws'

const server = new WebSocketServer({port: 8080})

server.on('connection', socket => {
    socket.on('error', console.error)
    console.log('Client connected');

    // Handle incoming messages
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocketServer.OPEN) {
                client.send(`Server received: ${message}`);
            }
        });
    });

    // Handle socket closure
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});