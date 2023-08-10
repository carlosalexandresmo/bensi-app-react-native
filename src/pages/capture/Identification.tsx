// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
    Pressable,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Style from '../../styles/Style';
import HeaderComponent from '../../components/HeaderComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {formatBirthdate, formatCPF} from '../../provider/Helpers';
import {useForm} from 'react-hook-form';
function Identification({navigation}): JSX.Element {
  HeaderComponent({title: 'Captação', bgColor: Style.secundaryColor});
  const [cpf, setCPF] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const formattedCPF = formatCPF(cpf);
  const formattedBithdate = formatBirthdate(birthdate);
  const {setValue, register, handleSubmit, watch} = useForm();

  useEffect(() => {
    register('name');
    register('cpf');
    register('sexo');
    register('data_nascimento');
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
            Fale mais sobre você!
          </Text>

          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.text,
              Style.styles.textCenter,
              Style.styles.pt1,
              Style.styles.mb2,
            ]}>
            Preencha os campos abaixo com os seus dados pessoais.
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
            placeholder="Nome"
            placeholderTextColor={Style.grayColor}
            value={watch('name')}
            onChangeText={text => setValue('name', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="CPF"
            placeholderTextColor={Style.grayColor}
            value={formattedCPF}
            keyboardType={'numeric'}
            maxLength={14}
            onChangeText={text => {
              setCPF(text);
              setValue('cpf', text);
            }}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Sexo"
            placeholderTextColor={Style.grayColor}
            value={watch('sexo')}
            onChangeText={text => setValue('sexo', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Data de nascimento"
            placeholderTextColor={Style.grayColor}
            value={formattedBithdate}
            keyboardType={'numeric'}
            maxLength={10}
            onChangeText={text => {
              setBirthdate(text);
              setValue('data_nascimento', text);
            }}
          />

          <ButtonComponent
            data={{title: 'Enviar'}}
            onPress={() => navigation.navigate('capture-contact')}
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
export default Identification;
const styles = StyleSheet.create({});
