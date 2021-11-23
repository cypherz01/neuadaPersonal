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
import { useState } from "react";

export default function Create() {
 const [premium, setPremium] = useState(0)

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
      addressPostcode: getValues("addressPostcode"),
      vehicleType: getValues("vehicleType"),
      engineSize: getValues("engineSize"),
      additionalDrivers: getValues("additionalDrivers"),
      commercial: getValues("commercial"),
      registeredOutsideState: getValues("registeredOutsideState"),
      telephoneNumber: getValues("telephoneNumber"),
      vehicleValue: getValues("vehicleValue"),
      dateRegistered: getValues("dateRegistered"),
    };

    console.log(userDetails);

    const endPointURL = "http://localhost:8080/drivers";

    axios
      .post(endPointURL, userDetails)
      .then((response) => setPremium(response.data.premium) )
      .then((document.getElementById("form module").hidden = false))
      .catch((error) => console.log(error));
  };

  const handleError = (errors) => {
    console.log(errors);
  };

  return (
    <div class="Submit">
      <div class="text">
        <h1> Note:<br/>please ensure that all fields are entered before submitting. 
          once submitted you should see your premium appear below.</h1>
      </div>
      <Form onSubmit={handleSubmit(callMockAPI, handleError)}>
        <Form.Group widths="equal">
          <Form.Field error={!!errors.prefix}>
            <h1>Prefix</h1>
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
            <h1>First Name</h1>
            <input
              label="first Name"
              placeholder="First Name"
              {...register("firstName", {
                required: "First Name is mandatory",
                maxLength: {
                  value: 50,
                  message: "Max length is 50 characters",
                },
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: "Names must begin with a letter",
                },
              })}
            />
            <ErrorMessage errors={errors} name="firstName" />
          </Form.Field>

          <Form.Field error={!!errors.lastName}>
            <h1>Last Name</h1>
            <input
              label="Last Name"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last Name is mandatory",
                maxLength: {
                  value: 50,
                  message: "Max length is 50 characters",
                },
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: "Names must begin with a letter",
                },
              })}
            />
            <ErrorMessage errors={errors} name="lastName" />
          </Form.Field>
        </Form.Group>

        <Form.Field error={!!errors.telephoneNumber}>
          <h1>Phone Number</h1>
          <input
            placeholder="phoneNumber"
            {...register("telephoneNumber", {
              required: "telephone Number is mandatory",
              maxLength: {
                value: 20,
                message: "Max length is 20 characters",
              },
              pattern: {
                value:
                  /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/i,
                message: "must begin with a Number",
              },
            })}
          />
          <ErrorMessage errors={errors} name="telephoneNumber" />
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Field error={!!errors.addressLineOne}>
            <h1>Address Line One</h1>
            <input
              label="Address Line 1"
              placeholder="Address Line 1"
              {...register("addressLineOne", {
                required: "address is mandatory",
                maxLength: {
                  value: 20,
                  message: "Max length is 20 characters",
                },
              })}
            />
            <ErrorMessage errors={errors} name="addressLineOne" />
          </Form.Field>
          <Form.Field error={!!errors.addressLineTwo}>
            <h1>Address Line Two</h1>
            <input
              label="Address Line 2"
              placeholder="Address Line 2"
              {...register("addressLineTwo", {
                required: "address is mandatory",
                maxLength: {
                  value: 20,
                  message: "Max length is 20 characters",
                },
              })}
            />
            <ErrorMessage errors={errors} name="addressLineTwo" />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field error={!!errors.addressCity}>
            <h1>City</h1>
            <input
              label="City"
              placeholder="City"
              {...register("addressCity", {
                required: "City is mandatory",
                maxLength: {
                  value: 50,
                  message: "Max length is 50 characters",
                },
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: "Names must begin with a letter",
                },
              })}
            />
            <ErrorMessage errors={errors} name="addressCity" />
          </Form.Field>
          <Form.Field error={!!errors.addressPostCode}>
            <h1>Postcode</h1>
            <input
              label="Postcode"
              placeholder="Postcode"
              {...register("addressPostcode", {
                required: "Postcode is mandatory",
                maxLength: {
                  value: 8,
                  message: "Max length is 8 characters",
                },
                pattern: {
                  value:
                    /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/i,
                  message: "This isn't a  valid postcode.",
                },
              })}
            />
            <ErrorMessage errors={errors} name="addressPostcode" />
          </Form.Field>
        </Form.Group>

        <Form.Field error={!!errors.vehicleType}>
          <h1>Vehicle Type</h1>
          <Controller
            control={control}
            name="vehicleType"
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
          <h1>Engine Size</h1>
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
          <h1>Additional Drivers</h1>
          <Controller
            control={control}
            name="additionalDrivers"
            defaultValue={""}
            rules={{ required: "This is a required field" }}
            render={({ field: { name, value, onBlur, onChange } }) => (
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

        <h1> Will the vehicle be used for commercial purposes?</h1>
        <Form.Field>
          <input
            label="Yes"
            name="radioGroup"
            type="radio"
            value="True"
            {...register("commercial", {
              required: "this field is mandatory",
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
            value="False"
            {...register("commercial", {
              required: "This field is mandatory",
            })}
          />
          <span className="checkmark"></span>
          No
          <ErrorMessage errors={errors} name="commerical" />
        </Form.Field>
        <h1>Will the vehicle be used outside the registered state?</h1>
        <Form.Field>
          <input
            label="Yes"
            name="radioGroup2"
            type="radio"
            value="True"
            {...register("registeredOutsideState", {
              required: "this field is mandatory",
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
            value="False"
            {...register("registeredOutsideState", {
              required: " This field is mandatory",
            })}
          />
          <span className="checkmark"></span>
          No
          <ErrorMessage errors={errors} name="registeredOutsideState" />
        </Form.Field>

        <Form.Field error={!!errors.vehicleValue}>
          <h1>What is the current value of the vehicle (range 0 - 50000)?</h1>
          <input
            placeholder="range 0 - 50000"
            {...register("vehicleValue", {
              required: "Vehicle Value is mandatory",
              max: {
                value: 50000,
                message: "Max Value 50000",
              },
              pattern: {
                value: /^[0-9 ,.'-]+$/i,
                message: "Only Numbers",
              },
            })}
          />
          <ErrorMessage errors={errors} name="vehicleValue" />
        </Form.Field>

        <Form.Field error={!!errors.dateRegistered}>
          <h1>What is the date the vehicle was first registered?</h1>
          <Controller
            className="react-datapicker__input-text"
            id="dateRegistered"
            name="dateRegistered"
            control={control}
            rules={{ required: "This is a required field" }}
            defaultValue={new Date()}
            render={({ field: { onChange, onBlur, value } }) => (
              <SemanticDatepicker
                placeholderText="Select date"
                {...register("dateRegistered", {
                  required: "This is mandatory",
                })}
              />
            )}
          />
          <ErrorMessage errors={errors} name="dateRegistered" />
        </Form.Field>

        <Button type="submit" className="button">Submit</Button>
      </Form>
      <div class="module" id="form module" hidden={true}>
        <h1>Insurance Premium: {premium}</h1>
      </div>
    </div>
    //test change
  );
}
