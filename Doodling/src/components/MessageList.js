import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MessageList({ messages }) {
  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' && styles.userMessage]}>
      <View style={[styles.messageBubble, item.sender === 'user' && styles.userBubble]}>
        <Text style={[styles.messageText, item.sender === 'user' && styles.userMessageText]}>
          {item.content}
        </Text>
        <Text style={[styles.timestamp, item.sender === 'user' && styles.userTimestamp]}>
          {item.timestamp}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderMessage}
      keyExtractor={(item) => item.id}
      inverted
      contentContainerStyle={styles.messagesList}
    />
  );
}

const styles = StyleSheet.create({
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    backgroundColor: '#F0F2F5',
    borderRadius: 16,
    padding: 12,
  },
  userBubble: {
    backgroundColor: '#E5F7F5',
  },
  messageText: {
    fontSize: 16,
    color: '#000000',
  },
  userMessageText: {
    color: '#000000',
  },
  timestamp: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  userTimestamp: {
    color: '#666666',
  },
});
