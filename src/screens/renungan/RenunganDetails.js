import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';

const RenunganDetails = ({ renungan }) => (
  <View>
    <Text style={styles.title}>Renungan {moment.unix(renungan.tanggal / 1000).format('DD MMMM yyyy')}</Text>
    <Text style={styles.ayat}>{renungan.natsKalimat}</Text>
    <Text style={{ ...styles.ayat, textAlign: 'right', fontWeight: 'bold' }}>{renungan.natsAyat}</Text>
    <FlatList
      data={renungan.content}
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
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ayat: {
    marginHorizontal: 20,
    textAlign: 'justify',
    fontSize: 15,
    fontStyle: 'italic',
  },
  textWrap: {
    margin: 20,
    height: 400,
  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
  },
  refleksi: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RenunganDetails;
