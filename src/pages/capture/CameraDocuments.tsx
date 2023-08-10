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
import React, {useContext, useRef, useState} from 'react';
import {AppContext} from '../../provider/AppProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck, faRefresh} from '@fortawesome/free-solid-svg-icons';

function CaptureCameraDocuments({navigation}): JSX.Element {
  const [user, setUser]: any = useContext(AppContext);
  HeaderComponent({
    title: 'Tire uma selfie',
    bgColor: Style.blackColor,
    headerColor: Style.secundaryColor,
    iconInverted: true,
  });
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const [loadingCapture, setLoadingCapture] = useState(false);
  const [front, setFront] = useState(false);
  const [photo, setPhoto] = useState();

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
        setPhoto(r);
        setLoadingCapture(false);
      });
  };
  const refresh = () => {
    setLoadingCapture(false);
    setPhoto('');
    setFront(false);
  };

  const backDocument = () => {
    setFront(true);
    setPhoto('');
  };

  const confirm = () => {
    refresh();
    navigation.navigate('capture-documents-confirmation');
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
        {!front ? (
          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.fontWhite,
              Style.styles.textCenter,
              Style.styles.uppercase,
              Style.styles.h5,
              Style.styles.mt4,
            ]}>
            Vamos começar com a {'\n'}
            <Text style={Style.styles.fontBold}>FRENTE do seu documento.</Text>
          </Text>
        ) : (
          <Text
            style={[
              Style.styles.fontRegular,
              Style.styles.fontWhite,
              Style.styles.textCenter,
              Style.styles.uppercase,
              Style.styles.h5,
              Style.styles.mt4,
            ]}>
            Agora vamos fotografar o {'\n'}
            <Text style={Style.styles.fontBold}>VERSO do seu documento.</Text>
          </Text>
        )}
        <Text
          style={[
            Style.styles.textCenter,
            Style.styles.fontWhite,
            Style.styles.pt2,
            Style.styles.fontRegular,
            Style.styles.text,
          ]}>
          Alinhe o documento dentro da moldura quadrada da tela e bata a foto.
        </Text>
        {photo && photo.path ? (
          <View style={[styles.containerCamera, Style.styles.mt8]}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: `file://${photo && photo.path}`}}
            />
          </View>
        ) : (
          <View style={[styles.containerCamera, Style.styles.mt8]}>
            <Camera
              ref={camera}
              cameraId={device.id}
              style={[StyleSheet.absoluteFill]}
              device={device}
              photo={true}
              isActive={true}
              zoom={1}
            />
          </View>
        )}
        {loadingCapture ? (
          <ActivityIndicator
            size="large"
            color={Style.greenColor}
            style={[Style.styles.mt7]}
          />
        ) : (
          <View>
            <Pressable
              style={({pressed}) => [
                pressed && Style.styles.focusedButton,
                Style.styles.mt6,
                photo && Style.styles.none,
              ]}
              onPress={() => takePhoto()}>
              <Image style={{width: 90, height: 90}} source={CaptureIcon} />
            </Pressable>
            <Pressable
              style={({pressed}) => [
                pressed && Style.styles.focusedButton,
                Style.styles.mt6,
                !photo && Style.styles.none,
              ]}
              onPress={() => (!front ? backDocument() : confirm())}>
              <FontAwesomeIcon
                style={{
                  zIndex: 100,
                  backgroundColor: Style.secundaryColor,
                  borderRadius: 50,
                }}
                color={Style.confirmationColor}
                icon={faCircleCheck}
                size={75}
              />
            </Pressable>
          </View>
        )}

        {!photo ? (
          <Pressable
            style={({pressed}) => [
              pressed && Style.styles.focusedButton,
              Style.styles.mt4,
            ]}
            onPress={() => navigation.navigate('capture-documents')}>
            <Image style={{width: 50, height: 50}} source={CloseIcon} />
          </Pressable>
        ) : (
          <Pressable
            style={({pressed}) => [
              pressed && Style.styles.focusedButton,
              Style.styles.mt4,
            ]}
            onPress={() => refresh()}>
            <FontAwesomeIcon
              style={{
                zIndex: 100,
                borderRadius: 50,
              }}
              color={Style.secundaryColor}
              icon={faRefresh}
              size={40}
            />
          </Pressable>
        )}
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
    width: '100%',
    height: 250,
    overflow: 'hidden',
    borderStyle: 'dashed',
    borderWidth: 3,
    borderColor: Style.purpleColor,
  },
});
export default CaptureCameraDocuments;
