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

function parseMessageToJSON(message) {
    const messageString = message.toString()
    let messageJSON
    try {
        messageJSON = JSON.parse(messageString)
    } catch (e) {
        return { parsingError: { message: `Error: Could not convert message to JSON` }, messageJSON: null}
    }
    return { parsingError: null, messageJSON: messageJSON}
}

async function validateEmployee(messageJSON) {
    // Validate JSON object
    const { error, value } = employeeSchema.validate(messageJSON, { abortEarly: false })
    if (error) {
        return { employeeError: { message: error.message}, employeeJSON: null }
    }
    return { employeeError: null, employeeJSON: value }
}

async function validateMessage(message) {
    const { parsingError, messageJSON } = parseMessageToJSON(message)
    if (parsingError) {
        return { error: parsingError, employee: null }
    }
    const { employeeError, employeeJSON } = await validateEmployee(messageJSON)
    if (employeeError) {
        return { error: employeeError, employee: null}
    }
    return { error: null, employee: employeeJSON }
}

function broadcastNewEmployee (employee) {
    const employeePayload = {
        employee: employee
    }
    // Broadcast the message to all connected clients
    server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(employeePayload))
        }
    })
}

// listen for new connections
server.on('connection', socket => {
    function sendFailure (errorMessage) {
        const errorPayload = {
            error: {
                message: errorMessage
            }
        }
        socket.send(JSON.stringify(errorPayload))
    }

    // Log any errors
    socket.on('error', console.error)

    console.log('\nClient connected')

    // Handle incoming messages
    socket.on('message', async (message) => {
        // Assuming that the message will always be a string by default
        console.log(`\nMessage received:`, message.toString())

        const { error, employee } = await validateMessage(message)
        if (error) {
            console.log(error.message)
            sendFailure(error.message)
        } else {
            broadcastNewEmployee(employee)
        }
    });

    // Handle socket closure
    socket.on('close', () => {
        console.log('\nClient disconnected');
    });
});