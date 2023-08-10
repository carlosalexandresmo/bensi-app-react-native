// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import Banner1 from '../../../assets/img/banner1.png';
import DotGray from '../../../assets/img/icons/dot-gray.png';
import DotSelected from '../../../assets/img/icons/dot-selected.png';
import Style from '../../styles/Style';
import HeaderComponent from '../../components/HeaderComponent';
import Carousel from 'react-native-reanimated-carousel';
import ButtonComponent from '../../components/ButtonComponent';
function Walktrought({navigation}): JSX.Element {
  const width = Dimensions.get('window').width;
  const [indexDot, setIndexDot] = useState(0);
  HeaderComponent({title: 'Captação', bgColor: Style.secundaryColor});

  const banners = [{image: Banner1}, {image: Banner1}, {image: Banner1}];

  const RenderDots = data => {
    const images = data.data;
    const dots = [];
    for (let i = 0; i < images.length; i++) {
      dots.push(
        <Image
          style={[Style.styles.ms1, Style.styles.me1]}
          source={indexDot === i ? DotSelected : DotGray}
        />,
      );
    }
    return dots;
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={[Style.styles.bgWhite, Style.styles.page]}>
        <Carousel
          height={530}
          width={width}
          autoPlay={false}
          data={banners}
          scrollAnimationDuration={1000}
          onSnapToItem={index => setIndexDot(index)}
          renderItem={({index}) => (
            <View style={[styles.item, {alignItems: 'center'}]}>
              <>
                <Image source={banners[index].image} />
              </>
            </View>
          )}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <RenderDots data={banners} />
        </View>
        <View style={[Style.styles.paddingPage, Style.styles.mt4]}>
          <ButtonComponent
            data={{title: 'Saiba mais'}}
            onPress={() => navigation.navigate('capture-about')}
            style={undefined}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Walktrought;
const styles = StyleSheet.create({
  item: {
    marginTop: 50,
    width: 410,
    image: {
      objectFit: 'cover',
      alignSelf: 'center',
      borderRadius: 15,
      text: {
        paddingTop: 10,
      },
    },
  },
});
