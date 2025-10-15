import React from "react";


export default function TableComponent() {
  const data = [
    { id: 1, name: "Item 1", value: 100, data: "sample_data_1" },
    { id: 2, name: "Item 2", value: 200, data: "sample_data_2" },
    { id: 3, name: "Item 3", value: 300, data: "sample_data_3" },
    { id: 4, name: "Item 4", value: 100, data: "sample_data_4" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Data Table</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Value</th>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                <td>{item.name}</td>
                <td className="text-center">{item.value}</td>
                <td>{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
