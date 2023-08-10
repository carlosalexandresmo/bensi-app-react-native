// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Style from '../styles/Style';
import InsuranceIconGray from '../../assets/img/icons/insurance-icon.png';
import NegotiationIconGray from '../../assets/img/icons/icon-negotiation-gray.png';
import ResumeIconGray from '../../assets/img/icons/icon-resume-gray.png';
import CardIconGray from '../../assets/img/icons/icon-card-gray.png';
import CogIconGray from '../../assets/img/icons/icon-cog-gray.png';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

function BottomMenuComponent({data}): JSX.Element {
  const navigation = useNavigation();
  const [dataObj, setDataObj] = useState({});

  useEffect(() => {
    setDataObj(data);
  }, []);

  return (
    <>
      {/*Bottom Menu*/}
      <View style={[Style.styles.row, styles.bottomMenu, {bottom: typeof dataObj !== 'undefined' && dataObj.style ? dataObj.style.bottom : 75}]}>
        <Pressable style={[styles.bottomMenu.pressable]}>
          <Image style={styles.bottomMenu.icon} source={InsuranceIconGray} />
          <Text style={styles.bottomMenu.text}>Seguros</Text>
        </Pressable>
        <Pressable style={[styles.bottomMenu.pressable]}>
          <Image style={styles.bottomMenu.icon} source={NegotiationIconGray} />
          <Text style={styles.bottomMenu.text}>Negociações</Text>
        </Pressable>
        <Pressable style={[styles.bottomMenu.pressable]}>
          <Image style={styles.bottomMenu.icon} source={ResumeIconGray} />
          <Text style={[Style.styles.textCenter, styles.bottomMenu.text]}>
            Resumo {'\n'}das faturas
          </Text>
        </Pressable>
        <Pressable
          style={[styles.bottomMenu.pressable]}
          onPress={() => navigation.navigate('user-cards')}>
          <Image style={styles.bottomMenu.icon} source={CardIconGray} />
          <Text style={styles.bottomMenu.text}>Cartões</Text>
        </Pressable>
        <Pressable style={[styles.bottomMenu.pressable]}>
          <Image style={styles.bottomMenu.icon} source={CogIconGray} />
          <Text style={styles.bottomMenu.text}>Opções</Text>
        </Pressable>
      </View>
      {/*End Bottom Menu*/}
    </>
  );
}
const styles = StyleSheet.create({
  bottomMenu: {
    backgroundColor: Style.secundaryColor,
    width: '100%',
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: '#c1c1c1',
    paddingHorizontal: 15,
    paddingTop: 15,
    justifyContent: 'space-between',
    pressable: {
      alignItems: 'center',
    },
    icon: {
      width: 25,
      height: 25,
      objectFit: 'contain',
    },
    text: {
      paddingTop: 5,
    },
  },
});

export default BottomMenuComponent;
