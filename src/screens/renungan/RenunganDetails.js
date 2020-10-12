import React from 'react';
import moment from 'moment';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { PALETTE } from '../../Constants';

const RenunganDetails = ({ renungan }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Renungan {moment.unix(renungan.tanggal / 1000).format('DD MMMM yyyy')}</Text>
    <Text style={styles.ayat}>{renungan.natsKalimat}</Text>
    <Text style={{ ...styles.ayat, textAlign: 'right', fontWeight: 'bold' }}>{renungan.natsAyat}</Text>
    <ScrollView style={styles.textWrap}>
      {renungan.content.map((item, index) => <Text key={index} style={styles.text}>{item}</Text>)}
      <Text style={styles.refleksi}>{renungan.refleksi}</Text>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: PALETTE.L1,
    flex: 1
  },
  title: {
    margin: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ayat: {
    marginHorizontal: 20,
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  textWrap: {
    margin: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
  },
  refleksi: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});

export default RenunganDetails;
