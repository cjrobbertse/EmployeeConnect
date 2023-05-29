import React, { useState, FormEventHandler, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import inputData from "../../components/Input/inputData.json";
import EmployeeFormStyles from "./EmployeeFormStyles";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import WorkingBackground from "../../../public/assets/images/working-background.png";
import { SocketContext } from "../../App";

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

const EmployeeForm = () => {
  const navigate = useNavigate();
  // Used to handle the state inputted into the form
  const [formState, changeFormState] = useState<
    Record<string, string | boolean>
  >({
    employment: false,
  });
  const [socket] = useContext(SocketContext);
  //used to handle the updated state
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
    socket?.send(jsonString);
    navigate("/employee-details");
  };

  return (
    <EmployeeFormStyles>
      {/*Hero banner imported to display the hero image */}
      <HeroBanner heroBannerImage={WorkingBackground} />
      {/*Skinny banner used to display page's title*/}
      <SkinnyBanner bannerHeading="Employee Details Form" />
      <h3>Please provide the following details:</h3>
      {/*Form used to collect user's information*/}
      {/*data is mapped from json file to dynamically render input component*/}
      {/*When submit button is clicked the inputted data is sent to the server*/}
      <form onSubmit={handleSubmit}>
        {inputData.map(
          ({
            label,
            type,
            id,
            placeholder,
            maxLength,
            minDate,
            maxDate,
            minLength,
            required,
          }) => (
            <Input
              {...{
                id,
                label,
                type,
                placeholder,
                maxLength,
                minDate,
                maxDate,
                minLength,
                required,
              }}
              {...(type === "checkbox"
                ? { checked: formState[id] as boolean }
                : { value: formState[id] as string })}
              onChange={(e) =>
                handleState(
                  id,
                  type === "checkbox"
                    ? e.currentTarget.checked
                    : e.currentTarget.value || ""
                )
              }
            />
          )
        )}
        <button type="submit">Submit</button>
      </form>
    </EmployeeFormStyles>
  );
};
export default EmployeeForm;
