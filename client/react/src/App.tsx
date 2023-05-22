import React, { createContext, ReactElement, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import Layout from "./components/Layout/Layout";

//Establishes new websocket connection
const socket = new WebSocket("ws://localhost:8080");
// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Connected to server");
});

export const SocketContext = createContext<[WebSocket?, JSX.Element[]?]>([]);
function App(): ReactElement {
  const [messages, changeMessages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Listen for messages
    socket.addEventListener("message", (event) => {
      const jsonObject = JSON.parse(event.data);
      // Format the data and display it in the HTML element
      const formattedData = (
        <>
          <ul>
            <li>
              <strong>Name: </strong>
              {jsonObject.first_name} {jsonObject.last_name}
            </li>
            <li>
              <strong>Age: </strong>
              {jsonObject.age}
            </li>
            <li>
              <strong>Employed?: </strong>
              {`${jsonObject.employment}`}
            </li>
          </ul>
        </>
      );

      changeMessages([...messages, formattedData]);
    });
  }, []);

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
