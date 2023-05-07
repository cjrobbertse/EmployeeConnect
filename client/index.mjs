const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) => {
    console.log('Connected to server');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    const jsonObject = JSON.parse(event.data)
    // Format the data and display it in the HTML element
    const formattedData = `
        New employee created<br>
        Name: ${jsonObject.first_name} ${jsonObject.last_name}<br>
        Age: ${jsonObject.age}<br>
        Employment: ${jsonObject.employment}<br><br>
    `

    const output = document.getElementById('output');

    output.innerHTML += formattedData
});

// Function to set the max attribute of the date_of_birth input field to 12 years prior to the current date
function setDateOfBirthMax() {
    const today = new Date();
    const minAge = 12;
    const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    const dateString = maxDate.toISOString().split('T')[0];
    document.getElementById('date_of_birth').max = dateString;
}

// Call the setDateOfBirthMax function when the page loads
document.addEventListener('DOMContentLoaded', setDateOfBirthMax);

function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function submitForm() {
    // Get a reference to the form
    const form = document.getElementById('employee_form')

    // Use the FormData API to extract form data
    const formData = new FormData(form)

    // Convert the FormData to a JSON object
    const jsonObject = Object.fromEntries(formData.entries())

    // Update the employment field to be a boolean value
    jsonObject.employment = jsonObject.employment === 'yes';

    // Calculate the age based on the date_of_birth and replace the date_of_birth with age
    jsonObject.age = calculateAge(jsonObject.date_of_birth);
    delete jsonObject.date_of_birth;

    // Convert the JSON object to a JSON string
    const jsonString = JSON.stringify(jsonObject)

    // Log the JSON string to the console (for demonstration purposes)
    console.log(jsonString)

    // Send the JSON string to the server
    socket.send(jsonString)
}
