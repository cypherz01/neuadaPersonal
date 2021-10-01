import './Update.css';
import React, {useState, useEffect} from 'react';
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {

  const history = useHistory();

  const [userId, setUserId] = useState(null);
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const userDetails = {firstName: firstName, lastName: lastName,
    prefix:prefix,gender:gender,phoneNumber:phoneNumber};

    
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
  

const callMockAPI = () => {
  console.log(firstName);
  console.log(lastName);


  const endPointURL= `https://6151d1954a5f22001701d471.mockapi.io/people/${userId}`;

  axios
    .put(endPointURL,userDetails)
    .then(() => history.push("/read"))
    .catch((response) => console.log(response))
};

useEffect(() => {
  setFirstName(localStorage.getItem("firstName"))
  setLastName(localStorage.getItem("lastName"))
  setPrefix(localStorage.getItem("prefix"))
  setGender(localStorage.getItem("gender"))
  setPhoneNumber(localStorage.getItem("phoneNumber"))
  setUserId(localStorage.getItem("id"))
}, [])


  return (
    <div>
    <Form>
        <Form.Field>
          <label>Prefix</label>
          <Dropdown
            required
            placeholder="prefix"
            fluid
            selection
            options={prefixOptions}
            value = {prefix}
            onChange={(e, data) => setPrefix(data.value)}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First Name"
            placeholder="First name"
            value = {firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Last Name"
            placeholder="Last Name"
            value = {lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Field>
          <Form.Select
            fluid
            label="Gender"
            options={genderOptions}
            placeholder="Gender"
            value = {gender}
            onChange={(e, data) => setGender(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            required
            placeholder="phoneNumber"
            value = {phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={callMockAPI}>
          Update
        </Button>
      </Form>
  </div>
  )
 
}

