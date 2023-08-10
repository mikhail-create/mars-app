import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';

const DropDown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    onSelect(item);
    toggleDropDown();
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity onPress={toggleDropDown}>
        <Text>{placeholder}</Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.value.toString()}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 16,
    justifyContent: 'center',
    padding: 16,
    fontFamily: 'Dosis',
    fontSize: 18,
    letterSpacing: 0.36,
  },
  dropdown__text: {

  }
})

export default DropDown;
