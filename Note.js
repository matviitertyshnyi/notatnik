import React from 'react';
import {Text, View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
const styles = useStyles(); 

const Note = ( {text, date }) => {


  return(
  <TouchableOpacity style={styles.note}>
    <Text style={styles.noteText}>{text}</Text>
  </TouchableOpacity>
);
};

export default Note;