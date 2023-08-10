// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Style from '../../styles/Style';
import ButtonComponent from '../../components/ButtonComponent';
import FrameSelfie from '../../../assets/img/frame-selfie.png';
import IdeaIcon from '../../../assets/img/icons/idea-icon.png';
import CapIcon from '../../../assets/img/icons/cap-icon.png';
import HeaderComponent from '../../components/HeaderComponent';

function CaptureSelfie({navigation}): JSX.Element {
  HeaderComponent({title: 'Autenticação', bgColor: Style.secundaryColor});

  useEffect(() => {
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
        <View style={[Style.styles.rowCenter]}>
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
              Agora é a hora da {''}
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
              Para confirmar o seu cadastro e aumentar a segurança, precisamos
              da sua selfie.
            </Text>

            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 130, height: 235}}
                source={FrameSelfie}
                resizeMethod={'auto'}
              />
            </View>

            <ButtonComponent
              data={{title: 'Tirar Selfie'}}
              style={Style.styles.mt4}
              onPress={() => navigation.navigate('capture-camera')}
            />

            <Pressable
              style={({pressed}) => [pressed && Style.styles.focusedText]}
              onPress={() => navigation.navigate('login')}>
              <Text
                style={[
                  Style.styles.fontBold,
                  Style.styles.fontGray,
                  Style.styles.text,
                  Style.styles.textCenter,
                  Style.styles.pt2,
                  Style.styles.underline,
                ]}>
                Cancelar cadastro
              </Text>
            </Pressable>

            <View style={[styles.tipsContainer, Style.styles.mt3]}>
              <View
                style={[Style.styles.rowHorizontal, styles.tipsContainer.row]}>
                <Image style={[styles.tipsContainer.icon]} source={IdeaIcon} />
                <Text
                  style={[
                    Style.styles.text,
                    Style.styles.fontRegular,
                    {width: '80%'},
                  ]}>
                  Procure tirar a foto em um ambiente bem iluminado
                </Text>
              </View>
              <View
                style={[Style.styles.rowHorizontal, styles.tipsContainer.row]}>
                <Image
                  style={[styles.tipsContainer.iconWide]}
                  source={CapIcon}
                />
                <Text
                  style={[
                    Style.styles.text,
                    Style.styles.fontRegular,
                    {width: '80%'},
                  ]}>
                  Evite usar boné, óculos ou acessórios que cubram o rosto.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tipsContainer: {
    width: '100%',
    backgroundColor: 'rgba(204, 45, 44, .1)',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 25,
    icon: {
      width: 35,
      height: 35,
      marginEnd: 15,
    },
    iconWide: {
      width: 39,
      height: 35,
      marginEnd: 15,
    },
    row: {
      paddingVertical: 15,
    },
  },
});

export default CaptureSelfie;
