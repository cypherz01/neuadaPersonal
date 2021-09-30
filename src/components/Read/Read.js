import React, {useState, useEffect} from 'react';
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import './Read.css';
import axios from 'axios';

export default function Read() {
  const [tableData, setTableData] =useState([]);

  function callMockApi(){

  const endPointURL= "https://6151d1954a5f22001701d471.mockapi.io/people";

  axios
    .get(endPointURL)
    .then((response) => setTableData(response.data))
    .catch((response) => console.log(response))
  }

  function setLocalStorage(data){
    localStorage.setItem("id", data.id)
    localStorage.setItem("firstName", data.id)
    localStorage.setItem("lastName", data.id)
  }

  useEffect(() => {
    callMockApi();
  }, [])

  return (
    <div>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {tableData.map((data) => (
      <Table.Row key = {data.id}>
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
        <Table.Cell>
          <Button color= "green" onClick={() => setLocalStorage(data)} >Update</Button>
        </Table.Cell>
        <Table.Cell>
          <Button color= "red" onClick={() => setLocalStorage(data)}>Delete</Button>
        </Table.Cell>

      </Table.Row>
      ))}
    </Table.Body>
  </Table>
  </div>
  )
}
