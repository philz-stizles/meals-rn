import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList/MealList';
// import { useFavorites } from '../store/context/favorites-context';
import { MEALS } from '../data';

const FavoritesScreen = () => {
  // const { ids: favoriteMealIds } = useFavorites();
  const favoriteMealIds = useSelector((state) => state.favorites.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
