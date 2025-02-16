import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

export default function ChatHeader({ chatTitle }) {
  const router = useRouter();

  return (
    <BlurView intensity={100} style={styles.header}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Pressable>
      <View style={styles.headerInfo}>
        <Text style={styles.headerTitle}>{chatTitle}</Text>
        <Text style={styles.headerSubtitle}>Online</Text>
      </View>
      <View style={styles.headerActions}>
        <Pressable style={styles.headerButton}>
          <Ionicons name="videocam" size={24} color="#40E0D0" />
        </Pressable>
        <Pressable style={styles.headerButton}>
          <Ionicons name="call" size={24} color="#40E0D0" />
        </Pressable>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginTop: 25,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  headerButton: {
    padding: 8,
  },
});
