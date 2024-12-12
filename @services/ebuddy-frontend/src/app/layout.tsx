// app/layout.tsx
'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
