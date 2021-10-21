import "./Create.css";
import { Button, Form } from "semantic-ui-react";
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
import Select from "react-select";


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

    console.log(userDetails);

    const endPointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";

    axios
      .post(endPointURL, userDetails)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleError = (errors) => {
    console.log(errors);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(callMockAPI, handleError)}>
        <Form.Group widths="equal">
          <Form.Field error={!!errors.prefix}>
            <label>prefix</label>
            <Controller
              id="prefix"
              name="prefix"
              defaultValue={""}
              control={control}
              rules={{ required: "Prefix is a required field" }}
              render={({ field: { name, value, onBlur, onChange } }) => (
                <Select
                  name={name}
                  placeholder="Select..."
                  options={prefixOptions}
                  value={prefixOptions.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  onBlur={(val) => onBlur(val)}
                />
              )}
            />
            <ErrorMessage errors={errors} name="prefix" />
          </Form.Field>
          <Form.Field error={!!errors.firstName}>
            <label>First Name</label>
            <input
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
          <label>vehicle Type</label>
          <Controller
            control={control}
            name="vehcileType"
            defaultValue={""}
            rules={{ required: "This is a required field" }}
            render={({ field: { name, value, onBlur, onChange, ref } }) => (
              <Select
                name={name}
                placeholder="Select..."
                options={vehicleTypeOptions}
                value={vehicleTypeOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                onBlur={(val) => onBlur(val)}
              />
            )}
          />
          <ErrorMessage errors={errors} name="vehicleType" />
        </Form.Field>

        <Form.Field error={!!errors.engineSize}>
          <label>Engine Size</label>
          <Controller
            control={control}
            name="engineSize"
            defaultValue={""}
            rules={{ required: "This is a required field" }}
            render={({ field: { name, value, onBlur, onChange, ref } }) => (
              <Select
                name={name}
                placeholder="Select..."
                options={engineSizeOptions}
                value={engineSizeOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                onBlur={(val) => onBlur(val)}
              />
            )}
          />
          <ErrorMessage errors={errors} name="engineSize" />
        </Form.Field>

        <Form.Field error={!!errors.additionalDrivers}>
          <label>Additional Drivers</label>
          <Controller
            control={control}
            name="additionalDrivers"
            defaultValue={""}
            rules={{ required: "This is a required field" }}
            render={({ field: { name, value, onBlur, onChange, ref } }) => (
              <Select
                name={name}
                placeholder="Select..."
                options={additionalDriversOptions}
                value={additionalDriversOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                onBlur={(val) => onBlur(val)}
              />
            )}
          />
          <ErrorMessage errors={errors} name="additionalDrivers" />
        </Form.Field>

        <Form.Field>
          <label> Will the vehicle be used for commercial purposes?</label>
          <input
            label="Yes"
            name="radioGroup"
            type="radio"
            {...register("isCommercial", {
              required: "Vehicle Value is mandatory",
            })}
          />
          <span className="checkmark"></span>
          Yes
        </Form.Field>
        <Form.Field>
          <input
            label="No"
            name="radioGroup"
            type="radio"
            {...register("isCommercial", {
              required: "Vehicle Value is mandatory",
            })}
          />
          <span className="checkmark"></span>
          No
          <ErrorMessage errors={errors} name="isCommerical" />
        </Form.Field>
        <label>Will the vehicle be used outside the registered state?</label>
        <Form.Field>
          <input
            label="Yes"
            name="radioGroup2"
            type="radio"
            {...register("isRegisteredOutsideState", {
              required: "Vehicle Value is mandatory",
            })}
          />
          <span className="checkmark"></span>
          Yes
        </Form.Field>
        <Form.Field>
          <input
            label="No"
            name="radioGroup2"
            type="radio"
            {...register("isRegisteredOutsideState", {
              required: " Vehicle Value is mandatory",
            })}
          />
          <span className="checkmark"></span>
          No
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
          <Controller
            className="react-datapicker__input-text"
            id="dateRegistered"
            name="dateRegistered"
            control={control}
            rules={{ required: "This is a required field" }}
            defaultValue={new Date()}
            render={({ field: { onChange, onBlur, value } }) => (
              <SemanticDatepicker
                selected={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholderText="Select date"
              />
            )}
          />
          <ErrorMessage errors={errors} name="dateRegistered" />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
