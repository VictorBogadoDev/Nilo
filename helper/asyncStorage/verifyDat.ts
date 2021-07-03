import {IUserState} from '../../src/Features/User/state';
import {deleteData, retrieveData, storeData} from './index';

const USER_DATA_KEY = 'nilo:user_data';
const USER_NOTIFICATION_KEY = 'nilo:user_notification';
const USER_AVATAR_IMAGE = 'nilo:user_avatar';

/**
 * Recibe datos del usuario y verifica su existencia, en caso de no existir guarda los datos en el asyncStorage, si existe lo reemplaza.
 * @param userData
 */
export const manageUserData = async (userData: IUserState) => {
  try {
    if ((await existsUserData()) === null) {
      // Token not found
      storeData(userData, USER_DATA_KEY);
    } else {
      // Token found
      deleteData(USER_DATA_KEY);
      storeData(userData, USER_DATA_KEY);
    }
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Recibe datos del usuario y verifica su existencia, en caso de no existir guarda los datos en el asyncStorage, si existe lo reemplaza.
 * @param userData
 */
export const manageUserAvatarData = async (avatar: string) => {
  try {
    if ((await existsUserAvatarData()) === null) {
      // Token not found
      storeData(avatar, USER_AVATAR_IMAGE);
    } else {
      // Token found
      deleteData(USER_AVATAR_IMAGE);
      storeData(avatar, USER_AVATAR_IMAGE);
    }
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Recibe el jwt de notificaciones del usuario y verifica su existencia, en caso de no existir guarda los datos en el asyncStorage, si existe lo reemplaza.
 * @param userToken
 */
export const manageUserNotifData = async (userToken: string) => {
  try {
    if ((await existsUserData()) === null) {
      // Token not found
      storeData(userToken, USER_NOTIFICATION_KEY);
    } else {
      // Token found
      deleteData(USER_NOTIFICATION_KEY);
      storeData(userToken, USER_NOTIFICATION_KEY);
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Verifica si los datos del usuario existen o no. Si existen retorna los datos, sino un null.
 */
export const existsUserData = async (): Promise<IUserState | null> => {
  try {
    return retrieveData<IUserState>(USER_DATA_KEY);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Verifica si el jwt de notificaciones del usuario existe o no. Si existe retorna el jwt, sino un null.
 */
export const existsUserNotifData = async (): Promise<string | null> => {
  try {
    return retrieveData<string>(USER_NOTIFICATION_KEY);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Verifica si el avatar del usuario existen o no. Si existen retorna los datos, sino un null.
 */
export const existsUserAvatarData = async (): Promise<string | null> => {
  try {
    return retrieveData<string>(USER_AVATAR_IMAGE);
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
/**
 * Elimina los datos de usuario del asyncstorage del dispositivo.
 */
export const deleteUserData = async (): Promise<void> => {
  try {
    await deleteData(USER_AVATAR_IMAGE);
    await deleteData(USER_DATA_KEY);
  } catch (err) {
    throw new Error(err);
  }
};
