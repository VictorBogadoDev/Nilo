//reglas de validacion

const NAME_REGEX = /^[A-Za-z ]*$/;
export const nameVal = {
  required: {
    value: true,
    message: 'Campo Requerido',
  },
  pattern: {
    value: NAME_REGEX,
    message: 'Ingrese un nombre válido',
  },
  maxLength: {
    value: 32,
    message: '32 caracteres máximo',
  },
  minLength: {
    value: 2,
    message: '2 caracteres mínimo',
  },
};
export const inputGenericVal = {
  required: {
    value: true,
    message: 'Campo Requerido',
  },
};
