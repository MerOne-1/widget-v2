import styled from 'styled-components';
import { theme } from '../styles/theme';

const SelectWrapper = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: ${theme.typography.text.size};
  font-weight: ${theme.typography.text.weight};
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.default};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.text.size};
`;

const services = [
  'Haircut',
  'Hair Coloring',
  'Styling',
  'Manicure',
  'Pedicure',
];

interface ServiceSelectProps {
  onChange: (service: string) => void;
}

export const ServiceSelect = ({ onChange }: ServiceSelectProps) => {
  return (
    <SelectWrapper>
      <Label>Select Service</Label>
      <Select onChange={(e) => onChange(e.target.value)}>
        <option value="">Choose a service...</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};
