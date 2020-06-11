import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
  Octicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

export const ICON_THROUGH_EARPIECE = () => {
  return <SimpleLineIcons name="earphones" size={24} color="black" />;
};

export const ICON_THROUGH_SPEAKER = () => {
  return <Feather name="speaker" size={24} color="black" />;
};

export const ICON_PLAY_BUTTON = () => {
  return <AntDesign name="play" size={24} color="black" />;
};

export const ICON_PAUSE_BUTTON = () => {
  return <AntDesign name="pausecircle" size={24} color="black" />;
};

export const ICON_STOP_BUTTON = () => {
  return <FontAwesome name="stop" size={24} color="black" />;
};

export const ICON_FORWARD_BUTTON = () => {
  return <AntDesign name="forward" size={24} color="black" />;
};

export const ICON_BACK_BUTTON = () => {
  return <AntDesign name="banckward" size={24} color="black" />;
};

export const ICON_LOOP_ALL_BUTTON = () => {
  return <Foundation name="loop" size={24} color="black" />;
};

export const ICON_LOOP_ONE_BUTTON = () => {
  return (
    <MaterialCommunityIcons name="backup-restore" size={24} color="black" />
  );
};

export const ICON_MUTED_BUTTON = () => {
  return <Octicons name="mute" size={24} color="black" />;
};

export const ICON_UNMUTED_BUTTON = () => {
  return <Octicons name="unmute" size={24} color="black" />;
};

export const ICON_TRACK_1 = () => {
  return <MaterialIcons name="audiotrack" size={24} color="black" />;
};

export const ICON_THUMB_1 = () => {
  return <Entypo name="thumbs-up" size={24} color="black" />;
};

export const ICON_THUMB_2 = () => {
  return <Entypo name="thumbs-up" size={24} color="black" />;
};
