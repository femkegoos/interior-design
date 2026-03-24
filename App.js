
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { useFonts } from 'expo-font'; 
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';
import BlogDetail from './screens/BlogDetail';

const Stack = createStackNavigator();



export default function App() {
  const [fontsLoaded] = useFonts({
    'BlackMango': require('./assets/fonts/Black-mango-regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
    headerStyle: {
      backgroundColor: '#7a5a45',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'BlackMango',
      fontSize: 24,
    },
  }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


