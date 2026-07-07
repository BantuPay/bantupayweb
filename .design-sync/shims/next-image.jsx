import React from 'react';

// design-sync preview shim for next/image → plain <img>.
// Strips Next-only props so they don't leak onto the DOM node.
export default function Image(props) {
  const {
    src,
    alt = '',
    fill,
    priority,
    quality,
    placeholder,
    blurDataURL,
    loader,
    unoptimized,
    sizes,
    width,
    height,
    style,
    ...rest
  } = props;
  const resolved =
    typeof src === 'object' && src !== null ? src.src || src.default || '' : src;
  const s = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...style }
    : style;
  return React.createElement('img', {
    src: resolved,
    alt,
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    style: s,
    ...rest,
  });
}
