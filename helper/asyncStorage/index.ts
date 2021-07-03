import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Guarda una estructura de datos en el local storage del dispositivo bajo el nombre que se asigne en key.
 * @param data
 * @param key
 */
export const storeData = async <T>(data: T, key: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Retorna una estructura de datos almacenada en el local storage del dispositivo, debe recibir el nombre de la key bajo la cual se almaceno
 * dicha estructura.
 * @param key
 */
export const retrieveData = async <T>(key: string): Promise<T | null> => {
  try {
    let value = null;
    value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const res = JSON.parse(value) as T;
      return res;
    }
    return value;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Elimina un key value del local storage del dispositivo.
 * @param key
 */
export const deleteData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    throw new Error(err.message);
  }
};
