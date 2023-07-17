import Header from './src/Components/Header.jsx';
import { 
  StyleSheet,
  View
} from 'react-native';
import ItemListCategory from './src/Screens/ItemListCategory.jsx';
import { useFonts } from 'expo-font';
import Home from './src/Screens/Home.jsx';
import { useState } from 'react';
import ItemDetail from './src/Screens/ItemDetail.jsx';

export default function App() {
  const [categoryChoice, setCategoryChoice] = useState("")
  const [objectChoise, setObjectChoice] = useState("")

  const [fontsLoaded] = useFonts({
    'Anton': require('./src/Assets/Fonts/Anton/Anton-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style = {styles.container}>
      <Header/>
      {
        categoryChoice ? 
        <ItemListCategory
          category={categoryChoice}
          setCategory={setCategoryChoice}
          setObjectChoice={setObjectChoice}
        /> :
        objectChoise ? 
        <ItemDetail/> :
        <Home
          setCategoryChoice={setCategoryChoice}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})