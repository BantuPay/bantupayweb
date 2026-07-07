import React from 'react';

// design-sync preview shim for next/dynamic → React.lazy + Suspense.
// Honors the { loading } option; ignores { ssr }.
export default function dynamic(loader, options = {}) {
  const Lazy = React.lazy(() => {
    const p = typeof loader === 'function' ? loader() : loader;
    return Promise.resolve(p).then((m) => (m && m.default ? m : { default: m }));
  });
  const Loading = options.loading || (() => null);
  return function DynamicComponent(props) {
    return React.createElement(
      React.Suspense,
      { fallback: React.createElement(Loading) },
      React.createElement(Lazy, props),
    );
  };
}
