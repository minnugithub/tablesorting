import AddDetails from './Form'
import React, { useState, useEffect } from "react";
import './styles.css'

import { Table } from './Table'

export default function Appr() {
  const columns = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager', },
    { accessor: 'start_date', label: 'Start Date' },
  ]

  const [rows, setRow] = useState([]);
  const addtoListHandler = (detail) =>
  {
    console.log(detail)
     setRow([...rows,detail ]);
  }

  // const rows = [
  //   { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
  //{ id: 12, name: 'Arushi', age: 33, is_manager: false, start_date: '09-14-2013' },
  // ]

  return (
    <div className="App">
      <AddDetails addtoListHandler={addtoListHandler} />
      <h1>Table</h1>
      <h2>Sorting, Filtering, Pagination</h2>

      <Table rows={rows} columns={columns} />
    </div>
  )
}