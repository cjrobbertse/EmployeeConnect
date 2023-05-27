import React, { useState, FormEventHandler } from "react";
import Input from "../../components/Input/Input";
import inputData from "../../components/Input/inputData.json";

const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Connected to server");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  const jsonObject = JSON.parse(event.data);
  // Format the data and display it in the HTML element
  const formattedData = `
        New employee created<br>
        Name: ${jsonObject.first_name} ${jsonObject.last_name}<br>
        Age: ${jsonObject.age}<br>
        Employment: ${jsonObject.employment}<br><br>
    `;

  console.log(formattedData);
});

function calculateAge(dateOfBirth: string) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const Home = () => {
  const [formState, changeFormState] = useState<
    Record<string, string | boolean>
  >({});
  const handleState = (id: string, value: string | boolean) => {
    changeFormState({ ...formState, [id]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Convert the FormData to a JSON object
    const jsonObject: any = formState;

    // Calculate the age based on the date_of_birth and replace the date_of_birth with age
    jsonObject.age = calculateAge(jsonObject.date_of_birth);
    delete jsonObject.date_of_birth;

    // Convert the JSON object to a JSON string
    const jsonString = JSON.stringify(jsonObject);

    // Log the JSON string to the console (for demonstration purposes)
    console.log(jsonString);

    // Send the JSON string to the server
    socket.send(jsonString);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputData.map(({ label, type, id }) => (
        <Input
          {...(type === "checkbox"
            ? { label, type, id, checked: formState[id] as boolean }
            : {
                label,
                type,
                id,
                value: formState[id] as string,
              })}
          onChange={(e) =>
            handleState(id, e.currentTarget.value || e.currentTarget.checked)
          }
        />
      ))}
      <button type="submit">Submit</button>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </form>
  );
};
export default Home;
