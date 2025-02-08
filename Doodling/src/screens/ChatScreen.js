import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import MessageInput from '../components/MessageInput';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { id: Date.now().toString(), text: message }]);
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatBubble message={item.text} isSender={true} />}
      />
      <MessageInput onSend={handleSend} />
    </View>
  );
}
