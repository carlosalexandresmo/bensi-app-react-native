// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import Style from '../styles/Style';
import QrcodeIcon from '../../assets/img/icons/icon-qrcode.png';
import React from 'react';

function PayWithQrComponent(): JSX.Element {
  return (
    <>
      {/*Pay With Qrcode*/}
      <Pressable
        style={({pressed}) => [
          Style.styles.row,
          styles.qrContainer,
          pressed && Style.styles.focusedButton,
        ]}>
        <Image style={styles.qrContainer.icon} source={QrcodeIcon} />
        <Text
          style={[
            Style.styles.fontSemiBold,
            Style.styles.fontBlack,
            Style.styles.h5,
          ]}>
          Pagar com QR nas lojas
        </Text>
      </Pressable>
      {/*EndPay With Qrcode*/}
    </>
  );
}
const styles = StyleSheet.create({
  qrContainer: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(201, 201, 201, 0.1)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 15,
    icon: {
      width: 25,
      height: 25,
      objectFit: 'contain',
      marginEnd: 20,
    },
  },
});
export default PayWithQrComponent;
