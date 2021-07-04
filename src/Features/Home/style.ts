import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
interface IStartProps {
  container: ViewStyle;
  subContainer: ViewStyle;
  title: TextStyle;
  linearGradient: TextStyle;
  containModal: ViewStyle;
  flexModal: ViewStyle;
}
export const colorsLinear = ['#95D594', '#668742', '#95D594'];
export const HomeStyle = StyleSheet.create<IStartProps>({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
  },
  subContainer: {
    height: hp('100%'),
    width: wp('100%'),
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  linearGradient: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
  },
  containModal: {
    borderRadius: 10,
    width: wp('80%'),
    height: hp('30%'),
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  flexModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
