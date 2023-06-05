import React, { ReactElement } from "react";

interface TranslateBoldProps {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function TranslateBold({ children, className, as = "p" }: TranslateBoldProps): ReactElement {
  const pattern = /(\*\*.*?\*\*)/;

  const text = children;
  console.log("text split", text.split(pattern));
  const parts = text.split(pattern).filter((x) => x.length > 0);
  console.log("parts", parts);

  const elements = parts.map((part, index) => {
    if (part.match(pattern)) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    } else {
      return <span key={index}>{part}</span>;
    }
  });

  return React.createElement(as, { className }, elements);
}
