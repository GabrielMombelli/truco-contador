import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [countNos, setCountNos] = useState(0)
  const [countEles, setCountEles] = useState(0)

  const [vitoriasNos, setVitoriasNos] = useState(0)
  const [vitoriasEles, setVitoriasEles] = useState(0)

  const verificarVitoria = (nos, eles) => {
    if (nos >= 12) {
      setVitoriasNos(vitoriasNos + 1)
      setCountNos(0)
      setCountEles(0)
      return true
    }

    if (eles >= 12) {
      setVitoriasEles(vitoriasEles + 1)
      setCountNos(0)
      setCountEles(0)
      return true
    }

    return false
  }

  const adicionarPontos = (time, pontos) => {
    if (time === 'nos') {
      const novo = countNos + pontos
      if (!verificarVitoria(novo, countEles)) {
        setCountNos(novo)
      }
    } else {
      const novo = countEles + pontos
      if (!verificarVitoria(countNos, novo)) {
        setCountEles(novo)
      }
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.placares}>

        <View style={styles.time}>
          <Text style={styles.titulo}>Nós</Text>
          <Text style={styles.textoContador}>{countNos}</Text>
          <Text style={styles.vitorias}>Vitórias: {vitoriasNos}</Text>
          <View style={styles.botaoContador}>
            <View style={styles.botao}>
              <Button
                color="#009e08"
                title='+'
                onPress={() => adicionarPontos('nos', 1)}
              />
            </View>

            <View style={styles.botao}>
              <Button
                color="#c20000"
                title='-'
                onPress={() => setCountNos(Math.max(0, countNos - 1))}
              />
            </View>
          </View>

          <View style={styles.apostas}>
            <View style={styles.botaoAposta}>
              <Button color="#015b61" title="Truco (3)" onPress={() => adicionarPontos('nos', 3)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color="#022363" title="Seis (6)" onPress={() => adicionarPontos('nos', 6)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color="#4f0263" title="Nove (9)" onPress={() => adicionarPontos('nos', 9)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color="#630102" title="Doze (12)" onPress={() => adicionarPontos('nos', 12)} />
            </View>
          </View>
        </View>

        <View style={styles.time}>
          <Text style={styles.titulo}>Eles</Text>
          <Text style={styles.textoContador}>{countEles}</Text>
          <Text style={styles.vitorias}>Vitórias: {vitoriasEles}</Text>
          <View style={styles.botaoContador}>
            <View style={styles.botao}>
              <Button
                color="#009e08"
                title='+'
                onPress={() => adicionarPontos('eles', 1)}
              />
            </View>

            <View style={styles.botao}>
              <Button
                color="#c20000"
                title='-'
                onPress={() => setCountEles(Math.max(0, countEles - 1))}
              />
            </View>
          </View>
          <View style={styles.apostas}>
            <View style={styles.botaoAposta}>
              <Button color="#015b61" title="Truco (3)" onPress={() => adicionarPontos('eles', 3)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color="#022363" title="Seis (6)" onPress={() => adicionarPontos('eles', 6)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color="#4f0263" title="Nove (9)" onPress={() => adicionarPontos('eles', 9)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color="#630102" title="Doze (12)" onPress={() => adicionarPontos('eles', 12)} />
            </View>
          </View>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  )
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
    width: 180,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  textoContador: {
    fontSize: 60,
    marginTop: 20,
  },
  vitorias: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
  },
  botaoContador: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
  },
  botao: {
    width: 80,
  },
  apostas: {
    marginTop: 20,
    gap: 10,
  },
  botaoAposta: {
    width: 180,
  },
})