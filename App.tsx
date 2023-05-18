import React from 'react';
import {Text, View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
import Note from './newNote';
import { AddNote } from './assets';
const styles = useStyles(); 

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My notes:</Text>
        <Note/>
        
        <AddNote width={100} height={100}/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>

    </View>
    );
};



export default YourApp;