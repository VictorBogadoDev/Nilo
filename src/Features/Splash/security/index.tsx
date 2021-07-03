import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {NavigationAppProps} from '../../../Navigation/Appavigator';
import {SelectUserData} from '../../User/slice';
import SplashStyle from '../style';

interface IStartProps {
  navigation: NavigationAppProps;
}
export default ({navigation}: IStartProps): React.ReactElement => {
  const empty = '';
  const [codem, setCodem] = useState(empty);
  const codeUserSelect = useSelector(SelectUserData);
  const setCode = (data: string) => {
    if (codem.length < 4) {
      setCodem(codem + data);
    }
  };
  useEffect(() => {
    if (codem.length === 4 && codem === codeUserSelect.code) {
      navigation.navigate('HomeNavigator');
    }
    if (codem.length === 4 && codem !== codeUserSelect.code) {
      setCodem(empty);
    }
  }, [codeUserSelect.code, codem, navigation]);

  return (
    <View style={SplashStyle.container}>
      <Image
        style={SplashStyle.img}
        source={require('../../../../Assets/img/boxf.jpg')}
      />
      <View style={SplashStyle.CustomContain}>
        <View style={SplashStyle.CustomVisor}>
          <Text>{codem}</Text>
        </View>
        <View style={SplashStyle.CustomPad}>
          <Image
            style={SplashStyle.CustomNumbers}
            source={require('../../../../Assets/img/numPng.png')}
          />
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
