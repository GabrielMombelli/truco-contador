import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [countNos, setCountNos] = useState(0)
  const [countEles, setCountEles] = useState(0)

  const adicionarPontos = (time, pontos) => {
    if (time === 'nos') {
      setCountNos(countNos + pontos)
    } else {
      setCountEles(countEles + pontos)
    }
  }

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

          <View style={styles.apostas}>
          <View style={styles.botaoAposta}>
            <Button color={"#015b61"} title="Truco (3)" onPress={() => adicionarPontos('nos', 3)} />
          </View>

          <View style={styles.botaoAposta}>
            <Button color={"#022363"} title="Seis (6)" onPress={() => adicionarPontos('nos', 6)} />
          </View>

          <View style={styles.botaoAposta}>
            <Button color={"#4f0263"} title="Nove (9)" onPress={() => adicionarPontos('nos', 9)} />
          </View>

          <View style={styles.botaoAposta}>
            <Button color={"#630102"} title="Doze (12)" onPress={() => adicionarPontos('nos', 12)} />
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
          <View style={styles.apostas}>
            <View style={styles.botaoAposta}>
              <Button color={"#015b61"} title="Truco (3)" onPress={() => adicionarPontos('nos', 3)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color={"#022363"} title="Seis (6)" onPress={() => adicionarPontos('nos', 6)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color={"#4f0263"} title="Nove (9)" onPress={() => adicionarPontos('nos', 9)} />
            </View>

            <View style={styles.botaoAposta}>
              <Button color={"#630102"} title="Doze (12)" onPress={() => adicionarPontos('nos', 12)} />
            </View>
</View>
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
  apostas: {
    marginTop: 20,
    gap: 10,
  },
  botaoAposta: {
  width: 180,
},
});