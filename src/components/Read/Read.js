import React, { useState, useEffect } from "react";
import { Button, Form, Checkbox, Table } from "semantic-ui-react";
import "./Read.css";
import axios from "axios";

export default function Read() {
  const [tableData, setTableData] = useState([]);
  const [inputId, setInputId] = useState("");
  const [newTelephone, setNewTelephone] = useState("");
  
  const userDetails = {
    telephoneNumber: newTelephone,
  };

  function callMockApi(command) {
    const endPointURL = `https://6151d1954a5f22001701d471.mockapi.io/people/${inputId}`;

    switch (command) {
      case "GET":
        axios
          .get(endPointURL)
          .then((response) => setTableData(response.data))
          .catch((response) => console.log(response));
        return;
      case "UPDATE":
        axios
          .put(endPointURL, userDetails)
          .then((response) => setTableData(response.data))
          .catch((response) => console.log(response));
        return;
      case "DELETE":
        axios
          .delete(endPointURL)
          .then((response) => setTableData(response.data))
          .catch((response) => console.log(response));
        return;
      default:
        console.log("error");
        return;
    }
  }

  function setLocalStorage(data) {
    localStorage.setItem("id", data.id);
    localStorage.setItem("prefix", data.prefix);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("addressLineOne", data.addressLineOne);
    localStorage.setItem("addressLineTwo", data.addressLineTwo);
    localStorage.setItem("addressCity", data.addressCity);
    localStorage.setItem("addressPostCode", data.addressPostCode);
    localStorage.setItem("vehicleType", data.vehicleType);
    localStorage.setItem("additionalDrivers", data.additionalDrivers);
    localStorage.setItem("isCommercial", data.isCommercial);
    localStorage.setItem(
      "isRegisteredOutsideState",
      data.isRegisteredOutsideState
    );
    localStorage.setItem("telephoneNumber", data.telephoneNumber);
    localStorage.setItem("vehicleValue", data.vehicleValue);
  }

  useEffect(() => {
    callMockApi();
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <label>enter driver ID</label>
          <input
            placeholder="ID"
            onChange={(e) => setInputId(e.target.value)}
          />
          <Button color="blue" onClick={() => callMockApi("GET")}>
            GET
          </Button>
        </Form.Field>

        <Form.Field>
          <label>enter driver ID</label>
          <input
            placeholder="ID"
            onChange={(e) => setInputId(e.target.value)}
          />
           <label>Enter New Telephone Number</label>
          <input
            placeholder="telephone"
            onChange={(e) => setNewTelephone(e.target.value)}
          />
          <Button color="green" onClick={() => callMockApi("UPDATE")}>
            UPDATE
          </Button>
        </Form.Field>

        <Form.Field>
          <label>enter driver ID</label>
          <input
            placeholder="ID"
            onChange={(e) => setInputId(e.target.value)}
          />
          <Button color="red" onClick={() => callMockApi("DELETE")}>
            DELETE
          </Button>
        </Form.Field>
      </Form>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Address 1</Table.HeaderCell>
            <Table.HeaderCell>Adddress 2</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Postcode</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
              <Table.Cell>{tableData.id}</Table.Cell>
              <Table.Cell>{tableData.prefix}</Table.Cell>
              <Table.Cell>{tableData.firstName}</Table.Cell>
              <Table.Cell>{tableData.lastName}</Table.Cell>
              <Table.Cell>{tableData.addressLineOne}</Table.Cell>
              <Table.Cell>{tableData.addressLineTwo}</Table.Cell>
              <Table.Cell>{tableData.addressCity}</Table.Cell>
              <Table.Cell>{tableData.addressPostCode}</Table.Cell>
            </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
