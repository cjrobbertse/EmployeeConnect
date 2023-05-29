import { WebSocketServer, WebSocket } from 'ws'  // Import WebSocket node module
import Joi from "joi"  // Import JSON schema validation node module

/**
 * Create new websocket server that clients can connect to.
 * @type {WebSocket.Server<WebSocket.WebSocket>}
 */
const server = new WebSocketServer({port: 8080})  // Start the WebSocket server on port 8080
console.log('The server started successfully.\nThe server awaits connections...')  // Log server start

/**
 * Parse message to JSON object. Must be string.
 * @param message
 * @returns {{parsingError: null, messageJSON}|{parsingError: {message: string}, messageJSON: null}}
 */
function parseMessageToJSON(message) {
    const messageString = message.toString()  // Assume this will always work.
    let messageJSON
    try {
        messageJSON = JSON.parse(messageString)  // Try parse message string to JSON
    } catch (e) {
        return { parsingError: { message: `Error: Could not convert message to JSON` }, messageJSON: null}  // Return error if not json in string
    }
    return { parsingError: null, messageJSON: messageJSON}  // otherwise return the new JSON object
}

/**
 * Validate the JSON object is the correct employee detail format.
 * @param {Object} messageJSON
 * @returns {Promise<{employeeJSON: any, employeeError: null}|{employeeJSON: null, employeeError: {message: string}}>}
 */
async function validateEmployee(messageJSON) {
    // Define Employee JSON schema rules
    const employeeSchema = Joi.object({
        first_name: Joi.string().required(),  // Type: string, Required: true
        last_name: Joi.string().required(),  // Type: string, Required: true
        age: Joi.number().integer().min(0).required(),  // Type: integer number, minimum: 0, Required: true
        employment: Joi.boolean().required(),  // Type: boolean, Required: true
    })
    // Validate JSON object
    const { error, value } = employeeSchema.validate(messageJSON, { abortEarly: false })  // return all possible errors if found.
    if (error) {
        return { employeeError: { message: error.message}, employeeJSON: null }
    }
    return { employeeError: null, employeeJSON: value }  // Otherwise return the valid employee JSON.
}

/**
 * Validate a message is a valid format: must be a JSON and Employee structure. Then Parse the string into JSON.
 * @param message
 * @returns {Promise<{error: (null|{message: string}), employee: null}|{error: (null|{message: *|string}), employee: null}|{error: null, employee: (null|any)}>}
 */
async function validateMessage(message) {
    const { parsingError, messageJSON } = parseMessageToJSON(message)  // Validate and Parse input message to JSON
    if (parsingError) {
        return { error: parsingError, employee: null }  // Return error if error.
    }
    const { employeeError, employeeJSON } = await validateEmployee(messageJSON)  // Validate JSON structure to be employee schema
    if (employeeError) {
        return { error: employeeError, employee: null}  // Return error if error.
    }
    return { error: null, employee: employeeJSON }  // Otherwise, return valid employee JSON
}

/**
 * Log the new employee details to the console in a easily readable format
 * @param {Object} employee
 */
function logEmployee(employee) {
    console.log(`
    New Employee Created!
    Full Name: ${employee.first_name} ${employee.last_name}
    Age: ${employee.age}
    Employment: ${employee.employment}
    `)
}

/**
 *
 * @param {Object} employee
 */
function broadcastNewEmployee (employee) {
    logEmployee(employee)  // Log the employee details to the console.
    const employeePayload = {
        employee: employee  // Create a structured message to send to all client with the new employee details.
    }
    // Broadcast the message to all connected clients
    server.clients.forEach((client) => {  // Send to all connected clients
        if (client.readyState === WebSocket.OPEN) {  // Only send to clients that are ready to receive data.
            client.send(JSON.stringify(employeePayload))  // Convert JSON to string for data transmission
        }
    })
}

/**
 * Send error message back to ONLY the client that send the data. The format will be a JSON string with error property.
 * @param {string} errorMessage
 */
function sendFailure (errorMessage) {
    const errorPayload = {
        error: {
            message: errorMessage
        }
    }
    socket.send(JSON.stringify(errorPayload))
}

// listen for new connections
server.on('connection', socket => {
    // Log any errors
    socket.on('error', console.error)

    console.log('\nClient connected')

    // Handle incoming messages
    socket.on('message', async (message) => {
        // Assuming that the message will always be a string by default
        console.log(`\nMessage received:`, message.toString())

        const { error, employee } = await validateMessage(message)  // Attempt to validate and parse the string to JSON
        if (error) {
            console.log(error.message)
            sendFailure(error.message)  // Send error message back to ONLY the client that sent the data.
        } else {
            broadcastNewEmployee(employee)  // Send the new employee details to all connected clients.
        }
    });

    // Handle socket closure
    socket.on('close', () => {
        console.log('\nClient disconnected');
    });
});