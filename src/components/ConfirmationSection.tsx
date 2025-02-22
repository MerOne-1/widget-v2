import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Service } from '../types/services';
import { ClientInfo } from './ClientInfoForm';

interface ConfirmationSectionProps {
  bookingNumber: string;
  selectedServices: Service[];
  clientInfo: ClientInfo;
  appointmentTime: string;
  appointmentDate: string;
}

const Container = styled.div`
  padding: 32px;
  text-align: center;
  font-family: ${theme.typography.fontFamily};
`;

const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background-color: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.title};
  margin-bottom: 16px;
`;

const BookingNumber = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 24px;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: ${theme.borderRadius.default};
  display: inline-block;
`;

const Section = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  border: 2px solid ${theme.colors.containerBorder};
  border-radius: ${theme.borderRadius.default};
  text-align: left;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.title};
  margin-bottom: 12px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  padding-left: 24px;
  position: relative;
  line-height: 1.5;
  
  &:before {
    content: '•';
    position: absolute;
    left: 8px;
    color: ${theme.colors.border};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EmailNote = styled.div`
  font-style: italic;
  color: #666;
  margin-top: 24px;
`;

export const ConfirmationSection: React.FC<ConfirmationSectionProps> = ({
  bookingNumber,
  selectedServices,
  clientInfo,
  appointmentTime,
  appointmentDate,
}) => {
  const totalAmount = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <Container>
      <SuccessIcon>✓</SuccessIcon>
      <Title>¡Reserva Confirmada!</Title>
      <BookingNumber>Reserva #{bookingNumber}</BookingNumber>

      <Section>
        <SectionTitle>Detalles de la Cita</SectionTitle>
        <List>
          <ListItem>Fecha: {appointmentDate}</ListItem>
          <ListItem>Hora: {appointmentTime}</ListItem>
          <ListItem>Importe Total: {totalAmount}€</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Servicios Seleccionados</SectionTitle>
        <List>
          {selectedServices.map((service) => (
            <ListItem key={service.id}>
              {service.name} - {service.price}€
            </ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <SectionTitle>Información Importante</SectionTitle>
        <List>
          <ListItem>Por favor, llega 10 minutos antes de tu cita</ListItem>
          <ListItem>Las cancelaciones deben realizarse con al menos 24 horas de antelación</ListItem>
          <ListItem>El pago se realizará en el momento del servicio</ListItem>
          <ListItem>Si vas a llegar tarde, por favor llámanos para informarnos</ListItem>
        </List>
      </Section>

      <EmailNote>
        Hemos enviado un email de confirmación a {clientInfo.email} con todos los detalles.
        Por favor, revisa tu carpeta de spam si no lo has recibido en 5 minutos.
      </EmailNote>
    </Container>
  );
};
