// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable} from 'react-native';
import ArrowCircleLeft from '../../assets/img/icons/arrow-circle-left.png';
import ArrowCircleLeftInverted from '../../assets/img/icons/arrow-circle-left-inverted.png';
import React, {useState} from 'react';
import Style from '../styles/Style';
import IconMenu from '../../assets/img/icons/icon-menu.png';
import HeaderMenuComponent from './HeaderMenuComponent';

function HeaderComponent(data): JSX.Element {
  const navigation = useNavigation();

  // Set header options for this screen
  navigation.setOptions({
    headerTitle: data.title || '',
    headerTintColor: data.headerColor || Style.grayColor,
    headerBackTitleVisible: true,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: 'Jost-Medium',
      fontSize: 18,
      paddingTop: 10,
    },
    headerStyle: {
      backgroundColor: data.bgColor || 'transparent',
      borderBottomWidth: 0, // Removes bottom border
      borderWidth: 0, // Removes bottom border
      shadowOpacity: 0, // Removes shadow
      elevation: 0,
    },
    tabBarVisible: false,
    headerRight: data.headerRight
      ? () => (
          <Pressable
            style={({pressed}) => [pressed && Style.styles.focusedText]}
            onPress={() => setModalVisible(true)}>
            <Image
              source={IconMenu}
              style={{width: 30, height: 25, marginEnd: 15}}
            />
          </Pressable>
        )
      : null,
    headerLeft: () => (
      <Pressable
        style={{paddingStart: 30, marginTop: 5}}
        onPress={() => navigation.goBack()}>
        {data.iconInverted ? (
          <Image source={ArrowCircleLeftInverted} />
        ) : (
          <Image source={ArrowCircleLeft} />
        )}
      </Pressable>
    ),
  });
}

export default HeaderComponent;
