import React, { createContext, useState, useCallback, useContext } from 'react';
import CalendarPicker from '../components/CalendarPicker';

interface DataState {
  day: number;
  available: boolean;
}

interface CalendarContextData {
  addDate(data: DataState): void;
}

const CalendarContext = createContext<CalendarContextData>(
  {} as CalendarContextData,
);

const CalendarProvider: React.FC = ({ children }) => {
  const [monthAvailability, setMonthAvailability] = useState<
    CalendarContextData[]
  >();

  const addDate = useCallback(
    ({ day, available }: DataState) => {
      const data = {
        day,
        available,
      };

      console.log(data);

      setMonthAvailability([...monthAvailability, data]);
    },
    [monthAvailability],
  );

  return (
    <CalendarContext.Provider value={{ addDate }}>
      {children}
      <CalendarPicker data={addDate} />
    </CalendarContext.Provider>
  );
};

function useDate(): CalendarContextData {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error('useDate must be used within a CalendarPicker');
  }

  return context;
}

export { CalendarProvider, useDate };
