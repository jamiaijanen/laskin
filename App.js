import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [text, setText] = useState('Result: ')
  const [answer, setAnswer] = useState();
  const [previousAnswers, setPreviousAnswers] = useState([]);
  const [history, setHistory] = useState('History')

  const plus = () => {
    const calculation = parseInt(number1) + parseInt(number2)
    setAnswer(calculation)
    const jep = number1 + " + " + number2 + " = " + calculation
    setPreviousAnswers([...previousAnswers, { key: jep }])
  }

  const minus = () => {
    const calculation = parseInt(number1) - parseInt(number2)
    setAnswer(calculation)
    const jep = number1 + " - " + number2 + " = " + calculation
    setPreviousAnswers([...previousAnswers, { key: jep }])
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
      </View>
      <Text>
      {history}
      </Text>
      <FlatList style={styles.list}
        data={previousAnswers}
        renderItem={({item}) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
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
