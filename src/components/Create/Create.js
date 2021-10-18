import React, { useState } from "react";
import "./Create.css";
import { Button, Form, Dropdown, Radio } from "semantic-ui-react";
import axios from "axios";
import {
  prefixOptions,
  vehicleTypeOptions,
  engineSizeOptions,
  additionalDriversOptions,
} from "./options.js";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

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
    dateRegistered: dateRegistered,
  };

  const callMockAPI = () => {
    axios
      .post(endPointURL, userDetails)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(callMockAPI)}>
        <Form.Group widths="equal">
          <Form.Field error={!!errors.prefix}>
            <label>Prefix</label>
            <Dropdown
              placeholder="Prefix"
              fluid
              selection
              options={prefixOptions}
              onChange={(e, data) => setPrefix(data.value)}
              {...register("prefix", { required: "prefix is mandatory" })}
            />
            <ErrorMessage errors={errors} name="prefix" />
          </Form.Field>

          <Form.Field error={!!errors.firstName}>
            <Form.Input
              fluid
              label="First Name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              {...register("firstName", {
                required: "First Name is mandatory",
              })}
            />
            <ErrorMessage errors={errors} name="firstName" />
          </Form.Field>

          <Form.Field error={!!errors.lastName}>
            <Form.Input
              fluid
              label="Last Name"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              {...register("lastName", {
                required: "Last Name is mandatory",
              })}
            />
            <ErrorMessage errors={errors} name="lastName" />
          </Form.Field>

        </Form.Group>

        <Form.Field error={!!errors.telephoneNumber}>
          <label>telephone Number</label>
          <input
            placeholder="phoneNumber"
            onChange={(e) => setTelephoneNumber(e.target.value)}
            {...register("telephoneNumber", {
              required: "telephone Number is mandatory",
            })}
          />
          <ErrorMessage errors={errors} name="telephoneNumber" />
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Address Line 1"
            placeholder="Address Line 1"
            onChange={(e) => setAddressLineOne(e.target.value)}
          />
          <ErrorMessage errors={errors} name="addressLineOne" />
          <Form.Input
            fluid
            label="Address Line 2"
            placeholder="Address Line 2"
            onChange={(e) => setAddressLineTwo(e.target.value)}
          />
          <ErrorMessage errors={errors} name="addressLineTwo" />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="City"
            placeholder="City"
            onChange={(e) => setAddressCity(e.target.value)}
          />
          <ErrorMessage errors={errors} name="addressCity" />
          <Form.Input
            fluid
            label="Postcode"
            placeholder="Postcode"
            onChange={(e) => setAddressPostCode(e.target.value)}
          />
          <ErrorMessage errors={errors} name="addressPostcode" />
        </Form.Group>

        <Form.Field>
          <label>Vehicle Type</label>
          <Dropdown
            placeholder="Vehicle  Type"
            fluid
            selection
            options={vehicleTypeOptions}
            onChange={(e, data) => setVehicleType(data.value)}
          />
          <ErrorMessage errors={errors} name="vehicleType" />
        </Form.Field>

        <Form.Field>
          <label>Engine Size</label>
          <Dropdown
            placeholder="Engine Size"
            fluid
            selection
            options={engineSizeOptions}
            onChange={(e, data) => setEngineSize(data.value)}
          />
          <ErrorMessage errors={errors} name="engineSize" />
        </Form.Field>

        <Form.Field>
          <label>Additional Drivers</label>
          <Dropdown
            placeholder="Additional Drivers"
            fluid
            selection
            options={additionalDriversOptions}
            onChange={(e, data) => setAdditionalDrivers(data.value)}
          />
          <ErrorMessage errors={errors} name="additionalDrivers" />
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
            placeholder="range 0 - 50000"
            onChange={(e) => setVehicleValue(e.target.value)}
          />
          <ErrorMessage errors={errors} name="vehicleValue" />
        </Form.Field>

        <Form.Field>
          <label>What is the date the vehicle was first registered?</label>
          <SemanticDatepicker
            datePickerOnly={true}
            onChange={(e, data) => setDateRegistered(data.value)}
          />
          <ErrorMessage errors={errors} name="dateRegistered" />
        </Form.Field>

        <Button type="submit" onClick={callMockAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
