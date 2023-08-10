// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {Image, ScrollView, Text, View} from 'react-native';
import Style from '../../styles/Style';
import IconRejected from '../../../assets/img/icons/rejected-emoji.png';
import React from 'react';
import ButtonComponent from '../../components/ButtonComponent';

function CaptureRejected({navigation, route}): JSX.Element {
  const {data} = route.params ? route.params : {};

  // console.log(data);
  return (
    <ScrollView>
      <View
        style={[
          Style.styles.page,
          Style.styles.bgWhite,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Image source={IconRejected} style={{width: 120, height: 120}} />
        <Text
          style={[
            Style.styles.fontPrimary,
            Style.styles.fontMedium,
            Style.styles.h4,
            Style.styles.mt3,
          ]}>
          Puxa, seu pedido foi recusado.
        </Text>
        {data && data.step === 2 ? (
          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.text,
              Style.styles.paddingPage,
              Style.styles.textCenter,
              Style.styles.mt2,
            ]}>
            No momento não conseguimos liberar o cartão Besni para você. Porém,
            temos um intervalo de três meses para efetuar uma nova análise do
            seu perfil. Tente novamente após este período.
            {'\n\n'}
            Enquanto isso, continue aproveitando todas as novidades das lojas
            físicas e do site.
          </Text>
        ) : (
          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.text,
              Style.styles.paddingPage,
              Style.styles.textCenter,
              Style.styles.mt2,
            ]}>
            No momento não conseguimos liberar o cartão Besni para você.{' '}
            {'\n\n'}
            Mas continue aproveitando todas as novidades das lojas físicas e do
            site.
          </Text>
        )}

        <View
          style={[Style.styles.paddingPage, Style.styles.mt5, {width: '100%'}]}>
          <ButtonComponent
            data={{title: 'Ok, entendi'}}
            onPress={() =>
              data && data.step === 2
                ? navigation.navigate('capture-card-info')
                : navigation.navigate('capture-token-validation')
            }
            style={undefined}
          />
        </View>
      </View>
    </ScrollView>
  );
}
export default CaptureRejected;
