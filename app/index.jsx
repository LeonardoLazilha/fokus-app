import { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FokusButton } from "../components/FokusButton";


const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('./pomodoro.png'),
    label: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('./short.png'),
    label: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('./long.png'),
    label: 'Pausa Longa'
  }
]

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} style={styles.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <Pressable 
              key={p.id}
              style={[styles.contextButton, timerType.id === p.id && styles.contextButtonActive]}
              onPress={() => setTimerType(p)}
            >
              <Text style={styles.contextButtonText}>{p.label}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>{formatTime(timerType.initialValue)}</Text>
        <FokusButton 
          isPlaying={isPlaying}
          onPress={() => setIsPlaying(!isPlaying)}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto de aprendizado desenvolvido por</Text>
        <Text style={styles.footerText}>Leonardo Lazilha</Text>
      </View>
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
    borderColor: '#144480',
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  },
  context: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  contextButtonText: {
    padding: 8,
    color: '#fff',
    fontSize: 12.5,
    fontWeight: 700
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
    padding: 8
  },
})