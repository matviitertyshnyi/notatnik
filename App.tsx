import React from 'react';
import {Text, View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
import Note from './newNote';
const styles = useStyles(); 

const YourApp = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>My notes:</Text>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
    </View>
    );
};



export default YourApp;