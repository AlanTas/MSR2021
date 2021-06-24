const [data, setData] = useState('');

const storeData = async (value) => {
  try {
    setData(value);
    await AsyncStorage.setItem('locatie', value);
  } catch (e) {
    console.log(e);
  }
};

const getInfo = async () => {
  const res = await AsyncStorage.getItem('locatie');
  setData(res);
};

useEffect(() => {
  getInfo();
}, []);
