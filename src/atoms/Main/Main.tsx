'use client';
import { queryClient } from '@query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, memo } from 'react';
type Props = {
  children: ReactNode;
};

function Main({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className="bg_white">{children}</div>
      </>
    </QueryClientProvider>
  );
}

export default memo(Main);
