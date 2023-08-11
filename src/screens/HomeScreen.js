import { View, Text, StyleSheet, Image } from 'react-native'
import ParamsBlock from '../components/ParamsBlock'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>
          Select Camera and Date
        </Text>
      </View>
      <View style={styles.block}>
        <ParamsBlock />
      </View>
      <Image
        style={styles.image}
        source={require('../../assets/images/rover-image.png')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCCEBE',
    alignItems: 'center',
  },
  navbar: {
    width: '100%',
    height: 88,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navbarTitle: {
    fontSize: 18,
    fontFamily: 'DosisSemiBold'
  },
  block: {
    marginTop: '40%',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  image: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 0,
  }
});