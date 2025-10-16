import { render, screen, waitFor } from "@testing-library/react";
import { act } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../modal";


describe('Modal component (basic render)', () => {

    it('renders card parts', () => {
    render(
      <Modal open={true} setOpen={function (): void {
        throw new Error("Function not implemented.");
      } }>
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

describe('Modal interactions', () => {
  it('calls setOpen when close icon is clicked (wrapped in act)', async () => {
    const setOpen = jest.fn();
    const { container } = render(
      <Modal open={true} setOpen={setOpen}>
        <ModalHeader>Header</ModalHeader>
      </Modal>
    );

    // wait for the close icon (has class 'btn-hover') to appear in the portal (document.body)
    const closeBtn = await waitFor(() => {
      const el = document.body.querySelector('.btn-hover');
      if (!el) throw new Error('closeBtn not yet present');
      return el as Element;
    });

    act(() => {
      closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(setOpen).toHaveBeenCalled();
  });
});
