import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [countNos, setCountNos] = useState(0)
  const [countEles, setCountEles] = useState(0)
  
  return (
    <View style={styles.container}>

      <View style={styles.placares}>

        <View style={styles.time}>
          <Text style={styles.titulo}>Nós</Text>
          <Text style={styles.textoContador}>{countNos}</Text>

          <View style={styles.botaoContador}>
            <View style={styles.botao}>
              <Button color="#009e08" title='+' onPress={() => setCountNos(countNos + 1)} />
            </View>

            <View style={styles.botao}>
              <Button color="#c20000" title='-' onPress={() => setCountNos(countNos - 1)} />
            </View>
          </View>
        </View>

        <View style={styles.time}>
          <Text style={styles.titulo}>Eles</Text>
          <Text style={styles.textoContador}>{countEles}</Text>

          <View style={styles.botaoContador}>
            <View style={styles.botao}>
              <Button color="#009e08" title='+' onPress={() => setCountEles(countEles + 1)} />
            </View>

            <View style={styles.botao}>
              <Button color="#c20000" title='-' onPress={() => setCountEles(countEles - 1)} />
            </View>
          </View>
        </View>

      </View>

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

  placares: {
    flexDirection: 'row',
    gap: 60,
  },

  time: {
    alignItems: 'center',
  },

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  textoContador: {
    fontSize: 60,
    marginTop: 20,
  },

  botaoContador: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
  },

  botao: {
    width: 80,
  },
});