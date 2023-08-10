// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
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

function UpdatePassword({navigation}): JSX.Element {
  const {setValue, register, handleSubmit, watch} = useForm();
  useEffect(() => {
    register('password');
    register('password_confirm');
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
              {paddingTop: 140},
            ]}>
            <Text
              style={[
                Style.styles.fontMedium,
                Style.styles.fontPrimary,
                Style.styles.h4,
                Style.styles.textCenter,
              ]}>
              Cadastrar nova senha
            </Text>

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.text,
                Style.styles.textCenter,
                Style.styles.pt1,
                Style.styles.mb3,
              ]}>
              Crie uma senha nova para ter acesso ao App
            </Text>

            <TextInput
              style={Style.styles.inputs}
              placeholder="Nova senha"
              placeholderTextColor={Style.grayColor}
              onChangeText={text => setValue('password', text)}
              secureTextEntry={true}
            />

            <TextInput
              style={Style.styles.inputs}
              placeholder="Repetir senha"
              placeholderTextColor={Style.grayColor}
              onChangeText={text => setValue('password_confirm', text)}
              secureTextEntry={true}
            />

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.fontPrimary,
                Style.styles.text,
                Style.styles.mb4,
              ]}>
              A senha pode conter qualquer combinação de letras, números e
              símbolos.
            </Text>

            <ButtonComponent
              data={{title: 'Enviar'}}
              onPress={() => navigation.navigate('login')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default UpdatePassword;
