import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function DynamicTable({ apiUrl }) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();

        setColumns(json.columns); // 👈 use backend-defined order
        setRows(json.rows);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [apiUrl]);

  if (rows.length === 0) return <p>Loading...</p>;

  return (
    <Table responsive bordered striped hover>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DynamicTable;
