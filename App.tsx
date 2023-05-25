import * as React from 'react';
import {Text, TextInput, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { useStyles } from './styles';
import Note from './Note';
import { AddNote } from './assets';
import { useState } from 'react'; 
import NotesList from './notesList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const styles = useStyles(); 

const Stack = createNativeStackNavigator();

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

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My notes:</Text>

          <TouchableOpacity style={styles.addnote} onPress={handleServiceAdd}>
            <AddNote width={100} height={100} fill={"#FFF"}/>
          </TouchableOpacity>

          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              {serviceList.map(() =>(
                <TouchableOpacity style={styles.note} onPress={() => navigation.navigate('Note', {name: 'Jane'})}>
                <Text style={styles.noteText}></Text>
              </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
    </View>
  );
};


const NoteScreen = ({navigation, route}) => {
  return <TextInput multiline={true}></TextInput>;
};


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};



export default YourApp;



