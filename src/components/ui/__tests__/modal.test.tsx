import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../modal';

describe('Modal component (basic render)', () => {
  it('renders children when open', () => {
    const setOpen = jest.fn();
    render(
      <Modal open={true} setOpen={setOpen}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    expect(screen.getByText('Header')).toBeDefined();
    expect(screen.getByText('Body')).toBeDefined();
    expect(screen.getByText('Footer')).toBeDefined();
  });
});
