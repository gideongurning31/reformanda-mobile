import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Navbutton from './components/Navbutton';

const DashboardScreen = ({ navigation }) => {
  const menu = [
    { key: '1', title: 'Beranda', path: 'Home' },
    { key: '2', title: 'Kegiatan', path: 'Kegiatan' },
    { key: '3', title: 'Renungan', path: 'Renungan' },
    { key: '4', title: 'Warta', path: 'Warta' },
  ];

  return (
    <View>
      <Text style={styles.text}>Navigation Menu</Text>
      <FlatList
        data={menu}
        style={styles.button}
        renderItem={({ item }) => <Navbutton menu={item} nav={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    margin: 20,
  },
});

export default DashboardScreen;
