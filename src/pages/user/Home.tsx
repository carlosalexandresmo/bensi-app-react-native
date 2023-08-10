// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Style from '../../styles/Style';
import HeaderMenuComponent from '../../components/HeaderMenuComponent';
import CardComponent from '../../components/CardComponent';
import BillYellowIcon from '../../../assets/img/icons/icon-bill-yellow.png';
import InvoiceBlueIcon from '../../../assets/img/icons/icon-invoice-blue.png';
import InvoicePurpleIcon from '../../../assets/img/icons/icon-invoice-purple.png';
import InvoiceRedIcon from '../../../assets/img/icons/icon-invoice-red.png';
import InvoiceGrayIcon from '../../../assets/img/icons/icon-invoice-gray.png';
import CreditLimitIcon from '../../../assets/img/icons/icon-credit-limit.png';
import IconCircleInfo from '../../../assets/img/icons/icon-circle-info.png';
import IconCircleFile from '../../../assets/img/icons/icon-circle-file.png';
import IconCircleTax from '../../../assets/img/icons/icon-circle-tax.png';
import IconCircleChat from '../../../assets/img/icons/icon-circle-chat.png';
import ChevronCircleRightIcon from '../../../assets/img/icons/icon-chevron-circle-right.png';
import ChevronCircleDownIcon from '../../../assets/img/icons/icon-chevron-circle-down.png';
import ChevronRightIcon from '../../../assets/img/icons/icon-chevron-right.png';
import BannerPlaceholder from '../../../assets/img/banner-placeholder.png';
import BottomMenuComponent from '../../components/BottomMenuComponent';
import PayWithQrComponent from '../../components/PayWithQrComponent';
import DotSelected from '../../../assets/img/icons/dot-selected.png';
import DotGray from '../../../assets/img/icons/dot-gray.png';
import Carousel from 'react-native-reanimated-carousel';
function Home({navigation}): JSX.Element {
  const width = Dimensions.get('window').width;
  const [indexDot, setIndexDot] = useState(0);
  const banners = [
    {image: BannerPlaceholder},
    {image: BannerPlaceholder},
    {image: BannerPlaceholder},
  ];
  const RenderDots = data => {
    const images = data.data;
    const dots = [];
    for (let i = 0; i < images.length; i++) {
      dots.push(
        <Image
          key={i}
          style={[Style.styles.ms1, Style.styles.me1]}
          source={indexDot === i ? DotSelected : DotGray}
        />,
      );
    }
    return dots;
  };
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={[Style.styles.screenHeight, Style.styles.bgWhite]}>
      {/*Page*/}
      <ScrollView style={[Style.styles.mb8]} horizontal={false}>
        {/*Header & menu*/}
        <HeaderMenuComponent />
        {/*End Header & menu*/}

        {/*Content*/}
        <View style={[Style.styles.paddingPageSm, Style.styles.mt3]}>
          {/*Card contaienr*/}
          <CardComponent data={[{title: 'teste1'}, {title: 'teste2'}]} />
          {/*End Card contaienr*/}

          {/*Pay With Qrcode*/}
          <PayWithQrComponent />
          {/*EndPay With Qrcode*/}

          {/* Section value to pay and limit available */}
          <View style={[Style.styles.bgGrayOpacity, styles.containerLimit]}>
            {/*Value to pay*/}
            <View style={[Style.styles.row, styles.containerLimit.row]}>
              <Image
                style={styles.containerLimit.icon}
                source={BillYellowIcon}
              />
              <Text style={[Style.styles.fontRegular, Style.styles.h6]}>
                Fatura aberta {'\n'}
                <Text
                  style={[
                    Style.styles.fontBlack,
                    Style.styles.fontBold,
                    Style.styles.h4,
                  ]}>
                  345,99
                </Text>
              </Text>
              <Pressable
                style={({pressed}) => [
                  Style.styles.row,
                  pressed && Style.styles.focusedText,
                ]}>
                <Text style={[Style.styles.fontSemiBold, Style.styles.h6]}>
                  Ver Fatura
                </Text>
                <Image
                  style={[styles.containerLimit.iconChevron, Style.styles.ms1]}
                  source={ChevronCircleRightIcon}
                />
              </Pressable>
            </View>
            {/*End value to pay*/}

            {/*Divider*/}
            <View
              style={[
                {
                  borderBottomColor: Style.blackColor,
                  borderBottomWidth: 0.8,
                  marginHorizontal: 40,
                  borderStyle: 'dashed',
                  marginVertical: 10,
                },
              ]}
            />
            {/*EndDivider*/}

            {/*Limit available*/}
            <View style={[Style.styles.row, styles.containerLimit.row]}>
              <Image
                style={styles.containerLimit.icon}
                source={CreditLimitIcon}
              />
              <Text style={[Style.styles.fontRegular, Style.styles.h6]}>
                Limite disponível {'\n'}
                <Text
                  style={[
                    Style.styles.fontBlack,
                    Style.styles.fontBold,
                    Style.styles.h4,
                  ]}>
                  809,72
                </Text>
              </Text>
              <Pressable
                style={({pressed}) => [
                  Style.styles.row,
                  pressed && Style.styles.focusedText,
                ]}>
                <Text style={[Style.styles.fontSemiBold, Style.styles.h6]}>
                  Ver Fatura
                </Text>
                <Image
                  style={[styles.containerLimit.iconChevron, Style.styles.ms1]}
                  source={ChevronCircleRightIcon}
                />
              </Pressable>
            </View>
            {/*End Limit available*/}
          </View>
          {/*End Section value to pay and limit available */}

          {/* Mosaico container */}
          <View
            style={[
              Style.styles.row,
              Style.styles.mt4,
              {justifyContent: 'space-between'},
            ]}>
            {/*Item Invoices*/}
            <Pressable style={[styles.bg, Style.styles.bgBlueOpacity]}>
              <Image style={styles.bg.icon} source={InvoiceBlueIcon} />
              <View
                style={[
                  Style.styles.row,
                  Style.styles.mt6,
                  {alignItems: 'center', justifyContent: 'space-between'},
                ]}>
                <Text
                  style={[
                    Style.styles.h5,
                    Style.styles.fontSemiBold,
                    Style.styles.fontBlack,
                  ]}>
                  Faturas
                </Text>
                <Image style={[styles.bg.chevron]} source={ChevronRightIcon} />
              </View>
            </Pressable>
            {/*End Item Invoices*/}

            {/*Item Cards*/}
            <Pressable style={[styles.bg, Style.styles.bgPurpleOpacity]}>
              <Image style={styles.bg.icon} source={InvoicePurpleIcon} />
              <View
                style={[
                  Style.styles.row,
                  Style.styles.mt6,
                  {alignItems: 'center', justifyContent: 'space-between'},
                ]}>
                <Text
                  style={[
                    Style.styles.h5,
                    Style.styles.fontSemiBold,
                    Style.styles.fontBlack,
                  ]}>
                  Cartões
                </Text>
                <Image style={[styles.bg.chevron]} source={ChevronRightIcon} />
              </View>
            </Pressable>
            {/*End Item Cards*/}

            {/*Item Insurance*/}
            <Pressable style={[styles.bg, Style.styles.bgRedOpacity]}>
              <Image style={styles.bg.icon} source={InvoiceRedIcon} />
              <View
                style={[
                  Style.styles.row,
                  Style.styles.mt6,
                  {alignItems: 'center', justifyContent: 'space-between'},
                ]}>
                <Text
                  style={[
                    Style.styles.h5,
                    Style.styles.fontSemiBold,
                    Style.styles.fontBlack,
                  ]}>
                  Seguros
                </Text>
                <Image style={[styles.bg.chevron]} source={ChevronRightIcon} />
              </View>
            </Pressable>
            {/*End Item Insurance*/}

            {/*Item Negotiation*/}
            <Pressable style={[styles.bg, Style.styles.bgGrayOpacity]}>
              <Image style={styles.bg.icon} source={InvoiceGrayIcon} />
              <View
                style={[
                  Style.styles.row,
                  Style.styles.mt6,
                  {alignItems: 'center', justifyContent: 'space-between'},
                ]}>
                <Text
                  style={[
                    Style.styles.h5,
                    Style.styles.fontSemiBold,
                    Style.styles.fontBlack,
                  ]}>
                  Negociações
                </Text>
                <Image style={[styles.bg.chevron]} source={ChevronRightIcon} />
              </View>
            </Pressable>
            {/*End Item Negotiation*/}
          </View>
          {/*End Mosaico container */}
        </View>

        {/*Last Transations Container*/}
        <View style={[Style.styles.bgGrayOpacity, Style.styles.mt2]}>
          <View
            style={[
              Style.styles.row,
              Style.styles.paddingPageSm,
              styles.containerLastTransations,
            ]}>
            <Text
              style={[
                Style.styles.fontSemiBold,
                Style.styles.h5,
                Style.styles.fontBlack,
              ]}>
              Últimas Transações
            </Text>
            <Text
              style={[
                Style.styles.fontSemiBold,
                Style.styles.h6,
                Style.styles.ps3,
              ]}>
              Ver fatura aberta
            </Text>
            <Image
              style={[styles.containerLastTransations.image]}
              source={ChevronCircleDownIcon}
            />
          </View>
        </View>
        {/*End Last Transations*/}

        {/*Container Banners*/}
        <View style={[Style.styles.paddingPageSm]}>
          <Text
            style={[
              Style.styles.fontMedium,
              Style.styles.h4,
              Style.styles.fontBlack,
              Style.styles.pt3,
            ]}>
            Banners
          </Text>
          <Carousel
            height={250}
            width={width}
            autoPlay={false}
            data={banners}
            scrollAnimationDuration={1000}
            onSnapToItem={index => setIndexDot(index)}
            renderItem={({index}) => (
              <View style={[{marginTop: -50}]}>
                <Image
                  style={[{width: width - 50, objectFit: 'contain'}]}
                  source={banners[index].image}
                />
              </View>
            )}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RenderDots data={banners} />
          </View>
        </View>
        {/*End Container Banners*/}

        {/*Container Shortcuts*/}
        <View style={[Style.styles.paddingPageSm, Style.styles.mt4]}>
          <Pressable
            style={[
              Style.styles.row,
              styles.shortcutItem,
              Style.styles.bgGrayOpacity,
            ]}>
            <Image
              style={[styles.shortcutItem.image]}
              source={IconCircleInfo}
            />
            <Text
              style={[
                Style.styles.fontSemiBold,
                Style.styles.fontBlack,
                Style.styles.text,
                Style.styles.ps3,
              ]}>
              Dúvidas frequentes
            </Text>
          </Pressable>

          <Pressable
            style={[
              Style.styles.row,
              styles.shortcutItem,
              Style.styles.bgGrayOpacity,
            ]}>
            <Image style={[styles.shortcutItem.image]} source={IconCircleTax} />
            <Text
              style={[
                Style.styles.fontSemiBold,
                Style.styles.fontBlack,
                Style.styles.text,
                Style.styles.ps3,
              ]}>
              Encargos, taxas e tarifas
            </Text>
          </Pressable>

          <Pressable
            style={[
              Style.styles.row,
              styles.shortcutItem,
              Style.styles.bgGrayOpacity,
            ]}>
            <Image
              style={[styles.shortcutItem.image]}
              source={IconCircleChat}
            />
            <Text
              style={[
                Style.styles.fontSemiBold,
                Style.styles.fontBlack,
                Style.styles.text,
                Style.styles.ps3,
              ]}>
              Fale conosco
            </Text>
          </Pressable>

          <Pressable
            style={[
              Style.styles.row,
              styles.shortcutItem,
              Style.styles.bgGrayOpacity,
            ]}>
            <Image
              style={[styles.shortcutItem.image]}
              source={IconCircleFile}
            />
            <Text
              style={[
                Style.styles.fontSemiBold,
                Style.styles.fontBlack,
                Style.styles.text,
                Style.styles.ps3,
              ]}>
              Contrato do cartão
            </Text>
          </Pressable>
        </View>
        {/*End Container Shortcuts*/}

        {/*EndContent*/}
        <View style={[Style.styles.mt10]} />
      </ScrollView>
      {/*End Page*/}

      {/*Bottom Menu*/}
      <BottomMenuComponent />
      {/*End Bottom Menu*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLimit: {
    borderRadius: 20,
    paddingVertical: 30,
    marginTop: 40,
    row: {
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
      marginVertical: 20,
    },
    icon: {
      width: 32,
      height: 32,
    },
    iconChevron: {
      width: 24,
      height: 24,
    },
  },
  bg: {
    borderRadius: 25,
    width: '48%',
    height: 160,
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 20,
    icon: {
      width: 32,
      height: 32,
      objectFit: 'contain',
    },
    chevron: {
      width: 15,
      height: 15,
      objectFit: 'contain',
    },
  },
  containerLastTransations: {
    height: 85,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    image: {
      height: 28,
      width: 28,
    },
  },
  shortcutItem: {
    height: 60,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 30,
    marginBottom: 15,
    image: {
      width: 36,
      height: 36,
    },
  },
});

export default Home;
