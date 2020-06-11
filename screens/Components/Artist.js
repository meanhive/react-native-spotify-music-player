import React from "react";
import { View, Text } from "react-native";
import { Card, Image } from "react-native-elements";

export default function Artist({ artist }) {
  if (!artist) return null;
  const { name, followers, genres, images } = artist;
  console.log("artist", artist);
  return (
    <View>
      <Card>
        <Text>Artist Information</Text>
        <Text>Name : {name} </Text>
        <Image
          source={{ uri: images[0] && images[0].url }}
          style={{ width: 100, height: 100 }}
        />
        <Text>Total: {followers.total}</Text>
        <Text>Total: {genres.join(",")}</Text>
      </Card>
    </View>
  );
}
