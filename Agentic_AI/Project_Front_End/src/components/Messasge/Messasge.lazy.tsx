import React, { lazy, Suspense } from 'react';

const LazyMessasge = lazy(() => import('./Messasge'));

const Messasge = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMessasge {...props} />
  </Suspense>
);

export default Messasge;
