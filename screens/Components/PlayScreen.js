import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewPropTypes,
} from "react-native";
import { Card, Button, Header, Input, Image } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import SoundPlayer from "react-native-sound-player";

export default function PlayScreen(props) {
  if (!props.tracks) return null;
  console.log("playscreen", props.tracks);

  return (
    <View>
      {props.tracks.map((item) => {
        const playlistSample = [
          { key: item.id, title: item.name, url: item.preview_url },
        ];
        return (
          <Card>
            <Text> {item.name} </Text>
            <Image
              source={{ uri: item.album.images[0].url }}
              style={{ width: 50, height: 50 }}
            />
            <Text
              onPress={() => {
                props.navigation.navigate("Player");
              }}
            >
              Play
            </Text>
          </Card>
        );
      })}
    </View>
  );
}
