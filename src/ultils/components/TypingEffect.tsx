// src/components/TypingEffect.tsx
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypingEffectProps {
  strings: string[];
}

export default function TypingEffect({ strings }: TypingEffectProps) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings,
      typeSpeed: 20,
      backSpeed: 5,
      backDelay: 2000,
      loop: false,
      showCursor: true,
    });

    return () => typed.destroy(); // clean up
  }, [strings]);

  return <span ref={el} />;
}
