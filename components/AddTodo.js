import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const AddTodo = ({submit}) => {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value)
  };

  return (
    <View>
      <TextInput placeholder="new todo..." onChangeText={changeHandler} style={styles.input}/>
      <Button onPress={()=> submit(text)} title='add todo' color='coral'/>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})
