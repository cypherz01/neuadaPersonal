import React, { useState, useEffect } from "react";
import "./Create.css";
import { Button, Checkbox, Form, Dropdown, Radio } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from 'react-router';


export default function Create() {
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const history = useHistory();

  

  const genderOptions = [
    { text: "Male", value: "Male" },
    { text: "Female", value: "Female" },
    { text: "Non-Binary", value: "Non-Binary" },
    { text: "Other", value: "Other" },
  ];

  const prefixOptions = [
    { text: "Mr.", value: "Mr" },
    { text: "Mrs.", value: "Mrs" },
    { text: "Ms.", value: "Ms" },
    { text: "Dr.", value: "Dr" },
  ];

  const userDetails = {
    prefix: prefix,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    phoneNumber: phoneNumber,
  };

  const callMockAPI = () => {
    console.log(prefix);
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
    console.log(phoneNumber);

    const endPointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";


    axios
      .post(endPointURL, userDetails)
      .then(() => history.push("/read"))
      .catch((response) => console.log(response));
  };

  return (
    <div>
      <Form>

        <Form.Group required widths="equal" >
          <label>Prefix</label>
          <Dropdown
            required
            placeholder="prefix"
            selection
            options={prefixOptions}
            onChange={(e, data) => setPrefix(data.value)}
          />
          <Form.Input
            required
            fluid
            label="First Name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Input
            required
            fluid
            label="Last Name"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>


        <Form.Field>
          <label>telephone Number</label>
          <input
            required
            placeholder="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            label="Address Line 1"
            placeholder="Address Line 1"
          />
          <Form.Input
            required
            fluid
            label="Address Line 2"
            placeholder="Address Line 2"
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            label="City"
            placeholder="City"
          />
          <Form.Input
            required
            fluid
            label="Postcode"
            placeholder="Postcode"
          />
        </Form.Group>


        <Form.Field >
          <label>Vehicle Type</label>
          <Dropdown
            required
            placeholder="Vehicle  Type"
            fluid
            selection
            options={prefixOptions}
            onChange={(e, data) => setPrefix(data.value)}
          />
        </Form.Field>

        <Form.Field >
          <label>Engine Size</label>
          <Dropdown
            required
            placeholder="Engine Size"
            fluid
            selection
            options={prefixOptions}
            onChange={(e, data) => setPrefix(data.value)}
          />
        </Form.Field>

        <Form.Field >
          <label>Additional Drivers</label>
          <Dropdown
            required
            placeholder="Additional Drivers"
            fluid
            selection
            options={prefixOptions}
            onChange={(e, data) => setPrefix(data.value)}
          />
        </Form.Field>

        <Form.Field>
        <label> Will the vehicle be used for commercial purposes?</label>
          <Radio
            label='Yes'
            name='radioGroup'
            value= 'Yes'
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='No'
            name='radioGroup'
            value='No'
          />
        </Form.Field>
        <label>Will the vehicle be used outside the registered state?</label>
        <Form.Field>
          <Radio
            label='Yes'
            name='radioGroup2'
            value= 'Yes'
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='No'
            name='radioGroup2'
            value='No'
          />
        </Form.Field>
        <Form.Field>
          <label>What is the current value of the vehicle (range 0 - 50000)?</label>
          <input
            required
            placeholder="range 0 - 50000"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Field>

        






        <Button  required type="submit" onClick={callMockAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
