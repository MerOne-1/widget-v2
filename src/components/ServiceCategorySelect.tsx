import React, { useState } from 'react';
import styled from 'styled-components';
import { ServiceCategory, Service } from '../types/services';
import { theme } from '../styles/theme';

const SelectContainer = styled.div`
  margin-bottom: 24px;
  font-family: ${theme.typography.fontFamily};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CategoryHeader = styled.div<{ $isExpanded: boolean }>`
  width: 100%;
  padding: 16px;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.title.size};
  font-weight: ${theme.typography.title.weight};
  cursor: pointer;
  background-color: white;
  text-transform: ${theme.typography.text.transform};
  border-bottom: 2px solid ${theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  
  &:hover {
    background-color: #f8f8f8;
  }

  &:last-child {
    border-bottom: none;
  }

  &::after {
    content: '';
    width: 14px;
    height: 14px;
    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L13 1" stroke="%23F5BBC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    transform: ${props => props.$isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s ease;
  }
`;

const ServiceList = styled.div<{ $isExpanded: boolean }>`
  background: white;
  max-height: ${props => props.$isExpanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  transform-origin: top;
  transform: ${props => props.$isExpanded ? 'scaleY(1)' : 'scaleY(0)'};
  transition: all 0.3s ease-in-out;
`;

const ServiceItem = styled.div<{ $isSelected: boolean }>`
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.border};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.$isSelected ? '#f8f8f8' : 'white'};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f8f8;
  }
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceName = styled.h3`
  margin: 0;
  font-size: ${theme.typography.title.size};
  font-weight: ${theme.typography.title.weight};
  color: ${theme.colors.title};
  text-transform: ${theme.typography.title.transform};
`;

const ServiceDetails = styled.div`
  font-size: ${theme.typography.text.size};
  font-weight: ${theme.typography.text.weight};
  color: ${theme.colors.text};
  margin-top: 4px;
  text-transform: ${theme.typography.text.transform};
`;

const ServicePrice = styled.div`
  font-weight: ${theme.typography.title.weight};
  font-size: ${theme.typography.title.size};
  color: ${theme.colors.title};
`;

interface ServiceCategorySelectProps {
  categories: ServiceCategory[];
  onServiceSelect: (services: Service[]) => void;
  selectedServices: Service[];
}

const ServicesWrapper = styled.div`
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.default};
  overflow: hidden;
`;

const Summary = styled.div`
  background: white;
  padding: 16px;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.default};
`;

const SummaryTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: ${theme.typography.title.size};
  font-weight: ${theme.typography.title.weight};
  color: ${theme.colors.title};
`;

const SummaryDetail = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.text};
  margin-top: 4px;
`;

export const ServiceCategorySelect: React.FC<ServiceCategorySelectProps> = ({
  categories,
  onServiceSelect,
  selectedServices
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins}min`;
    return `${hours}h${mins > 0 ? ` ${mins}min` : ''}`;
  };

  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleService = (service: Service) => {
    const isSelected = selectedServices.some(s => s.id === service.id);
    const newSelectedServices = isSelected
      ? selectedServices.filter(s => s.id !== service.id)
      : [...selectedServices, service];
    onServiceSelect(newSelectedServices);
  };

  const totalDuration = selectedServices.reduce((sum, service) => sum + service.duration, 0);
  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <SelectContainer>
      <ServicesWrapper>
        {categories.map(category => (
          <div key={category.id}>
            <CategoryHeader
              $isExpanded={expandedCategory === category.id}
              onClick={() => toggleCategory(category.id)}
            >
              {category.name}
            </CategoryHeader>
            <ServiceList $isExpanded={expandedCategory === category.id}>
              {category.services.map(service => (
                <ServiceItem
                  key={service.id}
                  $isSelected={selectedServices.some(s => s.id === service.id)}
                  onClick={() => toggleService(service)}
                >
                  <ServiceInfo>
                    <ServiceName>{service.name}</ServiceName>
                    <ServiceDetails>{formatDuration(service.duration)}</ServiceDetails>
                  </ServiceInfo>
                  <ServicePrice>{formatPrice(service.price)}</ServicePrice>
                </ServiceItem>
              ))}
            </ServiceList>
          </div>
        ))}
      </ServicesWrapper>

      {selectedServices.length > 0 && (
        <Summary>
          <SummaryTitle>Selected Services</SummaryTitle>
          {selectedServices.map(service => (
            <SummaryDetail key={service.id}>
              <span>{service.name}</span>
              <span>{formatDuration(service.duration)}</span>
            </SummaryDetail>
          ))}
          <SummaryDetail style={{ marginTop: '12px', fontWeight: 'bold' }}>
            <span>Total</span>
            <span>{formatDuration(totalDuration)} - {formatPrice(totalPrice)}</span>
          </SummaryDetail>
        </Summary>
      )}
    </SelectContainer>
  );
};
