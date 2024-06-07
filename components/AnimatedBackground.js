import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

const AnimatedBackground = ({ children }) => {
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [colorAnim]);

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ff0000', '#0000ff'],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedBackground;
