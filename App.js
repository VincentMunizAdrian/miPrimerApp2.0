import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import Navigator from './src/Navigation/Navigator.jsx';
import store from './src/Store/store.js'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Anton': require('./src/Assets/Fonts/Anton/Anton-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}