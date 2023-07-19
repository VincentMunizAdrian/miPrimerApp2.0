// import { 
//   StyleSheet,
//   // View,
//   // SafeAreaView,
//   // Platform,
//   // StatusBar
// } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator.jsx';
// import { useState } from 'react';
// import Header from './src/Components/Header.jsx';
// import ItemListCategory from './src/Screens/ItemListCategory.jsx';
// import Home from './src/Screens/Home.jsx';
// import ItemDetail from './src/Screens/ItemDetail.jsx';

export default function App() {
  // const [categoryChoice, setCategoryChoice] = useState("")
  // const [objectChoise, setObjectChoice] = useState("")

  const [fontsLoaded] = useFonts({
    'Anton': require('./src/Assets/Fonts/Anton/Anton-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
    // <SafeAreaView style = {styles.container}>
    //   <Header/>
    //   <StackActions.Navigator>

    //   </StackActions.Navigator>
    //   {/* {
    //     categoryChoice ? 
    //     <ItemListCategory
    //       category={categoryChoice}
    //       setCategory={setCategoryChoice}
    //       setObjectChoice={setObjectChoice}
    //     /> :
    //     objectChoise ? 
    //     <ItemDetail
    //       idChoice={objectChoise}
    //       setObjectChoice={setObjectChoice}
    //     /> :
    //     <Home
    //       setCategoryChoice={setCategoryChoice}
    //     />
    //   } */}
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   paddingTop: Platform.OS ==="android" ? StatusBar.currentHeight : 0
//   // },
// })