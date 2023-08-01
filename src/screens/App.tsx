import React from 'react';
import { View, Text } from 'react-native';
import styles from '../global/style'; // Importando o estilo criado anteriormente

const MyComponent = () => {
  return (
    <View style={styles.homeTela}>
      <Text style={styles.homeText}>Meu texto</Text>
    </View>
  );
};

export default MyComponent;
