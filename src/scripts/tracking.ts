// Story 5.4 — Wrapper para Plausible Events.
// Nunca lança erro se Plausible não carregou (dev, bloqueado por adblock, etc).

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(name: string, props?: Record<string, string>): void {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(name, props ? { props } : undefined);
  }
}
