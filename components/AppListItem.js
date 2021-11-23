import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

function AppListItem({ id, chatName, enterChat }) {
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar rounded source={{ uri: "https://i.pravatar.cc/300" }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fuga iure porro magni cumque nisi, harum amet fugit dolorem recusandae
          molestias error omnis praesentium, cupiditate corporis dolores nobis,
          minima incidunt.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppListItem;
