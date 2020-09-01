import React, { useCallback, useMemo, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { Calendar } from './styles';
import { useAuth } from '../../hooks/auth';
import { useDate } from '../../hooks/calendar';

// interface MonthAvailabilityItem {
//   day: number;
//   available: boolean;
// }

interface IData {
  data: any;
}

const CalendarPicker: React.FC<IData> = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  //   const [monthAvailability, setMonthAvailability] = useState<
  //     MonthAvailabilityItem[]
  //   >([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  const data = useDate();

  console.log(data);

  //   const disabledDays = useMemo(() => {
  //     const dates = data
  //       .filter(monthDay => monthDay.available === false)
  //       .map(monthDay => {
  //         const year = currentMonth.getFullYear();
  //         const month = currentMonth.getMonth();

  //         return new Date(year, month, monthDay.day);
  //       });

  //     return dates;
  //   }, [currentMonth]);

  return (
    <Calendar>
      {/* <DayPicker
        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
        fromMonth={new Date()}
        disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
        modifiers={{
          available: { daysOfWeek: [1, 2, 3, 4, 5] },
        }}
        selectedDays={selectedDate}
        onMonthChange={handleMonthChange}
        onDayClick={handleDateChange}
        months={[
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ]}
      /> */}
    </Calendar>
  );
};

export default CalendarPicker;
