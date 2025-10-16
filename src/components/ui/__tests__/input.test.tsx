import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../input';

describe('Input component', () => {
  it('renders label and input', () => {
    render(<Input type="text" placeHolder="enter" label="Name" />);
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByPlaceholderText('enter')).toBeDefined();
  });

  it('applies state variants (error, success)', () => {
    const { container, rerender } = render(<Input type="text" placeHolder="p" label="L" state="error" />);
    const input = container.querySelector('input');
    expect(input).toBeTruthy();
    expect(input?.className).toContain('ring-2');

    rerender(<Input type="text" placeHolder="p" label="L" state="success" />);
    expect(input?.className).toContain('ring-2');
  });

  it('keeps autocomplete on by default and accepts extra props', () => {
    const { container } = render(<Input type="email" placeHolder="email" label="E" autoComplete="off" /> as any);
    const input = container.querySelector('input');
    expect(input?.getAttribute('autocomplete')).toBe('off');
  });
});
