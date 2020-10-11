import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Navbutton from './components/Navbutton';
import HomeScreen from './screens/HomeScreen';

const DashboardScreen = ({ navigation }) => {
  const menu = [
    { key: '1', title: 'Kegiatan', path: 'Kegiatan', icon: 'calendar' },
    { key: '2', title: 'Renungan', path: 'Renungan', icon: 'book' },
    { key: '3', title: 'Warta', path: 'Warta', icon: 'filetext1' },
  ];

  return (
    <View>
      <FlatList
        data={menu}
        style={styles.buttonList}
        renderItem={({ item }) => <Navbutton menu={item} nav={navigation} />}
      />
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonList: {
    marginHorizontal: 25,
  },
});

export default DashboardScreen;
