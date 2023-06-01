import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useStyles } from './styles';
import { AddNote } from './assets';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = useStyles();

const Stack = createNativeStackNavigator();

function YourApp() {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    saveNotes();
  }, [serviceList]);

  const loadNotes = async () => {
    try {
      const notes = await AsyncStorage.getItem('notes');
      if (notes) {
        setServiceList(JSON.parse(notes));
      }
    } catch (error) {
      console.log('Error loading notes:', error);
    }
  };

  const saveNotes = async () => {
    try {
      const notes = JSON.stringify(serviceList);
      await AsyncStorage.setItem('notes', notes);
    } catch (error) {
      console.log('Error saving notes:', error);
    }
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: '' }]);
  };

  const handleNoteDelete = (index) => {
    const updatedServiceList = [...serviceList];
    updatedServiceList.splice(index, 1);
    setServiceList(updatedServiceList);
  };

  const HomeScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>My notes:</Text>

        <TouchableOpacity style={styles.addnote} onPress={handleServiceAdd}>
          <AddNote width={100} height={100} fill={'#FFF'} />
        </TouchableOpacity>

        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            {serviceList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.note}
                onPress={() => navigation.navigate('Note', { index })}
              >
                <Text style={styles.noteText}>{item.service}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleNoteDelete(index)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  };

  const NoteScreen = ({ navigation, route }) => {
    const [text, setText] = useState('');

    const saveNote = () => {
      const { index } = route.params;
      const updatedServiceList = [...serviceList];
      updatedServiceList[index].service = text;
      setServiceList(updatedServiceList);
      navigation.navigate('Home');
    };

    useEffect(() => {
      if (route.params?.note) {
        setText(route.params.note);
      }
    }, [route.params?.note]);

    return (
      <View>
        <TextInput onChangeText={newText => setText(newText)} value={text} />
        <TouchableOpacity onPress={saveNote} style={styles.addnote}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default YourApp;
