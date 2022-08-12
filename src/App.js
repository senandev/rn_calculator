import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CalcButton } from './components/CalcButton';

const App = () => {
  const buttons = [
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '√',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '0',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'C',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
]
  // const buttons = ["C","√","%","÷","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="]
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.displayContainer}>
          <Text>1234</Text>
        </View>
        <View style={styles.buttonContainer}>
          {
            buttons.map(item => <CalcButton {...item} />)
          }
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 13.5,
  },
});

export default App;