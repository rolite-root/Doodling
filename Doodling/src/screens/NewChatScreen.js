import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function NewChatScreen({ navigation }) {
    const contacts = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
        { id: '3', name: 'Charlie' }
    ];

    const startChat = (contact) => {
        console.log(`Starting chat with ${contact.name}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Chat</Text>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => startChat(item)}>
                        <Text style={styles.contact}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.nearbyTitle}>Nearby Contacts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
    header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
    contact: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#CCC' },
    nearbyTitle: { fontSize: 16, marginTop: 24, fontWeight: 'bold' }
});