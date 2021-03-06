import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StartNavigationProps} from '../../Navigation/StartNavigation';
import {colorsLinear, StartStyle} from './style';
import {Input} from 'react-native-elements';
import {nameVal} from '../../../helper/validationRules';
import {setName} from '../User/slice';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import SplashStyle from '../Splash/style';
import LinearGradient from 'react-native-linear-gradient';

interface IStartProps {
  navigation: StartNavigationProps;
}
interface IControllerData {
  name: string;
}

export const Login = ({navigation}: IStartProps): React.ReactElement => {
  const {handleSubmit, control, errors} = useForm();
  const dispatch = useDispatch();

  const advance = (data: IControllerData) => {
    dispatch(setName(data.name));
    console.log(data.name);
    navigation.navigate('CodeScreen');
  };
  return (
    <View style={StartStyle.container}>
      <Image
        style={SplashStyle.img}
        source={require('../../../Assets/img/mybox.png')}
      />
      <View style={StartStyle.containerTitulo}>
        <Text style={StartStyle.titulo}>Completa los datos para ingresar</Text>
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
                placeholder="Nombre"
                labelStyle={StartStyle.label}
                inputStyle={StartStyle.label}
                onChangeText={(text) => onChange(text)}
                value={value}
                errorMessage={errors?.name?.message}
                errorStyle={StartStyle.error}
              />
            );
          }}
        />
      </View>
      <View style={StartStyle.containerButton}>
        <TouchableOpacity
          style={StartStyle.button}
          onPress={handleSubmit(advance)}>
          <LinearGradient colors={colorsLinear} style={StartStyle.buttonLog}>
            <Text style={StartStyle.titleButton}>Continuar</Text>
          </LinearGradient>
        </TouchableOpacity>
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

export default Login;
