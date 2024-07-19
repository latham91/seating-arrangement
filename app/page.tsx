"use client";

import React, { useState } from "react";
import { Table } from "@/components/Table";

interface TableData {
  size: number;
  seats: number;
}

const App: React.FC = () => {
  const [tables, setTables] = useState<TableData[]>([]);
  const [seats, setSeats] = useState(2);

  const addTable = () => {
    const newTable = { size: 100, seats };
    setTables([...tables, newTable]);
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-y-24 mt-10">
      <div className="mb-4 flex items-center">
        <label className="mr-2" htmlFor="seatsInput">
          Number of seats:
        </label>
        <input
          id="seatsInput"
          type="number"
          min={2}
          max={8}
          value={seats}
          onChange={(e) => setSeats(Math.max(2, Math.min(8, parseInt(e.target.value, 10))))}
          className="mr-4 px-2 py-1 border rounded"
        />
        <button onClick={addTable} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Table
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-56 p-20 sm:p-16 md:p-12 lg:p-8 mx-10">
        {tables.map((table, index) => (
          <Table key={index} initialSize={table.size} initialSeats={table.seats} />
        ))}
      </div>
    </div>
  );
};

export default App;
