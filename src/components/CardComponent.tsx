// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  Clipboard,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Style from '../styles/Style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import IconClipboard from '../../assets/img/icons/icon-copy.png';
import React, {useState} from 'react';

function CardComponent(data): JSX.Element {
  const [copied, setCopied] = useState(false);
  const toClipboard = str => {
    Clipboard.setString(str);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const renderCard = ({item, index}) => {
    return (
      <>
        {/*Card Container*/}
        <View style={styles.card}>
          {/*Line View*/}
          <View style={[Style.styles.row, styles.card.line]}>
            <Text
              style={[
                Style.styles.text,
                Style.styles.fontWhite,
                Style.styles.fontBold,
                Style.styles.ps2,
              ]}>
              Nome do cartão
            </Text>
            <View style={[styles.card.pill, Style.styles.row]}>
              <FontAwesomeIcon
                color={Style.confirmationColor}
                icon={faCircleCheck}
                size={15}
              />
              <Text
                style={[
                  Style.styles.text,
                  Style.styles.fontSemiBold,
                  Style.styles.fontBlack,
                ]}>
                {''} ativo
              </Text>
            </View>
          </View>
          {/*End Line View*/}

          {/*Number View*/}
          <View
            style={[Style.styles.row, styles.card.number, Style.styles.mt1]}>
            <Text
              style={[
                Style.styles.fontBold,
                Style.styles.fontWhite,
                Style.styles.h5,
                {letterSpacing: 3},
              ]}>
              4132 4132 7452 1812
            </Text>
            <Pressable
              onPress={() => {
                toClipboard('4132 4132 7452 1812');
                setCopied(true);
              }}>
              {!copied ? (
                <Image
                  style={[{width: 25, height: 25}, Style.styles.ms4]}
                  source={IconClipboard}
                />
              ) : (
                <FontAwesomeIcon
                  style={Style.styles.ms4}
                  color={Style.secundaryColor}
                  icon={faCircleCheck}
                  size={25}
                />
              )}
            </Pressable>
          </View>
          {/*End Number View*/}

          {/*Dates View*/}
          <View
            style={[
              Style.styles.row,
              Style.styles.mt2,
              {justifyContent: 'space-between', alignItems: 'center'},
            ]}>
            {/*Vencimento*/}
            <View style={styles.card.vencimento}>
              <Text
                style={[
                  Style.styles.text,
                  Style.styles.fontRegular,
                  Style.styles.fontWhite,
                  Style.styles.ps2,
                ]}>
                Próximo{'\n'}Vencimento {'\n'}
                <Text style={[Style.styles.fontBold]}>06/09</Text>
              </Text>
            </View>
            {/*End Vencimento*/}
            {/*Best date*/}
            <View>
              <Text
                style={[
                  Style.styles.text,
                  Style.styles.fontRegular,
                  Style.styles.fontWhite,
                  Style.styles.pe2,
                ]}>
                Melhor data{'\n'}de compra {'\n'}
                <Text style={[Style.styles.fontBold]}>01/09</Text>
              </Text>
            </View>
            {/*End Best date*/}
          </View>
          {/*End Dates View*/}
        </View>
        {/*End Card Container*/}
      </>
    );
  };

  return renderCard({});
}
const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 240,
    backgroundColor: '#D24848',
    borderRadius: 15,
    marginBottom: 40,
    line: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      width: '95%',
      backgroundColor: '#DF0807',
      justifyContent: 'space-between',
      marginTop: 15,
      marginEnd: 1,
      height: 60,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
    },
    pill: {
      backgroundColor: Style.secundaryColor,
      paddingHorizontal: 20,
      paddingVertical: 5,
      alignItems: 'center',
      marginTop: 30,
      marginEnd: 20,
      borderRadius: 20,
    },
    vencimento: {
      width: '50%',
      backgroundColor: '#DF0807',
      paddingVertical: 2,
      alignItems: 'flex-start',
      marginTop: 30,
      marginStart: 3,
      borderTopRightRadius: 35,
      borderBottomRightRadius: 35,
    },
    number: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      width: '95%',
    },
  },
});
export default CardComponent;
