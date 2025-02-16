import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ChatHeader from '../components/ChatHeader';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const MOCK_MESSAGES = [
  { id: '1', content: 'Hey, how are you?', timestamp: '11:30 AM', sender: 'other', status: 'read' },
  { id: '2', content: "I'm doing great! How about you?", timestamp: '11:31 AM', sender: 'user', status: 'read' },
  { id: '3', content: 'Pretty good! Want to grab coffee later?', timestamp: '11:32 AM', sender: 'other', status: 'read' },
];

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const [messages, setMessages] = useState(MOCK_MESSAGES);

  const handleSend = (content) => {
    const newMessage = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'user',
      status: 'sent',
    };
    setMessages([newMessage, ...messages]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader chatTitle={`Chat ${id}`} />
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
});
