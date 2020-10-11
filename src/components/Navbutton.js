import React from 'react';
import { Button, StyleSheet } from 'react-native';

const Navbutton = ({ nav, menu }) => (
  <Button
    style={styles.button}
    title={menu.title}
    onPress={() => nav.navigate(menu.path)}
  />
);

const styles = StyleSheet.create({
  button: {},
});

export default Navbutton;
