import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
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
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen"
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
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

export default createAppContainer(MealsFavTabNavigator);

// import React from "react";
// import {
//   createStackNavigator,
//   createAppContainer,
//   createBottomTabNavigator,
//   createDrawerNavigator
// } from "react-navigation";
// import { Ionicons } from "@expo/vector-icons";
// // import createMaterialBottomTabNavigator for Andorid only, this is also the reason for making a tabScreenConfig
// // import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import CategoriesScreen from "../screens/CategoriesScreen";
// import CategoryMealsScreen from "../screens/CategoryMealsScreen";
// import MealDetailScreen from "../screens/MealDetailScreen";
// import FavoritesScreen from "../screens/FavoritesScreen";
// import FiltersScreen from "../screens/FiltersScreen";
// import Colors from "../constants/Colors";

// const defaultStackNavOptions = {
//   headerStyle: {
//     backgroundColor: Colors.primaryColor
//   },
//   headerTintColor: "white"
// };

// const MealsNavigator = createStackNavigator(
//   {
//     Categories: {
//       screen: CategoriesScreen
//     },
//     CategoryMeals: {
//       screen: CategoryMealsScreen
//     },
//     MealDetail: MealDetailScreen
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );

// const FavNavigator = createStackNavigator(
//   {
//     Favorites: FavoritesScreen,
//     MealDetail: MealDetailScreen
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );

// const tabScreenConfig = {
//   Meals: {
//     screen: MealsNavigator,
//     navigationOptions: {
//       tabBarLabel: "Meals!",
//       tabBarIcon: (tabInfo) => {
//         return (
//           <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
//         );
//       }
//     }
//   },
//   Favorites: {
//     screen: FavNavigator,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
//       }
//     }
//   }
// };

// const MealsFavTabNavigator = createBottomTabNavigator(
//   {
//     Meals: {
//       screen: MealsNavigator,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return (
//             <Ionicons
//               name="ios-restaurant"
//               size={25}
//               color={tabInfo.tintColor}
//             />
//           );
//         }
//       }
//     },
//     Favorites: {
//       screen: FavoritesScreen,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return (
//             <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
//           );
//         }
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: Colors.accentColor
//     }
//   }
// );

// // const MainNavigator = createStackNavigator({
// //   MealsFavs: MealsFavTabNavigator,
// //   Filters:
// // });

// // const MainNavigator = createDrawerNavigator;
// export default createAppContainer(MealsFavTabNavigator);
