'use client';

import { createTheme } from '@mantine/core';
export const theme = createTheme({
  fontSizes: {
    md: '14px',
    lg: '15px',
  },
  colors: {
    // Define your custom colors here
    myPrimary: [
      '#5812cb',
      '#5812cb',
      '#5812cb',
      '#5812cb',
      '#5812cb',
      '#5812cb',
      '#5812cb',
      '#5812cb',
      '#5812cb',
      '#5812cb',
    ],
  },
  primaryColor: 'myPrimary',
  components: {
    Button: {
      styles: (theme: any, params: any) => {
        const fSize =
          params.size === 'lg'
            ? '16px'
            : params.size === 'md'
            ? '14px'
            : params.size === 'sm'
            ? '13px'
            : params.size === 'xl'
            ? '16px'
            : params.size === 'xs'
            ? '12px'
            : '13px';
        return {
          root: {
            fontSize: fSize,
            fontWeight: '500',
            ...(params.variant === 'default' && {
              border: 'none',
              color: '#070112',
            }),
            // borderRadius: "100px",
          },
        };
      },
    },
    Card: {
      styles: () => {
        return {
          root: {
            borderRadius: 10,
          },
        };
      },
    },
  },
});
