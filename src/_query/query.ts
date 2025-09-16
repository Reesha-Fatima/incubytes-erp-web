import { Query, QueryClient } from '@tanstack/react-query';

import { queryKeys, QueryKeys } from './keys';

export const DAY_IN_MS = 1000 * 60 * 60 * 24 * 365;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const cachingQueries = (query: Query) => {};

const invalidateQueries = (keys: keyof QueryKeys) => {
  queryClient.invalidateQueries({ queryKey: [keys] });
};

const removeAllQueries = () => {
  queryClient.removeQueries();
};

const getQueryData = <T>(key: keyof QueryKeys): T | undefined => {
  return queryClient.getQueryData<T>([key]);
};

export {
  cachingQueries,
  getQueryData,
  invalidateQueries,
  queryClient,
  queryKeys,
  removeAllQueries,
};
export type { QueryKeys };
