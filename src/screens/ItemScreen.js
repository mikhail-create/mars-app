import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import ArrowLeft from '../../assets/icons/arrowLeft.svg'
import ShareButton from '../shared/ShareButton'

const ItemScreen = ({ route, navigation }) => {

  const { selectedImage } = route.params;

  const handleNavigate = () => {
    navigation.replace('CameraRoll')
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarLabel}>
          Photo ID
        </Text>
        <Text style={styles.navbarTitle}>
          {selectedImage.id}
        </Text>
        <Pressable style={styles.navbarButtonBack} onPress={handleNavigate}>
          <ArrowLeft stroke='#fff' />
        </Pressable>
        <View style={styles.navbarButtonShare}>
          <ShareButton
            title={selectedImage.camera.full_name}
            message='Look at this Mars Photo!'
            url={selectedImage.img_src}
          />
        </View>
      </View>
      <ImageZoom
        minScale={0.5}
        maxScale={3}
        resizeMode='cover'
        style={styles.image}
        source={{ uri: selectedImage.img_src }}
      />
    </View>
  )
}

export default ItemScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    color: '#fff'
  },
  navbarLabel: {
    fontFamily: 'Dosis',
    lineHeight: 22,
    fontSize: 13,
    color: '#fff'
  },
  navbarButtonBack: {
    position: 'absolute',
    left: 16,
    bottom: 9
  },
  navbarButtonShare: {
    position: 'absolute',
    right: 24,
    bottom: 9
  },
  image: {
    width: '95%',
    height: '80%',
    marginTop: 16,
    marginBottom: 16,
    marginBottom: 16,
    borderRadius: 10
  }
})