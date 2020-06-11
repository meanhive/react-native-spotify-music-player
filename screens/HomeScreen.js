import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Card, Button, Header, Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import Artist from "./Components/Artist";
import PlayScreen from "./Components/PlayScreen";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class HomeScreen extends Component {
  state = { tracks: [], artist: null, artistName: null };

  componentDidMount() {
    this.searchArtist("Ilayaraja");
  }

  searchArtist = (artistQuery) => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.artists.items.length > 0) {
          const artist = result.artists.items[0];
          this.setState({ artist });
          console.log("state", this.state.artist);

          // api to call top tracks
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((result) => {
              console.log(result.tracks);
              this.setState({ tracks: result.tracks });
            })
            .catch((error) => console.log(error.message));
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <ScrollView>
        <Header
          leftComponent={
            <AntDesign
              name="infocirlce"
              size={24}
              color="white"
              onPress={() => this.props.navigation.navigate("Details")}
            />
          }
          centerComponent={{ text: "Home", style: { color: "#fff" } }}
          rightComponent={
            <AntDesign
              name="checkcircle"
              size={24}
              color="white"
              onPress={() => this.props.navigation.navigate("Contact")}
            />
          }
        />
        <Card>
          <Input
            placeholder="Enter Artist/Album Name"
            onChangeText={(value) => this.setState({ artistName: value })}
          />
          <Button
            title="Search"
            onPress={() => this.searchArtist(this.state.artistName)}
          />
        </Card>

        <Artist artist={this.state.artist} />
        <Header
          centerComponent={{ text: "Tracks", style: { color: "#fff" } }}
        />
        <PlayScreen
          tracks={this.state.tracks}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}

export default HomeScreen;
