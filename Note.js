import React from 'react';
import {Text, View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
import navigation from "./App";
const styles = useStyles(); 

const Note = ( {text, date }) => {


  return(
  <TouchableOpacity style={styles.note} onPress={() => navigation.navigate('Note', {name: 'Jane'})}>
    <Text style={styles.noteText}>{text}</Text>
  </TouchableOpacity>
);
};

export default Note;