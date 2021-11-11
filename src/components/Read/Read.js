import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
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
    const endPointURL = `http://localhost:8080/drivers`;

    switch (command) {
      case "GET":
        axios
          .get(endPointURL+`/single?id=${inputId}`)
          .then((response) => setTableData(response.data))
          .catch((response) => console.log(response));
        return;
      case "UPDATE":
        axios
          .put(endPointURL+`/update?id=${inputId}&newTelephoneNumber=${newTelephone}`, userDetails)
          .then((response) => setTableData(response.data))
          .catch((response) => console.log(response));
        return;
      case "DELETE":
        axios
          .delete(endPointURL+`/delete?id=${inputId}`)
          .then((response) => setTableData(response))
          .catch((response) => console.log(response));
        return;
      default:
        console.log("error");
        return;
    }
  }

  return (
    <div class ="Admin">
      <Form>
        <Form.Field>
          <h1>Enter Driver ID:</h1>
          <input
            placeholder="ID"
            onChange={(e) => setInputId(e.target.value)}
          />
          <Button color="blue" onClick={() => callMockApi("GET")}>
            GET
          </Button>
        </Form.Field>

        <Form.Field>
          <h1>Enter Driver ID:</h1>
          <input
            placeholder="ID"
            onChange={(e) => setInputId(e.target.value)}
          />
          <h1>Enter New Telephone Number:</h1>
          <input
            placeholder="telephone"
            onChange={(e) => setNewTelephone(e.target.value)}
          />
          <Button color="green" onClick={() => callMockApi("UPDATE")}>
            UPDATE
          </Button>
        </Form.Field>

        <Form.Field>
          <h1>Enter Driver ID:</h1>
          <input
            placeholder="ID"
            onChange={(e) => setInputId(e.target.value)}
          />
          <Button color="red" onClick={() => callMockApi("DELETE")}>
            DELETE
          </Button>
        </Form.Field>
      </Form>
      <div class="Table">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Telephone Number</Table.HeaderCell>
            <Table.HeaderCell>Address 1</Table.HeaderCell>
            <Table.HeaderCell>Adddress 2</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Postcode</Table.HeaderCell>
            <Table.HeaderCell>Vehicle Type</Table.HeaderCell>
            <Table.HeaderCell>Engine Size</Table.HeaderCell>
            <Table.HeaderCell>Additional Drivers</Table.HeaderCell>
            <Table.HeaderCell>For Commerical Use?</Table.HeaderCell>
            <Table.HeaderCell>Registered For Out Of State?</Table.HeaderCell>
            <Table.HeaderCell>Vehcile Value</Table.HeaderCell>
            <Table.HeaderCell>Date Registered</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{tableData.id}</Table.Cell>
            <Table.Cell>{tableData.prefix}</Table.Cell>
            <Table.Cell>{tableData.firstName}</Table.Cell>
            <Table.Cell>{tableData.lastName}</Table.Cell>
            <Table.Cell>{tableData.telephoneNumber}</Table.Cell>
            <Table.Cell>{tableData.addressLineOne}</Table.Cell>
            <Table.Cell>{tableData.addressLineTwo}</Table.Cell>
            <Table.Cell>{tableData.addressCity}</Table.Cell>
            <Table.Cell>{tableData.addressPostcode}</Table.Cell>
            <Table.Cell>{tableData.vehicleType}</Table.Cell>
            <Table.Cell>{tableData.engineSize}</Table.Cell>
            <Table.Cell>{tableData.additionalDrivers}</Table.Cell>
            <Table.Cell>{tableData.commercial}</Table.Cell>
            <Table.Cell>{tableData.registeredOutsideState}</Table.Cell>
            <Table.Cell>{tableData.vehicleValue}</Table.Cell>
            <Table.Cell>{tableData.dateRegistered}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
    </div>
  );
}
