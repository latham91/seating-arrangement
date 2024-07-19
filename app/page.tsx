import React from "react";
import { Table } from "@/components/Table";

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <Table initialSize={200} initialSeats={5} />
    </div>
  );
};

export default App;
