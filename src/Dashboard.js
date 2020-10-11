import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Navbutton from './components/Navbutton';
import HomeScreen from './screens/HomeScreen';

const DashboardScreen = ({ navigation }) => {
  const menu = [
    { key: '1', title: 'Kegiatan', path: 'Kegiatan' },
    { key: '2', title: 'Renungan', path: 'Renungan' },
    { key: '3', title: 'Warta', path: 'Warta' },
  ];

  return (
    <View>
      <FlatList
        data={menu}
        style={styles.button}
        renderItem={({ item }) => <Navbutton menu={item} nav={navigation} />}
      />
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
});

export default DashboardScreen;
