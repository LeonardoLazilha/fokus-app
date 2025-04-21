import { Text, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

export function FokusButton({ isPlaying, onPress }) {
  return (
    <Pressable 
      style={styles.button}
      onPress={onPress}
    >
      <FontAwesome 
        name={isPlaying ? "pause" : "play"} 
        size={16} 
        color="#021123" 
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>
        {isPlaying ? "Pausar" : "Começar"}
      </Text>
    </Pressable>
  );
} 