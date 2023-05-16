import { WebSocketServer, WebSocket } from 'ws'
import Joi from "joi";

const server = new WebSocketServer({port: 8080})
console.log('The server started successfully.\nThe server awaits connections...')

const employeeSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    employment: Joi.boolean().required(),
})

server.on('connection', socket => {
    // Log any errors
    socket.on('error', console.error)

    console.log('\nClient connected');

    // Handle incoming messages
    socket.on('message', async (message) => {
        console.log(`\nMessage received:`, message)

        // The message is of the type 'RawData', so test and convert the RawData to String
        try { console.log(`Message as String:`, message.toString()) }
        catch (e) { console.log(`Error: Could not convert message to String`) }
        const messageString = message.toString()

        // Test that the message String is a JSON and convert it to JSON
        try { console.log(`Message as JSON:`, JSON.parse(messageString)) }
        catch (e) { console.log(`Error: Could not convert message String to JSON`) }
        const messageJSON = JSON.parse(messageString)

        // Validate JSON object
        try {
            await employeeSchema.validateAsync(messageJSON, { abortEarly: false })
            console.log(`Employee schema validation passed`, )
        } catch (e) { console.log(`Error: Employee schema validation failed.`, e.message) }

        const payload = {}

        if (true) {
            payload.error = {
                message: 'error message'
            }
            console.log(payload)
            socket.send(JSON.stringify(payload))
        }
        else {
            payload.employee = messageJSON

            // Broadcast the message to all connected clients
            server.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    console.log(`lets send message: ${message}`)
                    client.send(message.toString());
                }
            });
        }
    });

    // Handle socket closure
    socket.on('close', () => {
        console.log('\nClient disconnected');
    });
});