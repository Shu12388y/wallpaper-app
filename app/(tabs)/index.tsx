import { View, Text, Button } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>Profile Page</Text>
    </View>
  );
}


export default function () {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}
