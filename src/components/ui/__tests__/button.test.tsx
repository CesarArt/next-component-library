import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button component', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders an icon on the left and right when requested', () => {
    const { container, rerender } = render(<Button iconName={'Circle'}>WithIcon</Button>);
    // expect an svg icon to be present
    expect(container.querySelector('svg')).toBeTruthy();

    // icon on the right
    rerender(<Button iconName={'Circle'} iconRight>WithIcon</Button>);
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('applies state and variant classes', () => {
    const { container, rerender } = render(<Button state="loading">Loading</Button>);
    const btn = container.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn?.className).toContain('cursor-progress');

    rerender(<Button state="disabled" disabled>Disabled</Button>);
    expect(btn?.className).toContain('cursor-not-allowed');
  });

  it('accepts variant prop (secondary, danger) and custom className', () => {
    const { container } = render(<Button variant="secondary" className="custom-class">Sec</Button>);
    const btn = container.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn?.className).toContain('custom-class');
    // ensure variant string influences class output (secondary mapping includes 'bg-secondary')
    expect(btn?.className).toContain('bg-secondary');
  });
});
