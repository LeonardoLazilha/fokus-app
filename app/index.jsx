import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./pomodoro.png')} style={styles.image}/>
      <View style={styles.actions}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  image: {
    width: 300,
    height: 300,
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480'
  }
})