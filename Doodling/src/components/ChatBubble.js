import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubble({ message, isSender }) {
  return (
    <View style={[styles.bubble, isSender && styles.sender]}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: { padding: 10, backgroundColor: '#ddd', borderRadius: 5 },
  sender: { backgroundColor: '#aaf' },
});
