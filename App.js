import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const arr = ["C","√","%","÷","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="]
  let a = 1234;
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <View title='inputContainer' style={styles.inputContainer}>
          <Text style={[styles.buttonText, {marginRight: 12,marginBottom: 5, color: 'black',fontSize: 48}]}>{a}</Text>
        </View>
        <View title='buttonContainer' style={styles.buttonsCont}>
          <View style={styles.buttonCont}>
          <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>{arr[0]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>{arr[1]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>{arr[2]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>{arr[3]}</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonCont}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[4]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[5]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[6]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>{arr[7]}</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonCont}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[8]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[9]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[10]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>{arr[11]}</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonCont}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[12]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[13]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[14]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>{arr[15]}</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonCont}>
          <TouchableOpacity style={[styles.button, {flex: 0.525,backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[16]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EFE2D0'}]} onPress={() => {}}><Text style={[styles.buttonText ,{color: 'black'}]}>{arr[17]}</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#EF7B5A'}]} onPress={() => {}}><Text style={styles.buttonText}>{arr[18]}</Text></TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    // backgroundColor: 'red',
    flex: 1,
  },
  inputContainer: {
    // backgroundColor: 'green',
    flex: 0.4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    
  },
  buttonsCont: {
    flex: 0.6,
    // backgroundColor: 'blue',
    margin:11,
  },
  button: {
    flex:0.25,
    backgroundColor: '#475C6B',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Noto Sans',
    fontSize: 36,
    color: 'white',
    fontStyle: "italic",
  },
  buttonCont: {
    flexDirection: 'row',
    flex: 1,
  },
  highlight: {
  },
});

export default App;