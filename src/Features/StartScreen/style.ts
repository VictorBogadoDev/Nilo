import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
interface IStartProps {
  container: ViewStyle;
  containerTitulo: ViewStyle;
  titulo: TextStyle;
  containerImg: ViewStyle;
  label: TextStyle;
  error: TextStyle;
  containerButton: ViewStyle;
  button: TextStyle;
  buttonLog: TextStyle;
  titleButton: TextStyle;
}
export const colorsLinear = ['#337E32', '#4FDB4C', '#95D594'];
export const StartStyle = StyleSheet.create<IStartProps>({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
  },
  containerTitulo: {
    height: hp('23%'),
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImg: {
    height: hp('20%'),
    width: wp('100%'),
  },
  label: {
    color: 'white',
  },
  error: {
    fontSize: 15,
    color: '#F78686',
    fontWeight: '400',
  },
  containerButton: {
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonLog: {
    borderRadius: 100,
    width: wp('63%'),
    height: hp('7%'),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButton: {
    fontSize: 33,
    fontWeight: '800',
    color: 'white',
  },
});
