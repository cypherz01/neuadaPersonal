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
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function Create() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const callMockAPI = () => {
    const userDetails = {
      prefix: getValues("prefix"),
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      addressLineOne: getValues("addressLineOne"),
      addressLineTwo: getValues("addressLineTwo"),
      addressCity: getValues("addressCity"),
      addressPostCode: getValues("addressPostCode"),
      vehicleType: getValues("vehicleType"),
      engineSize: getValues("engineSize"),
      additionalDrivers: getValues("additionalDrivers"),
      isCommercial: getValues("isCommercial"),
      isRegisteredOutsideState: getValues("isRegisteredOutsideState"),
      telephoneNumber: getValues("telephoneNumber"),
      vehicleValue: getValues("vehicleValue"),
      dateRegistered: getValues("dateRegistered"),
    };

    const endPointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";

    axios
      .post(endPointURL, userDetails)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(callMockAPI)}>
        <Form.Group widths="equal">
        <Form.Field error={!!errors.firstName}>
          <label>First Name</label>
            <Controller
            control ={control}
              name="prefix"
              defaultValue={""}
              rules={{ required: "Prefix is a required field" }}
              render={({ field: { name, value, onBlur, onChange, ref } }) => (
                <Dropdown
                  isInvalid={errors.prefix}
                  name={name}
                  placeholder="Select..."
                  options={prefixOptions}
                  value={prefixOptions.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  onBlur={(val) => onBlur(val)}
                  inputRef={ref}
                />
              )}
            />
            <ErrorMessage errors={errors} name="prefix" />
          </Form.Field>
          <Form.Field error={!!errors.firstName}>
            <label>First Name</label>
            <input
              fluid
              label="first Name"
              placeholder="First Name"
              {...register("firstName", {
                required: "First Name is mandatory",
              })}
            />
            <ErrorMessage errors={errors} name="firstName" />
          </Form.Field>

          <Form.Field error={!!errors.lastName}>
            <label>Last Name</label>
            <input
              fluid
              label="Last Name"
              placeholder="Last Name"
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
            {...register("telephoneNumber", {
              required: "telephone Number is mandatory",
            })}
          />
          <ErrorMessage errors={errors} name="telephoneNumber" />
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Field error={!!errors.addressLineOne}>
            <label>Address Line One</label>
            <input
              fluid
              label="Address Line 1"
              placeholder="Address Line 1"
              {...register("addressLineOne", {
                required: "address is mandatory",
              })}
            />
            <ErrorMessage errors={errors} name="addressLineOne" />
          </Form.Field>
          <Form.Field error={!!errors.addressLineTwo}>
            <label>Address Line Two</label>
            <input
              fluid
              label="Address Line 2"
              placeholder="Address Line 2"
              {...register("addressLineTwo", {
                required: "address is mandatory",
              })}
            />
            <ErrorMessage errors={errors} name="addressLineTwo" />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field error={!!errors.addressCity}>
            <label>City</label>
            <input
              fluid
              label="City"
              placeholder="City"
              {...register("addressCity", {
                required: "City is mandatory",
              })}
            />
            <ErrorMessage errors={errors} name="addressCity" />
          </Form.Field>
          <Form.Field error={!!errors.addressPostCode}>
            <label>Postcode</label>
            <input
              fluid
              label="Postcode"
              placeholder="Postcode"
              {...register("addressPostCode", {
                required: "Postcode is mandatory",
              })}
            />
            <ErrorMessage errors={errors} name="addressPostCode" />
          </Form.Field>
        </Form.Group>

        <Form.Field error={!!errors.vehicleType}>
          <label>Vehicle Type</label>
          <Controller
            control ={control}
              name="vehicleType"
              defaultValue={""}
              rules={{ required: "Type is a required field" }}
              render={({ field: { name, value, onBlur, onChange, ref } }) => (
                <Dropdown
                  isInvalid={errors.vehicleType}
                  name={name}
                  placeholder="Select..."
                  options={vehicleTypeOptions}
                  value={vehicleTypeOptions.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  onBlur={(val) => onBlur(val)}
                  inputRef={ref}
                />
              )}
            />
          <ErrorMessage errors={errors} name="vehicleType" />
        </Form.Field>

        <Form.Field error={!!errors.engineSize}>
          <label>Engine Size</label>
          <Controller
            control ={control}
              name="engineSize"
              defaultValue={""}
              rules={{ required: "Size is a required field" }}
              render={({ field: { name, value, onBlur, onChange, ref } }) => (
                <Dropdown
                  isInvalid={errors.engineSize}
                  name={name}
                  placeholder="Select..."
                  options={engineSizeOptions}
                  value={engineSizeOptions.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  onBlur={(val) => onBlur(val)}
                  inputRef={ref}
                />
              )}
            />
          <ErrorMessage errors={errors} name="engineSize" />
        </Form.Field>

        <Form.Field error={!!errors.additionalDrivers}>
          <label>Additional Drivers</label>
          <Controller
            control ={control}
              name="additionalDrivers"
              defaultValue={""}
              rules={{ required: "This is a required field" }}
              render={({ field: { name, value, onBlur, onChange, ref } }) => (
                <Dropdown
                  isInvalid={errors.additionalDrivers}
                  name={name}
                  placeholder="Select..."
                  options={additionalDriversOptions}
                  value={additionalDriversOptions.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  onBlur={(val) => onBlur(val)}
                  inputRef={ref}
                />
              )}
            />
          <ErrorMessage errors={errors} name="additionalDrivers" />
        </Form.Field>

        <Form.Field>
          <label> Will the vehicle be used for commercial purposes?</label>
          <Radio
            label="Yes"
            name="radioGroup"
            {...register("isCommercial", {
              required: "Vehicle Value is mandatory",
            })}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="No"
            name="radioGroup"
            {...register("isCommercial", {
              required: "Vehicle Value is mandatory",
            })}
          />
          <ErrorMessage errors={errors} name="isCommerical" />
        </Form.Field>
        <label>Will the vehicle be used outside the registered state?</label>
        <Form.Field>
          <Radio
            label="Yes"
            name="radioGroup2"
            {...register("isRegisteredOutsideState", {
              required: "Vehicle Value is mandatory",
            })}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="No"
            name="radioGroup2"
            {...register("isRegisteredOutsideState", {
              required: "Vehicle Value is mandatory",
            })}
          />
          <ErrorMessage errors={errors} name="isRegisteredOutsideState" />
        </Form.Field>

        <Form.Field error={!!errors.vehicleValue}>
          <label>
            What is the current value of the vehicle (range 0 - 50000)?
          </label>
          <input
            placeholder="range 0 - 50000"
            {...register("vehicleValue", {
              required: "Vehicle Value is mandatory",
            })}
          />
          <ErrorMessage errors={errors} name="vehicleValue" />
        </Form.Field>

        <Form.Field error={!!errors.dateRegistered}>
          <label>What is the date the vehicle was first registered?</label>
          <SemanticDatepicker
            datePickerOnly={true}
            {...register("dateRegistered", {
              required: "Date is mandatory",
            })}
          />
          <ErrorMessage errors={errors} name="dateRegistered" />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
