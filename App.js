import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/screens/SplashScreen';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/Home';
import ChatScreen from './app/screens/Chat';
import Register1 from "./app/screens/RegisterScreen_1";
import Register2 from "./app/screens/RegisterScreen_2"; 
const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen}/>
          <Stack.Screen name="Register1" component={Register1}/>
          <Stack.Screen name="Register2" component={Register2}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
