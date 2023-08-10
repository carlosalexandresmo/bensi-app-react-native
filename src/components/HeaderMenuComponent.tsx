// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import Style from '../styles/Style';
import UserPlaceholder from '../../assets/img/icons/user-placeholder.png';
import CloseIcon from '../../assets/img/icons/close-red-icon.png';
import LogoutIcon from '../../assets/img/icons/logout-icon.png';
import IconMenu from '../../assets/img/icons/icon-menu.png';
import IconHome from '../../assets/img/icons/home-icon.png';
import IconCard from '../../assets/img/icons/card-icon.png';
import IconBill from '../../assets/img/icons/bill-icon.png';
import IconNegotiation from '../../assets/img/icons/icon-negotiation.png';
import IconUser from '../../assets/img/icons/user-icon.png';
import IconTax from '../../assets/img/icons/icon-tax.png';
import IconChat from '../../assets/img/icons/icon-chat.png';
import IconFaq from '../../assets/img/icons/icon-faq.png';
import IconSecurity from '../../assets/img/icons/icon-security.png';
import IconInfo from '../../assets/img/icons/icon-info.png';
import React, {useState} from 'react';

function HeaderMenuComponent(): JSX.Element {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const goTo = route => {
    navigation.navigate(route);
    setModalVisible(false);
  };

  return (
    <View>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={[
                  Style.styles.row,
                  Style.styles.pt3,
                  Style.styles.w100,
                  {
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  },
                ]}>
                <Image
                  source={UserPlaceholder}
                  style={{width: 50, height: 50}}
                />
                <Text style={[Style.styles.text, {marginStart: -25}]}>
                  Bem-vindo de volta, {'\n'}
                  <Text
                    numberOfLines={1}
                    lineBreakMode={'tail'}
                    style={[
                      Style.styles.fontBold,
                      Style.styles.h5,
                      Style.styles.fontBlack,
                    ]}>
                    Attri Desenvolvimento
                  </Text>
                </Text>
                <Pressable
                  style={({pressed}) => [pressed && Style.styles.focusedText]}
                  onPress={() => setModalVisible(false)}>
                  <Image source={CloseIcon} style={{width: 25, height: 25}} />
                </Pressable>
              </View>

              <View
                nativeID={'menu-list'}
                style={[Style.styles.mt3, Style.styles.ps3]}>
                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={LogoutIcon} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontPrimary,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Sair do app
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconHome} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Início
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('user-cards')}>
                  <Image style={[styles.iconMenu]} source={IconCard} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Cartões
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconBill} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Faturas
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconNegotiation} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Negociações
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconUser} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Meus dados
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconTax} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Encargos, tarifas e taxas
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconChat} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Fale conosco
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconFaq} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Dúvidas frequentes
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconSecurity} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Segurança
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    pressed && Style.styles.focusedText,
                    Style.styles.row,
                    Style.styles.textStart,
                    Style.styles.mb4,
                    {alignItems: 'center'},
                  ]}
                  onPress={() => goTo('home')}>
                  <Image style={[styles.iconMenu]} source={IconInfo} />
                  <Text
                    style={[
                      Style.styles.ps2,
                      Style.styles.fontMedium,
                      Style.styles.fontGray,
                      Style.styles.text,
                      {paddingTop: 3},
                    ]}>
                    Sobre
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View
        nativeID={'header-menu'}
        style={[
          Style.styles.row,
          Style.styles.pt3,
          {justifyContent: 'space-around', alignItems: 'center'},
        ]}>
        <Image source={UserPlaceholder} style={{width: 50, height: 50}} />
        <Text style={[Style.styles.text, {marginStart: -25}]}>
          Bem-vindo de volta, {'\n'}
          <Text
            numberOfLines={1}
            lineBreakMode={'tail'}
            style={[
              Style.styles.fontBold,
              Style.styles.h5,
              Style.styles.fontBlack,
            ]}>
            Attri Desenvolvimento
          </Text>
        </Text>
        <Pressable
          style={({pressed}) => [pressed && Style.styles.focusedText]}
          onPress={() => setModalVisible(true)}>
          <Image source={IconMenu} style={{width: 30, height: 25}} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
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
  iconMenu: {
    width: 25,
    height: 25,
    objectFit: 'contain',
  },
});

export default HeaderMenuComponent;
