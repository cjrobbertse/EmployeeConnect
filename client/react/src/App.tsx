import React, { ReactElement } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import Layout from "./components/Layout/Layout";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/employee-details" element={<EmployeeDetails />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
