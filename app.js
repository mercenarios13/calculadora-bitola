import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [corrente, setCorrente] = useState('');
  const [distancia, setDistancia] = useState('');
  const [bitola110, setBitola110] = useState(null);
  const [bitola220, setBitola220] = useState(null);

  const calcularBitola = () => {
    const i = parseFloat(corrente);
    const d = parseFloat(distancia);

    if (isNaN(i) || isNaN(d)) {
      alert('Por favor, insira valores válidos para corrente e distância.');
      return;
    }

    const b110 = (2 * i * d) / 294.64;
    const b220 = (2 * i * d) / 510.4;

    setBitola110(b110.toFixed(2));
    setBitola220(b220.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bitola de Fios</Text>

      <Text>Corrente (A):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={corrente}
        onChangeText={setCorrente}
        placeholder="Ex: 10"
      />

      <Text>Distância (m):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
        placeholder="Ex: 15"
      />

      <Button title="Calcular Bitola" onPress={calcularBitola} />

      {bitola110 && bitola220 && (
        <View style={styles.result}>
          <Text>Bitola para 110V: {bitola110} mm²</Text>
          <Text>Bitola para 220V: {bitola220} mm²</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#d1f0d1',
    borderRadius: 5,
  },
});
