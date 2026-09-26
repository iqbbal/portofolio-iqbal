export const themeTokens = {
  colors: {
    bgBase: '#FAF9F6',
    bgSurface: '#FFFFFF',
    bgSurfaceElevated: '#FFFFFF',
    bgSurfaceGlass: 'rgba(255, 255, 255, 0.8)',
    borderSubtle: 'rgba(15, 23, 42, 0.07)',
    borderMuted: '#E2E8F0',
    borderFocus: '#CBD5E1',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#94A3B8',
    accentEmber: '#EA580C',
    accentEmberLight: '#FB923C',
    accentBlue: '#0284C7',
    accentSuccess: '#10B981',
  },
  typography: {
    fontSans: 'var(--font-sans), "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: 'var(--font-mono), "JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
  },
  animations: {
    springFast: { type: 'spring', stiffness: 400, damping: 30 },
    springGentle: { type: 'spring', stiffness: 260, damping: 25 },
    fade: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};
