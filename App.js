import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MARCADOR</Text>

        <Text style={styles.textoContador}>{count}</Text>

      <View style={styles.botaoContador}>
        <View style={styles.botaoMais}>
          <Button color="#009e08" title='+' onPress={() => setCount(count + 1)}/>
        </View>
        <View style={styles.botaoMais}>
          <Button color="#c20000" title='-' onPress={() => setCount(count - 1)}/>
        </View>
      </View>

      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  textoContador: {
    fontSize: 60,
    marginTop: 30,
  },
  botaoContador: {
    flexDirection:'row',
    marginTop:60,
    gap:20,
  },
  botaoMais: {
    width: 80,
  },
  botaoMenos: {
    width: 80,
  }
});
