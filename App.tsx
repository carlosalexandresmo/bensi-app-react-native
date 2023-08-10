import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppProvider from './src/provider/AppProvider';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/pages/Splash';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import ForgotPassword from './src/pages/ForgotPassword';
import UpdatePassword from './src/pages/UpdatePassword';
import Walktrought from './src/pages/capture/Walktrought';
import Identification from './src/pages/capture/Identification';
import Contact from './src/pages/capture/Contact';
import Address from './src/pages/capture/Address';
import CaptureRejected from './src/pages/capture/Rejected';
import CaptureTokenValidation from './src/pages/capture/TokenValidation';
import CaptureSelfie from './src/pages/capture/Selfie';
import CaptureCamera from './src/pages/capture/Camera';
import CaptureSelfieConfirmation from './src/pages/capture/SelfConfirmation';
import CaptureDocuments from './src/pages/capture/Documents';
import CaptureCameraDocuments from './src/pages/capture/CameraDocuments';
import CaptureDocumentsConfirmation from './src/pages/capture/DocumentsConfirmation';
import CaptureCardInfo from './src/pages/capture/CardInfo';
import CaptureApproved from './src/pages/capture/Approved';
import Home from './src/pages/user/Home';
import UserCards from './src/pages/user/Cards';

const Stack = createStackNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'splash'}
          screenOptions={{
            animationEnabled: true,
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="splash"
            component={Splash}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="register"
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="forgot-password"
            component={ForgotPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="update-password"
            component={UpdatePassword}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-walktrought"
            component={Walktrought}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-identification"
            component={Identification}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-contact"
            component={Contact}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-address"
            component={Address}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="capture-rejected"
            component={CaptureRejected}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-token-validation"
            component={CaptureTokenValidation}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-selfie"
            component={CaptureSelfie}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-camera"
            component={CaptureCamera}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-selfie-confirmation"
            component={CaptureSelfieConfirmation}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-documents"
            component={CaptureDocuments}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-camera-documents"
            component={CaptureCameraDocuments}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-documents-confirmation"
            component={CaptureDocumentsConfirmation}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="capture-card-info"
            component={CaptureCardInfo}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="capture-approved"
            component={CaptureApproved}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="home"
            component={Home}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="user-cards"
            component={UserCards}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
