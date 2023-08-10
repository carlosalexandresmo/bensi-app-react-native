// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useContext, useEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Style from '../../styles/Style';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {AppContext} from '../../provider/AppProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

function CaptureDocumentsConfirmation({navigation}): JSX.Element {
  HeaderComponent({title: 'Documentos', bgColor: Style.secundaryColor});
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
                Style.styles.textCenter,
                Style.styles.uppercase,
                Style.styles.pt4,
                {fontSize: 23},
              ]}>
              Cadastro de {''}
              <Text style={Style.styles.fontBold}>Documentos</Text>
            </Text>

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.text,
                Style.styles.textCenter,
                Style.styles.pt1,
                Style.styles.mb5,
              ]}>
              Agora é a hora de cadastrar o seu documento. Você pode escolher
              entre RG ou CNH.
              {'\n'}
              {'\n'}
              Se a sua CNH for digital, você também tem a opção de carregar ela.
            </Text>

            <View
              style={[
                {
                  borderWidth: 2,
                  borderColor: Style.grayColor,
                  borderRadius: 20,
                  height: 60,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={[
                  Style.styles.ps1,
                  Style.styles.h6,
                  Style.styles.fontSemiBold,
                  Style.styles.fontBlack,
                ]}>
                Carteira Nacional de Habilitação (CNH){' '}
              </Text>
              <FontAwesomeIcon
                color={Style.confirmationColor}
                icon={faCheck}
                size={25}
              />
            </View>

            <View
              style={[
                Style.styles.rowHorizontal,
                Style.styles.mt4,
                {
                  width: '70%',
                  paddingVertical: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
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
                Documento salvo
              </Text>
            </View>
          </View>

          <View style={[Style.styles.bottom]}>
            <ButtonComponent
              data={{title: 'Continuar'}}
              style={Style.styles.mt4}
              onPress={() =>
                navigation.navigate('capture-rejected', {data: {step: 2}})
              }
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

export default CaptureDocumentsConfirmation;
