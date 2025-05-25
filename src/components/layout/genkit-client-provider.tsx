// src/components/layout/genkit-client-provider.tsx
"use client";

import { GenkitProvider } from "@genkit-ai/next/client";

export function GenkitClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GenkitProvider>{children}</GenkitProvider>;
}
