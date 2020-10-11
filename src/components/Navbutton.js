import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { PALETTE } from '../Constants';

const Navbutton = ({ nav, menu }) => (
  <TouchableOpacity style={styles.button} onPress={() => nav.navigate(menu.path)}>
    <AntDesign name={menu.icon} style={styles.text} />
    <View style={{ width: 10 }} />
    <Text style={styles.text}>{menu.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: PALETTE.D1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: PALETTE.L1,
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default Navbutton;
