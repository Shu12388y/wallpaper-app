import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "For You",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Accountu",
        }}
      />
    </Tabs>
  );
};

// slot is similar to children prop in nextjs
export default Layout;
