import * as React from 'react';
import {Text, TextInput, View, SafeAreaView, ScrollView, TouchableOpacity, Button} from 'react-native';
import { useStyles } from './styles';
import Note from './Note';
import { AddNote } from './assets';
import { useState } from 'react'; 
import NotesList from './notesList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const styles = useStyles(); 

const Stack = createNativeStackNavigator();
 
function YourApp(){
  const [serviceList, setServiceList] = useState([{service: ''}]);

  let [val, setVal] = useState("Hey")

  const change = event => {
     setVal(event.target.value)
  }

  const click = () => {
    alert(val)
  }
  
  const handleServiceAdd = () => {
    setServiceList([...serviceList, {service: ''}]);
  }
  
  const [notes, setNotes] = useState([
    {
    text: "Title",
    date: "18/05/2023"
  },

])

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
                <Text style={styles.noteText}>{val}</Text>
              </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
    </View>
  );
};


const NoteScreen = ({navigation, route}) => {
  return(
    <View>
     <TextInput multiline={true} onChangeText={change} value={val}></TextInput>
     <TouchableOpacity onPress={click} style={styles.addnote}></TouchableOpacity> 
     </View>
  );
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



