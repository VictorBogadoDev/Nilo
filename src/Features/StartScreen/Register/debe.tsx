import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {StartNavigationProps} from '../../../Navigation/StartNavigation';
import {setMoneyUser} from '../../User/slice';
import {colorsLinear, StartStyle} from '../style';
import {inputGenericVal} from '../../../../helper/validationRules';
import SplashStyle from '../../Splash/style';
import LinearGradient from 'react-native-linear-gradient';

interface IStartProps {
  navigation: StartNavigationProps;
}
interface IHomeProp {
  money: number;
}

export const CodeScreen = ({navigation}: IStartProps): React.ReactElement => {
  const {handleSubmit, control, errors} = useForm();
  const dispatch = useDispatch();

  const advance = (data: IHomeProp) => {
    dispatch(setMoneyUser(data.money));
    console.log(data.money);
    navigation.navigate('HomeNavigator');
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
          name="money"
          defaultValue=""
          control={control}
          rules={inputGenericVal}
          render={({onChange, value}) => {
            return (
              <Input
                label="escribe el valor de tu ingreso mensual"
                placeholder="$000000"
                labelStyle={StartStyle.label}
                inputStyle={StartStyle.label}
                onChangeText={(number) => onChange(number)}
                value={value}
                errorMessage={errors?.money?.message}
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
