import { FlatList, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ArrowLeft from '../../assets/icons/arrowLeft.svg'
import { useSelector } from 'react-redux'

const CameraRollScreen = ({ navigation }) => {

  const imagesData = useSelector(state => state.data).photos;

  const handleNavigate = () => {
    navigation.replace('Home')
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>
          {imagesData[0].camera.full_name}
        </Text>
        <Text style={styles.navbarSubtitle}>
          {imagesData[0].earth_date}
        </Text>
        <Pressable style={styles.navbarButton} onPress={handleNavigate}>
          <ArrowLeft stroke='#000' />
        </Pressable>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={imagesData}
        renderItem={({ item }) => (
          <Pressable>
            <Image
              style={styles.image}
              source={{ uri: item.img_src }}
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
    margin: 12,
    marginBottom: 36,
    flexWrap: 'wrap',
  },
  image: {
    width: 109,
    height: 109,
    margin: 4,
    borderRadius: 10
  }
})