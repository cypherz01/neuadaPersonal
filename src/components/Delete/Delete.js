import './Delete.css';
import React, {useState, useEffect} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Delete() {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState(null);

  const userDetails = {firstName: firstName, lastName: lastName};
  

const callMockAPI = () => {
  console.log(firstName);
  console.log(lastName);


  const endPointURL= `https://6151d1954a5f22001701d471.mockapi.io/people/${userId}`;

  axios
    .delete(endPointURL,userDetails)
    .then(() => history.push("/read"))
    .catch((response) => console.log(response))
};

useEffect(() => {
  setFirstName(localStorage.getItem("firstName"))
  setLastName(localStorage.getItem("lastName"))
  setUserId(localStorage.getItem("id"))
}, [])


  return (
    <div>
    <Form>
    <Form.Field>
    <label>are you sure you want to delete the following entry?</label>
    </Form.Field>
    <Form.Field>
    <label>{firstName}{lastName}</label>
    </Form.Field>
    <Button type='submit' onClick={callMockAPI}>Delete</Button>
  </Form>
  </div>
  )
}
