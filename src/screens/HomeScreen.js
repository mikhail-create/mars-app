import { View, Text, StyleSheet, Image } from 'react-native'
import Block from '../components/Block'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbar__text}>
          Select Camera and Date
        </Text>
      </View>
      <View style={styles.block}>
        <Block />
      </View>
      <Image
        style={styles.image}
        source={require('../../assets/images/rover-image.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#DCCEBE',
    alignItems: 'center',
  },
  navbar: {
    width: '100%',
    height: 88,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navbar__text: {
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


export default HomeScreen