import React, { lazy, Suspense } from 'react';

const LazyChatbox = lazy(() => import('./Chatbox'));

const Chatbox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyChatbox {...props} />
  </Suspense>
);

export default Chatbox;
