"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";
// @ts-ignore
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

interface TableProps {
  initialSize: number;
  initialSeats: number;
}

const calculateSeats = (size: number, minSizeForSeat: number) => {
  return Math.max(Math.floor(size / minSizeForSeat), 4);
};

export function Table({ initialSize, initialSeats }: TableProps) {
  const [size, setSize] = useState(initialSize);
  const seatsCount = calculateSeats(size, initialSize / initialSeats);
  const seats = Array.from({ length: seatsCount }, (_, index) => index);
  const radius = size / 2.5; // Radius for positioning seats proportionally

  const seatStyles = (index: number) => {
    const angle = (index / seatsCount) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
      position: "absolute" as "absolute",
      left: `${50 + (x / size) * 100}%`,
      top: `${50 + (y / size) * 100}%`,
      transform: "translate(-50%, -50%)",
    };
  };

  return (
    <Draggable cancel=".react-resizable-handle">
      <div className="absolute">
        <ResizableBox
          width={size}
          height={size}
          minConstraints={[200, 200]}
          maxConstraints={[800, 800]}
          onResize={(e: any, data: any) => setSize(data.size.width)}
          className="resizable-box"
        >
          <div className="relative flex justify-center items-center w-full h-full">
            <div className="w-1/2 h-1/2 bg-gray-300 rounded-full flex justify-center items-center">Table</div>
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
        </ResizableBox>
      </div>
    </Draggable>
  );
}
