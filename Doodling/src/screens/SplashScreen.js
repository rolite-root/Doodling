import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useFonts } from 'expo-font';

const SplashScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'BonaNovaSC-Bold': require('../../assets/fonts/YoungSerif-Regular.ttf'),
    'CaesarDressing-Regular': require('../../assets/fonts/CaesarDressing-Regular.ttf'),
  });

  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    if (fontsLoaded) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        navigation.replace('Login');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.doodling}>
          <Text style={styles.d}>D</Text>
          <Text style={styles.oo}>OO</Text>
          <Text style={styles.d}>DLING</Text>
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  d: {
    fontWeight: '700',
    fontFamily: 'YoungSerif-Regular',
  },
  oo: {
    fontFamily: 'CaesarDressing-Regular',
  },
  doodling: {
    fontSize: 40,
    letterSpacing: 1,
    lineHeight: 60,
    color: '#ffcaca',
    textAlign: 'center',
    width: '100%',
  },
  container: {
    backgroundColor: '#040720',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
