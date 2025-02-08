import React from 'react';
import { View, Button } from 'react-native';
import { Switch } from '../components/switch';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
      <Switch />
    </View>
  );
}
