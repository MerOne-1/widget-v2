import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  background: linear-gradient(to bottom, #ffffff, #fafafa);

  @media (max-width: 480px) {
    padding: 16px;
    gap: 24px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${theme.colors.text};
  font-size: ${theme.typography.text.size};
  font-weight: 500;
  transition: color 0.2s ease;
`;

const InputGroup = styled.div`
  flex: 1;
  position: relative;
  
  &:focus-within label {
    color: ${theme.colors.button};
  }
`;

const baseInputStyles = `
  width: 100%;
  padding: 16px;
  border: 2px solid ${theme.colors.containerBorder};
  border-radius: ${theme.borderRadius.default};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.text.size};
  color: ${theme.colors.text};
  background-color: white;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 16px; /* Larger on mobile for better tap targets */
  }
  
  &:hover {
    border-color: ${theme.colors.button}80;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.button};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 14px;
  }
`;

const Input = styled.input`
  ${baseInputStyles}
`;

const TextArea = styled.textarea`
  ${baseInputStyles}
  resize: vertical;
  min-height: 120px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  left: 4px;
  bottom: -20px;
  color: #e53935;
  font-size: 12px;
  font-weight: 500;
  opacity: 0;
  transform: translateY(-4px);
  animation: slideIn 0.2s ease forwards;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${theme.colors.border};
`;

interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  comments?: string;
}

interface ClientInfoFormProps {
  onFormValidityChange: (isValid: boolean, data: ClientInfo) => void;
  onValidateRef: (validateFn: (showErrors: boolean) => void) => void;
}

export const ClientInfoForm: React.FC<ClientInfoFormProps> = ({
  onFormValidityChange,
  onValidateRef
}) => {
  const [formData, setFormData] = useState<ClientInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    comments: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ClientInfo, string>>>({});
  const [showErrors, setShowErrors] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Spanish phone number format
    return /^(?:\+34|0034)?[6789]\d{8}$/.test(phone.replace(/\s/g, ''));
  };

  const handleChange = (field: keyof ClientInfo) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    // Clear error for this field
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }

    // Validate the form with the new value
    validate(false);
  };



  // Set up validation function reference once
  const validate = React.useCallback((showErrors: boolean) => {
    const newErrors: Partial<Record<keyof ClientInfo, string>> = {};
    
    // Check all required fields and formats
    const isFirstNameValid = formData.firstName.trim() !== '';
    const isLastNameValid = formData.lastName.trim() !== '';
    const isEmailValid = formData.email.trim() !== '' && validateEmail(formData.email);
    const isPhoneValid = formData.phone.trim() !== '' && validatePhone(formData.phone);
    const isAddressValid = formData.address.trim() !== '';

    // Set appropriate error messages
    if (!isFirstNameValid) newErrors.firstName = 'Campo requerido';
    if (!isLastNameValid) newErrors.lastName = 'Campo requerido';
    if (!formData.email.trim()) newErrors.email = 'Campo requerido';
    else if (!validateEmail(formData.email)) newErrors.email = 'Email no válido';
    if (!formData.phone.trim()) newErrors.phone = 'Campo requerido';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Teléfono no válido';
    if (!isAddressValid) newErrors.address = 'Campo requerido';

    // Update UI if showing errors
    if (showErrors) {
      setErrors(newErrors);
      setShowErrors(true);
    }

    // Check if all fields are valid
    const isValid = isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isAddressValid;
    
    // Update parent component
    onFormValidityChange(isValid, formData);
  }, [formData, validateEmail, validatePhone, onFormValidityChange]);

  useEffect(() => {
    onValidateRef(validate);
  }, [onValidateRef, validate]);

  // Run initial validation
  useEffect(() => {
    validate(false);
  }, [validate]);

  return (
    <FormContainer>
      <FormGroup>
        <InputGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            placeholder="Introduce tu nombre"
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Apellidos</Label>
          <Input
            type="text"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            placeholder="Introduce tus apellidos"
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="Introduce tu email"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Teléfono</Label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            placeholder="+34 XXX XXX XXX"
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </InputGroup>
      </FormGroup>

      <InputGroup>
        <Label>Dirección</Label>
        <Input
          type="text"
          value={formData.address}
          onChange={handleChange('address')}
          placeholder="Introduce tu dirección"
        />
        {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
      </InputGroup>

      <InputGroup>
        <Label>Comentarios (Opcional)</Label>
        <TextArea
          value={formData.comments}
          onChange={handleChange('comments')}
          placeholder="¿Alguna nota o petición especial?"
        />
      </InputGroup>
    </FormContainer>
  );
};
