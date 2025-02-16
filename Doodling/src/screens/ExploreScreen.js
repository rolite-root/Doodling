import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const posts = [
  {
    id: '1',
    user: 'Sushant',
    role: 'Founder@DOODLING',
    date: 'Feb 13, 2025',
    hashtag: '#questions',
    title: 'Question of the Day',
    content: 'How do you know you have found the app you wanted?',
    likes: 381,
    comments: 3020,
  },
  {
    id: '2',
    user: 'Pavni',
    role: 'AI Engineer@OPENAI',
    date: '12h',
    hashtag: '#pic & post',
    title: 'Love my true self',
    image: require('../../assets/images/sample.jpeg'), 
  },
];

export default function ExplorePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DOODLING</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.username}>{item.user}</Text>
            <Text style={styles.role}>{item.role} • {item.date}</Text>
            <Text style={styles.hashtag}>{item.hashtag}</Text>
            <Text style={styles.title}>{item.title}</Text>
            {item.content && <Text style={styles.content}>{item.content}</Text>}
            {item.image && <Image source={item.image} style={styles.postImage} />}
            <View style={styles.postActions}>
              <Ionicons name="heart-outline" size={20} color="#FFFFFF" /><Text>{item.likes}</Text>
              <Ionicons name="chatbubble-outline" size={20} color="#FFFFFF" /><Text>{item.comments}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.bottomNav}>
        <Pressable onPress={() => router.push('/favourites')}><Ionicons name="heart" size={24} color="#FFFFFF" /></Pressable>
        <Pressable onPress={() => router.push('/search')}><Ionicons name="search" size={24} color="#FFFFFF" /></Pressable>
        <Pressable onPress={() => router.push('/chats')}><Ionicons name="chatbubbles" size={24} color="#FFFFFF" /></Pressable>
        <Pressable><Ionicons name="planet" size={24} color="#40E0D0" /></Pressable>
        <Pressable onPress={() => router.push('/calls')}><Ionicons name="call" size={24} color="#FFFFFF" /></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#545455', padding: 16, paddingTop: 48 },
  header: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16 },
  postCard: { backgroundColor: '#111', padding: 16, borderRadius: 8, marginBottom: 16 },
  username: { color: '#FFFFFF', fontWeight: 'bold' },
  role: { color: '#888', fontSize: 12 },
  hashtag: { color: '#40E0D0', fontSize: 14, marginTop: 4 },
  title: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginVertical: 4 },
  content: { color: '#DDD' },
  postImage: { width: '100%', height: 200, borderRadius: 8, marginTop: 8 },
  postActions: { flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 12 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#222' },
});
