import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import io from 'socket.io-client';
import ChatHeader from '../components/ChatHeader';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import { initDB, saveMessage, loadMessages } from '../services/db';
import { encryptMessage, decryptMessage } from '../services/encryption';

// Socket.io connection (change URL for production)
const socket = io('http://localhost:3000');

export default function ChatScreen() {
  const { id } = useLocalSearchParams(); // Chat ID or recipient identifier
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    initDB(); // Initialize SQLite database
    loadChatHistory();
    
    socket.on('receiveMessage', async (encryptedMessage) => {
      const decryptedContent = await decryptMessage(encryptedMessage.content, 'your-secret-key');
      const receivedMessage = {
        id: encryptedMessage.id,
        content: decryptedContent,
        timestamp: encryptedMessage.timestamp,
        sender: 'other',
        status: 'received',
      };
      setMessages((prevMessages) => [receivedMessage, ...prevMessages]);
      saveMessage(receivedMessage); // Save to local SQLite
    });

    return () => socket.off('receiveMessage');
  }, []);

  const loadChatHistory = async () => {
    const chatHistory = await loadMessages();
    setMessages(chatHistory);
  };

  const handleSend = async (content) => {
    const encryptedContent = await encryptMessage(content, 'your-secret-key');
    
    const newMessage = {
      id: Date.now().toString(),
      content: content, // Store plaintext for UI
      encryptedContent, // Send encrypted version
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'user',
      status: 'sent',
    };

    setMessages([newMessage, ...messages]);
    saveMessage(newMessage); // Save locally
    socket.emit('sendMessage', { id: newMessage.id, content: encryptedContent, timestamp: newMessage.timestamp });
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
