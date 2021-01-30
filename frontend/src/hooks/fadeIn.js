import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

function useFadeIn() {
  const opacityRef = (useRef < Animated.Value) | (undefined > undefined);

  if (opacityRef.current === undefined)
    opacityRef.current = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacityRef.current, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return opacityRef.current;
}

export { useFadeIn };
