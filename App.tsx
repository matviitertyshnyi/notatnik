import React from 'react';
import {Text, View} from 'react-native';
import { useStyles } from './styles';

const styles = useStyles(); 

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};

export default YourApp;