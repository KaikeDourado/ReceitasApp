import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => (
  <TouchableOpacity onPress={() => onPress(recipe)} style={styles.card}>
    <Text style={styles.title}>{recipe.title}</Text>
    <Text style={styles.description}>{recipe.description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default RecipeCard;

