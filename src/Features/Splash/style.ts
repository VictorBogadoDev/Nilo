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
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
    marginHorizontal: 15,
    marginBottom: 100,
  },
  img: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
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

export const zoomOut = {
  0: {
    opacity: 0.5,
    scale: 0,
  },
  0.5: {
    opacity: 0.5,
    scale: 0.3,
  },
  1: {
    opacity: 1,
    scale: 0.8,
  },
};
