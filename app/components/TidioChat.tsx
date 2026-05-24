'use client';

import { useEffect } from 'react';

export default function TidioChat() {
  useEffect(() => {
    // Load Tidio chat widget
    const script = document.createElement('script');
    script.src = 'https://code.tidio.co/a4f12bbc2ab8c0b81e36ab64b2f9b5ae';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
