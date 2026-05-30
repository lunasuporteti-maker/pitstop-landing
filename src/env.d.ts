/// <reference types="astro/client" />

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    dataLayer?: unknown[];
  }
}
