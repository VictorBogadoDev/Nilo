import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {StartNavigationProps} from '../../../Navigation/StartNavigation';
import {setCodeUser} from '../../User/slice';
import {colorsLinear, StartStyle} from '../style';
import {inputGenericVal} from '../../../../helper/validationRules';
import SplashStyle from '../../Splash/style';
import LinearGradient from 'react-native-linear-gradient';

interface IStartProps {
  navigation: StartNavigationProps;
}
interface IControllerData {
  code: string;
}

export const CodeScreen = ({navigation}: IStartProps): React.ReactElement => {
  const {handleSubmit, control, errors} = useForm();
  const dispatch = useDispatch();

  const advance = (data: IControllerData) => {
    dispatch(setCodeUser(data.code));
    console.log(data.code);
    navigation.navigate('debeScreen');
  };
  return (
    <View style={StartStyle.container}>
      <Image
        style={SplashStyle.img}
        source={require('../../../../Assets/img/mybox.png')}
      />
      <View style={StartStyle.containerTitulo}>
        <Text style={StartStyle.titulo}>Completa los datos para ingresar</Text>
      </View>
      <View style={StartStyle.containerImg}>
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
                maxLength={4}
                labelStyle={StartStyle.label}
                inputStyle={StartStyle.label}
                onChangeText={(text) => onChange(text)}
                value={value}
                errorMessage={errors?.code?.message}
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

export default CodeScreen;
