
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';
import BlogDetail from './screens/BlogDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#7a5a45',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'BlackMango',
    fontSize: 24,
  },
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>

      <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  );
}


export default function App() {
  const [fontsLoaded] = useFonts({
    'BlackMango': require('./assets/fonts/Black-mango-regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowIcon: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarStyle: {
            backgroundColor: '#7a5a45',
            borderTopColor: '#7a5a45',
            paddingBottom: 8,
            height: 72,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'BlackMango',
            fontSize: 18,
            marginTop: -15,
          },
        }}>
        <Tab.Screen name="Shop" component={HomeStack} options={{tabBarIcon: ()=> null,}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


