import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => <Text style={styles.text}>BERANDA</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default HomeScreen;
