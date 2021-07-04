import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {AppNavigationAppProps} from '../../../Navigation/AppNavigator';
import {SelectUserData} from '../../User/slice';
import SplashStyle from '../style';

interface IStartProps {
  navigation: AppNavigationAppProps;
}
export default ({navigation}: IStartProps): React.ReactElement => {
  const empty = '';
  const [codem, setCodem] = useState(empty);
  const codeUserSelect = useSelector(SelectUserData);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const setCode = (data: string) => {
    if (codem.length < 4) {
      setCodem(codem + data);
    }
  };
  useEffect(() => {
    if (codem.length === 4 && codem === codeUserSelect.code) {
      setSuccess(true);
      setTimeout(() => {
        navigation.navigate('HomeNavigator');
      }, 700);
    }
    if (codem.length === 4 && codem !== codeUserSelect.code) {
      setError(true);
      setCodem(empty);
      setTimeout(() => {
        setError(false);
      }, 700);
    }
  }, [codeUserSelect.code, codem, navigation]);

  return (
    <View style={SplashStyle.container}>
      <Image
        style={SplashStyle.img}
        source={require('../../../../Assets/img/mybox.png')}
      />
      <View style={SplashStyle.CustomContain}>
        <View style={SplashStyle.CustomVisor}>
          <Text>{codem}</Text>
        </View>
        <View style={SplashStyle.CustomPad}>
          <Image
            style={SplashStyle.CustomNumbers}
            source={require('../../../../Assets/img/numPng2.png')}
          />
          {success && (
            <Image
              style={SplashStyle.CustomNumbers}
              source={require('../../../../Assets/img/numsucces.png')}
            />
          )}
          {error && (
            <Image
              style={SplashStyle.CustomNumbers}
              source={require('../../../../Assets/img/numError.png')}
            />
          )}

          <View style={SplashStyle.CustomBarContain}>
            <View style={SplashStyle.CustomBar}>
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('1')}
              />
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('2')}
              />
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('3')}
              />
            </View>
            <View style={SplashStyle.CustomBar}>
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('4')}
              />
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('5')}
              />
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('6')}
              />
            </View>
            <View style={SplashStyle.CustomBar}>
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('7')}
              />
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('8')}
              />
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('9')}
              />
            </View>
            <View style={SplashStyle.CustomBar}>
              <TouchableOpacity style={SplashStyle.CustomTouch} />
              <TouchableOpacity
                style={SplashStyle.CustomTouch}
                onPress={() => setCode('0')}
              />
              <TouchableOpacity style={SplashStyle.CustomTouch} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
