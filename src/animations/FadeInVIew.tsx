import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

type TFadeInViewProps = PropsWithChildren<{style?: ViewStyle}>;

const FadeInView: React.FC<TFadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
