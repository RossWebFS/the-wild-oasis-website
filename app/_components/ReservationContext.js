"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(null);

const ReservationProvider = ({ children }) => {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  const resetRange = () => {
    setRange({ from: undefined, to: undefined });
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
};

const useReservationContext = () => {
  const context = useContext(ReservationContext);

  if (context === null)
    throw new Error(
      "Cannot use ReservationContext outside ReservationProvider",
    );

  return context;
};

export { useReservationContext, ReservationProvider };
