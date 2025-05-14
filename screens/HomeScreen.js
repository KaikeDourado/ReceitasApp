import React from 'react';
import { Text } from 'react-native';
import { FlatList, StyleSheet, View } from 'react-native';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';

const HomeScreen = ({ navigation }) => {
  const handlePress = (recipe) => {
    navigation.navigate('Detail', { recipe });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>🔥Receitas de Festa Junina.🔥</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeCard recipe={item} onPress={handlePress} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Arial',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fffd9a'
    },
});

export default HomeScreen;
