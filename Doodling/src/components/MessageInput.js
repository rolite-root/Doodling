import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <View>
      <TextInput value={message} onChangeText={setMessage} placeholder="Type a message" />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
}
