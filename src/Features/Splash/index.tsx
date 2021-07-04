import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {existsData} from '../../../helper/asyncStorage/storage';
import {AppNavigationAppProps} from '../../Navigation/AppNavigator';
import {setUserData} from '../User/slice';
import {
  existData,
  notExistData,
  splashLoading,
  splashStopLoading,
} from './slice';
import SplashStyle, {zoomOut} from './style';
import * as Animatable from 'react-native-animatable';

interface IStartProps {
  navigation: AppNavigationAppProps;
}
export default ({navigation}: IStartProps): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(splashLoading());
    const fetchUserData = async () => {
      const data = await existsData();
      console.log(data, 'nombre data');
      if (data === null) {
        setTimeout(() => {
          dispatch(splashStopLoading());
          dispatch(notExistData());
          console.log(data, 'entro en igual null');
          navigation.navigate('StartNavigator');
        }, 2500);
      } else {
        setTimeout(() => {
          dispatch(setUserData(data));
          dispatch(splashStopLoading());
          console.log(data, 'entro diferente de null');
          dispatch(existData());
          navigation.navigate('SecurityCheck');
        }, 2500);
      }
    };

    fetchUserData();
  }, [dispatch, navigation]);

  return (
    <View style={SplashStyle.container}>
      <Image
        style={SplashStyle.img}
        source={require('../../../Assets/img/mybox.png')}
      />
      <Animatable.Text style={SplashStyle.text} animation={zoomOut}>
        Cargando los datos, espere por favor
      </Animatable.Text>
    </View>
  );
};
