import React, { useState, useEffect } from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet, ViewStyle } from 'react-native';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  const [animation] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const toggleSwitch = () => {
    onToggle(!isOn);
  };

  const interpolateColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ccc', '#4cd137'],
  });

  const circlePosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <Animated.View style={[styles.switchContainer, { backgroundColor: interpolateColor }]}>
        <Animated.View style={[styles.circle, { left: circlePosition }]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 2,
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
    position: 'absolute',
  },
});

export default ToggleSwitch;
