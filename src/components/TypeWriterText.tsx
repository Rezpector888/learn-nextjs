"use client";

import { useEffect, useState } from "react";

function useTypewriter(text: string, speed: number = 50) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

type Props = {
  text: string;
  speed?: number;
  className?: string;
};

export default function TypeWriterText({
  text,
  speed = 50,
  className = "",
}: Props) {
  const displayed = useTypewriter(text, speed);
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: displayed + '<span class="animate-pulse">|</span>',
      }}
    />
  );
}
