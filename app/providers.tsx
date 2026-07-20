"use client";

import { NUIProvider } from "@nofinite/nui";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NUIProvider>{children}</NUIProvider>;
}
