// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Style from '../../styles/Style';
import CaptureIcon from '../../../assets/img/icons/capture-icon.png';
import CloseIcon from '../../../assets/img/icons/close-gray.png';
import HeaderComponent from '../../components/HeaderComponent';
import {useContext, useEffect, useRef, useState} from 'react';
import {AppContext} from '../../provider/AppProvider';

function CaptureCamera({navigation}): JSX.Element {
  const [user, setUser]: any = useContext(AppContext);
  HeaderComponent({
    title: 'Tire uma selfie',
    bgColor: Style.blackColor,
    headerColor: Style.secundaryColor,
    iconInverted: true,
  });
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.front;
  const [loadingCapture, setLoadingCapture] = useState(false);

  // Verifica se possui permissão para acessar a camera
  Camera.getCameraPermissionStatus().then(permission => {
    // Se ainda não houver ou se foi negada
    if (permission === 'denied') {
      // Solicita permissão
      Camera.requestCameraPermission();
      return false;
    }
  });
  const takePhoto = () => {
    setLoadingCapture(true);
    camera.current
      .takePhoto({
        flash: 'on',
      })
      .then(r => {
        setUser({lastCapture: r});
        setLoadingCapture(false);
        navigation.navigate('capture-selfie');
        navigation.navigate('capture-selfie-confirmation');
      });
  };
  // Render the Camera component only if device is defined
  if (device) {
    return (
      <View
        style={[
          Style.styles.page,
          Style.styles.paddingPage,
          Style.styles.bgBlack,
          {alignItems: 'center', alignContent: 'center'},
        ]}>
        <Text
          style={[
            Style.styles.textCenter,
            Style.styles.fontWhite,
            Style.styles.pt5,
            Style.styles.fontRegular,
            Style.styles.text,
          ]}>
          Encaixe seu rosto na moldura oval e toque no botão para fotografar.
        </Text>

        <View style={[styles.containerCamera, Style.styles.mt8]}>
          <Camera
            ref={camera}
            cameraId={device.id}
            style={[StyleSheet.absoluteFill]}
            device={device}
            photo={true}
            isActive={true}
            zoom={1.5}
          />
        </View>
        {loadingCapture ? (
          <ActivityIndicator
            size="large"
            color={Style.greenColor}
            style={[Style.styles.mt7]}
          />
        ) : (
          <Pressable
            style={({pressed}) => [
              pressed && Style.styles.focusedButton,
              Style.styles.mt6,
            ]}
            onPress={() => takePhoto()}>
            <Image style={{width: 90, height: 90}} source={CaptureIcon} />
          </Pressable>
        )}

        <Pressable
          style={({pressed}) => [
            pressed && Style.styles.focusedButton,
            Style.styles.mt4,
          ]}
          onPress={() => navigation.navigate('capture-selfie')}>
          <Image style={{width: 50, height: 50}} source={CloseIcon} />
        </Pressable>
      </View>
    );
  } else {
    // Render a placeholder component or message if device is undefined
    return (
      <View
        style={[
          Style.styles.page,
          Style.styles.paddingPage,
          Style.styles.bgBlack,
          {alignItems: 'center', alignContent: 'center'},
        ]}>
        <Text
          style={[
            Style.styles.h4,
            Style.styles.textCenter,
            Style.styles.fontWhite,
          ]}>
          Iniciando camera...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerCamera: {
    width: 300,
    height: 350,
    overflow: 'hidden',
    borderRadius: 195,
    borderStyle: 'dashed',
    borderWidth: 3,
    borderColor: Style.purpleColor,
  },
});
export default CaptureCamera;
