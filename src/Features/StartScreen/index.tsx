import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProps} from '../../Navigation/StartNavigation';
import {StartStyle} from './style';
import {Button, Input} from 'react-native-elements';
import {inputGenericVal, nameVal} from '../../../helper/validationRules';
import {setCodeUser, setMoney, setName} from '../User/slice';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';

interface IStartProps {
  navigation: NavigationProps;
}
interface IControllerData {
  name: string;
  money: number;
  code: string;
}

export const Start = ({navigation}: IStartProps): React.ReactElement => {
  const {handleSubmit, control, errors} = useForm();
  const dispatch = useDispatch();

  const advance = (data: IControllerData) => {
    dispatch(setName(data.name));
    dispatch(setMoney(data.money));
    dispatch(setCodeUser(data.code));
    console.log(data.name);
    navigation.navigate('HomeNavigator');
  };
  return (
    <View style={StartStyle.container}>
      <View style={StartStyle.containerTitulo}>
        <Text style={StartStyle.titulo}>Titulo</Text>
      </View>
      <View style={StartStyle.containerImg}>
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={nameVal}
          render={({onChange, value}) => {
            return (
              <Input
                label="Ingresa tu nombre"
                placeholder="name"
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            );
          }}
        />
        <Controller
          name="money"
          defaultValue=""
          control={control}
          rules={inputGenericVal}
          render={({onChange, value}) => {
            return (
              <Input
                label="Ingresa tu ingreso mensual aqui"
                placeholder="0"
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            );
          }}
        />
        <Controller
          name="code"
          defaultValue=""
          control={control}
          rules={inputGenericVal}
          render={({onChange, value}) => {
            return (
              <Input
                label="Ingresa un codigo numerico de 4 digitos"
                placeholder="0000"
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            );
          }}
        />
      </View>
      <View style={StartStyle.containerButton}>
        <Button
          buttonStyle={StartStyle.button}
          title="Continuar"
          onPress={handleSubmit(advance)}
        />
      </View>
      {errors === null ? (
        <View>
          <Text>{errors}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Start;
