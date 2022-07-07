import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffie", key: "1" },
    { text: "play a game", key: "2" },
    { text: "create an app", key: "3" },
  ]);

  const onPressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=> todo.key !== key)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={onPressHandler}/>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
