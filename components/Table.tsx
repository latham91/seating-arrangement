"use client";

import React from "react";
import "react-resizable/css/styles.css";

interface TableProps {
  initialSize: number;
  initialSeats: number;
}

// Function to calculate the number of seats based on the table size
const calculateSeats = (size: number, minSizeForSeat: number) => {
  return Math.max(Math.floor(size / minSizeForSeat), 2);
};

export function Table({ initialSize, initialSeats }: TableProps) {
  const size = initialSize; // size is now constant as resizing is disabled
  const seatsCount = calculateSeats(size, initialSize / initialSeats);
  const seats = Array.from({ length: seatsCount }, (_, index) => index);
  const fixedDistanceFromTable = 50; // Fixed distance from the table

  // Function to calculate the style for each seat
  const seatStyles = (index: number) => {
    const angle = (index / seatsCount) * 2 * Math.PI;
    const x = (size / 2 + fixedDistanceFromTable) * Math.cos(angle);
    const y = (size / 2 + fixedDistanceFromTable) * Math.sin(angle);
    return {
      position: "absolute" as "absolute",
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: "translate(-50%, -50%)",
    };
  };

  return (
    <div className="relative flex justify-center items-center" style={{ width: size, height: size }}>
      <div className="relative flex justify-center items-center w-full h-full bg-neutral-300 rounded-full">Table</div>
      {seats.map((_, index) => (
        <div
          key={index}
          className="w-12 h-12 bg-blue-300 rounded-full flex justify-center items-center"
          style={seatStyles(index)}
        >
          Seat
        </div>
      ))}
    </div>
  );
}
