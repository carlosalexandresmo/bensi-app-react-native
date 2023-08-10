// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import Style from '../styles/Style';
import ButtonComponent from '../components/ButtonComponent';
import LogoWhite from '../../assets/img/logo-white.png';

function ForgotPassword({navigation}): JSX.Element {
  const {setValue, register, handleSubmit, watch} = useForm();
  const code1Ref = useRef();
  const code2Ref = useRef();
  const code3Ref = useRef();
  const code4Ref = useRef();
  const code5Ref = useRef();
  useEffect(() => {
    register('code_1');
    register('code_2');
    register('code_3');
    register('code_4');
    register('code_5');
  }, [register]);

  return (
    <SafeAreaView>
      {/*Page*/}
      <View style={[Style.styles.page, Style.styles.bgPrimary]}>
        {/* Container Logo */}
        <View style={[Style.styles.rowCenter, Style.styles.pt6]}>
          <Image
            style={Style.styles.logoSmall}
            source={LogoWhite}
            resizeMode={'contain'}
          />
          {/* Container Form */}
          <View
            style={[
              Style.styles.bgWhite,
              Style.styles.boxDefault,
              {paddingTop: 160},
            ]}>
            <Text
              style={[
                Style.styles.fontMedium,
                Style.styles.fontPrimary,
                Style.styles.h4,
                Style.styles.textCenter,
              ]}>
              Recuperação de Senha
            </Text>

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.text,
                Style.styles.textCenter,
                Style.styles.pt2,
                Style.styles.mb5,
              ]}>
              Preencha com o código enviado via SMS no celular ****9999.
            </Text>

            <View style={[Style.styles.row, Style.styles.mb4]}>
              <TextInput
                ref={code1Ref}
                style={styles.input}
                placeholderTextColor={Style.grayColor}
                value={watch('code_1')}
                keyboardType={'numeric'}
                maxLength={1}
                onChangeText={text => {
                  setValue('code_1', text);
                  code2Ref.current.focus();
                }}
              />
              <TextInput
                ref={code2Ref}
                style={styles.input}
                placeholderTextColor={Style.grayColor}
                value={watch('code_2')}
                keyboardType={'numeric'}
                maxLength={1}
                onChangeText={text => {
                  setValue('code_2', text);
                  code3Ref.current.focus();
                }}
              />
              <TextInput
                ref={code3Ref}
                style={styles.input}
                placeholderTextColor={Style.grayColor}
                value={watch('code_3')}
                keyboardType={'numeric'}
                maxLength={1}
                onChangeText={text => {
                  setValue('code_3', text);
                  code4Ref.current.focus();
                }}
              />
              <TextInput
                ref={code4Ref}
                style={styles.input}
                placeholderTextColor={Style.grayColor}
                value={watch('code_4')}
                keyboardType={'numeric'}
                maxLength={1}
                onChangeText={text => {
                  setValue('code_4', text);
                  code5Ref.current.focus();
                }}
              />
              <TextInput
                ref={code5Ref}
                style={styles.input}
                placeholderTextColor={Style.grayColor}
                value={watch('code_5')}
                keyboardType={'numeric'}
                maxLength={1}
                onChangeText={text => setValue('code_5', text)}
              />
            </View>

            <ButtonComponent
              data={{title: 'Enviar'}}
              onPress={() => navigation.navigate('update-password')}
            />

            <Pressable
              style={({pressed}) => [pressed && Style.styles.focusedText]}
              onPress={() => navigation.navigate('register')}>
              <Text
                style={[
                  Style.styles.fontBold,
                  Style.styles.fontGray,
                  Style.styles.text,
                  Style.styles.textCenter,
                  Style.styles.pt3,
                  Style.styles.underline,
                ]}>
                Enviar SMS novamente
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: Style.primaryColor,
    width: 58,
    borderRadius: 10,
    height: 75,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 30,
  },
});

export default ForgotPassword;
