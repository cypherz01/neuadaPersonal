import React, { useState, useEffect } from "react";
import { Button, Icon, Label, Menu, Table } from "semantic-ui-react";
import "./Read.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [tableData, setTableData] = useState([]);

  function callMockApi() {
    const endPointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";

    axios
      .get(endPointURL)
      .then((response) => setTableData(response.data))
      .catch((response) => console.log(response));
  }

  function setLocalStorage(data) {
    localStorage.setItem("id", data.id);
    localStorage.setItem("prefix", data.prefix);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("gender", data.gender);
    localStorage.setItem("phoneNumber", data.phoneNumber);
  }

  useEffect(() => {
    callMockApi();
  }, []);

  return (
    <div>
      <Link to="/create">
        <Button color="green">Add New Entry</Button>
      </Link>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.prefix}</Table.Cell>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.gender}</Table.Cell>
              <Table.Cell>{data.phoneNumber}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button color="green" onClick={() => setLocalStorage(data)}>
                    Update
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to="/delete">
                  <Button color="red" onClick={() => setLocalStorage(data)}>
                    Delete
                  </Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
