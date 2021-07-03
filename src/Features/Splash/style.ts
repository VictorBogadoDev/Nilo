import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface IContent {
  container: ViewStyle;
  text: TextStyle;
  img: ImageStyle;

  CustomContain: ViewStyle;
  CustomVisor: ViewStyle;
  CustomPad: ViewStyle;
  CustomNumbers: ImageStyle;
  CustomTouch: ViewStyle;
  CustomBar: ViewStyle;
  CustomBarContain: ViewStyle;
}

export const SplashStyle = StyleSheet.create<IContent>({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'white',
  },
  img: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
    opacity: 0.5,
  },
  CustomContain: {
    height: hp('80%'),
    width: wp('90%'),
  },
  CustomVisor: {
    height: hp('15%'),
    width: wp('60%'),
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  CustomPad: {
    height: hp('60%'),
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  CustomNumbers: {
    height: hp('60%'),
    width: wp('90%'),
    position: 'absolute',
  },
  CustomTouch: {
    width: wp('28%'),
    height: hp('14%'),
    borderRadius: 100,
  },
  CustomBar: {
    flexDirection: 'row',
  },
  CustomBarContain: {
    marginBottom: -40,
    marginLeft: 25,
    height: hp('60%'),
  },
});

export default SplashStyle;
