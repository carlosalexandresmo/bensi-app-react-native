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
import {useForm} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
function CaptureCardInfo({navigation}): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  HeaderComponent({title: 'Configurar Cartão', bgColor: Style.secundaryColor});
  const {setValue, register, handleSubmit, watch} = useForm();

  useEffect(() => {
    register('card_name');
    register('card_invoice_day');
    register('card_passowrd');
    register('card_password_confirm');
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={[Style.styles.bgWhite, Style.styles.page]}>
        <View style={[Style.styles.paddingPage, Style.styles.pt6]}>
          <Text
            style={[
              Style.styles.fontMedium,
              Style.styles.fontBlack,
              Style.styles.textCenter,
              Style.styles.uppercase,
              {fontSize: 23},
            ]}>
            Configure {''}
            <Text style={Style.styles.fontBold}>Seu Cartão</Text>
          </Text>

          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.text,
              Style.styles.textCenter,
              Style.styles.pt1,
              Style.styles.mb2,
            ]}>
            Precisamos de algumas informações para criar o seu cartão. Preencha
            os campos abaixo.
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
            placeholder="Nome do cartão"
            placeholderTextColor={Style.grayColor}
            value={watch('card_name')}
            onChangeText={text => setValue('card_name', text)}
          />
          <View
            style={[
              Style.styles.mb2,
              {
                borderWidth: 2,
                borderColor: Style.grayColor,
                borderRadius: 20,
              },
            ]}>
            <Picker
              mode={'dialog'}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={[{height: 60, fontFamily: 'Jost-SemiBold'}]}
              itemStyle={[{fontFamily: 'Jost-SemiBold', fontWeight: 'bold'}]}>
              <Picker.Item label="Dia de vencimento" value={null} />
              <Picker.Item label="05" value="05" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="28" value="28" />
            </Picker>
          </View>
          <TextInput
            style={Style.styles.inputs}
            placeholder="Senha"
            placeholderTextColor={Style.grayColor}
            value={watch('card_password')}
            secureTextEntry={true}
            onChangeText={text => setValue('card_password', text)}
          />

          <TextInput
            style={Style.styles.inputs}
            placeholder="Confirme a senha"
            placeholderTextColor={Style.grayColor}
            value={watch('card_password_confirm')}
            secureTextEntry={true}
            onChangeText={text => setValue('card_password_confirm', text)}
          />

          <ButtonComponent
            data={{title: 'Enviar'}}
            onPress={() => navigation.navigate('capture-approved')}
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
export default CaptureCardInfo;
const styles = StyleSheet.create({});
