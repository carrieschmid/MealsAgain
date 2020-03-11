import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: "white"
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Meals!",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};

const MealsFavTabNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});

export default createAppContainer(MealsFavTabNavigator);
