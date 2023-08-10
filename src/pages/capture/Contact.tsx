// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Style from '../../styles/Style';
import HeaderComponent from '../../components/HeaderComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {
    formatPhoneNumber, formatTelNumber,
} from '../../provider/Helpers';
import {useForm} from 'react-hook-form';
function Contact({navigation}): JSX.Element {
  HeaderComponent({title: '', bgColor: Style.secundaryColor});
  const [cel, setCel] = useState('');
  const [tel, setTel] = useState('');
  const formattedCel = formatPhoneNumber(cel);
  const formattedTel = formatTelNumber(tel);
  const {setValue, register, handleSubmit, watch} = useForm();

  useEffect(() => {
    register('celular');
    register('telefone');
    register('email');
    register('email_confirm');
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={[Style.styles.bgWhite, Style.styles.page]}>
        <View style={[Style.styles.paddingPage, Style.styles.pt6]}>
          <Text
            style={[
              Style.styles.fontMedium,
              Style.styles.fontPrimary,
              Style.styles.h4,
              Style.styles.textCenter,
            ]}>
            Dados de contato
          </Text>

          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.text,
              Style.styles.textCenter,
              Style.styles.pt1,
              Style.styles.mb2,
            ]}>
            Lorem ipsum dolor sit amet, consetur adipiscing elit. Mauris
            efficitur faucibus malesuada.
          </Text>
        </View>
        <View
          style={[
            Style.styles.bgWhite,
            Style.styles.boxDefault,
            Style.styles.pt4,
          ]}>
          <TextInput
            style={Style.styles.inputs}
            placeholder="DDD + Celular"
            placeholderTextColor={Style.grayColor}
            value={formattedCel}
            keyboardType={'numeric'}
            maxLength={15}
            onChangeText={text => {
              setCel(text);
              setValue('celular', text);
            }}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Telefone residencial"
            placeholderTextColor={Style.grayColor}
            value={formattedTel}
            keyboardType={'numeric'}
            maxLength={14}
            onChangeText={text => {
              setTel(text);
              setValue('telefone', text);
            }}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="E-mail"
            placeholderTextColor={Style.grayColor}
            value={watch('email')}
            keyboardType={'email-address'}
            onChangeText={text => setValue('email', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Confirme seu e-mail"
            placeholderTextColor={Style.grayColor}
            value={watch('email_confirm')}
            keyboardType={'email-address'}
            onChangeText={text => setValue('email_confirm', text)}
          />

          <ButtonComponent
            data={{title: 'Enviar'}}
            onPress={() => navigation.navigate('capture-address')}
            style={Style.styles.mt4}
          />

          <Pressable
            style={({pressed}) => [
              pressed && Style.styles.focusedText,
              Style.styles.mb8,
            ]}>
            <Text
              style={[
                Style.styles.fontBold,
                Style.styles.fontGray,
                Style.styles.text,
                Style.styles.textCenter,
                Style.styles.mt3,
                Style.styles.underline,
              ]}
              onPress={() => navigation.navigate('login')}>
              Cancelar Cadastro
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Contact;
const styles = StyleSheet.create({});
