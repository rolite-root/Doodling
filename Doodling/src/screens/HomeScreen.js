import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Chats');
  const tabs = ['Chats', 'Updates', 'Communities', 'Calls'];
  
  const handleCamera = () => {
    navigation.navigate('CameraScreen');
  };

  const handleFeed = () => {
    navigation.navigate('Feed');
  };

  const handleChat = () => {
    navigation.navigate('Chat');
  };

  const handleMenu = () => {
    navigation.navigate('MenuScreen');
  };

  const handleNewChat = () => {
    navigation.navigate('NewChat');
  };
  const mockChats = Array.from({ length: 2575 }, (_, index) => ({
    id: index.toString(),
    name: `Contact ${index + 1}`,
    message: 'Last message preview here...',
    time: '9:12 AM',
  }));

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>Doodling</Text>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#aaa"
          style={styles.searchBar}
        />
        <TouchableOpacity onPress={handleCamera} style={styles.iconButton}>
          <Icon name="camera-alt" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMenu} style={styles.iconButton}>
          <Icon name="menu" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleChat} style={styles.chatItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.avatar}
            />
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.message}</Text>
            </View>
            <Text style={styles.chatTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity onPress={handleNewChat} style={styles.floatingButton}>
        <Icon name="add" size={30} color="#ffffff" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={styles.navItem}
          >
            <Icon name={selectedTab === tab ? "radio-button-checked" : "radio-button-unchecked"} size={24} color="#ffffff" />
            <Text
              style={[
                styles.navText,
                selectedTab === tab && styles.activeNavText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#075E54',
  },
  appTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 10 },
  searchBar: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  iconButton: {
    marginLeft: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  chatDetails: { flex: 1 },
  chatName: { fontSize: 16, fontWeight: 'bold' },
  chatMessage: { fontSize: 14, color: '#777' },
  chatTime: { fontSize: 12, color: '#999' },
  floatingButton: {
    backgroundColor: '#25D366',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 80,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#075E54',
    paddingVertical: 10,
  },
  navItem: { alignItems: 'center' },
  navText: { color: '#fff', fontSize: 12, marginTop: 2 },
  activeNavText: { fontWeight: 'bold', color: '#e0e0e0' },
});

export default HomeScreen;
