import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "../screens/ModalScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import Player from "../screens/Components/Player";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
      <MainStack.Screen name="Contact" component={ContactScreen} />
      <MainStack.Screen name="Player" component={Player} />
    </MainStack.Navigator>
  );
}

class NavigationControl extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <MainStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default NavigationControl;
