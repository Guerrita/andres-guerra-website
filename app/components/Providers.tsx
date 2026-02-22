"use client";

import { I18nProvider } from "@/app/lib/i18n-context";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <Toaster richColors position="bottom-right" />
      {children}
    </I18nProvider>
  );
}
