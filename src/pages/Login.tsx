/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Style from '../styles/Style';
import LogoWhite from '../../assets/img/logo-white.png';
import {faCheckCircle, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import bgPurple from '../../assets/img/bg-purple.jpg';
import {useForm} from 'react-hook-form';
import {formatCPF} from '../provider/Helpers';
import ButtonComponent from '../components/ButtonComponent';

function Login({navigation}): JSX.Element {
  const [cpf, setCPF] = useState('');
  const formattedCPF = formatCPF(cpf);
  const {setValue, register, handleSubmit, watch} = useForm();

  useEffect(() => {
    register('cpf');
    register('password');
    register('still_connected');
    register('face_id_login');
  }, [register]);

  return (
      <ScrollView style={[Style.styles.bgPrimary]}>
        {/* Container Logo */}
        <View style={[Style.styles.rowCenter, Style.styles.pt6]}>
          <Image
            style={Style.styles.logoDefault}
            source={LogoWhite}
            resizeMode={'contain'}
          />
          {/* Container Form */}
          <View style={[Style.styles.bgWhite, Style.styles.boxDefault]}>
            <Text
              style={[
                Style.styles.fontBlack,
                Style.styles.fontMedium,
                Style.styles.h4,
                Style.styles.textCenter,
                Style.styles.pt3,
                Style.styles.mb3,
              ]}>
              Login
            </Text>

            <TextInput
              style={Style.styles.inputs}
              placeholder="Seu CPF"
              placeholderTextColor={Style.grayColor}
              keyboardType="numeric"
              value={formattedCPF}
              onChangeText={text => setCPF(text)}
              maxLength={14}
            />

            <TextInput
              style={Style.styles.inputs}
              placeholder="Sua senha"
              placeholderTextColor={Style.grayColor}
              secureTextEntry={true}
            />

            <Pressable
              style={[Style.styles.row, Style.styles.mb3]}
              onPress={() => {
                watch('still_connected')
                  ? setValue('still_connected', false)
                  : setValue('still_connected', true);
              }}>
              {!watch('still_connected') ? (
                <FontAwesomeIcon
                  style={{
                    color: Style.primaryColor,
                    marginEnd: 15,
                  }}
                  icon={faCircle}
                  size={25}
                />
              ) : (
                <FontAwesomeIcon
                  style={{
                    color: Style.primaryColor,
                    marginEnd: 15,
                  }}
                  icon={faCheckCircle}
                  size={25}
                />
              )}
              <Text
                style={[
                  Style.styles.fontRegular,
                  Style.styles.text,
                  Style.styles.fontGray,
                ]}>
                Manter conectado
              </Text>
            </Pressable>

            <Pressable
              style={[Style.styles.row]}
              onPress={() => {
                watch('face_id_login')
                  ? setValue('face_id_login', false)
                  : setValue('face_id_login', true);
              }}>
              {!watch('face_id_login') ? (
                <FontAwesomeIcon
                  style={{
                    color: Style.primaryColor,
                    marginEnd: 15,
                  }}
                  icon={faCircle}
                  size={25}
                />
              ) : (
                <FontAwesomeIcon
                  style={{
                    color: Style.primaryColor,
                    marginEnd: 15,
                  }}
                  icon={faCheckCircle}
                  size={25}
                />
              )}
              <Text
                style={[
                  Style.styles.fontRegular,
                  Style.styles.text,
                  Style.styles.fontGray,
                ]}>
                Fazer login com FaceID
              </Text>
            </Pressable>

            <ButtonComponent
              data={{title: 'Login'}}
              style={Style.styles.mt3}
              onPress={() => navigation.navigate('capture-identification')}
            />

            <Pressable
              style={({pressed}) => [
                pressed && Style.styles.focusedText,
                Style.styles.mt3,
              ]}
              onPress={() => navigation.navigate('forgot-password')}>
              <Text
                style={[
                  Style.styles.textCenter,
                  Style.styles.fontBold,
                  Style.styles.fontGray,
                  Style.styles.underline,
                  Style.styles.mb2,
                  Style.styles.text,
                ]}>
                Esqueci a Senha
              </Text>
            </Pressable>

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.fontGray,
                Style.styles.text,
                Style.styles.mb1,
                Style.styles.textCenter,
              ]}>
              Já tem cartão, mas não tem acesso ao app?
            </Text>

            <Pressable
              style={({pressed}) => [pressed && Style.styles.focusedText]}
              onPress={() => navigation.navigate('register')}>
              <Text
                style={[
                  Style.styles.fontBold,
                  Style.styles.fontPrimary,
                  Style.styles.text,
                  Style.styles.mb2,
                  Style.styles.textCenter,
                ]}>
                Criar sua conta
              </Text>
            </Pressable>

            <ImageBackground
              style={[Style.styles.mb, {height: 130, width: '100%'}]}
              borderRadius={30}
              source={bgPurple}
              resizeMode={'cover'}>
              <Text
                style={[
                  Style.styles.textCenter,
                  Style.styles.fontWhite,
                  Style.styles.text,
                  Style.styles.fontRegular,
                  Style.styles.pt1,
                ]}>
                É cliente novo?
              </Text>

              <Text
                style={[
                  Style.styles.textCenter,
                  Style.styles.fontWhite,
                  Style.styles.fontBold,
                  Style.styles.text,
                ]}>
                Faça seu cadastro agora mesmo!
              </Text>
              <Pressable
                style={({pressed}) => [
                  pressed && Style.styles.focusedButton,
                  styles.buttonBlack,
                  Style.styles.mt1,
                  Style.styles.mb1,
                  {alignSelf: 'center'},
                ]}
                onPress={() => navigation.navigate('register')}>
                <Text
                  style={[
                    Style.styles.fontWhite,
                    Style.styles.fontSemiBold,
                    Style.styles.text,
                    Style.styles.ps2,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  Cadastrar
                </Text>
                <FontAwesomeIcon
                  style={[
                    styles.buttonBlack.icon,
                    {color: Style.secundaryColor},
                  ]}
                  icon={faArrowRight}
                  size={25}
                />
              </Pressable>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonBlack: {
    height: 50,
    width: '70%',
    backgroundColor: Style.blackColor,
    borderRadius: 50,
    position: 'relative',
    paddingTop: 13,
    icon: {
      position: 'absolute',
      right: 40,
      top: 12,
    },
  },
});
export default Login;
