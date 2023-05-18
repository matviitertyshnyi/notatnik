import React from 'react';
import {Text, View, SafeAreaView, StatusBar,StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
import Note from './newNote';
import { AddNote } from './assets';
const styles = useStyles(); 

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My notes:</Text>
          <TouchableOpacity style={styles.addnote}>
            <AddNote width={100} height={100}/>
          </TouchableOpacity>
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <Note/>
              <Note/>
              <Note/>
              <Note/>
              <Note/>
              <Note/>
              <Note/>
              <Note/>
              <Note/>
            </ScrollView>
          </SafeAreaView>
    </View>
    );
};



export default YourApp;