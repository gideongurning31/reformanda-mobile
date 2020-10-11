import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const RenunganDetails = ({ renungan }) => (
  <View>
    <Text style={styles.title}>Renungan {renungan.tanggal}</Text>
    <Text style={styles.ayat}>{renungan.natsKalimat} ({renungan.natsAyat})</Text>
    <FlatList
      data={renungan.isi}
      style={styles.textWrap}
      keyExtractor={(p, index) => index.toString()}
      renderItem={(p) => <Text style={styles.text}>{p.item}</Text>}
    />
    <Text style={styles.refleksi}>{renungan.refleksi}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  ayat: {
    marginHorizontal: 20,
    textAlign: 'left',
    fontSize: 20,
    fontStyle: 'italic',
  },
  textWrap: {
    margin: 20,
    height: 400,
  },
  text: {
    textAlign: 'justify',
    fontSize: 20,
  },
  refleksi: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RenunganDetails;
