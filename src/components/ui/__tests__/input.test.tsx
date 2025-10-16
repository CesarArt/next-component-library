import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../input';

describe('Input component', () => {
  it('renders label and input', () => {
    render(<Input type="text" placeHolder="enter" label="Name" />);
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByPlaceholderText('enter')).toBeDefined();
  });
});
