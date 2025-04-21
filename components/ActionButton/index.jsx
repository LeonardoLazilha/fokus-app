import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export const ActionButton = ({ label, isActive, onPress }) => {
  return (
    <Pressable
      style={[
        styles.contextButton,
        isActive && styles.contextButtonActive,
      ]}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{label}</Text>
    </Pressable>
  );
};