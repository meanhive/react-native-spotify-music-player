import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Card, Button, Header } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

class DetailsScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Header
          leftComponent={
            <AntDesign
              name="back"
              size={24}
              color="white"
              onPress={() => this.props.navigation.navigate("Home")}
            />
          }
          centerComponent={{ text: "Details", style: { color: "#fff" } }}
        />
        <Card>
          <Text>Details</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default DetailsScreen;
