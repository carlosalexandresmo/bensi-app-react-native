// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useContext, useEffect} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Style from '../../styles/Style';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {AppContext} from '../../provider/AppProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck, faCheck} from '@fortawesome/free-solid-svg-icons';

function CaptureSelfieConfirmation({navigation}): JSX.Element {
  HeaderComponent({title: 'Autenticação', bgColor: Style.secundaryColor});
  const [user, setUser]: any = useContext(AppContext);
  useEffect(() => {
    console.log(user.lastCapture);
  }, []);

  return (
    <SafeAreaView>
      {/*Page*/}
      <ScrollView
        style={[
          Style.styles.page,
          Style.styles.bgWhite,
          Style.styles.paddingPage,
        ]}>
        {/* Container Logo */}
        <View style={[Style.styles.screenHeight]}>
          {/* Container Form */}
          <View>
            <Text
              style={[
                Style.styles.fontMedium,
                Style.styles.fontBlack,
                Style.styles.h4,
                Style.styles.textCenter,
                Style.styles.uppercase,
                Style.styles.pt4,
              ]}>
              Cadastrar {''}
              <Text style={Style.styles.fontBold}>Foto</Text>
            </Text>

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.text,
                Style.styles.textCenter,
                Style.styles.pt1,
                Style.styles.mb5,
              ]}>
              Lorem ipsum dolor sit amet, consetur adipiscing elit. Sed id metus
              in tortor efficitur ultricies.
            </Text>

            <View style={{alignItems: 'center'}}>
              <FontAwesomeIcon
                style={{
                  position: 'absolute',
                  zIndex: 100,
                  backgroundColor: Style.secundaryColor,
                  borderRadius: 50,
                  right: 50,
                  top: -10,
                }}
                color={Style.confirmationColor}
                icon={faCircleCheck}
                size={65}
              />
              <Image
                style={{width: 250, height: 250, borderRadius: 220}}
                source={{uri: `file://${user.lastCapture.path}`}}
                resizeMode={'cover'}
              />

              <View
                style={[
                  Style.styles.rowHorizontal,
                  Style.styles.mt3,
                  {
                    width: '70%',
                    paddingVertical: 10,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(50, 173, 97, .1)',
                    borderRadius: 25,
                  },
                ]}>
                <FontAwesomeIcon
                  color={Style.confirmationColor}
                  icon={faCheck}
                  size={25}
                />
                <Text
                  style={[
                    Style.styles.fontBold,
                    Style.styles.text,
                    Style.styles.fontDarkGreen,
                    Style.styles.ps1,
                  ]}>
                  Selfie Capturada
                </Text>
              </View>
            </View>
          </View>
          <View style={[Style.styles.bottom]}>
            <ButtonComponent
              data={{title: 'Continuar'}}
              style={Style.styles.mt4}
              onPress={() => navigation.navigate('capture-documents')}
            />

            <Pressable
              style={({pressed}) => [pressed && Style.styles.focusedText]}
              onPress={() => navigation.navigate('capture-camera')}>
              <Text
                style={[
                  Style.styles.fontBold,
                  Style.styles.fontGray,
                  Style.styles.text,
                  Style.styles.textCenter,
                  Style.styles.pt2,
                  Style.styles.underline,
                ]}>
                Tirar nova selfie
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CaptureSelfieConfirmation;
