import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch("https://exampleapi.dev/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [refetch]);

  return (
    <>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.content}>{item.content}</Text>
            )}
          />
        )}
      </View>
      <View style={styles.buttonBottom}>
        <Button
          title=" Refresh"
          onPress={() => setRefetch(!refetch)}
          style={styles.buttonShare}
          color="#66BB6A"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1b262c",
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  FlatList: {
    backgroundColor: Colors.aquamarine,
  },
  content: {
    fontSize: 22,
    textAlign: "left",
    color: "#bbe1fa",
  },
  buttonBottom: {
    fontSize: 22,
    padding: 10,
    backgroundColor: "#1b262c",
  },
});

export default App;
