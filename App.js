import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import CameraRollScreen from './src/screens/CameraRollScreen';
import ItemScreen from './src/screens/ItemScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [loaded] = useFonts({
    Dosis: require('./assets/fonts/TerminalDosis-Regular.ttf'),
    DosisSemiBold: require('./assets/fonts/TerminalDosis-SemiBold.ttf'),
    DosisExtraLight: require('./assets/fonts/TerminalDosis-ExtraLight.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: 'fade_from_bottom'
            }}
          >
            <Stack.Screen
              name='Splash'
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='CameraRoll'
              component={CameraRollScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Item'
              component={ItemScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <StatusBar style='auto' />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider >
  );
}

const styles = StyleSheet.create({
  container: {
  },
})
