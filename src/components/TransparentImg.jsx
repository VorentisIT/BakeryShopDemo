import React, { useState, useEffect } from 'react';
import { removeDarkBackground } from '../utils/transparentImage';

export default function TransparentImg({ src, alt, className = '', style = {}, threshold = 35 }) {
  const [transparentSrc, setTransparentSrc] = useState(src);

  useEffect(() => {
    let isMounted = true;
    if (!src) return;

    setTransparentSrc(src); // Ensure immediate display

    removeDarkBackground(src, threshold).then((result) => {
      if (isMounted && result) {
        setTransparentSrc(result);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [src, threshold]);

  return (
    <img
      src={transparentSrc || src}
      alt={alt || ''}
      className={className}
      style={style}
    />
  );
}
