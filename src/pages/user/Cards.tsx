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
  View,
} from 'react-native';
import Style from '../../styles/Style';
import HeaderComponent from '../../components/HeaderComponent';
import BottomMenuComponent from '../../components/BottomMenuComponent';
import CardComponent from '../../components/CardComponent';
function UserCards({navigation}): JSX.Element {
  HeaderComponent({
    title: 'Cartões',
    bgColor: Style.secundaryColor,
    headerRight: true,
  });

  return (
    <SafeAreaView style={[Style.styles.screenHeight, Style.styles.bgWhite]}>
      <ScrollView style={[Style.styles.mb8]} horizontal={false}>
        <View style={[Style.styles.paddingPage, Style.styles.pt4]}>
          <Text
            style={[
              Style.styles.fontMedium,
              Style.styles.fontBlack,
              Style.styles.textStart,
              Style.styles.uppercase,
              {fontSize: 23},
            ]}>
            Seus {''}
            <Text style={Style.styles.fontBold}>Cartões</Text>
          </Text>

          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.text,
              Style.styles.textStart,
              Style.styles.pt1,
              Style.styles.mb2,
            ]}>
            Aqui você encontra todas as informações sobre os seus cartões
            cadastrados.
          </Text>
        </View>
        <View style={[Style.styles.paddingPageSm]}>
          {/*Card contaienr*/}
          <CardComponent data={[{title: 'teste1'}, {title: 'teste2'}]} />
          <CardComponent data={[{title: 'teste1'}, {title: 'teste2'}]} />
          {/*End Card contaienr*/}
        </View>
        <View style={[Style.styles.bgWhite]} />
      </ScrollView>
      {/*Bottom Menu*/}
      <BottomMenuComponent data={{style: {bottom: 130}}} />
      {/*End Bottom Menu*/}
    </SafeAreaView>
  );
}
export default UserCards;
const styles = StyleSheet.create({});
