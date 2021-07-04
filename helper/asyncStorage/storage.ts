import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUserState} from '../../src/Features/User/state';
export const USER_DATA_KEY = 'nilo:user_data';

/**
 * guarda datos bajo nombre de key
 * @param data
 * @param key
 * */
const storeData = async <T>(data: T, key: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    throw new Error(err.menssage);
  }
};

//Retorna una estructura de datos almacenada en el local storage del dispositivo,
const retrieveData = async <T>(key: string): Promise<T | null> => {
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

export const existsData = async (): Promise<IUserState | null> => {
  try {
    return retrieveData<IUserState>(USER_DATA_KEY);
  } catch (err) {
    throw new Error(err);
  }
};

export const saveData = async (data: IUserState): Promise<boolean> => {
  try {
    await storeData(data, USER_DATA_KEY);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const deleteData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
