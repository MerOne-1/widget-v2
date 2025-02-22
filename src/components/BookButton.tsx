import styled from 'styled-components';
import { theme } from '../styles/theme';

const StyledButton = styled.button`
  background-color: ${theme.colors.button};
  color: ${theme.colors.buttonText};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.button.size};
  font-weight: ${theme.typography.button.weight};
  border: none;
  border-radius: ${theme.borderRadius.button};
  padding: 12px 24px;
  cursor: pointer;
  text-transform: uppercase;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

interface BookButtonProps {
  onClick: () => void;
}

export const BookButton = ({ onClick }: BookButtonProps) => {
  return <StyledButton onClick={onClick}>Book</StyledButton>;
};
