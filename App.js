import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [text, setText] = useState('Result: ')
  const [answer, setAnswer] = useState();

  const plus = () => {
    setAnswer(parseInt(number1) + parseInt(number2))
  }

  const minus = () => {
    setAnswer(parseInt(number1) - parseInt(number2))
  }

  return (
    <View style={styles.container}>
      <Text>
        {text}{answer}
      </Text>
      <View>
        <TextInput keyboardType={"number-pad"} style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1}/>
        <TextInput keyboardType={"number-pad"} style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2}/>
      </View>
      <View style={styles.button}>
        <Button onPress={plus} title="+" />
        <Button onPress={minus} title="-" />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    flexDirection: 'row',
    margin: 20,
  }
});
