import React, { useState} from "react";
import "./Create.css";
import { Button, Form, Dropdown, Radio } from "semantic-ui-react";
import axios from "axios";
import {prefixOptions,vehicleTypeOptions, engineSizeOptions, additionalDriversOptions} from "./options.js";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

export default function Create() {
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressPostCode, setAddressPostCode] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [additionalDrivers, setAdditionalDrivers] = useState("");
  const [isCommercial, setIsCommercial] = useState(false);
  const [isRegisteredOutsideState, setIsRegisteredOutsideState] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [dateRegistered, setDateRegistered] = useState(null);
  
  const endPointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";

  const userDetails = {
    prefix: prefix,
    firstName: firstName,
    lastName: lastName,
    addressLineOne: addressLineOne,
    addressLineTwo: addressLineTwo,
    addressCity: addressCity,
    addressPostCode: addressPostCode,
    vehicleType: vehicleType,
    engineSize: engineSize,
    additionalDrivers: additionalDrivers,
    isCommercial: isCommercial,
    isRegisteredOutsideState: isRegisteredOutsideState,
    telephoneNumber: telephoneNumber,
    vehicleValue: vehicleValue,
    dateRegistered:dateRegistered
  };

  const callMockAPI = () => {
    axios
      .post(endPointURL, userDetails)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form>
        <Form.Group required widths="equal">
          <Form.Field>
            <label>Prefix</label>
            <Dropdown
              required
              placeholder="Prefix"
              fluid
              selection
              options={prefixOptions}
              onChange={(e, data) => setPrefix(data.value)}
            />
          </Form.Field>
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
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            label="Address Line 1"
            placeholder="Address Line 1"
            onChange={(e) => setAddressLineOne(e.target.value)}
          />
          <Form.Input
            required
            fluid
            label="Address Line 2"
            placeholder="Address Line 2"
            onChange={(e) => setAddressLineTwo(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            label="City"
            placeholder="City"
            onChange={(e) => setAddressCity(e.target.value)}
          />
          <Form.Input
            required
            fluid
            label="Postcode"
            placeholder="Postcode"
            onChange={(e) => setAddressPostCode(e.target.value)}
          />
        </Form.Group>

        <Form.Field>
          <label>Vehicle Type</label>
          <Dropdown
            required
            placeholder="Vehicle  Type"
            fluid
            selection
            options={vehicleTypeOptions}
            onChange={(e, data) => setVehicleType(data.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Engine Size</label>
          <Dropdown
            required
            placeholder="Engine Size"
            fluid
            selection
            options={engineSizeOptions}
            onChange={(e, data) => setEngineSize(data.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Additional Drivers</label>
          <Dropdown
            required
            placeholder="Additional Drivers"
            fluid
            selection
            options={additionalDriversOptions}
            onChange={(e, data) => setAdditionalDrivers(data.value)}
          />
        </Form.Field>

        <Form.Field>
          <label> Will the vehicle be used for commercial purposes?</label>
          <Radio
            label="Yes"
            name="radioGroup"
            onChange={(e) => setIsCommercial(false)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="No"
            name="radioGroup"
            onChange={(e, data) => setIsCommercial(false)}
          />
        </Form.Field>
        <label>Will the vehicle be used outside the registered state?</label>
        <Form.Field>
          <Radio
            label="Yes"
            name="radioGroup2"
            onChange={(e, data) => setIsRegisteredOutsideState(true)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="No"
            name="radioGroup2"
            onChange={(e, data) => setIsRegisteredOutsideState(false)}
          />
        </Form.Field>
        <Form.Field>
          <label>
            What is the current value of the vehicle (range 0 - 50000)?
          </label>
          <input
            required
            placeholder="range 0 - 50000"
            onChange={(e) => setVehicleValue(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>
            What is the date the vehicle was first registered?
          </label>
          <SemanticDatepicker
            required
            datePickerOnly={true}
            onChange={(e,data) => setDateRegistered(data.value)}
          />
        </Form.Field>

        <Button required type="submit" onClick={callMockAPI()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
