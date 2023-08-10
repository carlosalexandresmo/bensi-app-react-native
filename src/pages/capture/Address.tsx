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
import {formatCEP} from '../../provider/Helpers';
import {useForm} from 'react-hook-form';
function Address({navigation}): JSX.Element {
  HeaderComponent({title: 'Captação', bgColor: Style.secundaryColor});
  const [cep, setCep] = useState('');
  const formattedCep = formatCEP(cep);
  const {setValue, register, handleSubmit, watch, reset} = useForm();

  useEffect(() => {
    register('cep');
    register('endereco');
    register('numero');
    register('complemento');
    register('bairro');
    register('cidade');
    register('uf');
  }, []);

  const searchCep = cep => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setValue('endereco', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('uf', data.uf);
      })
      .catch(error => {
        console.error('Error:', error);
        reset();
      });
  };

  return (
    <SafeAreaView>
      <ScrollView style={[Style.styles.bgWhite, Style.styles.page]}>
        <View style={[Style.styles.paddingPage, Style.styles.pt1]}>
          <Text
            style={[
              Style.styles.fontMedium,
              Style.styles.fontPrimary,
              Style.styles.h4,
              Style.styles.textCenter,
            ]}>
            Seu endereço
          </Text>

          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.text,
              Style.styles.textCenter,
              Style.styles.pt1,
            ]}>
            Onde você mora? Preencha os dados abaixo.
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
            placeholder="CEP"
            placeholderTextColor={Style.grayColor}
            value={formattedCep}
            keyboardType={'numeric'}
            maxLength={9}
            onChangeText={text => {
              setCep(text);
              setValue('cep', text);
            }}
            onSubmitEditing={() => {
              searchCep(cep);
            }}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Endereço"
            placeholderTextColor={Style.grayColor}
            value={watch('endereco')}
            onChangeText={text => setValue('endereco', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Número"
            placeholderTextColor={Style.grayColor}
            keyboardType={'numeric'}
            value={watch('numero')}
            onChangeText={text => setValue('numero', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Complemento"
            placeholderTextColor={Style.grayColor}
            value={watch('complemento')}
            onChangeText={text => setValue('complemento', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Bairro"
            placeholderTextColor={Style.grayColor}
            value={watch('bairro')}
            onChangeText={text => setValue('bairro', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Cidade"
            placeholderTextColor={Style.grayColor}
            value={watch('cidade')}
            onChangeText={text => setValue('cidade', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Estado"
            placeholderTextColor={Style.grayColor}
            value={watch('uf')}
            onChangeText={text => setValue('uf', text)}
          />

          <ButtonComponent
            data={{title: 'Enviar'}}
            onPress={() => navigation.navigate('capture-rejected')}
            style={Style.styles.mt1}
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
export default Address;
const styles = StyleSheet.create({});
