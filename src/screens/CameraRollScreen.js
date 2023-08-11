import { FlatList, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ArrowLeft from '../../assets/icons/arrowLeft.svg'

const CameraRollScreen = ({ navigation }) => {

  const handleNavigate = () => {
    navigation.replace('Home')
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>
          Front Hazard Avoidance Camera
        </Text>
        <Text style={styles.navbarSubtitle}>
          18 Oct, 2021
        </Text>
        <Pressable style={styles.navbarButton} onPress={handleNavigate}>
          <ArrowLeft stroke='#000' />
        </Pressable>
      </View>
      <FlatList
        style={styles.list}
        data={[1, 2, 3, 4, 1, 1, 1, 1, 1]}
        renderItem={({ item }) => (
          <Pressable>
            <Image
              style={styles.image}
              source={require('../../assets/images/image.png')}
            />
          </Pressable>
        )}
        numColumns={3}
      />
    </View>
  )
}

export default CameraRollScreen

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
    lineHeight: 22,
    fontFamily: 'DosisSemiBold',
  },
  navbarSubtitle: {
    fontFamily: 'Dosis',
    lineHeight: 22,
    fontSize: 13,
  },
  navbarButton: {
    position: 'absolute',
    left: 16,
    bottom: 9
  },
  list: {
    margin: 8,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 10
  }
})