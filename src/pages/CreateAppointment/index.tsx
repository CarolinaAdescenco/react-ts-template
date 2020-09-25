import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Layout from '../../shared/layout/index';
import api from '../../services/api';
import imgPlaceholder from '../../images/user-placeholder.png';

import {
  CardProvider,
  ContainerProviders,
  Calendar,
  ScheduleWrapper,
  HourWrapper,
  HourItem,
  Content,
} from './styles';

import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

const CreateAppointment: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const providerId = history.location.state;
  const [providers, setProviders] = useState<Provider[]>([]);

  const [selectedProvider, setSelectedProvider] = useState(providerId);

  const [availabilityDay, setAvailabilityDay] = useState<AvailabilityItem[]>(
    [],
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get(`providers/${selectedProvider}/day-availability`, {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then(response => {
        setAvailabilityDay(response.data);
      });
  }, [selectedDate, selectedProvider]);

  const handleSelectProvider = useCallback((id: string) => {
    setSelectedProvider(id);
  }, []);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const morningAvailability = useMemo(() => {
    return availabilityDay
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availabilityDay]);

  const afternoonAvailability = useMemo(() => {
    return availabilityDay
      .filter(({ hour }) => hour >= 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availabilityDay]);

  const handleSelectHour = useCallback((hour: number) => {
    setSelectedHour(hour);
  }, []);

  const handleCreateAppointment = useCallback(async () => {
    try {
      const date = new Date(selectedDate);

      date.setHours(selectedHour);
      date.setMinutes(0);

      await api.post('appointments', {
        provider_id: selectedProvider,
        date,
      });

      history.replace('/dashboard');

      const formattedAppointment = format(date, "dd 'de' MMMM 'às' H':'mm", {
        locale: ptBR,
      });

      addToast({
        type: 'success',
        title: 'Sucesso ao criar agendamento',
        description: `Agendamento criado para dia ${formattedAppointment}.`,
      });
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao criar agendamento',
        description: 'Ocorreu um erro ao criar agendamento. Tente novamente.',
      });
    }
  }, [selectedDate, selectedHour, selectedProvider, addToast]);

  return (
    <Layout>
      <h1>Agendar serviço</h1>
      <ContainerProviders>
        {providers.map((provider, i) => (
          <CardProvider
            onClick={() => handleSelectProvider(provider.id)}
            selected={provider.id === selectedProvider}
            key={i}
          >
            <img
              src={provider.avatar_url ? provider.avatar_url : imgPlaceholder}
              alt={provider.name}
            />
            <p>{provider.name}</p>
          </CardProvider>
        ))}
      </ContainerProviders>

      <ScheduleWrapper>
        <Calendar>
          <h2>Escolha a data</h2>

          <DayPicker
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
          />
        </Calendar>

        <HourWrapper>
          <h2>Escolha um horário</h2>

          <Content>
            <h3>Manhã</h3>
            <div>
              {morningAvailability.map((item, i) => (
                <HourItem
                  selected={selectedHour === item.hour && item.available}
                  onClick={() => handleSelectHour(item.hour)}
                  available={item.available}
                  key={i}
                >
                  {item.hourFormatted}
                </HourItem>
              ))}
            </div>
          </Content>

          <Content>
            <h3>Tarde</h3>
            <div>
              {afternoonAvailability.map((item, i) => (
                <HourItem
                  selected={selectedHour === item.hour && item.available}
                  onClick={() => handleSelectHour(item.hour)}
                  available={item.available}
                  key={i}
                >
                  {item.hourFormatted}
                </HourItem>
              ))}
            </div>
          </Content>
          <Button onClick={handleCreateAppointment}>Agendar</Button>
        </HourWrapper>
      </ScheduleWrapper>
    </Layout>
  );
};

export default CreateAppointment;
