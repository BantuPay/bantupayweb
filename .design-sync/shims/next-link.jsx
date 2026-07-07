import React from 'react';

// design-sync preview shim for next/link → plain <a>.
export default function Link({ href, children, prefetch, replace, scroll, shallow, locale, ...rest }) {
  const h = typeof href === 'string' ? href : (href && href.pathname) || '#';
  return React.createElement('a', { href: h, ...rest }, children);
}
