import React from 'react';
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
import Note from './Note';
import { AddNote } from './assets';
import { useState } from 'react'; 
import NotesList from './notesList';
const styles = useStyles(); 

const YourApp = () => {
  const [serviceList, setServiceList] = useState([{service: ''}])
  
  const handleServiceAdd = () => {
    setServiceList([...serviceList, {service: ''}])
  }

  const [notes, setNotes] = useState([
    {
    text: "Title",
    date: "15/04/2021"
  },

]);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>My notes:</Text>

          <TouchableOpacity style={styles.addnote} onPress={handleServiceAdd}>
            <AddNote width={100} height={100} fill={"#FFF"}/>
          </TouchableOpacity>

          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              {serviceList.map(() =>(
                <NotesList notes={notes}/>
              ))}
            </ScrollView>
          </SafeAreaView>
    </View>
    );
};



export default YourApp;