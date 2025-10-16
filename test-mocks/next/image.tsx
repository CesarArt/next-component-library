/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
export default function Image(props: any) {
  // Render a simple img for tests
  return React.createElement('img', { src: typeof props.src === 'string' ? props.src : props.src?.src, alt: props.alt });
}
