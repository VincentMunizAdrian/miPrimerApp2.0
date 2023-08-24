import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import Navigator from './src/Navigation/Navigator.jsx';
import store from './src/Store/store.js'
import { useEffect } from 'react';
import { init } from './src/SQLite/index.js';
import { font } from './src/Assets/Fonts/index.js';

export default function App() {

  useEffect(()=> {
    init()
      .then((result)=> {
      })
      .catch(err => {
    })
  }, [])

  const [fontsLoaded] = useFonts(font);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}