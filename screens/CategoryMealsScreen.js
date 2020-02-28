import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
          // props.navigation.push("Categories");
          //push useful to go to a page you're already on, change contents on same screen
          //.replace() takes you to screen and empties stack, no back button
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
          //pop() pops current button off stack, when you're in stack
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
