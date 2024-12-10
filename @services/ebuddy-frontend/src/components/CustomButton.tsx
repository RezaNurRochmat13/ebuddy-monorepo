// src/components/CustomButton.tsx
import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="success" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
