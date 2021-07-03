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
  containerButton: ViewStyle;
  button: TextStyle;
}
export const StartStyle = StyleSheet.create<IStartProps>({
  container: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 25,
  },
  containerTitulo: {
    height: hp('20%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImg: {
    height: hp('50%'),
    width: wp('100%'),
  },
  containerButton: {
    alignItems: 'center',
  },
  button: {
    height: hp('10%'),
    width: wp('80%'),
    backgroundColor: 'black',
    borderRadius: 40,
  },
});
