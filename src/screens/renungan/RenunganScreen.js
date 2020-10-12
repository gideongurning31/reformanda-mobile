import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RenunganApi } from '../../services/RenunganService';
import RenunganDetails from './RenunganDetails';

const emptyData = {
  id: null,
  tanggal: '',
  natsAyat: '',
  natsKalimat: '',
  content: [],
  refleksi: '',
  penulis: '',
  youtubeUrl: '',
};

const RenunganScreen = () => {
  const [renunganList, setRenunganList] = useState([emptyData]);
  const [errorMessage, setErrorMessage] = useState('Something went wrong.');

  RenunganApi.getAll()
    .then((response) => setRenunganList(response.data.data))
    .catch((err) => setErrorMessage(err.toString()));

  if (renunganList[0].id !== null) {
    return <RenunganDetails renungan={renunganList[0]} />;
  }

  return <View><Text style={styles.errorText}>{errorMessage}</Text></View>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 50,
  },
});

export default RenunganScreen;
