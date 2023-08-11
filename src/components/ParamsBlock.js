import { StyleSheet, View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import DropDown from '../shared/DropDown'
import CustomDatePicker from '../shared/CustomDatePicker';
import { fetchDataFromRover } from '../_services/fetchDataFromRover';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchFailure, fetchSuccess } from '../redux/actions/fetchDataAction';

const options = [
  { label: 'Front Hazard Avoidance Camera', value: 'FHAZ' },
  { label: 'Rear Hazard Avoidance Camera', value: 'RHAZ' },
  { label: 'Mast Camera', value: 'MAST' },
  { label: 'Chemistry and Camera Complex', value: 'CHEMCAM' },
  { label: 'Mars Hand Lens Imager', value: 'MAHLI' },
  { label: 'Mars Descent Imager', value: 'MARDI' },
  { label: 'Navigation Camera', value: 'NAVCAM' },
  { label: 'Panoramic Camera', value: 'PANCAM' },
  { label: 'Miniature Thermal Emission Spectrometer (Mini-TES)', value: 'MINITES	' },
];

const ParamsBlock = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [fetchError, setFetchError] = useState('')

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleDatePickerSelect = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = async () => {
    const params = {
      earth_date: selectedDate,
      camera: selectedOption.value,
    };
    try {
      const fetchedData = await fetchDataFromRover(params);
      dispatch(fetchSuccess(fetchedData));
      navigation.replace('CameraRoll');
    } catch (error) {
      setFetchError('Try another settings')
      setTimeout(() => {
        setFetchError('')
      }, 2000);
      dispatch(fetchFailure(error));
    }
  }

  return (
    <View style={styles.block}>
      <Text style={styles.label}>Rover Camera</Text>
      <DropDown
        options={options}
        placeholder='Select Rover Camera'
        onSelect={handleOptionSelect}
      />
      <Text style={styles.label}>Date</Text>
      <CustomDatePicker
        onSelect={handleDatePickerSelect}
        placeholder='Select Date'
      />
      <Pressable
        disabled={!selectedDate && !selectedOption}
        style={styles.button}
        onPress={handleButtonClick}
      >
        <Text style={styles.buttonLabel}>
          Explore
        </Text>
      </Pressable>
      {
        fetchError &&
        <Text style={styles.errorMsg}>
          {fetchError}
        </Text>
      }
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
  buttonLabel: {
    fontFamily: 'DosisSemiBold',
    fontSize: 18,
    letterSpacing: 0.36,
    color: '#FFF'
  },
  errorMsg: {
    marginTop: 8,
    fontFamily: 'Dosis',
    fontSize: 18,
    letterSpacing: 0.36,
    textAlign: 'center'
  }
})

export default ParamsBlock