import { StorageKeyTypes } from '@ts';
type StorageKey = keyof StorageKeyTypes;
export const setStorage = async <T>(
  key: StorageKey,
  value: T,
): Promise<void> => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`AsyncStorage - Error setting item: ${key}`, error);
  }
};

// Arrow function for getting an item from AsyncStorage
export const getStorage = async <T>(key: StorageKey): Promise<T | null> => {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.error(`AsyncStorage - Error getting item: ${key}`, error);
    return null;
  }
};

// Arrow function for removing an item from AsyncStorage
export const removeStorage = async (key: StorageKey): Promise<void> => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`AsyncStorage - Error removing item: ${key}`, error);
  }
};

// Arrow function for clearing all items from AsyncStorage
export const clearStorage = async (): Promise<void> => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('AsyncStorage - Error clearing items', error);
  }
};
