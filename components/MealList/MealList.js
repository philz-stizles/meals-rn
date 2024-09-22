import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

function MealList({ items }) {
  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
