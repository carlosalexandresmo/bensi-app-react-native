// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import Style from '../styles/Style';
import {formatCPF, formatPhoneNumber} from '../provider/Helpers';
import ButtonComponent from '../components/ButtonComponent';

function Register({navigation}): JSX.Element {
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');
  const formattedCPF = formatCPF(cpf);
  const formattedCelular = formatPhoneNumber(celular);
  const {setValue, register, handleSubmit, watch} = useForm();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    register('email');
    register('email_confirm');
    register('name');
    register('cpf');
    register('celular');
    register('password');
    register('password_confirm');
  }, [register]);

  return (
    <SafeAreaView>
      {/*Page*/}
      <ScrollView style={[Style.styles.page, Style.styles.bgPrimary]}>
        {/*Modal termos*/}
        {modalVisible && (
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text
                    style={[
                      Style.styles.h4,
                      Style.styles.textCenter,
                      Style.styles.fontBlack,
                      Style.styles.fontMedium,
                      Style.styles.mb4,
                    ]}>
                    Termos de Uso
                  </Text>
                  <ScrollView style={{height: '90%'}}>
                    <Text
                      style={[
                        Style.styles.text,
                        Style.styles.fontGray,
                        Style.styles.fontRegular,
                      ]}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum viverra justo nec sem tincidunt, nec vulputate
                      sem placerat. Nulla tempus faucibus lectus, nec tempus ex
                      efficitur aliquet. Donec in est at dolor finibus auctor id
                      non odio. Vestibulum at nisl et enim viverra viverra.
                      Vestibulum sollicitudin, est sed porta facilisis, sem sem
                      fermentum ex, ac sollicitudin odio dui eget leo. Nulla sit
                      amet vehicula arcu, at bibendum turpis. Praesent nec
                      auctor magna, sed rutrum diam. Vivamus vel eros eget nisi
                      efficitur porttitor. In porta orci sed placerat suscipit.
                      Ut blandit sollicitudin mauris fermentum lacinia.
                      Vestibulum dapibus blandit metus eu gravida. Sed congue
                      lectus ut sodales egestas. Aliquam varius non erat ut
                      ullamcorper. Sed eleifend dolor et nunc ornare, at
                      placerat nunc volutpat. Nulla pulvinar massa sed sodales
                      volutpat. Sed varius enim sit amet diam ultrices, sit amet
                      suscipit arcu blandit. Vestibulum vel tincidunt ex.
                      Vivamus bibendum in nisi eget aliquet. Quisque non nisl
                      mattis, gravida felis et, pharetra magna. Donec tincidunt
                      leo eu varius pulvinar. Aenean vel porta est. Vestibulum
                      velit ante, ultrices vel purus id, aliquam volutpat nisi.
                      In dignissim dictum pulvinar. Aenean ac turpis cursus,
                      viverra mauris ac, varius diam. Nulla posuere in dui at
                      sagittis. Sed porttitor elementum risus et euismod. Aenean
                      gravida nisl id elit semper, ut aliquet neque vehicula.
                      Pellentesque molestie, sem eget egestas porttitor, ipsum
                      lacus euismod augue, vel bibendum tortor ex sit amet quam.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Phasellus metus
                      justo, convallis non mauris eget, faucibus tincidunt ex.
                      Sed rhoncus lacus ut metus hendrerit eleifend. Morbi sit
                      amet sem ut massa molestie vulputate. Maecenas eget luctus
                      eros, ac ultrices augue. Curabitur enim urna, gravida at
                      dapibus sed, efficitur non justo. Morbi dignissim purus
                      mattis iaculis fermentum. Aenean non tristique orci. Morbi
                      a suscipit quam. Nullam ac ante ac eros faucibus egestas
                      et quis nisl. Morbi bibendum blandit lectus et luctus. Sed
                      quis lacus quis mauris accumsan finibus id tristique eros.
                      Maecenas dignissim felis mauris, vel gravida sapien
                      viverra vel. Nunc aliquet mattis ante, et mattis erat
                      fermentum et. Fusce scelerisque in odio in aliquam. Nullam
                      vestibulum mi in sem auctor iaculis vel eget diam. Etiam
                      bibendum mattis nisl, ac fringilla nunc euismod a. In
                      mattis egestas interdum. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Nunc leo enim, viverra posuere bibendum ut,
                      facilisis id est. Sed lorem tellus, aliquet sit amet
                      tempor ac, pulvinar non dui. Suspendisse egestas auctor
                      ligula, tempor tincidunt orci ullamcorper consequat.
                      Aliquam dapibus id nulla ac molestie. Morbi consequat
                      turpis tortor, quis efficitur lectus congue et. Nullam ac
                      tempus sem. Donec auctor dui efficitur, elementum enim a,
                      commodo arcu. In bibendum consequat elit, et egestas
                      turpis vulputate euismod. Aenean pretium eu magna eu
                      congue. Nunc lobortis turpis suscipit odio ullamcorper
                      efficitur. Mauris nec consectetur nunc, sed posuere
                      lectus. Aliquam vel quam eros. Pellentesque semper ac
                      neque quis pharetra. Nulla sagittis leo felis, at tempor
                      erat scelerisque sit amet.
                    </Text>
                  </ScrollView>
                  <ButtonComponent
                    style={[Style.styles.mt8]}
                    data={{title: 'Aceitar'}}
                    onPress={() => {
                      console.log('Accepted');
                      setModalVisible(false);
                    }}
                  />
                </View>
              </View>
            </Modal>
          </View>
        )}

        {/* Container Logo */}
        <View style={[Style.styles.rowCenter]}>
          <Text
            style={[
              Style.styles.fontWhite,
              Style.styles.fontMedium,
              Style.styles.h4,
              Style.styles.textCenter,
              Style.styles.pt8,
              Style.styles.mb2,
            ]}>
            Cadastre-se
          </Text>

          {/* Container Form */}
          <View
            style={[
              Style.styles.bgWhite,
              Style.styles.boxDefault,
              Style.styles.pt4,
            ]}>
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
              value={watch('confirm_email')}
              keyboardType={'email-address'}
              onChangeText={text => setValue('confirm_email', text)}
            />

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
              placeholder="Celular"
              placeholderTextColor={Style.grayColor}
              value={formattedCelular}
              keyboardType={'numeric'}
              maxLength={15}
              onChangeText={text => {
                setCelular(text);
                setValue('celular', text);
              }}
            />

            <TextInput
              style={Style.styles.inputs}
              placeholder="Sua senha"
              placeholderTextColor={Style.grayColor}
              secureTextEntry={true}
            />

            <TextInput
              style={Style.styles.inputs}
              placeholder="Confirmar senha"
              placeholderTextColor={Style.grayColor}
              secureTextEntry={true}
            />

            <ButtonComponent
              data={{title: 'Cadastrar'}}
              onPress={() => setModalVisible(true)}
            />

            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.fontGray,
                Style.styles.text,
                Style.styles.mt2,
                Style.styles.mb1,
                Style.styles.textCenter,
              ]}>
              Já tem uma conta?
            </Text>

            <Pressable
              style={({pressed}) => [
                pressed && Style.styles.focusedText,
                Style.styles.mb8,
              ]}>
              <Text
                style={[
                  Style.styles.fontBold,
                  Style.styles.fontPrimary,
                  Style.styles.text,
                  Style.styles.textCenter,
                ]}
                onPress={() => navigation.navigate('login')}>
                Faça o login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },

  modalView: {
    width: '90%',
    height: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Register;
