import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator.jsx';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Anton': require('./src/Assets/Fonts/Anton/Anton-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}