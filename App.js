import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserRegistrationProvider } from './context/UserRegistrationContext';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/Home';
import ChatScreen from './screens/Chat';
import Register1 from "./screens/Register1";
import Register2 from "./screens/Register2"; 
import EditProfileP from './screens/Profile/P_Profile/editProfileP';
import Username from './screens/Username';
import Preference from './screens/Preference';
import HandlePersonal from './screens/Profile/P_Profile/HandlePersonal';
import HandleBusiness from './screens/Profile/B_Profile/HandleBusiness';
import EditProfileB from './screens/Profile/B_Profile/EditProfileB';
import Field from './screens/Field';
import Popup from './screens/Popup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserRegistrationProvider> 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen}/>
          <Stack.Screen name="Register1" component={Register1}/>
          <Stack.Screen name="Register2" component={Register2}/>
          <Stack.Screen name="EditProfileP" component={EditProfileP}/>
          <Stack.Screen name="EditProfileB" component={EditProfileB}/>
          <Stack.Screen name="Username" component={Username}/>
          <Stack.Screen name="Preference" component={Preference}/>
          <Stack.Screen name="HandlePersonal" component={HandlePersonal}/>
          <Stack.Screen name="HandleBusiness" component={HandleBusiness}/>
          <Stack.Screen name="Field" component={Field}/>
          <Stack.Screen name="Popup" component={Popup}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserRegistrationProvider>
  );
};

export default App;
