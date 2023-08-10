import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import DropDown from '../shared/DropDown'

const Block = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.label}>Rover Camera</Text>
      <DropDown
        placeholder='Select Rover Camera'
      />
      <Text style={styles.label}>Date</Text>
      <Pressable style={styles.button}>
        <Text style={styles.button__text}>
          Explore
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
  },
  label: {
    fontFamily: 'Dosis',
    fontSize: 14,
    height: 18,
    letterSpacing: 0.28,
    marginBottom: 7,
  },
  button: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2E0E',
    marginTop: 24,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3
  },
  button__text: {
    fontFamily: 'DosisSemiBold',
    fontSize: 18,
    letterSpacing: 0.36,
    color: '#FFF'
  }
})

export default Block