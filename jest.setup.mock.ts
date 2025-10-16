/* Mock @headlessui/react early so Transition/Dialog implementations that schedule
   async updates are replaced before any test imports the real module.

   This file is loaded via `setupFiles` in Jest (runs before the test framework
   and before any modules are imported), ensuring mocks are in place early.
*/
/* eslint-disable @typescript-eslint/no-explicit-any */
// Attempt to reuse a React binding if one already exists in the environment
// to avoid redeclaration errors. Fall back to require for Node environments.
// Prefer an existing React on the global object (Jest env likely provides it).
// If it's not present, fall back to a tiny stub that just renders children.
// Execute the mock at module evaluation time so it's registered before other modules
// are imported by tests. The factory must be inline and must not reference
// out-of-scope variables.
jest.mock('@headlessui/react', () => {
  // Use any available React on globalThis for Fragment/createElement if present.
  // Otherwise fall back to tiny local implementations that just forward children.
  const ReactLocal = (globalThis as any).React ?? {
    Fragment: (props: any) => props.children,
    createElement: (_comp: any, _props: any, children: any) => children,
  };

  const Fragment = ReactLocal.Fragment;
  const createElement = ReactLocal.createElement;

  const Noop = ({ children }: any) => createElement(Fragment, null, children);

  const Dialog = ({ children }: any) => createElement(Fragment, null, children);
  Dialog.Overlay = Noop;
  Dialog.Panel = Noop;
  Dialog.Title = Noop;
  Dialog.Description = Noop;

  return {
    __esModule: true,
    Dialog,
    DialogOverlay: Noop,
    DialogPanel: Noop,
    DialogTitle: Noop,
    DialogDescription: Noop,
    Transition: Noop,
    TransitionChild: Noop,
    TransitionRoot: Noop,
  };
});
