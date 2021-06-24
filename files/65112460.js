import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Clipboard,
} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const [copiedText, setCopiedText] = useState(
    'Nothing to show, copy by clicking on FlatList Text, and paste it by clicking Paste button'
  );

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    console.log('copied to Clipboard');
    fetchCopiedText();
    console.log('copied text: ', copiedText);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [refetch]);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: 'white',
            width: 300,
            color: 'black',
            height: 100,
          }}
        />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(item.title);
                  console.log('selected text:', selectedText);
                }}>
                <Text style={styles.content}>❝ {item.title} ❞</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      <View style={{ width: 300, height: 100 }}>
        <Text>{copiedText}</Text>
      </View>
      <View>
        <View style={styles.buttonStyle}>
          <Button
            title="New"
            onPress={() => setRefetch(!refetch)}
            style={styles.buttonCopy}
            color="#134074"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Paste"
            onPress={() => {
              fetchCopiedText();
            }}
            style={styles.buttonCopy}
            color="#aa4465"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#001524',
    padding: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    fontSize: 25,
    textAlign: 'left',
    color: '#ffecd1',
  },
  QuotesMark: {
    color: '#ffffff',
    fontSize: 10,
  },
  buttonStyle: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#001524',
  },
});

export default App;
