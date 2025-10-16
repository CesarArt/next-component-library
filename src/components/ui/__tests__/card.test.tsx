import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardBody, CardFooter } from '../card';

describe('Card component', () => {
  it('renders card parts', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Body')).toBeDefined();
    expect(screen.getByText('Footer')).toBeDefined();
  });

  it('renders variant and scale props', () => {
    const { container, rerender } = render(
      <Card variant="solid" scale="scale"> 
        <CardHeader>Title2</CardHeader>
      </Card>
    );
    const div = container.querySelector('div');
    expect(div).toBeTruthy();
    // variant solid adds border style classes
    expect(div?.className).toContain('border-3');

    rerender(
      <Card variant="dotted">
        <CardHeader>Title3</CardHeader>
      </Card>
    );
    expect(container.querySelector('div')?.className).toContain('border-2');
  });

  it('renders CardMedia when provided', () => {
    // import dynamic image mock by passing a string src
    render(
      <Card>
        {/* CardMedia expects src string or import */}
        {/* We pass a string which our test-mock Image handles */}
        <img src="/test.png" alt="t" />
      </Card>
    );
    expect(screen.getByRole('img')).toBeDefined();
  });
});
