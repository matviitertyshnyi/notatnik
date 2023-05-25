import React from 'react';
import {Text, View,  StyleSheet, TouchableOpacity, Button} from 'react-native';
import { AddNote } from './assets';
import { useStyles } from './styles';
const styles = useStyles(); 

const AddButton = () => {


  return(
  <TouchableOpacity style={styles.addnote}>
    <AddNote width={100} height={100}/>
  </TouchableOpacity>
);
};


export default AddButton;