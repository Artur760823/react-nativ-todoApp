import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={()=> pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color={'#333'}/>
      <Text style={styles.text}>{item.text}</Text>
      </View>

    </TouchableOpacity>
  );
};

export default TodoItem;


const styles = StyleSheet.create({
  item:{
    padding: 16,
    marginTop: 16,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: '#809fff',
    flexDirection: 'row'
  },
  text:{
    marginLeft: 15,
    fontSize: 15
  }
})