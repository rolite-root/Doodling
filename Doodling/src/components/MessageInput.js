import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      style={styles.inputContainer}>
      <Pressable style={styles.attachButton}>
        <Ionicons name="add-circle" size={24} color="#40E0D0" />
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Pressable onPress={handleSend} style={styles.sendButton}>
        <Ionicons name={message.trim() ? 'send' : 'mic'} size={24} color="#40E0D0" />
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  attachButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    maxHeight: 100,
  },
  sendButton: {
    padding: 8,
  },
});
