import { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data';
import MealList from '../components/MealList/MealList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.indexOf(categoryId)
  );

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find((category) => category.id === categoryId);

    navigation.setOptions({
      title,
    });
  }, [categoryId, navigation]);

  return (
    <MealList items={displayedMeals} />
  );
};

export default MealsOverviewScreen;
