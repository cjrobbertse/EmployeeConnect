import { WebSocketServer, WebSocket } from 'ws'

const server = new WebSocketServer({port: 8080})
console.log('The server started successfully.\nThe server awaits connections...\n')

server.on('connection', socket => {
    socket.on('error', console.error)
    console.log('Client connected');

    // Handle incoming messages
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                console.log(`lets send message: ${message}`)
                client.send(message.toString());
            }
        });
    });

    // Handle socket closure
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});