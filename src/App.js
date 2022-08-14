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
        value: '%',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '÷',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '7',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '8',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '9',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: 'x',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '4',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '5',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '6',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '-',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '1',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '2',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '3',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '+',
        backgroundColor: '#475C6B',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '0',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '.',
        backgroundColor: '#EFE2D0',
        color: 'black',
        onPress: () => {alert('dadasdas')}
    },
    {
        value: '=',
        backgroundColor: '#EF7B5A',
        color: 'white',
        onPress: () => {alert('dadasdas')}
    },
]
  // const buttons = ["C","√","%","÷","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="]
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>1234</Text>
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
    marginRight: 16,
    marginLeft: 16,
    borderBottomWidth: 3,
    borderBottomColor: '#EDEDED'
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 13.5,
  },
  displayText: {
    fontSize:56,
    color: 'black',
    fontStyle: 'italic'
  }
});

export default App;