import React, { useState, useEffect } from "react";
import "./Create.css";
import { Button, Checkbox, Form, Dropdown } from "semantic-ui-react";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const genderOptions = [
    {
      text: "Male",
      value: "Male",
    },
    {
      text: "Female",
      value: "Female",
    },
    {
      text: "Non-Binary",
      value: "Non-Binary",
    },
    {
      text: "Other",
      value: "Other",
    },
  ];

  const userDetails = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    phoneNumber: phoneNumber,
  };

  const callMockAPI = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
    console.log(phoneNumber);

    const endPointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";

    axios
      .post(endPointURL, userDetails)
      .then((response) => console.log(response.data))
      .catch((response) => console.log(response));
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Gender</label>
          <Dropdown
            placeholder="Select Gender"
            fluid
            selection
            options={genderOptions}
            onChange={(e,data) => setGender(data.value)}
            />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={callMockAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
  
  
}

