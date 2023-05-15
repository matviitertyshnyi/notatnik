import React from 'react';
<<<<<<< HEAD
import {Text, View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
import Note from './newNote';
=======
import {Text, View} from 'react-native';
import { useStyles } from './styles';

>>>>>>> 758433c816151496da6a52d6e1952acbdf370628
const styles = useStyles(); 

const YourApp = () => {
  return (
<<<<<<< HEAD
    
    <View style={styles.container}>
      <Text style={styles.header}>My notes:</Text>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
=======
    <View style={styles.container}>
      <Text>Try editing me! 🎉</Text>
>>>>>>> 758433c816151496da6a52d6e1952acbdf370628
    </View>
    );
};



export default YourApp;