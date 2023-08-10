// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Style from '../styles/Style';
import {Pressable, Text} from 'react-native';
import React from 'react';

function ButtonComponent({data, onPress, style}) {
  return (
    <Pressable
      style={({pressed}) => [
        pressed && Style.styles.focusedButton,
        Style.styles.buttonPrimary,
        {elevation: 2},
        style || null,
      ]}
      onPress={onPress}
      accessibilityLabel="Realize login na plataforma">
      <Text
        style={[
          Style.styles.h5,
          Style.styles.textCenter,
          Style.styles.pt2,
          Style.styles.fontWhite,
          Style.styles.fontSemiBold,
        ]}>
        {data.title || 'error'}
      </Text>
    </Pressable>
  );
}
export default ButtonComponent;
