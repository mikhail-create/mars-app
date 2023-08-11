import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode='cover'
        source={require('../../assets/images/splash-image.png')}
      >
        <Text style={styles.title} >
          MARS
        </Text>
        <Text style={styles.subtitle}>
          by Curiosity
        </Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingLeft: 15,
  },
  title: {
    fontSize: 90,
    fontFamily: 'DosisExtraLight',
    letterSpacing: 1.8,
    color: '#DCCEBE',
    marginTop: 44,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'DosisSemiBold',
    letterSpacing: 0.48,
    color: '#DCCEBE'
  }
});
