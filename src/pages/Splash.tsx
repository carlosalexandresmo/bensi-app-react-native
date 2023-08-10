// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Style from '../styles/Style';
import SplashBG from '../../assets/img/splash.png';

function Splash({navigation}): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 3500);
  }, []);
  return (
    <View style={Style.styles.page}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={SplashBG}
        resizeMode={'cover'}
      />
    </View>
  );
}

export default Splash;
