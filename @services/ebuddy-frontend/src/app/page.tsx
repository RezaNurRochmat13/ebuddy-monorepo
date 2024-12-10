'use client';

import React from 'react';
import CustomButton from '../components/CustomButton';

export default function HomePage() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to Next.js with Material-UI</h1>
      <CustomButton label="Click Me" onClick={handleClick} />
    </div>
  );
}
