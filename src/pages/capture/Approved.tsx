// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import Style from '../../styles/Style';
import IconApproved from '../../../assets/img/icons/approved-emoji.png';
import CardFrame from '../../../assets/img/icons/card-frame.png';
import React from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import LogoRed from '../../../assets/img/logo-red.png';

function CaptureApproved({navigation, route}): JSX.Element {
  const {data} = route && route.params ? route.params : {};
  return (
    <ScrollView>
      <View
        style={[
          Style.styles.paddingPage,
          Style.styles.bgWhite,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Image
          source={IconApproved}
          style={[Style.styles.mt8, {width: 120, height: 120}]}
        />
        <Text
          style={[
            Style.styles.fontPrimary,
            Style.styles.fontRegular,
            Style.styles.fontDarkGreen,
            Style.styles.mt3,
            Style.styles.textCenter,
            Style.styles.uppercase,
            {fontSize: 23},
          ]}>
          <Text style={Style.styles.fontBold}>Parabéns! {''}</Text>
          Deu tudo certo com o seu cartão.
        </Text>

        <Text
          style={[
            Style.styles.fontRegular,
            Style.styles.text,
            Style.styles.textCenter,
            Style.styles.mt2,
          ]}>
          Agora você pode aproveitar todas as facilidades do cartão Besni.
        </Text>

        <ImageBackground
          style={[{height: 337, width: '100%'}]}
          source={CardFrame}
          resizeMode={'contain'}>
          <Image
            style={[
              Style.styles.logoXSmall,
              Style.styles.mt8,
              Style.styles.ms2,
            ]}
            source={LogoRed}
            resizeMode={'contain'}
          />
          <Text
            numberOfLines={1}
            style={[
              Style.styles.fontSemiBold,
              Style.styles.text,
              Style.styles.ms2,
              Style.styles.mt2,
            ]}>
            Fernando Leoncio dos Santos
          </Text>
          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.fontGray,
              Style.styles.textCenter,
              Style.styles.mt2,
              {letterSpacing: 1.5, fontSize: 27},
            ]}>
            4560 5674 3224 4543
          </Text>
          <View style={[Style.styles.row, {justifyContent: 'space-around'}]}>
            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.text,
                Style.styles.textStart,
                Style.styles.mt1,
                Style.styles.me2,
              ]}>
              Vencimento {'\n'}
              <Text style={Style.styles.fontBold}>Dia 05</Text>
            </Text>
            <Text
              style={[
                Style.styles.fontRegular,
                Style.styles.text,
                Style.styles.textRight,
                Style.styles.mt1,
                Style.styles.ms2,
              ]}>
              Limite Aprovado {'\n'}
              <Text style={Style.styles.fontBold}>R$ 1.000,00</Text>
            </Text>
          </View>
        </ImageBackground>

        <View style={[Style.styles.mt2, {width: '100%'}]}>
          <ButtonComponent
            data={{title: 'Acessar App'}}
            onPress={() => navigation.navigate('home')}
            style={undefined}
          />
        </View>
      </View>
    </ScrollView>
  );
}
export default CaptureApproved;
