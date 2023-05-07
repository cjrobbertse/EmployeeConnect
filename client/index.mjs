const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) => {
    console.log('Connected to server');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    const output = document.getElementById('output');
    output.innerHTML += `<p>Received: ${event.data}</p>`;
});

// Send messages to the server
// document.getElementById('send').addEventListener('click', () => {
//     const message = document.getElementById('message').value;
//     socket.send(message);
// });

function submitForm() {
    const form = document.getElementById('employee_form')
    const formData = new FormData(form)
    const jsonObject = Object.fromEntries(formData.entries())
    jsonObject.employment = jsonObject.employment === 'yes';
    const jsonString = JSON.stringify(jsonObject)
    console.log(jsonString)

    socket.send(jsonString)
}
