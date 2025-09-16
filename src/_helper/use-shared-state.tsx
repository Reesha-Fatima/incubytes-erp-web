'use client';
import { useCallback, useEffect, useState } from 'react';

export type StateUpdater<ValueType> = (value: ValueType) => boolean;
export type SharedStateNext<ValueType> = (nextValue: ValueType) => void;
export type SharedStateMiddleware<ValueType> = (
  value: ValueType,
  next: SharedStateNext<ValueType>,
) => void;
type StateEntry<ValueType> = {
  value?: ValueType;
  updaters: Set<StateUpdater<ValueType>>;
};

const states: any = new Map<string, StateEntry<any>>();
const middlewares = new Map<string, Set<SharedStateMiddleware<any>>>();

export function readSharedState<ValueType>(
  key: string,
  defaultValue?: ValueType,
) {
  return states.has(key) ? states.get(key).value : defaultValue;
}

export function storeSharedState<ValueType>(key: string, value: ValueType) {
  update<ValueType>(key, value);
}

function ensureStateValue<ValueType>(key: string, defaultValue?: ValueType) {
  if (!states.has(key)) {
    states.set(key, {
      value: defaultValue,
      updaters: new Set<StateUpdater<ValueType>>(),
    });
  }
}

function getCurrentValue<ValueType>(key: string, defaultValue?: ValueType) {
  ensureStateValue<ValueType>(key, defaultValue);
  return states.get(key)!;
}

function setDefaultValue<ValueType>(key: string, value?: ValueType) {
  const current = getCurrentValue<ValueType>(key);
  if (current.value === undefined && value !== undefined) {
    updateValue<ValueType>(key, value);
  }
}

export function useSharedState<ValueType = any>(
  key: string,
  defaultValue?: ValueType,
): [ValueType, (value: ValueType) => void] {
  setDefaultValue<ValueType>(key, defaultValue);

  const current = getCurrentValue<ValueType>(key, defaultValue);
  const [state, setState] = useState<ValueType | undefined>(current.value);

  useEffect(() => {
    const stateUpdater: StateUpdater<ValueType> = (value) => {
      setState(value);
      return true;
    };

    current.updaters.add(stateUpdater);

    return () => {
      current.updaters.delete(stateUpdater);
    };
  }, [key]);

  const setter = useCallback(
    (value: ValueType) => {
      if (typeof value === 'function') {
        const newValue = (value as any)(current.value);
        return update<ValueType>(key, newValue);
      }
      return update<ValueType>(key, value);
    },
    [current.value, key],
  );

  return [state as ValueType, setter];
}

function resolveMiddlewares<ValueType>(key: string, value: ValueType) {
  const m = middlewares.get(key);
  if (!m) {
    return value;
  }

  let newValue: ValueType = value;
  function updateValue(nextValue: ValueType) {
    newValue = nextValue;
  }

  m.forEach((middleware) => {
    middleware(newValue, updateValue);
  });

  return newValue;
}

function updateValue<ValueType = any>(key: string, value: ValueType) {
  const current = getCurrentValue<ValueType>(key);
  if (current.value === value) {
    return false;
  }

  current.value = resolveMiddlewares<ValueType>(key, value);
  return true;
}

function emitUpdate<ValueType = any>(key: string) {
  const current = getCurrentValue<ValueType>(key);
  current.updaters.forEach((listener: any) => {
    listener(current.value);
  });
}

export function update<ValueType = any>(key: string, value: ValueType) {
  const ret = updateValue<ValueType>(key, value);
  if (ret) {
    emitUpdate<ValueType>(key);
  }
  return ret;
}

export function registerMiddleware<ValueType = any>(
  key: string,
  middleware: SharedStateMiddleware<ValueType>,
) {
  const m = middlewares.get(key) || new Set<SharedStateMiddleware<ValueType>>();
  m.add(middleware);
  middlewares.set(key, m);
}

export function removeMiddleware<ValueType = any>(
  key: string,
  middleware: SharedStateMiddleware<ValueType>,
) {
  const m = middlewares.get(key);
  if (m) {
    m.delete(middleware);
  }
}
