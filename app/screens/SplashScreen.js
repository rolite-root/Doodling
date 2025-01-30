import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [fadeAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.logo, { opacity: fadeAnim }]}>
                Pitch
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default SplashScreen;