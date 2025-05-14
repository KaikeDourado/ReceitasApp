import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const DetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <View style={styles.list}>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.item}>
            {ingredient}
          </Text>
        ))}
      </View>
      <Text style={styles.subtitle}>Modo de Preparo:</Text>
      <View style={styles.list}>
        {recipe.instructions.map((instruction, index) => (
          <Text key={index} style={styles.item}>
            {instruction}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
  },
  list: {
    marginTop: 8,
  },
  item: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
});

export default DetailScreen;
