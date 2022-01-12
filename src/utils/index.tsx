import * as React from "react";

// Helper component for a link out of the home page in a new tab
export const L = ({
  to,
  style,
  children,
}: React.PropsWithChildren<{
  to: string;
  style?: Record<string, any>;
}>) => (
  <a style={style} href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
