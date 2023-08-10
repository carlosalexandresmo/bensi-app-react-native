// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useRef} from 'react';
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
import Style from '../../styles/Style';
import ButtonComponent from '../../components/ButtonComponent';
import RotationLeft from '../../../assets/img/icons/rotation-left.png';
import HeaderComponent from '../../components/HeaderComponent';

function CaptureTokenValidation({navigation}): JSX.Element {
  HeaderComponent({title: 'Validar token', bgColor: Style.secundaryColor});
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
      <View
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
                Style.styles.pt6,
              ]}>
              Código de {''}
              <Text style={Style.styles.fontBold}>Validação</Text>
            </Text>

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.text,
                Style.styles.textCenter,
                Style.styles.pt1,
                Style.styles.mb5,
              ]}>
              Enviamos um código ao seu e-mail. Digite ele aqui para
              continuarmos.
            </Text>

            <View
              style={[Style.styles.row, Style.styles.mb2, Style.styles.mt5]}>
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
              <Text
                style={[
                  Style.styles.fontRegular,
                  Style.styles.text,
                  Style.styles.textCenter,
                  Style.styles.pt2,
                ]}>
                Enviamos um código ao seu e-mail. Digite ele aqui para
                continuarmos.
              </Text>
            </View>

            <Pressable
              style={({pressed}) => [pressed && Style.styles.focusedText]}
              onPress={() => navigation.navigate('register')}>
              <Text
                style={[
                  Style.styles.fontBold,
                  Style.styles.fontGray,
                  Style.styles.text,
                  Style.styles.textCenter,
                ]}>
                <Image style={{width: 25, height: 25}} source={RotationLeft} />{' '}
                <Text>Reenviar código</Text>
              </Text>
            </Pressable>

            <ButtonComponent
              data={{title: 'Enviar'}}
              style={Style.styles.mt8}
              onPress={() => navigation.navigate('capture-selfie')}
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
                  Style.styles.pt3,
                  Style.styles.underline,
                ]}>
                Cancelar cadastro
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

export default CaptureTokenValidation;
