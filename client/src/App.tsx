import React, { createContext, ReactElement, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import Layout from "./components/Layout/Layout";

export interface EmployeeDetails {
  employee: {
    age: number;
    employment: boolean;
    first_name: string;
    last_name: string;
  };
}

//Establishes new websocket connection
const socket = new WebSocket("ws://localhost:8080");
// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Connected to server");
});

export const SocketContext = createContext<[WebSocket?, JSX.Element[]?]>([]);
function App(): ReactElement {
  const [messages, changeMessages] = useState<JSX.Element[]>([]);

  // Listen for messages
  socket.addEventListener("message", (event) => {
    const { employee }: EmployeeDetails = JSON.parse(event.data);
    if (employee) {
      // Format the data and display it in the HTML element
      const formattedData = (
        <>
          <ul>
            <li>
              <strong>Name: </strong>
              {employee.first_name} {employee.last_name}
            </li>
            <li>
              <strong>Age: </strong>
              {employee.age}
            </li>
            <li>
              <strong>Employed?: </strong>
              {`${employee.employment}`}
            </li>
          </ul>
        </>
      );

      changeMessages([...messages, formattedData]);
    }
  });

  return (
    <SocketContext.Provider value={[socket, messages]}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<EmployeeForm />} />
            <Route path="/employee-details" element={<EmployeeDetails />} />
            <Route path="/employee-form" element={<EmployeeForm />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
