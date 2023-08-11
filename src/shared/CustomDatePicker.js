import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import DatePicker from 'react-native-modern-datepicker'
import CalendarIcon from '../../assets/icons/calendar.svg'

const CustomDatePicker = ({ placeholder }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  const dateChange = (propDate) => {
    setSelectedDate(propDate);
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.datePicker}>
      <TouchableOpacity style={styles.wrapper} onPress={toggleDatePicker}>
        <Text style={styles.placeholder}>{selectedDate ? selectedDate : placeholder}</Text>
        <CalendarIcon />
      </TouchableOpacity>
      <Modal
        animationType='fade'
        transparent={true}
        visible={isOpen}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              options={{
                backgroundColor: '#eee7df',
                mainColor: '#BF2E0E',
                textSecondaryColor: '#BF2E0E',
              }}
              mode='calendar'
              selected={selectedDate}
              onDateChange={dateChange}
            />
            <TouchableOpacity onPress={toggleDatePicker}>
              <Text style={styles.placeholder}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
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
    zIndex: 1,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#eee7df',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  placeholder: {
    fontFamily: 'Dosis',
    fontSize: 18
  },
});

export default CustomDatePicker;
