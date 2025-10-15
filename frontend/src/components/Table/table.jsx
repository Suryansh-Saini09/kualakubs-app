import React from "react";

export default function TableComponent() {
  const data = [
    { id: 1, name: "Item 1", value: 100, data: "sample_data_1" },
    { id: 2, name: "Item 2", value: 200, data: "sample_data_2" },
    { id: 3, name: "Item 3", value: 300, data: "sample_data_3" },
    { id: 4, name: "Item 4", value: 100, data: "sample_data_4" },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Data Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Value</th>
              <th className="px-4 py-2 border">Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border text-center">{item.value}</td>
                <td className="px-4 py-2 border">{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
