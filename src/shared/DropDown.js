import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ArrowDown from '../../assets/icons/arrowDown.svg'

const DropDown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (propOption) => {
    onSelect(propOption);
    setSelectedOption(propOption)
    toggleDropDown();
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity style={styles.wrapper} onPress={toggleDropDown}>
        <Text
          style={styles.placeholder}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <ArrowDown />
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          style={styles.list}
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)}>
              <Text
                style={styles.item}
              >{item.label}</Text>
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
    backgroundColor: '#eee7df',
    marginBottom: 16,
    justifyContent: 'center',
    fontFamily: 'Dosis',
    fontSize: 18,
    letterSpacing: 0.36,
    position: 'relative',
    zIndex: 2,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  placeholder: {
    fontFamily: 'Dosis',
    fontSize: 18,
    maxWidth: '90%'
  },
  list: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#eee7df',
    borderRadius: 10,
    top: 70,
  },
  item: {
    width: '100%',
    height: 20,
    margin: 10,
    fontSize: 16,
    fontFamily: 'Dosis',
  }
})

export default DropDown;
